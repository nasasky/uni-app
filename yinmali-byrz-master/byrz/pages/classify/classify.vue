<template>
	<view class="content fml-flex">
		<view class="class-menu" :style="{height:height}">
			<view class="fml-flex flex-1 menu-title" :class="{'active':state=='zz'}" @click="classHandle('zz')">
				<image src="../../static/images/icon/zzrz.png"></image>
				<view>资质认证</view>
			</view>
			<view class="fml-flex flex-1 menu-title" :class="{'active':state=='tx'}" @click="classHandle('tx')">
				<image src="../../static/images/icon/txrz.png"></image>
				<view>体系认证</view>
			</view>
			<view class="fml-flex flex-1 menu-title" :class="{'active':state=='zh'}" @click="classHandle('zh')">
				<image src="../../static/images/icon/zhfw.png"></image>
				<view>综合服务</view>
			</view>
		</view>
		<view class="class-detail flex-1 text-center   animated fadeInRight">
			<view class="detail-info  " v-for="(item, index) in classList" :key="item">
				<view class="info-list">{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	let data = {
		'zz': [
			'AAA级信用企业', '中国绿色环保产品', '中国高新技术企业',
			'中国著名品牌', 'AAA级资信等级企业', 'AAA级信用等级企业',
			'企业信用资信等级AAA级', '安全生产标准化生产企业',
			'AAA级重合同守信用企业','AAA级质量、服务诚信单位',      
			'AAA级重服务守信用单位','AAA级诚信经营示范单位','政府采购优秀供应商',
			'全国质量信得过产品','中国著名品牌','全国餐饮行业最具竞争力百强企业'
		],
		'zh': [
			'软件著作权', '软件测试报告', '软件产品登记', 
			'发明专利','公司网站建设','企业小程序建设'
		],
		'tx': [
			'ISO9001 质量管理体系', 'ISO14001 环境管理体系', 'OHSAS18001 职业健康安全管理体系',
			'ISO13485 医疗器械质量体系', 'ISO20000 信息技术服务管理体系', 'ISO27000 信息安全管理体系',
			'ISO22000食品认证', 'HACCP 危害分析和关键控制点体系', 'GB/T50430工程建筑施工企业质量规范认证',
			'HSE健康、安全与环境管理体系', '五星售后服务体系认证', '五星品牌认证', '有机产品认证'
		]
	}
	export default {
		data() {
			return {
				classList: [],
				height: '100%',
				state: 'zz'
			}
		},
		
		onLoad() {
			this.getPhoneH()
		},
		onShow(){
			let state=uni.getStorageSync('classify')||'zz'
			this.classHandle(state)
		},
		methods: {
			getPhoneH() {
				let that = this
				uni.getSystemInfo({
					success: function(res) {
						that.height = uni.upx2px(res.windowHeight * 2) + 'px'
					}
				});
			},
			classHandle(item) {
				this.state = item
				this.classList = data[item]
			}
		}
	}
</script>

<style>
	@import '../../public.css';
	.content.fml-flex {
		align-items: flex-start;
	}

	.detail-info {
		padding: 12upx;
		background: #fff;
		margin: 30upx 0;
		border-radius: 6upx;
	}

	.class-detail {
		margin-right: 40upx;
		overflow: hidden;
		margin-left: 270upx;

	}

	.info-list {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	page {
		background: #f5f9fc;
	}

	.class-menu {
		background: #fff;
		margin-right: 40rpx;
		width: 240upx;
		position: fixed;
		top: 0;
		left: 0;
	}

	.menu-title {
		padding: 30upx;
		border-bottom: 1px solid #f5f9fc
	}

	.menu-title.active {
		background: #f5f9fc
	}


	image {
		width: 30upx;
		height: 30upx;
		margin-right: 15upx;
	}



</style>
