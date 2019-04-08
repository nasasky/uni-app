<template>
	<view class="content">
		<cus-no-data></cus-no-data>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				name: ''
			}
		},
		onLoad(params) {
			uni.setNavigationBarTitle({
				title: params.title
			})
		}
	}
</script>

<style>
</style>
