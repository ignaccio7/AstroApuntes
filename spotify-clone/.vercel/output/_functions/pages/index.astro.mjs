/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderTransition, b as createAstro } from '../chunks/astro/server_CYCd2rqf.mjs';
import { jsxs } from 'react/jsx-runtime';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/CardPlayButton_uQk4_tKh.mjs';
import { p as playlists } from '../chunks/data_D7nTTwaD.mjs';
export { renderers } from '../renderers.mjs';

function Greeting() {
  const date = /* @__PURE__ */ new Date();
  const hours = date.getHours();
  const greeting = hours < 12 ? "Buenos dias" : hours < 18 ? "Buenas tardes" : "Buenas noches";
  return /* @__PURE__ */ jsxs("h2", { class: "text-5xl font-bold mt-14 mb-8 text-white", children: [
    "¡",
    greeting,
    "!"
  ] });
}

const $$Astro = createAstro();
const $$PlaylistItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaylistItemCard;
  const { playlist } = Astro2.props;
  const { id, title, cover } = playlist;
  return renderTemplate`${maybeRenderHead()}<article class="card relative group basis-1/4 min-w-96 flex-1 overflow-hidden rounded-md bg-zinc-700/40
  hover:bg-zinc-700/70 transition-all duration-300 ease-in-out z-10"> <div class="absolute z-20 block right-4 -bottom-6 opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-6 group-hover:opacity-100 pointer-events-auto"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "client:visible": true, "id": id, "client:component-hydration": "visible", "client:component-path": "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a class="h-full flex flex-row items-center gap-4"${addAttribute(`/playlist/${id}`, "href")}${addAttribute(renderTransition($$result, "kljxcvf4", "", `playlist-${id}-card`), "data-astro-transition-scope")}> <picture class="w-24 h-24 overflow-hidden"${addAttribute(renderTransition($$result, "nsgf3hxi", "", `playlist-${id}-cover`), "data-astro-transition-scope")}> <img class="w-full h-full object-cover aspect-square"${addAttribute(cover, "src")}${addAttribute(`Imagen del album ${title}`, "alt")}> </picture> <div class="content"> <h3 class="text-xl font-bold"${addAttribute(renderTransition($$result, "l3uzvahc", "", `playlist-${id}-title`), "data-astro-transition-scope")}> ${title} </h3> </div> </a> </article>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/PlaylistItemCard.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full flex flex-col bg-green-600 rounded-md py-2 px-4 overflow-y-auto relative"> <section class="greet h-auto z-10"> ${renderComponent($$result2, "Greeting", Greeting, {})} </section> <section class="playlists h-auto flex flex-row gap-3 flex-wrap z-10"> ${playlists.map((playlist) => {
    return renderTemplate`${renderComponent($$result2, "PlaylistItemCard", $$PlaylistItemCard, { "playlist": playlist })}`;
  })} </section> <div class="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent pointer-events-none"></div> </div> ` })}`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/index.astro", undefined);

const $$file = "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
