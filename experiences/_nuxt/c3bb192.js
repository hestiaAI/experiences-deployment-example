(window.webpackJsonp=window.webpackJsonp||[]).push([[20,77],{1009:function(t,e,r){"use strict";r.r(e);var n=r(1019);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},kViewBlock:{type:Function,default:function(){return""}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{drawViz:function(){},createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1064:function(t,e,r){r(1148)},1065:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:r(1149)})},1066:function(t,e,r){"use strict";r(4)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:r(603)})},1067:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=f(this),r=new(d(e,o("Set")))(e),n=l(r.delete);return h(t,(function(t){c(n,r,t)})),r}})},1068:function(t,e,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(987),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return!f(r,(function(t,r){if(!n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1069:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(75),h=r(155),v=r(987),y=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=f(this),r=v(e),n=d(t,arguments.length>1?arguments[1]:void 0),A=new(h(e,o("Set"))),m=l(A.add);return y(r,(function(t){n(t,t,e)&&c(m,A,t)}),{IS_ITERATOR:!0}),A}})},1070:function(t,e,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(987),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},1071:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=f(this),r=new(d(e,o("Set"))),n=l(e.has),v=l(r.add);return h(t,(function(t){c(n,e,t)&&c(v,r,t)})),r}})},1072:function(t,e,r){"use strict";var n=r(4),o=r(29),c=r(67),l=r(23),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!0===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},1073:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(30),d=r(23),h=r(347),v=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=h(this),r=d(t),n=r.has;return f(n)||(r=new(o("Set"))(t),n=l(r.has)),!v(e,(function(t,e){if(!1===c(n,r,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1074:function(t,e,r){"use strict";var n=r(4),o=r(29),c=r(67),l=r(23),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),r=c(e.has);return!f(t,(function(t,n){if(!1===o(r,e,t))return n()}),{INTERRUPTED:!0}).stopped}})},1075:function(t,e,r){"use strict";var n=r(4),o=r(18),c=r(23),l=r(54),f=r(987),d=r(74),h=o([].join),v=[].push;n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=f(e),n=void 0===t?",":l(t),o=[];return d(r,v,{that:o,IS_ITERATOR:!0}),h(o,n)}})},1076:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(75),l=r(29),f=r(67),d=r(23),h=r(155),v=r(987),y=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=d(this),r=v(e),n=c(t,arguments.length>1?arguments[1]:void 0),A=new(h(e,o("Set"))),m=f(A.add);return y(r,(function(t){l(m,A,n(t,t,e))}),{IS_ITERATOR:!0}),A}})},1077:function(t,e,r){"use strict";var n=r(4),o=r(67),c=r(23),l=r(987),f=r(74),d=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),r=l(e),n=arguments.length<2,h=n?void 0:arguments[1];if(o(t),f(r,(function(r){n?(n=!1,h=r):h=t(h,r,r,e)}),{IS_ITERATOR:!0}),n)throw d("Reduce of empty set with no initial value");return h}})},1078:function(t,e,r){"use strict";var n=r(4),o=r(23),c=r(75),l=r(987),f=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),r=l(e),n=c(t,arguments.length>1?arguments[1]:void 0);return f(r,(function(t,r){if(n(t,t,e))return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},1079:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(29),l=r(67),f=r(23),d=r(155),h=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=f(this),r=new(d(e,o("Set")))(e),n=l(r.delete),v=l(r.add);return h(t,(function(t){c(n,r,t)||c(v,r,t)})),r}})},1080:function(t,e,r){"use strict";var n=r(4),o=r(68),c=r(67),l=r(23),f=r(155),d=r(74);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),r=new(f(e,o("Set")))(e);return d(t,c(r.add),{that:r}),r}})},1148:function(t,e,r){"use strict";r(601)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(602))},1149:function(t,e,r){"use strict";var n=r(29),o=r(67),c=r(23);t.exports=function(){for(var t=c(this),e=o(t.add),r=0,l=arguments.length;r<l;r++)n(e,t,arguments[r]);return t}},1581:function(t,e,r){"use strict";r.r(e);var n=r(86),o=(r(36),r(3),r(41),r(39),r(57),r(10),r(9),r(1064),r(42),r(1065),r(1066),r(1067),r(1068),r(1069),r(1070),r(1071),r(1072),r(1073),r(1074),r(1075),r(1076),r(1077),r(1078),r(1079),r(1080),r(63),r(344)),c={mixins:[r(1009).default],props:{groupsAccessor:{type:String,required:!0},valuesAccessor:{type:Array,required:!0},title:{type:String,default:""},margin:{type:Number,default:5},adjVertical:{type:Array,default:function(){return[20,50]}},adjHorizontal:{type:Array,default:function(){return[150,150]}},xLabel:{type:String,default:"Sexual Orientation"},yLabel:{type:String,default:"Number of action per day and user"},formatNumber:{type:String,default:".2f"},colorPalette:{type:Array,default:function(){return["#69B3A2","#C23636","#67A4BF"]}}},data:function(){return{}},computed:{validProps:function(){var t=this,e=!0;return this.values.length?(Object.keys(this.values[0]).includes(this.groupsAccessor)||(console.error("Group Accessor not found:",this.groupsAccessor),e=!1),this.valuesAccessor.forEach((function(r){Object.keys(t.values[0]).includes(r)||(console.error("X Accessor not found:",r),e=!1)})),e):(console.error("Values is empty"),!1)}},methods:{drawViz:function(){var t=this;try{var e=500,r=380,c=o.p(this.formatNumber);o.H("#"+this.graphId+" svg").remove(),this.svg=o.H("#"+this.graphId).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","-"+this.adjHorizontal[0]+" -"+this.adjVertical[0]+" "+(e+o.K(this.adjHorizontal))+" "+(r+o.K(this.adjVertical))).style("margin",this.margin).classed("svg-content",!0);var l=Object(n.a)(new Set(this.values.map((function(e){return e[t.groupsAccessor]})))),f=o.A().domain(l).range([0,e]).padding([.2]);this.svg.append("g").attr("class","xAxis").attr("transform","translate(0,380)").call(o.b(f).tickSize(0)).append("text").attr("y",30).attr("x",250).style("text-anchor","middle").text(this.xLabel);var d=o.v(this.values,(function(e){return Math.max.apply(Math,Object(n.a)(t.valuesAccessor.map((function(t){return e[t]}))))})),h=o.B().domain([0,d]).range([r,0]);this.svg.append("g").attr("class","yAxis").call(o.c(h)).append("text").attr("dy",".75em").attr("y",-50).attr("x",-190).attr("transform","rotate(-90)").style("text-anchor","middle").text(this.yLabel);var v=o.A().domain(this.valuesAccessor).range([0,f.bandwidth()]).padding([.05]),y=o.C().domain(this.valuesAccessor).range(this.colorPalette);this.svg.append("g").selectAll("g").data(this.values).enter().append("g").attr("transform",(function(e){return"translate("+f(e[t.groupsAccessor])+",0)"})).selectAll("rect").data((function(e){return t.valuesAccessor.map((function(t){return{key:t,value:e[t]}}))})).enter().append("rect").attr("x",(function(t){return v(t.key)})).attr("y",(function(t){return h(t.value)})).attr("width",v.bandwidth()).attr("height",(function(t){return r-h(t.value)})).attr("fill",(function(t){return y(t.key)})).on("mouseover",(function(t,e){o.H(this).style("opacity",.7),o.H(this.parentNode).append("text").attr("class","barsLabel").text(c(e.value)).attr("text-anchor","middle").attr("alignment-baseline","middle").attr("x",v(e.key)+v.bandwidth()/2).attr("y",h(e.value)-10).style("font-size","0.8rem").style("font-weight","bold").style("fill","#0A0A0A")})).on("mouseleave",(function(t,e){o.H(this).style("opacity",1),o.H(".barsLabel").remove()}));var A=10;this.svg.selectAll("legendSquare").data(this.valuesAccessor).enter().append("rect").attr("x",480).attr("y",(function(t,i){return 0+15*i})).attr("width",A).attr("height",A).style("fill",(function(t){return y(t)})),this.svg.selectAll("legendLabels").data(this.valuesAccessor).enter().append("text").attr("x",492).attr("y",(function(t,i){return 0+15*i+5})).style("fill",(function(t){return y(t)})).text((function(t){return t})).attr("text-anchor","left").style("alignment-baseline","middle")}catch(t){console.error(t)}}}},l=(r(1919),r(40)),f=r(44),d=r.n(f),h=r(977),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.validProps?r("VContainer",[r("p",{staticClass:"overline font-weight-bold text-subtitle-1 text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),r("div",{staticStyle:{position:"relative"},attrs:{id:t.graphId}})]):t._e()}),[],!1,null,"64e7f9e6",null);e.default=component.exports;d()(component,{VContainer:h.a})},1880:function(t,e,r){var content=r(1920);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("bd94e7ec",content,!0,{sourceMap:!1})},1919:function(t,e,r){"use strict";r(1880)},1920:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-64e7f9e6] .xAxis line,[data-v-64e7f9e6] .yAxis line{stroke:#706f6f;stroke-width:.5;shape-rendering:geometricPrecision}[data-v-64e7f9e6] .xAxis path,[data-v-64e7f9e6] .yAxis path{stroke:#706f6f;stroke-width:.7;shape-rendering:geometricPrecision}[data-v-64e7f9e6] .yAxis path{display:none}[data-v-64e7f9e6] .xAxis text,[data-v-64e7f9e6] .yAxis text{fill:#2b2929;font-weight:300}",""]),t.exports=n},987:function(t,e,r){var n=r(29);t.exports=function(t){return n(Set.prototype.values,t)}}}]);