(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1005:function(t,n,e){"use strict";e.r(n);var r=e(985),o=e(977),c={mixins:[r.a],props:{href:{type:String,required:!0},filename:{type:String,default:void 0},text:{type:String,default:"Download"}},computed:{download:function(){var t;return null!==(t=this.filename)&&void 0!==t?t:"results.".concat(this.extension)}},watch:{href:function(t,n){Object(o.h)(n)}},beforeDestroy:function(){Object(o.h)(this.href)}},d=e(38),component=Object(d.a)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("BaseButton",t._b({attrs:{icon:"mdiDownload"}},"BaseButton",Object.assign({},{href:t.href,download:t.download,text:t.text},t.$attrs),!1))}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseButton:e(587).default})},1072:function(t,n,e){e(1470);var r=e(4),o=e(1320);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},1073:function(t,n,e){"use strict";var r=e(4),o=e(1471).start;r({target:"String",proto:!0,forced:e(1472)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1320:function(t,n,e){"use strict";var r=e(452).end,o=e(627);t.exports=o("trimEnd")?function(){return r(this)}:"".trimEnd},1470:function(t,n,e){var r=e(4),o=e(1320);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},1471:function(t,n,e){var r=e(18),o=e(121),c=e(53),d=e(451),f=e(89),l=r(d),h=r("".slice),m=Math.ceil,v=function(t){return function(n,e,r){var d,v,w=c(f(n)),j=o(e),x=w.length,y=void 0===r?" ":c(r);return j<=x||""==y?w:((v=l(y,m((d=j-x)/y.length))).length>d&&(v=h(v,0,d)),t?w+v:v+w)}};t.exports={start:v(!1),end:v(!0)}},1472:function(t,n,e){var r=e(137);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},977:function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return l})),e.d(n,"a",(function(){return h})),e.d(n,"h",(function(){return m})),e.d(n,"g",(function(){return v})),e.d(n,"e",(function(){return w})),e.d(n,"i",(function(){return j})),e.d(n,"j",(function(){return x})),e.d(n,"k",(function(){return y})),e.d(n,"c",(function(){return O})),e.d(n,"f",(function(){return B})),e.d(n,"l",(function(){return R}));var r=e(85),o=(e(22),e(15)),c=e(6),d=e(2),f=(e(92),e(3),e(41),e(40),e(1068),e(414),e(13),e(1072),e(253),e(28),e(1073),e(64),e(86),e(589),"txt"),l=Object(d.a)({csv:"text/csv",json:"application/json",jsonld:"application/ld+json",nq:"application/n-quads",rq:"application/sparql-query",ttl:"text/turtle",yaml:"application/x-yaml",yml:"application/x-yaml",png:"image/png",jpeg:"image/jpeg",zip:"application/zip"},f,"text/plain;charset=UTF-8");function h(data){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text/plain";return data instanceof Blob?window.URL.createObjectURL(data):window.URL.createObjectURL(new Blob([data],{type:t}))}function m(t){window.URL.revokeObjectURL(t)}function v(t){return t.stack?t.stack:"object"===Object(c.a)(t)?Object.entries(t).reduce((function(t,n){var e=Object(o.a)(n,2),r=e[0],c=e[1];return"".concat(t).concat(r,": ").concat(c,"\n")}),"ERROR\n").trimRight():t}function w(t,n){return t.toString().padStart(n,"0")}function j(t,n){return t.postMessage(n),new Promise((function(n,e){t.addEventListener("message",(function(t){n(t.data)})),t.addEventListener("error",(function(t){console.error("worker error",t),e(t)})),t.addEventListener("messageerror",(function(t){console.error("worker error",t),e(t)}))}))}var x=function(t,n){return new Promise((function(e){return setTimeout(e,t,n)}))};function y(t,n){return t.size===n.size&&Object(r.a)(t).every((function(t){return n.has(t)}))}function O(t){var i=Math.floor(Math.log(t||1)/Math.log(1024));return"".concat((t/Math.pow(1024,i)).toFixed(2)," ").concat(["B","kB","MB","GB","TB"][i])}function B(t,n){return 1===n?t:"".concat(t,"s")}var R=function(t,title){var content="".concat(title," | ").concat(t.$store.state.config.appName);return{title:title,meta:[{hid:"og:title",property:"og:title",content:content},{hid:"twitter:title",property:"twitter:title",content:content}]}}},985:function(t,n,e){"use strict";e(39),e(60),e(13);var r=e(977);n.a={props:{extension:{type:String,default:r.b,validator:function(t){return Object.keys(r.d).includes(t)}}}}}}]);