(this["webpackJsonpable-pro-react-hook-js"]=this["webpackJsonpable-pro-react-hook-js"]||[]).push([[15],{171:function(e,t,a){},197:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(127),s=a(63),l=a(5),i=a(2),n=a(131),d=a(125),h=a(10),j=a(9),x=Object(h.a)((function e(){var t=this;Object(j.a)(this,e),this.id=0,this.level=0,this.left={},this.right={},this.load=function(){var a=Object(r.a)(Object(c.a)().mark((function a(r,s,l,i){var n;return Object(c.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==r){a.next=2;break}return a.abrupt("return");case 2:if(t.id=r,!(l<=0)){a.next=5;break}return a.abrupt("return");case 5:return a.prev=5,a.next=8,i.getDirectLegs(r,b(s));case 8:n=a.sent,t.left=new e,t.left.id=parseInt(n.left),t.left.level=parseInt(n.leftLevel),t.right=new e,t.right.id=parseInt(n.right),t.right.level=parseInt(n.rightLevel),a.next=22;break;case 17:return a.prev=17,a.t0=a.catch(5),console.log(a.t0),console.log("call",l,r,b(s)),a.abrupt("return");case 22:parseInt(n.left)>0&&t.left.load(parseInt(n.left),s,l-1,i),parseInt(n.right)>0&&t.right.load(parseInt(n.right),s,l-1,i),t.loaded=!0;case 25:case"end":return a.stop()}}),a,null,[[5,17]])})));return function(e,t,c,r){return a.apply(this,arguments)}}()})),b=function(e){return e<3?1:e<6?3:e<9?6:e<12?9:e<15?12:15},O=(a(171),a(7));t.default=function(){var e=Object(d.a)("").getAccount,t=Object(n.a)(""),a=Object(s.a)(t,4),h=a[0],j=a[3],b=Object(i.useState)(new x),o=Object(s.a)(b,2),p=o[0],u=o[1],m=Object(i.useState)(new x),f=Object(s.a)(m,2),v=f[0],g=f[1],w=Object(i.useState)(new x),N=Object(s.a)(w,2),I=N[0],L=N[1],y=Object(i.useState)(),k=Object(s.a)(y,2),M=k[0],D=k[1],E=Object(i.useState)(),S=Object(s.a)(E,2),R=S[0],J=S[1],U=Object(i.useState)({}),A=Object(s.a)(U,2),B=A[0],C=A[1];function F(e,t){return"?id=".concat(e,"&level=").concat(t)}return Object(i.useEffect)((function(){if(j){var t=function(){var t=Object(r.a)(Object(c.a)().mark((function t(){var a,r,s,i,n,d,j;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new URLSearchParams(window.location.search),r=a.get("id")||e(),D(r),t.next=5,h.getUser(l.a.from(r));case 5:return s=t.sent,C(s),i=a.get("level")||parseInt(s.premiumLevel),J(a.get("level")||parseInt(s.premiumLevel)),(n=new x).level=parseInt(s.premiumLevel),t.next=13,n.load(r,i,1,h);case 13:return u(n),d=new x,t.next=17,d.load(n.left.id,i,1,h);case 17:return g(d),j=new x,t.next=21,j.load(n.right.id,i,1,h);case 21:L(j);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[h,e,j]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-sm-12",children:Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:Object(O.jsxs)("h5",{children:["Matrix","1"===R?Object(O.jsx)("small",{children:Object(O.jsx)("a",{href:"?id=".concat(M,"&level=").concat(parseInt(B.premiumLevel)),children:" Current Level"})}):Object(O.jsx)("small",{children:Object(O.jsx)("a",{href:"?id=".concat(M,"&level=1"),children:" Base Matrix"})})]})}),p.loaded?Object(O.jsx)("div",{className:"card-body table-border-style","data-controller":"matrix",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"level-1 rectangle","data-id":"{{.Matrix.ID}}","data-target":"matrix.account",children:Object(O.jsxs)("a",{href:F(p.id,p.level),className:"text-white",children:[p.id,Object(O.jsxs)("span",{children:["(",parseInt(B.premiumLevel),")"]})," "]})}),Object(O.jsxs)("ol",{className:"level-2-wrapper",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("h2",{className:"level-2 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Left.ID}}",children:0===p.left.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(p.left.id,R),className:"text-white",children:[p.left.id,Object(O.jsxs)("span",{children:["(",p.left.level,")"]})]})}),Object(O.jsxs)("ol",{className:"level-3-wrapper",children:[Object(O.jsx)("li",{children:Object(O.jsx)("h2",{className:"level-3 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Left.Left.ID}}",children:0===v.left.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(v.left.id,R),className:"text-white",children:[v.left.id,Object(O.jsxs)("span",{children:["(",v.left.level,")"]})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)("h2",{className:"level-3 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Left.Right.ID}}",children:0===v.right.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(v.right.id,R),className:"text-white",children:[v.right.id,Object(O.jsxs)("span",{children:["(",v.right.level,")"]})]})})})]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("h2",{className:"level-2 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Right.ID}}",children:0===p.right.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(p.right.id,R),className:"text-white",children:[p.right.id,Object(O.jsxs)("span",{children:["(",p.right.level,")"]})]})}),Object(O.jsxs)("ol",{className:"level-3-wrapper",children:[Object(O.jsx)("li",{children:Object(O.jsx)("h3",{className:"level-3 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Right.Left.ID}}",children:0===I.left.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(I.left.id,R),className:"text-white",children:[I.left.id,Object(O.jsxs)("span",{children:["(",I.left.level,")"]})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)("h3",{className:"level-3 rectangle","data-target":"matrix.account","data-id":"{{.Matrix.Right.Right.ID}}",children:0===I.right.id?Object(O.jsx)("span",{className:"text-white",children:"Empty"}):Object(O.jsxs)("a",{href:F(I.right.id,R),className:"text-white",children:[I.right.id,Object(O.jsxs)("span",{children:["(",I.right.level,")"]})]})})})]})]})]})]})}):""]})})})})})}}}]);
//# sourceMappingURL=15.8e0f7433.chunk.js.map