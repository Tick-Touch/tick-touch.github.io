(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6367:function(e,t,n){Promise.resolve().then(n.bind(n,2241))},2241:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437);n(6691);var a=n(2265),l=n(1396),r=n.n(l);let i="https://f963-2a09-bac5-d46f-16dc-00-247-55.ngrok-free.app";function o(){let[e,t]=(0,a.useState)(null),[n,l]=(0,a.useState)(0),[o,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(null),[p,h]=(0,a.useState)(0),[f,m]=(0,a.useState)(""),[g,v]=(0,a.useState)(!1),[x,b]=(0,a.useState)(0);return(0,a.useEffect)(()=>{var n,s,a,r;!g&&(null===(s=window.Telegram)||void 0===s?void 0:null===(n=s.WebApp)||void 0===n?void 0:n.initData)&&(window.Telegram.WebApp.expand(),m(window.Telegram.WebApp.platform),fetch(i+"/api/v1/user/me",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:(null===(r=window.Telegram)||void 0===r?void 0:null===(a=r.WebApp)||void 0===a?void 0:a.initData)||{}})}).then(e=>e.json()).then(e=>{console.log("fetch user me"),console.log(e);let n=Math.floor(Date.now()/1e3)-e.last_update_timestamp,s=e.current_energy+n*e.recover_energy;s>500*e.max_energy&&(s=500*e.max_energy),t(e.game_balance),l(e.coin_per_tap),h(500*e.max_energy),c(e.recover_energy),u(s),v(!0)}));let f=setInterval(()=>{console.log("progress");let e=d+o;e<0&&(e=0),e>p&&(e=p),u(e),b(e/p*100)},1e3),x=setInterval(()=>{g&&0!=e&&e>0&&fetch(i+"/api/v1/user/score",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:window.Telegram.WebApp.initData,game_balance:e,current_energy:d})}).then(e=>e.json()).then(e=>{})},1e3);return()=>{clearInterval(f),clearInterval(x)}},[g,e,n,o,p,d]),(0,s.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-8",children:[(0,s.jsxs)("p",{className:"text-center",children:["\uD83D\uDFE1 ",e]}),(0,s.jsx)("p",{className:"text-center",children:"Rank: Sliver"}),(0,s.jsxs)("p",{className:"text-center",children:["Platform: ",f]}),(0,s.jsx)("div",{className:"mx-auto text-center",children:(0,s.jsx)("button",{className:"relative",onClick:function(s){let a=d-1;a<0||(u(a),b(a/p*100),t(e+n))},children:(0,s.jsx)("img",{width:450,src:"coin.jpg"})})}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)(r(),{href:"/friends",children:"Friends"}),(0,s.jsx)(r(),{href:"/boosts",children:"Boosts"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("p",{children:[d," / ",p]}),(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",children:(0,s.jsx)("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:x+"%"}})})]})]})}}},function(e){e.O(0,[986,396,971,938,744],function(){return e(e.s=6367)}),_N_E=e.O()}]);