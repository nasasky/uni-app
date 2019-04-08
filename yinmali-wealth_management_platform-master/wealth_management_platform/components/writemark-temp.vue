<template>
	<view class='search-temp'>
		<view class="search-box">
			
			<view class="searchImg iconfont">
				&#xe63a;
			</view>
			<input class="searchInp" type="text" value="" placeholder="写评论" />
			
			<view class="clear iconfont" style="display: none;">
				&#xe60a;
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"writemark-temp",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.search-temp {
		background: rgba(255,255,255,1);
		height: 52upx;
		padding:20upx;
		
	}
	.search-box{
		background:rgba(245,245,245,1);
		border-radius:30px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.searchImg,
	.clear {
		
		margin: 0 20upx
	}

	.searchInp {
		
		flex: 1;
		padding: 0 10upx
	}
</style>
