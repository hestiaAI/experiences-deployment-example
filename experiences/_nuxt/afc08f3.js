(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15,79],{1163:function(t,e,r){"use strict";r.r(e),r.d(e,"addXLabel",(function(){return l})),r.d(e,"addYLabel",(function(){return c})),r.d(e,"createCumulativeGroup",(function(){return d})),r.d(e,"removeEmptyBins",(function(){return h})),r.d(e,"addPiePercentage",(function(){return f}));r(63),r(46),r(14),r(3);var n=r(344),o=r(1019);function l(t,e){var r=t.svg().append("text").attr("class","x-axis-label").attr("text-anchor","middle").attr("x",t.width()/2).attr("y",t.height()-10).text(e),n=r.node().getBBox(),o=t.margins();r.attr("x",o.left+(t.width()-o.left-o.right)/2).attr("y",t.height()-Math.ceil(n.height)/2)}function c(t,e){var r=t.svg().append("text").attr("class","y-axis-label").attr("text-anchor","middle").attr("transform","rotate(-90)").attr("x",-t.height()/2).attr("y",10).text(e),n=r.node().getBBox(),o=t.margins();r.attr("x",-o.top-(t.height()-o.top-o.bottom)/2).attr("y",Math.max(Math.ceil(n.height),o.left-Math.ceil(n.height)-5))}function d(t){return{all:function(){var e={};return t.all().map((function(t){return e[t.key[0]]?e[t.key[0]]+=t.value:e[t.key[0]]=t.value,{key:t.key,value:e[t.key[0]]}}))}}}function h(t){return{top:function(e){return t.top(1/0).filter((function(t){return 0!==t.value.count&&0!==t.value})).slice(0,e)}}}function f(t){t.selectAll("text.pie-slice.pie-label").call((function(t){t.each((function(t){var e=n.H(this),text=e.text();text.length>14&&(text=text.substring(0,14)+".. "),text.length>0&&(text=text+" ("+o.utils.printSingleValue((t.endAngle-t.startAngle)/(2*Math.PI)*100)+"%)"),e.text(text)}))}))}},1271:function(t,e,r){"use strict";r.r(e);r(36);var n=r(1019);e.default={props:{ndx:{type:Object,required:!0},title:{type:String,default:""},valueLabel:{type:String,default:"records"},height:{type:Number,default:250},colorPalette:{type:Array,default:function(){return["#58539E","#847CEB","#605BAB","#4A4685","#35325E"]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1464:function(t,e,r){"use strict";r.r(e);r(36),r(28);var n=r(344),o=r(1019),l=r(1163),c=r(1271);o.config.defaultColors(n.G);var d={mixins:[c.default],props:{valueAccessor:{type:String,required:!0},sumAccessor:{type:String,default:""},topK:{type:Number,default:10},defaultValue:{type:String,default:""}},data:function(){return{}},methods:{drawViz:function(){var t=this,e=new o.RowChart("#top-chart-".concat(this.graphId)),r=this.createTextFilterWidget("#top-search-".concat(this.graphId));n.H("#top-chart-".concat(this.graphId," a.reset")).on("click",(function(){e.filterAll(),o.redrawAll()}));var c=this.ndx.dimension((function(e){return e[t.valueAccessor]||t.defaultValue}));r.dimension(this.ndx.dimension((function(e){return(e[t.valueAccessor]||t.defaultValue).toLowerCase()})));var d=this.sumAccessor?c.group().reduceSum((function(e){return e[t.sumAccessor]})):c.group().reduceCount();e.width(n.H("#top-chart-".concat(this.graphId)).node().getBoundingClientRect().width).height(this.height).margins({top:20,left:10,right:10,bottom:20}).group(Object(l.removeEmptyBins)(d)).dimension(c).ordinalColors(this.colorPalette).label((function(t){return t.key})).data((function(t){return t.top(10)})).title((function(e){return"".concat(e.value," ").concat(t.valueLabel)})).elasticX(!0).xAxis().ticks(4),o.renderAll()}}},h=(r(1939),r(40)),f=r(44),v=r.n(f),x=r(977),m=r(968),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VContainer",[r("div",{attrs:{id:"top-chart-"+t.graphId}},[r("div",{staticStyle:{display:"flex"}},[r("strong",[t._v(t._s(t.title))]),t._v(" "),r("VSpacer"),t._v(" "),r("div",{attrs:{id:"top-search-"+t.graphId}})],1),t._v(" "),r("p",{staticClass:"filters"},[r("span",{directives:[{name:"t",rawName:"v-t",value:"Current filter",expression:"'Current filter'"}]}),t._v(" "),r("span",{staticClass:"filter"}),t._v(" "),r("a",{directives:[{name:"t",rawName:"v-t",value:"reset",expression:"'reset'"}],staticClass:"reset",staticStyle:{display:"none"}})])])])}),[],!1,null,"5e832fbb",null);e.default=component.exports;v()(component,{VContainer:x.a,VSpacer:m.a})},1889:function(t,e,r){var content=r(1940);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6ef668b0",content,!0,{sourceMap:!1})},1939:function(t,e,r){"use strict";r(1889)},1940:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-5e832fbb] .dc-text-filter-input{background:none;color:#596471;border-bottom:1px solid #596471;outline:none}",""]),t.exports=n}}]);