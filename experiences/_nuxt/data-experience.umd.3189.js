"use strict";(("undefined"!=typeof self?self:this).webpackChunkdata_experience=("undefined"!=typeof self?self:this).webpackChunkdata_experience||[]).push([[3189,8736,1297],{33189:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(46228),o=r(40290),main=r(26641),l=r(21297),h=r(18736),m=r(18343);o.config.defaultColors(n.xHP);var c={components:{ChartViewVRowWebShare:h.default,UnitFilterableTable:m.Z},mixins:[l.default],props:{title:{type:String,default:()=>"Google"},dateFormats:{type:Array,default:()=>["%Y-%m-%dT%H:%M:%S%Z","%Y-%m-%dT%H:%M:%S.%L%Z"]}},data:()=>({total:null,timeRange:null,timeInterval:"month",tab:null,lineChart:null,rangeChart:null,timeDimension:null,overviewDimension:null,minDate:null,maxDate:null,currMinDateStr:"NaN",currMaxDateStr:"NaN",currSourceFilter:null,checkbox:!1,timelineGroup:null,formatTimeDay:null,formatTimeMonth:null,formatTimeHour:null,items:[],header:[{text:"Date",value:"dateStr"},{text:"App",value:"eventSource"},{text:"Event type",value:"eventType"},{text:"Event value",value:"eventValue"}],results:[]}),methods:{resetAll(){this.timeRange="ALL",this.filterTimeRange(this.timeRange),o.filterAll(),o.redrawAll(),this.resetSourceFilter()},tabDetails(){this.tab="details"},showEmptyMessage(t){const e=0===n.Smz(t.group().all().map(t.valueAccessor())),data=e?[1]:[],r=t.svg().selectAll(".empty-message").data(data).enter().append("text").text("No data during this time period").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("x",t.margins().left+t.effectiveWidth()/2).attr("y",t.margins().top+t.effectiveHeight()/2).attr("class","empty-message").style("opacity",0);e?r.transition().duration(1e3).style("opacity",1):t.svg().selectAll(".empty-message").remove()},removeEmptyBins:t=>({top:e=>t.top(1/0).filter((function(t){return 0!==t.value.count&&0!==t.value})).slice(0,e),all:()=>t.all()}),createCumulativeGroup:t=>({all(){let e=0;return t.all().map((function(t){return e+=t.value,{key:t.key,value:e}}))}}),changeAgg(){this.checkbox?this.lineChart.group(this.createCumulativeGroup(this.timelineGroup)):this.lineChart.group(this.timelineGroup),o.redrawAll()},drawViz(){this.results=this.values;const t=this.dateFormats.map((t=>n.Z1g(t)));this.formatTimeDay=n.i$Z("%Y-%m-%d"),this.formatTimeMonth=n.i$Z("%B %Y"),this.formatTimeHour=n.i$Z("%H:%M:%S");const e=n.i$Z("%d %B %Y");this.results.forEach((e=>{e.dateSrc=e.date,t.some((t=>(e.date=t(e.dateSrc),null!=e.date))),e.dateStr=this.formatTimeDay(e.date)}));const r=(0,main.Z)(this.results),l=r.groupAll(),h=r.dimension((t=>[t.eventSource,t.eventType,t.icon])).group().reduceCount();this.filterItems(h),this.total=l.value(),this.activityDimension=r.dimension((t=>t.eventSource)),r.onChange((()=>{this.filterItems(h),this.total=l.value(),this.results=r.allFiltered(),this.currMinDateStr=e(this.minDate),this.currMaxDateStr=e(this.maxDate)})),this.lineChart=new o.LineChart("#line-chart"),this.rangeChart=new o.BarChart("#range-chart"+this.graphId),this.timeDimension=r.dimension((t=>t.date)),this.timelineGroup=this.timeDimension.group((t=>n.F0B(t))).reduceCount(),this.maxDate=this.timeDimension.top(1)[0].date,this.currMaxDateStr=e(this.maxDate),this.minDate=this.timeDimension.bottom(1)[0].date,this.currMinDateStr=e(this.minDate);this.lineChart.renderArea(!0).width(n.Ys("#line-chart").node().getBoundingClientRect().width).height(240).transitionDuration(1e3).margins({top:20,right:20,bottom:20,left:50}).group(this.timelineGroup).dimension(this.timeDimension).curve(n.FdL).x(n.Xf().domain([this.minDate,this.maxDate])).y(n.BYU()).ordinalColors(["#58539E"]).brushOn(!1).elasticX(!1).elasticY(!0).xyTipsOn(!0).mouseZoomable(!1).rangeChart(this.rangeChart).renderHorizontalGridLines(!1).clipPadding(10).title((t=>this.formatTimeMonth(+t.key)+": "+t.value)).yAxisLabel("").renderDataPoints({radius:3,fillOpacity:.8,strokeOpacity:0}).xAxis().ticks(5),this.rangeChart.on("filtered",(()=>{const t=this.timeDimension.currentFilter();t?(this.currMinDateStr=e(t[0]),this.currMaxDateStr=e(t[1])):(this.currMinDateStr=e(this.minDate),this.currMaxDateStr=e(this.maxDate))})),this.rangeChart.width(n.Ys("#range-chart"+this.graphId).node().getBoundingClientRect().width).height(40).margins({top:0,right:20,bottom:20,left:50}).dimension(this.timeDimension).group(this.timelineGroup).centerBar(!0).brushOn(!1).gap(1).x(n.Xf().domain([this.minDate,n.rr1.offset(this.maxDate,1)])).ordinalColors(["#58539E"]).yAxis().ticks(0);const m=new o.RowChart("#row-chart"),c=r.dimension((t=>t.eventType)),d=c.group().reduceCount(),f=n.Ys("#row-chart").node().getBoundingClientRect().width;m.width(f).height(295).margins({top:20,left:10,right:30,bottom:20}).group(this.removeEmptyBins(d)).dimension(c).ordinalColors(["#58539E","#847CEB","#605BAB","#4A4685","#35325E"]).label((t=>t.key)).data((t=>t.top(10))).title((t=>t.value)).elasticX(!0).xAxis().ticks(4),m.on("pretransition",this.showEmptyMessage),o.renderAll()},filterTimeRange(t){if(null===this.rangeChart)return;this.rangeChart.filter(null);let e=null;const r=n.rr1.offset(this.maxDate,1);let l=null;switch(t){case"ALL":this.timelineGroup=this.timeDimension.group((t=>n.F0B(t))),l=this.formatTimeMonth,this.timeInterval="month";break;case"1Y":e=n.Fp7([n.jBk.offset(this.maxDate,-1),this.minDate]),this.timelineGroup=this.timeDimension.group((t=>n.F0B(t))),l=this.formatTimeMonth,this.timeInterval="month";break;case"3M":e=n.Fp7([n.F0B.offset(this.maxDate,-3),this.minDate]),this.timelineGroup=this.timeDimension.group((t=>n.rr1(t))),l=this.formatTimeDay,this.timeInterval="day";break;case"1M":e=n.Fp7([n.F0B.offset(this.maxDate,-1),this.minDate]),this.timelineGroup=this.timeDimension.group((t=>n.rr1(t))),l=this.formatTimeDay,this.timeInterval="day";break;case"7D":e=n.Fp7([n.rr1.offset(this.maxDate,-7),this.minDate]),this.timelineGroup=this.timeDimension.group((t=>n.rr1(t))),l=this.formatTimeDay,this.timeInterval="day";break;case"1D":e=n.Fp7([n.rr1.offset(this.maxDate,-1),this.minDate]),this.timelineGroup=this.timeDimension.group((t=>n.WQD(t))),l=this.formatTimeHour,this.timeInterval="hour"}null!==e&&this.rangeChart.filter(o.filters.RangedFilter(e,r)),this.lineChart.dimension(this.timeDimension).group(this.timelineGroup).title((t=>l(+t.key)+": "+t.value)).transitionDuration(1e3).render(),o.redrawAll()},filterItems(t){const e=t.top(1/0).reduce(((p,t)=>(Object.prototype.hasOwnProperty.call(p,t.key[0])||(p[t.key[0]]={},p[t.key[0]].count=0,p[t.key[0]].title=t.key[0],p[t.key[0]].action=t.key[2],p[t.key[0]].items=[]),p[t.key[0]].count+=t.value,t.value>0&&p[t.key[0]].items.push({title:t.key[1],count:t.value}),p)),{});this.items=Object.values(e).filter((t=>t.count>0))},filterSource(title){this.currSourceFilter=title,this.activityDimension.filter(title),o.redrawAll(),this.tabDetails()},resetSourceFilter(){this.currSourceFilter=null,this.activityDimension.filter(null),o.redrawAll()}}},d=(0,r(1001).Z)(c,(function(){var t=this,e=t._self._c;return e("VContainer",[e("ChartViewVRowWebShare",[e("VCol",{attrs:{cols:"12",md:"8"}},[e("VRow",[e("VCol",{attrs:{cols:"8"}},[e("p",[t._v(" Number of information collected per "),e("strong",[t._v(t._s(t.timeInterval))])])]),e("VCol",{staticClass:"text-right",attrs:{cols:"4"}},[e("VCheckbox",{attrs:{dense:"",label:"Cumulative"},on:{change:t.changeAgg},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1),e("div",{attrs:{id:"line-chart"}}),e("div",{staticClass:"range-chart",attrs:{id:"range-chart"+t.graphId}})],1),e("VCol",{attrs:{cols:"12",md:"4"}},[e("p",[t._v("Information Type")]),e("div",{attrs:{id:"row-chart"}})])],1),e("VRow",[e("VCol",{attrs:{cols:"9"}},[e("VRadioGroup",{attrs:{row:"",mandatory:""},on:{change:t.filterTimeRange},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",[t._v("Select a "),e("strong",[t._v("time range")])])]},proxy:!0}]),model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}},t._l(["ALL","1Y","3M","1M","7D","1D"],(function(r){return e("VRadio",t._b({key:r},"VRadio",{value:r,label:r},!1))})),1)],1),e("VCol",{attrs:{cols:"3"}},[e("VBtn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"},on:{click:function(e){return t.resetAll()}}},[t._v(" Reset all filters ")])],1)],1),e("VRow",[e("VCol",{attrs:{cols:"12"}},[e("VTabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("VTab",{attrs:{href:"#overview"},on:{click:t.resetSourceFilter}},[t._v(" Overview ")]),e("VTab",{attrs:{href:"#details"}},[t._v(" Details ")])],1),e("VTabsItems",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e("VTabItem",{attrs:{value:"overview"}},[e("p",{staticClass:"text-subtitle-1"},[e("strong",[t._v(t._s(t.title))]),t._v(" knows about "),e("strong",[t._v(t._s(t.total))]),t._v(" things that happened between "),e("strong",[t._v(t._s(t.currMinDateStr))]),t._v(" and "),e("strong",[t._v(t._s(t.currMaxDateStr))]),e("VBtn",{staticClass:"ma-2",attrs:{outlined:"",color:"indigo"},on:{click:function(e){return t.tabDetails()}}},[t._v(" See All ")])],1),e("VList",t._l(t.items,(function(r){return e("VListGroup",{key:r.title,attrs:{"prepend-icon":r.action,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[e("VListItemContent",[e("VListItemTitle",[e("strong",[t._v(t._s(r.count))]),t._v(" were regarding your "),e("strong",[t._v(t._s(r.title))]),t._v(" activity. ")])],1)]},proxy:!0}],null,!0),model:{value:r.active,callback:function(e){t.$set(r,"active",e)},expression:"item.active"}},[t._l(r.items,(function(r){return e("VListItem",{key:r.title},[e("VListItemContent",[e("VListItemTitle",[e("strong",[t._v(t._s(r.count))]),t._v(" records of "),e("strong",[t._v(t._s(r.title))]),t._v(" . ")])],1)],1)})),e("VListItem",{key:"child.showMore"},[e("VBtn",{staticClass:"ma-1",attrs:{outlined:"",color:"indigo"},on:{click:function(e){return t.filterSource(r.title)}}},[t._v(" See All "+t._s(r.title)+" activity ")])],1)],2)})),1)],1),e("VTabItem",{attrs:{value:"details"}},[t.currSourceFilter?e("p",{staticClass:"text-subtitle-1 text-right"},[t._v(" "+t._s(t.$t("Current filter"))+" "),e("VBtn",{attrs:{small:"",elevation:"2"},on:{click:t.resetSourceFilter}},[e("strong",[t._v(t._s(t.currSourceFilter))]),e("VIcon",{attrs:{"x-small":""}},[t._v(" $vuetify.icons.mdiClose ")])],1)],1):t._e(),e("UnitFilterableTable",t._b({},"UnitFilterableTable",{headers:t.header,items:t.results},!1))],1)],1)],1)],1)],1)}),[],!1,null,"5dfb5a74",null).exports},18736:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var n=r(12555),o=r(40163),l=r(97888),h=r(9934),m={components:{BaseButton:o.Z,BaseButtonDownloadData:l.Z,BaseButtonShare:h.Z},mixins:[(0,n.Z)()]},c=(0,r(1001).Z)(m,(function(){var t=this,e=t._self._c;return e("VRow",t._b({ref:"domToImageNode"},"VRow",t.$attrs,!1),[t._t("default"),e("VCol",{staticClass:"dom-to-image-exclude",attrs:{cols:"12"}},[e("BaseButton",t._b({attrs:{icon:"mdiExport",text:"Export"},on:{click:t.exportImage}},"BaseButton",{progress:t.progress,status:t.status,error:t.error},!1)),e("BaseButtonDownloadData",t._b({},"BaseButtonDownloadData",{disabled:!t.blob,extension:t.extension,filename:t.filename,data:t.blob},!1)),e("BaseButtonShare",t._b({attrs:{"file-share":""}},"BaseButtonShare",{files:t.files,disabled:!t.files},!1))],1)],2)}),[],!1,null,null,null).exports},21297:function(t,e,r){r.r(e);var n=r(40290),o=r(18651),l=r(659);const h={props:{values:{type:Array,default:()=>[]},headers:{type:Array,default:()=>[]},messages:{type:Object,default:()=>({})}},data(){return{graphId:"graph_"+this.$store.state.xp.currentTab,totalCount:0,filterCount:0}},mounted(){this.drawViz()},watch:{values(){this.drawViz()}},methods:{drawViz(){},createTextFilterWidget(t,e="Search"){const r=new n.TextFilterWidget(t);return r.placeHolder(this.$tev(e,e)),r}}};e.default=(0,o.Z)(h,l.Z)}}]);