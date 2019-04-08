<template>
	<view class="feedback-body feedback-uploader">
		<view class="uni-uploader">
			<view class="uni-uploader-head" v-if="hasHead">
				<view class="uni-uploader-title">{{imgTitle}}</view>
				<view class="uni-uploader-info">{{imageList.length}}/8</view>
			</view>
			<view class="uni-uploader-body">
				<view class="uni-uploader__files">
					<block v-for="(image,index) in imageList" :key="index">
						<view class="uni-uploader__file" style="position: relative;" :style="{ width:imgSize2px, height:imgSize2px, margin:imgMargin2px}">
							<image class="uni-uploader__img" :src="image" @tap="previewImage(index)" :style="{ width:imgSize2px, height:imgSize2px}"></image>
							<text class="close-view" @click="close(index, image)" v-if="removeMark">x</text>
						</view>
					</block>
					<view class="uni-uploader__input-box" :style="{ width:imgSize2px, height:imgSize2px}" v-show="imageList.length < count && show">
						<view class="uni-uploader__input" @tap="chooseImg"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'cus-upload-image',
		data() {
			return {
				picture_data: []
			};
		},
		props: {
			imageList: { // 显示图片
				type: Array,
				default: () => []
			},
			show: { //是否添加图片
				type: Boolean,
				default: () => true
			},
			count: { // 最大图片数量
				type: Number,
				default: () => 8
			},
			imgTitle: { //标题
				type: String,
				default: '点击预览图片'
			},
			removeMark: { // 删除图片按钮 
				type: Boolean,
				default: () => true
			},
			hasHead: { // 是否需要头部
				type: Boolean,
				default: () => true
			},
			imgSize: { // 图片大小
				type: Number,
				default: () => 210
			},
			imgMargin: { // 图片margin值
				type: Number,
				default: () => 10
			}
		},
		computed: {
			imgSize2px() {
				return uni.upx2px(this.imgSize) + 'px';
			},
			imgMargin2px() {
				return uni.upx2px(this.imgMargin) + 'px';
			},
		},
		methods: {
			chooseImg() { //选择图片
				uni.chooseImage({
					sourceType: ["camera", "album"],
					sizeType: "compressed",
					count: this.count - this.imageList.length,
					success: (imgRes) => {
						const tempFilePaths = imgRes.tempFilePaths
						this.uploadFiles(0, tempFilePaths)

					}
				})
			},
			uploadFiles(i, tempFilePaths) {
				if (tempFilePaths.length === i) {
					this.$emit("acquirePaths", this.picture_data)
					return
				}
				uni.uploadFile({ // 上传图片,每次上传一张图片
					url: 'http://132.232.54.239:18010/lwj/app_imgage_load',
					filePath: tempFilePaths[i],
					name: 'file',
					header: {
						token: this.$store.state.token
					},
					success: (uploadFileRes) => {
						const parseObj = JSON.parse(uploadFileRes.data)
						if (parseObj.code === 1) {
							this.imageList.push(parseObj.data.list[0]);
							this.picture_data.push(parseObj.data.list[0])
							this.uploadFiles(i + 1, tempFilePaths)
						} else if (parseObj.code === 0) {
							uni.showModal({
								title: '失败',
								content: `您上传的图片格式是：【'${tempFilePaths[i].substring(tempFilePaths[i].length-4)}'】,支持${parseObj.msg}`,
								showCancel: false,
								confirmText: '确定',
								success: res => {},
								fail: () => {},
								complete: () => {}
							});
						}
						
					}
				});
			},
			close(e, path) { // 删除图片
				uni.request({
					url: this.$store.state.baseUrl + '/lwj/app_imgage_delete',
					method: 'POST',
					header: {
						token: this.$store.state.token
					},
					data: {
						path: path
					},
					success: res => {
						if (res.data.code === 1) {
							uni.showToast({
								title: '图片删除完成~~',
								mask: false,
								duration: 1500
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
				this.imageList.splice(e, 1);
			},
			previewImage(i) { //预览图片
				uni.previewImage({
					current: this.imageList[i],
					urls: this.imageList
				});
			}
		},
	}
</script>

<style>
	.close-view {
		color: #FFFFFF;
		background-color: #999999;
		line-height: 36upx;
		height: 40upx;
		width: 40upx;
		text-align: center;
		font-size: 36upx;
		border-radius: 50%;
		position: absolute;
		right: 4upx;
		top: 4upx;
	}

	.uni-uploader-info {
		padding-right: 40upx;
	}
</style>
