(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[4475,9706,1297],{64475:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return f}});var n=r(46228),l=r(40290),main=r(26641),o=r(21297),c=r(17344),d=r(18343);l.config.defaultColors(n.xHP);var h={components:{ChartCaller:c.default,UnitFilterableTable:d.Z},mixins:[o.default],props:{graphs:{type:Array,required:!0}},data(){return{ndx:null,results:this.values}},methods:{resetAll(){l.filterAll(),l.renderAll()},drawViz(){this.ndx=(0,main.Z)(this.results);const t=new l.DataCount(`#dc-data-count-${this.graphId}`),e=this.ndx.groupAll();t.crossfilter(this.ndx).groupAll(e).html({some:`<strong>%filter-count</strong> ${this.$t("selected-out-of")} <strong>%total-count</strong> records | <a class='resetAll'>${this.$t("Reset All")}</a>`,all:`Total: <strong>%total-count</strong> records. ${this.$t("click-graph")}`}).on("pretransition",((t,filter)=>{this.results=this.ndx.allFiltered(),n.Ys(`#dc-data-count-${this.graphId} a.resetAll`).on("click",this.resetAll)})),l.renderAll()}}},f=(0,r(1001).Z)(h,(function(){var t=this,e=t._self._c;return e("VContainer",[e("VRow",[t._l(t.graphs,(function(r,n){return e("VCol",{key:n,attrs:{cols:"12",md:r.cols||"6"}},[t.ndx?e("ChartCaller",{attrs:{type:r.type,"viz-props":{values:t.values||[],ndx:t.ndx,...r}}}):t._e()],1)})),e("VCol",{staticClass:"text-center",attrs:{cols:"12"}},[e("div",{staticClass:"dc-data-count",attrs:{id:`dc-data-count-${t.graphId}`}})]),e("VCol",{attrs:{cols:"12"}},[e("UnitFilterableTable",t._b({},"UnitFilterableTable",{headers:t.headers,items:t.results},!1))],1)],2)],1)}),[],!1,null,null,null).exports},17344:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});var n={props:{type:{type:String,required:!0},vizProps:{type:Object,default:()=>({})}},computed:{component(){return()=>r(40342)(`./${this.type}`)}}},l=(0,r(1001).Z)(n,(function(){var t=this;return(0,t._self._c)(t.component,t._b({tag:"component"},"component",t.vizProps,!1))}),[],!1,null,null,null).exports},40342:function(t,e,r){var map={"./ChartCaller":[17344],"./ChartCaller.vue":[17344],"./ChartViewDcFilterCount":[92027,290,2027],"./ChartViewDcFilterCount.vue":[92027,290,2027],"./HourChart":[57802,290,7802],"./HourChart.vue":[57802,290,7802],"./PieChart":[3009,290,3009],"./PieChart.vue":[3009,290,3009],"./TimelineChart":[45008,290,5008],"./TimelineChart.vue":[45008,290,5008],"./TopChart":[53058,290,3058],"./TopChart.vue":[53058,290,3058],"./WeekChart":[62934,290,2934],"./WeekChart.vue":[62934,290,2934],"./mixin":[31690,290,1690],"./mixin.js":[31690,290,1690]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=40342,t.exports=n},21297:function(t,e,r){"use strict";r.r(e);var n=r(40290),l=r(18651),o=r(659);const c={props:{values:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]},messages:{type:Object,default:()=>({})}},data(){return{graphId:"graph_"+this.$store.state.xp.currentTab,totalCount:0,filterCount:0}},mounted(){this.drawViz()},watch:{values(){this.drawViz()}},methods:{drawViz(){},createTextFilterWidget(t,e="Search"){const r=new n.TextFilterWidget(t);return r.placeHolder(this.$tev(e,e)),r}}};e.default=(0,l.Z)(c,o.Z)}}]);