(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1157:function(e,n){},1226:function(e,n){},1228:function(e,n){},1238:function(e,n){},1240:function(e,n){},1265:function(e,n){},1267:function(e,n){},1268:function(e,n){},1273:function(e,n){},1275:function(e,n){},1281:function(e,n){},1283:function(e,n){},1302:function(e,n){},1314:function(e,n){},1317:function(e,n){},1337:function(e,n,t){"use strict";t.r(n);var o=t(1063),c=t(27),r=(t(106),t(1220)),f=t.n(r),l=t(1221),y=t.n(l),h=t(1222),k=t.n(h),d={methods:{generateKeys:function(){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,t,o,c,r,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.ready;case 2:return n=k.a,t=n.crypto_box_keypair(),o=n.to_hex(t.publicKey),c=n.to_hex(t.privateKey),(r=new f.a).file("public-key.txt",o),r.file("secret-key.txt",c),e.next=11,r.generateAsync({type:"blob"});case 11:content=e.sent,y.a.saveAs(content,"keys.zip");case 13:case"end":return e.stop()}}),e)})))()}}},v=t(65),component=Object(v.a)(d,(function(){var e=this,n=e._self._c;return n(o.a,[n("h2",[e._v("Key Generation")]),e._v(" "),n("p",[e._v("\n    This step only needs to be done once. Copy the public key in the config\n    and store the secret key in a safe place.\n  ")]),e._v(" "),n("BaseButton",{attrs:{text:"Generate keys"},on:{click:e.generateKeys}})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseButton:t(589).default})}}]);