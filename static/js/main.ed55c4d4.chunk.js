(this.webpackJsonpunnamed=this.webpackJsonpunnamed||[]).push([[0],{51:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(18),r=c.n(s),i=(c(72),c(73),c(32)),o=c(12),l=c(10),j=(c(51),c(30)),u=j.a.initializeApp({apiKey:"AIzaSyCwtDbBM0rNTXL_rWpOQGEfI4N4Aa_9MEc",authDomain:"unnamed-bb1b3.firebaseapp.com",projectId:"unnamed-bb1b3",storageBucket:"unnamed-bb1b3.appspot.com",messagingSenderId:"602306772735",appId:"1:602306772735:web:46b981af358e43a13796ca",measurementId:"G-84HHL6NNXK"}).firestore(),h=j.a.auth(),d=j.a.storage(),b=new j.a.auth.GoogleAuthProvider,O=c(110),p=c(109),f=c(34),m=c.n(f),x=c(105),g=c(108),N=c(4);function v(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var C=Object(x.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:"black",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var S=function(e){var t=C(),c=n.a.useState(v),s=Object(l.a)(c,1)[0],r=Object(a.useState)(!1),i=Object(l.a)(r,2),o=i[0],j=i[1],u=Object(a.useState)(!1),d=Object(l.a)(u,2),f=d[0],m=d[1],x=Object(a.useState)(""),S=Object(l.a)(x,2),I=S[0],w=S[1],y=Object(a.useState)(""),k=Object(l.a)(y,2),A=k[0],E=k[1],G=Object(a.useState)(""),L=Object(l.a)(G,2),U=L[0],D=L[1],_=Object(a.useState)(null),P=Object(l.a)(_,2),T=P[0],M=P[1];Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){M(e||null)}));return function(){e()}}),[T,U]);var B=function(){h.signInWithPopup(b).catch((function(e){return alert(e.message)})).then((function(){m(!1),j(!1)}))};return Object(N.jsxs)("div",{className:"title",children:[Object(N.jsx)(g.a,{open:o,onClose:function(){return j(!1)},children:Object(N.jsx)("div",{style:s,className:t.paper,children:Object(N.jsxs)("form",{className:"post__signUp",children:[Object(N.jsx)(O.a,{placeholder:"username",className:"searchChats",type:"text",value:U,onChange:function(e){return D(e.target.value)}}),Object(N.jsx)(O.a,{placeholder:"email",className:"searchChats",type:"text",value:I,onChange:function(e){return w(e.target.value)}}),Object(N.jsx)(O.a,{placeholder:"password",className:"searchChats",type:"password",value:A,onChange:function(e){return E(e.target.value)}}),Object(N.jsx)(p.a,{type:"submit",onClick:function(e){e.preventDefault(),h.createUserWithEmailAndPassword(I,A).then((function(e){return e.user.updateProfile({displayName:U})})).catch((function(e){return alert(e.message)})),j(!1)},children:"SIGN UP"}),Object(N.jsx)(p.a,{onClick:function(e){j(!1),m(!0)},children:"ALREADY HAVE AN ACCOUNT?"}),Object(N.jsx)(p.a,{onClick:B,children:"SIGN IN WITH GOOGLE"})]})})}),Object(N.jsx)(g.a,{open:f,onClose:function(){return m(!1)},children:Object(N.jsx)("div",{style:s,className:t.paper,children:Object(N.jsxs)("form",{className:"post__signUp",children:[Object(N.jsx)(O.a,{placeholder:"email",className:"searchChats",type:"text",value:I,onChange:function(e){return w(e.target.value)}}),Object(N.jsx)(O.a,{placeholder:"password",className:"searchChats",type:"password",value:A,onChange:function(e){return E(e.target.value)}}),Object(N.jsx)(p.a,{type:"submit",onClick:function(e){e.preventDefault(),h.signInWithEmailAndPassword(I,A).catch((function(e){return alert(e.message)})),m(!1)},children:"SIGN IN"}),Object(N.jsx)(p.a,{onClick:B,children:"SIGN IN WITH GOOGLE"})]})})}),Object(N.jsxs)("div",{className:"header",children:[Object(N.jsx)("h1",{children:e.title}),e.children,Object(N.jsx)("div",{children:T?Object(N.jsxs)("div",{className:"posts__loginContainer",children:[Object(N.jsx)(p.a,{children:T.displayName}),Object(N.jsx)(p.a,{onClick:function(){return h.signOut()},children:"LOGOUT"})]}):Object(N.jsxs)("div",{className:"posts__loginContainer",children:[Object(N.jsx)(p.a,{onClick:function(){return j(!0)},children:"SIGN UP"}),Object(N.jsx)(p.a,{onClick:function(){return m(!0)},children:"SIGN IN"})]})})]})]})};function I(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var w=Object(x.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:"black",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var y=function(){var e=w(),t=n.a.useState(I),c=Object(l.a)(t,1)[0],s=Object(a.useState)([]),r=Object(l.a)(s,2),o=r[0],b=r[1],f=Object(a.useState)(""),x=Object(l.a)(f,2),v=(x[0],x[1],Object(a.useState)(!1)),C=Object(l.a)(v,2),y=(C[0],C[1],Object(a.useState)(!1)),k=Object(l.a)(y,2),A=(k[0],k[1]),E=Object(a.useState)(!1),G=Object(l.a)(E,2),L=G[0],U=G[1],D=Object(a.useState)(""),_=Object(l.a)(D,2),P=(_[0],_[1],Object(a.useState)("")),T=Object(l.a)(P,2),M=(T[0],T[1],Object(a.useState)("")),B=Object(l.a)(M,2),W=B[0],H=(B[1],Object(a.useState)(null)),R=Object(l.a)(H,2),F=R[0],z=R[1],J=Object(a.useState)(""),K=Object(l.a)(J,2),X=K[0],V=K[1],Y=Object(a.useState)(null),q=Object(l.a)(Y,2),Q=q[0],Z=q[1],$=Object(a.useState)(0),ee=Object(l.a)($,2),te=(ee[0],ee[1]);function ce(){var e=document.querySelector("#searchChats").value;u.collection("chats").orderBy("timestamp","desc").onSnapshot((function(t){b(t.docs.map((function(e){return{id:e.id,chat:e.data()}})).filter((function(t){return-1!==t.chat.name.toLowerCase().search(e.toLowerCase())})))}))}return Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){z(e||null)}));return function(){e()}}),[F,W]),Object(a.useEffect)((function(){ce()}),[]),Object(N.jsxs)("div",{className:"home",children:[Object(N.jsx)(S,{title:"UNNAMED",children:Object(N.jsx)(O.a,{className:"searchChats",id:"searchChats",placeholder:"Search Chat",onChange:function(e){ce()}})}),Object(N.jsx)(g.a,{open:L,onClose:function(){return U(!1)},children:Object(N.jsx)("div",{style:c,className:e.paper,children:Object(N.jsxs)("div",{className:"post__signUp",children:[Object(N.jsx)(O.a,{placeholder:"Chat Name",className:"searchChats",value:X,onChange:function(e){return V(e.target.value)}}),Object(N.jsxs)("div",{className:"icon",children:[Object(N.jsx)("h3",{children:"ICON:"}),Object(N.jsx)("input",{type:"file",className:"searchChats",onChange:function(e){e.target.files[0]&&Z(e.target.files[0])}})]}),Object(N.jsx)(p.a,{onClick:function(e){d.ref("images/".concat(Q.name)).put(Q).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);te(t)}),(function(e){console.log(e),alert(e.message)}),(function(){d.ref("images").child(Q.name).getDownloadURL().then((function(e){u.collection("chats").add({creator:F.displayName,name:X,timestamp:j.a.firestore.FieldValue.serverTimestamp(),chatIcon:e}),te(0),V(""),Z(null)}))}))},children:"Create"})]})})}),Object(N.jsxs)("div",{className:"chats",children:[F?Object(N.jsx)("div",{className:"chat",onClick:function(){return U(!0)},children:Object(N.jsx)("div",{className:"createNewChat",children:Object(N.jsx)(m.a,{})})}):Object(N.jsx)("div",{className:"chat",onClick:function(){return A(!0)},children:Object(N.jsx)("div",{className:"loginPopUp",children:Object(N.jsx)("h2",{className:"loginPopUp",children:"LOGIN"})})}),Object(N.jsx)(i.b,{to:"/chat/public",style:{textDecoration:"none"},children:Object(N.jsxs)("div",{className:"chat",children:[Object(N.jsx)("h2",{children:"PUBLIC"}),Object(N.jsx)("img",{alt:"icon",src:"https://webstockreview.net/images/family-icon-png-1.png",width:"300"}),Object(N.jsx)("h4",{children:"A UNNAMED ORIGINAL"})]})}),Object(N.jsx)(i.b,{to:"/chat/news",style:{textDecoration:"none"},children:Object(N.jsxs)("div",{className:"chat",children:[Object(N.jsx)("h2",{children:"NEWS"}),Object(N.jsx)("img",{alt:"icon",src:"https://th.bing.com/th/id/Rd48a28f46aa28fb834f41ae313eb190e?rik=%2f6c1CwY7Oz14Ow&riu=http%3a%2f%2fclipartmag.com%2fimages%2fnewspaper-png-8.png&ehk=JuvOKT0xsHpr%2biU%2bEvM4Idmdo33CwpIx1%2b4X0e4Lh54%3d&risl=&pid=ImgRaw",width:"300"}),Object(N.jsx)("h4",{children:"A UNNAMED ORIGINAL"})]})}),o.map((function(e){var t=e.id,c=e.chat;return Object(N.jsx)(i.b,{to:"/chat/".concat(t),style:{textDecoration:"none"},children:Object(N.jsxs)("div",{className:"chat",children:[Object(N.jsx)("h2",{children:c.name}),Object(N.jsx)("img",{alt:"icon",src:c.chatIcon,width:"300"}),Object(N.jsx)("h4",{children:c.creator})]})})}))]})]})},k=c(58),A=c(59),E=c(61),G=c(60),L=function(e){Object(E.a)(c,e);var t=Object(G.a)(c);function c(){return Object(k.a)(this,c),t.apply(this,arguments)}return Object(A.a)(c,[{key:"componentDidMount",value:function(){console.log(this.props.match.params.id)}},{key:"render",value:function(){return Object(N.jsx)("div",{className:"chat",children:Object(N.jsx)(S,{title:"Chat"})})}}]),c}(a.Component);var U=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(i.a,{children:Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{exact:!0,path:"/",children:Object(N.jsx)(y,{})}),Object(N.jsx)(o.a,{path:"/chat/:id",component:L})]})})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(N.jsx)(n.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root")),D()}},[[87,1,2]]]);
//# sourceMappingURL=main.ed55c4d4.chunk.js.map