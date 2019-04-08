<template>
	<view class="container">
		<view class="page-body">

			<scroll-view class="nav-left" scroll-y :style="'height:'+height+'px'">
				<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''"
				 v-for="(item,index) in categoryList">
					<view class="nav-left-name" :class="index==categoryActive?'active-border':''">
						<image :src="index==categoryActive?item.selectLogo:item.logo" mode="aspectFit" class="logoImg"></image>
						{{item.NAME}}
					</view>

				</view>
			</scroll-view>
			<scroll-view class="nav-right" scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'"
			 scroll-with-animation>
				<view class="">
					<image class="banner" :src="bannerUrl" mode="aspectFit"></image>
				</view>
				<view class="class-box" v-for="item in categoryList">
					<view class="class-name">{{item.NAME}}</view>
					<view class="nav-item-box">
						<view :id="index1===0?'first':''" class="nav-right-item" v-for="(item,index1) in item.subCategoryList.list" :key="index">
							<image :src="item.LOGO"  class="item-img"/>
							<view class="item-name">{{item.NAME}}</view>
						</view>
					</view>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "left-category",
		props: {
			height: Number
		},
		data() {
			return {

				categoryList: [{

						"NAME": "数码",
						"logo": "/static/image/indexImg/shangcheng/fenlei/shumaweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/shumaxuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类1",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类1",
									"LOGO": "http://placehold.it/50x50"
								},
								{

									"NAME": "分类1",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类1",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "家居",
						"logo": "/static/image/indexImg/shangcheng/fenlei/jiajuweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/jiajuxuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类2",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类2",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "厨房",
						"logo": "/static/image/indexImg/shangcheng/fenlei/chufangweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/chufangxuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "箱包",
						"logo": "/static/image/indexImg/shangcheng/fenlei/xiangbaoweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/xiangbaoxuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类4",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "家电",
						"logo": "/static/image/indexImg/shangcheng/fenlei/jiadianweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/jiadianxuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类4",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "户外",
						"logo": "/static/image/indexImg/shangcheng/fenlei/huwaiweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/huwaixuanzhon.png",
						"subCategoryList": {
							banner: "",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类4",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "家纺",
						"logo": "/static/image/indexImg/shangcheng/fenlei/jiafangweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/jiafangxuanzhon.png",
						"subCategoryList": {
							banner: "",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类4",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					},
					{

						"NAME": "配饰",
						"logo": "/static/image/indexImg/shangcheng/fenlei/peishiweixuanzhon.png",
						"selectLogo": "/static/image/indexImg/shangcheng/fenlei/peishixuanzhon.png",
						"subCategoryList": {
							banner: "/static/image/indexImg/shangcheng/fenlei/banner.png",
							list: [{

									"NAME": "分类3",
									"LOGO": "http://placehold.it/50x50"
								},
								{
									"NAME": "分类4",
									"LOGO": "http://placehold.it/50x50"
								}
							]
						}
					}


				],
				subCategory: [],
				//height: 1000,
				categoryActive: 0,
				scrollTop: 0,
				scrollHeight: 0,
				bannerUrl: ''
			}
		},
		methods: {
			scroll(e) {
				this.scrollHeight = e.detail.scrollHeight;
			},
			categoryClickMain(categroy, index) {
				this.categoryActive = index;
				/* this.bannerUrl = categroy.subCategoryList.banner
				this.subCategory = categroy.subCategoryList.list; */
				this.scrollTop = -this.scrollHeight * index;
			}
			/* ,
						getCategory() {
							for (var i = 1; i < 21; i++) {
								var subList = [];
								for (var j = 1; j < 31; j++) {
									subList.push({
										"NAME": "分类" + i + ":商品" + j,
										"LOGO": "http://placehold.it/50x50"
									})
								}
								this.categoryList.push({
									"NAME": "分类" + i,
									"subCategoryList": subList
								})
							}

						} */
		},
		mounted() {
			this.subCategory = this.categoryList[0].subCategoryList.list;
			this.bannerUrl = this.categoryList[0].subCategoryList.banner;
		},
		onLoad: function() {
			//this.getCategory();
			//this.height = uni.getSystemInfoSync().windowHeight;
		}
	}
</script>

<style>
	.container {
		background: rgb(255, 255, 255);
		color: rgba(51, 51, 51, 1);
		font-weight: 500;
	}

	.page-body {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.nav {
		display: flex;
		width: 100%;
	}

	.nav-left {
		width: 30%;
		padding-top: 10upx;
		border-right: solid 1px rgba(238, 238, 238, 1);
	}

	.nav-left-item {
		width: 100%;
		height: 52upx;
		padding: 24upx 0;
		border-bottom: solid 1px rgba(238, 238, 238, 1);
		;
	}

	.nav-left-name {
		width: 100%;
		text-align: center;
		line-height: 52upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.nav-right {
		padding: 30upx;
		
	}

	.nav-item-box {
		


	}
	
	.nav-right-item {

		width: 30%;
		text-align: center;
		font-weight:500;
		color:rgba(102,102,102,1);
		float: left;
		margin-right: 3%;
		margin-bottom: 20upx;

	}
	.nav-right-item .item-img{
		width: 150upx;
		height: 150upx;
	}
	.item-name{
		
	}
	

	.active {
		color: rgba(196, 156, 90, 1);
		background: rgba(245, 245, 245, 1);
	}

	.active-border {
		background: url("http://ai.ylcaifu.com/appimg/images/1.0-%E5%8F%91%E7%8E%B0/1.5.1-%E5%88%86%E7%B1%BB/android/drawable-xhdpi/xuanzhon.png") no-repeat left center;
		background-size: 6upx 52upx;
	}

	.logoImg {
		width: 30upx;
		height: 30upx;
		margin-right: 10upx;

	}

	.banner {
		width: 530upx;
		height: 170upx;
		border-radius: 5upx;
		margin-bottom: 30upx;
	}

	.class-box {}

	.class-name {
		position: relative;
		font-size: 12px;
		line-height: 60upx;
		font-weight: 500;
		color: rgba(196, 156, 90, 1);
		clear: both;
	}

	.class-name::after {
		width: 80%;
		height: 1px;
		content: '';

		/*CSS伪类用法*/
		position: absolute;
		/*定位背景横线的位置*/
		top: 50%;
		right: 5%;
		background:rgba(238,238,238,1);
		
		/*宽和高做出来的背景横线*/


	}
</style>
