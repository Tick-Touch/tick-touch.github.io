(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6367:function(e,t,n){Promise.resolve().then(n.bind(n,2241))},2241:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437);n(6691);var a=n(2265),r=n(1396),l=n.n(r);let i="https://9605-27-74-167-232.ngrok-free.app";function o(){let[e,t]=(0,a.useState)(null),[n,r]=(0,a.useState)(0),[o,c]=(0,a.useState)(0),[d,u]=(0,a.useState)(100),[p,h]=(0,a.useState)(0),[m,f]=(0,a.useState)(""),[x,v]=(0,a.useState)(!1),[g,j]=(0,a.useState)(0);return(0,a.useEffect)(()=>{var n,s,a,l;!x&&(null===(s=window.Telegram)||void 0===s?void 0:null===(n=s.WebApp)||void 0===n?void 0:n.initData)&&(window.Telegram.WebApp.expand(),f(window.Telegram.WebApp.platform),fetch(i+"/api/v1/user/me",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:(null===(l=window.Telegram)||void 0===l?void 0:null===(a=l.WebApp)||void 0===a?void 0:a.initData)||{}})}).then(e=>e.json()).then(e=>{console.log("fetch user me"),console.log(e),t(e.game_balance),r(e.coin_per_tap),h(e.max_energy),c(e.recover_energy),u(e.current_energy),v(!0)}));let m=setInterval(()=>{console.log("progress");let e=d+o;e<0&&(e=0),e>p&&(e=p),u(e),j(e/p*100)},1e3),g=setInterval(()=>{x&&0!=e&&e>0&&fetch(i+"/api/v1/user/score",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:window.Telegram.WebApp.initData,game_balance:e})}).then(e=>e.json()).then(e=>{})},1e3);return()=>{clearInterval(m),clearInterval(g)}},[x,e,n,o,p,d,p]),(0,s.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-8",children:[(0,s.jsxs)("p",{className:"text-center",children:["Token: ",e]}),(0,s.jsxs)("p",{className:"text-center",children:["coinPerTap: ",n]}),(0,s.jsxs)("p",{className:"text-center",children:["recoverEnergy: ",o]}),(0,s.jsx)("p",{className:"text-center",children:"Rank: Sliver"}),(0,s.jsxs)("p",{className:"text-center",children:["Platform: ",m]}),(0,s.jsx)("div",{className:"mx-auto text-center",children:(0,s.jsx)("button",{className:"relative",onClick:function(s){let a=d-1;a<0||(a>p&&(a=p),u(a),j(a/p*100),t(e+n))},children:(0,s.jsx)("img",{width:450,src:"coin.jpg"})})}),(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)(l(),{href:"/friends",children:"Friends"}),(0,s.jsx)(l(),{href:"/boosts",children:"Boosts"})]}),(0,s.jsx)("div",{className:"w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",children:(0,s.jsx)("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:g+"%"}})})]})}}},function(e){e.O(0,[986,396,971,938,744],function(){return e(e.s=6367)}),_N_E=e.O()}]);