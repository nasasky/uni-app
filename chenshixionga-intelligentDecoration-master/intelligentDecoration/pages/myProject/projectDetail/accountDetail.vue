<template>
	<view class="content">
		<view class="base-info">
			<view class="line-item">
				<text>项目名称</text>
				<text>{{account.hard_name}}</text>
			</view>
			<view class="line-item">
				<text>结算名称</text>
				<text>{{account.name}}</text>
			</view>
			<view class="line-item">
				<text>客户名称</text>
				<text>{{account.partner_name}}</text>
			</view>
			<view class="line-item">
				<text>客户手机</text>
				<text>{{account.partner_mobile}}</text>
			</view>
			<view class="line-item">
				<text>结算日期</text>
				<text>{{account.settle_date}}</text>
			</view>
			<view class="line-item">
				<text>结算总额</text>
				<text>{{account.amount_total}}</text>
			</view>
			<view class="line-item">
				<text>已交定金</text>
				<text>{{account.payment_total}}</text>
			</view>
			<view class="line-item">
				<text>未收金额</text>
				<text>{{account.amount_unreceived}}</text>
			</view>
			<view class="line-item-state">
				<text>结算状态</text>
				<text :class="[ account.state === 'proved' ? 'cus-complete-green' : 'cus-danger' ]">{{ accountType[account.state] }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		accountType
	} from '@/common/stateData.js'
	export default {
		data() {
			return {
				accountType: accountType,
				account: {}
			}
		},
		onLoad(param) {
			this.getAccountDetail(parseInt(param.id))
		},
		methods: {
			getAccountDetail(id) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_get_hard_settle',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						settle_id: id
					},
					success: res => {
						console.log(res)
						this.account = res.data.data.info
						console.log(this.account)
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.content{
		padding: 0;
	}
	.base-info {
		margin-top: 20upx;
		background-color: white;
		padding: 20upx 40upx;
	}
	
		
	.base-info text:nth-child(1) {
		display: block;
		padding-bottom: 20upx;
	}
	
	.line-item-state,
	.line-item {
		display: flex;
		justify-content: space-between;
		line-height: 60upx;
		height: 60upx;
	}
	
	.line-item text:nth-child(2) {
		color: #999999;
	}
	
	.check-standard {
		display: flex;
	}
	
	.check-standard text:nth-child(1) {
		display: block;
		min-width: 140upx;
	}
</style>
