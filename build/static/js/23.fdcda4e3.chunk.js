(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[23],{188:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(127),c=r(63),s=r(5),i=r(134),l=r(2),u=r(139),j=r(140),o=r(161),b=r(131),d=r(125),h=r(7);t.default=function(){var e=Object(d.a)().getAccount,t=Object(b.a)(),r=Object(c.a)(t,4),O=r[0],f=r[3],p=Object(l.useState)(s.a.from("0")),x=Object(c.a)(p,2),m=x[0],v=x[1],w=Object(l.useState)(""),g=Object(c.a)(w,2),k=g[0],E=g[1],y=Object(l.useState)(""),A=Object(c.a)(y,2),C=A[0],S=A[1];Object(l.useEffect)((function(){if(f){var t=e(),r=function(){var e=Object(n.a)(Object(a.a)().mark((function e(){var r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser(s.a.from(t));case 2:return r=e.sent,e.next=5,O.presaleBalance(r.addr);case 5:n=e.sent,v(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r()}}),[O,e,f]);var B=function(){var e=Object(n.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.a.utils.parseEther(C).gt(m)){e.next=3;break}return window.alert("Insufficient balance"),e.abrupt("return");case 3:return e.next=5,O.transferInternal(k,i.a.utils.parseEther(C));case 5:window.alert("Submitted");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(u.a.Header,{children:Object(h.jsxs)(u.a.Title,{as:"h5",children:["Internal Transfer ",Object(h.jsxs)("span",{className:"transPresaleBalance",children:["$",i.a.utils.formatEther(m)]})," "]})}),Object(h.jsx)(u.a.Body,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(j.a.Group,{id:"receiverID",children:[Object(h.jsx)(j.a.Label,{children:"Reciever"}),Object(h.jsx)(j.a.Control,{value:k,onChange:function(e){return E(e.target.value)},type:"text",placeholder:"Enter Reciever's Wallet Address"}),Object(h.jsx)(j.a.Text,{className:"text-muted",children:"Enter receiver's the wallet address"})]}),Object(h.jsxs)(j.a.Group,{id:"formBasicEmail",children:[Object(h.jsx)(j.a.Label,{children:"Amount"}),Object(h.jsx)(j.a.Control,{value:C,onChange:function(e){return S(e.target.value)},id:"addMultiAmount",type:"number",placeholder:"Enter Amount"})]}),Object(h.jsx)(o.a,{onClick:B,variant:"primary",children:"Send"})]})})]})})})})}}}]);
//# sourceMappingURL=23.fdcda4e3.chunk.js.map