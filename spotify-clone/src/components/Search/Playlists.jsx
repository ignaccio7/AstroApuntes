import { useEffect, useState } from "react"
import { CardPlayButton } from "../CardPlayButton"
import { useSearchStore } from "@/store/searchStore"

export default function Playlists({ data }) {

  const search = useSearchStore(state => state.search)
  const [playlists, setPlaylists] = useState(data)  

  const filteredPlaylists = !search ? playlists : playlists.filter((playlists) => {
    return playlists?.title?.toLowerCase().includes(search?.toLowerCase())
  })

  if (filteredPlaylists.length === 0) {
    return (
      <div className="w-full h-full ">
        <h2 className="text-3xl font-normal">No se encontraron resultados para: 
          <span className="text-zinc-400"> "{search}" </span>
        </h2>
      </div>
    )
  }

  return (
    <section className="playlists grid gap-x-2 gap-y-4"
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))` }}>
      {
        filteredPlaylists.map((playlist) => {
          return (
            <div
              className="card group relative overflow-hidden px-3 py-4 rounded-md bg-zinc-900 hover:bg-zinc-700 transition-all duration-300 ease-in-out"
              key={playlist.id}>
              <div className="button absolute max-w-96 bottom-10 right-4 opacity-0 group-hover:opacity-100 group-hover:bottom-20 transition-all duration-300 ease-in-out z-10">
                <CardPlayButton id={playlist.id} />
              </div>
              <a
                href={`/playlist/${playlist.id}`}
                className="flex flex-col gap-3"
                transition:name={`playlist-${playlist.id}-card`}
              >
                <img
                  style={{ viewTransitionName: `playlist-${playlist.id}-cover` }}
                  className="block w-full h-auto object-cover aspect-square"
                  src={playlist.cover}
                  alt={`${playlist.title} cover`}
                />
                <div className="content flex flex-col gap-1">
                  <h2 style={{ viewTransitionName: `playlist-${playlist.id}-title` }} className="text-md font-bold">{playlist.title}</h2>
                  <p style={{ viewTransitionName: `playlist-${playlist.id}-artists` }} className="leading-none text-sm font-light text-zinc-400">{playlist.artists.join(', ')}</p>
                </div>
              </a>
            </div>
          )
        })
      }
    </section>
  )
}