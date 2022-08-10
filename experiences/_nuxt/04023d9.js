(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1310:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"d",(function(){return w})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return _}));var r=n(6),o=(n(21),n(77),n(16),n(3),n(1044)),c=n.n(o),l=n(1145),f=n(1433),d=n.n(f),v=n(1190),m=new(n.n(v).a),h=c.a.posix||c.a;function x(e,t,n){var r={};return e&&(r.filePath=e),t&&(r.jsonPath=t),n&&(r.jsonSchema=n),r}function w(e,pattern){var t=h.normalize(pattern);return d.a.isMatch(e,t)}function y(e){if(!e)throw new Error('cannot create glob for file path "'.concat(e,'"'));return e.replace(/([[\]{}*!()])/g,"\\$1")}function _(e,t){var n=t.jsonPath,o=t.jsonSchema;if(!n&&o)throw new Error("jsonPath missing");if(n&&"object"!==Object(r.a)(e))throw new Error("jsonPath requires fileContent of type object");if(!n)return[e];var c=Object(l.JSONPath)({path:n,json:e});if(o){var f=m.compile(o);c=c.filter((function(e){return f(e)}))}return 0===c.length?null:c}},1462:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(21),n(429),n(92),n(1722)),c=n.n(o),l=n(10),f=n(1140),d=n(1309),v=n(1473);function m(){return new Worker(n.p+"0a84d61.worker.js")}var h=n(977),x=n(1310),w=n(1007),y={name:"UnitFileExplorerViewerJson",mixins:[f.a,d.a],data:function(){return{jsonText:"",items:[],open:[],foundItems:[],error:!1,search:"",searchCooldownTime:200,filteredItems:[],searching:!1,useOldSearch:!1}},computed:{delayedUpdateFilteredItems:function(){return c()(Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.searching=!0,e.next=3,this.updateFilteredItems();case 3:this.searching=!1;case 4:case"end":return e.stop()}}),e,this)}))),this.searchCooldownTime)}},watch:{filename:{handler:function(e){this.getContentFromFilename(e)},immediate:!0},search:function(){this.delayedUpdateFilteredItems.cancel(),this.delayedUpdateFilteredItems()}},methods:{k:function(e){return"file-explorer.viewer.json.".concat(e)},onFoundItemRowClick:function(e){this.open=e.trail},createItemAcessor:function(e){var t=Object(x.b)(this.filename),n=Object(w.f)(e.path);return Object(x.a)(t,n)},copyAccessor:function(e){try{var t=JSON.stringify(this.createItemAcessor(e));navigator.clipboard.writeText(t)}catch(e){console.error(e)}},onNodeClick:function(e){try{this.$emit("select-accessor",this.createItemAcessor(e))}catch(e){console.error(e)}},iconForNode:function(e){switch(e){case w.e.TREE:return l.q;case w.e.LIST:return l.L;case w.e.LEAF:return l.P}},isUndef:function(e){return void 0===e},getContentFromFilename:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setLoading(!0),n.next=3,t.fileManager.getPreprocessedText(e);case 3:return t.jsonText=n.sent,n.prev=4,n.next=7,t.fileManager.getJsonItems(e);case 7:t.items=n.sent,t.filteredItems=t.items,t.error=!1,n.next=16;break;case 12:n.prev=12,n.t0=n.catch(4),console.error(n.t0),t.error=!0;case 16:t.setLoading(!1);case 17:case"end":return n.stop()}}),n,null,[[4,12]])})))()},updateFilteredItems:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.search){t.next=12;break}if(!e.useOldSearch){t.next=7;break}return t.next=4,Object(h.i)(new v.a,[e.jsonText,e.search]);case 4:e.filteredItems=t.sent,t.next=10;break;case 7:return t.next=9,Object(h.i)(new m,[e.search,e.items]);case 9:e.foundItems=t.sent;case 10:t.next=13;break;case 12:e.filteredItems=e.items;case 13:case"end":return t.stop()}}),t)})))()}}},_=y,j=(n(1733),n(38)),k=n(44),T=n.n(k),I=n(1141),O=n(410),S=n(382),C=n(957),F=n(1704),component=Object(j.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",[e._v("\n  Loading\n")]):e.error?n("div",[n("p",[e._v('Could not parse the file. Please use the "RAW" tab to visualise it.')])]):n("div",[n("BaseSearchBar",{attrs:{loading:e.searching,label:e.$t("file-explorer.content-search-name"),placeholder:e.$t("file-explorer.content-search-placeholder")},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("VExpandTransition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.foundItems.length>0,expression:"foundItems.length > 0"}]},[n("VDataTable",{staticClass:"elevation-1",attrs:{dense:"",headers:[{text:"Found items (click to show in tree)",value:"item"}],items:e.foundItems,"items-per-page":5},on:{"click:row":e.onFoundItemRowClick},scopedSlots:e._u([{key:"item.item",fn:function(t){var r=t.item;return[n("div",{staticClass:"clickable"},[e.isUndef(r.name)?e._e():n("span",[e._v("\n              "+e._s(r.name+":")+"\n            ")]),e._v(" "),n("span",{staticClass:"font-italic"},[e._v(e._s(r.value))])])]}}])})],1)]),e._v(" "),n("VTreeview",{attrs:{dense:"",transition:"",items:e.filteredItems,open:e.open},on:{"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"prepend",fn:function(t){var r=t.item;return[e.isUndef(r.type)?e._e():n("VIcon",[e._v("\n        "+e._s(e.iconForNode(r.type))+"\n      ")])]}},{key:"label",fn:function(t){var r=t.item,o=t.leaf;return[n("span",[o?n("span",{attrs:{title:r.value}},[e.isUndef(r.name)?e._e():n("span",[e._v("\n            "+e._s(r.name+":")+"\n          ")]),e._v(" "),n("span",{staticClass:"font-italic"},[e._v(e._s(r.value))])]):n("span",[e._v(e._s(r.name))]),e._v(" "),n("VTooltip",{attrs:{bottom:"","open-delay":"200"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("VIcon",e._g({staticClass:"clickable",on:{click:function(t){return e.copyAccessor(r)}}},o),[e._v("\n              $vuetify.icons.mdiContentCopy\n            ")])]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(e.$t(e.k("Copy accessor to clipboard"))))])]),e._v(" "),n("VTooltip",{attrs:{bottom:"","open-delay":"200"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("VIcon",e._g({staticClass:"clickable",on:{click:function(t){return e.onNodeClick(r)}}},o),[e._v("\n              $vuetify.icons.mdiTable\n            ")])]}}],null,!0)},[e._v(" "),n("span",[e._v(e._s(e.$t(e.k("Show as table"))))])])],1)]}}])})],1)}),[],!1,null,"1fabdac2",null);t.default=component.exports;T()(component,{BaseSearchBar:n(1019).default}),T()(component,{VDataTable:I.a,VExpandTransition:O.a,VIcon:S.a,VTooltip:C.a,VTreeview:F.a})},1473:function(e,t,n){"use strict";function r(){return new Worker(n.p+"cac3d20.worker.js")}n.d(t,"a",(function(){return r}))},1589:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},1590:function(e,t,n){var r=n(1724),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},1591:function(e,t,n){var r=n(1590).Symbol;e.exports=r},1592:function(e,t,n){var content=n(1734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("00ec7247",content,!0,{sourceMap:!1})},1722:function(e,t,n){var r=n(1589),o=n(1723),c=n(1725),l=Math.max,f=Math.min;e.exports=function(e,t,n){var d,v,m,h,x,w,y=0,_=!1,j=!1,k=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function T(time){var t=d,n=v;return d=v=void 0,y=time,h=e.apply(n,t)}function I(time){return y=time,x=setTimeout(S,t),_?T(time):h}function O(time){var e=time-w;return void 0===w||e>=t||e<0||j&&time-y>=m}function S(){var time=o();if(O(time))return C(time);x=setTimeout(S,function(time){var e=t-(time-w);return j?f(e,m-(time-y)):e}(time))}function C(time){return x=void 0,k&&d?T(time):(d=v=void 0,h)}function F(){var time=o(),e=O(time);if(d=arguments,v=this,w=time,e){if(void 0===x)return I(w);if(j)return clearTimeout(x),x=setTimeout(S,t),T(w)}return void 0===x&&(x=setTimeout(S,t)),h}return t=c(t)||0,r(n)&&(_=!!n.leading,m=(j="maxWait"in n)?l(c(n.maxWait)||0,t):m,k="trailing"in n?!!n.trailing:k),F.cancel=function(){void 0!==x&&clearTimeout(x),y=0,d=w=v=x=void 0},F.flush=function(){return void 0===x?h:C(o())},F}},1723:function(e,t,n){var r=n(1590);e.exports=function(){return r.Date.now()}},1724:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(102))},1725:function(e,t,n){var r=n(1726),o=n(1589),c=n(1728),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,v=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=f.test(e);return n||d.test(e)?v(e.slice(2),n?2:8):l.test(e)?NaN:+e}},1726:function(e,t,n){var r=n(1727),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},1727:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},1728:function(e,t,n){var r=n(1729),o=n(1732);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1729:function(e,t,n){var r=n(1591),o=n(1730),c=n(1731),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):c(e)}},1730:function(e,t,n){var r=n(1591),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[f]=n:delete e[f]),o}},1731:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},1732:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},1733:function(e,t,n){"use strict";n(1592)},1734:function(e,t,n){var r=n(25)(!1);r.push([e.i,".clickable[data-v-1fabdac2]{cursor:pointer}",""]),e.exports=r}}]);