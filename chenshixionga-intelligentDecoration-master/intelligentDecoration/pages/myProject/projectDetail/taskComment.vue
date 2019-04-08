<template>
	<view class="comment-content">
		<view v-if="comments.length !== 0">
			<view class="task-comment-item" v-for="comment in comments" :key="comment">
				<view class="cus-image-text-col">
					<text class="cus-image-text-col1">{{comment.create_name}}</text>
					<view>
						<text>{{comment.create_name}}</text>
						<text>{{comment.work_name}}</text>
					</view>
					<text>{{comment.create_date}}</text>
				</view>
				<view class="task-comment-item-remark">{{comment.note}}</view>
				<view class="task-comment-item-image">
					<cus-upload-image :imageList="comment.picture_data" :show="false" :removeMark="false" :hasHead="false" :imgSize="100"
					 :imgMargin="6"></cus-upload-image>
				</view>
				<view class="task-comment-item-status">
					<text class="def-icon" :class="{ 'cus-active': comment.is_praise }" @click="praiseComment(comment)">&#xe64c;</text>
					<text class="def-icon">&#xe891;</text>
				</view>
				<view class="line-item"></view>
			</view>
			<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>
		</view>
		<view v-else class="cus-no-data">
			<text class="def-icon">&#xe64b;</text>
			<text> 暂 无 评 论 . . . </text>
		</view>
		<uni-popup type="middle" :show="showPopup" @hidePopup="hidePopup" :popupWidth="600">
			<view class="task-comment-popup-title">发表动态</view>
			<view class="task-comment-popup-note">
				<textarea placeholder="动态内容" v-model="publishData.note"></textarea>
			</view>
			<cus-upload-image imgTitle="动态图片" :imgSize="170" @acquirePaths="acquirePaths" v-if="showPopup"></cus-upload-image>
			<view>
				<button type="primary" @click="publishComment">发表</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataParams: {
					work_id: null,
					user_id: this.$store.state.uid,
					page_no: 1,
					page_size: 10,
				},
				loadingType: 0,
				contentText: {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				},
				comments: [],
				showPopup: false,
				workId: null,
				publishData: {
					work_id: null,
					note: '',
					picture_data: []
				}
			}
		},
		onLoad(params) {
			this.workId = parseInt(params.id)
			this.publishData.work_id = parseInt(params.id)
			this.getProjectTasks(this.workId)
		},
		onNavigationBarButtonTap() {
			this.showPopup = true
		},
		onReachBottom() {
			if (this.loadingType !== 0) {
				return;
			}
			this.dataParams.page_no++
			this.loadingType = 1
			uni.request({
				url: this.$store.state.baseUrl + '/lwj/get_work_comment_list',
				method: 'POST',
				header: {
					token: this.$store.state.token
				},
				data: this.dataParams,
				success: res => {
					let tempRes = res.data.data.list
					tempRes.forEach(item => {
						item.picture_data = item.att_list.map(att => att.imgurl)
					})
					this.comments.push(...tempRes) 
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
			getProjectTasks(id) {
				this.dataParams.work_id = id
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_work_comment_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						this.comments = res.data.data.list
						this.comments.forEach(item => {
							item.picture_data = item.att_list.map(att => att.imgurl)
						})
					},
					fail: () => {},
					complete: () => {}
				});
			},
			hidePopup() {
				this.showPopup = false
			},
			acquirePaths(paths) {
				this.publishData.picture_data = paths
			},
			publishComment() {
				uni.showLoading({
					title: '',
					mask: false
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/create_app_work_comment',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.publishData,
					success: res => {
						if (res.data.code === 1) {
							this.publishData.note = ""
							this.publishData.picture_data = []
							this.comments.unshift(res.data.data.info)
						} else if(res.data.code === -1) {
							uni.showModal({
								title: '失败',
								content: '登录过期需要重新登录',
								showCancel: false,
								confirmText: '确定',
								success: res => {
									uni.navigateTo({
										url: '../../login/login',
										success: res => {},
										fail: () => {},
										complete: () => {}
									});
								},
								fail: () => {},
								complete: () => {}
							});
						} else {
							uni.showModal({
								title: '失败',
								content: res.data.msg,
								showCancel: false,
								confirmText: '确定',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						}
						this.showPopup = false
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			praiseComment(comment) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_comment_give_like',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						comment_id: comment.id,
						user_id: this.$store.state.uid
					},
					success: res => {
						if (res.data.code === 1) {
							comment.is_praise = true
						} else {
							uni.showToast({
								title: res.data.msg,
								mask: false,
								duration: 1500
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
	}
</script>

<style>
	.comment-content {
		width: 100%;
		background-color: #FFFFFF;
	}

	.task-comment-item {
		padding: 30upx 40upx 0;
		background-color: #FFFFFF;
	}

	.task-comment-item-remark {
		margin-left: 90upx;
		margin-top: 20upx;
	}

	.task-comment-item-image {
		margin-top: -20upx;
		padding-left: 60upx;
	}

	.line-item {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	.task-comment-item-status {
		text-align: right;
		margin-top: -20upx;
	}

	.task-comment-item-status .def-icon {
		font-size: 40upx;
		padding: 0 30upx;
	}

	.task-comment-popup-title {
		text-align: center;
		margin-bottom: 20upx;
		font-weight: bold;
	}

	.task-comment-popup-note {
		background-color: #EEEEEE;
		padding: 20upx;
		border-radius: 10upx;
	}
</style>
