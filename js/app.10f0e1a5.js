(function(e){function t(t){for(var n,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d88d8df3"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"a77c6bd1"}[e]+".css",o=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===n||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],p.parentNode.removeChild(p),r(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0906":function(e,t,r){"use strict";var n=r("1d87"),a=r.n(n);a.a},"1d87":function(e,t,r){},2018:function(e,t,r){},4676:function(e,t,r){e.exports=r.p+"img/rule.c44d5503.png"},"4ee7":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("2b0e"),a=r("0ff2"),o=r("59ca"),c=r.n(o);r("e71f");n["a"].use(a["a"]);var i=c.a.initializeApp({apiKey:"AIzaSyB2YKyLcVd39KzxcIA4eGDo0sK5i4srzT8",authDomain:"salmonrunproject.firebaseapp.com",databaseURL:"https://salmonrunproject.firebaseio.com",projectId:"salmonrunproject",storageBucket:"salmonrunproject.appspot.com",messagingSenderId:"237537081773",appId:"1:237537081773:web:52ea3c9979c49838e54924",measurementId:"G-EBXKSE6T4B"}),u=i.firestore()},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("img",{attrs:{alt:"SeedHack",src:r("cf05"),width:"300"}}),n("router-view")],1)},o=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{color:"grey lighten-4",flat:"",tile:""}},[r("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500&display=swap",rel:"stylesheet"}}),r("v-toolbar",{attrs:{dense:"",flat:"",short:"",dark:""}},[r("v-toolbar-title",[r("router-link",{attrs:{to:"/"}},[e._v("TOP")])],1),r("v-spacer"),r("v-tabs",{attrs:{right:""}},[r("v-tab",[r("router-link",{attrs:{to:"/ranking"}},[e._v("RANKING")])],1)],1)],1)],1)},i=[],u=(r("0906"),r("2877")),s=r("6544"),l=r.n(s),f=r("b0af"),p=r("2fa4"),d=r("71a3"),v=r("fe57"),m=r("71d9"),h=r("2a7f"),b={},g=Object(u["a"])(b,c,i,!1,null,null,null),_=g.exports;l()(g,{VCard:f["a"],VSpacer:p["a"],VTab:d["a"],VTabs:v["a"],VToolbar:m["a"],VToolbarTitle:h["a"]});var y={name:"App",components:{Header:_}},w=y,j=(r("5c0b"),r("7496")),k=Object(u["a"])(w,a,o,!1,null,null,null),E=k.exports;l()(k,{VApp:j["a"]});var O=r("f309");n["a"].use(O["a"]);var T=new O["a"]({}),S=(r("d3b7"),r("8c4f")),x=r("bb51");n["a"].use(S["a"]);var C=[{path:"/",name:"Home",component:x["default"]},{path:"/ranking",name:"Ranking",component:function(){return r.e("about").then(r.bind(null,"4320"))}}],A=new S["a"]({mode:"hash",base:"/",routes:C}),P=A;r("4ee7"),r("2018");n["a"].config.productionTip=!1,new n["a"]({vuetify:T,router:P,render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"6b7e":function(e,t,r){"use strict";var n=r("ba10"),a=r.n(n);a.a},"7ad4":function(e,t,r){"use strict";var n=r("9cae"),a=r.n(n);t["default"]=a.a},"7cad":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("アスファルトサーモンラン切りつけるタイヤ大会")]),n("h2",[e._v("大会概要")]),e._m(0),n("h2",[e._v("大会ルール")]),e._m(1),n("h3",[e._v("ポイント計算方法")]),n("div",{staticClass:"desc"},[n("v-img",{attrs:{src:r("4676"),"max-width":"80%"}}),n("p",[e._v(" 今までのサーモンランの大会はいろいろ試行錯誤はされていましたが、結局のところ上手い人が上位に入賞できる大会でした。そのシステム自体を否定するつもりはありませんが、 自分自身、一人のサーモンランプレイヤーとして「タイヤ大会を実力を完全に無視して誰もが楽しめる大会」にすることを心がけることにしました。 ")]),n("p",[e._v(" しかし、サーモンランのスコアだけでポイントを計算するとどうしても実力がスコアに反映されてしまいます。 そこでタイヤ大会では「サーモンランとは全く関係ない」パラメータである「タイヤを切りつけた回数」を計算式に組み込むことにより、今までのどの大会も成し得なかった 実力主義大会からの完全な解放を達成しました。 ")])],1),n("h3",[e._v("タイヤ大会のオリジナルルール")]),e._m(2),n("h2",[e._v("リザルト提出方法")]),e._m(3)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"desc"},[r("p",[e._v("今まで開催されてきたサーモンランの大会はメンバー登録が必要だったり、DM等でのリザルトの提出が必要不可欠でした。")]),r("p",[e._v("しかしこれはリザルトの提出し忘れ・提出期限の勘違い・急なメンバー変更などで運営側・参加者側のどちらも手間がかかるものでした。")]),r("p",[e._v(" そこで当大会（以後、タイヤ大会とする）では「そういった煩わしさから解放される方法はないか」「誰しもが実力関係なしに楽しめる大会はできないのか」という点にのみ フォーカスし、大会のルールや運営方針を決定しました。 ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"desc"},[r("p",[e._v("2020 9/16からの朽ちた箱舟 ポラリスのシフトを遊ぶだけ！四人集めてチームで参加しても、一人で参加しても大丈夫です！ややこしいチーム部門やソロ部門などはありません。")]),r("p")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"desc"},[r("p",[e._v("タイヤ大会では恐らくサーモンランの非公式大会では初めてとなるリザルトの提出が不要な大会です。もちろん、上位を狙いたい方は良い記録が出たときに個別でリザルトを提出していただくこともできます。")]),r("p",[e._v("本大会は、リザルトの提出忘れや期限忘れにも対応するためリザルトが提出されていないプレイヤーに対して「最低限」のポイントを与えるシステムをとっています。")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"desc"},[r("p",[e._v("タイヤ大会では運営コストを最小限まで減らすため、リザルトの提出は必ずしも必要ではありませんが、提出したい方向けにフォームを用意しております。")]),r("p",[e._v("以下の四つのうち、どれかでリザルトを提出ください。")]),r("ul",[r("li",[e._v("DMで大会運営責任者である@tkglingにリザルトのスクリーンショットを提出")]),r("li",[e._v("リザルトを印刷の上、郵送で提出")]),r("li",[e._v("リザルトを印刷の上、FAXで提出")]),r("li",[e._v("リザルトをZIPファイルでパスワード付き圧縮の上、メールで提出")])])])}]},"9c0c":function(e,t,r){},"9cae":function(e,t){},ba10:function(e,t,r){},bb51:function(e,t,r){"use strict";var n=r("7cad"),a=r("7ad4"),o=(r("6b7e"),r("2877")),c=r("6544"),i=r.n(c),u=r("adda"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"ec3bd1d0",null);t["default"]=s.exports,i()(s,{VImg:u["a"]})},cf05:function(e,t,r){e.exports=r.p+"img/logo.334c5ea3.png"}});
//# sourceMappingURL=app.10f0e1a5.js.map