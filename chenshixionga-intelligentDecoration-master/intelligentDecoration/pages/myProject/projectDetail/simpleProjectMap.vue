<template>
	<view class="uni-padding-wrap">
		<view style="background:#FFFFFF; padding:40upx;margin-top: 100upx;">
			<block v-if="hasLocation === false">
				<view class="uni-h2 uni-center uni-common-mt">未选择位置</view>
			</block>
			<block v-if="hasLocation === true">
				<view class="uni-hello-text uni-center location-info">
					<text>{{location.name}}</text>
					<text>{{location.address}}</text>
				</view>
			</block>
		</view>
		<view class="uni-btn-v">
			<button type="primary" @tap="chooseLocation">选择位置</button>
			<button type="primary" :disabled="!hasLocation" @tap="openLocation">查看位置</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				hasLocation: false,
				location: {},
				params: {}
			}
		},
		onLoad(params) {
			this.params = params
			this.getProjectMap(params.id)
		},
		methods: {
			getProjectMap(id) {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_hard_map',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						hard_id: parseInt(id)
					},
					success: res => {
						let tempLocation = res.data.data.list[0]
						this.location = {
							latitude: tempLocation.latitude,
							longitude: tempLocation.longitude,
							address: tempLocation.map_street,
							name: tempLocation.map_name
						}
						if (this.location.latitude != "" && this.location.longitude != "") {
							this.hasLocation = true
						}
						uni.hideLoading()
					},
					fail: () => {
						uni.hideLoading()
					},
					complete: () => {}
				});
			},
			chooseLocation: function() {
				uni.chooseLocation({
					success: (location) => {
						this.hasLocation = true
						let tempLocation = {
							hard_id: parseInt(this.params.id),
							latitude: parseFloat(location.latitude),
							longitude: parseFloat(location.longitude),
							map_name: location.name,
							map_street: location.address
						}
						
						uni.request({
							url: this.$store.state.baseUrl + '/lwj/app_hard_map_edit',
							method: 'POST',
							header: {
								token: this.$store.state.token
							},
							data: tempLocation,
							success: res => {
								if (res.data.code === 1) {
									this.location = {
										latitude: tempLocation.latitude,
										longitude: tempLocation.longitude,
										address: tempLocation.map_street,
										name: tempLocation.map_name
									}
									this.$eventBus.$emit('project-address-change',tempLocation.map_street)
								}
								uni.hideLoading()
							},
							fail: () => {},
							complete: () => {}
						});
					}
				})
			},
			openLocation: function() {
				uni.openLocation(this.location)
			}
		}
	}
</script>

<style>
	.page-body-info {
		padding-bottom: 0;
		height: 440upx;
	}

	.location-info {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}
</style>
