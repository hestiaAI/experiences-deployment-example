(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1074:function(t,e,r){r(1472);var n=r(4),o=r(1322);n({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},1075:function(t,e,r){"use strict";var n=r(4),o=r(1473).start;n({target:"String",proto:!0,forced:r(1474)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1322:function(t,e,r){"use strict";var n=r(453).end,o=r(632);t.exports=o("trimEnd")?function(){return n(this)}:"".trimEnd},1330:function(t,e,r){"use strict";var n=r(21);r(77),r(46),r(87);e.a={props:{hash:{type:String,required:!0}},data:function(){return{progress:!1,refreshPipeline:!0}},watch:{progress:{immediate:!0,handler:function(t){this.$store.commit("experience/setProgress",t)}},"$store.state.fileManager":{immediate:!0,handler:function(t){t&&(this.refreshPipeline=!0)}},"$route.hash":{immediate:!0,handler:function(t){var e=this;t.slice(1)===this.hash&&this.refreshPipeline&&(this.progress=!0,window.setTimeout(Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.run();case 2:e.refreshPipeline=!1;case 3:case"end":return t.stop()}}),t)}))),500))}}}}},1472:function(t,e,r){var n=r(4),o=r(1322);n({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},1473:function(t,e,r){var n=r(18),o=r(121),c=r(53),f=r(452),l=r(90),d=n(f),h=n("".slice),m=Math.ceil,v=function(t){return function(e,r,n){var f,v,w=c(l(e)),j=o(r),O=w.length,y=void 0===n?" ":c(n);return j<=O||""==y?w:((v=d(y,m((f=j-O)/y.length))).length>f&&(v=h(v,0,f)),t?w+v:v+w)}};t.exports={start:v(!1),end:v(!0)}},1474:function(t,e,r){var n=r(137);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},1708:function(t,e,r){"use strict";r.r(e);r(12),r(8),r(15),r(3),r(19),r(9),r(20);var n=r(21),o=r(2),c=(r(77),r(119)),f=r(1330),l=r(982);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={mixins:[f.a],props:{sql:{type:String,required:!0}},computed:h(h({},Object(c.c)(["currentDB"])),{},{disabled:function(){return!this.currentDB||!this.sql}}),methods:{run:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.progress=!0,e.next=3,Object(l.j)(1);case 3:try{r=t.currentDB.select(t.sql),t.$emit("update",{result:r})}catch(e){t.$emit("update",{error:e})}finally{t.progress=!1}case 4:case"end":return e.stop()}}),e)})))()}}},v=r(38),component=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},982:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return d})),r.d(e,"a",(function(){return h})),r.d(e,"h",(function(){return m})),r.d(e,"g",(function(){return v})),r.d(e,"e",(function(){return w})),r.d(e,"i",(function(){return j})),r.d(e,"j",(function(){return O})),r.d(e,"k",(function(){return y})),r.d(e,"c",(function(){return x})),r.d(e,"f",(function(){return R})),r.d(e,"l",(function(){return P}));var n=r(86),o=(r(21),r(17)),c=r(6),f=r(2),l=(r(77),r(3),r(41),r(40),r(1053),r(415),r(12),r(1074),r(339),r(28),r(1075),r(65),r(87),r(594),"txt"),d=Object(f.a)({csv:"text/csv",json:"application/json",jsonld:"application/ld+json",nq:"application/n-quads",rq:"application/sparql-query",ttl:"text/turtle",yaml:"application/x-yaml",yml:"application/x-yaml",png:"image/png",jpeg:"image/jpeg",zip:"application/zip"},l,"text/plain;charset=UTF-8");function h(data){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text/plain";return data instanceof Blob?window.URL.createObjectURL(data):window.URL.createObjectURL(new Blob([data],{type:t}))}function m(t){window.URL.revokeObjectURL(t)}function v(t){return t.stack?t.stack:"object"===Object(c.a)(t)?Object.entries(t).reduce((function(t,e){var r=Object(o.a)(e,2),n=r[0],c=r[1];return"".concat(t).concat(n,": ").concat(c,"\n")}),"ERROR\n").trimRight():t}function w(t,e){return t.toString().padStart(e,"0")}function j(t,e){return t.postMessage(e),new Promise((function(e,r){t.addEventListener("message",(function(t){e(t.data)})),t.addEventListener("error",(function(t){console.error("worker error",t),r(t)})),t.addEventListener("messageerror",(function(t){console.error("worker error",t),r(t)}))}))}var O=function(t,e){return new Promise((function(r){return setTimeout(r,t,e)}))};function y(t,e){return t.size===e.size&&Object(n.a)(t).every((function(t){return e.has(t)}))}function x(t){var i=Math.floor(Math.log(t||1)/Math.log(1024));return"".concat((t/Math.pow(1024,i)).toFixed(2)," ").concat(["B","kB","MB","GB","TB"][i])}function R(t,e){return 1===e?t:"".concat(t,"s")}var P=function(t,title){var content="".concat(title," | ").concat(t.$store.state.config.appName);return{title:title,meta:[{hid:"og:title",property:"og:title",content:content},{hid:"twitter:title",property:"twitter:title",content:content}]}}}}]);