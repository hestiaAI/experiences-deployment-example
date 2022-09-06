(window.webpackJsonp=window.webpackJsonp||[]).push([[27,77],{1009:function(t,e,r){"use strict";r.r(e);var n=r(1019);e.default={props:{values:{type:Array,default:function(){return[]}},headers:{type:Array,default:function(){return[]}},kViewBlock:{type:Function,default:function(){return""}}},data:function(){return{graphId:"graph_"+this._uid}},mounted:function(){this.drawViz()},watch:{values:function(){this.drawViz()}},methods:{drawViz:function(){},createTextFilterWidget:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Search",r=new n.TextFilterWidget(t);return r.placeHolder(this.$t(e)),r}}}},1018:function(t,e,r){"use strict";r(36);var n=r(1),o=r(1202);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},1026:function(t,e,r){"use strict";r(10),r(8),r(19),r(9),r(20);var n=r(2),o=(r(36),r(14),r(3),r(63),r(22),r(79),r(28),r(1725),r(101)),l=r(1488),h=(r(1729),r(47)),c=r(37),d=r(11),f=r(0),v=Object(d.a)(h.a,c.a).extend({name:"v-messages",props:{value:{type:Array,default:function(){return[]}}},methods:{genChildren:function(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage:function(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},Object(f.u)(this,"default",{message:t,key:e})||[t])}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),m=r(178),y=r(1716),_=r(119);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var k=Object(d.a)(m.a,y.a).extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data:function(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons},this.themeClasses)},computedId:function(){return this.id||"input-".concat(this._uid)},hasDetails:function(){return this.messagesToDisplay.length>0},hasHint:function(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel:function(){return!(!this.$slots.label&&!this.label)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty:function(){return!!this.lazyValue},isLabelActive:function(){return this.isDirty},messagesToDisplay:function(){var t=this;return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((function(e){if("string"==typeof e)return e;var r=e(t.internalValue);return"string"==typeof r?r:""})).filter((function(t){return""!==t})):[]},showDetails:function(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value:function(t){this.lazyValue=t}},beforeCreate:function(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent:function(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl:function(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot:function(){return[this.genLabel(),this.$slots.default]},genIcon:function(t,e){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=this["".concat(t,"Icon")],h="click:".concat(Object(f.z)(t)),c=!(!this.listeners$[h]&&!e),data=Object(_.a)({attrs:{"aria-label":c?Object(f.z)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:c?{click:function(t){t.preventDefault(),t.stopPropagation(),r.$emit(h,t),e&&e(t)},mouseup:function(t){t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?"v-input__icon--".concat(Object(f.z)(t)):void 0},[this.$createElement(o.a,data,l)])},genInputSlot:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(f.i)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel:function(){return this.hasLabel?this.$createElement(l.a,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages:function(){var t=this;return this.showDetails?this.$createElement(v,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:function(e){return Object(f.u)(t,"message",e)}}}):null},genSlot:function(t,e,slot){if(!slot.length)return null;var r="".concat(t,"-").concat(e);return this.$createElement("div",{staticClass:"v-input__".concat(r),ref:r},slot)},genPrependSlot:function(){var slot=[];return this.$slots.prepend?slot.push(this.$slots.prepend):this.prependIcon&&slot.push(this.genIcon("prepend")),this.genSlot("prepend","outer",slot)},genAppendSlot:function(){var slot=[];return this.$slots.append?slot.push(this.$slots.append):this.appendIcon&&slot.push(this.genIcon("append")),this.genSlot("append","outer",slot)},onClick:function(t){this.$emit("click",t)},onMouseDown:function(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp:function(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render:function(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}});e.a=k},1202:function(t,e,r){"use strict";r(10),r(8),r(14),r(3),r(19),r(9),r(20);var n=r(2),o=(r(36),r(265),r(1210),r(415)),l=r(268),h=r(47),c=r(135),d=r(444),f=r(37),v=r(0),m=r(11);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _=Object(m.a)(h.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,f.a).extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(v.i)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(v.i)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(v.i)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(v.i)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.d:o.f},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(v.i)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(v.u)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(v.i)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=_},1210:function(t,e,r){var content=r(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("cf87dc84",content,!0,{sourceMap:!1})},1211:function(t,e,r){var n=r(25)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},1486:function(t,e,r){"use strict";r.r(e);var n=r(16),o=(r(36),r(3),r(41),r(39),r(57),r(10),r(46),r(416),r(63),r(344)),l=r(1715),h={mixins:[r(1009).default],props:{yAccessor:{type:String,required:!0},xAccessor:{type:String,default:""},dateAccessor:{type:String,default:""},yAxisMaxTickLength:{type:Number,default:20},margin:{type:Number,default:5},adjVertical:{type:Array,default:function(){return[5,50]}},adjHorizontal:{type:Array,default:function(){return[150,150]}},countLabel:{type:String,default:"records"},xLabel:{type:String,default:"records"},yLabel:{type:String,default:"companies"},dateFormat:{type:String,default:""}},data:function(){return{total:0,minDate:null,maxDate:null,records:[],topKSlider:null,othersCheck:!1}},computed:{validProps:function(){var t=!0;return this.values.length?(this.dateAccessor&&!Object.keys(this.values[0]).includes(this.dateAccessor)&&(console.error("Date Accessor not found"),t=!1),Object.keys(this.values[0]).includes(this.yAccessor)||(console.error("Y Accessor not found"),t=!1),this.xAccessor&&!Object.keys(this.values[0]).includes(this.xAccessor)&&(console.error("X Accessor not found"),t=!1),t):(console.error("Values is empty"),t=!1)}},methods:{k:function(t){return"chart-view.top-row.".concat(t)},draw:function(){var t=this,e=this.records.slice(0,this.othersCheck?this.topKSlider-1:this.topKSlider);this.othersCheck&&(e.push({key:"Others",value:o.K(this.records.slice(this.topKSlider),(function(t){return t.value}))}),e.sort((function(a,b){return o.f(a.value,b.value)}))),this.xScale.domain(o.i(e,(function(t){return t.value}))),this.yScale.domain(e.map((function(t){return t.key})));var r=this.svg.selectAll(".bars").data(e,(function(t){return t.key})),n=this;r.enter().append("rect").attr("class","bars").attr("x",5).attr("y",(function(e){return t.yScale(e.key)})).attr("width",0).attr("height",this.yScale.bandwidth()).attr("fill","#69b3a2").on("mouseover",(function(t,e){o.H(this).style("opacity",.7),o.H(this.parentNode).append("text").attr("class","barsLabel").text(e.value).attr("text-anchor","start").attr("alignment-baseline","middle").attr("x",n.xScale(e.value)+15).attr("y",n.yScale(e.key)+n.yScale.bandwidth()/2).style("font-size","0.8rem").style("font-weight","bold").style("fill","#0A0A0A")})).on("mouseleave",(function(t,e){o.H(this).style("opacity",1),o.H(".barsLabel").remove()})).merge(r).transition().duration(1e3).delay(200).attr("y",(function(e){return t.yScale(e.key)})).attr("width",(function(e){return t.xScale(e.value)+5})).attr("height",this.yScale.bandwidth()),r.exit().transition().duration(1e3).attr("width",0).remove(),o.H(".yAxis").transition().duration(1e3).delay(200).call(this.yAxis),o.I(".yAxis g text").transition().duration(1e3).delay(200).style("font-size",1.8/Math.log(this.topKSlider)+"rem"),o.H(".xAxis").transition().duration(1e3).delay(200).call(this.xAxis)},drawViz:function(){var t=this;if(this.validProps){var e=this.dateFormat?o.T(this.dateFormat):function(t){return new Date(t)},r=function(e){return t.$d(e,"dateOnly",t.$i18n.locale)};if(this.dateAccessor){var h=o.i(this.values,(function(r){return e(r[t.dateAccessor])})),c=Object(n.a)(h,2),d=c[0],f=c[1];if(!d||!f)throw new Error("Unable to parse date fields");this.minDate=r(d),this.maxDate=r(f)}this.total=this.xAccessor?o.K(this.values,(function(e){return e[t.xAccessor]})):this.values.length,this.topKSlider=Math.min(20,this.total),this.records=Object(l.b)().key((function(e){return e[t.yAccessor]})).rollup((function(e){return o.K(e,(function(e){return t.xAccessor?e[t.xAccessor]:1}))})).entries(this.values).sort((function(a,b){return o.f(a.value,b.value)}));o.H("#"+this.graphId+" svg").remove(),this.svg=o.H("#"+this.graphId).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","-"+this.adjHorizontal[0]+" -"+this.adjVertical[0]+" "+(300+o.K(this.adjHorizontal))+" "+(380+o.K(this.adjVertical))).style("padding",this.padding).style("margin",this.margin).classed("svg-content",!0),this.xScale=o.B().range([0,300]),this.yScale=o.A().range([0,380]).paddingInner(.1);var v=o.c(this.yScale).tickFormat((function(e){return r=e,n=t.yAxisMaxTickLength,r.length>n?r.slice(0,n)+"..":r;var r,n})).tickSizeOuter(0),m=o.b(this.xScale).ticks(4);this.xAxis=m,this.yAxis=v,this.svg.append("g").attr("class","xAxis").attr("transform","translate(0,380)").call(m).append("text").attr("dy",".75em").attr("y",30).attr("x",150).style("text-anchor","middle").text(this.xLabel),this.svg.append("g").attr("class","yAxis").call(v),this.draw()}}}},c=(r(1786),r(40)),d=r(44),f=r.n(d),v=r(245),m=r(1015),y=r(984),_=r(1545),x=r(1129),k=r(977),w=r(1007),O=r(385),S=r(905),C=r(964),j=r(1616),component=Object(c.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.validProps?r("VContainer",[r("VRow",{attrs:{dense:""}},[r("VCol",{staticClass:"text-center",attrs:{cols:"12",md:"12"}},[r("i18n",{attrs:{tag:"p",path:t.k("heading")},scopedSlots:t._u([{key:"total",fn:function(){return[r("span",{staticClass:"text-bold",domProps:{textContent:t._s(t.total)}})]},proxy:!0},{key:"countLabel",fn:function(){return[t._v("\n          "+t._s(t.countLabel)+"\n        ")]},proxy:!0},{key:"minDate",fn:function(){return[r("span",{staticClass:"text-bold",domProps:{textContent:t._s(t.minDate)}})]},proxy:!0},{key:"maxDate",fn:function(){return[r("span",{staticClass:"text-bold",domProps:{textContent:t._s(t.maxDate)}})]},proxy:!0}],null,!1,1805274229)})],1)],1),t._v(" "),r("VRow",{attrs:{justify:"center",dense:""}},[r("VCol",{staticStyle:{position:"relative"},attrs:{cols:"12",md:"7"}},[r("VMenu",{attrs:{"offset-x":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("VBtn",t._g(t._b({staticStyle:{position:"absolute",right:"0","z-index":"10"},attrs:{icon:""}},"VBtn",o,!1),n),[r("VIcon",{attrs:{small:""}},[t._v("\n              $vuetify.icons.mdiCog\n            ")])],1)]}}],null,!1,405597846)},[t._v(" "),r("VCard",{staticStyle:{width:"300px"}},[r("VCardTitle",[t._v(t._s(t.$t("Settings")))]),t._v(" "),r("VDivider"),t._v(" "),r("VCardText",[r("VRow",{staticClass:"mt-3"},[r("VCol",[r("VSlider",{attrs:{label:"N° "+t.$t("of")+" "+t.yLabel,"thumb-color":"primary","thumb-label":"always",min:"1",max:Math.min(t.total,50),"hide-details":"",dense:""},on:{change:t.draw},model:{value:t.topKSlider,callback:function(e){t.topKSlider=e},expression:"topKSlider"}})],1)],1),t._v(" "),r("VRow",[r("VCol",[r("VCheckbox",{attrs:{dense:"",label:t.$t("Display Others"),"hide-details":""},on:{change:t.draw},model:{value:t.othersCheck,callback:function(e){t.othersCheck=e},expression:"othersCheck"}})],1)],1)],1)],1)],1),t._v(" "),r("div",{staticStyle:{position:"relative"},attrs:{id:t.graphId}})],1)],1)],1):t._e()}),[],!1,null,"2beb79c2",null);e.default=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardText:y.c,VCardTitle:y.d,VCheckbox:_.a,VCol:x.a,VContainer:k.a,VDivider:w.a,VIcon:O.a,VMenu:S.a,VRow:C.a,VSlider:j.a})},1488:function(t,e,r){"use strict";r(10),r(8),r(14),r(3),r(19),r(9),r(20);var n=r(2),o=(r(36),r(1727),r(47)),l=r(37),h=r(11),c=r(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(h.a)(l.a).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render:function(t,e){var r=e.children,n=e.listeners,h=e.props,data={staticClass:"v-label",class:f({"v-label--active":h.value,"v-label--is-disabled":h.disabled},Object(l.b)(e)),attrs:{for:h.for,"aria-hidden":!h.for},on:n,style:{left:Object(c.i)(h.left),right:Object(c.i)(h.right),position:h.absolute?"absolute":"relative"},ref:"label"};return t("label",o.a.options.methods.setTextColor(h.focused&&h.color,data),r)}});e.a=v},1716:function(t,e,r){"use strict";var n=r(6),o=(r(36),r(46),r(87),r(47)),l=r(37),h=r(264),c=r(0),d=r(15),f=r(11),v=Object(f.a)(o.a,Object(h.a)("form"),l.a);e.a=v.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(c.l)(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,r=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var o=0;o<this.rules.length;o++){var l=this.rules[o],h="function"==typeof l?l(e):l;!1===h||"string"==typeof h?r.push(h||""):"boolean"!=typeof h&&Object(d.b)("Rules should return a string or boolean, received '".concat(Object(n.a)(h),"' instead"),this)}return this.errorBucket=r,this.valid=0===r.length,this.valid}}})},1718:function(t,e,r){var content=r(1787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("fe89ed58",content,!0,{sourceMap:!1})},1725:function(t,e,r){var content=r(1726);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("22487aae",content,!0,{sourceMap:!1})},1726:function(t,e,r){var n=r(25)(!1);n.push([t.i,".theme--light.v-input,.theme--light.v-input input,.theme--light.v-input textarea{color:rgba(0,0,0,.87)}.theme--light.v-input input::-moz-placeholder,.theme--light.v-input textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::placeholder,.theme--light.v-input textarea::placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input--is-disabled,.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:rgba(0,0,0,.38)}.theme--dark.v-input,.theme--dark.v-input input,.theme--dark.v-input textarea{color:#fff}.theme--dark.v-input input::-moz-placeholder,.theme--dark.v-input textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::placeholder,.theme--dark.v-input textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input--is-disabled,.theme--dark.v-input--is-disabled input,.theme--dark.v-input--is-disabled textarea{color:hsla(0,0%,100%,.5)}.v-input{align-items:flex-start;display:flex;flex:1 1 auto;font-size:16px;letter-spacing:normal;max-width:100%;text-align:left}.v-input .v-progress-linear{top:calc(100% - 1px);left:0}.v-input input{max-height:32px}.v-input input:invalid,.v-input textarea:invalid{box-shadow:none}.v-input input:active,.v-input input:focus,.v-input textarea:active,.v-input textarea:focus{outline:none}.v-input .v-label{height:20px;line-height:20px;letter-spacing:normal}.v-input__append-outer,.v-input__prepend-outer{display:inline-flex;margin-bottom:4px;margin-top:4px;line-height:1}.v-input__append-outer .v-icon,.v-input__prepend-outer .v-icon{-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-input__append-outer{margin-left:9px}.v-application--is-ltr .v-input__prepend-outer,.v-application--is-rtl .v-input__append-outer{margin-right:9px}.v-application--is-rtl .v-input__prepend-outer{margin-left:9px}.v-input__control{display:flex;flex-direction:column;height:auto;flex-grow:1;flex-wrap:wrap;min-width:0;width:100%}.v-input__icon{align-items:center;display:inline-flex;height:24px;flex:1 0 auto;justify-content:center;min-width:24px;width:24px}.v-input__icon--clear{border-radius:50%}.v-input__icon--clear .v-icon--disabled{visibility:hidden}.v-input__slot{align-items:center;color:inherit;display:flex;margin-bottom:8px;min-height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-input--dense>.v-input__control>.v-input__slot{margin-bottom:4px}.v-input--is-loading>.v-input__control>.v-input__slot:after,.v-input--is-loading>.v-input__control>.v-input__slot:before{display:none}.v-input--hide-details>.v-input__control>.v-input__slot{margin-bottom:0}.v-input--has-state.error--text .v-label{-webkit-animation:v-shake .6s cubic-bezier(.25,.8,.5,1);animation:v-shake .6s cubic-bezier(.25,.8,.5,1)}.v-input--hide-spin-buttons input::-webkit-inner-spin-button,.v-input--hide-spin-buttons input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-input--hide-spin-buttons input[type=number]{-moz-appearance:textfield}",""]),t.exports=n},1727:function(t,e,r){var content=r(1728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("371f82d0",content,!0,{sourceMap:!1})},1728:function(t,e,r){var n=r(25)(!1);n.push([t.i,".theme--light.v-label{color:rgba(0,0,0,.6)}.theme--light.v-label--is-disabled{color:rgba(0,0,0,.38)}.theme--dark.v-label{color:hsla(0,0%,100%,.7)}.theme--dark.v-label--is-disabled{color:hsla(0,0%,100%,.5)}.v-label{font-size:16px;line-height:1;min-height:8px;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=n},1729:function(t,e,r){var content=r(1730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("2bb34da4",content,!0,{sourceMap:!1})},1730:function(t,e,r){var n=r(25)(!1);n.push([t.i,".theme--light.v-messages{color:rgba(0,0,0,.6)}.theme--dark.v-messages{color:hsla(0,0%,100%,.7)}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;position:relative}.v-application--is-ltr .v-messages{text-align:left}.v-application--is-rtl .v-messages{text-align:right}.v-messages__message{line-height:12px;word-break:break-word;word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}",""]),t.exports=n},1786:function(t,e,r){"use strict";r(1718)},1787:function(t,e,r){var n=r(25)(!1);n.push([t.i,"[data-v-2beb79c2] .xAxis line,[data-v-2beb79c2] .yAxis line{stroke:#706f6f;stroke-width:.5;shape-rendering:geometricPrecision}[data-v-2beb79c2] .xAxis path,[data-v-2beb79c2] .yAxis path{stroke:#706f6f;stroke-width:.7;shape-rendering:geometricPrecision}[data-v-2beb79c2] .yAxis path{display:none}[data-v-2beb79c2] .xAxis text,[data-v-2beb79c2] .yAxis text{fill:#2b2929;font-weight:300}[data-v-2beb79c2] .xAxis text{font-size:1rem}",""]),t.exports=n}}]);