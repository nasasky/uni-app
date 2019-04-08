<template>
	<view class="search">
		<view class='search-temp'>
				<view class="search-box">
					<view class="searchImg iconfont">
						&#xe65a;
					</view>
					<input class="searchInp" type="text" value="" placeholder="按条件搜索" />
					<view class="clear iconfont" style="display: none;">
						&#xe60a;
					</view>
				</view>
		
			</view>
	</view>
	
</template>

<script>
	export default {
		name: "search-temp",
		data() {
			return {

			}
		}
	}
</script>

<style>
	.search{
		width: 100%;
	}
	.search-temp {
		height: 52upx;
		padding: 20upx;
		
		
	}

	.search-box {
		background: white;
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
	.input-placeholder{
		height: 52upx;
		line-height: 52upx;
	}
</style>
