// NOTA:
// Para que en este componente funcione como un ReactClientComponent entonces
// deberiamos usar la directiva client al llamar al componente
import { useEffect, useRef, useState } from "react"
import { usePlayerStore } from "@/store/playerStore"
import { Slider } from "@/components/Slider"

export const Play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
)

export const Pause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>
)

export const VolumeSilence = () => (
  <svg fill="currentColor" role="presentation" height="24" width="24" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
)

export const Volume = () => (
  <svg fill="currentColor" role="presentation" height="24" width="24" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
)

export const VolumeControl = () => {

  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previousVolumeRef = useRef(volume)

  const isVolumeSilenced = volume < 0.1

  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
  }

  return (
    <div className="w-full flex items-center justify-center gap-x-2 text-white">
      <button onClick={handleClickVolumen}>
        {volume < 0.1 ? <VolumeSilence /> : <Volume />}
      </button>
      <Slider
        className="w-full h-1"
        defaultValue={[100]}
        value={[volume * 100]}
        max={100}
        min={0}
        step={1}
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100 // ya que el volumen va de 0 a 1 
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}


export const CurrentSong = ({ image, title, artists }) => {
  return (
    <div
      className={
        `flex items-center gap-5 relative overflow-hidden w-[200px]`
      }
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block">
          {title}
        </h3>
        <span className="text-xs opacity-80">
          {artists?.join(', ')}
        </span>
      </div>
    </div>
  )
}

export const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0) // en segundos ejem 128 -> 2:08

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime)
  }

  useEffect(() => {
    // el elemento audio tiene un evento que detecta cada vez que se actualiza el tiempo
    audio.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const duration = audio?.current?.duration ?? 0

  const formatTime = time => {
    if (time === 0) return `0:00`

    const seconds = Math.floor(time % 60)
    const minutes = Math.floor(time / 60)

    // padStart le decimos 2 longitud minima y '0' como va rellenar
    return `${minutes}:${seconds.toString().padStart(2,'0')}`
  }

  return(
    <div className="flex gap-4 text-white items-center text-xs opacity-50">
      <span>{formatTime(currentTime)}</span>
      <Slider
        className="[width:400px] h-1"
        defaultValue={[0]}
        value={[currentTime]}
        max={audio?.current?.duration ?? 0}
        min={0}
        step={1}
        onValueChange={(value) => {
          audio.current.currentTime = value
        }}
      />
      <span>
        { duration ? formatTime(duration) : '0:00' }
      </span>
    </div>
  )
}

export function Player() {
  // const [playing, setPlaying] = useState(false)
  const { playing, setPlaying, currentMusic, volume } = usePlayerStore(state => state)

  const audioRef = useRef()

  useEffect(() => {
    playing
      ? audioRef.current.play()
      : audioRef.current.pause()
  }, [playing])

  useEffect(() => {
    // audioRef.current.src = `/music/1/01.mp3`
    const { song, playlist, songs } = currentMusic
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`
      audioRef.current.src = src
      audioRef.current.volume = volume
      if (playing) {
        audioRef.current.play()
      }
    }
  }, [currentMusic])

  const handleClick = () => {
    setPlaying(!playing)
  }

  useEffect(() => {
    audioRef.current.volume = volume
  }, [volume])

  return (
    <div className="flex justify-between w-full px-4 pt-2 text-white">
      <div>
        <CurrentSong {...currentMusic.song} />
      </div>
      {/* Reproductor */}
      <div className="h-full flex flex-col gap-1 justify-center items-center text-black">
        <button className="bg-white rounded-full p-1"
          onClick={handleClick}
        >
          {
            playing ? <Pause /> : <Play />
          }
        </button>
        <SongControl audio={audioRef} />
      </div>

      <div className="w-[120px] flex items-center">
        <VolumeControl />
      </div>
      <audio ref={audioRef}></audio>
    </div>
  )
}