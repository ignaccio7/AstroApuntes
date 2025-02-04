import { a as allPlaylists, s as songs } from '../../chunks/data_D7nTTwaD.mjs';
export { renderers } from '../../renderers.mjs';

// import type { APIRoute } from "astro";

// export async function GET({params, request}) {
//   return new Response(
//     JSON.stringify({
//       name: 'Astro',
//       url: 'https://astro.build/'
//     })
//   )
// }

async function GET ({ params, request }) {
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get('id');

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  
  const songs$1 = songs.filter((song) => song.albumId == id);

  return new Response(JSON.stringify({
    playlist,
    songs: songs$1    
  }),{
    headers: {
      "Content-Type": "application/json"
    }
  })


}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
