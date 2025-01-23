import { jsxs, jsx } from 'react/jsx-runtime';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_BaVfIgrI.mjs';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { create } from 'zustand';
import * as SliderPrimitive from '@radix-ui/react-slider';
import cn from 'clsx';
import { p as playlists } from './data_CHOdMg2l.mjs';
/* empty css                         */

const usePlayerStore = create((set)=>({
  playing: false,
  currentMusic: { playlist: null, song: null, songs:[] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setPlaying: (playing) => set({ playing }),
  setCurrentMusic: (currentMusic) => set({ currentMusic })
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gray-500", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-green-300" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-100" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Play = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", className: "icon icon-tabler icons-tabler-filled icon-tabler-player-play", children: [
  /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
  /* @__PURE__ */ jsx("path", { d: "M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" })
] });
const Pause = () => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", className: "icon icon-tabler icons-tabler-filled icon-tabler-player-pause", children: [
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
const VolumeControl = () => {
  const volume = usePlayerStore((state) => state.volume);
  const setVolume = usePlayerStore((state) => state.setVolume);
  const previousVolumeRef = useRef(volume);
  const isVolumeSilenced = volume < 0.1;
  const handleClickVolumen = () => {
    if (isVolumeSilenced) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex items-center justify-center gap-x-2 text-white", children: [
    /* @__PURE__ */ jsx("button", { onClick: handleClickVolumen, children: volume < 0.1 ? /* @__PURE__ */ jsx(VolumeSilence, {}) : /* @__PURE__ */ jsx(Volume, {}) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        className: "w-full h-1",
        defaultValue: [100],
        value: [volume * 100],
        max: 100,
        min: 0,
        step: 1,
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
        }
      }
    )
  ] });
};
const CurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center gap-5 relative overflow-hidden w-[200px]`,
      children: [
        /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
          /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
        ] })
      ]
    }
  );
};
const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };
  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const duration = audio?.current?.duration ?? 0;
  const formatTime = (time) => {
    if (time === 0) return `0:00`;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-white items-center text-xs opacity-50", children: [
    /* @__PURE__ */ jsx("span", { children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        className: "[width:400px] h-1",
        defaultValue: [0],
        value: [currentTime],
        max: audio?.current?.duration ?? 0,
        min: 0,
        step: 1,
        onValueChange: (value) => {
          audio.current.currentTime = value;
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { children: duration ? formatTime(duration) : "0:00" })
  ] });
};
function Player() {
  const { playing, setPlaying, currentMusic, volume } = usePlayerStore((state) => state);
  const audioRef = useRef();
  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);
  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      if (playing) {
        audioRef.current.play();
      }
    }
  }, [currentMusic]);
  const handleClick = () => {
    setPlaying(!playing);
  };
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between w-full px-4 pt-2 text-white", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col gap-1 justify-center items-center text-black", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-white rounded-full p-1",
          onClick: handleClick,
          children: playing ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
        }
      ),
      /* @__PURE__ */ jsx(SongControl, { audio: audioRef })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-[120px] flex items-center", children: /* @__PURE__ */ jsx(VolumeControl, {}) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

function CardPlayButton({ id, size = "small" }) {
  const {
    playing,
    setPlaying,
    currentMusic,
    setCurrentMusic
  } = usePlayerStore((state) => state);
  const isPlayingPlaylist = playing && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setPlaying(true);
      setCurrentMusic({ songs, playlist, song: songs[0] });
      console.log(songs);
      console.log(playlist);
    });
  };
  const iconClassName = size === "small" ? "w-12 h-12" : "w-16 h-16";
  return /* @__PURE__ */ jsx("button", { onClick: handleClick, className: `card-play-button rounded-full p-2 bg-green-500
    hover:scale-110 transition hover:bg-green-400 flex items-center justify-center ${iconClassName}`, children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) });
}

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3 px-5 font-medium cursor-pointer transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/components/SideMenuItem.astro", undefined);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate gap-1"> <h4 class="font-semibold text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400">${artistsString}</span> </div> </a>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/components/SideMenuCard.astro", undefined);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/icons/Home.astro", undefined);

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/icons/Library.astro", undefined);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg flex flex-col p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconHome", $$Home, {})}
Inicio
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, {}, { "default": ($$result2) => renderTemplate`  ` })}</ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "IconLibrary", $$Library, {})}
Tu bliblioteca
` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/components/AsideMenu.astro", undefined);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/node_modules/.pnpm/astro@4.16.18_typescript@5.7.3/node_modules/astro/components/ViewTransitions.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] bg-zinc-900 oveflow-y-auto rounded-lg" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] pb-2" data-astro-cid-sckkx6r4> <!-- Load porque queremos que se cargue cuando se cargue la pagina --> <!-- Para que el estado persista colocamos transition:name="media-player" transition:persist --> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "isanpx53", "", "media-player") })} </footer> </div>  </body></html>`;
}, "D:/ESTUDIO/PRACTICAS/ASTRO/spotify-clone/src/layouts/Layout.astro", "self");

export { $$Layout as $, CardPlayButton as C };
