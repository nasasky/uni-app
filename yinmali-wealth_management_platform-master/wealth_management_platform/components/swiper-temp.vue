<template>
	<view>
		<view class="swiperBox">	
			<swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000">
				<swiper-item v-for="item in imgUrl" >
					<view class="swiper-item" >
						<image :src="item.url" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'swiper-temp',
		props:{
			imgUrl:Array
		},
		data() {
			return {
				
			};
		},
		methods:{
			tap(){
				console.log(this.imgUrl)
			}
		}
	}
</script>

<style>
	.swiperBox {
			width: 100%;
			height: 420upx;
	
		}
	
		swiper,.swiper-item {
			height: 100%;
		}
	
		.swiper-item image {
			width: 100%;
			height: 100%;
	
		}
</style>
