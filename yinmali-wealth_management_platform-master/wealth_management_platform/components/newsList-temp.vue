<template>
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in newsList" 
			:key="index" :data-newsid="item.post_id" @tap="toInfo($event,index)">
				<view class="uni-media-list">
					
					<view class="uni-media-list-body">
						
						<view class="uni-media-list-text-bottom twoLines">{{item.summary}}</view>
						<view class="item-bottom">
							<view class="item-bottom-item zhiding">
								置顶
							</view>
							<view class="item-bottom-item">
								{{item.column_name}}
							</view>
							<view class="item-bottom-item">
								{{item.views_count}}评论
							</view>
						</view>
					</view>
					<image class="uni-media-list-logo" :src="item.cover"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:'newslist-temp',
		props:{
			newsList:Array
		},
		data() {
			return {
				
			};
		},methods:{
			toInfo(e,index){
				var newsid=e.currentTarget.dataset.newsid
				if(index==0){
					uni.navigateTo({
						url:'/pages/index/zaobao/zaobao?newsid='+newsid
					})
				}else{
					
					uni.navigateTo({
						url:'/pages/index/news/info/info?newsid='+newsid
					})
				}
				
				console.log(index)
			}
		}
	}
</script>

<style>
	.uni-media-list{
		padding: 40upx 32upx 50upx;
	}
	.uni-list:before{
		background: #fff;
	}
	.uni-media-list-body{
		padding-right: 56upx;
		height: auto;
	}
	.uni-media-list-text-bottom{
		color: #444;
		line-height: 36upx;
	}
	.uni-media-list-logo{
		height: 150upx;
		width: 200upx;
		margin-right: 0;
	}
	.item-bottom-item{
		margin-right: 20upx;
	}
	.item-bottom-item.zhiding{
		width: 68upx;
		height: 40upx;
		line-height: 40upx;
		text-align: center;
		color: #fff;
		background: #c49c5a;
	}
	.item-bottom{
		padding-right: 10upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		font-size: 11px;
		line-height: 40upx;
		color: #B2B2B2;
	}
	
</style>
