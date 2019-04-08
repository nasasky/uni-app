<template>
	<view class="content-wrap">
		<view class="segmented-padding-wrap">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" styleType="text" activeColor="#007aff"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				<task-items taskType="0" :showSearch="showSearchArr[0]"></task-items>
			</view>
			<view v-show="current === 1">
				<task-items taskType="1" :showSearch="showSearchArr[1]"></task-items>
			</view>
			<view v-show="current === 2">
				<task-items taskType="2" :showSearch="showSearchArr[2]"></task-items>
			</view>
		</view>
	</view>
</template>

<script>
	import taskItems from './taskItems'
	export default {
		data() {
			return {
				items: [
					'待办任务',
					'即将开始',
					'已完成'
				],
				current: 0,
				showSearchArr: [false, false, false],
				showSearch: false
			}
		},

		components: {
			taskItems
		},
		onLoad(param) {
			this.current = parseInt(param.index)
		},
		onNavigationBarButtonTap() {
			this.showSearchArr[this.current] = !this.showSearchArr[this.current]
			this.showSearch = !this.showSearch
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			}

		}
	}
</script>

<style>
	.content-wrap {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding-top: 90upx;
	}

	.segmented-padding-wrap {
		position: fixed;
		left: 0;
		top: 0;
		width: 750upx;
		background-color: #ffffff;
	}
</style>
