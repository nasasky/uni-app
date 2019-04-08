<template>
	<scroll-view class="list" scroll-y>
		<view class="content">
			<view class="base-info">
				<view class="title">基础信息</view>
				<view class="begin-time">
					<text>开始时间</text>
					<text>{{project.start_date}}</text>
				</view>
				<view class="end-time">
					<text>结束时间</text>
					<text>{{project.end_date}}</text>
				</view>
				<view class="designer">
					<text>设计师</text>
					<text>{{project.designer}}</text>
				</view>
			</view>
			<view class="base-info">
				<view class="title">客户信息</view>
				<view class="begin-time">
					<text>姓名</text>
					<text>{{project.customer}}</text>
				</view>
				<view class="end-time">
					<text>联系</text>
					<text>{{project.customer_mobile}}</text>
				</view>
			</view>
			<view class="project-member" @click="$emit('cus-navigate',3)">
				<view class="member-title">
					<text>项目成员</text>
					<text class="def-icon">&#xe600;</text>
				</view>
				<view class="project-manager-info">
					<text class="project-manager-mark">{{project.manager !== null ? project.manager : "姓"}}</text>
					<view class="project-manager-name">
						<text>{{project.manager}}</text>
						<text>项目经理</text>
					</view>
					<!-- <text class="project-manager-customer def-icon">&#xe60e;</text> -->
				</view>
			</view>
			<view class="project-address"  @click="$emit('cus-navigate',5)">
				<text>项目地址</text>
				<view class="address-content">
					<text class="def-icon">&#xe734;</text>
					<text>{{project.hard_street}}</text>
				</view>
			</view>
			<view class="remark">
				<text>备注信息</text>
				<text>{{project.note}}</text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				project: {}
			}
		},
		onLoad(param) {
			this.getProject(param.id)
			this.$eventBus.$on('project-address-change', (data) => {
				this.project.hard_street = data
			})
		},
		methods: {
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
			}
		}
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.remark,
	.project-address,
	.project-member,
	.base-info {
		margin-top: 20upx;
		background-color: white;
		padding: 20upx 40upx;
	}

	.title {
		border-bottom: 2upx dashed #eeeeee;
		padding: 0 40upx 10upx;
		margin: 0 -40upx;
		font-size: 32upx;
	}

	.designer,
	.begin-time,
	.end-time {
		display: flex;
		justify-content: space-between;
		line-height: 60upx;
		height: 60upx;
	}

	.designer text:nth-child(2),
	.remark text:nth-child(2),
	.begin-time text:nth-child(2),
	.end-time text:nth-child(2),
	.address-content text:nth-child(2) {
		color: #999999;
	}


	.member-title {
		display: flex;
		justify-content: space-between;
		padding-bottom: 10upx;

	}

	.member-title text:nth-child(1) {
		color: #007AFF;
		font-size: 30upx;
	}

	.member-title .def-icon {
		font-size: 30upx;
	}

	.project-manager-info {
		display: flex;
		align-items: center;
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

	.project-manager-customer.def-icon {
		font-size: 50upx;
		color: #007AFF;
	}

	.project-address {
		display: flex;
	}

	.address-content text:nth-child(1) {
		font-size: 30upx;
		padding-right: 10upx;
		color: #007AFF;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.remark text:nth-child(2),
	.project-address .address-content {
		padding-left: 40upx;
	}
</style>
