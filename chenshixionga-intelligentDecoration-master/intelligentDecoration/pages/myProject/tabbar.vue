<template>
	<view class="uni-tab-bar">
		<swiper :current="tabIndex" class="swiper-box" duration="300" @change="changeTab" :skip-hidden-item-layout="skipHidden">
			<swiper-item :key="0">
				<base-detail v-if="tabArr[0]" @cus-navigate="setCurrentIndex"></base-detail>
			</swiper-item>
			<swiper-item :key="1">
				<task-list v-if="tabArr[1]"></task-list>
			</swiper-item>
			<swiper-item :key="2">
				<cus-no-data></cus-no-data>
			</swiper-item>
			<swiper-item :key="3">
				<personal-manager v-if="tabArr[3]"></personal-manager>
			</swiper-item>
			<swiper-item :key="4">
				<cus-no-data></cus-no-data>
			</swiper-item>
			<swiper-item :key="5">
				<simple-project-map></simple-project-map>
			</swiper-item>
			<swiper-item :key="6">
				<cus-no-data></cus-no-data>
			</swiper-item>
			<swiper-item :key="7">
				<cus-no-data></cus-no-data>
			</swiper-item>
			<swiper-item :key="8">
				<account-list v-if="tabArr[8]"></account-list>
			</swiper-item>
			<swiper-item :key="9">
				<project-check v-if="tabArr[9]"></project-check>
			</swiper-item>

			<swiper-item :key="10">
				<cus-no-data></cus-no-data>
			</swiper-item>
		</swiper>
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<!-- <view v-for="(tab,index) in tabBars" :key="tab.id" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']" :id="tab.id"
			 :data-current="index" :data-name="tab.name" @tap="tapTab">
			   <text class="def-icon">{{ tab.icon }}</text>
			   <text>{{tab.name}}</text>
			 </view> -->
			<view :class="['swiper-tab-list',tabIndex==0 ? 'active' : '']" id="jichu" :data-current="0" data-name="基础信息" @tap="tapTab">
				<text class="def-icon">&#xe66e;</text>
				<text>基础信息</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==1 ? 'active' : '']" id="renwu" :data-current="1" data-name="任务列表" @tap="tapTab">
				<text class="def-icon">&#xe644;</text>
				<text>任务列表</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==2 ? 'active' : '']" id="tuwen" :data-current="2" data-name="图文日志" @tap="tapTab">
				<text class="def-icon">&#xe689;</text>
				<text>图文日志</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==3 ? 'active' : '']" id="rengong" :data-current="3" data-name="人工管理" @tap="tapTab">
				<text class="def-icon">&#xe609;</text>
				<text>人工管理</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==4 ? 'active' : '']" id="cailiao" :data-current="4" data-name="材料列表" @tap="tapTab">
				<text class="def-icon">&#xe67c;</text>
				<text>材料列表</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==5 ? 'active' : '']" id="ditu" :data-current="5" data-name="项目地图" @tap="tapTab">
				<text class="def-icon">&#xe734;</text>
				<text>项目地图</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==6 ? 'active' : '']" id="dongtai" :data-current="6" data-name="评论列表" @tap="tapTab">
				<text class="def-icon">&#xe891;</text>
				<text>评论列表</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==7 ? 'active' : '']" id="guifang" :data-current="7" data-name="施工规范" @tap="tapTab">
				<text class="def-icon">&#xe6ca;</text>
				<text>施工规范</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==8 ? 'active' : '']" id="jiesuan" :data-current="8" data-name="结算信息" @tap="tapTab">
				<text class="def-icon">&#xe678;</text>
				<text>结算信息</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==9 ? 'active' : '']" id="yanshou" :data-current="9" data-name="项目验收" @tap="tapTab">
				<text class="def-icon">&#xe647;</text>
				<text>项目验收</text>
			</view>
			<view :class="['swiper-tab-list',tabIndex==10 ? 'active' : '']" id="kesu" :data-current="10" data-name="客诉列表" @tap="tapTab">
				<text class="def-icon">&#xe66e;</text>
				<text>客诉列表</text>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	import baseDetail from './projectDetail/baseDetail'
	import taskList from './projectDetail/taskList'
	import projectCheck from './projectDetail/projectCheck'
	import accountList from './projectDetail/accountList'
	import personalManager from './projectDetail/personalManager'
	import  simpleProjectMap from './projectDetail/simpleProjectMap'
	export default {
		components: {
			baseDetail,
			taskList,
			projectCheck,
			accountList,
			personalManager,
			simpleProjectMap
		},
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				skipHidden: true,
				tabArr: [false, false, false, false, false, false, false, false, false, false, false, false],
				tabBars: [{
					name: '基础信息',
					id: 'jichu',
				}, {
					name: '任务列表',
					id: 'renwu',
				}, {
					name: '图文日志',
					id: 'tuwen',
				}, {
					name: '人工管理',
					id: 'rengong',
				}, {
					name: '材料列表',
					id: 'cailiao',
				}, {
					name: '项目地图',
					id: 'ditu',
				}, {
					name: '评论列表',
					id: 'dongtai',
				}, {
					name: '施工规范',
					id: 'guifang',
				}, {
					name: '结算信息',
					id: 'jiesuan',
				}, {
					name: '项目验收',
					id: 'yanshou',
				}, {
					name: '客诉列表',
					id: 'kesu',
				}, {
					name: '预留页',
					id: 'yuliu',
				}]
			}
		},
		onLoad: function(param) {
			this.tabIndex = param.index
			this.tabArr[this.tabIndex] = true
		},
		methods: {
			setCurrentIndex(index) {
				this.tabIndex = index
				this.tabArr[this.tabIndex] = true
			},
			async changeTab(e) {
				let index = e.target.current;
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
				uni.setNavigationBarTitle({
					title: this.tabBars[index].name
				})
				this.tabArr[this.tabIndex] = true
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				if (this.tabIndex === e.target.dataset.current) {
					return false;
				} else {
					console.log('')
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = e.currentTarget.dataset.current;
					uni.setNavigationBarTitle({
						title: e.currentTarget.dataset.name
					})
					this.tabArr[this.tabIndex] = true
				}
			}
		}
	}
</script>

<style>
	.uni-tab-bar .swiper-box {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: #efeff4;
	}

	.uni-swiper-tab {
		border-top: 1px solid #c8c7cc;
		border-bottom: none;
		background-color: #FFFFFF;
	}

	.swiper-tab-list text:nth-child(1) {
		font-size: 40upx;
		display: block;
		margin: -6upx 0 -20upx;
	}

	.swiper-tab-list text:nth-child(2) {
		font-size: 26upx;
	}
</style>
