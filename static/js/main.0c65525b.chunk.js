(this.webpackJsonpcrm=this.webpackJsonpcrm||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n.n(a),c=(n(111),n(112),n(40)),i=n(13),o=n(26),s=n.n(o),l=n(41),u=n(11),j=n(0),d=n(195),b=n(186),O=n(187),h=n(196),p=n(49),x=n(199),m=n(182),f=n(200),v=n(185),g=n(184),y=n(63),w=n.n(y),C=n(64),S=n.n(C),k=n(179),L=n(33),T=n.n(L),B=n(56),W=function(e,t){switch(t.type){case"LOGIN":return Object(B.a)(Object(B.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(B.a)(Object(B.a)({},e),{},{user:void 0});default:return e}},N=n(4),D=Object(j.createContext)({}),G=function(e){var t=Object(j.useReducer)(W,{}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(j.useEffect)((function(){}),[]),Object(N.jsx)(D.Provider,{value:{state:a,dispatch:r},children:e.children})},P=function(){var e=Object(j.useContext)(D).dispatch,t=Object(j.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],o=Object(j.useState)(""),y=Object(u.a)(o,2),C=y[0],L=y[1],B=Object(j.useState)(""),W=Object(u.a)(B,2),G=W[0],P=W[1],F=Object(j.useState)(!1),E=Object(u.a)(F,2),I=E[0],z=E[1],A=Object(j.useState)({}),M=Object(u.a)(A,2),R=M[0],U=M[1],H=Object(i.f)(),J=Object(j.useState)(!1),K=Object(u.a)(J,2),q=(K[0],K[1]),Q=function(){var t=Object(l.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),q(!0),t.next=5,T.a.post("/auth/register",{name:a,email:C,password:G});case 5:r=t.sent,e({type:"LOGIN",payload:r}),q(!1),H.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),U(t.t0.response.data.errors);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(k.a,{container:!0,children:[Object(N.jsx)(k.a,{item:!0,xs:3}),Object(N.jsx)(k.a,{item:!0,xs:6,children:Object(N.jsxs)("form",{onSubmit:Q,children:[Object(N.jsx)(d.a,{mb:3,children:Object(N.jsx)(p.a,{color:"textPrimary",variant:"h2",children:"Sign up"})}),Object(N.jsx)(h.a,{error:Boolean(null===R||void 0===R?void 0:R.name),fullWidth:!0,helperText:null===R||void 0===R?void 0:R.name,label:"Name",margin:"normal",name:"name",onChange:function(e){return function(e){if(r(e),null===R||void 0===R?void 0:R.name){var t={};Object.assign(t,R),delete t.name,U(t)}}(e.target.value)},type:"text",value:a,variant:"outlined"}),Object(N.jsx)(h.a,{error:Boolean(null===R||void 0===R?void 0:R.email),fullWidth:!0,helperText:null===R||void 0===R?void 0:R.email,label:"Email Address",margin:"normal",name:"email",onChange:function(e){return function(e){if(L(e),null===R||void 0===R?void 0:R.email){var t={};Object.assign(t,R),delete t.email,U(t)}}(e.target.value)},type:"email",value:C,variant:"outlined"}),Object(N.jsxs)(m.a,{fullWidth:!0,variant:"outlined",style:{marginTop:"1em"},children:[Object(N.jsx)(f.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(N.jsx)(x.a,{id:"outlined-adornment-password",type:I?"text":"password",value:G,labelWidth:70,onChange:function(e){return function(e){if(P(e),null===R||void 0===R?void 0:R.email){var t={};Object.assign(t,R),delete t.password,U(t)}}(e.target.value)},endAdornment:Object(N.jsx)(g.a,{position:"end",children:Object(N.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:function(){return z(!I)},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:I?Object(N.jsx)(w.a,{}):Object(N.jsx)(S.a,{})})})})]}),Object(N.jsx)(d.a,{my:2,children:Object(N.jsx)(b.a,{color:"primary",disabled:Boolean(!a||!C||!G||R&&Object.keys(R).length>0),fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign up now"})}),Object(N.jsxs)(p.a,{color:"textSecondary",children:["Have an account?"," ",Object(N.jsx)(O.a,{component:c.b,to:"/login",variant:"h6",children:"Sign in"})]})]})}),Object(N.jsx)(k.a,{item:!0,xs:3})]})},F=function(){var e=Object(j.useContext)(D).dispatch,t=Object(j.useState)(""),n=Object(u.a)(t,2),a=n[0],r=n[1],o=Object(j.useState)(""),y=Object(u.a)(o,2),C=y[0],L=y[1],B=Object(j.useState)(!1),W=Object(u.a)(B,2),G=W[0],P=W[1],F=Object(j.useState)({}),E=Object(u.a)(F,2),I=E[0],z=E[1],A=Object(j.useState)(!1),M=Object(u.a)(A,2),R=(M[0],M[1]),U=Object(i.f)(),H=function(){var t=Object(l.a)(s.a.mark((function t(n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),R(!0),t.next=5,T.a.post("https://first-express-orm.herokuapp.com/api/auth/login",{email:a,password:C});case 5:r=t.sent,e({type:"LOGIN",payload:r}),R(!1),U.push("/"),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("error === ",t.t0),R(!1),z(null===(c=t.t0.response)||void 0===c?void 0:c.data.errors);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(N.jsxs)(k.a,{container:!0,children:[Object(N.jsx)(k.a,{item:!0,xs:3}),Object(N.jsx)(k.a,{item:!0,xs:6,children:Object(N.jsxs)("form",{onSubmit:H,children:[Object(N.jsx)(d.a,{mb:3,children:Object(N.jsx)(p.a,{color:"textPrimary",variant:"h2",children:"Sign in"})}),Object(N.jsx)(h.a,{error:Boolean(null===I||void 0===I?void 0:I.email),fullWidth:!0,helperText:null===I||void 0===I?void 0:I.email,label:"Email Address",margin:"normal",name:"email",onChange:function(e){return function(e){if(r(e),null===I||void 0===I?void 0:I.email){var t={};Object.assign(t,I),delete t.email,z(t)}}(e.target.value)},type:"email",value:a,variant:"outlined"}),Object(N.jsxs)(m.a,{fullWidth:!0,variant:"outlined",style:{marginTop:"1em"},children:[Object(N.jsx)(f.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(N.jsx)(x.a,{id:"outlined-adornment-password",type:G?"text":"password",value:C,labelWidth:70,onChange:function(e){return function(e){if(L(e),null===I||void 0===I?void 0:I.email){var t={};Object.assign(t,I),delete t.password,z(t)}}(e.target.value)},endAdornment:Object(N.jsx)(g.a,{position:"end",children:Object(N.jsx)(v.a,{"aria-label":"toggle password visibility",onClick:function(){return P(!G)},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:G?Object(N.jsx)(w.a,{}):Object(N.jsx)(S.a,{})})})})]}),Object(N.jsx)(d.a,{my:2,children:Object(N.jsx)(b.a,{color:"primary",disabled:Boolean(!a||!C||I&&Object.keys(I).length>0),fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign in"})}),Object(N.jsxs)(p.a,{color:"textSecondary",children:["New user?"," ",Object(N.jsx)(O.a,{component:c.b,to:"/register",variant:"h6",children:"Sign up"})]})]})}),Object(N.jsx)(k.a,{item:!0,xs:3})]})},E=n(188),I=function(){return Object(N.jsx)(E.a,{maxWidth:"lg",children:Object(N.jsx)("h1",{children:"Home page"})})},z=n(189),A=n(201),M=n(190),R=n(191),U=n(89),H=n.n(U),J=n(90),K=n.n(J),q=n(192),Q=n(92),V=n(198),X=n(91),Y=n.n(X),Z=n(183),$=n(147),_=n(193),ee=n(194),te=Object(z.a)((function(e){return Object(A.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},list:{width:250}})})),ne=function(){var e=te(),t=Object(i.f)(),n=Object(j.useContext)(D),a=n.state,r=n.dispatch,c=Object(j.useState)(null),o=Object(u.a)(c,2),d=o[0],O=o[1],h=Boolean(d),x=Object(j.useState)(!1),m=Object(u.a)(x,2),f=m[0],g=m[1],y=Object(j.useState)(!1),w=Object(u.a)(y,2),C=(w[0],w[1]),S=function(){O(null)},k=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,T.a.get("/auth/logout");case 3:r({type:"LOGOUT"}),C(!1),O(null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.user){e.next=8;break}return C(!0),e.next=4,T.a.get("/auth/logout");case 4:r({type:"LOGOUT"}),C(!1),e.next=9;break;case 8:t.push("/login");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("div",{className:e.root,children:[Object(N.jsx)(M.a,{position:"static",children:Object(N.jsxs)(R.a,{children:[Object(N.jsx)(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return g(!f)},children:Object(N.jsx)(H.a,{})}),Object(N.jsx)(p.a,{variant:"h6",className:e.title,children:"CRM"}),a.user?Object(N.jsxs)("div",{children:[Object(N.jsx)(v.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){O(e.currentTarget)},color:"inherit",children:Object(N.jsx)(K.a,{})}),Object(N.jsxs)(Q.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:S,children:[Object(N.jsx)(q.a,{onClick:S,children:"Profile"}),Object(N.jsx)(q.a,{onClick:k,children:"Logout"})]})]}):Object(N.jsx)(b.a,{color:"inherit",onClick:function(){return t.push("/login")},children:"Login"})]})}),Object(N.jsx)(V.a,{open:f,onClose:function(){return g(!f)},children:Object(N.jsx)("div",{className:e.list,onClick:function(){return g(!f)},onKeyDown:function(){return g(!f)},children:Object(N.jsx)(Z.a,{children:Object(N.jsxs)($.a,{button:!0,onClick:L,children:[Object(N.jsx)(_.a,{children:Object(N.jsx)(Y.a,{})}),Object(N.jsx)(ee.a,{primary:a.user?"Logout":"Login"})]})})})})]})};T.a.defaults.withCredentials=!0;var ae=function(){return Object(N.jsx)(G,{children:Object(N.jsxs)(c.a,{basename:"/crm",children:[Object(N.jsx)(ne,{}),Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{path:"/",exact:!0,component:I}),Object(N.jsx)(i.a,{path:"/register",component:P}),Object(N.jsx)(i.a,{path:"/login",component:F})]})]})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,205)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};r.a.render(Object(N.jsx)(ae,{}),document.getElementById("root")),re()}},[[143,1,2]]]);
//# sourceMappingURL=main.0c65525b.chunk.js.map