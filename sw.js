if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const d=e=>n(e,t),f={module:{uri:t},exports:o,require:d};i[t]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-11-I9pht.css",revision:null},{url:"assets/index-DaR_zEyT.js",revision:null},{url:"index.html",revision:"f38d4f7601979ff9215682c06969c78d"},{url:"registerSW.js",revision:"c315dae9ffc86f1a8ab078b8308dcd1b"},{url:"192.png",revision:"90aa9d41017f4f114392e9ecf5465746"},{url:"512.png",revision:"db34de52b97044886e9824d8f564cf12"},{url:"apple-touch-icon.png",revision:"db34de52b97044886e9824d8f564cf12"},{url:"manifest.webmanifest",revision:"b95bb7a5b781e85daa5456bc095a4fca"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
