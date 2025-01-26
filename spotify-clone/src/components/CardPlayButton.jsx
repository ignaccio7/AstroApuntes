import { Pause } from "@/components/Player/Player"
import { Play } from "@/components/Player/Player"
import { usePlayerStore } from "@/store/playerStore"

export function CardPlayButton({ id }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore()

  const isPlaylistPlay = currentMusic?.playlist?.id == id
  const isPlayingPlaylist = isPlaying && isPlaylistPlay

  const handlePlaying = () => {
    if (isPlaylistPlay) {
      console.log('Click');      
      setIsPlaying(!isPlaying)
      return
    }

    console.log('Busco otro');    
    // fetch
    fetch(`http://localhost:4321/api/get-info-playlist?id=${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        const { playlist, songs } = data
        setCurrentMusic({ playlist, songs, song: songs[0] })
        setIsPlaying(true)
      })
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