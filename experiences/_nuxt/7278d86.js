(window.webpackJsonp=window.webpackJsonp||[]).push([[9,17],{1097:function(e,t,n){"use strict";n(33);var r=function(e,t){return"experiences.".concat(e,".intro.").concat(t)};t.a={computed:{defaultSubtitle:function(){return this.$tc("Data Experience",1)}},methods:{title:function(e){var t=e.slug,title=e.title;return this.$tev(r(t,"title"),title)},subtitle:function(e){var t=e.slug,n=e.subtitle;return this.$tev(r(t,"subtitle"),n||this.defaultSubtitle)}}}},1115:function(e,t,n){"use strict";n.r(t),n.d(t,"validateBubble",(function(){return r})),n.d(t,"validateExperience",(function(){return c}));n(49),n(68),n(111),n(4);var r=function(e){var t=e.store,n=e.params;return t.state.config.bubbles.includes(n.bubble)},c=function(e){var t=e.store,n=e.params,r=n.experience,c=n.bubble;return t.getters.enabledExperiences.find((function(e){return e.slug===r}))&&(!c||t.state.config.bubbleConfig[c].experiences.includes(r))};t.default={bubble:r,experience:c}},1121:function(e,t,n){"use strict";n(33);t.a={methods:{vueMeta:function(title){var content="".concat(title," | ").concat(this.$t("app.name"));return{title:title,meta:[{hid:"og:title",property:"og:title",content:content},{hid:"twitter:title",property:"twitter:title",content:content}]}}}}},1153:function(e,t,n){"use strict";var r=n(1059),c=n(1121),o=n(1097);t.a=Object(r.a)(c.a,o.a,{computed:{experienceConfig:function(){return this.$store.getters.experience(this.$route.params.experience)},siteConfig:function(){return this.$store.state.config},experienceTitle:function(){return this.title(this.experienceConfig)},experienceSubtitle:function(){return this.subtitle(this.experienceConfig)}}})},1338:function(e,t,n){"use strict";n.r(t);n(33);var r=n(1115),c={mixins:[n(1153).a],validate:function(e){return r.default.experience(e)},head:function(){var e=this.experienceTitle,s=this.experienceSubtitle,t="".concat(e,": ").concat(s);return this.vueMeta(t)}},o=n(65),component=Object(o.a)(c,(function(){var e=this;return(0,e._self._c)("TheDataExperience2",e._b({},"TheDataExperience2",{experienceConfig:e.experienceConfig,siteConfig:e.siteConfig},!1))}),[],!1,null,null,null);t.default=component.exports}}]);