(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[18],{125:function(t,e,c){"use strict";var n="account_key",a=function(t){window.localStorage.setItem(n,t)},r=function(){return window.localStorage.getItem(n)},s=function(){window.localStorage.setItem(n,null)};e.a=function(){return{setAccount:a,getAccount:r,clearAccount:s}}},182:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c(127),r=c(63),s=c(2),i=c(14),u=c(40),o=(c(88),c(132)),l=c(144),b=c(131),j=c(125),d=c(7);e.default=function(){var t=Object(s.useState)(""),e=Object(r.a)(t,2),c=e[0],f=e[1],p=Object(b.a)(),h=Object(r.a)(p,3),m=h[0],O=h[1],x=h[2],v=Object(j.a)(),g=v.setAccount,w=v.clearAccount,N=Object(i.g)();Object(s.useEffect)((function(){w()}),[w]),Object(s.useEffect)((function(){if(x){var t=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var e,c,a;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.getAccounts(O);case 2:if(0!==(e=t.sent).length){t.next=5;break}return t.abrupt("return");case 5:for(c=e[0],a=0;a<e.length;a++)e[a]<c&&(c=e[a]);f(parseInt(c));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[f,m,O,x]);var k=function(){var t=Object(a.a)(Object(n.a)().mark((function t(){var e;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=parseInt,t.next=3,m.lastID();case 3:if(t.t1=t.sent,e=(0,t.t0)(t.t1),c>0&&c<=e){t.next=8;break}return window.alert("Invalid ID"+e),t.abrupt("return");case 8:g(c),N.push("/app/dashboard");case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o.a,{}),Object(d.jsx)("div",{className:"auth-wrapper",children:Object(d.jsx)("div",{className:"auth-content",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"row align-items-center text-center",children:Object(d.jsx)("div",{className:"col-md-12",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("img",{src:l.a,alt:"",className:"img-fluid mb-4"}),Object(d.jsx)("h4",{className:"mb-3 f-w-400",children:"Signin"}),Object(d.jsx)("div",{className:"form-group fill",children:Object(d.jsx)("input",{value:c,onChange:function(t){return f(t.target.value)},type:"number",className:"form-control",id:"id",placeholder:"Account ID"})}),Object(d.jsx)("button",{className:"btn btn-block btn-primary mb-4",onClick:k,children:"Signin"}),Object(d.jsxs)("p",{className:"mb-0 text-muted",children:["Don\u2019t have an account?"," ",Object(d.jsx)(u.c,{to:"/auth/signup",className:"f-w-400",children:"Signup"})]})]})})})})})})]})}}}]);
//# sourceMappingURL=18.0a341a0f.chunk.js.map