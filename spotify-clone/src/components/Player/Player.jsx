import "./sliderVolume.css"
import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"

export const Play = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" /></svg>
)

export const Pause = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /><path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" /></svg>
)

export const VolumeSilence = () => (
  <svg fill="currentColor" role="presentation" height="24" width="24" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16" ><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
)

export const Volume = () => (
  <svg fill="currentColor" role="presentation" height="24" width="24" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
)

export const Next = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" xlmns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
)

export const Previous = () => (
  <svg width="20" height="20" viewBox="0 0 16 16" xlmns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
)


function CurrentSong({ title, artists, image }) {
  return (
    <article className="flex flex-row gap-2 items-center w-[320px]">
      <picture className="w-16 h-16 rounded-md bg-zinc-800 overflow-hidden relative">
        {image && <img className="w-full h-full aspect-square object-cover" src={image} />}
      </picture>
      <div className="content flex flex-col gap-1">
        {
          title ? <h4 className="text-xl font-normal text-slate-100">{title}</h4>
            : <h4 className="w-40 h-4 rounded-sm bg-zinc-800"></h4>
        }
        {
          artists ? <span className="text-sm text-slate-300">{artists?.join(', ')}</span>
            : <span className="w-24 h-4 rounded-sm bg-zinc-800"></span>
        }
      </div>
    </article>
  )
}

function SongControl({ audioRef }) {

  const [time, setTime] = useState(0)

  const handleTimeUpdate = (event) => {
    setTime(event.target.currentTime)
  }

  const handleTime = (e) => {
    audioRef.current.currentTime = e.target.value
  }

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const duration = audioRef?.current?.duration || 0
  // console.log(duration);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="text-sm text-slate-400">
        {formatTime(time)}
      </span>
      <input
        type="range"
        onChange={handleTime}
        defaultValue={time}
        min={0}
        max={duration}
        className="slider w-full h-2 rounded-lg appearance-none cursor-pointer" />
      <span className="text-sm text-slate-400">
        {formatTime(duration)}
      </span>
    </div>
  )
}

function VolumeControl({ currentMusic, audioRef }) {
  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previousVolume = useRef(volume)

  const handleVolume = (e) => {
    setVolume(e.target.value)
    previousVolume.current = e.target.value

    if (!currentMusic.song) return

    audioRef.current.volume = e.target.value / 100
  }

  const handleSilence = () => {
    if (volume === 0) {
      setVolume(previousVolume.current)
      audioRef.current.volume = previousVolume.current / 100
    } else {
      setVolume(0)
      audioRef.current.volume = 0
    }
  }

  return (
    <>
      <button onClick={handleSilence}>
        {volume <= 0 ? <VolumeSilence /> : <Volume />}
      </button>
      {/* <VolumeControl /> */}
      <input
        type="range"
        onChange={handleVolume}
        defaultValue={volume}
        min={0}
        max={100}
        className="slider w-full h-2 rounded-lg appearance-none cursor-pointer" />
    </>
  )
}


export function PlayerControls() {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore(state => state)
  const audioRef = useRef()
  const volume = usePlayerStore(state => state.volume)

  const handlePlay = () => {
    if (!currentMusic.song) return
    const playing = !isPlaying
    setIsPlaying(playing)
  }

  useEffect(() => {
    if (!currentMusic.song) return
    if (!isPlaying) return
    console.log('esta entrando aquaai');

    audioRef.current.src = `/music/${currentMusic.playlist.id}/0${currentMusic.song.id}.mp3`
    audioRef.current.volume = volume / 100
    audioRef.current.play()
    console.log(volume);

  }, [currentMusic])


  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handlePrevious = () => {
    if (!currentMusic.song) return
    console.log('previous');
    const newId = currentMusic.song.id > 1 ? currentMusic.song.id - 1 : currentMusic.songs.length
    const newSong = currentMusic.songs.find(song => song.id === newId) 
    setCurrentMusic({ ...currentMusic, song: newSong })
  }

  const handleNext = () => {
    if (!currentMusic.song) return
    console.log('Next');
    console.log(currentMusic)
    const newId = currentMusic.song.id < currentMusic.songs.length ? currentMusic.song.id + 1 : 1
    const newSong = currentMusic.songs.find(song => song.id === newId)
    setCurrentMusic({ ...currentMusic, song: newSong })    
  }

  return (
    <div className="w-full h-full flex flex-row justify-between items-start py-4 px-4 relative">
      <div className="currentSong relative">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="player w-[500px] h-full flex flex-col gap-2 justify-center items-center">
        <div className="actions flex flex-row gap-6">
          <button disabled={!currentMusic.song} onClick={handlePrevious}>
            <Previous />
          </button>
          <button
            onClick={handlePlay}
            className="bg-slate-100 p-2 text-black rounded-full"
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <button disabled={!currentMusic.song} onClick={handleNext}>
            <Next />
          </button>
        </div>
        <div className="songControl flex-1 w-full">
          <SongControl audioRef={audioRef} />
        </div>
      </div>
      <div className="flex gap-2 h-full items-center">
        <VolumeControl currentMusic={currentMusic} audioRef={audioRef} />
      </div>
      <audio ref={audioRef}></audio>
    </div>
  )
}