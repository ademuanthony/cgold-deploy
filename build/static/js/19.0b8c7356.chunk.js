(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[19],{186:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(127),n=c(63),o=c(5),s=c(2),i=c(139),u=c(140),j=c(161),l=c(131),b=c(125),d=c(7);t.default=function(){var e=Object(b.a)().getAccount,t=Object(l.a)(),c=Object(n.a)(t,4),O=c[0],h=c[3],f=Object(s.useState)("0"),p=Object(n.a)(f,2),x=p[0],v=p[1],m=Object(s.useState)(""),w=Object(n.a)(m,2),g=w[0],k=w[1],C=Object(s.useState)(!1),y=Object(n.a)(C,2),A=y[0],S=y[1],B=Object(s.useState)(),G=Object(n.a)(B,2),M=G[0],N=G[1],D=Object(s.useState)(1),I=Object(n.a)(D,2),U=I[0],E=I[1];Object(s.useEffect)((function(){if(h){var t=e();k(t);var c=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser(o.a.from(t));case 2:c=e.sent,N(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();c()}}),[O,e,N,h]);var J=function(){var e=Object(r.a)(Object(a.a)().mark((function e(){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.confirm("Adding ".concat(U," accounts under ").concat(g,". The activation fee will be deducted from your connected wallet. Continue?"))||console.log(g,x,M.addr,U),e.next=3,O.addAndActivateMultipleAccounts(g,x,M.addr,U);case 3:window.alert("Submitted");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(i.a.Header,{children:Object(d.jsx)(i.a.Title,{as:"h5",children:"Add Multiple Accounts"})}),Object(d.jsx)(i.a.Body,{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(u.a.Group,{id:"formBasicEmail",children:Object(d.jsx)(u.a.Control,{value:U,onChange:function(e){return E(e.target.value)},type:"number",placeholder:"Number of Accounts"})}),Object(d.jsxs)(u.a.Group,{id:"formBasicPassword",children:[Object(d.jsx)(u.a.Label,{children:"Referral ID"}),Object(d.jsx)(u.a.Control,{onChange:function(e){return v(e.target.value)},type:"text",value:g})]}),Object(d.jsx)(u.a.Group,{className:"text-left",children:Object(d.jsx)(u.a.Check,{custom:!0,value:A,onChange:function(e){return S(e.target.checked)},type:"checkbox",id:"supported-checkbox",label:"Set Matrix Upline ID"})}),A?Object(d.jsxs)(u.a.Group,{id:"formBasicPassword",children:[Object(d.jsx)(u.a.Label,{children:"Matrix Upline ID"}),Object(d.jsx)(u.a.Control,{value:x,onChange:function(e){return v(e.target.value)},type:"text"})]}):"",Object(d.jsx)(j.a,{variant:"primary",onClick:J,children:"Submit"})]})})]})})})})}}}]);
//# sourceMappingURL=19.0b8c7356.chunk.js.map