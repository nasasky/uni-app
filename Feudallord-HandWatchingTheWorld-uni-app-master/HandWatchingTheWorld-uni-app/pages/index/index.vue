<template>
	
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					 <!-- <block v-for="(newsitem,index2) in top_news" :key="index2">
					 	<media-list :data="newsitem" @close="close(index1,index2)" @click="goDetail(newsitem)">{{newsitem.title}}</media-list>
					</block> -->
					<view class="uni-list">
						<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in top_news" :key="index" @tap="openInfo" :data-newsurl="item.href" :data-title="item.title">
							<view class="uni-media-list">
								<view v-if="item.img!=''">
									<image class="uni-media-list-logo" :src="item.img"></image>
								</view>
								<view v-if="item.img==''">
									<image class="uni-media-list-logo" :src="imgurl"></image>
								</view> 
								<view class="uni-media-list-body">
									<view class="uni-media-list-text-top">
										<view v-if="item.title!=''">
											 {{item.title}}
										</view>
									    <view v-if="item.title==''">
									    	  暂无标题!!!
									    </view> 
									</view>
								 	<view class="uni-media-list-text-bottom uni-ellipsis">
										<view v-if="item.tag!=''">
											 {{item.tag}} |  {{item.time}}
										</view>
										<view v-if="item.tag==''">
											 暂无信息!!!
										</view> 
										
									</view> 
									
								</view>
							</view>
						</view>
					</view> 
					
					<view class="btu"><button size="mini" @click="loading" loading="true"></button></view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	
	 /* import uniLoadMore from '@/components/uni-load-more.vue'; */
	export default {
		components: {
			/* uniLoadMore */
		},
		data() {
			return {
				top_news:[],
				i:0,
				imgurl:"../../static/img/nourl.jpg",
				more:"loading",
				show:true,
				loadingText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				
				tabBars: [{
					name: '头条',
					id: 'toutiao'
				}, {
					name: '山东',
					id: 'yaowen'
				}, {
					name: '国内',
					id: 'tiyu'
				}, {
					name: '国际',
					id: 'redian'
				}, {
					name: '娱乐',
					id: 'caijing'
				}, {
					name: '电影',
					id: 'yule'
				}, {
					name: '航空',
					id: 'junshi'
				}, {
					name: '健康',
					id: 'lishi'
				}, {
					name: '旅游',
					id: 'bendi'
				}, {
					name: '教育',
					id: 'bendi'
				}]
			}
			
		},
		onLoad: function() {
			this.newsitems = this.randomfn(); 
			uni.request({
				url: 'http://39.105.87.0:8000/index?name=toutiao',
				method: 'GET',
				data: {},
				success: res => {
					
					this.top_news=res.data;
				
				},
				fail: () => {},
				complete: () => {}
			});
		},
		/* onPullDownRefresh:function(){
			 this.selectNews(this.tabIndex);
			 
			  setTimeout(function () {
			     uni.stopPullDownRefresh();
			 }, 1000); 
		}
		, */
		onReachBottom:function(){
			console.log("xcvghjk")
		},
		 methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?data=' + e.title
				})
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: (res) => {
						if (res.confirm) {
							this.newsitems[index1].data.splice(index2, 1);
						}
					}
				})
			},
			loadMore(e) {
				this.newsitems[e].loadingType = 1;
				setTimeout(() => {
					this.addData(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingType = 2;
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].data.push(this['data' + Math.floor(Math.random() * 5)]);
				}
				this.newsitems[e].loadingType = 1;
			},
			async changeTab(e) {
				let index = e.detail.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;
	
				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
				await this.selectNews(index);
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select('#' + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				});
			},
			async tapTab(index) { //点击tab-bar
				if (this.tabIndex === index) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = index;
					await this.selectNews(index);
				}
			},
			async selectNews(index){
				this.top_news="";
				
				
				switch (index){//头条
					case 0:
					uni.request({
						url: 'http://39.105.87.0:8000/index?name=toutiao',
						method: 'GET',
						data: {},
						success: res => {
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;
					case 1:
					console.log("zheshisha`````````````````````````````````")
					uni.request({//山东
						url: 'http://39.105.87.0:8000/index?name=shandong',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;
					case 2:
					uni.request({//国内
						url: 'http://39.105.87.0:8000/index?name=guonei',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;
					case 3:
					uni.request({//国际
						url: 'http://39.105.87.0:8000/index?name=guoji',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;	
					case 4:
					uni.request({//娱乐
						url: 'http://39.105.87.0:8000/index?name=yvle',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;	
					case 5:
					uni.request({//电影
						url: 'http://39.105.87.0:8000/index?name=dianying',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;
					case 6:
					uni.request({//航空
						url: 'http://39.105.87.0:8000/index?name=hangkong',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;		
					case 7:
					uni.request({//健康
						url: 'http://39.105.87.0:8000/index?name=jiankang',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;		
					case 8:
					uni.request({//旅游
						url: 'http://39.105.87.0:8000/index?name=lvyou',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;
					case 9:
					uni.request({//教育
						url: 'http://39.105.87.0:8000/index?name=jiaoyv',
						method: 'GET',
						data: {},
						success: res => {
							
							this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					});
						break;		
					default:
						break;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingType: 0,
						data: []
					};
					for (let j = 1; j <= 10; j++) {
						aryItem.data.push(this['data' + Math.floor(Math.random() * 5)]);
					}
					ary.push(aryItem);
				}
				return ary;
			},
			 openInfo(e){
				var url=e.currentTarget.dataset.newsurl;
				var title=e.currentTarget.dataset.title;
				uni.navigateTo({
					url: '../info/info?url='+url+"&title="+title,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			 loading(){
				 var num= this.tabIndex;
				 switch (num){
				 	case 0:
				 		break;
					case 1:
					uni.request({//加载更多
						url: 'http://39.105.87.0:8000/news_Load?url=http://sd.news.163.com/special/04378EMD/yaowenyi_02.js?callback=data_callback&_=1547968546623',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); 
						break;	
					case 2:
					uni.request({//加载更多
						url: 'http://39.105.87.0:8000/news_Load?url=http://temp.163.com/special/00804KVA/cm_guonei_02.js?callback=data_callback',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); 
						break;	
					case 3:
					uni.request({//加载更多
						url: 'http://39.105.87.0:8000/news_Load?url=http://temp.163.com/special/00804KVA/cm_guoji_02.js?callback=data_callback',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); 
						break;		
					case 4:
					/* uni.request({//加载更多
						url: 'http://localhost:8000/news_Load?url=http://temp.163.com/special/00804KVA/cm_guoji_02.js?callback=data_callback',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); */
						break;	
					case 5:
					uni.request({//加载更多
						url: 'http://39.105.87.0:8000/news_Load?url=http://ent.163.com/special/000381Q1/newsdata_movieidx_02.js?callback=data_callback',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); 
						break;		
					case 6:
					uni.request({//加载更多
						url: 'http://39.105.87.0:8000/news_Load?url=http://temp.163.com/special/00804KVA/cm_hangkong_02.js?callback=data_callback&a=2',
						method: 'GET',
						data: {},
						success: res => {
							console.log(res)
							this.top_news=this.top_news.concat(res.data);
							//this.top_news=res.data;
						},
						fail: () => {},
						complete: () => {}
					}); 
						break;					
				 	default:
				 		break;
				 }
			}
		}
	}
</script>

<style>
	 /* #ifdef MP-ALIPAY */
	.swiper-tab-list {
		display: inline-block;
	} 
	/* #endif */
	.uni-tab-bar{
			height: 100%; 
	}
	.uni-media-list-text-top{
		line-height: auto;
		font-size:0.8em ;
	}
	.uni-media-list-body{
	 	height: auto; 
	}
	.btu button{
		height: 3em;
		width: 100%;
	}
	
	 
</style>
