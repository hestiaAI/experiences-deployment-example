(window.webpackJsonp=window.webpackJsonp||[]).push([[159,96],{1209:function(t,e,r){var content=r(1356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("2decc1b6",content,!0,{sourceMap:!1})},1355:function(t,e,r){"use strict";r(1209)},1356:function(t,e,r){var n=r(23)(!1);n.push([t.i,".link[data-v-c0e13b4a]{float:right;margin-top:1em}",""]),t.exports=n},1387:function(t,e,r){"use strict";r.r(e);r(19),r(68),r(33),r(51);var n={name:"VideoWidget",props:{title:{type:String,default:function(){return""}},videoSrc:{type:String,required:!0},width:{type:String,default:function(){return"100%"}},height:{type:String,default:function(){return"250px"}},linkSrc:{type:String,default:function(){return""}},linkTxt:{type:String,default:function(){return""}},caption:{type:String,default:function(){return""}}},computed:{url:function(){var t=this.videoSrc.split("/").pop(),e=null;return this.videoSrc.includes("vimeo.com")&&(e="https://player.vimeo.com/video/"),this.videoSrc.includes("youtube.com")&&(e="https://www.youtube.com/embed/"),e&&t?e+t:null}}},o=(r(1355),r(32)),l=r(37),c=r.n(l),d=r(673),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"100%"}},[r("div",{staticClass:"overline text-center"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.url?t._e():r("VAlert",{attrs:{color:"red",dense:"",type:"error"}},[t._v("\n    The video link provided is not recognized\n  ")]),t._v(" "),t.url?r("iframe",{staticClass:"pa-3 video",attrs:{src:t.url,width:t.width,height:t.height,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""}}):t._e(),t._v(" "),r("div",{staticStyle:{"text-align":"end","margin-top":"0px","font-size":"12px"}},[r("ExternalLink",{attrs:{href:t.linkSrc}},[t._v("\n      "+t._s(t.linkTxt)+"\n    ")])],1)],1)}),[],!1,null,"c0e13b4a",null);e.default=component.exports;c()(component,{ExternalLink:r(258).default}),c()(component,{VAlert:d.a})},1736:function(t,e,r){"use strict";r.r(e);r(3),r(34);var n={props:{title:{type:String,required:!0},description:{type:String,default:""},slug:{type:String,required:!0},icon:{type:String,required:!0}},computed:{mdiIcon:function(){return this.$vuetify.icons.values[this.icon]}}},o=r(32),l=r(37),c=r.n(l),d=r(726),f=r(687),h=r(250),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{attrs:{height:"100%",nuxt:"",to:t.localePath({name:"bubble-bubble",params:{bubble:t.slug}}),hover:""}},[r("VCardText",[r("VImg",{attrs:{src:t.icon,"lazy-src":t.icon}}),t._v(" "),r("h4",{staticClass:"text-subtitle-1 font-weight-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",[t._v(t._s(t.description))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardText:f.c,VImg:h.a})},1737:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,default:""},profileName:{type:String,default:""},profileDescription:{type:String,default:""},profilePhoto:{type:String,default:""},tweetLink:{type:String,default:""}}},o=r(32),l=r(37),c=r.n(l),d=r(726),f=r(687),h=r(286),v=r(250),m=r(188),_=r(289),w=r(82),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{staticClass:"mx-auto",attrs:{color:"primary",dark:"","max-width":"400",href:t.tweetLink,hover:""}},[r("VCardTitle",[r("VIcon",{attrs:{large:"",left:""}},[t._v("\n      $vuetify.icons.mdiTwitter\n    ")]),t._v(" "),r("span",{staticClass:"text-h6 font-weight-light"},[t._v("Twitter")])],1),t._v(" "),r("VCardText",{staticClass:"text-subtitle-1 font-weight-bold pr-5 pl-5"},[t._v('\n    "'+t._s(t.text)+'"\n  ')]),t._v(" "),r("VCardActions",[r("VListItem",{staticClass:"grow"},[r("VListItemAvatar",{attrs:{color:"grey darken-3"}},[r("VImg",{staticClass:"elevation-6",attrs:{alt:"",src:t.profilePhoto}})],1),t._v(" "),r("VListItemContent",[r("VListItemTitle",{staticClass:"font-weight-bold"},[t._v("\n          "+t._s(t.profileName)+"\n        ")]),t._v(" "),r("div",[t._v(t._s(t.profileDescription))])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VIcon:h.a,VImg:v.a,VListItem:m.a,VListItemAvatar:_.a,VListItemContent:w.a,VListItemTitle:w.c})},1774:function(t,e,r){var content=r(1884);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("574896e5",content,!0,{sourceMap:!1})},1806:function(t,e,r){"use strict";r.r(e);var n={props:{text:{type:String,required:!0},author:{type:String,default:""},authorHref:{type:String,default:""}}},o=r(32),l=r(37),c=r.n(l),d=r(726),f=r(687),h=r(286),v=r(668),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{staticClass:"mx-auto",attrs:{color:"primary",flat:""}},[r("VCardText",{staticClass:"white--text"},[r("VRow",{attrs:{dense:""}},[r("VIcon",{attrs:{large:"",left:"",color:"white"}},[t._v("\n        $vuetify.icons.mdiFormatQuoteOpen\n      ")])],1),t._v(" "),r("div",{staticClass:"blockquote font-italic"},[t._v("\n      "+t._s(t.text)+"\n    ")]),t._v(" "),r("VRow",{staticStyle:{"justify-content":"end"},attrs:{dense:""}},[r("VIcon",{attrs:{large:"",right:"",color:"white"}},[t._v("\n        $vuetify.icons.mdiFormatQuoteClose\n      ")])],1),t._v(" "),t.author?r("div",{staticClass:"d-flex justify-space-between font-italic font-weight-thin"},[t.authorHref?r("span",[r("VIcon",{attrs:{right:"",color:"white"}},[t._v(" $vuetify.icons.mdiMinus ")]),t._v(" "),r("ExternalLink",{attrs:{href:t.linkSrc}},[t._v(t._s(t.author))])],1):r("span",[r("VIcon",{attrs:{right:"",color:"white"}},[t._v("  $vuetify.icons.mdiMinus ")]),t._v("\n        "+t._s(t.author)+"\n      ")],1)]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{ExternalLink:r(258).default}),c()(component,{VCard:d.a,VCardText:f.c,VIcon:h.a,VRow:v.a})},1807:function(t,e,r){"use strict";r.r(e);r(3),r(34);var n={props:{title:{type:String,required:!0},text:{type:String,required:!0},icon:{type:String,required:!0},actionText:{type:String,default:""},actionHref:{type:String,default:""}},computed:{mdiIcon:function(){return this.$vuetify.icons.values[this.icon]}},method:{scrollToElement:function(){var t=this.$refs.scrollToMe;t&&t.scrollIntoView({behavior:"smooth"})}}},o=r(32),l=r(37),c=r.n(l),d=r(290),f=r(187),h=r(726),v=r(687),m=r(286),_=r(672),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VCard",{staticClass:"d-flex flex-column",attrs:{flat:"",height:"100%"}},[r("VCardText",[r("VAvatar",{staticClass:"mb-6",attrs:{color:"primary",size:"80"}},[r("VIcon",{staticClass:"pa-5",attrs:{dark:""}},[t._v("\n        "+t._s(t.mdiIcon)+"\n      ")])],1),t._v(" "),r("h4",{staticClass:"text-subtitle-1 font-weight-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"mt-3 mb-3"},[t._v("\n      "+t._s(t.text)+"\n    ")])],1),t._v(" "),r("VSpacer"),t._v(" "),t.actionText?r("VCardActions",[r("VBtn",{attrs:{text:"",color:"primary",href:t.actionHref}},[t._v("\n      "+t._s(t.actionText)+"\n    ")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VBtn:f.a,VCard:h.a,VCardActions:v.a,VCardText:v.c,VIcon:m.a,VSpacer:_.a})},1883:function(t,e,r){"use strict";r(1774)},1884:function(t,e,r){var n=r(23)(!1);n.push([t.i,".banner-wrapper[data-v-6fc17630]{background:var(--v-primary-base);padding:20px;min-height:400px;display:flex;align-items:center}.banner-title[data-v-6fc17630]{font-size:60px;line-height:50px;margin:20px 0}.banner-subtitle[data-v-6fc17630]{font-size:20px}.section-title[data-v-6fc17630]{font-size:25px;margin:20px;line-height:30px;color:#464e61}.pa-15[data-v-6fc17630]{padding:50px}.light-background[data-v-6fc17630]{background-color:#f2f2f2}.icon-wrapper[data-v-6fc17630]{background-color:#9ca299;border-radius:100%;width:80px;height:80px;text-align:center;line-height:80px;display:inline-block;margin:20px 0 30px}.icon[data-v-6fc17630]{font-size:50px;color:#fff;vertical-align:middle}",""]),t.exports=n},1936:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(13),l=(r(14),r(3),r(62),r(198),r(11),r(7),r(17),r(10),r(18),r(1578)),c=r(1736),d=r(1737);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={components:{BaseBubbleCard:c.default,BaseTwitterCard:d.default},data:function(){return{tools:[{title:"What we do",text:"Digipower.academy empower people and organisations through the mastery of data and data flows.",icon:"mdiDatabaseCog"},{title:"Who is it for",text:"Business leaders, civil servants, researchers, journalists, teachers, you will find here the resources towards understanding and using data in your field.",icon:"mdiAccountGroup"},{title:"Why is it so special",text:"The sessions take place in the digital life of the participants themselves. They retrieve, explore and make sense of their own data. Highly impactful.",icon:"mdiWeb"}]}},computed:{workshops:function(){return Object.entries(this.$store.state.config.bubbleConfig).map((function(t){var e=Object(o.a)(t,2),r=e[0],c=e[1];return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({slug:r},Object(l.a)(c,["title","icon","description","publicKey"]))})).filter((function(t){return!t.publicKey}))}}},v=h,m=(r(1883),r(32)),_=r(37),w=r.n(_),y=r(1672),C=r(1653),V=r(852),x=r(679),k=r(668),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"banner-wrapper"},[r("VContainer",[r("VRow",{attrs:{justify:"center"}},[r("VCol",{attrs:{cols:"12",md:"6"}},[r("h1",{staticClass:"banner-title font-weight-bold white--text"},[r("div",[t._v("DIGIPOWER")]),t._v(" "),r("div",{staticClass:"ml-13"},[t._v("\n              .ACADEMY\n            ")])]),t._v(" "),r("h4",{staticClass:"banner-subtitle white--text font-weight-regular"})]),t._v(" "),r("VCol",{attrs:{cols:"12",md:"6"}},[r("BaseQuote",{attrs:{text:"We need to train both the people who are putting data and information out there, as well as those reading it, how to interpret and question it to ensure they understand it and are not being misled or deceived.",author:"Sir Tim Berners-Lee, inventor of the World Wide Web"}})],1)],1)],1)],1),t._v(" "),r("div",{staticClass:"section-wrapper pa-15"},[r("VContainer",[r("VRow",{attrs:{justify:"center"}},t._l(t.tools,(function(e){return r("VCol",{key:e.title,attrs:{cols:"12",md:"4"}},[r("BaseInfoCard",t._b({},"BaseInfoCard",Object.assign({},e),!1))],1)})),1)],1)],1),t._v(" "),r("div",{staticClass:"section-wrapper pa-15 light-background"},[r("VContainer",[r("VRow",{attrs:{justify:"center"}},[r("VCol",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"section-title font-weight-medium"},[t._v("\n              Our current workshops\n            ")]),t._v(" "),r("p",[t._v("Choose the workshop(s) of your choice")])])])],1),t._v(" "),r("VRow",{attrs:{justify:"center"}},[t.$store.state.config.bubbleConfig?t._l(t.workshops,(function(e){var title=e.title,n=e.icon,o=e.description,l=e.slug;return r("VCol",{key:l,staticClass:"text-center",attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[r("BaseBubbleCard",t._b({staticClass:"pa-3"},"BaseBubbleCard",{title:title,description:o,icon:n,slug:l},!1))],1)})):[r("span",{staticClass:"caption"},[t._v("No workshops available right now, please contact us for more informations.")])]],2)],1)],1),t._v(" "),r("div",{staticClass:"section-wrapper pa-15"},[r("VContainer",[r("VRow",{attrs:{justify:"center"}},[r("VCol",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[r("div",{staticClass:"text-center"},[r("h3",{staticClass:"section-title font-weight-medium"},[t._v("\n              Testimonial\n            ")]),t._v(" "),r("p",[t._v("See what our customers say")])])])],1),t._v(" "),r("VRow",[r("VCol",[r("div",{staticClass:"text-center"},[r("VCarousel",{attrs:{height:"400","hide-delimiter-background":"","show-arrows-on-hover":"","delimiter-icon":"$vuetify.icons.mdiMinus",light:""}},[r("VCarouselItem",[r("VRow",{attrs:{align:"center",justify:"center"}},[r("BaseTwitterCard",{attrs:{text:"To hope to effectively regulate the data economy you need to deeply understand the power companies have through the personal data they hold. That's why I am participating in @sitrafund's #digipower investigation using #GDPR rights to get my data. Who will be the most transparent?","tweet-link":"https://twitter.com/jyrkikatainen/status/1455484493897342977?s=20&t=YdTsvxYhUonm0Gxr9nICvw","profile-name":"Jyrki Katainen","profile-description":"Former Prime Minister of Finland and VP of EU Commission","profile-photo":"https://pbs.twimg.com/profile_images/1229410125930270720/MLN38R_9_400x400.jpg"}})],1)],1),t._v(" "),r("VCarouselItem",[r("VRow",{attrs:{align:"center",justify:"center"}},[r("BaseVideo",{attrs:{"video-src":"https://player.vimeo.com/video/689283925?h=4b12093bf4",height:"360"}})],1)],1)],1)],1)])],1)],1)],1)])}),[],!1,null,"6fc17630",null);e.default=component.exports;w()(component,{BaseQuote:r(1806).default,BaseInfoCard:r(1807).default,BaseBubbleCard:r(1736).default,BaseTwitterCard:r(1737).default,BaseVideo:r(1387).default}),w()(component,{VCarousel:y.a,VCarouselItem:C.a,VCol:V.a,VContainer:x.a,VRow:k.a})}}]);