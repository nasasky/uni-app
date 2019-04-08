<template>
	<view class="content">
		<view class="header"><image src="../../../static/login/logo.png"></image></view>
		<view class="list">
			<view class="list-call">
				<image class="img" src="../../../static/login/1.png"></image>
				<input class="biaoti" v-model="userName" type="text" placeholder="输入用户名" />
			</view>
			<view class="list-call">
				<image class="img" src="../../../static/login/2.png"></image>
				<input
					class="biaoti"
					v-model="password"
					type="text"
					placeholder="输入密码"
					password="true"
				/>
			</view>
		</view>

		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>

		<view class="xieyi">
			<navigator url="../home/home" open-type="navigate">忘记密码</navigator>
			<text>|</text>
			<navigator url="reg" open-type="navigate">注册账户</navigator>
		</view>
	</view>
</template>

<script>
var _self;
import url from '../../common/url.js';
import { mapMutations } from 'vuex';
export default {
	onLoad() {
		_self = this;
	},
	data() {
		return {
			userName: '',
			password: '',
			takeInfo: {}
		};
	},
	methods: {
		...mapMutations(['login']),
		bindLogin() {
			if (_self.userName.length == '') {
				uni.showToast({
					icon: 'none',
					title: '请输入用户名'
				});
				return;
			}
			if (_self.password.length == '') {
				uni.showToast({
					icon: 'none',
					title: '请输入正确的密码'
				});
				return;
			}
			uni.request({
				url: url.businessSite + 'login',
				data: {
					userName: _self.userName,
					password: _self.password
				},
				dataType: 'json',
				method: 'POST',
				success: res => {
					console.log(JSON.stringify(res.data));
					if (res.data.code == '-1') {
						uni.showToast({
							title: '用户不存在！请重新输入',
							icon: 'none',
							duration: 2000
						});
					} else {
						uni.request({
							url: url.businessSite + 'get_info',
							data: {
								Token: res.data.token
							},
							method: 'GET',
							dataType: 'json',
							success: response => {
								console.log(JSON.stringify(response.data));
								_self.takeInfo = response.data;
								var name = _self.takeInfo.name;
								var user_id = _self.takeInfo.user_id;
								var displayname = _self.takeInfo.displayname;
								// 全局同步缓存
								try {
									uni.setStorage(
										{
											key: 'nameStorage',
											data: name
										},
										{
											key: 'idStorage',
											data: user_id
										},
										{
											key: 'displaynameStorage',
											data: displayname
										}
									);
								} catch (e) {
									console.log(e);
								}
							}
						});
						uni.navigateTo({
							url: '../index/index'
						});
					}
				}
			});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
}
.header {
	width: 161upx;
	height: 161upx;
	background: rgba(63, 205, 235, 1);
	box-shadow: 0upx 12upx 13upx 0upx rgba(63, 205, 235, 0.47);
	border-radius: 50%;
	margin-top: 30upx;
	margin-left: auto;
	margin-right: auto;
}
.header image {
	width: 161upx;
	height: 161upx;
	border-radius: 50%;
}

.list {
	display: flex;
	flex-direction: column;
	padding-top: 50upx;
	padding-left: 70upx;
	padding-right: 70upx;
}
.list-call {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 100upx;
	color: #333333;
	border-bottom: 1upx solid rgba(230, 230, 230, 1);
}
.list-call .img {
	width: 40upx;
	height: 40upx;
}
.list-call .biaoti {
	flex: 1;
	text-align: left;
	font-size: 32upx;
	line-height: 100upx;
	margin-left: 16upx;
}

.dlbutton {
	color: #ffffff;
	font-size: 34upx;
	width: 470upx;
	height: 100upx;
	background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
	box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
	border-radius: 50upx;
	line-height: 100upx;
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100upx;
}
.dlbutton-hover {
	background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9));
}
.xieyi {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 30upx;
	margin-top: 80upx;
	color: #ffa800;
	text-align: center;
	height: 40upx;
	line-height: 40upx;
}
.xieyi text {
	font-size: 24upx;
	margin-left: 15upx;
	margin-right: 15upx;
}
</style>
