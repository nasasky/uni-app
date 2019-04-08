<template>
	<view>
		
		<view class="uni-list-cell-db">
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="pickerbox">
						<view class="uni-input">{{date}}</view>
						<view class="xuanze">请选择<label class="iconfont">&#xe640;</label></view>
					
				</view>
			</picker>
		</view>
			
	</view>
</template>
<script>
	export default {
		name:"timePicker",
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				title: 'picker',
				array: ['中国', '美国', '巴西', '日本'],
				index: 0,
				date: currentDate,
				time: '12:01'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			bindTimeChange: function(e) {
				this.time = e.target.value
			},
			getDate(type) {
				const date = new Date();

				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;

				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style>
	.pickerbox{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}
	.xuanze{
		display: flex;
		flex-direction: row;
		align-items: center;
		color:rgba(153,153,153,1);
	}
	label{
		margin-left: 20upx;
	}
</style>