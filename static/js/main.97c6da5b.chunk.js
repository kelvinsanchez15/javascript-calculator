(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{18:function(e,t,a){e.exports=a(26)},23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var i=a(7),l=a.n(i),n=a(15),c=a.n(n),r=(a(23),a(10)),u=(a(24),a(30)),o=a(29),d=Object(u.a)(o.a),v={leftSide:[{id:"seven",value:"7"},{id:"eight",value:"8"},{id:"nine",value:"9"},{id:"four",value:"4"},{id:"five",value:"5"},{id:"six",value:"6"},{id:"one",value:"1"},{id:"two",value:"2"},{id:"three",value:"3"},{id:"zero",value:"0"},{id:"decimal",value:"."},{id:"equals",value:"="}],rightSide:[{id:"clear",value:"CA"},{id:"divide",value:"/"},{id:"multiply",value:"*"},{id:"subtract",value:"-"},{id:"add",value:"+"}]},s=/[*/+-]/,m=/[*/+-]$/;function f(e){var t=e.id,a=e.value,i=e.handleClick;return l.a.createElement("button",{id:t,value:a,onClick:i},a)}var h=function(){var e=Object(i.useState)("0"),t=Object(r.a)(e,2),a=t[0],n=t[1],c=Object(i.useState)(""),u=Object(r.a)(c,2),o=u[0],h=u[1],p=Object(i.useState)(!0),b=Object(r.a)(p,2),g=b[0],k=b[1],S=function(e){var t=e.target.value;if(h(t),"."===t)return g?(n(a.concat(t)),void k(!1)):void 0;if(s.test(t)&&k(!0),"-"===t&&/[*/+]/.test(o))n(a.concat(t));else if("-"===o&&/[*/+]/.test(t))n(a.slice(0,-2)+t);else{if(!s.test(o)||!s.test(t))return"CA"===t?(n("0"),void k(!0)):"="===t?m.test(a)?void n(d.evaluate(a.slice(0,-1)).toString()):void n(d.evaluate(a).toString()):void n("0"!==a?a.concat(t):"".concat(t));n(a.slice(0,-1)+t)}};return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"JavaScript Calculator"),l.a.createElement("div",{id:"display"},a),l.a.createElement("div",null,"the last clicked value is: ",o),v.leftSide.map((function(e){var t=e.id,a=e.value;return l.a.createElement(f,{key:t,id:t,value:a,handleClick:S})})),v.rightSide.map((function(e){var t=e.id,a=e.value;return l.a.createElement(f,{key:t,id:t,value:a,handleClick:S})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.97c6da5b.chunk.js.map