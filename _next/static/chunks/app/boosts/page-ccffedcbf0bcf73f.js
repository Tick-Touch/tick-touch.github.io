(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{9287:function(e,s,t){Promise.resolve().then(t.bind(t,3492))},3492:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var n=t(7437);t(6691);var l=t(2265),r=t(1396),a=t.n(r);let o="https://f963-2a09-bac5-d46f-16dc-00-247-55.ngrok-free.app";function c(){let[e,s]=(0,l.useState)(null),[t,r]=(0,l.useState)(0),[c,i]=(0,l.useState)(0),[d,u]=(0,l.useState)(100),[m,p]=(0,l.useState)(0),[h,x]=(0,l.useState)(""),[b,g]=(0,l.useState)(!1),[f,j]=(0,l.useState)(""),[y,v]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e;if(console.log("First fetch"),!b&&f){var t,n;x(window.Telegram.WebApp.platform),fetch(o+"/api/v1/user/me",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:(null===(n=window.Telegram)||void 0===n?void 0:null===(t=n.WebApp)||void 0===t?void 0:t.initData)||{}})}).then(e=>e.json()).then(e=>{console.log("fetch user me"),console.log(e),s(e.game_balance),r(e.coin_per_tap),p(e.max_energy),i(e.recover_energy),u(e.current_energy),g(!0),v(!0)})}return""==f&&(e=setInterval(()=>{var e,s;console.log("interval init data"),j(null===(s=window.Telegram)||void 0===s?void 0:null===(e=s.WebApp)||void 0===e?void 0:e.initData)},1e3)),()=>{e&&clearInterval(e)}},[b,e,t,c,m,d,f,y]);let N=e=>{fetch(o+"/api/v1/user/upgrade",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:window.Telegram.WebApp.initData,upgrade_type:e})}).then(e=>e.json()).then(s=>{s&&s.success&&("multitap"==e&&r(t+1),"max_energy"==e&&p(m+1),"recover_energy"==e&&i(c+1))})};return y?(0,n.jsxs)("main",{className:"flex min-h-screen flex-col p-8",children:[(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,n.jsx)(a(),{href:"/",children:"Home"}),(0,n.jsx)(a(),{href:"/friends",children:"Friends"}),(0,n.jsx)(a(),{href:"/boosts",children:"Boosts"})]}),(0,n.jsx)("p",{className:"text-2xl text-center",children:"Boosts"}),(0,n.jsxs)("div",{className:"text-center my-8",children:[(0,n.jsx)("p",{className:"text-xl mb-2",children:"Multitap"}),(0,n.jsxs)("p",{className:"mb-4",children:["Level ",t]}),(0,n.jsx)("p",{className:"mb-1",children:"Increase amount of Tickcoin"}),(0,n.jsx)("p",{className:"mb-4",children:"you can earn per one tap"}),(0,n.jsx)("p",{className:"mb-4",children:"+1 per tap for each level"}),(0,n.jsxs)("p",{className:"mb-4",children:["\uD83D\uDFE1 ",Math.pow(2,t)," coins"]}),e>Math.pow(2,t)?(0,n.jsx)("button",{onClick:()=>{console.log("upgrade multitap"),N("multitap")},type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Upgrade"}):(0,n.jsx)("button",{type:"button",class:"text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center",disabled:!0,children:"Upgrade"})]}),(0,n.jsxs)("div",{className:"text-center my-8",children:[(0,n.jsx)("p",{className:"text-xl mb-2",children:"Energy Limit"}),(0,n.jsxs)("p",{className:"mb-4",children:["Level ",m]}),(0,n.jsx)("p",{className:"mb-1",children:"Increase your energy limit"}),(0,n.jsx)("p",{className:"mb-4",children:"so you can mine more per session"}),(0,n.jsx)("p",{className:"mb-4",children:"+500 energy for each level"}),(0,n.jsxs)("p",{className:"mb-4",children:["\uD83D\uDFE1 ",Math.pow(2,m)," coins"]}),e>Math.pow(2,m)?(0,n.jsx)("button",{onClick:()=>{console.log("upgrade multitap"),N("max_energy")},type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Upgrade"}):(0,n.jsx)("button",{type:"button",class:"text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center",disabled:!0,children:"Upgrade"})]}),(0,n.jsxs)("div",{className:"text-center my-8",children:[(0,n.jsx)("p",{className:"text-xl mb-2",children:"Recharging Speed"}),(0,n.jsxs)("p",{className:"mb-4",children:["Level ",c]}),(0,n.jsx)("p",{className:"mb-4",children:"Increase the energy recharging speed"}),(0,n.jsx)("p",{className:"mb-4",children:"+1/second for each level"}),(0,n.jsx)("p",{className:"mb-4",children:"3 levels max limit"}),(()=>{if(3>c)return(0,n.jsxs)("p",{className:"mb-4",children:["\uD83D\uDFE1 ",Math.pow(100,c)," coins"]})})(),3>c&&e>Math.pow(100,c)?(0,n.jsx)("button",{onClick:()=>{N("recover_energy")},type:"button",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",children:"Upgrade"}):(0,n.jsx)("button",{type:"button",class:"text-white bg-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center",disabled:!0,children:"Upgrade"})]})]}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"flex min-h-screen flex-col p-8",children:[(0,n.jsxs)("div",{className:"flex justify-center space-x-4 mb-4",children:[(0,n.jsx)(a(),{href:"/",children:"Home"}),(0,n.jsx)(a(),{href:"/friends",children:"Friends"}),(0,n.jsx)(a(),{href:"/boosts",children:"Boosts"})]}),(0,n.jsx)("p",{className:"text-2xl text-center",children:"Boosts"})]})})}},1396:function(e,s,t){e.exports=t(5250)}},function(e){e.O(0,[250,986,971,938,744],function(){return e(e.s=9287)}),_N_E=e.O()}]);