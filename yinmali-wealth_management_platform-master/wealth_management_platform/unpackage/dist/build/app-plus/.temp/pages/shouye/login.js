require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{16:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(17));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},17:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(19),a=i.n(s),n=i(20);var c=function(t){i(18)},l=i(0)(a.a,n.a,c,null,null);e.default=l.exports},18:function(t,e){},19:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{flag:0,height:""}},onLoad:function(){this.height=t.getSystemInfoSync().screenHeight,console.log(this.height)},methods:{tab:function(t){0==t.target.dataset.id?this.flag=0:this.flag=1},toRegister:function(){t.navigateTo({url:"./register",success:function(t){},fail:function(){},complete:function(){}})},toIndex:function(){t.switchTab({url:"../index/index"})},toReset:function(){t.navigateTo({url:"./reset",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(e,i(2).default)},20:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"login-box",style:{height:t.height+"px"}},[i("view",{staticClass:"container"},[t._m(0),i("view",{staticClass:"bottom"},[i("view",{staticClass:"bottom-top"},[i("view",{staticClass:"login-class"},[i("view",{class:{active:0==t.flag},attrs:{"data-id":"0",eventid:"GGw-0"},on:{click:t.tab}},[t._v("\n\t\t\t\t\t\t短信验证登陆\n\t\t\t\t\t")]),i("view",{class:{active:1==t.flag},attrs:{"data-id":"1",eventid:"GPf-1"},on:{click:t.tab}},[t._v("\n\t\t\t\t\t\t账号密码登录\n\t\t\t\t\t")])]),i("view",{directives:[{name:"show",rawName:"v-show",value:0==t.flag,expression:"flag==0"}],staticClass:"inp-group"},[t._m(1),t._m(2)]),1==t.flag?i("view",{staticClass:"inp-group"},[t._m(3),t._m(4)]):t._e(),i("view",{staticClass:"button-box"},[i("view",{staticClass:" btn",attrs:{eventid:"KWp-2"},on:{click:t.toIndex}},[t._v("登录")])]),i("view",{staticClass:"forget",attrs:{eventid:"rcP-3"},on:{click:t.toReset}},[t._v("忘记密码？")])]),i("view",{staticClass:"zhuce",attrs:{eventid:"Iks-4"},on:{click:t.toRegister}},[t._v("没有账号，立即注册")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"logo"},[e("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/7.0-%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E7%AD%89%E9%A1%B5%E9%9D%A2/7.1.2-%E6%B3%A8%E5%86%8C/android/drawable-xhdpi/logo.png",mode:"widthFix"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/shoujihao.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/yanzhengma.png",mode:"aspectFit"}}),e("view",{staticClass:"inp-box-right"},[e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入手机号"}}),e("view",{staticClass:"get-number"},[e("view",[this._v("获取验证码")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/shoujihao.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入账号"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"inp-box"},[e("image",{staticClass:"icon",attrs:{src:"../../static/image/my/yanzhengma.png",mode:"aspectFit"}}),e("input",{staticClass:"input",attrs:{type:"text",value:"",placeholder:"请输入密码"}})])}]};e.a=s}},[16]);