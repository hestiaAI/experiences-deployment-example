(window.webpackJsonp=window.webpackJsonp||[]).push([[29,15,68],{1005:function(e,t,r){"use strict";r.r(t);var n=r(997);t.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},kViewBlock:{type:Function,required:!0}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(e);return r.placeHolder(this.$t(t)),r}}}},1116:function(e,t,r){"use strict";r(8),r(15),r(19),r(20);var n=r(2),o=(r(3),r(36),r(12),r(22),r(78),r(416),r(41),r(417),r(418),r(419),r(420),r(421),r(422),r(423),r(424),r(425),r(426),r(427),r(428),r(429),r(40),r(39),r(9),r(104),r(434),r(1)),c=r(118),l=r(0);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=h.reduce((function(e,t){return e["offset"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),S=h.reduce((function(e,t){return e["order"+Object(l.I)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(S)};function _(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},S),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var e,t;for(t in f=[],m)m[t].forEach((function(e){var n=r[e],o=_(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(l,f)}(),e(r.tag,Object(c.a)(data,{class:f}),o)}})},1468:function(e,t,r){"use strict";r.r(t);r(36),r(28),r(15),r(3),r(64),r(40);var n=r(341),o={mixins:[r(1005).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{hours:n.x(24),colorPalette:n.r}},computed:{width:function(){return this.cellSize*(this.hours.length+3)},height:function(){return this.cellSize*(this.$days().length+4)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?n.S(this.dateFormat):function(e){var t=new Date(e);return isNaN(t.getTime())?null:t}},items:function(){var e=this;return this.values.map((function(t){return{date:e.dateParser(t[e.dateAccessor]),value:e.valueAccessor?t[e.valueAccessor]:1}})).filter((function(e){return e.date}))},itemsPerHour:function(){return n.i(this.items,(function(e){return n.J(e,(function(e){return e.value}))}),(function(e){return e.date.getHours()}),(function(e){return e.date.getDay()}))},extent:function(){return n.h(this.itemsPerHour,(function(e){return e[2]}))},color:function(){return n.C().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},mounted:function(){},methods:{generateTitle:function(e){return n.M("%a at %H:00")(new Date(2e3,12,e[1],e[0]))+" - "+e[2]+" records"},drawViz:function(){},legendSquareXPos:function(e){var t=this.width,s=this.cellSize;return t-2*s*this.legendNbItems+e*s*2-2*s}}},c=(r(1774),r(38)),l=r(44),d=r.n(l),f=r(975),h=r(967),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("div",{staticClass:"d-flex mb-3"},[r("div",{staticClass:"overline"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),r("VSpacer"),e._v(" "),e.includeTotal?r("div",{staticClass:"overline"},[e._v("\n      total: "),r("strong",[e._v(e._s(e.items.length))])]):e._e()],1),e._v(" "),r("svg",{staticClass:"graph",attrs:{viewBox:e.viewBox}},[r("g",{attrs:{transform:"translate(40.5,"+1.5*e.cellSize+")"}},[r("g",{staticClass:"week-axis"},e._l(e.$days(),(function(t,n){return r("text",{key:"d_"+n,attrs:{x:"-5",y:(n+.5)*e.cellSize,dy:"0.35em"}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),r("g",{staticClass:"hour-axis"},[r("text",{attrs:{y:"-20",x:(e.hours.length/2+.5)*e.cellSize}},[e._v(e._s(e.$t("hour"))+"s")]),e._v(" "),e._l(e.hours,(function(t){return r("text",{key:"h_"+t,attrs:{y:"-5",x:(t+.5)*e.cellSize}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),r("g",{staticClass:"calendar-hour"},e._l(e.itemsPerHour,(function(t,n){return r("g",{key:n},[r("rect",{attrs:{width:e.cellSize-e.cellSpacing,height:e.cellSize-e.cellSpacing,x:t[0]*e.cellSize+.5,y:t[1]*e.cellSize+.5,fill:e.color(t[2]),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("title",[e._v(e._s(e.generateTitle(t)))])])})),0),e._v(" "),r("g",{staticClass:"legend"},[r("text",{staticStyle:{"text-anchor":"end"},attrs:{x:e.legendSquareXPos(0)-e.cellSize,y:e.height-2.5*e.cellSize,dy:"-.20em"}},[e._v("\n          "+e._s(e.legendLabel)+"\n        ")]),e._v(" "),e._l(e.legendSquares,(function(t,n){return r("g",{key:"legend_"+n},[r("rect",{attrs:{width:2*(e.cellSize-e.cellSpacing),height:(e.cellSize-e.cellSpacing)/2,x:e.legendSquareXPos(n),y:e.height-3*e.cellSize,fill:e.color(t),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),r("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:e.legendSquareXPos(n)+e.cellSize,y:e.height-2*e.cellSize}},[e._v("\n            "+e._s(t)+"\n          ")])])}))],2)])])])}),[],!1,null,"88ddf948",null);t.default=component.exports;d()(component,{VContainer:f.a,VSpacer:h.a})},1570:function(e,t,r){"use strict";r.r(t);r(15),r(3),r(40);var n={mixins:[r(1005).default],props:{dateAccessor:{type:String,required:!0}},data:function(){return{}},computed:{messageReceived:function(){return this.values.filter((function(e){return"You"===e.receiver}))},messageSent:function(){return this.values.filter((function(e){return"You"===e.sender}))}},mounted:function(){},methods:{drawViz:function(){}}},o=r(38),c=r(44),l=r.n(c),d=r(1116),f=r(975),h=r(963),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VContainer",[r("VRow",{attrs:{justify:"center"}},[r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageReceived,title:"Messages Received","legend-label":"Messages"}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1),e._v(" "),r("VCol",{attrs:{cols:"12",md:"6"}},[r("ChartViewHeatMapHour",e._b({attrs:{values:e.messageSent,title:"Messages Sent","legend-label":"Messages"}},"ChartViewHeatMapHour",{headers:e.headers,dateAccessor:e.dateAccessor},!1))],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{ChartViewHeatMapHour:r(1468).default}),l()(component,{VCol:d.a,VContainer:f.a,VRow:h.a})},1705:function(e,t,r){var content=r(1775);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("e54402ca",content,!0,{sourceMap:!1})},1774:function(e,t,r){"use strict";r(1705)},1775:function(e,t,r){var n=r(25)(!1);n.push([e.i,'[data-v-88ddf948] .week-axis{text-anchor:end}[data-v-88ddf948] .hour-axis{text-anchor:middle}[data-v-88ddf948] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),e.exports=n}}]);