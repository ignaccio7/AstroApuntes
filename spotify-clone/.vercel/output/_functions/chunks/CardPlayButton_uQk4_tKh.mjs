import { c as createComponent, r as renderTemplate, a as addAttribute, g as renderScript, b as createAstro, m as maybeRenderHead, h as renderSlot, d as renderComponent, e as renderTransition, i as renderHead } from './astro/server_CYCd2rqf.mjs';
/* empty css                         */
import { p as playlists } from './data_D7nTTwaD.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
/* empty css                         */
import { create } from 'zustand';
import { useRef, useEffect, useState } from 'react';

const $$Astro$8 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro$7 = createAstro();
const $$AsideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AsideMenuItem;
  const { className = "", href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="group"> <a${addAttribute(href, "href")}${addAttribute(`${className}
    flex flex-row py-2 px-4 gap-4 items-center 
    text-xl text-gray-400 font-bold
    group-hover:text-white`, "class")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/Aside/AsideMenuItem.astro", undefined);

const $$Astro$6 = createAstro();
const $$AdideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AdideMenuCard;
  const { className = "", playlist } = Astro2.props;
  const { id, title, artists, cover } = playlist;
  const artistsList = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<li class="group"> <a${addAttribute(`/playlist/${id}`, "href")}${addAttribute(`${className}
    flex flex-row py-2 px-4 gap-4 items-center 
    text-2xl text-gray-300 font-bold
    group-hover:bg-zinc-800 rounded-md`, "class")}> <picture class="w-20 h-20"> <img${addAttribute(cover, "src")}${addAttribute(`Imagen del album ${title}`, "alt")}> </picture> <div class="content h-full flex flex-col justify-center"> <h3 class="text-xl font-extrabold">${title}</h3> <p class="text-sm text-start text-zinc-400">${artistsList}</p> </div> </a> </li>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/Aside/AdideMenuCard.astro", undefined);

const $$Astro$5 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Home;
  const { className = "", size = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg role="img"${addAttribute(size, "height")}${addAttribute(size, "width")} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${className}`, "class")}><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/icons/Home.astro", undefined);

const $$Astro$4 = createAstro();
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Search;
  const { className = "", size = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg role="img"${addAttribute(size, "height")}${addAttribute(size, "width")} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${className}`, "class")}><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/icons/Search.astro", undefined);

const $$Astro$3 = createAstro();
const $$Library = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Library;
  const { className = "", size = 24 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg role="img"${addAttribute(size, "height")}${addAttribute(size, "width")} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"${addAttribute(`${className}`, "class")}><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/icons/Library.astro", undefined);

const $$Astro$2 = createAstro();
const $$Aside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Aside;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(`${className} flex flex-col gap-3 pt-0 px-2 w-full overflow-hidden`, "class")}> <ul class="flex flex-col gap-2 py-2 bg-[#121212] rounded-md"> ${renderComponent($$result, "AsideMenuItem", $$AsideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconHome", $$Home, { "size": 28 })}
Inicio
` })} ${renderComponent($$result, "AsideMenuItem", $$AsideMenuItem, { "href": "/search" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconSearch", $$Search, { "size": 28 })}
Buscar
` })} </ul> <div class="playlists py-2 flex-1 bg-[#121212] h-full flex flex-col gap-4 overflow-hidden"> <ul class="h-auto"> ${renderComponent($$result, "AsideMenuItem", $$AsideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconLibrary", $$Library, { "size": 36 })}
Mis Playlists
` })} </ul> <ul class="flex-1 h-auto overflow-hidden overflow-y-auto"> ${playlists.map((playlist) => {
    return renderTemplate`${renderComponent($$result, "AsideMenuCard", $$AdideMenuCard, { "playlist": playlist })}`;
  })} </ul> </div> </aside>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/sections/Aside.astro", undefined);

const usePlayerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (playing) => set({ isPlaying: playing }),

  currentMusic: { playlist: null, song: null, songs: [] },
  setCurrentMusic: (currentMusic => set({ currentMusic })),

  volume: 20,
  setVolume: (volume) => set({ volume })

}));

const Play = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className: "icon icon-tabler icons-tabler-filled icon-tabler-player-play", children: [
  /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" })
] });
const Pause = ({ size = 24 }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className: "icon icon-tabler icons-tabler-filled icon-tabler-player-pause", children: [
  /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" }),
  /* @__PURE__ */ jsx("path", { d: "M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" })
] });
const VolumeSilence = () => /* @__PURE__ */ jsxs("svg", { fill: "currentColor", role: "presentation", height: "24", width: "24", "aria-hidden": "true", "aria-label": "Volumen apagado", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
  /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
] });
const Volume = () => /* @__PURE__ */ jsxs("svg", { fill: "currentColor", role: "presentation", height: "24", width: "24", "aria-hidden": "true", "aria-label": "Volumen alto", id: "volume-icon", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
  /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
] });
const Next = () => /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 16 16", xlmns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z" }) });
const Previous = () => /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 16 16", xlmns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z" }) });
function CurrentSong({ title, artists, image }) {
  return /* @__PURE__ */ jsxs("article", { className: "flex flex-row gap-2 items-center w-[320px]", children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 rounded-md bg-zinc-800 overflow-hidden relative", children: image && /* @__PURE__ */ jsx("img", { className: "w-full h-full aspect-square object-cover", src: image }) }),
    /* @__PURE__ */ jsxs("div", { className: "content flex flex-col gap-1", children: [
      title ? /* @__PURE__ */ jsx("h4", { className: "text-xl font-normal text-slate-100", children: title }) : /* @__PURE__ */ jsx("h4", { className: "w-40 h-4 rounded-sm bg-zinc-800" }),
      artists ? /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: artists?.join(", ") }) : /* @__PURE__ */ jsx("span", { className: "w-24 h-4 rounded-sm bg-zinc-800" })
    ] })
  ] });
}
function SongControl({ audioRef }) {
  const [time, setTime] = useState(0);
  const handleTimeUpdate = (event) => {
    setTime(event.target.currentTime);
  };
  const handleTime = (e) => {
    audioRef.current.currentTime = e.target.value;
  };
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const duration = audioRef?.current?.duration || 0;
  const formatTime = (time2) => {
    const minutes = Math.floor(time2 / 60);
    const seconds = Math.floor(time2 % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2 items-center", children: [
    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: formatTime(time) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        onChange: handleTime,
        defaultValue: time,
        min: 0,
        max: duration,
        className: "slider w-full h-2 rounded-lg appearance-none cursor-pointer"
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: formatTime(duration) })
  ] });
}
function VolumeControl({ currentMusic, audioRef }) {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolume = useRef(volume);
  const handleVolume = (e) => {
    setVolume(e.target.value);
    previousVolume.current = e.target.value;
    if (!currentMusic.song) return;
    audioRef.current.volume = e.target.value / 100;
  };
  const handleSilence = () => {
    if (volume === 0) {
      setVolume(previousVolume.current);
      audioRef.current.volume = previousVolume.current / 100;
    } else {
      setVolume(0);
      audioRef.current.volume = 0;
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("button", { onClick: handleSilence, children: volume <= 0 ? /* @__PURE__ */ jsx(VolumeSilence, {}) : /* @__PURE__ */ jsx(Volume, {}) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "range",
        onChange: handleVolume,
        defaultValue: volume,
        min: 0,
        max: 100,
        className: "slider w-full h-2 rounded-lg appearance-none cursor-pointer"
      }
    )
  ] });
}
function PlayerControls() {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore((state) => state);
  const audioRef = useRef();
  const volume = usePlayerStore((state) => state.volume);
  const handlePlay = () => {
    if (!currentMusic.song) return;
    const playing = !isPlaying;
    setIsPlaying(playing);
  };
  useEffect(() => {
    if (!currentMusic.song) return;
    if (!isPlaying) return;
    console.log("esta entrando aquaai");
    audioRef.current.src = `/music/${currentMusic.playlist.id}/0${currentMusic.song.id}.mp3`;
    audioRef.current.volume = volume / 100;
    audioRef.current.play();
    console.log(volume);
  }, [currentMusic]);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  const handlePrevious = () => {
    if (!currentMusic.song) return;
    console.log("previous");
    const newId = currentMusic.song.id > 1 ? currentMusic.song.id - 1 : currentMusic.songs.length;
    const newSong = currentMusic.songs.find((song) => song.id === newId);
    setCurrentMusic({ ...currentMusic, song: newSong });
  };
  const handleNext = () => {
    if (!currentMusic.song) return;
    console.log("Next");
    console.log(currentMusic);
    const newId = currentMusic.song.id < currentMusic.songs.length ? currentMusic.song.id + 1 : 1;
    const newSong = currentMusic.songs.find((song) => song.id === newId);
    setCurrentMusic({ ...currentMusic, song: newSong });
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-row justify-between items-start py-4 px-4 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "currentSong relative", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsxs("div", { className: "player w-[500px] h-full flex flex-col gap-2 justify-center items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "actions flex flex-row gap-6", children: [
        /* @__PURE__ */ jsx("button", { disabled: !currentMusic.song, onClick: handlePrevious, children: /* @__PURE__ */ jsx(Previous, {}) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handlePlay,
            className: "bg-slate-100 p-2 text-black rounded-full",
            children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
          }
        ),
        /* @__PURE__ */ jsx("button", { disabled: !currentMusic.song, onClick: handleNext, children: /* @__PURE__ */ jsx(Next, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "songControl flex-1 w-full", children: /* @__PURE__ */ jsx(SongControl, { audioRef }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-2 h-full items-center", children: /* @__PURE__ */ jsx(VolumeControl, { currentMusic, audioRef }) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

const $$Astro$1 = createAstro();
const $$Player = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Player;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute(`${className} h-auto bg-black`, "class")}> ${renderComponent($$result, "PlayerControls", PlayerControls, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player/Player", "client:component-export": "PlayerControls", "data-astro-transition-scope": renderTransition($$result, "ymcxkims", "", "media-player") })} </footer>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/sections/Player.astro", "self");

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="app pt-2" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Aside", $$Aside, { "className": "[grid-area:aside]", "data-astro-cid-sckkx6r4": true })} <main class="[grid-area:main] pr-2 overflow-hidden relative bg-[#121212] mr-2 overflow-x-hidden overflow-y-auto w-full h-full pb-5" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Player", $$Player, { "className": "[grid-area:footer]", "data-astro-cid-sckkx6r4": true })} </div>  </body></html>`;
}, "C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/layouts/Layout.astro", undefined);

function CardPlayButton({ id, size = 24, className = "" }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore();
  const isPlaylistPlay = currentMusic?.playlist?.id == id;
  const isPlayingPlaylist = isPlaying && isPlaylistPlay;
  const handlePlaying = () => {
    if (isPlaylistPlay) {
      console.log("Click");
      setIsPlaying(!isPlaying);
      return;
    }
    console.log("Busco otro");
    fetch(`/api/get-info-playlist?id=${id}`).then((res) => res.json()).then((data) => {
      console.log(data);
      const { playlist, songs } = data;
      setCurrentMusic({ playlist, songs, song: songs[0] });
      setIsPlaying(true);
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `
        block
        pointer-events-auto text-black
        bg-green-500 p-3 rounded-full
        hover:bg-green-400 hover:scale-105
        transition-all duration-300 ease-in-out        
        ${className}
      `,
      onClick: handlePlaying,
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, { size }) : /* @__PURE__ */ jsx(Play, { size })
    }
  );
}

export { $$Layout as $, CardPlayButton as C };
