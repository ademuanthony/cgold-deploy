(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[27],{196:function(e,a,c){"use strict";c.r(a);var t=c(2),i=c(180),s=c(137),l=c(54),r=c(8),n=c(63),o=c(190),d=c(139),j=c(191),b=c(136),h=c(124),m=c(7),u=function(e){var a,c,i,s,u=Object(b.a)(),O=u.windowWidth,p=u.windowHeight,x=Object(t.useState)({isOption:e.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1}),f=Object(n.a)(x,2),C=f[0],N=f[1],g={},v=[];return C.isOption&&(c=Object(m.jsx)("div",{className:"card-header-right",children:Object(m.jsxs)(o.a,{alignRight:!0,className:"btn-group card-option",children:[Object(m.jsx)(o.a.Toggle,{id:"dropdown-basic",className:"btn-icon",children:Object(m.jsx)("i",{className:"feather icon-more-horizontal"})}),Object(m.jsxs)(o.a.Menu,{as:"ul",className:"list-unstyled card-option",children:[Object(m.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){N(Object(r.a)(Object(r.a)({},C),{},{fullCard:!C.fullCard}))},children:[Object(m.jsx)("i",{className:C.fullCard?"feather icon-minimize":"feather icon-maximize"}),Object(m.jsxs)("a",{href:h.a.BLANK_LINK,children:[" ",C.fullCard?"Restore":"Maximize"," "]})]}),Object(m.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){N(Object(r.a)(Object(r.a)({},C),{},{collapseCard:!C.collapseCard}))},children:[Object(m.jsx)("i",{className:C.collapseCard?"feather icon-plus":"feather icon-minus"}),Object(m.jsxs)("a",{href:h.a.BLANK_LINK,children:[" ",C.collapseCard?"Expand":"Collapse"," "]})]}),Object(m.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){N(Object(r.a)(Object(r.a)({},C),{},{loadCard:!0})),setInterval((function(){N(Object(r.a)(Object(r.a)({},C),{},{loadCard:!1}))}),3e3)},children:[Object(m.jsx)("i",{className:"feather icon-refresh-cw"}),Object(m.jsx)("a",{href:h.a.BLANK_LINK,children:" Reload "})]}),Object(m.jsxs)(o.a.Item,{as:"li",className:"dropdown-item",onClick:function(){N(Object(r.a)(Object(r.a)({},C),{},{cardRemove:!0}))},children:[Object(m.jsx)("i",{className:"feather icon-trash"}),Object(m.jsx)("a",{href:h.a.BLANK_LINK,children:" Remove "})]})]})]})})),i=Object(m.jsxs)(d.a.Header,{children:[Object(m.jsx)(d.a.Title,{as:"h5",children:e.title}),c]}),C.fullCard&&(v=[].concat(Object(l.a)(v),["full-card"]),g={position:"fixed",top:0,left:0,right:0,width:O,height:p}),C.loadCard&&(v=[].concat(Object(l.a)(v),["card-load"]),a=Object(m.jsx)("div",{className:"card-loader",children:Object(m.jsx)("i",{className:"pct-loader1 anim-rotate"})})),C.cardRemove&&(v=[].concat(Object(l.a)(v),["d-none"])),e.cardClass&&(v=[].concat(Object(l.a)(v),[e.cardClass])),s=Object(m.jsxs)(d.a,{className:v.join(" "),style:g,children:[i,Object(m.jsx)(j.a,{in:!C.collapseCard,children:Object(m.jsx)("div",{children:Object(m.jsx)(d.a.Body,{children:e.children})})}),a]}),Object(m.jsx)(m.Fragment,{children:s})};a.default=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(s.a,{children:Object(m.jsx)(u,{title:"Hello Card",isOption:!0,children:Object(m.jsx)("p",{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'})})})})})}}}]);
//# sourceMappingURL=27.dec891c1.chunk.js.map