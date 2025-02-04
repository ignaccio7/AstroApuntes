import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_COl6HhEV.mjs';
import { manifest } from './manifest_EBF_1dm5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/get-info-playlist.astro.mjs');
const _page2 = () => import('./pages/playlist/_id_.astro.mjs');
const _page3 = () => import('./pages/search.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.8_jiti@1.21.7_rollup@4.31.0_typescript@5.7.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-info-playlist.js", _page1],
    ["src/pages/playlist/[id].astro", _page2],
    ["src/pages/search/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e36b1f4a-cf37-455d-9d8d-0482f64a56c9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
