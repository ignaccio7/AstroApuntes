import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_AftOic9U.mjs';
import { f as decodeKey } from './chunks/astro/server_CYCd2rqf.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-info-playlist","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-info-playlist\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-info-playlist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-info-playlist.js","pathname":"/api/get-info-playlist","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DkD8QViA.css"},{"type":"inline","content":"input.slider[type=range]{font-size:1rem;width:100%;color:#19a74d;--thumb-height: 1em;--track-height: .1em;--track-color: rgba(143, 143, 143, .5);--brightness-hover: 80%;--brightness-down: 80%;--clip-edges: .125em;position:relative;background:transparent;overflow:hidden;cursor:pointer}input.slider[type=range],input.slider[type=range]::-webkit-slider-runnable-track,input.slider[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{height:0px}input.slider[type=range]:hover::-webkit-slider-thumb{height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{--thumb-radius: calc((var(--thumb-height) * .5) - 1px);--clip-top: calc((var(--thumb-height) - var(--track-height)) * .5 - .5px);--clip-bottom: calc(var(--thumb-height) - var(--clip-top));--clip-further: calc(100% + 1px) ;--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;width:var(--thumb-width, var(--thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--thumb-width, var(--thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px,var(--clip-edges) -1px,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--clip-edges) 100%,var(--clip-further) var(--clip-further))}input.slider[type=range]:hover::-webkit-slider-thumb{filter:brightness(var(--brightness-hover));cursor:pointer}input.slider[type=range]:active::-webkit-slider-thumb{filter:brightness(var(--brightness-down));cursor:pointer}input.slider[type=range]::-webkit-slider-runnable-track{background:linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)}\n"}],"routeData":{"route":"/playlist/[id]","isIndex":false,"type":"page","pattern":"^\\/playlist\\/([^/]+?)\\/?$","segments":[[{"content":"playlist","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/playlist/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DkD8QViA.css"},{"type":"inline","content":"input[type=search]::-webkit-search-cancel-button{margin-left:5px}\ninput.slider[type=range]{font-size:1rem;width:100%;color:#19a74d;--thumb-height: 1em;--track-height: .1em;--track-color: rgba(143, 143, 143, .5);--brightness-hover: 80%;--brightness-down: 80%;--clip-edges: .125em;position:relative;background:transparent;overflow:hidden;cursor:pointer}input.slider[type=range],input.slider[type=range]::-webkit-slider-runnable-track,input.slider[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{height:0px}input.slider[type=range]:hover::-webkit-slider-thumb{height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{--thumb-radius: calc((var(--thumb-height) * .5) - 1px);--clip-top: calc((var(--thumb-height) - var(--track-height)) * .5 - .5px);--clip-bottom: calc(var(--thumb-height) - var(--clip-top));--clip-further: calc(100% + 1px) ;--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;width:var(--thumb-width, var(--thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--thumb-width, var(--thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px,var(--clip-edges) -1px,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--clip-edges) 100%,var(--clip-further) var(--clip-further))}input.slider[type=range]:hover::-webkit-slider-thumb{filter:brightness(var(--brightness-hover));cursor:pointer}input.slider[type=range]:active::-webkit-slider-thumb{filter:brightness(var(--brightness-down));cursor:pointer}input.slider[type=range]::-webkit-slider-runnable-track{background:linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)}\n"}],"routeData":{"route":"/search","isIndex":true,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search/index.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DkD8QViA.css"},{"type":"inline","content":"input.slider[type=range]{font-size:1rem;width:100%;color:#19a74d;--thumb-height: 1em;--track-height: .1em;--track-color: rgba(143, 143, 143, .5);--brightness-hover: 80%;--brightness-down: 80%;--clip-edges: .125em;position:relative;background:transparent;overflow:hidden;cursor:pointer}input.slider[type=range],input.slider[type=range]::-webkit-slider-runnable-track,input.slider[type=range]::-webkit-slider-thumb{-webkit-appearance:none;height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{height:0px}input.slider[type=range]:hover::-webkit-slider-thumb{height:var(--thumb-height)}input.slider[type=range]::-webkit-slider-thumb{--thumb-radius: calc((var(--thumb-height) * .5) - 1px);--clip-top: calc((var(--thumb-height) - var(--track-height)) * .5 - .5px);--clip-bottom: calc(var(--thumb-height) - var(--clip-top));--clip-further: calc(100% + 1px) ;--box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax currentColor;width:var(--thumb-width, var(--thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--thumb-width, var(--thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px,var(--clip-edges) -1px,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--clip-edges) 100%,var(--clip-further) var(--clip-further))}input.slider[type=range]:hover::-webkit-slider-thumb{filter:brightness(var(--brightness-hover));cursor:pointer}input.slider[type=range]:active::-webkit-slider-thumb{filter:brightness(var(--brightness-down));cursor:pointer}input.slider[type=range]::-webkit-slider-runnable-track{background:linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/playlist/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/playlist/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/PlaylistItemCard.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/sections/Player.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/pages/search/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/search/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/get-info-playlist@_@js":"pages/api/get-info-playlist.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/playlist/[id]@_@astro":"pages/playlist/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/search/index@_@astro":"pages/search.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B8XUXjF9.mjs","\u0000@astrojs-manifest":"manifest_EBF_1dm5.mjs","@/components/Search/SearchBox":"_astro/SearchBox.t55w7rg2.js","@/components/Search/Playlists":"_astro/Playlists.CGaPMUTa.js","C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","@astrojs/react/client.js":"_astro/client.CTmmreJ3.js","@/components/CardPlayButton":"_astro/CardPlayButton.BHU2U0G3.js","@/components/Player/Player":"_astro/Player.BJ-gHgyc.js","C:/Users/Pc-s/Desktop/EQUIPO/NAXO/PRACTICAS/AstroApuntes/spotify-clone/src/components/CardPlayButton":"_astro/CardPlayButton.CLLuhhv_.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DkD8QViA.css","/favicon.svg","/fonts/CircularStd-Black.woff2","/fonts/CircularStd-Bold.woff2","/fonts/CircularStd-Book.woff2","/fonts/CircularStd-Light.woff2","/fonts/CircularStd-Medium.woff2","/_astro/CardPlayButton.BHU2U0G3.js","/_astro/CardPlayButton.CLLuhhv_.js","/_astro/client.CTmmreJ3.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/index.D15Q2Owl.js","/_astro/index.rqRkJQOZ.css","/_astro/Player.BJ-gHgyc.js","/_astro/Player.stzxlm4n.js","/_astro/Playlists.CGaPMUTa.js","/_astro/react.D1SYAZdI.js","/_astro/SearchBox.t55w7rg2.js","/_astro/searchStore.wWT5KQrb.js","/music/2/01.mp3","/music/2/02.mp3","/music/2/03.mp3","/music/2/04.mp3","/music/2/05.mp3","/music/1/01.mp3","/music/1/02.mp3","/music/1/03.mp3","/music/1/04.mp3","/music/1/05.mp3","/music/5/01.mp3","/music/5/02.mp3","/music/5/03.mp3","/music/5/04.mp3","/music/5/05.mp3","/music/3/01.mp3","/music/3/02.mp3","/music/3/03.mp3","/music/3/04.mp3","/music/3/05.mp3","/music/4/01.mp3","/music/4/02.mp3","/music/4/03.mp3","/music/4/04.mp3","/music/4/05.mp3","/music/6/01.mp3","/music/6/02.mp3","/music/6/03.mp3","/music/6/04.mp3","/music/6/05.mp3"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6maz/D0XVRZvPS6/9GEGGYS9NLc78LqYnrsRIFv1bH4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
