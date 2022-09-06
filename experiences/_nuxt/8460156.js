(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1590:function(e,t,r){"use strict";r.r(t),r.d(t,"mergeTableData",(function(){return te})),r.d(t,"makeTableData",(function(){return ne})),r.d(t,"genericDateViewer",(function(){return D})),r.d(t,"timedObservationViewer",(function(){return U})),r.d(t,"genericLocationViewer",(function(){return K})),r.d(t,"jsonToTableConverter",(function(){return _})),r.d(t,"createTableOptions",(function(){return ce}));r(19),r(20);var n=r(21),c=r(86),o=r(2),f=r(6),l=r(16),j=(r(77),r(3),r(221),r(39),r(57),r(1164),r(1165),r(257),r(63),r(28),r(8),r(64),r(134),r(14),r(9),r(46),r(10),r(1064),r(42),r(1065),r(1066),r(1067),r(1068),r(1069),r(1070),r(1071),r(1072),r(1073),r(1074),r(1075),r(1076),r(1077),r(1078),r(1079),r(1080),r(41),r(32),r(36),r(22),r(255),r(66),r(263),r(435),r(436),r(1158),r(154),r(1162)),m=r(1142),d=r(1762),O=r(1201),v=r(180),h=r(1770),y=r(166),w=r(1206),x=r.n(w),M={type:"array",items:{type:"object",properties:{accessor:{type:"object",properties:{filePath:{type:"string"},jsonPath:{type:"string"}},required:["filePath","jsonPath"]},columns:{type:"array",items:{type:"object",properties:{name:{type:"string"},path:{type:"string"},type:{default:"object",enum:["string","date","number","object","list","boolean"]},format:{type:"string"}},required:["path"],anyOf:[{not:{properties:{type:{const:"date"}}}},{not:{required:["type"]}},{required:["format"]}]}}},required:["accessor"]}},k=(r(343),r(1758)),P=r(1759),R=r(1760),S=r(965),E=r(1733),T=r(1761);var F={groupSimilarEventValues:function(e){var t=Object(R.a)(e.map((function(e){return e.eventValue}))),r=t.flatMap((function(e,r){return t.filter((function(e,t){return r!==t})).flatMap((function(t){return r=e,n=t,c=Object(k.a)(r,(function(e,i){return e===n[i]})).join(""),(o=Object(P.a)(r,(function(e,i){return e===n[i]})).join(""))!==c?{prefix:c,suffix:o}:[];var r,n,c,o}))})),n=Object(S.a)(r,(function(e){return JSON.stringify(e)}));return Object(E.a)(Object.entries(n),(function(e){var t=Object(l.a)(e,2);t[0];return-t[1].length})).forEach((function(t){var r=Object(l.a)(t,2),n=r[0],c=(r[1],JSON.parse(n)),o=c.suffix,f=c.prefix,j=new RegExp("".concat(Object(T.a)(f),"(.+)").concat(Object(T.a)(o)));(o.includes(" ")||f.includes(" "))&&e.filter((function(e){return!Object(O.a)(e,"matched")})).forEach((function(e){j.test(e.eventValue)&&(e.eventValue=e.eventValue.match(j)[1],e.eventType="".concat(f,"...").concat(o),e.matched=!0)}))})),e.forEach((function(e){return delete e.matched})),e},identifyTypeFromManifestList:function(e,t,r){var n=Object.values(t.eventTypes).flatMap((function(e){return Object.entries(e).filter((function(e){return Object(l.a)(e,1)[0]===r[1]})).flatMap((function(e){var t=Object(l.a)(e,2);t[0];return t[1]}))}));return e.forEach((function(e){var t;e.eventType=null!==(t=find(n,(function(t){return e.eventValue.includes(t)})))&&void 0!==t?t:"unknown"})),e}};function Y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):Y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var H=new x.a,C=[Object(y.c)("%Y-%m-%dT%H:%M:%SZ"),Object(y.c)("%Y-%m-%dT%H:%M:%S.%LZ"),Object(y.c)("%Y-%m-%d %H:%M:%S %Z UTC"),Object(y.c)("%Y-%m-%d %H:%M:%S.%L%Z"),Object(y.c)("%Y-%m-%d %H:%M:%S UTC"),Object(y.c)("%Y-%m-%d %H:%M:%S"),Object(y.c)("%Y-%m-%d %H:%M"),Object(y.c)("%Y-%m-%d %H:%M"),Object(y.c)("%Y-%m-%d"),Object(y.c)("%Y/%m/%d %H:%M:%S"),Object(y.c)("%Y-%m-%dT%H:%M:%S.%LZ[UTC]"),Object(y.c)("%Y-%m-%d %H:%M"),Object(y.c)("%s"),Object(y.c)("%Q")];function J(e){if(0===e.length||"0"===e[0]||"+"===e[0])return null;var t=null;return C.some((function(r,n){return null!==(t=r(e))&&t.getFullYear()>2e3&&t.getFullYear()<2038&&(0!==n&&(C.splice(n,1),C.splice(0,0,r)),!0)}))?t:null}function V(e){return"[object Object]"===Object.prototype.toString.call(e)}function N(e){var t=["lat","lon","lng"];return function e(r){if(V(r)){var n=Object.entries(r).flatMap((function(r){var n=Object(l.a)(r,2),c=n[0],o=n[1],j=J(c),d=Object(m.a)(c);if("object"===Object(f.a)(o)){var O=e(o);return j?O.map((function(e){return e.date?e:A(A({},e),{},{date:j})})):O.map((function(e){return A(A({},e),{},{description:"".concat(d).concat(e.description?" > ".concat(e.description):"")})}))}var v,h=J(o);return j&&h?[{date:h,description:"".concat(c)}]:!j&&h&&(v=c,t.every((function(e){return!v.toLowerCase().includes(e)})))?[{date:h,description:""}]:j&&!h?[{date:j,description:"".concat(o)}]:[{description:"".concat(d," : ").concat(o)}]})),o=Object(d.a)(n,(function(e){return Object(O.a)(e,"date")})),j=Object(l.a)(o,2),v=j[0],h=j[1],y=Object(d.a)(v,(function(e){return e.description})),w=Object(l.a)(y,2),x=w[0],M=w[1],k="[".concat(h.map((function(e){return e.description})).join(", "),"]"),P=h.length>0?M.map((function(e){return A(A({},e),{},{description:k})})):M;return[].concat(Object(c.a)(x),Object(c.a)(P))}return Array.isArray(r)?r.flatMap((function(t){return"object"===Object(f.a)(t)?e(t):{description:"".concat(t)}})):[]}(e).filter((function(e){return Object(O.a)(e,"date")}))}function L(e){return e.items.flatMap((function(e){var t=Object.entries(e).map((function(e){var t=Object(l.a)(e,2),r=t[0],n=t[1],c=J(n);return c?{date:c,description:"".concat(Object(m.a)(r))}:{description:"".concat(Object(m.a)(r)," : ").concat(n)}})),r=Object(d.a)(t,(function(e){return Object(O.a)(e,"date")})),n=Object(l.a)(r,2),o=n[0],f=n[1];return o.map((function(e,i){var t=o.filter((function(e,t){return t!==i})),r="".concat(e.description," : [").concat([].concat(Object(c.a)(f),Object(c.a)(t)).map((function(e){return e.description})).join(", "),"]");return A(A({},e),{},{description:r})}))}))}function D(e){return Z.apply(this,arguments)}function Z(){return Z=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,o,f,j,m,d,v,h,y,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.fileManager,o=t.options,f=r.getFilenames(),Object(O.a)(o,"acceptedPaths")&&(f=f.filter((function(e){return new RegExp(o.acceptedPaths).test(e)}))),j=f.filter((function(e){return e.endsWith(".csv")})),e.next=6,Promise.all(j.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCsvItems(t);case 2:return n=e.sent,r.freeFile(t),e.abrupt("return",[t,n]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return m=e.sent,d=m.flatMap((function(e){var t=Object(l.a)(e,2),r=t[0];return L(t[1]).map((function(e){return A(A({},e),{},{filename:r})}))})),v=f.filter((function(e){return/\.js(:?on)?$/.test(e)})),e.next=11,Promise.all(v.flatMap(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l.a,e.t1=Object,e.next=4,r.preprocessFiles([t]);case 4:return e.t2=e.sent,e.t3=e.t1.entries.call(e.t1,e.t2)[0],n=(0,e.t0)(e.t3,2),c=n[0],o=n[1],r.freeFile(t),e.prev=10,e.abrupt("return",N(JSON.parse(o)).map((function(e){return A(A({},e),{},{filename:c})})));case 14:return e.prev=14,e.t4=e.catch(10),console.error(e.t4),e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e,null,[[10,14]])})));return function(t){return e.apply(this,arguments)}}()));case 11:return h=e.sent.flat(),y=[].concat(Object(c.a)(h),Object(c.a)(d)),w=["date","description","filename"],e.abrupt("return",{headers:w,items:y});case 15:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function U(e){return I.apply(this,arguments)}function I(){return(I=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n,c,o,f,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.fileManager,(n=t.options).fileMatchers.forEach((function(e){try{e.regex=new RegExp(e.regex)}catch(t){throw new Error("The regex '".concat(e.regex,"' is not valid"))}})),!Object(O.a)(n,"parser")){e.next=11;break}if(!((c=n.parser)in F)){e.next=8;break}n.parser=F[c],e.next=9;break;case 8:throw new Error("The parser ".concat(c," doesn't exist"));case 9:e.next=12;break;case 11:n.parser=v.a;case 12:return o=r.getFilenames().filter((function(e){return n.fileMatchers.some((function(t){return t.regex.test(e)}))})),e.next=15,r.preprocessFiles(o);case 15:return f=e.sent,m=["date","eventSource","eventType","eventValue"],d=Object.entries(f).flatMap((function(e){var t,r=Object(l.a)(e,2),c=r[0],text=r[1],o=find(n.fileMatchers,(function(e){return e.regex.test(c)}));try{t=Object(j.JSONPath)({path:o.entryPath,json:JSON.parse(text)}).map((function(e){return Object.fromEntries(Object.entries(o.fields).map((function(t){var r=Object(l.a)(t,2),n=r[0],f=r[1],source=f.source,path=f.path;return"entry"===source?[n,Object(j.JSONPath)({path:path,json:e,wrap:!1})]:"regex"===source?[n,c.match(o.regex)[path]]:[]})))}))}catch(e){t=[]}return n.parser(t,n,c.match(o.regex))})),e.abrupt("return",{headers:m,items:d});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(e){return isFinite(e)&&Math.abs(e)<=90},W=function(e){return isFinite(e)&&Math.abs(e)<=180},B=["lat"],Q=["lon","lng"];function z(e){var t=function e(t,path){if(V(t)){var r=null,n=null;return Object.entries(t).forEach((function(e){var c=Object(l.a)(e,2),o=c[0],f=c[1],j=o.toLowerCase();j.includes("e7")&&(t[o]=f*=1e-7),B.some((function(e){return j.includes(e)}))&&$(f)?r=o:Q.some((function(e){return j.includes(e)}))&&W(f)&&(n=o)})),null===r||null===n?Object.entries(t).flatMap((function(t){var r=Object(l.a)(t,2),n=r[0];return e(r[1],path.concat(n))})):[{latitude:+t[r],longitude:+t[n],path:path.join("/"),description:Object(h.a)(t,[r,n])}]}return Array.isArray(t)?t.flatMap((function(t){return e(t,path)})):[]}(e,[]);return t}function G(e){var t=e.items;if(0===t.length)return[];var r=null,n=null,c=t.slice(0,100);return Object.keys(t[0]).forEach((function(e){var t=e.toLowerCase();c.every((function(i){return""===i[e]}))||(B.some((function(e){return t.includes(e)}))&&c.every((function(i){return $(i[e])}))?r=e:Q.some((function(e){return t.includes(e)}))&&c.every((function(i){return W(i[e])}))&&(n=e))})),null===r||null===n?[]:t.map((function(i){return{latitude:+i[r],longitude:+i[n],path:"",description:Object(h.a)(i,[r,n])}}))}function K(e){return X.apply(this,arguments)}function X(){return X=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,o,f,j,m,d,v,h,y,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.fileManager,o=t.options,f=r.getFilenames(),Object(O.a)(o,"acceptedPaths")&&(f=f.filter((function(e){return new RegExp(o.acceptedPaths).test(e)}))),j=f.filter((function(e){return e.endsWith(".csv")})),e.next=6,Promise.all(j.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getCsvItems(t);case 2:return n=e.sent,r.freeFile(t),e.abrupt("return",[t,n]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return m=e.sent,d=m.flatMap((function(e){var t=Object(l.a)(e,2),r=t[0];return G(t[1]).map((function(e){return A(A({},e),{},{filename:r})}))})),v=f.filter((function(e){return/\.js(:?on)?$/.test(e)})),e.next=11,Promise.all(v.flatMap(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l.a,e.t1=Object,e.next=4,r.preprocessFiles([t]);case 4:return e.t2=e.sent,e.t3=e.t1.entries.call(e.t1,e.t2)[0],n=(0,e.t0)(e.t3,2),c=n[0],o=n[1],r.freeFile(t),e.prev=10,e.abrupt("return",z(JSON.parse(o)).map((function(e){return A(A({},e),{},{filename:c})})));case 14:return e.prev=14,e.t4=e.catch(10),console.error(e.t4),e.abrupt("return",[]);case 18:case"end":return e.stop()}}),e,null,[[10,14]])})));return function(t){return e.apply(this,arguments)}}()));case 11:return h=e.sent.flat(),y=[].concat(Object(c.a)(h),Object(c.a)(d)),w=["filename","latitude","longitude","path","description"],e.abrupt("return",{headers:w,items:y});case 15:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function _(e){return ee.apply(this,arguments)}function ee(){return ee=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,c,o,f,l,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.fileManager,c=t.options,o=H.compile(M),o(c)){e.next=6;break}return console.error("Invalid options: ",H.errorsText(o.errors)),e.abrupt("return",{});case 6:return f=c.map(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.findMatchingObjects(t.accessor,{freeFiles:!0});case 2:return n=e.sent,e.abrupt("return",ne(n,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=9,Promise.all(f);case 9:return l=e.sent,j=te(l),e.abrupt("return",j);case 12:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(e){var t=e.filter((function(td){var e,t;return(null===(e=td.headers)||void 0===e?void 0:e.length)&&(null===(t=td.items)||void 0===t?void 0:t.length)}));return{headers:Object(c.a)(new Set(t.flatMap((function(td){return td.headers})))),items:t.flatMap((function(td){return td.items}))}}function re(e){return e.name||e.path}function ne(e,t){var r=1===e.length&&Array.isArray(e[0])?e[0]:e;if(null!=t&&t.columns){var n=t.columns.map(re),o=r.map((function(e){return function(object,e){var t={};return e.columns.forEach((function(e){var r=Object(j.JSONPath)({path:e.path,json:object,wrap:!1}),n=re(e);switch(e.type){case"date":t[n]=Object(y.c)(e.format)(r);break;case"object":t[n]=r;break;case"string":default:t[n]=String(r);break;case"number":t[n]=Number(r);break;case"boolean":t[n]=Boolean(r)}})),t}(e,t)}));return{headers:n,items:o}}var l=r[0];if(void 0===l)return{headers:[],items:[]};if("object"===Object(f.a)(l)&&!Array.isArray(l)){var m=function(e){var t=e.reduce((function(e,t){return Object.keys(t).forEach((function(t){return e.add(t)})),e}),new Set);return Object(c.a)(t)}(r);return{headers:m,items:r}}return{headers:["item"],items:r.map((function(s){return{item:s}}))}}function ae(e){if(!e)return e;var t=e[0].toUpperCase();return e.length>1&&(t+=e.substr(1)),t}function ce(e,t){return ue.apply(this,arguments)}function ue(){return(ue=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c,o,j,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.findMatchingObjects(r);case 2:if(n=e.sent,c=Object(l.a)(n,1),o=c[0],(j=Array.isArray(o)?o[0]:o)&&!Array.isArray(j)){e.next=8;break}return e.abrupt("return",{accessor:r});case 8:return m=Object.keys(j).map((function(e){var t={name:ae(e),path:'$["'.concat(e,'"]')},r=j[e];return"object"===Object(f.a)(r)&&(t.type="object"),t})),e.abrupt("return",[{accessor:r,columns:m}]);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);