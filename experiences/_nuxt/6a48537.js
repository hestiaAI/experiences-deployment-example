(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1491:function(t,e,n){"use strict";n(3),n(41),n(40),n(1068),n(414);e.a={computed:{path:function(){return URL.createObjectURL(this.fileManager.fileDict[this.filename])}}}},1551:function(t,e,n){"use strict";n.r(e);var r=n(1140),o=n(1491),f={name:"UnitFileExplorerViewerUnknown",mixins:[r.a,o.a],data:function(){return{showIframe:!1,href:""}},computed:{iframeClass:function(){return this.showIframe?"":"d-none"}},watch:{filename:function(){this.showIframe=!1}},methods:{click:function(){this.href=this.path},onIframeLoad:function(){this.href===this.path&&(this.showIframe=!0)}}},c=n(38),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    Unknown file type\n    "),n("BaseButton",{staticClass:"ml-2",attrs:{small:""},on:{click:t.click}},[t._v("\n      Try to open it\n    ")])],1),t._v(" "),n("iframe",{ref:"iframe",class:t.iframeClass,attrs:{src:t.href,width:"100%",height:"500px"},on:{load:t.onIframeLoad}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:n(587).default})}}]);