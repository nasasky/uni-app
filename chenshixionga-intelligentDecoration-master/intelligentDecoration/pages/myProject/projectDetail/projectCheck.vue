<template>
	<view class="check-content">
		<view v-for="pro in projects" :key="pro.id" class="project-list" @click="goDetail(pro.id)">
			<view class="project-list-title">
				<text>{{pro.check_name}}</text>
				<text :class="[ pro.state === 'pcheck' ? 'cus-complete-green' : 'cus-danger' ]">{{checkState[pro.state]}}</text>
			</view>
			<view class="project-list-time">
				<text>验收人员</text>
				<text>{{pro.check_man}}</text>
			</view>
			<view class="project-list-time">
				<text>验收时间</text>
				<text>{{pro.check_date}}</text>
			</view>
			<view class="project-list-time">
				<text>验收意见</text>
				<text>{{pro.result}}</text>
			</view>
		</view>
		<uni-load-more v-if="projects.length != 0" :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		<view v-if="noData" class="cus-no-data">
			<text class="def-icon">&#xe64b;</text>
			<text> 暂 无 数 据 . . . </text>
		</view>
	</view>
</template>

<script>
	import {
		checkState
	} from '@/common/stateData.js'
	export default {
		data() {
			return {
				dataParams: {
					hard_id: '',
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
				checkState: checkState,
				noData: false
			};
		},
		onLoad(param) {
			this.dataParams.hard_id = param.id
			this.getProjectCheck()
			this.$eventBus.$on("check-state-change", () => {
				this.getProjectCheck()
			})
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.dataParams.page_no++
			this.loadingType = 1
			uni.request({
				url: this.$store.state.baseUrl + '/lwj/app_check_table_search',
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
			goDetail(id) {
				uni.navigateTo({
					url: './projectDetail/checkDetail?id='+id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			checkPass(obj) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_check_table_done',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						check_id: obj.id,
						acceptor_id: this.$store.state.uid,
						result: obj.result
					},
					success: res => {
						if (res.data.data.code === 1) {
							obj.state = 'pcheck'
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			checkNoPass(obj) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_check_table_rejected',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						check_id: obj.id,
						acceptor_id: this.$store.state.uid,
						result: obj.result
					},
					success: res => {
						if (res.data.data.code === 1) {
							obj.state = 'rcheck'
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getProjectCheck() {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_check_table_search',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						this.projects = res.data.data.list
						if (res.data.data.list.length === 0) {
							this.noData = true
						}
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
			}
		}
	}
</script>

<style>
	.check-content {
		padding: 0 15upx;
	}

	.project-list {
		background-color: #FFFFFF;
		border-radius: 20upx;
		padding: 30upx;
		margin-top: 15upx;
		position: relative;
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
</style>
