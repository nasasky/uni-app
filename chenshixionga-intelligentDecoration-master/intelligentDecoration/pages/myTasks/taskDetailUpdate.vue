<template>
	<scroll-view class="list" scroll-y>
		<view class="content">
			<view class="detail-content">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						<text>负责人</text>
						<text>{{detail.task_leader}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						<text>计划完成时间</text>
						<text>{{detail.end_date}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						<text>实际完成时间</text>
						<picker mode="date" v-if="!isFinish" :value="detail.done_date" @change="bindDateChange">
							<text class="uni-input"> {{ detail.done_date }} </text>
						</picker>
						<text v-else>{{ detail.done_date }}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate">
						<text>工作量</text>
						<text>{{detail.task_limit}}</text>
					</view>
				</view>
			</view>
			<view class="cus-image">
				<cus-upload-image :imageList="imageList" @acquirePaths="acquirePaths" :show="!isFinish"></cus-upload-image>
			</view>
			<view class="image-content">
				<textarea placeholder="备注信息" v-model="detail.note" :disabled="isFinish" class="detail-note"></textarea>
			</view>
			<view class="uni-card" v-if="detail.child_work && detail.child_work.length !== 0">
				<view class="uni-list">
					<view class="uni-list-cell uni-collapse uni-list-cell-last">
						<view class="uni-list-cell-navigate uni-navigate-bottom" hover-class="uni-list-cell-hover" :class="{ 'uni-active': collapse }"
						 @click="trigerCollapse">
							子任务列表
						</view>
						<view class="uni-list uni-collapse" :class="{ 'uni-active': collapse }">
							<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item, key) in detail.child_work" :key="item.id"
							 :class="key === detail.child_work.length - 1 ? 'uni-list-cell-last' : ''" @click="getTaskDetail(item.id)">
								<view class="uni-list-cell-navigate uni-navigate-right"> {{item.name}} </view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<button class="btn-primary" v-if="!isFinish" type="primary" @click="send">完成</button>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {},
				collapse: false,
				imageList: [],
				updateDetail: {},
				isFinish: false
			}
		},
		onLoad(param) {
			this.getTaskDetail(param.id)
		},
		methods: {
			send() { // 任务信息提交
				uni.showLoading({
					title: '信息提交...',
					mask: false
				});
				this.updateDetail.work_id = this.detail.id
				this.updateDetail.note = this.detail.note
				this.updateDetail.done_date = this.detail.done_date
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_hard_work_write',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.updateDetail,
					success: res => {
						uni.hideLoading()
						if (res.data.code === 1) {
							uni.showToast({
								title: '信息提交完成',
								mask: false,
								duration: 1500
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			bindDateChange(e) {
				this.detail.done_date = e.target.value
			},
			acquirePaths(paths) {
				this.updateDetail.picture_data = paths
			},
			imageError(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			trigerCollapse() {
				this.collapse = !this.collapse
			},
			getTaskDetail(id) {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_hard_word_info',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						work_id: id
					},
					success: res => {
						this.detail = res.data.data.info
						this.imageList = res.data.data.info.att_list.map(item => item.imgurl)
						// this.isFinish = this.detail.state === 'done' //判断是否完成验收
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
		},
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.btn-primary {
		width: 650upx;
		padding-left: 50upx;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}

	.uni-input {
		width: 170upx;
		display: inline-block;
		text-align: right;
		margin-left: 200upx;
	}

	.uni-card {
		margin-top: 10upx;
		margin-bottom: 0l;
	}

	.image-content,
	.detail-content {
		margin-top: 10upx;
		background-color: #FFFFFF;
	}

	.image-content {
		padding: 10upx 40upx;
	}

	.ima-con {
		width: 200px;
		height: 200px;
		background-color: #eeeeee;
	}

	.detail-note {
		height: 150upx;
	}

	.uni-list-cell-navigate text:nth-child(2) {
		padding-right: 30upx;
		color: #999999;
	}
</style>
