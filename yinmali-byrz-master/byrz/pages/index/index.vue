<template>
	<view class="content">
		<view class="fml-head-show">
			<swiper class="swiper" indicator-color="#fff" indicator-active-color="#1f73f3" :indicator-dots="true" :autoplay="true"
			 :circular="true">
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/images/banner/banner1.jpg"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/images/banner/banner2.jpg"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="fml-quick-entry fml-flex">
				<view class="quick-icon fml-flex fml-flex-vertical flex-1" @click="gotoClass('zz')">
					<image src="../../static/images/icon/zzrz.png"></image>
					<text>资质认证</text>
				</view>
				<view class="quick-icon fml-flex fml-flex-vertical flex-1" @click="gotoClass('tx')">
					<image src="../../static/images/icon/txrz.png"></image>
					<text>体系认证</text>
				</view>
				<view class="quick-icon fml-flex fml-flex-vertical flex-1" @click="gotoClass('zh')">
					<image src="../../static/images/icon/zhfw.png"></image>
					<text>综合服务</text>
				</view>

			</view>
		</view>
		<view class="fml-hot-person border-b">
			<view class="fml-title">热门资质</view>
			<view class="fml-hot-box">
				<view class="fml-flex">
					<view class="hot-bg flex-1 fml-flex fml-flex-vertical" >
						<view>信息系统集成及服务资质</view>
						<view class="hot-money">¥12000起</view>
					</view>
					<view class="hot-bg flex-1 fml-flex fml-flex-vertical">
						<view>信息安全服务资质</view>
						<view class="hot-money">¥20000起</view>
					</view>
				</view>
				<view class="fml-flex">
					<view class="hot-bg flex-1 fml-flex fml-flex-vertical">
						<view>军工涉密资质</view>
						<view class="hot-money">¥35000起</view>
					</view>
					<view class="hot-bg flex-1 fml-flex fml-flex-vertical">
						<view>高新技术企业</view>
						<view class="hot-money">¥20000起</view>
					</view>
				</view>
			</view>
		</view>
		<view class="fml-hot-system border-b ">
			<view class="fml-title">热门体系</view>
			<view class="fml-hot-box fml-flex margin10">
				<navigator class="system-icon flex-1 text-center" url="../ISO9001/ISO9001">
					<image src="../../static/images/service/iso9001.png"></image>
					<view class="hot-money color-black">¥7000起</view>
				</navigator>
				<navigator class="system-icon flex-1 text-center" url="../ISO20000/ISO20000">
					<image src="../../static/images/service/iso20000.png"></image>
					<view class="hot-money color-black">¥25000起</view>
				</navigator>
				<navigator class="system-icon flex-1 text-center" url="../ISO27001/ISO27001">
					<image src="../../static/images/service/iso27001.png"></image>
					<view class="hot-money color-black">¥25000起</view>
				</navigator>
			</view>
		</view>
		<view class="fml-hot-person border-b">
			<view class="fml-title">热门综合</view>
			<view class="fml-hot-box">
				<view class="fml-flex">
					<view class="hot-bg  flex-1 fml-flex fml-flex-vertical">
						<view>软件著作权</view>
						<view class="hot-money">¥2000起</view>
					</view>
					<view class="hot-bg  flex-1 fml-flex fml-flex-vertical">
						<view>软件测试报告</view>
						<view class="hot-money">¥2500起</view>
					</view>
				</view>
				<view class="fml-flex">
					<view class="hot-bg  flex-1 fml-flex fml-flex-vertical">
						<view>商标</view>
						<view class="hot-money">¥1000起</view>
					</view>
					<view class="hot-bg  flex-1 fml-flex fml-flex-vertical">
						<view>发明专利</view>
						<view class="hot-money">¥4800起</view>
					</view>
				</view>
			</view>
		</view>

		<view class="fml-hot-person border-b">
			<view class="fml-title">热门许可</view>
			<view class="fml-hot-box fml-flex">
				<view class="hot-bg hot-allow fml-flex fml-flex-vertical flex-1">
					<view class="color-white">ICP经营许可证</view>
					<view class="hot-money color-white">¥17000起</view>
				</view>
				<view class="hot-bg mt20 hot-allow fml-flex fml-flex-vertical flex-1">
					<view class="color-white">网络文化经营许可证</view>
					<view class="hot-money color-white">¥2000起</view>
				</view>
			</view>
		</view>
		<view class="fml-hot-person border-b">
			<view class="fml-title">热门人员</view>
			<view class="fml-hot-box fml-flex">
				<view class="hot-bg hot-person fml-flex fml-flex-vertical flex-1">
					<view class="color-white">信息系统集成项目经理</view>
					<view class="hot-money color-white">¥300起</view>
				</view>
				<view class="hot-bg mt20 hot-person fml-flex fml-flex-vertical flex-1">
					<view class="color-white">信息安全保障人员认证证书</view>
					<view class="hot-money color-white">¥7880起</view>
				</view>
			</view>
		</view>
		<view class="fml-hot-person">
			<view class="fml-title">部分成功案例</view>
			<view class="fml-flex hot-case margin10 mt20">
				<image src="../../static/images/case/1.jpg" class="flex-1"></image>
				<image src="../../static/images/case/2.png" class="flex-1"></image>
				<image src="../../static/images/case/3.png" class="flex-1"></image>
			</view>
			<view class="text-center margin10" style="margin-bottom: 50upx;margin-top:50upx;">
				如需了解更多请前往我们的网站
				<text>http://www.boyanrenzheng.com/</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			gotoClass(item) {
				uni.setStorageSync('classify',item)
				uni.switchTab({
					url:'/pages/classify/classify'
				})
			}
		}
	}
</script>

<style>
	@import '../../public.css';

	image {
		width: 100upx;
		height: 100upx;
	}

	.margin10 {
		margin: 10upx;
	}

	.hot-bg.mt20,
	.hot-case.mt20 {
		margin-top: 20upx;
	}

	.fml-hot-box {
		padding: 10upx;
		/* background:#EDF2FF */
	}

	.border-b {
		border-bottom: 10upx solid #f5f9fc;
	}

	.hot-bg {
		margin: 10upx;
		height: 120upx;
		border-radius: 8upx;
		box-shadow: 0px 0px 40upx 0px rgba(28, 102, 255, 0.1);
		border-left: 8upx solid #45d7c3;
		background: #fff;
		padding: 10upx;
	}

	.hot-person {
		height: 150upx;
		border: none;
		background: linear-gradient(#1f73f3, #0396ff, #abdcff);
	}

	.hot-allow {
		height: 150upx;
		border: none;
		background: linear-gradient(#45d7c3, #32ccbc, #9df7ec);
	}

	.hot-money {
		color: #45d7c3;
		padding-top: 10upx;
		font-weight: 800;
	}

	.hot-case image {
		height: 280upx;
	}

	.swiper-item image {
		width: 769upx;
		max-width: 100%;
		height: 312upx;
	}

	.quick-icon {
		font-size: 25upx;
		color: #333;
	}

	.quick-icon image {
		width: 70upx;
		height: 70upx;
		margin-bottom: 8upx;
	}

	.fml-quick-entry {
		padding: 20upx 0;
		border-bottom: 10upx solid #f5f9fc;
	}

	.fml-title {
		font-size: 28upx;
		color: #333;
		border-bottom: 1px solid #f5f9fc;
		padding: 10upx;
	}

	.color-black {
		color: #333333;
		font-weight: normal;
	}

	.color-white {
		color: #fff;
		font-weight: normal;
	}
</style>
