<template>
	<view>
		<view class="cus-search-component" v-if="showSearch">
			<input confirm-type="search" focus v-model="search_key" @blur="getTasks()" placeholder="任务搜索" />
			<button type="primary" @click="getTasks()">搜索</button>
		</view>
		<view class="task-content" :class="{'task-content-last': index === tasks.length-1}" v-for="(task,index) in tasks" :key="task.id" @click="goTaskDetail(task.id)">
			<view>
				<text class="task-title">{{task.hard_name}}</text>
				<view><text>{{task.work_name}}</text></view>
				<view class="cus-font-tinge">
					<text class="def-icon">&#xe644;</text>
					<text>{{task.total_child_done}}/{{task.total_child}}</text>
					<text class="def-icon">&#xe689;</text>
					<text>{{task.total_att}}</text>
				</view>
				<text class="cus-font-tinge">{{task.start_date}}~{{task.end_date}}</text>
			</view>
			<view class="cus-primary">{{ taskState[task.state] }}</view>
		</view>
		<view v-if="tasks.length === 0" class="cus-no-data">
			<text class="def-icon">&#xe64b;</text>
			<text> 暂 无 数 据 . . . </text>
		</view>
		<uni-load-more v-else :loadingType="loadingType" :contentText="contentText"></uni-load-more>
	</view>
</template>

<script>
	import {
		taskState
	} from '@/common/stateData.js'
	export default {
		data() {
			return {
				tasks: [],
				taskState: taskState,
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				search_key: '',
				dataParams: {
					type: this.$props.taskType,
					search_key: this.search_key,
					page_no: 1,
					page_size: 10,
				},
			};
		},
		props: {
			taskType: {
				default: '0',
				type: String
			},
			showSearch: {
				default: false,
				type: Boolean
			}
		},
		onLoad() {
			this.getTasks()
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.dataParams.page_no++
			this.loadingType = 1
			uni.request({
				url: this.$store.state.baseUrl + '/lwj/app_work_by_todo',
				method: 'POST',
				header: {
					token: this.$store.state.token
				},
				data: this.dataParams,
				success: res => {
					this.tasks.push(...res.data.data)
					if (res.data.data.length < this.dataParams.page_size) {
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
			getTasks() {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_work_by_todo',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						type: this.$props.taskType,
						search_key: this.search_key
					},
					success: res => {
						this.tasks = res.data.data
						if (res.data.data.length < this.dataParams.page_size) {
							this.loadingType = 2
						} else {
							this.loadingType = 0
						}
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			goTaskDetail(id) {
				uni.navigateTo({
					url: './taskDetailUpdate?id=' + id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.task-content {
		background-color: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20upx 30upx;
		margin: 20upx 0;
	}
    .task-content-last{
		 margin-bottom: 0;
		 padding-bottom: 0;
	 }
	.task-title {
		font-size: 40upx;
	}

	.task-content .cus-font-tinge {
		line-height: 40upx;
	}

	.task-content .cus-font-tinge .def-icon {
		font-size: 30upx;
		margin-right: 8upx;
	}

	.task-content .cus-font-tinge .def-icon:nth-child(1) {
		font-size: 36upx;
	}

	.task-content .cus-font-tinge text:nth-child(2) {
		margin-right: 20upx;
	}
</style>
