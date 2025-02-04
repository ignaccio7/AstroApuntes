/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CYCd2rqf.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { create } from 'zustand';
import { useState, useEffect } from 'react';
import { C as CardPlayButton, $ as $$Layout } from '../chunks/CardPlayButton_uQk4_tKh.mjs';
import { p as playlists } from '../chunks/data_D7nTTwaD.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const useSearchStore = create((set, get) => ({
  search:'',
  setSearch: (search) => set({ search })
}));

function SearchIcon() {
  return /* @__PURE__ */ jsx("svg", { className: "absolute top-0 bottom-0 left-3 flex items-center", width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z" }) });
}
function SearchBox() {
  const { search, setSearch } = useSearchStore();
  const [location, setLocation] = useState("");
  const handleSearch = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    const url = new URL(location);
    if (newSearch === "") {
      url.searchParams.delete("q");
    } else {
      url.searchParams.set("q", newSearch);
    }
    window.history.pushState({}, "", url);
  };
  useEffect(() => {
    setLocation(window.location.href);
    const url = new URL(window.location.href);
    const search2 = url.searchParams.get("q");
    setSearch(search2);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-72", children: /* @__PURE__ */ jsxs("label", { htmlFor: "search", className: "relative text-zinc-400", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        defaultValue: search,
        onChange: handleSearch,
        className: "w-full bg-zinc-700 pr-4 pl-10 py-2 rounded-full text-white",
        id: "search",
        type: "search",
        placeholder: "¿Que quieres escuchar?"
      }
    ),
    /* @__PURE__ */ jsx(SearchIcon, {})
  ] }) });
}

function Playlists({ data }) {
  const search = useSearchStore((state) => state.search);
  const [playlists, setPlaylists] = useState(data);
  const filteredPlaylists = !search ? playlists : playlists.filter((playlists2) => {
    return playlists2?.title?.toLowerCase().includes(search?.toLowerCase());
  });
  if (filteredPlaylists.length === 0) {
    return /* @__PURE__ */ jsx("div", { className: "w-full h-full ", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-normal", children: [
      "No se encontraron resultados para:",
      /* @__PURE__ */ jsxs("span", { className: "text-zinc-400", children: [
        ' "',
        search,
        '" '
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "playlists grid gap-x-2 gap-y-4",
      style: { gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))` },
      children: filteredPlaylists.map((playlist) => {
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "card group relative overflow-hidden px-3 py-4 rounded-md bg-zinc-900 hover:bg-zinc-700 transition-all duration-300 ease-in-out",
            children: [
              /* @__PURE__ */ jsx("div", { className: "button absolute max-w-96 bottom-10 right-4 opacity-0 group-hover:opacity-100 group-hover:bottom-20 transition-all duration-300 ease-in-out z-10", children: /* @__PURE__ */ jsx(CardPlayButton, { id: playlist.id }) }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: `/playlist/${playlist.id}`,
                  className: "flex flex-col gap-3",
                  "transition:name": `playlist-${playlist.id}-card`,
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        style: { viewTransitionName: `playlist-${playlist.id}-cover` },
                        className: "block w-full h-auto object-cover aspect-square",
                        src: playlist.cover,
                        alt: `${playlist.title} cover`
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "content flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsx("h2", { style: { viewTransitionName: `playlist-${playlist.id}-title` }, className: "text-md font-bold", children: playlist.title }),
                      /* @__PURE__ */ jsx("p", { style: { viewTransitionName: `playlist-${playlist.id}-artists` }, className: "leading-none text-sm font-light text-zinc-400", children: playlist.artists.join(", ") })
                    ] })
                  ]
                }
              )
            ]
          },
          playlist.id
        );
      })
    }
  );
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  console.log(playlists);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute right-0 top-3 left-4 z-10 flex flex-row gap-3 items-center"> <a class="inline-block bg-zinc-700 p-3 rounded-full hover:bg-zinc-600 transition-all duration-300 ease-in-out" href="/"> <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path></svg> </a> ${renderComponent($$result2, "SearchBox", SearchBox, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Search/SearchBox", "client:component-export": "SearchBox" })} </div> <section class="playlists mt-20 mx-4"> <h2 class="text-3xl font-bold mb-4">Playlists</h2> ${renderComponent($$result2, "Playlists", Playlists, { "data": playlists, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Search/Playlists", "client:component-export": "default" })} </section> ` })} `;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/search/index.astro", undefined);

const $$file = "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
