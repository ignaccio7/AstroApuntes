import "./sliderVolume.css"
import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"

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


function CurrentSong({ title, artists, image }) {
  return (
    <article className="flex flex-row gap-2 items-center w-64">
      <picture className="w-16 h-16 rounded-md bg-zinc-800 overflow-hidden relative">
        {image && <img className="w-full h-full aspect-square object-cover" src={image} />}
      </picture>
      <div className="content flex flex-col">
        <h4 className="text-xl font-normal text-slate-100">{title}</h4>
        <span className="text-sm text-slate-300">{artists?.join(', ')}</span>
      </div>
    </article>
  )
}

function SongControl({ audioRef }) {
  return (
    <>
      <input
        type="range"
        // onChange={handleVolume}
        defaultValue={50}
        min={0}
        max={100} 
        className="slider w-full h-2 rounded-lg appearance-none cursor-pointer" />
    </>
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
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(state => state)
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

  return (
    <div className="w-full h-full flex flex-row justify-between items-start py-4 px-4 relative">
      <div className="currentSong relative">
        <CurrentSong {...currentMusic.song} />
      </div>
      <div className="player w-96 h-full flex flex-col gap-2 justify-center items-center">
        <button
          onClick={handlePlay}
          className="bg-slate-100 p-2 text-black rounded-full"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
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