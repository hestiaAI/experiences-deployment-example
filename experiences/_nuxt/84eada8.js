(window.webpackJsonp=window.webpackJsonp||[]).push([[10,68],{1001:function(t,e,r){"use strict";r.r(e);var n=r(993);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1559:function(t,e,r){"use strict";r.r(e);var n=r(85),h=r(341);var c={mixins:[r(1001).default],methods:{drawViz:function(){var t=function(){var t=440,e=120;function r(r){r.each((function(data){var svg=h.G(this).append("svg").attr("width",t).attr("height",e),r=e/data.length,c=t/Math.max.apply(Math,Object(n.a)(data));svg.selectAll("rect").data(data).enter().append("rect").attr("x",0).attr("y",(function(t,i){return i*r})).attr("width",(function(t){return t*c+"px"})).attr("height",r).attr("fill","peru"),svg.selectAll("text").data(data).enter().append("text").text((function(t){return t})).attr("x",5).attr("y",(function(t,i){return i*r+16}))}))}return r.width=function(e){return arguments.length?(t=e,r):t},r.height=function(t){return arguments.length?(e=t,r):e},r}().height(200).width(this.$refs.graph.clientWidth);h.G(this.$refs.graph).datum([44,8,15,16,23,42]).call(t)}}},l=c,d=r(38),component=Object(d.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"graph"})}),[],!1,null,null,null);e.default=component.exports}}]);