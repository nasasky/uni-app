<template>
		  <view class="uni-flex uni-row  box">
		  <view class="flex-item"  v-for="(item,index) in mv_urls" :key="index">
				<view class="one"> 
				
				<video direction="-90" :objectFit="fill" :poster="item.img_url" :controls="true" :src="item.mv_url"></video>
				
				</view>
			</view>
		 </view>
	 
</template>

<script>
	export default {
		data() {
			return {
				mv_urls:[],
			
			};
		},
		 onLoad:function(){
			
		     uni.request({
				url: 'http://39.105.87.0:8000/getVideo',
				method: 'GET',
				data: {},
				success: res => {
					
					this.mv_urls=res.data;
				
					console.log(res.data[0].img_url);
				},
				fail: () => {},
				complete: () => {}
			}); 
			 // uni.startPullDownRefresh();
		},
		 onReachBottom:function(){
			uni.request({
				url: 'http://39.105.87.0:8000/getVideo',
				method: 'GET',
				data: {},
				success: res => {
					
					this.mv_urls=this.mv_urls.concat(res.data);
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
		onPullDownRefresh:function() {
		  uni.request({
			url: 'http://39.105.87.0:8000/getVideo',
			method: 'GET',
			data: {},
			success: res => {
				this.mv_urls=res.data;
				 setTimeout(function () {
				    uni.stopPullDownRefresh();
				}, 1000);
			},
			fail: () => {},
			complete: () => {}
		});
       
    }
	}
</script>

<style>
	.box{
		 flex-wrap:  wrap;
		 width: 750upx;
		 padding-left: 13upx;
	}
	.forlist{
	
		width: 48%;
	}
	.one{
		width: 350upx;
		height: 500upx;
	    margin-left: 10upx;
		margin-top: 10upx;
	}
	.two{
		 flex: 1;
		 width: 48%;
		 height: 100upx;
	
	}
 
 /* .list{
	 background-color: #FFFFFF;
	 position: relative;
	 width: 750upv;
	 display: flex;
	 flex-direction: column;
 }
 .forlist{
	  width: 48%
 }
	
	.uni-list{
		
	}
	.uni-list-cell{
		width: 750upx;
		height: 500upx;
	}
	.view_mv{
		display: flex;
		width: 100%;
		height: 500upx;
		border: #00B26A solid ;
	} */
	video{
		width: 100%;
		height: 100%;
		
	}
</style>
