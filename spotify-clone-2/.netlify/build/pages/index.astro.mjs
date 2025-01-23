/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderTransition, b as createAstro } from '../chunks/astro/server_BaVfIgrI.mjs';
import { ref, onMounted, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/Layout_BE-K6o4W.mjs';
import { p as playlists } from '../chunks/data_CHOdMg2l.mjs';
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'Greeting',
  setup(__props, { expose: __expose }) {
  __expose();

const greeting = ref('');
const currentHour = ref();

onMounted(() => {
  const currentTime = new Date();
  currentHour.value = currentTime.getHours();
});

if (currentHour < 12) {
  greeting.value = 'Buenos dias';
} else if (greeting < 18) {
  greeting.value = 'Buenas tardes';
} else {
  greeting.value = 'Buenas noches';
}


const __returned__ = { greeting, currentHour, onMounted, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    ssrRenderAttrs(_attrs)
  }><h1 class="text-4xl pt-6 pb-2 text-white font-bold">${
    ssrInterpolate($setup.greeting)
  }</h1></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Greeting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Greeting = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro = createAstro();
const $$PlaylistItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlaylistItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`<!-- para crear una transicion cuando demos click con la imagen y asi sepamos a cual le dimos click
transition:name -->${maybeRenderHead()}<article class="group relative bg-zinc-500/30 hover:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300"> <div class="absolute right-4 bottom-10 translate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex flex-col relative p-2 overflow-hidden gap-4 rounded-md w-44"${addAttribute(renderTransition($$result, "lpmd5nat", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "lb62f7wi", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm font-bold"${addAttribute(renderTransition($$result, "6jluxr7n", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-gray-400"${addAttribute(renderTransition($$result, "diereor3", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> </article>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/components/PlaylistItemCard.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <!-- PageHeader --> <div class="relative z-10 px-6"> <!-- Como utilizamos un componente de vue en nuestra pagina --> <!-- Greetings --> <!-- <h1 class="text-4xl pt-4 text-white">Buenos dìas</h1> --> ${renderComponent($$result2, "Greeting", Greeting, {})} <div class="flex flex-wrap mt-2 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlaylistItemCard", $$PlaylistItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0  bg-gradient-to-t from-zinc-900 via-zinc-900/70"></div> </div> ` })} `;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/pages/index.astro", undefined);

const $$file = "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
