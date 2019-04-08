<template>
	<scroll-view class="list" scroll-y @scrolltolower="scrolltolower">
		<view class="cus-search-component">
			<input confirm-type="search" v-model="dataParams.search_key" @blur="getProjectTasks()" placeholder="任务搜索" />
			<button type="primary" @click="getProjectTasks()">搜索</button>
		</view>
		<view class="content content-task">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover"
			 v-for="(list,index) in tasks" :key="index" @click="goDetail(list.id)">
				<view class="uni-list-cell-navigate uni-navigate-right">
					{{list.name}}
				</view>
			</view>
		</view>
		<view v-if="noData" class="cus-no-data">
			<text class="def-icon">&#xe64b;</text>
			<text> 暂 无 数 据 . . . </text>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				tasks: [],
				dataParams: {
					search_key: "",
					page_no: 1,
					page_size: 20,
					hard_id: ""
				},
				loadMore: true,
				noData: false
			}
		},
		onLoad(params) {
			this.dataParams.hard_id = params.id
			this.getProjectTasks()
		},
		methods: {
			scrolltolower() {
				if (!this.loadMore) return
				this.dataParams.page_no++
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_hard_work_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						this.tasks.push(...res.data.data.list)
						if(res.data.data.list.length < this.dataParams.page_size) {
							this.loadMore = false
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getProjectTasks() {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_hard_work_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						this.tasks = res.data.data.list.map(item => {
							item.show = false
							return item
						})
						if (res.data.data.list.length === 0) {
							this.noData = true
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			goDetail(id) {
				uni.navigateTo({
					url: './projectDetail/taskDetail?id='+id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.content-task{
		background-color: #FFFFFF;
	}
	.uni-form-item{
		width: 80%;
	}
	.uni-card {
		margin: 0;
	}
</style>
