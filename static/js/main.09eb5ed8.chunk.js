(this["webpackJsonpdesafio-pomodoro"]=this["webpackJsonpdesafio-pomodoro"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),r=n.n(o),s=(n(10),n(11),Object(c.createContext)()),i=(n(12),n(0)),u=function(e){var t=e.done,n=e.color,c={opacity:1,width:"".concat(t,"%"),background:n};return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"progress-done",style:c})})},j=n(5),b=n.n(j),d={ahh:n.p+"static/media/aah-01.b3390279.mp3",applause:n.p+"static/media/Applause.8c8047a3.mp3"};var l=function(e){var t=e.src;return Object(i.jsx)(b.a,{src:d[t],playing:!0})},m=n.p+"static/media/atividade.be4981c4.gif",O=n.p+"static/media/intervalo.19a182bb.gif",h=function(e){return e<0||void 0===e?0:e},v=function(e){return e<10?"0".concat(e):e};var p=function(){var e=Object(c.useContext)(s),t=e.hour,n=e.minute,a=e.second,o=e.activityTime,r=e.setSecond,j=e.setMinute,b=e.setHour,d=e.setShowTimer,p=e.setActivityTime,f=e.count,x=e.setCount,S=e.setInitialTime,T=e.setInProgressTime,g=e.initialTime,P=e.inProgressTime,y=e.playSound,C=e.setPlaySound,w=e.setPause,I=h(n),N=h(t),k=60*N*60+60*I+a;return Object(c.useEffect)((function(){S(k),T(k);var e=setInterval((function(){r((function(e){return e-1})),x((function(e){return e-1})),T((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){switch(1===f&&(x(o?5:25),p(!o),C(!0)),2!==f&&23!==f||C(!1),!0){case 0===N&&0===I&&-1===a:alert("Tempo Esgotado"),r(25),j(0),b(0),x(25),p(!0),d(!1),C(!0),w(!1);break;case 0===I&&-1===a:r(59),j(59),b(N-1);break;case-1===a:r(59),j((function(e){return e-1}))}}),[a]),Object(i.jsxs)("div",{children:[y&&Object(i.jsx)(l,{src:o?"ahh":"applause"}),Object(i.jsx)("img",{src:o?m:O,alt:"",style:{border:"solid 20px ".concat(o?"#d12c2c":"#39aa1d")}}),Object(i.jsx)("h2",{children:"".concat(o?"atividade":"intervalo",": ").concat(f)}),Object(i.jsx)("h2",{className:"timer",children:"Total: ".concat(v(N),":").concat(v(I),":").concat(v(a))}),Object(i.jsx)(u,{done:100*P/g,color:"#d12c2c"})]})};var f=function(){var e=Object(c.useContext)(s),t=e.setSecond,n=e.setMinute,a=e.setHour,o=e.second,r=e.minute,u=e.hour;return Object(i.jsxs)("div",{className:"timePicker",children:[Object(i.jsx)("p",{children:" selecione o tempo total da atividade "}),Object(i.jsx)("input",{name:"hour",type:"number",placeholder:"hora",value:u,max:"59",onChange:function(e){var t=e.target.value;return a(Number(t))}}),Object(i.jsx)("input",{name:"minute",type:"number",placeholder:"minuto",value:r,max:"59",onChange:function(e){var t=e.target.value;return n(Number(t))}}),Object(i.jsx)("input",{name:"seconds",type:"number",placeholder:"segundo",value:o,max:"59",onChange:function(e){var n=e.target.value;return t(Number(n))}})]})};var x=function(){var e=Object(c.useContext)(s),t=e.showTimer,n=e.setShowTimer,a=e.setPlaySound,o=e.pause,r=e.setPause;return Object(i.jsx)("button",{type:"button",onClick:function(){n(!t),o&&a(!1),r(!0)},children:t?"Pausar Pomodoro":"Iniciar Pomodoro"})};var S=function(){var e=Object(c.useContext)(s),t=e.showTimer,n=e.setShowTimer,a=e.setSecond,o=e.setMinute,r=e.setHour,u=e.setCount,j=e.setPlaySound,b=e.setPause,d=e.setActivityTime;return Object(i.jsx)("button",{type:"button",onClick:function(){n(!t),a(25),o(0),r(0),u(25),b(!1),j(!0),d(!0)},children:"Resetar Pomodoro"})};var T=function(){var e=Object(c.useContext)(s).showTimer;return Object(i.jsxs)("div",{className:"mainPomodoro",children:[Object(i.jsx)("h1",{children:"Timer Pomodoro"}),e&&Object(i.jsx)(p,{}),!e&&Object(i.jsx)(f,{}),Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)(x,{}),e&&Object(i.jsx)(S,{})]})]})},g=n(2);var P=function(e){var t=e.children,n=Object(c.useState)(),a=Object(g.a)(n,2),o=a[0],r=a[1],u=Object(c.useState)(),j=Object(g.a)(u,2),b=j[0],d=j[1],l=Object(c.useState)(25),m=Object(g.a)(l,2),O=m[0],h=m[1],v=Object(c.useState)(!0),p=Object(g.a)(v,2),f=p[0],x=p[1],S=Object(c.useState)(!1),T=Object(g.a)(S,2),P=T[0],y=T[1],C=Object(c.useState)(25),w=Object(g.a)(C,2),I=w[0],N=w[1],k=Object(c.useState)(0),M=Object(g.a)(k,2),A=M[0],E=M[1],F=Object(c.useState)(0),H=Object(g.a)(F,2),B=H[0],J=H[1],L=Object(c.useState)(!0),D=Object(g.a)(L,2),R=D[0],q=D[1],z=Object(c.useState)(!1),G=Object(g.a)(z,2),K=G[0],Q=G[1];return Object(i.jsx)(s.Provider,{value:{hour:o,minute:b,second:O,activityTime:f,setActivityTime:x,setSecond:h,setMinute:d,setHour:r,showTimer:P,setShowTimer:y,count:I,setCount:N,initialTime:A,setInitialTime:E,inProgressTime:B,setInProgressTime:J,playSound:R,setPlaySound:q,pause:K,setPause:Q},children:t})};var y=function(){return Object(i.jsx)("main",{children:Object(i.jsx)(P,{children:Object(i.jsx)(T,{})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.09eb5ed8.chunk.js.map