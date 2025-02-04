/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderTransition } from '../../chunks/astro/server_CYCd2rqf.mjs';
import { C as CardPlayButton, $ as $$Layout } from '../../chunks/CardPlayButton_uQk4_tKh.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_D7nTTwaD.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$PlaylistTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaylistTable;
  const { id } = Astro2.params;
  const res = await fetch(`http://localhost:4321/api/get-info-playlist?id=${id}`);
  if (!res.ok) {
    return Astro2.redirect("/");
  }
  const data = await res.json();
  const songs = data.songs;
  return renderTemplate`${maybeRenderHead()}<table class="relative z-10 table-auto w-full text-lg"> <thead> <tr class="text-zinc-500 text-left border-b border-zinc-600"> <th class="py-2 px-4">#</th> <th>Title</th> <th>Album</th> <th><svg width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path fill="currentColor" d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg></th> </tr> </thead> <tbody> <tr class="h-3"></tr> ${songs.map((song, index) => {
    return renderTemplate`<tr class="text-zinc-400 hover:bg-zinc-600/40 transition-colors duration-300 ease-in-out overflow-hidden"> <td class="py-2 px-4 w-[3ch] rounded-t-sm rounded-b-sm">${index + 1}</td> <td class="text-slate-100 flex gap-2 items-center py-2"> <img${addAttribute(song.image, "src")}${addAttribute(`${song.title} cover`, "alt")} class="w-14 h-14 rounded-sm"> <p class="leading-none flex flex-col gap-1">${song.title} <br> <span class="text-zinc-400 text-sm">${song.artists.join(", ")}</span> </p> </td> <td>${song.album}</td> <td>${song.duration}</td> </tr>`;
  })} </tbody> </table>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/PlaylistTable.astro", undefined);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find(
    (playlist2) => playlist2.id === id
  );
  if (!playlist) {
    return Astro2.redirect("/");
  }
  const { title, color, cover, artists } = playlist;
  const artistsString = artists.join(", ");
  const songsPlaylist = songs.filter((song) => song.albumId === playlist.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute({ backgroundColor: color.accent }, "style")}${addAttribute(`w-full h-full flex flex-col rounded-md py-2 px-4 overflow-y-auto absolute z-0`, "class")}></div> <div class="absolute top-3 left-4 z-10"> <a class="inline-block bg-zinc-700 p-3 rounded-full hover:bg-zinc-600 transition-all duration-300 ease-in-out" href="/"> <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg> </a> </div> <article class="mt-16 mx-4 flex flex-row gap-2 transition-all duration-300 ease-in-out relative z-10"${addAttribute(renderTransition($$result2, "2iuetnhj", "", `playlist-${id}-card`), "data-astro-transition-scope")}> <picture class="block w-60 h-60 overflow-hidden z-10"${addAttribute(renderTransition($$result2, "i775hylp", "", `playlist-${id}-cover`), "data-astro-transition-scope")}> <img class="w-full h-full object-cover aspect-square"${addAttribute(cover, "src")}${addAttribute(`Imagen del album ${title}`, "alt")}> </picture> <div class="content flex flex-col justify-center"> <h3 class="flex-1 flex items-end text-slate-100 z-10">
Playlist
</h3> <h1 class="text-5xl font-bold"${addAttribute(renderTransition($$result2, "uv36e25n", "", `playlist-${id}-title`), "data-astro-transition-scope")}> ${title} </h1> <p class="flex-1 flex flex-col justify-end text-md text-slate-100"> ${artistsString} <span> <strong class="w-fit">${songsPlaylist.length} canciones </strong>, 3h
          aproximadamente
</span> </p> </div> </article> <section class="actions relative z-10 mt-6 px-6"> ${renderComponent($$result2, "CardPlayButton", CardPlayButton, { "id": id, "size": 36, "className": "p-4", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </section> <section class="px-6 mt-4"> ${renderComponent($$result2, "PlaylistTable", $$PlaylistTable, {})} </section> <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent pointer-events-none"></div> ` })}`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/playlist/[id].astro", "self");

const $$file = "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
