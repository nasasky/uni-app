require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([40],{88:function(t,e,i){"use strict";var n=a(i(1)),s=a(i(89));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},89:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(91),s=i.n(n),a=i(92);var u=function(t){i(90)},c=i(0)(s.a,a.a,u,null,null);e.default=c.exports},90:function(t,e){},91:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=a(i(5)),s=a(i(6));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{newsListTemp:n.default,swiperTemp:s.default},data:function(){return{imgUrl:[{id:1,url:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"},{id:2,url:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480"},{id:3,url:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480"}],id:1,xuanze:[{item:"全部",id:1},{item:"热点资讯",id:2},{item:"行业观点",id:3}],lists:[]}},onLoad:function(){var e=this;t.showLoading(),t.request({url:"https://unidemo.dcloud.net.cn/api/news",method:"GET",data:{},success:function(i){e.lists=i.data,console.log(i),t.hideLoading()},fail:function(){},complete:function(){}})},methods:{openinfo:function(e){var i=e.currentTarget.dataset.newsid;t.navigateTo({url:"info/info?newsid="+i})},fresh:function(t){this.id=t}}}}).call(e,i(2).default)},92:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("swiperTemp",{attrs:{imgUrl:t.imgUrl,mpcomid:"Bdz-0"}}),i("view",{staticClass:"tiaojian"},t._l(t.xuanze,function(e,n){return i("view",{key:e.id,class:t.id==e.id?"active":"",attrs:{eventid:"9JM-0-"+n},on:{click:function(i){t.fresh(e.id)}}},[t._v("\n\t\t"+t._s(e.item)+"\n\t\t\t\n\t\t")])})),i("newsListTemp",{attrs:{newsList:t.lists,mpcomid:"xUK-1"}})],1)},staticRenderFns:[]};e.a=n}},[88]);