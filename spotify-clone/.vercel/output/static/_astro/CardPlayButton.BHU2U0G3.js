import{j as t}from"./react.D1SYAZdI.js";import{u as P,P as m,a as f}from"./Player.stzxlm4n.js";import"./index.D15Q2Owl.js";/* empty css                       */function b({id:s,size:n=24,className:a=""}){const{isPlaying:e,setIsPlaying:l,currentMusic:c,setCurrentMusic:u}=P(),i=c?.playlist?.id==s,g=e&&i,y=()=>{if(i){console.log("Click"),l(!e);return}console.log("Busco otro"),fetch(`/api/get-info-playlist?id=${s}`).then(o=>o.json()).then(o=>{console.log(o);const{playlist:p,songs:r}=o;u({playlist:p,songs:r,song:r[0]}),l(!0)})};return t.jsx("button",{className:`
        block
        pointer-events-auto text-black
        bg-green-500 p-3 rounded-full
        hover:bg-green-400 hover:scale-105
        transition-all duration-300 ease-in-out        
        ${a}
      `,onClick:y,children:g?t.jsx(m,{size:n}):t.jsx(f,{size:n})})}export{b as CardPlayButton};
