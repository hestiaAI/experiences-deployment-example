(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1944:function(e,t,r){"use strict";r.r(t);var n=r(85),o=r(22),l=(r(92),{props:{text:{type:String,default:""},icon:{type:String,default:null},disabled:{type:Boolean,default:!1},f:{type:Function,default:null},args:{type:Array,default:null}},data:function(){return{progress:!1,status:!1,error:!1}},methods:{run:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.progress=!0,e.status=!1,e.error=!1,t.prev=3,t.next=6,e.f.apply(e,Object(n.a)(e.args));case 6:r=t.sent,e.$emit("click",{value:r}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(3),console.error(t.t0),e.error=!0,e.$emit("click",{error:t.t0});case 15:e.status=!0,e.progress=!1;case 17:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}}),c=r(38),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("BaseButton",e._b({on:{click:e.run}},"BaseButton",{progress:e.progress,status:e.status,error:e.error,disabled:e.disabled,text:e.text,icon:e.icon},!1))}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseButton:r(587).default})}}]);