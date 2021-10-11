(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{155:function(n,e,t){"use strict";t.r(e);var r,a,c=t(0),i=t.n(c),s=t(29),o=t.n(s),d=(t(83),t(8)),l=t(68),u=Object(l.a)({isDarakMode:!0}).useGlobalState,j=t(16),b=t(9),p=t(6),x=t(7),m=x.a.nav(r||(r=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap');\n  width: 100%;\n  top: 0px;\n  font-family: 'Maven Pro', sans-serif;\n  /* height: 100%; */\n  /* font-size: 1.40rem; */\n  padding: 0 0.2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: sticky;\n  font-size: 1.1rem;\n  z-index: 1000;\n  .link {\n    text-decoration: none;\n    color: #ccc;\n  }\n\n  i {\n    display: none;\n  }\n\n  .nav-button {\n    margin: .50rem .85rem;\n    align-items: center;\n    justify-content: center;\n    transition: transform 1s;\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n\n  & span:hover ,i:hover {\n    color: #00ADB5;\n  }\n\n  .current {\n    background-color: #00ADB5;\n    display: flex;\n    border-radius: 30px;\n    padding: .55rem 1rem;\n    min-height: 35px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: background .1s ease-in-out;\n    & span {\n        color: #222831;\n      /* font-size: 1.1rem; */\n        font-weight: bold;\n\n    }\n    & span:hover ,i:hover {\n    color: #222831;\n    }\n  }\n\n  @media screen and (max-width: 760px) {\n    i {\n      display: flex;\n      min-width: 30px;\n      min-height: 30px;\n      justify-content: center;\n      align-items: center;\n      padding: .2rem;\n      font-size: 1.25rem;\n    }\n    .link span {\n      display: none;\n    }\n    .current {\n      background-color: #00ADB5;\n      display: flex;\n      justify-content: center;\n      border-radius: 50%;\n      padding: .30rem;\n      min-height: 45px;\n      min-width: 47px;\n      i {\n        color: #262d38;\n      }\n    }\n  }\n"]))),f=x.a.button(a||(a=Object(p.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  margin: .45rem;\n  transition: transform 1s;\n  width: 45px;\n  height: 45px;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    transform: scale(1.2);\n  }\n  .moon, .sun {\n    position: absolute;\n    top: 0;\n    right: 0;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    i {\n      display: flex;\n      padding: .55rem;\n      color: #f0a502;\n      font-size: 1.2rem;\n      &:hover {\n        color: #f0a502;\n      }\n    }\n  }\n\n  .moon-logo {\n    opacity: 0;\n    transform: translateY(20%) rotateZ(50deg);\n    transition: all 1s ease-out;\n  }\n\n  .sun-logo {\n    opacity: 1;\n    transform: translateY(0) rotateZ(0deg);\n    transition: all 1s ease-out;\n  }\n\n  .animate-hide-sun {\n    opacity: 0;\n    transform: translateY(20%) rotateZ(100deg);\n  }\n\n  .animate-show-moon {\n    opacity: 1;\n    transform: translateY(0%) rotateZ(0deg);\n  }\n"]))),h=t(1);var O,g=function(){var n=u("isDarakMode"),e=Object(d.a)(n,2),t=e[0],r=e[1];return Object(h.jsxs)(f,{onClick:function(){return r(!t)},name:"toggle dark mode",children:[Object(h.jsx)("div",{className:"sun sun-logo ".concat(t?"":"animate-hide-sun"),children:Object(h.jsx)("i",{className:"fas fa-sun"})}),Object(h.jsx)("div",{className:"moon moon-logo ".concat(t?"":"animate-show-moon"),children:Object(h.jsx)("i",{className:"fas fa-moon"})})]})},v=function(){return Object(h.jsxs)(m,{children:[Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)(j.c,{to:"/spa-notes-app/",exact:!0,className:"link",activeClassName:"current",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("b",{children:"Home"})}),Object(h.jsx)("i",{className:"fas fa-home"})]})})}),Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)(j.c,{to:"/spa-notes-app/notes",className:"link",activeClassName:"current",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("b",{children:"Notes"})}),Object(h.jsx)("i",{className:"far fa-clipboard"})]})})}),Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)(j.c,{to:"/spa-notes-app/create",className:"link",activeClassName:"current",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("b",{children:"Create Note"})}),Object(h.jsx)("i",{className:"fas fa-plus-square"})]})})}),Object(h.jsx)("div",{className:"nav-button",children:Object(h.jsx)(j.c,{to:"/spa-notes-app/user",className:"link",activeClassName:"current",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("b",{children:"User"})}),Object(h.jsx)("i",{className:"fas fa-user"})]})})}),Object(h.jsx)(g,{})]})},w=x.a.div(O||(O=Object(p.a)(["\n  position: absolute;\n  bottom: 0;\n  text-align: center;\n  width: 100%;\n  padding: 2rem;\n  .icons {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    font-size: 1.3rem;\n    .love {\n      transition: transform .5s;\n      transform: color .9s;\n      color: #00ADB5;\n      &:hover {\n        transform: scale(1.1);\n        color: #59dfee;\n        filter: contrast(100px);\n      }\n    }\n    & p {\n      margin: 0 10px;\n    }\n    a {\n      margin: 0 10px;\n      &:hover {\n        color: #00ADB5;\n      }\n    }\n  }\n"])));var N,y,_=function(){return Object(h.jsx)(w,{children:Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("p",{children:"sauterdev"}),Object(h.jsx)("div",{className:"love",children:Object(h.jsx)("i",{className:"fas fa-heart"})}),Object(h.jsxs)("p",{children:[Object(h.jsx)("a",{href:"https://www.instagram.com/sauterdev/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("i",{className:"fab fa-instagram"})}),Object(h.jsx)("a",{href:"https://github.com/LuiSauter",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("i",{className:"fab fa-github-alt"})})]})]})})},k=x.a.div(N||(N=Object(p.a)(["\n  margin: 40px 0 ;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  gap: 20px;\n  .hero-item {\n    /* max-width: 500px; */\n    min-width: 120px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    color: #00ADB5;\n    transition: transform 1s;\n    &:hover {\n      transform: scale(1.1);\n    }\n\n    a {\n      text-decoration-line: none;\n    }\n    p {\n      color: #ccc;\n      &:hover {\n        color: #00ADB5;\n      }\n    }\n    /* p {\n      color: #00ADB5;\n    } */\n    i {\n      font-size: 5rem;\n      margin-bottom: 15px;\n      /* min-width: 200px; */\n    }\n  }\n"]))),D=t(10),A=t(55),S=x.a.div(y||(y=Object(p.a)(["\n  display: flex;\n  justify-content: center\n"])));function U(){var n=Object(A.b)({loading:!0,indicator:Object(h.jsx)(A.a,{width:"50"})}),e=n.containerProps,t=n.indicatorEl;return Object(h.jsx)(S,{children:Object(h.jsxs)("section",Object(D.a)(Object(D.a)({},e),{},{children:[t," "]}))})}var B=t(56),C=t(12),E=t(5),z=t.n(E),P=t(11),q=t(21),T=t.n(q),I={DB_API_USERS:"https://tranquil-plains-88278.herokuapp.com/api/users",DB_API_NOTES:"https://tranquil-plains-88278.herokuapp.com/api/notes"},M=I.DB_API_NOTES,F=function(){var n=Object(P.a)(z.a.mark((function n(){var e,t;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.get(M);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),L=function(){var n=Object(P.a)(z.a.mark((function n(e){var t,r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.get("".concat(M,"/").concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=function(){var n=Object(P.a)(z.a.mark((function n(e){var t,r,a,c,i,s;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.title,r=e.content,a=e.date,c=e.author,console.log(t,r,a,c),n.next=4,T.a.post(M,{title:t,content:r,date:a,author:c});case 4:return i=n.sent,s=i.data,n.abrupt("return",s);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Y=function(){var n=Object(P.a)(z.a.mark((function n(e,t){var r,a,c,i,s;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t[0],a=r.title,c=r.content,i=r.date,s=r.author,n.next=3,T.a.delete("".concat(M,"/").concat(e),{title:a,content:c,date:i,author:s});case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),R=function(){var n=Object(P.a)(z.a.mark((function n(e){var t,r,a,c,i;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),t=e.title,r=e.content,a=e.date,c=e.author,i=e.__id,n.next=4,T.a.put("".concat(M,"/").concat(i),{title:t,content:r,date:a,author:c});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var G,J,H=function(){var n=Object(c.useState)([]),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)({}),i=Object(d.a)(a,2),s=i[0],o=i[1];return Object(c.useEffect)((function(){F().then((function(n){return r((function(e){return e.concat(n)}))}))}),[]),Object(c.useEffect)((function(){F().then((function(n){r(n)}))}),[s.title]),{note:t,PostNoteAdd:function(n){console.log(n);var e={title:n.title,content:n.content,date:n.date,author:n.selectUser,__id:n.__id};console.log(n.__id,"useNOTES"),n.editing?R(e).then((function(n){return n})):Z(e).then((function(n){r((function(e){return[].concat(Object(C.a)(e),[n])}))}))},handleDeleteNote:function(n){var e=t.filter((function(e){return e._id===n})),r=e[0].title;Y(n,e).then((function(){o((function(n){return Object(D.a)(Object(D.a)({},n),{},{title:r})}))}))}}},$=x.a.div(G||(G=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  transition: all 1.5s ease-in-out;\n  flex-wrap: wrap;\n  width: 90%;\n  font-size: 1.3rem;\n  gap: 40px;\n  margin: 40px auto;\n  p {\n    hyphens: auto;\n    padding: 10px;\n  }\n  .container-item {\n    display: grid;\n    flex-direction: row;\n    grid-template-columns: 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    border: 3px solid #00ADB5;\n    outline: none;\n    border-radius: 25px;\n    width: 100%;\n    min-height: 220px;\n    max-width: 420px;\n    transition: transform 1s;\n    &:hover {\n      transform: scale(1.02);\n    }\n    &__header {\n      display: flex;\n      height: 100%;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-evenly;\n      background-color: #00ADB5;\n      color: #14202b;\n      word-wrap: break-word;\n      border-bottom-left-radius: 19px;\n      border-top-left-radius: 19px;\n      width: 100%;\n    }\n    &__content {\n      font-size: 1.2rem;\n    }\n    &__footer button {\n      background-color: #C02739;\n      color: #eee;\n      padding: 0.5rem 1rem;\n      border-bottom-left-radius: 9px;\n      border-top-left-radius: 9px;\n      border-bottom-right-radius: 0px;\n      border-top-right-radius: 0px;\n      &:active {\n        background-color: #f44;\n      }\n    }\n    .link {\n      background-color: #F0A500;\n      color: #14202b;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 0px;\n      border-bottom-right-radius: 9px;\n      border-top-right-radius: 9px;\n      &:active {\n        background-color: #FFB344;\n      }\n    }\n  }\n"]))),K=x.a.button(J||(J=Object(p.a)(["\n  font-size: 1.1rem;\n  padding: .2rem .5rem;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  border-radius: 5px;\n"])));var Q,V,W=function(){var n=H(),e=n.note,t=n.handleDeleteNote;return Object(h.jsx)($,{children:e.map((function(n){return Object(h.jsxs)("div",{className:"container-item",children:[Object(h.jsxs)("div",{className:"container-item__header",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"paragraph",children:n.title})}),Object(h.jsxs)("div",{className:"container-item__footer",children:[Object(h.jsx)(K,{onClick:function(){return t(n._id)},children:"Delete"}),Object(h.jsx)(j.b,{to:"/spa-notes-app/edit/".concat(n._id),children:Object(h.jsx)(K,{className:"link",children:"Edit"})})]})]}),Object(h.jsxs)("div",{className:"container-item__content",children:[Object(h.jsx)("p",{className:"paragraph",children:n.content}),Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"far fa-user"})," ",n.author]}),Object(h.jsx)("p",{style:{color:-1!==Object(B.a)(n.date).indexOf("in")?"green":"#C02739"},children:Object(B.a)(n.date)})]})]},n._id)}))})},X=x.a.h2(Q||(Q=Object(p.a)(["\n  padding: 1rem .7rem;\n  border-bottom: 1px solid #ccc;\n  width: 90%;\n  margin: auto;\n"]))),nn=x.a.div(V||(V=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding: 2rem;\n  width: 100%;\n  .tech-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    i {\n      font-size: 5rem;\n    }\n    .js {\n      color: #F0A500\n    }\n    .react {\n      color: #61dafb;\n    }\n    .node {\n      color: #3e833d;\n    }\n    .mongo {\n      color: #378d4d;\n    }\n    .html {\n      color: #dd4d26;\n    }\n    .css {\n      color: #2173f7;\n    }\n  }\n"])));var en=function(){return Object(h.jsxs)(nn,{children:[Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"js",children:Object(h.jsx)("i",{className:"fab fa-js-square"})})}),Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"react",children:Object(h.jsx)("i",{className:"fab fa-react"})})}),Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"node",children:Object(h.jsx)("i",{className:"fab fa-node"})})}),Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"mongo",children:Object(h.jsx)("i",{className:"fab fa-envira"})})}),Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"html",children:Object(h.jsx)("i",{className:"fab fa-html5"})})}),Object(h.jsx)("div",{className:"tech-item",children:Object(h.jsx)("p",{className:"css",children:Object(h.jsx)("i",{className:"fab fa-css3-alt"})})})]})},tn=I.DB_API_USERS,rn=function(){var n=Object(P.a)(z.a.mark((function n(){var e,t;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.a.get(tn);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),an=function(){var n=Object(P.a)(z.a.mark((function n(e){var t,r,a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.userName,n.next=3,T.a.post(tn,{userName:t});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),cn=function(){var n=Object(P.a)(z.a.mark((function n(e,t){var r;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t[0].userName,n.next=3,T.a.delete("".concat(tn,"/").concat(e),{userName:r});case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),sn=function(){var n=Object(c.useState)([]),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)({}),i=Object(d.a)(a,2),s=i[0],o=i[1],l=Object(c.useState)(!0),u=Object(d.a)(l,2),j=u[0],b=u[1];Object(c.useEffect)((function(){b(!0);rn().then((function(n){r((function(e){return e.concat(n)})),b(!1)}))}),[]),Object(c.useEffect)((function(){rn().then((function(n){r(n)}))}),[s.userName]);return{loading:j,getUser:t,handleNewUser:function(n){var e=n.userName,t={userName:e.replace(/ /g,"")};e===e.replace(/ /g,"")&&an(t).then((function(n){r((function(e){return e.concat(n)}))}))},deleteUser:function(n){var e=t.filter((function(e){return e._id===n})),r=e[0].userName;cn(n,e).then((function(){o((function(n){return Object(D.a)(Object(D.a)({},n),{},{userName:r})}))}))}}};var on,dn=function(){var n=sn().loading;return Object(h.jsxs)("div",{children:[Object(h.jsx)(X,{children:"TODO LIST NOTES"}),Object(h.jsxs)(k,{children:[Object(h.jsx)("div",{className:"hero-item",children:Object(h.jsx)(j.b,{to:"/spa-notes-app/user",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"fas fa-user-plus"}),Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"Create a new user"})]})})}),Object(h.jsx)("div",{className:"hero-item",children:Object(h.jsx)(j.b,{to:"/spa-notes-app/create",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("i",{className:"fas fa-clipboard"}),Object(h.jsx)("br",{}),Object(h.jsx)("b",{children:"Create a new note"})]})})})]}),n?Object(h.jsx)(U,{}):"",Object(h.jsx)(W,{}),Object(h.jsx)(en,{})]})},ln=x.a.div(on||(on=Object(p.a)(["\n  width: 100%;\n  h2 {\n    /* width: 100%; */\n  }\n  .load {\n    margin-top: 25px;\n  }\n"])));var un,jn=function(){var n=sn().loading;return Object(h.jsxs)(ln,{children:[Object(h.jsx)(X,{children:"PENDING NOTES"}),n?Object(h.jsx)("div",{className:"load",children:Object(h.jsx)(U,{})}):"",Object(h.jsx)(W,{})]})},bn=t(17),pn=t(73),xn=t.n(pn),mn=x.a.div(un||(un=Object(p.a)(["\n  width: 90%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: column;\n  margin: auto;\n  padding: 15px;\n  border-radius: 10px;\n  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {\n    border-radius: 0.3rem;\n    background-color: #42adb5;\n  }\n  h3 {\n    margin-bottom: 10px;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    max-width: 500px;\n    label {\n      text-align: left;\n      width: 100%;\n      padding: 0.3rem 0rem;\n      font-size: 1.1rem;\n      opacity: .7;\n    }\n    select, input {\n      font-size: 1.2rem;\n      color: #14202b;\n      width: 100%;\n      border: 1px solid #14202b;\n      box-shadow: 0px 0px 3px .2px #14202b;\n      border-radius: 7px;\n      outline: none;\n      margin-bottom: 12px;\n      padding: .5rem .4rem;\n      :focus {\n        border: none;\n        outline: 3px solid #00ADB5;\n      }\n    }\n    button {\n      background-color: #00ADB5;\n      border-radius: 7px;\n    }\n    .btn button {\n      background-color: #00ADB5;\n      padding: .8rem 3rem;\n      border-radius: 7px;\n      width: 100%;\n      margin-top: 25px;\n      &:active {\n        background-color: #00ADB5aa;\n      }\n    }\n    .message-add {\n      padding: .8rem .8rem 0 .8rem;\n      color: #3e823d;\n    }\n    input {\n      word-wrap: break-word;\n    }\n  }\n"]))),fn=(t(111),{selectUser:"",title:"",content:"",date:new Date,editing:!1,__id:""}),hn=function(n){var e=n.getUser,t=n.PostNoteAdd,r=Object(c.useState)(fn),a=Object(d.a)(r,2),i=a[0],s=a[1],o=Object(c.useState)(!1),l=Object(d.a)(o,2),u=l[0],j=l[1],p=Object(b.f)().id;Object(c.useEffect)((function(){"undefined"!==typeof p&&L(p).then((function(n){var e=Object(D.a)({},i);s(Object(D.a)(Object(D.a)({},e),{},{editing:!0,__id:p,selectUser:n.author,title:n.title,content:n.content,date:new Date(n.date)}))}))}),[]);var x=function(n){var e=Object(D.a)({},i);s(Object(D.a)(Object(D.a)({},e),{},Object(bn.a)({},n.target.name,n.target.value))),j(!1)};return Object(h.jsx)(mn,{children:Object(h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==i.selectUser&&(t(i),j(!0),s(fn))},children:[Object(h.jsx)("label",{children:"User"}),Object(h.jsxs)("select",{name:"selectUser",onChange:x,required:!0,value:i.selectUser,children:[Object(h.jsx)("option",{value:"",children:"Select a user ..."}),e.map((function(n){return Object(h.jsx)("option",{value:n.userName,children:n.userName},n._id)}))]}),Object(h.jsx)("label",{children:"Note title"}),Object(h.jsx)("input",{placeholder:"Title",type:"text",name:"title",required:!0,onChange:x,value:i.title}),Object(h.jsx)("label",{children:"Note description"}),Object(h.jsx)("input",{placeholder:"description",type:"text",name:"content",required:!0,onChange:x,value:i.content}),Object(h.jsx)("label",{children:"Select a date"}),Object(h.jsx)(xn.a,{selected:i.date,onChange:function(n){var e=Object(D.a)({},i);s(Object(D.a)(Object(D.a)({},e),{},{date:n}))}}),Object(h.jsx)("div",{className:"btn",children:Object(h.jsx)(K,{children:i.editing?"Update":"save"})}),Object(h.jsx)("div",{className:"message-add",children:u?Object(h.jsx)("b",{children:"note created successfully"}):""})]})})};var On,gn=function(){var n=sn().getUser,e=H(),t=e.note,r=e.PostNoteAdd;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{children:"CREATE NOTE"}),Object(h.jsx)(hn,{getUser:n,note:t,PostNoteAdd:r})]})},vn=x.a.div(On||(On=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1.5fr 2fr;\n  width: 100%;\n  margin: 30px auto;\n  gap: 15px;\n  font-size: 1.4rem;\n  li {\n    list-style: none;\n    button {\n      background-color: #C02739;\n      color: #eee;\n      &:active {\n        background-color: #f44;\n      }\n    }\n  }\n  .row-item {\n    width: 100%;\n    display: flex;\n    /* flex-direction: column; */\n    justify-content: space-evenly;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    form {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 60%;\n      min-width: 70%;\n\n    }\n    & form span {\n      font-size: 1rem;\n      text-align: center;\n      margin: auto;\n      color: #f44;\n    }\n    h3 {\n      padding: 10px;\n      margin-bottom: 5px;\n      text-align: center;\n    }\n    .div {\n      display: flex;\n      width: 95%;\n      margin: auto;\n      flex-direction: column;\n      margin-bottom: 10px;\n\n      input, button {\n        font-size: 1.1rem;\n        padding: .8rem .7rem;\n        border: 2px solid #00ADB5;\n        outline: none;\n      }\n      button {\n        background: #00ADB5;\n        border-bottom-left-radius: 10px;\n        border-bottom-right-radius: 10px;\n        cursor: pointer;\n        transition: background .1s ease-in-out;\n        &:hover {\n          background: #00ADc5ee;\n        }\n      }\n      input {\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n      }\n    }\n    &__users {\n      width: 95%;\n      margin: auto;\n      ul {\n        gap: 20px;\n        width: 95%;\n        display: flex;\n        justify-content: center;\n        flex-direction: row;\n        flex-wrap: wrap;\n        li {\n          width: 100%;\n          max-width: 290px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          border-radius: 5px;\n          word-wrap: break-word;\n          transition: transform .8s;\n          &:hover {\n            transform: scale(1.03);\n          }\n          .header{\n            word-wrap: break-word;\n            border-left: 2px solid #00ADB5;\n            border-right: 2px solid #00ADB5;\n            border-top: 2px solid #00ADB5;\n            width: 100%;\n            padding: .8rem .4rem ;\n            text-align: center;\n            border-top-left-radius: 20px;\n            border-top-right-radius: 20px;\n          }\n          .button {\n            width: 100%;\n            background-color: #C02739;\n            border-bottom-left-radius: 20px;\n            border-bottom-right-radius: 20px;\n            Button {\n              border-bottom-left-radius: 20px;\n              border-bottom-right-radius: 20px;\n              width: 100%;\n              padding: 1rem 0;\n            }\n          }\n        }\n      }\n    }\n  }\n  .row-item-users {}\n  @media screen and (max-width:760px) {\n    grid-template-columns: 1fr;\n    .row-item {\n      form {\n        width: 100%;\n        /* position: static; */\n        top: 0;\n      }\n    }\n    .row-item .div {\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      input, button {\n        padding: .8rem 1rem;\n      }\n      input {\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border-top-right-radius: 0px;\n        width: 50%;\n      }\n      button {\n        border-top-right-radius: 10px;\n        border-bottom-right-radius: 10px;\n        border-bottom-left-radius: 0;\n      }\n    }\n\n  }\n"]))),wn=t(76),Nn=function(n){var e=n.getUser,t=n.handleNewUser,r=n.deleteUser,a=Object(wn.a)(),c=a.register,i=a.handleSubmit,s=a.formState.errors,o=sn().loading;return Object(h.jsxs)(vn,{children:[Object(h.jsx)("div",{className:"row-item",children:Object(h.jsxs)("form",{onSubmit:i((function(n,e){t(n),e.target.reset()})),children:[Object(h.jsxs)("div",{className:"div",children:[Object(h.jsx)("input",Object(D.a)({placeholder:"Created a new user",type:"text"},c("userName",{required:!0,pattern:/^[A-Za-z]+$/i}))),Object(h.jsx)("button",{children:"Save"})]}),Object(h.jsx)("div",{children:s.userName&&Object(h.jsx)("span",{children:"*Must not have spaces"})})]})}),o?Object(h.jsx)(U,{}):"",Object(h.jsx)("div",{className:"row-item__users",children:Object(h.jsx)("ul",{children:e.map((function(n){return Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{className:"header",children:n.userName}),Object(h.jsx)("div",{className:"button",children:Object(h.jsx)(K,{onClick:function(){return r(n._id)},children:"Delete"})})]},n._id)}))})})]})};var yn=function(){var n=sn(),e=n.getUser,t=n.handleNewUser,r=n.deleteUser;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(X,{children:"Create User"}),Object(h.jsx)(Nn,{getUser:e,handleNewUser:t,deleteUser:r})]})};var _n=function(){var n=u("isDarakMode"),e=Object(d.a)(n,2),t=e[0],r=e[1],a=function(){document.body.classList.add("dark"),document.body.classList.remove("light")},i=function(){document.body.classList.add("light"),document.body.classList.remove("dark")};return Object(c.useEffect)((function(){t?a():i(),r(!0)}),[]),Object(c.useEffect)((function(){t?a():i()}),[t]),Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"todolist",children:[Object(h.jsxs)(b.c,{children:[Object(h.jsx)(b.a,{path:"/spa-notes-app/notes",children:Object(h.jsx)(jn,{})}),Object(h.jsx)(b.a,{path:"/spa-notes-app/edit/:id",children:Object(h.jsx)(gn,{})}),Object(h.jsx)(b.a,{path:"/spa-notes-app/create",children:Object(h.jsx)(gn,{})}),Object(h.jsx)(b.a,{path:"/spa-notes-app/user",children:Object(h.jsx)(yn,{})}),Object(h.jsx)(b.a,{path:"/spa-notes-app/",exact:!0,children:Object(h.jsx)(dn,{})})]}),Object(h.jsx)(_,{})]})]})})};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(_n,{})}),document.getElementById("root"))},83:function(n,e,t){}},[[155,1,2]]]);
//# sourceMappingURL=main.93203b9d.chunk.js.map