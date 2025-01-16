import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id, size = 'small' }) {

  const { playing, 
    setPlaying, 
    currentMusic, 
    setCurrentMusic 
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = playing && currentMusic?.playlist.id === id

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setPlaying(false)
      return
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then(res => res.json())
      .then(data => {
        const { songs, playlist } = data
        setPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
        console.log(songs);
        console.log(playlist);
      })
  }

  const iconClassName = size === 'small' ? 'w-12 h-12' : 'w-16 h-16'

  return (
    <button onClick={handleClick} className={`card-play-button rounded-full p-2 bg-green-500
    hover:scale-110 transition hover:bg-green-400 flex items-center justify-center ${iconClassName}`}>
      {isPlayingPlaylist ? <Pause /> : <Play />}
    </button>
  )
}