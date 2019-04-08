require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([46],{31:function(t,i,a){"use strict";var s=n(a(1)),e=n(a(32));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},32:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(34),e=a.n(s),n=a(44);var o=function(t){a(33)},c=a(0)(e.a,n.a,o,null,null);i.default=c.exports},33:function(t,i){},34:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var s=o(a(3)),e=o(a(5)),n=o(a(6));function o(t){return t&&t.__esModule?t:{default:t}}i.default={components:{searchTemp:s.default,newsListTemp:e.default,swiperTemp:n.default},data:function(){return{lists:[{id:75408,from_id:"36kr",title:"2018年了，你有AI思维了吗？",summary:"葛优在《甲方乙方》结尾说1997年就要结束了，我很怀念。",column_id:"217",column_name:"人工智能",author_name:"科技唆麻",author_email:"",author_avatar:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",post_id:"5163051",cover:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading",views_count:10,comments_count:0,published_at:"2018-11-21 14:28:06",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"},{id:75409,from_id:"36kr",title:"特斯拉计划将超级充电网络扩大一倍，下代充电站计划推迟至明年初",summary:"特斯拉当下面临的最大问题是，该公司能否兑现马斯克许下的承诺？",column_id:"219",column_name:"汽车交通",author_name:"36氪的朋友们",author_email:"",author_avatar:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",post_id:"5163157",cover:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",views_count:15,comments_count:0,published_at:"2018-11-21 14:26:52",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"},{id:75407,from_id:"36kr",title:"消失的招聘广告",summary:"天风证券宋雪涛发现，在4月-9月期间，有202万个就业招聘广告消失，其中二线城市及中小企业降的最多最快。",column_id:"103",column_name:"技能Get",author_name:"36氪的朋友们",author_email:"",author_avatar:"http://krplus-pic.b0.upaiyun.com/201603/22055321/cg0huhoojxi0iipw.jpg!480",post_id:"5163153",cover:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading",views_count:51,comments_count:0,published_at:"2018-11-21 14:18:48",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:22:07",updated_at:"2018-11-21 14:22:07"}],imgUrl:[{id:1,url:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading"},{id:2,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"},{id:3,url:"https://pic.36krcnd.com/201811/21055833/9f29w57lh2uwzfow!heading"}],list:[{id:75408,from_id:"36kr",title:"2018年了，你有AI思维了吗？",summary:"葛优在《甲方乙方》结尾说，1997年就要结束了，我很怀念他。而事实上，不管你承不承认，互联网思维已经是过去式了，对于绝大多数企业来说，要学习的是AI思维，如果不能拥抱AI，恐怕会被时代无情的淘汰。",column_id:"217",column_name:"人工智能",author_name:"科技唆麻",author_email:"",author_avatar:"https://pic.36krcnd.com/avatar/201803/08005901/c41olcs56y2dq292.jpg!480",post_id:"5163051",cover:"https://pic.36krcnd.com/201811/20140007/siedc1b5fzprrvpn!heading",views_count:10,comments_count:0,published_at:"2018-11-21 14:28:06",store_at:"0000-00-00 00:00:00",type:"news",created_at:"2018-11-21 14:31:06",updated_at:"2018-11-21 14:31:06"}],qiuzhilist:[{value:"1如何选择固定收益类理财产品？"},{value:"2如何选择固定收益类理财产品？"},{value:"3如何选择固定收益类理财产品？"}]}},methods:{toZixun:function(){t.navigateTo({url:"news/news",success:function(t){},fail:function(){},complete:function(){}})},toHuodong:function(){t.navigateTo({url:"huodong/huodong",success:function(t){},fail:function(){},complete:function(){}})},toCaifu:function(){t.navigateTo({url:"caifu/caifu",success:function(t){},fail:function(){},complete:function(){}})},toQiuzhi:function(){t.navigateTo({url:"knowledge/knowledge",success:function(t){},fail:function(){},complete:function(){}})},toProduct:function(){t.switchTab({url:"../product/product"})},toZaobao:function(){t.navigateTo({url:"./zaobao/zaobao",success:function(t){},fail:function(){},complete:function(){}})},toStore:function(){t.navigateTo({url:"./store/store",success:function(t){},fail:function(){},complete:function(){}})}}}}).call(i,a(2).default)},44:function(t,i,a){"use strict";var s={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",[a("swiperTemp",{attrs:{imgUrl:t.imgUrl,mpcomid:"v9p-0"}}),a("view",{staticClass:"lists"},[a("view",{staticClass:"list-item",attrs:{eventid:"eZ0-0"},on:{tap:t.toZixun}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/zixun.png",mode:""}}),a("view",[t._v("资讯")])]),a("view",{staticClass:"list-item",attrs:{eventid:"3MD-1"},on:{tap:t.toQiuzhi}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/qiuzhi.png",mode:""}}),a("view",[t._v("求知")])]),a("view",{staticClass:"list-item",attrs:{eventid:"0fb-2"},on:{tap:t.toHuodong}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/huodong.png",mode:""}}),a("view",[t._v("活动")])]),a("view",{staticClass:"list-item",attrs:{eventid:"yYR-3"},on:{tap:t.toCaifu}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/caifujiangtang.png",mode:""}}),a("view",[t._v("财富讲堂")])]),a("view",{staticClass:"list-item",attrs:{eventid:"zQJ-4"},on:{tap:t.toStore}},[a("image",{attrs:{src:"http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.0-%E5%8F%91%E7%8E%B0%EF%BC%88%E6%96%B0%E5%AE%A2%E6%88%B7%EF%BC%89/android/drawable-xhdpi/jifenshamhcheng.png",mode:""}}),a("view",[t._v("积分商城")])])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t金融资讯\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"Xav-5"},on:{tap:t.toZixun}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])])]),a("newsListTemp",{attrs:{newsList:t.lists,mpcomid:"Y33-1"}})],1),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t热点问答\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"ixL-6"},on:{tap:t.toQiuzhi}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),a("view",{staticClass:"block-content"},t._l(t.qiuzhilist,function(i,s){return a("view",{key:s,class:{qiuzhiItem:!0,first:0==s}},[a("view",{staticClass:"qiuzhi-top size uni-ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(i.value)+"\n\t\t\t\t\t")]),a("view",{staticClass:"qiuzhi-bottom  uni-ellipsis"},[t._v("\n\t\t\t\t\t\t"+t._s(i.value)+"\n\t\t\t\t\t")])])}))])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t热销产品\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"TBd-7"},on:{tap:t.toProduct}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),t._m(0)])]),a("view",{staticClass:"block-box"},[a("view",{staticClass:"block"},[a("view",{staticClass:"block-title-box"},[a("view",{staticClass:"block-title"},[a("view",{staticClass:"text"},[t._v("\n\t\t\t\t\t\t财富讲堂\n\t\t\t\t\t")]),a("view",{staticClass:"uni-icon-more",attrs:{eventid:"UQm-8"},on:{tap:t.toCaifu}},[a("view",{staticClass:"more"},[t._v("\n\t\t\t\t\t\t\t更多\n\t\t\t\t\t\t")]),a("label",{staticClass:"iconfont arrow"},[t._v("")])],1)])]),t._m(1)])])],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"block-content"},[a("view",{staticClass:"intro"},[a("view",{staticClass:"pro-title"},[t._v("\n\t\t\t\t\t\t秀实——东雀嘉熠一号收益权转让计划\n\t\t\t\t\t")]),a("view",{staticClass:"detail"},[a("view",{staticClass:"item"},[a("view",{staticClass:"size color"},[t._v("8%-9.5%")]),a("view",{staticClass:"color-gray"},[t._v("业绩比较基准")])]),a("view",{staticClass:"item"},[a("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t产品期限\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t12个月\n\t\t\t\t\t\t\t")])]),a("view",{staticClass:"item"},[a("view",{staticClass:"size"},[t._v("\n\t\t\t\t\t\t\t\t认购起点\n\t\t\t\t\t\t\t")]),a("view",{staticClass:"color-gray"},[t._v("\n\t\t\t\t\t\t\t\t50万元\n\t\t\t\t\t\t\t")])])]),a("view",{staticClass:"button-group"},[a("view",{},[t._v("\n\t\t\t\t\t\t\t产品备案查询\n\t\t\t\t\t\t")]),a("view",{},[t._v("\n\t\t\t\t\t\t\t产品详情\n\t\t\t\t\t\t")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"block-content"},[i("view",{staticClass:"jiangtang"},[i("view",{staticClass:"jt-box"},[i("view",{staticClass:"jt-title"},[this._v("\n\t\t\t\t\t\t\t投资策略\n\t\t\t\t\t\t")]),i("view",{staticClass:"jt-content"},[this._v("\n\t\t\t\t\t\t\t投资顾问 专家解读\n\t\t\t\t\t\t")])]),i("view",{staticClass:"jt-box"},[i("view",{staticClass:"jt-title"},[this._v("\n\t\t\t\t\t\t\t投资策略\n\t\t\t\t\t\t")]),i("view",{staticClass:"jt-content"},[this._v("\n\t\t\t\t\t\t\t投资顾问 专家解读\n\t\t\t\t\t\t")])])])])}]};i.a=s}},[31]);