(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[9],{124:function(e,t,c){"use strict";t.a={BLANK_LINK:"#"}},132:function(e,t,c){"use strict";var a=c(63),i=c(2),s=c(40),l=c(43),r=c(135),n=c(124),d=c(7);t.a=function(e){var t=Object(i.useState)(),c=Object(a.a)(t,2),o=c[0],p=c[1],m=Object(i.useState)(),u=Object(a.a)(m,2),h=u[0],j=u[1];Object(i.useEffect)((function(){r.a.items.map((function(e,t){return e.type&&"group"===e.type&&O(e),!1}))}),[]);var b,f,O=function e(t){t.children&&t.children.filter((function(c){return c.type&&"collapse"===c.type?e(c):c.type&&"item"===c.type&&document.location.pathname===l.a.basename+c.url&&(j(c),p(t)),!1}))},x="",N="Welcome";return o&&"collapse"===o.type&&(b=Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{href:n.a.BLANK_LINK,children:o.title})})),h&&"item"===h.type&&(N=h.title,f=Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)("a",{href:n.a.BLANK_LINK,children:N})}),!1!==h.breadcrumbs&&(x=Object(d.jsx)("div",{className:"page-header",children:Object(d.jsx)("div",{className:"page-block",children:Object(d.jsx)("div",{className:"row align-items-center",children:Object(d.jsxs)("div",{className:"col-md-12",children:[Object(d.jsx)("div",{className:"page-header-title",children:Object(d.jsx)("h5",{className:"m-b-10",children:N})}),Object(d.jsxs)("ul",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("i",{className:"feather icon-home"})})}),b,f]})]})})})}))),document.title=N+" | CLUB250CENT ",Object(d.jsx)(d.Fragment,{children:x})}},135:function(e,t,c){"use strict";t.a={items:[{id:"support",title:"",type:"group",icon:"icon-support",children:[{id:"dashbaord",title:"Dashbaord",type:"item",url:"/app/dashboard",classes:"nav-item",icon:"feather icon-home"},{id:"account",title:"Account",type:"collapse",classes:"nav-item",icon:"feather icon-user-check",children:[{id:"profile",title:"Profile",type:"item",url:"/app/profile"},{id:"linked-accounts",title:"Linked Accounts",type:"item",url:"/app/linked-accounts"},{id:"referrals",title:"Referrals",type:"item",url:"/app/referrals"},{id:"addMutltipleAccounts",title:"Add Multiple Accounts",type:"item",url:"/app/add-multiple-accounts"},{id:"matrix",title:"Matrix",type:"item",url:"/app/matrix"}]},{id:"wallet",title:"Wallet",type:"collapse",classes:"nav-item",icon:"feather icon-book",children:[{id:"transfer",title:"Transfer",type:"item",url:"/app/transfer"},{id:"withdraw",title:"Withdraw",type:"item",url:"/app/withdraw"},{id:"change-wallet",title:"Change Wallet",type:"item",url:"/app/change-wallet"}]},{id:"logout",title:"Logout",type:"item",url:"/auth/signin",classes:"nav-item",icon:"feather icon-signout"}]}]}},194:function(e,t,c){"use strict";c.r(t);c(2);var a=c(40),i=(c(88),c(132)),s=c.p+"static/media/404.2c006ab5.png",l=c(7);t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{}),Object(l.jsx)("div",{className:"auth-wrapper maintenance",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{src:s,alt:"",className:"img-fluid"}),Object(l.jsx)("h5",{className:"text-muted mb-4",children:"Oops! Page not found!"}),Object(l.jsxs)(a.c,{to:"/",className:"btn btn-danger mb-4",children:[Object(l.jsx)("i",{className:"feather icon-refresh-ccw mr-2"}),"Reload"]})]})})})})]})}}}]);
//# sourceMappingURL=9.9c23f96a.chunk.js.map