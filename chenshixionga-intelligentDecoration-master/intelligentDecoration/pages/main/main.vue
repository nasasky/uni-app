<template>
	<view>
		<view class="def-grid home-top">
			<view class="def-grip-item" hover-class="def-grip-item-hover" @click="toTasks(0)">
				<view class="home-top-item">
					<text class="def-icon">&#xe626;</text>
					<text class="home-top-item-text">{{tasks.progress_num}}</text>
				</view>
				<text class="uni-grid-9-text">待办任务</text>
			</view>
			<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right" @click="toTasks(1)">
				<view class="home-top-item">
					<text class="def-icon">&#xe627;</text>
					<text class="home-top-item-text">{{tasks.begin_num}}</text>
				</view>
				<text class="uni-grid-9-text">即将开始</text>
			</view>
			<view class="def-grip-item" hover-class="def-grip-item-hover" @click="toTasks(2)">
				<view class="home-top-item">
					<text class="def-icon">&#xe665;</text>
					<text class="home-top-item-text">{{tasks.complete_num}}</text>
				</view>
				<text class="uni-grid-9-text">已完成</text>
			</view>
		</view>
		<view class="content">
			<view class="project-manage">
				<text class="project-title">项目管理</text>
				<view class="def-grid">
					<view class="def-grip-item" @click="myProject">
						<text class="def-icon def-icon-project">&#xe639;</text>
						<text class="uni-grid-9-text">我的项目</text>
					</view>
					<navigator url="../commercial/commercialOpportunityList">
						<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right">
							<text class="def-icon def-icon-buisness">&#xe63e;</text>
							<text class="uni-grid-9-text">商机管理</text>
						</view>
					</navigator>
					<navigator url="../myProject/projectDetail/personalManager">
						<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right">
							<text class="def-icon def-icon-tel">&#xe6c5;</text>
							<text class="uni-grid-9-text">通讯录</text>
						</view>
					</navigator>
					<navigator url="../mainChildPage/intelligenceReports">
						<view class="def-grip-item" hover-class="def-grip-item-hover">
							<text class="def-icon def-icon-statement">&#xe649;</text>
							<text class="uni-grid-9-text">智能报表</text>
						</view>
					</navigator>
					<!-- <navigator url="../mainChildPage/tempPage?title=人工管理">
						<view class="def-grip-item" hover-class="def-grip-item-hover">
							<text class="def-icon def-icon-human">&#xe6c7;</text>
							<text class="uni-grid-9-text">人工管理</text>
						</view>
					</navigator> -->
					<navigator url="../mainChildPage/projectMap">
						<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right">
							<text class="def-icon def-icon-maps">&#xe602;</text>
							<text class="uni-grid-9-text">项目地图</text>
						</view>
					</navigator>
				</view>
			</view>
			<view style="height: 20upx;"></view>
			<view class="project-manage">
				<text class="project-title">平台管理</text>
				<view class="def-grid">
					<!-- <navigator url="../mainChildPage/tempPage?title=后台管理">
						<view class="def-grip-item" hover-class="def-grip-item-hover">
							<text class="def-icon def-icon-backstage">&#xe64a;</text>
							<text class="uni-grid-9-text">后台管理</text>
						</view>
					</navigator> -->
					<navigator url="../mainChildPage/shoppingCenter">
						<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right">
							<text class="def-icon def-icon-shopping">&#xe6c8;</text>
							<text class="uni-grid-9-text">商场中心</text>
						</view>
					</navigator>
					<navigator url="../mainChildPage/tempPage?title=施工规范">
						<view class="def-grip-item" hover-class="def-grip-item-hover">
							<text class="def-icon def-icon-rule">&#xe640;</text>
							<text class="uni-grid-9-text">施工规范</text>
						</view>
					</navigator>
					<!-- <navigator url="../mainChildPage/tempPage?title=文档管理">
						<view class="def-grip-item" hover-class="def-grip-item-hover">
							<text class="def-icon def-icon-docs">&#xe648;</text>
							<text class="uni-grid-9-text">文档管理</text>
						</view>
					</navigator> -->
					<navigator url="../mainChildPage/tempPage?title=手册">
						<view class="def-grip-item" hover-class="def-grip-item-hover no-border-right">
							<text class="def-icon def-icon-desc">&#xe6c9;</text>
							<text class="uni-grid-9-text">手册</text>
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				tasks: {}
			}
		},
		onLoad() {
			this.hasLoginOption()
		},
		onPullDownRefresh() {
			uni.request({
				url: this.$store.state.baseUrl + '/lwj/get_todo_info',
				method: 'post',
				header: {
					token: this.$store.state.token
				},
				data: {},
				success: res => {
					this.tasks = res.data.data
					uni.stopPullDownRefresh()
				},
				fail: () => {},
				complete: () => {}
			});
		},
		watch: {
			hasLogin() {
				this.hasLoginOption()
			}
		},
		methods: {
			toTasks(index) {
				uni.navigateTo({
					url: '../myTasks/myTasks?index=' + index,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			myProject() {
				uni.navigateTo({
					url: '../myProject/myProject',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			hasLoginOption() {
				if (!this.hasLogin) {
					uni.showModal({
						title: '未登录',
						content: '您未登录，需要登录后，才能享有更多功能',
						/**
						 * 如果需要强制登录，不显示取消按钮
						 */
						showCancel: !this.forcedLogin,
						success: (res) => {
							if (res.confirm) {
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
									uni.reLaunch({
										url: '../login/login'
									});
								} else {
									uni.navigateTo({
										url: '../login/login'
									});
								}
							}
						}
					});
				} else {
					uni.request({
						url: this.$store.state.baseUrl + '/lwj/get_todo_info',
						method: 'post',
						header: {
							token: this.$store.state.token
						},
						data: {},
						success: res => {
							this.tasks = res.data.data
						},
						fail: () => {},
						complete: () => {}
					});
				}
			}
		}
	}
</script>

<style>
	.home-top .def-grip-item .home-top-item .def-icon {
		color: #007AFF;
	}

	.home-top .def-grip-item {
		color: #7a7e83;
	}

	.def-icon-project,
	.def-icon-rule {
		color: #008ff3;
	}

	.def-icon-buisness,
	.def-icon-backstage,
	.def-icon-maps {
		color: #f1b619;
	}

	.def-icon-human,
	.def-icon-desc {
		color: #f15a4a;
	}

	.def-icon-statement,
	.def-icon-docs {
		color: #29ab91;
	}

	.def-icon-tel,
	.def-icon-shopping {
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
	}

	.home-top {
		background-color: #FFFFFF;
	}

	.home-top .def-grip-item .def-icon {
		font-size: 50upx;
	}

	.home-top-item-text {
		margin-left: 20upx;
	}

	.def-grid {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.def-grip-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 240upx;
	}
</style>
