<template>
	<view class="content" @touchstart="touchStart" @touchend="touchEnd">
		<view v-for="pro in projects" :key="pro.id" class="project-list" :class="{'project-list-last': index === projects.length-1}"
		 @click="navigateProjectDirection(pro.id)">
			<view class="project-list-title">
				<text>{{pro.hard_name}}</text>
				<text>{{projectState[pro.state]}}</text>
			</view>
			<view class="project-list-time">
				<text>{{pro.start_date}}</text>
				<text>{{pro.end_date}}</text>
			</view>
			<view class="project-list-progress">
				<progress percent="40" stroke-width="10" active activeColor="#f6c237" background-color="#fcf0d1" />
			</view>
			<view class="dash-line"></view>
			<view class="project-manager-info">
				<text class="project-manager-mark">{{pro.manager !== null ? pro.manager : "姓"}}</text>
				<view class="project-manager-name">
					<text>{{pro.manager}}</text>
					<text>项目经理</text>
				</view>
				<text class="project-manager-customer">{{pro.customer}}</text>
			</view>
		</view>
		<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
	</view>
</template>

<script>
	import {
		projectState
	} from '@/common/stateData.js'
	export default {
		data() {
			return {
				dataParams: {
					searce_key: "",
					page_no: 1,
					page_size: 10,
				},
				projects: [],
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				startPageX: 0,
				startPageY: 0,
				projectState: projectState
			};
		},
		onLoad() {
			this.getProjectList()
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.dataParams.page_no++
			this.loadingType = 1
			uni.request({
				url: this.$store.state.baseUrl + '/lwj/get_app_hard_list',
				method: 'POST',
				header: {
					token: this.$store.state.token
				},
				data: this.dataParams,
				success: res => {
					this.projects.push(...res.data.data.list)
					if (res.data.data.list.length < this.dataParams.page_size) {
						this.loadingType = 2
					} else {
						this.loadingType = 0
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			touchStart(event) {
				this.startPageX = event.pageX
				this.startPageY = event.pageY
			},
			touchEnd(event) {
				if (event.mp.changedTouches[0].pageX - this.startPageX > 60 && this.startPageY - event.mp.changedTouches[0].pageY <
					10) {
					console.log('1')
					uni.navigateBack({
						delta: 1
					});
				}
			},
			getProjectList() {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_hard_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						this.projects = res.data.data.list
						uni.hideLoading()
						if (res.data.data.list.length < this.dataParams.page_size) {
							this.loadingType = 2
						} else {
							this.loadingType = 0
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			navigateProjectDirection(id) {
				uni.navigateTo({
					url: './projectDir?id=' + id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.content {
		padding-top: 0;
	}

	.project-list {
		background-color: #FFFFFF;
		border-radius: 20upx;
		padding: 30upx;
		margin-top: 15upx;
	}

	.project-list-last {
		margin-bottom: 30upx;
	}

	.dash-line {
		margin: 40upx -20upx 20upx;
		border-top: 2upx dashed #eeeeee;
	}

	.project-manager-mark {
		display: inline-block;
		width: 70upx;
		height: 70upx;
		line-height: 70upx;
		background-color: #008ff3;
		border-radius: 50%;
		text-align: center;
		font-size: 40upx;
		color: #FFFFFF;
		overflow: hidden;
	}

	.project-manager-name {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-left: 20upx;
	}

	.project-manager-name text:nth-child(1) {
		font-size: 30upx;
		font-weight: bold;
	}

	.project-manager-name text:nth-child(2) {
		color: #999999;
		font-size: 24upx;
	}

	.project-manager-info {
		display: flex;
		align-items: center;
	}

	.project-manager-customer {
		line-height: 40upx;
		height: 40upx;
		padding: 6upx 20upx;
		background-color: #f4f4f4;
		border-radius: 6upx;
		color: #999999;
	}

	.project-list-title,
	.project-list-time {
		display: flex;
		justify-content: space-between;
	}

	.project-list-time {
		color: #999999;
	}

	.project-list-title {
		margin-bottom: 10upx;
	}

	.project-list-title text:nth-child(1) {
		font-size: 40upx;
	}

	.project-list-title text:nth-child(2) {
		font-size: 30upx;
		color: #fe3b35;
		height: 40upx;
		line-height: 40upx;
		background-color: #feeeee;
		align-self: center;
		padding: 6upx 20upx;
		border-radius: 6upx;
	}
</style>
