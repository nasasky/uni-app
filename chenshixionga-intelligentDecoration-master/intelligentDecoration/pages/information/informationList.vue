<template>
	<scroll-view class="list info-confirm-list" scroll-y @scrolltolower="scrolltolower">
		<view v-for="(info, index) in infos" :key="index" @click="changeReadState(info)" @longpress="longtap(info)" class="info-list-item"
		 hover-class="uni-list-cell-hover">
			<text v-if="!info.is_read" class="no-read-state"></text>
			<text>{{info.context}}</text>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				infos: [],
				dataParams: {
					user_id: this.$store.state.uid,
					page_no: 1,
					page_size: 10,
				},
				loadMore: true
			}
		},
		onLoad() {
			this.getInfos()
		},
		methods: {
			longtap(info) {
				if (!info.is_read) return
				uni.showModal({
					title: '',
					content: '是否需要标注为未读？',
					showCancel: true,
					cancelText: '取消',
					confirmText: '标注',
					success: res => {
						if (res.confirm) {
							this.readStateMiddleware(info)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			changeReadState(info) {
				if (info.is_read) return
				this.readStateMiddleware(info)
			},
			readStateMiddleware(info) {
				uni.request({ // 标注为未读
					url: this.$store.state.baseUrl + '/lwj/app_message_read',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						user_id: this.$store.state.uid,
						message_id: info.id,
						read_status: !info.is_read
					},
					success: res => {
						if (res.data.code === 1) {
							info.is_read = !info.is_read
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getInfos() {
				uni.showLoading({
					title: '',
					mask: false
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_message_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						if (res.data.code === 1) {
							this.infos.push(...res.data.data.list)
							uni.hideLoading()
							if (res.data.data.list.length < this.dataParams.page_size) {
								this.loadMore = false
							}
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			scrolltolower() {
				if (!this.loadMore) return
				this.dataParams.page_no++
				this.getInfos()
			}
		}
	}
</script>

<style>
	.info-confirm-list {
		background-color: #FFFFFF;
	}

	.info-list-item {
		background-color: #FFFFFF;
		padding: 30upx 30upx;
		border-bottom: 1px solid rgba(0,0,0,0.2);
	}

	.no-read-state {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		background-color: #007AFF;
		margin-right: 20upx;
	}

	.uni-list-cell-hover {
		background-color: #EEEEEE;
	}
</style>
