(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[2],{107:function(e,t){},108:function(e,t){},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(44),c=n(42),o=n(40),u=n(8),i=n(14),l=(n(101),n(71)),s=n(7);var d=function(e){var t=Object(i.h)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[t]),Object(s.jsx)(s.Fragment,{children:e.children||null})},b=a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(1),n.e(25)]).then(n.bind(null,181))})),j=a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(18)]).then(n.bind(null,182))})),O=a.lazy((function(){return n.e(9).then(n.bind(null,194))})),h=a.lazy((function(){return n.e(10).then(n.bind(null,193))})),f=[{path:"/auth/signup",exact:!0,name:"Signup",component:b},{path:"/auth/signin",exact:!0,name:"Signin",component:j},{path:"/maintenance/error",exact:!0,name:"Error",component:O},{path:"/maintenance/coming-soon",exact:!0,name:"Coming Soon",component:a.lazy((function(){return n.e(8).then(n.bind(null,195))}))},{path:"/maintenance/offline-ui",exact:!0,name:"Offline UI",component:h}],m=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(1),n.e(16)]).then(n.bind(null,192))})),p=function(){var e=Object(i.h)();return window.ethereum&&(window.ethereum.on("accountsChanged",(function(){window.location.reload()})),window.ethereum.on("chainChanged",(function(){window.location.reload()}))),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{children:Object(s.jsxs)(a.Suspense,{fallback:Object(s.jsx)(l.a,{}),children:[Object(s.jsx)(i.b,{path:f.map((function(e){return e.path})),children:Object(s.jsx)(i.d,{location:e,children:f.map((function(e,t){return e.component?Object(s.jsx)(i.b,{path:e.path,exact:e.exact,render:function(t){return Object(s.jsx)(e.component,Object(u.a)({},t))}},t):null}))},e.pathname)}),Object(s.jsx)(i.b,{path:"/app",children:Object(s.jsx)(m,{})}),Object(s.jsx)(i.b,{exact:!0,path:"/",children:Object(s.jsx)(i.a,{to:"/auth/signin"})})]})}),Object(s.jsx)("div",{className:"backdrop"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(64),x=n(48),L=Object(x.b)(y.a),g=n(43),v=(n(88),n(49)),E=n(120),T=n(63),w=new(n(85).a)({supportedChainIds:[97,56]});var C=function(e){var t=e.children,n=Object(v.b)(),r=n.active,c=n.error,o=n.activate,u=Object(a.useState)(!1),i=Object(T.a)(u,2),l=i[0],d=i[1];return Object(a.useEffect)((function(){"1"===localStorage.getItem("connected")?w.isAuthorized().then((function(e){d(!0),!e||r||c||o(w)})).catch((function(){d(!0)})):d(!0)}),[o,r,c]),l?t:Object(s.jsx)(s.Fragment,{children:"Loading"})};var k=Object(s.jsx)(a.StrictMode,{children:Object(s.jsx)(c.a,{store:L,children:Object(s.jsx)(o.a,{basename:g.a.basename,children:Object(s.jsx)(v.a,{getLibrary:function(e){return new E.a(e)},children:Object(s.jsx)(C,{children:Object(s.jsx)(p,{})})})})})});r.render(k,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"l",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"k",(function(){return d})),n.d(t,"g",(function(){return b})),n.d(t,"a",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"i",(function(){return h}));var a="@able/COLLAPSE_MENU",r="@able/COLLAPSE_TOGGLE",c="@able/CHANGE_LAYOUT",o="@able/CHANGE_SUB_LAYOUT",u="@able/LAYOUT_TYPE",i="@able/RESET",l="@able/HEADER_BACK_COLOR",s="@able/RTL_LAYOUT",d="@able/NAV_FIXED_LAYOUT",b="@able/HEADER_FIXED_LAYOUT",j="@able/BOX_LAYOUT",O="@able/NAV_CONTENT_LEAVE",h="@able/NAV_COLLAPSE_LEAVE"},43:function(e,t,n){"use strict";t.a={defaultPath:"/app",basename:"",layout:"vertical",subLayout:"",collapseMenu:!1,layoutType:"menu-light",headerBackColor:"header-blue",rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return O}));var a=n(48),r=n(42),c=n(54),o=n(8),u=n(20),i=n(43),l=Object(o.a)({isOpen:[],isTrigger:[]},i.a),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,n=[],a=[];switch(t.type){case u.d:return Object(o.a)(Object(o.a)({},e),{},{collapseMenu:!e.collapseMenu});case u.e:if("sub"===t.menu.type){a=e.isOpen;var r=(n=e.isTrigger).indexOf(t.menu.id);r>-1&&(a=a.filter((function(e){return e!==t.menu.id})),n=n.filter((function(e){return e!==t.menu.id}))),-1===r&&(a=[].concat(Object(c.a)(a),[t.menu.id]),n=[].concat(Object(c.a)(n),[t.menu.id]))}else{a=e.isOpen;var i=e.isTrigger.indexOf(t.menu.id);n=-1===i?[t.menu.id]:[],a=-1===i?[t.menu.id]:[]}return Object(o.a)(Object(o.a)({},e),{},{isOpen:a,isTrigger:n});case u.j:return Object(o.a)(Object(o.a)({},e),{},{isOpen:a,isTrigger:n});case u.i:if("sub"===t.menu.type){a=e.isOpen;var s=(n=e.isTrigger).indexOf(t.menu.id);return s>-1&&(a=a.filter((function(e){return e!==t.menu.id})),n=n.filter((function(e){return e!==t.menu.id}))),Object(o.a)(Object(o.a)({},e),{},{isOpen:a,isTrigger:n})}return Object(o.a)({},e);case u.b:return Object(o.a)(Object(o.a)({},e),{},{layout:t.layout});case u.c:return Object(o.a)(Object(o.a)({},e),{},{subLayout:t.subLayout});case u.h:return Object(o.a)(Object(o.a)({},e),{},{layoutType:t.layoutType,headerBackColor:l.headerBackColor});case u.f:return Object(o.a)(Object(o.a)({},e),{},{headerBackColor:t.headerBackColor});case u.m:return Object(o.a)(Object(o.a)({},e),{},{rtlLayout:!e.rtlLayout});case u.k:return Object(o.a)(Object(o.a)({},e),{},{navFixedLayout:!e.navFixedLayout});case u.g:return Object(o.a)(Object(o.a)({},e),{},{headerFixedLayout:!e.headerFixedLayout,headerBackColor:e.headerFixedLayout||"header-default"!==l.headerBackColor?e.headerBackColor:"header-blue"});case u.a:return Object(o.a)(Object(o.a)({},e),{},{boxLayout:!e.boxLayout});case u.l:return Object(o.a)(Object(o.a)({},e),{},{layout:l.layout,subLayout:l.subLayout,collapseMenu:l.collapseMenu,layoutType:l.layoutType,headerBackColor:l.headerBackColor,rtlLayout:l.rtlLayout,navFixedLayout:l.navFixedLayout,headerFixedLayout:l.headerFixedLayout,boxLayout:l.boxLayout});default:return e}},d={allNames:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(o.a)({},d),t=arguments.length>1?arguments[1]:void 0;return"DEMO"===t.type?{allNames:e.allNames.concat(t.name)}:e},j=Object(a.a)({able:s,demo:b}),O=Object(r.b)();t.a=j},71:function(e,t,n){"use strict";n(2);var a=n(7);t.a=function(){return Object(a.jsx)("div",{className:"loader-bg",children:Object(a.jsx)("div",{className:"loader-track",children:Object(a.jsx)("div",{className:"loader-fill"})})})}},88:function(e,t,n){}},[[116,3,4]]]);
//# sourceMappingURL=main.f59c00b5.chunk.js.map