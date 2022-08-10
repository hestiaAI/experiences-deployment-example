(window.webpackJsonp=window.webpackJsonp||[]).push([[15,68],{1001:function(e,t,n){"use strict";n.r(t);var r=n(993);t.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",n=new r.TextFilterWidget(e);return n.placeHolder(this.$t(t)),n}}}},1466:function(e,t,n){"use strict";n.r(t);n(36),n(28),n(16),n(3),n(72),n(40);var r=n(341),l={mixins:[n(1001).default],props:{dateAccessor:{type:String,required:!0},title:{type:String,default:function(){return""}},cellSize:{type:Number,default:function(){return 20}},cellSpacing:{type:Number,default:function(){return 2}},dateFormat:{type:String,default:function(){return""}},valueAccessor:{type:String,default:function(){return""}},borderRadius:{type:Number,default:function(){return 3}},legendPrefNbItems:{type:Number,default:function(){return 4}},legendLabel:{type:String,default:function(){return""}},includeTotal:{type:Boolean,default:function(){return!1}}},data:function(){return{weekDays:["Sun","Mon","Tue","Wen","Thu","Fri","Sat"],hours:r.x(24),colorPalette:r.r}},computed:{width:function(){return this.cellSize*(this.hours.length+3)},height:function(){return this.cellSize*(this.weekDays.length+4)},viewBox:function(){return"0 0 ".concat(this.width," ").concat(this.height)},dateParser:function(){return this.dateFormat?r.S(this.dateFormat):function(e){var t=new Date(e);return isNaN(t.getTime())?null:t}},items:function(){var e=this;return this.values.map((function(t){return{date:e.dateParser(t[e.dateAccessor]),value:e.valueAccessor?t[e.valueAccessor]:1}})).filter((function(e){return e.date}))},itemsPerHour:function(){return r.i(this.items,(function(e){return r.J(e,(function(e){return e.value}))}),(function(e){return e.date.getHours()}),(function(e){return e.date.getDay()}))},extent:function(){return r.h(this.itemsPerHour,(function(e){return e[2]}))},color:function(){return r.C().domain([this.extent[0],this.extent[1]]).nice().interpolator(this.colorPalette)},legendSquares:function(){return this.color.ticks(this.legendPrefNbItems)},legendNbItems:function(){return this.legendSquares.length}},mounted:function(){},methods:{generateTitle:function(e){return r.M("%a at %H:00")(new Date(2e3,12,e[1],e[0]))+" - "+e[2]+" records"},drawViz:function(){},legendSquareXPos:function(e){var t=this.width,s=this.cellSize;return t-2*s*this.legendNbItems+e*s*2-2*s}}},c=(n(1769),n(38)),o=n(44),d=n.n(o),h=n(970),f=n(962),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VContainer",[n("div",{staticClass:"d-flex mb-3"},[n("div",{staticClass:"overline"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),n("VSpacer"),e._v(" "),e.includeTotal?n("div",{staticClass:"overline"},[e._v("\n      total: "),n("strong",[e._v(e._s(e.items.length))])]):e._e()],1),e._v(" "),n("svg",{staticClass:"graph",attrs:{viewBox:e.viewBox}},[n("g",{attrs:{transform:"translate(40.5,"+1.5*e.cellSize+")"}},[n("g",{staticClass:"week-axis"},e._l(e.weekDays,(function(t,r){return n("text",{key:"d_"+r,attrs:{x:"-5",y:(r+.5)*e.cellSize,dy:"0.35em"}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),n("g",{staticClass:"hour-axis"},[n("text",{attrs:{y:"-20",x:(e.hours.length/2+.5)*e.cellSize}},[e._v(e._s(e.$t("hour"))+"s")]),e._v(" "),e._l(e.hours,(function(t){return n("text",{key:"h_"+t,attrs:{y:"-5",x:(t+.5)*e.cellSize}},[e._v("\n          "+e._s(t)+"\n        ")])}))],2),e._v(" "),n("g",{staticClass:"calendar-hour"},e._l(e.itemsPerHour,(function(t,r){return n("g",{key:r},[n("rect",{attrs:{width:e.cellSize-e.cellSpacing,height:e.cellSize-e.cellSpacing,x:t[0]*e.cellSize+.5,y:t[1]*e.cellSize+.5,fill:e.color(t[2]),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),n("title",[e._v(e._s(e.generateTitle(t)))])])})),0),e._v(" "),n("g",{staticClass:"legend"},[n("text",{staticStyle:{"text-anchor":"end"},attrs:{x:e.legendSquareXPos(0)-e.cellSize,y:e.height-2.5*e.cellSize,dy:"-.20em"}},[e._v("\n          "+e._s(e.legendLabel)+"\n        ")]),e._v(" "),e._l(e.legendSquares,(function(t,r){return n("g",{key:"legend_"+r},[n("rect",{attrs:{width:2*(e.cellSize-e.cellSpacing),height:(e.cellSize-e.cellSpacing)/2,x:e.legendSquareXPos(r),y:e.height-3*e.cellSize,fill:e.color(t),rx:e.borderRadius,ry:e.borderRadius}}),e._v(" "),n("text",{staticStyle:{"text-anchor":"middle"},attrs:{x:e.legendSquareXPos(r)+e.cellSize,y:e.height-2*e.cellSize}},[e._v("\n            "+e._s(t)+"\n          ")])])}))],2)])])])}),[],!1,null,"360061a7",null);t.default=component.exports;d()(component,{VContainer:h.a,VSpacer:f.a})},1700:function(e,t,n){var content=n(1770);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("020c5384",content,!0,{sourceMap:!1})},1769:function(e,t,n){"use strict";n(1700)},1770:function(e,t,n){var r=n(25)(!1);r.push([e.i,'[data-v-360061a7] .week-axis{text-anchor:end}[data-v-360061a7] .hour-axis{text-anchor:middle}[data-v-360061a7] .graph{font-family:"Assistant",sans-serif;font-size:8px;max-width:100%;height:auto}',""]),e.exports=r}}]);