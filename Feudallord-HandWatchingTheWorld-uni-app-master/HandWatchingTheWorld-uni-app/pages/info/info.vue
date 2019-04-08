<template>
	
	
	<view class="content">
		<text>{{title}}</text>
		 <rich-text class="body" :nodes="info"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:"",
				info:""
				
			};
		},
		onReachBottom:function(){
			console.log("xcvghjk")
		},
		onLoad:function(e){
			this.title=e.title,
			uni.request({
				url: 'http://106.13.79.84:8080/newsInfo?url='+e.url,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data)
					this.info=res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		}
		
	}
</script>

<style>
	
	
	text{
		font-size: 1.5em;
	}
	.content{
		width: 96%;
	    flex-direction: row;
		margin: 0 auto;
		margin-left: 3%;
		
	}
	.body img{
		width: 90%;
	}
</style>
