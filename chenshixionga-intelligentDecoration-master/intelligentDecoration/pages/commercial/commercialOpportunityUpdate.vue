<template>
	<scroll-view class="list" scroll-y>
		<view class="content">
			<view class="detail-content">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>商机</text>
						<text v-if="isDetail" class="uni-cus-input">{{detail.lead_name}}</text>
						<input v-else v-model="detail.lead_name"/>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>客户</text>
						<text v-if="isDetail" class="uni-cus-input">{{detail.customer_name}}</text>
						<input v-else v-model="detail.customer_name"/>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>电话</text>
						<text v-if="isDetail" class="uni-cus-input">{{detail.customer_mobile}}</text>
						<input v-else v-model="detail.customer_mobile"/>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showStatePicker()">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>状态</text>
						<text :class="{'uni-cus-input': isDetail}">{{detail.crm_state}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showDesignerPicker()">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>设计师</text>
						<text :class="{'uni-cus-input': isDetail}">{{detail.designer_name}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showSalesmanPicker()">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>业务员</text>
						<text :class="{'uni-cus-input': isDetail}">{{detail.saleman}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showMulCityPicker">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>省市区</text>
						<text :class="{'uni-cus-input': isDetail}">{{detail.state_name}}{{detail.city_name}}{{detail.zone_name}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>街道</text>
						<text v-if="isDetail" class="uni-cus-input">{{detail.street}}</text>
						<input v-else v-model="detail.street"/>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showBuildingsPicker">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>楼盘</text>
						<text :class="{'uni-cus-input': isDetail}">{{detail.building_name}}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-if="isDetail">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>最后沟通时间</text>
						<text class="uni-cus-input">{{ detail.last_date }}</text>
					</view>
				</view>
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" @click="showDecoratePicker()">
					<view class="uni-list-cell-navigate" :class="{'com-oppor-item': isDetail}">
						<text>装修情况</text>
						<text :class="{'uni-cus-input': isDetail}" :disabled="isDetail">{{transformDecoration[detail.fitment_info]}}</text>
					</view>
				</view>
			</view>
			<view class="note-content">
				<view v-if="isDetail" class="uni-cus-input" style="height: 150upx;padding-left: 15upx;"> 描述 : {{detail.description}}</view>
				<textarea v-else placeholder="描述" v-model="detail.description" class="detail-note"></textarea>
			</view>
			<view class="cus-image">
				<cus-upload-image :imageList="imageList" @acquirePaths="acquirePaths" :show="!isDetail" :removeMark="!isDetail"></cus-upload-image>
			</view>

			<button class="btn-primary" v-if="!isDetail" type="primary" @click="send">完成</button>
		</view>
		<mpvue-picker ref="mpvuePickerStateRef" :deepLength="1" :pickerValueDefault="pickerValueDefault" @onConfirm="onStateConfirm"
		 :pickerValueArray="commercialState"></mpvue-picker>

		<mpvue-picker ref="mpvuePickerDesignerRef" :deepLength="1" :pickerValueDefault="pickerValueDesigner" @onConfirm="onDesignerConfirm"
		 :pickerValueArray="designers"></mpvue-picker>

		<mpvue-picker ref="mpvuePickerSalesmanRef" :deepLength="1" :pickerValueDefault="pickerValueSalesman" @onConfirm="onSalesmanConfirm"
		 :pickerValueArray="salesman"></mpvue-picker>

		<mpvue-picker ref="mpvuePickerDecorateRef" :deepLength="1" :pickerValueDefault="pickerValueDecorate" @onConfirm="onDecorateConfirm"
		 :pickerValueArray="decorateCondition"></mpvue-picker>
		 
		 <mpvue-picker ref="mpvuePickerBuildingsRef" :deepLength="1" :pickerValueDefault="pickerValueBuildings" @onConfirm="onBuildingsConfirm"
		  :pickerValueArray="buildings"></mpvue-picker>

		<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onCityConfirm"></mpvue-city-picker>
	</scroll-view>
</template>

<script>
	import {
		commercialState,
		designers,
		salesman,
		decorateCondition,
		buildings
	} from '../../common/stateData.js'
	export default {
		data() {
			return {
				detail: { // 初始化后，第一次选择赋值才会成功
					crm_state: '',
					designer_name: '',
					saleman: '',
					state_name: '',
					city_name: '',
					building_name: '',
					zone_name: '',
					fitment_info: ''
				},
				imageList: [],
				updateDetail: {},
				isDetail: true,
				sendDataPath: '', // 新增与修改地址
				transformDecoration: {},
				decorateCondition: decorateCondition,
				pickerValueDecorate: [0],
				commercialState: commercialState,
				pickerValueDefault: [0],
				designers: designers,
				pickerValueDesigner: [0],
				salesman: salesman,
				pickerValueSalesman: [0],
				buildings: buildings,
				pickerValueBuildings: [0],
				cityPickerValueDefault: [0, 0, 1]
			}
		},
		onLoad(param) {
			if (param.isAdd) {
				this.sendDataPath = '/lwj/app_crm_create'
				this.setAppBarButton()
				this.isDetail = false,
					uni.setNavigationBarTitle({
						title: '商机新增'
					})
			} else { // 详情
				this.getCommerceDetail(param.id)
			}
			this.dataTransform()
		},
		onNavigationBarButtonTap() {
			this.isDetail = false
			this.sendDataPath = '/lwj/app_crm_write'
			uni.setNavigationBarTitle({
				title: '商机编辑'
			})
			this.setAppBarButton()
		},
		methods: {
			setAppBarButton(data="") { // 设置导航栏按钮为空
				let pages = getCurrentPages();
				let page = pages[pages.length - 1];
				// #ifdef APP-PLUS
				let currentWebview = page.$getAppWebview();
				let titleObj = currentWebview.getStyle().titleNView;
				if (!titleObj.buttons) {
					return;
				}
				titleObj.buttons[0].text = data;
				currentWebview.setStyle({
					titleNView: titleObj
				});
				// #endif
			},

			// 省市区
			showMulCityPicker() {
				if(this.isDetail) return
				this.$refs.mpvueCityPicker.show()
			},
			onCityConfirm(e) {
				const tempArr = e.label.split('-')
				this.detail.state_name = tempArr[0]
				this.detail.city_name = tempArr[1]
				this.detail.zone_name = tempArr[2]
				this.updateDetail.zone_id = e.cityCode
			},

			// 装修情况
			showDecoratePicker() {
				if (this.isDetail) return
				this.pickerValueDecorate = [0]
				this.$refs.mpvuePickerDecorateRef.show()
			},
			onDecorateConfirm(e) {
				this.detail.fitment_info = e.value[0]
				this.updateDetail.fitment_info = e.value[0]
			},
			dataTransform() {
				for (let i = 0; i < this.decorateCondition.length; i++) {
					this.transformDecoration[this.decorateCondition[i].value] = this.decorateCondition[i].label
				}
			},

			// 设计师
			showDesignerPicker() {
				if (this.isDetail) return
				this.pickerValueDesigner = [0]
				this.$refs.mpvuePickerDesignerRef.show()
			},
			onDesignerConfirm(e) {
				this.updateDetail.lead_designer_id = e.value[0]
				this.detail.designer_name = e.label
			},

			// 业务员
			showSalesmanPicker() {
				if (this.isDetail) return
				this.pickerValueSalesman = [0]
				this.$refs.mpvuePickerSalesmanRef.show()
			},
			onSalesmanConfirm(e) {
				this.updateDetail.user_id = e.value[0]
				this.detail.saleman = e.label
			},

			// 状态
			showStatePicker() {
				if (this.isDetail) return
				this.pickerValueDefault = [0]
				this.$refs.mpvuePickerStateRef.show()
			},
			onStateConfirm(e) {
				this.updateDetail.stage_crm_id = e.value[0]
				this.detail.crm_state = e.label
			},
			
			// 楼盘数据
			showBuildingsPicker() {
				if (this.isDetail) return
				this.pickerValueBuildings = [0]
				this.$refs.mpvuePickerBuildingsRef.show()
			},
			onBuildingsConfirm(e) {
				this.updateDetail.building_id = e.value[0]
				this.detail.building_name = e.label
			},

			// 商机信息提交
			send() {
				uni.showLoading({
					title: '信息提交...',
					mask: false
				});
				if (this.detail.id) {
					this.updateDetail.crm_id = this.detail.id
				}
				if (this.detail.partner_id) {
					this.updateDetail.partner_id = this.detail.customer_id
				}
				this.updateDetail.lead_name = this.detail.lead_name
				this.updateDetail.customer_name = this.detail.customer_name
				this.updateDetail.customer_mobile = this.detail.customer_mobile
				this.updateDetail.crm_state = this.detail.crm_state
				this.updateDetail.street = this.detail.street
				this.updateDetail.building_name = this.detail.building_name
				this.updateDetail.description = this.detail.description
				this.updateDetail.done_date = this.detail.done_date
				uni.request({
					url: this.$store.state.baseUrl + this.sendDataPath,
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: this.updateDetail,
					success: res => {
						uni.hideLoading()
						if (res.data.code === 1) {
							this.isDetail = true
							uni.setNavigationBarTitle({
								title: '商机详情'
							})
							this.setAppBarButton('编辑')
							uni.showToast({
								title: '信息提交完成',
								mask: false,
								duration: 1500
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			bindDateChange(e) {
				this.detail.last_date = e.target.value
			},
			acquirePaths(paths) {
				this.updateDetail.picture_data = paths
			},
			imageError(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			getCommerceDetail(id) {
				uni.showLoading({
					title: '',
					mask: true
				});
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/get_app_crm_info',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						crm_id: id
					},
					success: res => {
						this.detail = res.data.data.list
						this.imageList = res.data.data.list.att_list.map(item => item.imgurl)
						// this.isFinish = this.detail.state === 'done' //判断是否完成验收
						uni.hideLoading()
					},
					fail: () => {},
					complete: () => {}
				});
			},
		},
	}
</script>

<style>
	.content {
		padding: 0;
	}

	.btn-primary {
		width: 650upx;
		padding-left: 50upx;
		margin-bottom: 20upx;
		margin-top: 20upx;
	}

	.uni-cus-input {
		color: #999999;
	}

	.uni-list-cell-navigate {
		padding-left: 50upx;
	}

	.uni-list-cell-navigate text:nth-child(2),
	.uni-list-cell-navigate input {
		width: 400upx;
		display: inline-block;
		text-align: right !important;
		margin-left: 10upx;
		padding-right: 10upx;
	}

	.uni-card {
		margin-top: 10upx;
		margin-bottom: 0l;
	}

	.note-content,
	.cus-image,
	.detail-content {
		margin-top: 10upx;
		background-color: #FFFFFF;
	}

	.note-content {
		padding: 10upx 40upx;
	}

	.ima-con {
		width: 200px;
		height: 200px;
		background-color: #eeeeee;
	}

	.detail-note {
		height: 150upx;
	}

	/* .com-oppor-item{
		padding-bottom: 10upx;
		padding-top: 10upx;
	} */

	.last-time {
		display: inline-block;
		height: 80upx;
	}

	.choose-last-time {
		display: inline-block;
		min-height: 30upx;
		min-width: 100upx;
	}
</style>
