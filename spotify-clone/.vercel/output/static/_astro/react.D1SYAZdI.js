import{R}from"./index.D15Q2Owl.js";var x={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S;function b(){if(S)return a;S=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(u,r,s){var l=null;if(s!==void 0&&(l=""+s),r.key!==void 0&&(l=""+r.key),"key"in r){s={};for(var o in r)o!=="key"&&(s[o]=r[o])}else s=r;return r=s.ref,{$$typeof:t,type:u,key:l,ref:r!==void 0?r:null,props:s}}return a.Fragment=e,a.jsx=n,a.jsxs=n,a}var f;function _(){return f||(f=1,x.exports=b()),x.exports}var q=_();const p=t=>{let e;const n=new Set,u=(i,d)=>{const c=typeof i=="function"?i(e):i;if(!Object.is(c,e)){const v=e;e=d??(typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(m=>m(e,v))}},r=()=>e,o={setState:u,getState:r,getInitialState:()=>j,subscribe:i=>(n.add(i),()=>n.delete(i))},j=e=t(u,r,o);return o},k=t=>t?p(t):p,T=t=>t;function I(t,e=T){const n=R.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return R.useDebugValue(n),n}const E=t=>{const e=k(t),n=u=>I(e,u);return Object.assign(n,e),n},h=t=>t?E(t):E;export{h as c,q as j};
