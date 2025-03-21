// import type { APIRoute } from "astro";
import { allPlaylists, songs as allSongs } from "@/lib/data";

// export async function GET({params, request}) {
//   return new Response(
//     JSON.stringify({
//       name: 'Astro',
//       url: 'https://astro.build/'
//     })
//   )
// }

export async function GET ({ params, request }) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id === id)
  
  const songs = allSongs.filter((song) => song.albumId == id)

  return new Response(JSON.stringify({
    playlist,
    songs    
  }),{
    headers: {
      "Content-Type": "application/json"
    }
  })


}