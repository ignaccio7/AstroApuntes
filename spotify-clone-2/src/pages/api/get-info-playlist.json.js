import { allPlaylists, songs as allSongs} from "@/lib/data";

export async function GET({ params, request }) {
  // get the id from the url search params
  const { url } = request
  // const [, queryString] = url.split("?")
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find((playlist) => playlist.id  === id)
  const songs = allSongs.filter(song => song.albumId === playlist?.albumId)

  return new Response(JSON.stringify({ playlist, songs }),{
    headers: { "Content-type":"application/json" }
  })
}