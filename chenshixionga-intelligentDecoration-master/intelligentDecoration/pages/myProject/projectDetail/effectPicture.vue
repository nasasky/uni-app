<template>
	<view class="content">
		<block v-if="hasEffect">
			<web-view :src="project.link_url[index].link_url"></web-view>
		</block>
		<block v-if="noData">
			<cus-no-data></cus-no-data>
		</block>
	</view>
</template>

<script>
	export default {
		name: "effectPicture",
		data() {
			return {
				hasEffect: false,
				noData: false,
				project: {},
				index: 0
			}
		},
		onLoad(param) {
			this.getProject(param.id)
		},
		onNavigationBarButtonTap() {
			if(this.project.link_url && this.index >= this.project.link_url.length - 1) {
				uni.showToast({
					title: '亲，没有下一个了',
					icon: 'none',
					mask: false,
					duration: 3000
				});
				return
			}
			this.index++
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
						if(this.project.link_url && this.project.link_url.length > 0) {
							this.hasEffect = true
						}else {
							this.noData = true
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
</style>
