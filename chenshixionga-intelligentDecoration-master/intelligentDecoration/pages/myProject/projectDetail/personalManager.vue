<template>
	<view class="comment-content">
		<view class="cus-search-component" v-if="showSearch">
			<input confirm-type="search" focus v-model="dataParams.search_key" @blur="search()" placeholder="找人" />
			<button type="primary" @click="search()">搜索</button>
		</view>
		<scroll-view scroll-y class="person-list" @scrolltolower="getPersonalInfo">
			<view v-for="(info,index1) in infos" :key="info" class="comment-content-item" :class="{'comment-content-item-last': index1 === infos.length-1}">
				<view v-for="(partner, index) in info.partner_list" :key="index">
					<view class="cus-image-text-col">
						<text class="cus-image-text-col1">{{partner.partner_name}}</text>
						<view>
							<text>{{partner.partner_name}}</text>
							<text>客户</text>
						</view>
						<view id="person-phone" v-if="partner.partner_mobile" @click="makePhone(partner.partner_name, partner.partner_mobile)">
							<uni-icon type="phone" size="18" color="#008ff3"></uni-icon>
							<text>{{partner.partner_mobile}}</text>
						</view>
					</view>
				</view>
				<view v-for="(manager, index) in info.manager_list" :key="index">
					<view class="cus-image-text-col">
						<text class="cus-image-text-col1">{{manager.manager}}</text>
						<view>
							<text>{{manager.manager}}</text>
							<text>项目经理</text>
						</view>
						<view id="person-phone" v-if="manager.manager_mobile" @click="makePhone(manager.manager, manager.manager_mobile)">
							<uni-icon type="phone" size="18" color="#008ff3"></uni-icon>
							<text>{{manager.manager_mobile}}</text>
						</view>
					</view>
				</view>
				<view v-for="(work, index) in info.work_list" :key="index">
					<view class="cus-image-text-col">
						<text class="cus-image-text-col1">{{work.head}}</text>
						<view>
							<text>{{work.head}}</text>
							<text>任务负责人</text>
							<text class="person-task">任务: {{work.work_name}}</text>
						</view>
						<view id="person-phone" v-if="work.head_mobile" @click="makePhone(work.head, work.head_mobile)">
							<uni-icon type="phone" size="18" color="#008ff3"></uni-icon>
							<text>{{work.head_mobile}}</text>
						</view>
					</view>
				</view>
				<view v-for="(worker, index) in info.worker_list" :key="index">
					<view class="cus-image-text-col">
						<text class="cus-image-text-col1">{{worker.worker}}</text>
						<view>
							<text>{{worker.worker}}</text>
							<text>施工人员</text>
							<text class="person-task">任务: {{worker.work_name}}</text>
						</view>
						<view id="person-phone" v-if="worker.worker_mobile" @click="makePhone(worker.worker, worker.worker_mobile)">
							<uni-icon type="phone" size="18" color="#008ff3"></uni-icon>
							<text>{{worker.worker_mobile}}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infos: [],
				showSearch: false,
				dataParams: {
					search_key: "",
					page_no: 1,
					page_size: 5,
					hard_id: ""
				},
				loadMore: true
			}
		},
		onLoad(param) {
			this.dataParams.hard_id = param.id
			this.getPersonalInfo()
		},
		onNavigationBarButtonTap() {
			this.showSearch = !this.showSearch
		},
		methods: {
			getPersonalInfo() {
				if(!this.loadMore) return
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_hard_address_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						if(res.data.data.info.length < this.dataParams.page_size) {
							this.loadMore = false
						}
						this.dataParams.page_no++
						this.infos.push(...res.data.data.info)
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			search() {
				this.dataParams.page_no =1
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_hard_address_list',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.dataParams,
					success: res => {
						if(res.data.data.info.length < this.dataParams.page_size) {
							this.loadMore = false
						}
						this.infos = res.data.data.info
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
			makePhone(name, mobile) {
				uni.showModal({
					title: '拨打电话',
					content: '是否拨打电话给:' + name,
					showCancel: true,
					cancelText: '取消',
					confirmText: '拨打',
					success: res => {
						if (res.confirm) {
							uni.makePhoneCall({
								phoneNumber: mobile
							})
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
		background-color: #FFFFFF;
		height: 100%;
		width: 100%;
	}
    .comment-content-item{
		background-color: #FFFFFF;
	}
	.comment-content-item-last{
		padding-bottom: 60upx;
	}
	.person-list{
		height: 100%;
	}
	.cus-image-text-col {
		padding: 40upx 40upx 0;
	}

	.person-task {
		font-size: 24upx;
	}

	#person-phone {
		display: flex;
		flex-direction: row;
		flex: 0;
	}

	#person-phone text:nth-child(2) {
		color: #008ff3;
		font-size: 30upx;
	}
</style>
