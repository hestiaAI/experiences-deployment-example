(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1552:function(e,t,n){"use strict";n.r(t);var r=n(85),o=n(22),l=(n(72),n(32),n(3),n(41),n(40),n(1184),n(56),n(92),n(1921)),c=n(1140),m=n(1309),f={name:"UnitFileExplorerViewerXlsx",mixins:[c.a,m.a],data:function(){return{loading:!0,error:!1,file:null,sheets:{},headers:[],items:[]}},watch:{filename:{handler:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getContentFromFilename(e);case 2:case"end":return n.stop()}}),n)})))()},immediate:!0}},methods:{getContentFromFilename:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.setLoading(!0),t.file=t.fileManager.fileDict[e],n.prev=2,n.next=5,Object(l.a)(t.file,{getSheets:!0});case 5:return o=n.sent.map((function(s){return s.name})),n.next=8,Promise.all(o.map((function(s){return Object(l.a)(t.file,{sheet:s})})));case 8:c=n.sent,t.sheets=Object.fromEntries(c.map((function(e,i){var t=Array.from({length:Math.max.apply(Math,Object(r.a)(e.map((function(e){return e.length}))))},(function(e,t){return"Column "+(t+1)})),n=e.map((function(e){return Object.fromEntries(t.map((function(t,n){return[t,e[n]]})))}));return[o[i],{headers:t,items:n}]}))),t.setSheet(o[0]),t.error=!1,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(2),t.error=!0;case 17:t.setLoading(!1);case 18:case"end":return n.stop()}}),n,null,[[2,14]])})))()},setSheet:function(e){this.headers=this.sheets[e].headers,this.items=this.sheets[e].items}}},h=n(38),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loading?n("div",[e._v("\n  Loading\n")]):e.error?n("div",[n("p",[e._v("Could not parse file.")])]):n("div",[e._l(e.sheets,(function(t,r,i){return n("BaseButton",{key:i,attrs:{text:r},on:{click:function(t){return e.setSheet(r)}}})})),e._v(" "),n("UnitFilterableTable",e._b({},"UnitFilterableTable",{headers:e.headers,items:e.items},!1))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseButton:n(587).default,UnitFilterableTable:n(1014).default})}}]);