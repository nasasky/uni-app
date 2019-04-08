<template>
	<view class="content">
		<view class="person-bg fml-flex fml-flex-vertical">
			<view class="person-img">
				<!-- #ifdef MP-WEIXIN -->
				<open-data class="img-logo" type="userAvatarUrl"></open-data>
				<!-- #endif -->

				<!-- #ifdef MP-ALIPAY -->
				<image :src="userInfo.alipayImg" class="img-logo" style="width:160upx;height: 160upx;"></image>
				<!-- #endif -->

				<!-- #ifdef MP-BAIDU -->
				<image :src="userInfo.alipayImg" class="img-logo" style="width:160upx;height: 160upx;"></image>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<image :src="userInfo.alipayImg" class="img-logo" style="width:160upx;height: 160upx;"></image>
				<!-- #endif -->
			</view>
			<!-- #ifdef  MP-WEIXIN  -->
			<open-data class="person-name" type="userNickName"></open-data>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<view class="person-name">{{userInfo.alipayName}}</view>
			<!-- #endif -->
			<!-- #ifdef MP-BAIDU -->
			<view class="person-name">{{userInfo.alipayName}}</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="person-name">{{userInfo.alipayName}}</view>
			<!-- #endif -->
		</view>
		<view class="person-welcome fml-flex fml-flex-vertical">
			<view class="triangle-info">
				<view class="icon-triangle">
					<view></view>
				</view>
			</view>
			<view>Hi! 我是您身边<text class="color-blue"> 专业认证 </text>服务公司</view>
			<view>点击下方<text class="color-blue"> 联系我们 </text>，即可获取你想要的信息哦</view>
		</view>
		<navigator url="../contact/contact" open-type="switchTab" class="fml-flex">
			<view class="contact-info  info-class flex-1">联系我们</view>
		</navigator>
		<navigator url="../classify/classify" open-type="switchTab" class="fml-flex">
			<view class="contact-info flex-1">查看认证分类</view>
		</navigator>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userInfo: {
					alipayImg: '../../static/images/icon/person-selected.png',
					alipayName: '博研认证'
				}
			}
		},
		onShareAppMessage(res) {
			return {
				title: '安徽博研认证',
				path: '/pages/index/index'
			}
		},
		onLoad() {
			// #ifdef  MP-ALIPAY 	
			this.getUserInfo('alipay')
			// #endif
			// #ifdef MP-BAIDU
			this.getUserInfo('baidu')
			// #endif
		},
		methods: {
			getUserInfo(provider) {
				if (uni.getStorageSync('userInfo')) {
					this.userInfo = uni.getStorageSync('userInfo')
					return
				}
				let that = this
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						if (~res.provider.indexOf(provider)) {
							uni.login({
								provider: provider,
								scopes: 'auth_user',
								success: function(loginRes) {
									uni.getUserInfo({
										provider: provider,
										success: function(infoRes) {
											that.userInfo = {
												alipayImg: infoRes.userInfo.avatarUrl,
												alipayName: infoRes.userInfo.nickName
											}
											uni.setStorageSync('userInfo', {
												alipayImg: infoRes.userInfo.avatarUrl,
												alipayName: infoRes.userInfo.nickName
											})
										},
										fail: function(err) {
											console.log(err)
										}
									});
								},
								fail: function(err) {
									console.log(err)
								}
							});
						}
					}
				});

			}
		}
	}
</script>

<style>
	@import '../../public.css';

	.triangle-info {
		position: absolute;
		top: -30upx;
	}

	.contact-info {
		margin: 30upx;
		padding: 20upx;
		color: #fff;
		text-align: center;
		font-size: 32upx;
		border-radius: 30upx;
		background: linear-gradient(top left, #1f73f3, #0396ff);
		box-shadow: 0px 0px 40upx 0px rgba(28, 102, 255, 0.3);

	}

	.info-class {
		background: linear-gradient(top left, #45d7c3, #32ccbc);
		box-shadow: 0px 0px 40upx 0px rgba(28, 102, 255, 0.3);

	}

	.icon-triangle {
		width: 0;
		height: 0;
		border-left: 30upx solid transparent;
		border-right: 30upx solid transparent;
		border-bottom: 30upx solid #45D7C3;
		position: relative;
	}

	.icon-triangle view {
		display: block;
		width: 0;
		height: 0;
		border-left: 28upx solid transparent;
		border-right: 28upx solid transparent;
		border-bottom: 28upx solid #fff;
		position: absolute;
		left: -28upx;
		top: 1px;
	}


	.person-welcome {
		border: 1px solid #45D7C3;
		border-radius: 6upx;
		text-align: center;
		padding: 20upx;
		margin: 120upx 30upx 100upx 30upx;
		font-size: 32upx;
		color: #333;
		position: relative;
		box-shadow: 0px 0px 20upx 0px rgba(28, 102, 255, 0.3);

	}

	.color-blue {
		color: #1F73F3;
		margin: 20upx 0;
	}

	.person-img {
		box-shadow: 0px 0px 40upx 0px rgba(28, 102, 255, 0.6);
		background: #fff;
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		position: absolute;
		bottom: -80upx;
		overflow: hidden;
		border: 2px solid #fff;

	}

	.person-name {
		color: #fdeb71;
		font-size: 35upx;
	}

	.person-bg {
		background: linear-gradient(#1f73f3, #0396ff, #abdcff);
		height: 260upx;
		position: relative;
	}


	.img-logo {
		border-radius: 40%;

	}
</style>
