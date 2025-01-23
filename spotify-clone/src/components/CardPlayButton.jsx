import { Pause } from "@/components/Player/Player"
import { Play} from "@/components/Player/Player"
import { playlists, songs as songsDB } from "@/lib/data"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id }) {
  const { isPlaying, setIsPlaying, currentMusic ,setCurrentMusic } = usePlayerStore()

  const isPlayingPlaylist = isPlaying && currentMusic.playlist === id
  
  const handlePlaying = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false)
      return
    }
    
    setIsPlaying(true)
    const songs = songsDB.filter((song) => song.albumId === id)
    setCurrentMusic({ playlist: id, songs, song: `/music/${id}/01.mp3` })
  }

  return (
    <button 
      className='
        block
        pointer-events-auto text-black
        bg-green-500 p-3 rounded-full
        hover:bg-green-400 hover:scale-105
        transition-all duration-300 ease-in-out        
      '
      onClick={handlePlaying}>
      {isPlayingPlaylist ? <Pause /> : <Play />}      
    </button>
  )
}