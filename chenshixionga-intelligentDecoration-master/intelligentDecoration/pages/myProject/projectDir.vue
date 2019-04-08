<template>
	<view class="content" @touchstart="touchStart" @touchend="touchEnd">
		<view class="project-list">
			<view class="project-list-title">
				<text>{{project.hard_name}}</text>
				<text>{{projectState[project.state]}}</text>
			</view>
			<view class="project-list-time">
				<text>{{project.start_date}}</text>
				<text>{{project.end_date}}</text>
			</view>
			<view class="project-list-progress">
				<progress percent="40" stroke-width="10" active activeColor="#f6c237" background-color="#fcf0d1" />
			</view>
			<view class="dash-line"></view>
			<view class="project-manager-info">
				<text class="project-manager-mark">{{project.manager !== null ? project.manager : "姓"}}</text>
				<view class="project-manager-name">
					<text>{{project.manager}}</text>
					<text>项目经理</text>
				</view>
				<text class="project-manager-customer">{{project.customer}}</text>
			</view>
		</view>
		<view class="project-manage">
			<text class="project-title">项目管理</text>
			<view class="def-grid">
				<view class="def-grip-item" @click="baseInfo(0)">
					<text class="def-icon def-icon-project-info">&#xe645;</text>
					<text class="uni-grid-9-text">基础信息</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(1)">
					<text class="def-icon def-icon-task">&#xe63f;</text>
					<text class="uni-grid-9-text">任务列表</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(2)">
					<text class="def-icon def-icon-log">&#xe6c3;</text>
					<text class="uni-grid-9-text">图文日志</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(3)">
					<text class="def-icon def-icon-human">&#xe6c6;</text>
					<text class="uni-grid-9-text">人工管理</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(4)">
					<text class="def-icon def-icon-material">&#xe6ca;</text>
					<text class="uni-grid-9-text">材料列表</text>
				</view>
				<view class="def-grip-item"  @click="baseInfo(5)">
					<text class="def-icon def-icon-maps">&#xe602;</text>
					<text class="uni-grid-9-text">项目地图</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(6)">
					<text class="def-icon def-icon-project-comment">&#xe646;</text>
					<text class="uni-grid-9-text">评论列表</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(7)">
					<text class="def-icon def-icon-project-rule">&#xe640;</text>
					<text class="uni-grid-9-text">施工规范</text>
				</view>
				<view class="def-grip-item"  @click="baseInfo(8)">
					<text class="def-icon def-icon-project-info">&#xe601;</text>
					<text class="uni-grid-9-text">结算信息</text>
				</view>
				<view class="def-grip-item" @click="baseInfo(9)">
					<text class="def-icon def-icon-project-check">&#xe647;</text>
					<text class="uni-grid-9-text">项目验收</text>
				</view>
				<navigator :url="'./projectDetail/effectPicture?id=' + id">
					<view class="def-grip-item">
						<text class="def-icon def-icon-log">&#xe6c3;</text>
						<text class="uni-grid-9-text">效果图</text>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	import { projectState } from '@/common/stateData.js'
	export default {
		data() {
			return {
				project: {},
				startPageX: 0,
				startPageY: 0,
				id: 1,
				projectState: projectState
			}
		},
		onLoad(param) {
			this.getProject(param.id)
			this.id = param.id
		},
		methods: {
			baseInfo(index) {
				uni.navigateTo({
					url: './tabbar?index=' + index + '&id=' + this.id,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			getProject(id) {
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_hard_info',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						hard_id: id
					},
					success: res => {
						this.project = res.data.data.info
					},
					fail: () => {},
					complete: () => {}
				});
			},
			touchStart(event) {
				this.startPageX = event.pageX
				this.startPageY = event.pageY
			},
			touchEnd(event) {
				if (event.mp.changedTouches[0].pageX - this.startPageX > 60 && this.startPageY - event.mp.changedTouches[0].pageY <	10) {
					uni.navigateBack({
						delta: 1
					});
				}
			}
		},
	}
</script>

<style>
	/* 项目管理样式 开始 */
	.uni-grid-9-text{
		width: 186upx;
	}
	.def-icon-project-rule,
	.def-icon-log {
		color: #008ff3;
	}

	.def-icon-project-info,
	.def-icon-maps {
		color: #f1b619;
	}

	.def-icon-project-check,
	.def-icon-task {
		color: #f15a4a;
	}

	.def-icon-project-comment,
	.def-icon-human {
		color: #29ab91;
	}

	.def-icon-material {
		color: #5e59b5;
	}

	.project-title {
		padding-left: 75upx;
		display: block;
		border-bottom: 1px dashed #efeff4;
		height: 80upx;
		line-height: 80upx;
		font-weight: bold;

	}

	.project-manage {
		border-radius: 16upx;
		background-color: white;
		margin: 20upx 0;
	}

	.def-grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.def-grip-item,
	.def-grip-more {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 240upx;
	}

	.def-grid .def-grip-more {
		width: 180upx;
	}

	/* 项目管理样式结束 */

	/* 项目样式开始 */
	.project-list {
		background-color: #FFFFFF;
		border-radius: 20upx;
		padding: 30upx;
	}

	.dash-line {
		margin: 40upx 0 20upx;
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

	/* 项目样式结束 */
</style>
