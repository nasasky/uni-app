<template>
	<view>
		<map :latitude="latitude" :longitude="longitude" :markers="markers">
		</map>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				latitude: 24.60,
				longitude: 118.11,
				markers: []
			}
		},
		onLoad() {
			this.getProjectMap()
		},
		methods: {
			getProjectMap() {
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
					data: {},
					success: res => {
						const tempLocation = res.data.data.list
						this.latitude = tempLocation[0].latitude
						this.longitude = tempLocation[0].longitude
						for (let i = 0; i < tempLocation.length; i++) {
							let tempObj = {
								latitude: tempLocation[i].latitude,
								longitude: tempLocation[i].longitude,
								iconPath: '../../static/img/location@3x.png'
							}
							this.markers.push(tempObj)
						}
						console.log(this.markers)
						uni.hideLoading()
					},
					fail: () => {
						uni.hideLoading()
					},
					complete: () => {}
				});
			}
		}
	}
</script>
<style>
	map {
		width: 750upx;
		height: 100vh;
	}
</style>
