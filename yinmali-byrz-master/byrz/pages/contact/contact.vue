<template>
	<view class="content">
		<view class="border-b margin10 fml-contact animated fadeInRight" :style="{height:height}">
			<view class="fml-logo-title text-center">安徽博研认证有限公司</view>
			<view class="text-center fml-info">
				<view class="color-green">博研认证坐落于安徽省合肥市瑶海区内，是一家拥有高水平专职团队的公司，组织架构健全，管理机制完善。</view>
				<view class="color-blue">切实可行的操作流程，确保了认证工作公正、公平、公开、权威、可靠的进行。</view>
				博研认证的宗旨是树立企业标杆，行业提高整体服务水平，促进企业转变经营模式，形成以服务促销售，以销售促生产，以质量求效益的良好经营机制
			</view>

			<view class="fml-contact-info">
				<view class="fml-flex">
					<view class="color-green">联系电话</view>
					<view class="text-left flex-1">杨老师：15665601700</view>
					<view class="fml-call" @click="callHanlde('15665601700')">电话咨询</view>
				</view>
				<view class="fml-flex">
					<view class="color-green">全国热线</view>
					<view class="text-left flex-1">0551-65616680</view>
					<view class="fml-call" @click="callHanlde('0551-65616680')">电话咨询</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view class="fml-flex">
					<view class="color-green">微信服务</view>
					<view class="text-left flex-1">15665601700  15855183590</view>
				</view>
				<!-- #endif -->
				<view class="fml-flex" @click="getLocation">
					<view class="color-green">总部地址</view>
					<view class="text-left flex-1">中国合肥瑶海区站前路宝文商务大厦2002室</view>
					<view class="fml-more" style="text-align: right;"> >> </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				height: '100%'
			}
		},
		onShareAppMessage(res) {
			return {
				title: '安徽博研认证',
				path: '/pages/index/index'
			}
		},
		onLoad() {
			this.getPhoneH()
		},
		methods: {
			// 电话质询
			callHanlde(phone) {
				uni.makePhoneCall({
					phoneNumber: phone //仅为示例
				});
			},
			// 获取屏幕高
			getPhoneH() {
				let that = this
				uni.getSystemInfo({
					success: function(res) {
						that.height = uni.upx2px(res.windowHeight * 2 - 120) + 'px'
					}
				});
			},
			// 查看地理位置
			getLocation() {
				uni.openLocation({
					latitude: 31.8851390000,
					longitude: 117.3116990000,
					success: function() {

					}
				});
			}
		}
	}
</script>

<style>
	@import '../../public.css';

	page {
		background: linear-gradient(top, #1f73f3, #0396ff);
		height: 100%;
	}
	view{
		color: #fff;
	}
	view.fml-call {
		border-radius: 8upx;
		padding: 6upx;
		border: 1px solid #fff;
		color: #45D7C3;
		font-size: 25upx;
	}

	.fml-more {
		width: 80upx;
	}

	.fml-contact-info {
		margin: 100upx 20rpx 30upx 20upx;
	}

	.fml-contact-info .color-green {
		margin-right: 30upx;
	}

	.fml-contact-info .fml-flex {
		margin: 30upx 0
	}

	.fml-logo-title {
		color: #fdeb71;
		font-size: 40upx;
		margin: 60upx 20upx 40upx 20upx;
	}

	.fml-contact {
		position: fixed;
		margin: 60upx;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 16upx;
	}

	.fml-info {
		margin: 20upx;
	}

	.color-green {
		color: #45d8c3;
	}

	.color-blue {
		color: #95d75d;
		margin: 20upx 0;
	}

	.fml-title {
		font-size: 28upx;
		color: #333;
		border-bottom: 1px solid #f5f9fc;
		padding: 10upx;
	}
	image {
		width: 100upx;
		height: 100upx;
	}
	.text-left {
		text-align: left;
	}

	
</style>
