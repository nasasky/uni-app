require("../../../../common/manifest.js");
require("../../../../common/vendor.js");
global.webpackJsonp([32],{93:function(t,e,n){"use strict";var s=i(n(1)),o=i(n(94));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(o.default))},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(96),o=n.n(s),i=n(97),a=!1;var r=function(t){a||n(95)},u=n(0)(o.a,i.a,r,null,null);u.options.__file="C:\\Users\\zhaoyue\\Documents\\HBuilderProjects\\news\\pages\\index\\news\\info\\info.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},95:function(t,e){},96:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,o=n(7),i=(s=o)&&s.__esModule?s:{default:s};e.default={components:{writemarkTemp:i.default},data:function(){return{title:"",string:"",imgUrl:""}},onLoad:function(e){var n=this;t.showLoading(),console.log(e),t.request({url:"https://unidemo.dcloud.net.cn/api/news/36kr/"+e.newsid,method:"GET",data:{},success:function(e){console.log(e),n.title=e.data.title,n.string=e.data.content,n.imgUrl=e.data.cover,t.hideLoading()},fail:function(){},complete:function(){}})}}}).call(e,n(2).default)},97:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"content"},[n("view",{staticClass:"banner"},[n("image",{staticClass:"bannerImg",attrs:{src:t.imgUrl,mode:""}})]),n("view",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(t.title)+"\n\t\t")]),n("rich-text",{staticClass:"richtext",attrs:{nodes:t.string,mpcomid:"ByJ-0"}},[t._v("\n\t\t\t"+t._s(t.string)+"\n\t\t")]),n("view",{staticClass:"bottom"},[n("writemarkTemp",{attrs:{mpcomid:"W2n-1"}})],1)],1)])};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o}},[93]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/index/news/info/info.js.map