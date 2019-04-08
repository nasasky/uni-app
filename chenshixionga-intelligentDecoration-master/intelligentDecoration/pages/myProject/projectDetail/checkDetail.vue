<template>
	<scroll-view class="list" scroll-y>
		<view class="content">
			<view class="base-info">
				<view class="line-item">
					<text>项目名称</text>
					<text>{{project.project_name}}</text>
				</view>
				<view class="line-item" v-if="project.check_type !== '2'">
					<text>工序名称</text>
					<text>{{project.task_name}}</text>
				</view>
				<view class="line-item">
					<text>验收时间</text>
					<text>{{project.check_date}}</text>
				</view>
				<view class="line-item">
					<text>验收人员</text>
					<text>{{project.check_man}}</text>
				</view>
				<view class="line-item">
					<text>验收类型</text>
					<text>{{ checkType[project.check_type] }}</text>
				</view>
				<view class="line-item-state">
					<text>状态</text>
					<text :class="[ project.state === 'pcheck' ? 'cus-complete-green' : 'cus-danger' ]">{{ checkState[project.state] }}</text>
				</view>
				<view class="check-standard">
					<text>验收标准</text>
					<text>{{project.check_standard}}</text>
				</view>
			</view>
			<view class="base-info">
				<text>验收意见</text>
				<textarea v-model="project.result" placeholder="验收意见" :maxlength="200" class="check-opinion"></textarea>
			</view>
			<view class="cus-image">
				<cus-upload-image :imageList="imageList" @acquirePaths="acquirePaths"></cus-upload-image>
			</view>
			<view class="base-info base-info-result">
				<view class="line-item">
					<text>验收结果</text>
					<view class="check-result">
						<radio-group @change="radioChange">
							<label>
								<radio value="pcheck" :checked="project.state === 'pcheck'" />通过
							</label>
							<label>
								<radio value="rcheck" :checked="project.state === 'rcheck'" />不通过
							</label>
						</radio-group>
					</view>
				</view>
			</view>
			<view class="base-info-btn">
				<button class="btn-primary" type="primary" @click="send()">完成</button>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		checkState,
		checkType
	} from '@/common/stateData.js'
	export default {
		data() {
			return {
				project: {}, // 查询时数据
				updateProject: {}, // 提交数据
				imageList: [],
				checkState: checkState,
				checkType: checkType
			}
		},
		onLoad(param) {
			this.getCheckDetail(parseInt(param.id))
		},
		methods: {
			acquirePaths(paths) {
				this.updateProject.picture_data = paths
			},
			send() { // 验收信息提交
				uni.showLoading({
					title: '信息提交...',
					mask: false
				});
				this.updateProject.check_id = this.project.id
				this.updateProject.acceptor_id = this.$store.state.uid
				this.updateProject.result = this.project.result
				this.updateProject.check_state = this.project.state
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_check_table_done',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.updateProject,
					success: res => {
						uni.hideLoading()
						if (res.data.code === 1) {
							uni.showToast({
								title: '信息提交完成',
								mask: false,
								duration: 1500
							});
							this.$eventBus.$emit("check-state-change")
						} else if (res.data.code === 0) {
							uni.showModal({
								title: '信息提交失败',
								content: res.data.msg,
								showCancel: false,
								success: function(res) {
									console.log('用户点击确定');
								}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			radioChange(evt) {
				this.project.state = evt.detail.value
			},
			getCheckDetail(id) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_check_table_get',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						check_id: id
					},
					success: res => {
						this.project = res.data.data.info
						this.updateProject.picture_data = []
						this.imageList = res.data.data.info.att_list.map(item => item.imgurl)
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.cus-image {
		margin-top: 20upx;
	}

	.btn-primary {
		width: 650upx;
		padding-left: 50upx;
	}

	.check-opinion {
		border: 2upx solid #EEEEEE;
		width: 610upx;
		border-radius: 20upx;
		padding: 30upx;
		height: 200upx;
	}

	.base-info,
	.base-info-btn {
		margin-top: 20upx;
		background-color: white;
		padding: 20upx 40upx;
	}

	.base-info-result {
		margin-bottom: 20upx;
	}

	.base-info-btn {
		margin-top: 0;
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

	.line-item text:nth-child(2),
	.check-result {
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
