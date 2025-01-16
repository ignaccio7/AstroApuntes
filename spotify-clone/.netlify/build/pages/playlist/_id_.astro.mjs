/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderTransition } from '../../chunks/astro/server_BaVfIgrI.mjs';
import { C as CardPlayButton, $ as $$Layout } from '../../chunks/Layout_Cmb1zpkF.mjs';
import 'clsx';
import { a as allPlaylists, s as songs } from '../../chunks/data_CHOdMg2l.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MusicTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="text-left min-w-full divide-y divide-gray-500/20"> <thead class="h-[50px]"> <tr class="text-gray-300 text-sm font-light"> <th class="px-4 py-2 w-[10px]">#</th> <th class="px-4 py-2">Título</th> <th class="px-4 py-2">Álbum</th> <th class="px-4 py-2">Time</th> </tr> </thead> <tbody> <tr class="h-[15px]"></tr> ${songs.map((song, index) => {
    return renderTemplate`<tr class="text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition-all duration-300"> <td class="px-4 py-2 rounded-tl-lg rounded-bl-lg">${index + 1}</td> <td class="px-4 py-2 flex gap-3"> <picture> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-10 h-10 rounded-md"> </picture> <div class="flex flex-col"> <h3>${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-4 py-2 rounded-tr-lg rounded-br-lg">${song.duration}</td> </tr>`;
  })} </tbody> </table>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/components/MusicTable.astro", undefined);

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  const artistsString = playlist?.artists.join(", ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify clone" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div id="playlist-container" class="relative bg-green-900 flex flex-col h-full overflow-x-hidden p-4"${addAttribute(renderTransition($$result2, "pywvjcb7", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- PageHeader --> <header class="flex flex-row gap-4"> <picture class="aspect-square block w-52 h-52"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result2, "fpjd3cld", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col truncate justify-center"> <span class="text-white text-xs flex-1 flex items-end">
Playlist
</span> <h4 class="text-white text-sm font-bold"${addAttribute(renderTransition($$result2, "tzxg4ah5", "", `playlist ${id} title`), "data-astro-transition-scope")}> <span class="text-5xl text-white">${playlist?.title}</span> </h4> <div class="text-md text-gray-300 flex-1 flex flex-col justify-end gap-1"> <span${addAttribute(renderTransition($$result2, "b3wdr5xy", "", `playlist ${id} artists`), "data-astro-transition-scope")}>${artistsString}</span> <p class="text-white"> <span class="font-bold">${playListSongs.length} canciones</span>, 3h aproximadamente
</p> </div> </div> </header> <section class="pt-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "size": "large", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </section> <!-- TableSongs --> <section class="pt-8"> ${renderComponent($$result2, "MusicTable", $$MusicTable, { "songs": playListSongs })} </section> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 -z-10"></div> </div> ` })} `;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/pages/playlist/[id].astro", "self");

const $$file = "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
