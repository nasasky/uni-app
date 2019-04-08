<template>
	<view class="page">
		
		<view class="product-list">
			<view class="product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image  class="product-image" :src="product.image"></image>
				</view>
				<view class="product-title">{{product.title}}</view>
				<view class="product-bot">
					<view class="product-price">
						<text class="product-price-original">{{product.favourPrice}}积分</text>
						<text class="product-price-favour">{{product.originalPrice}}积分</text>
						<text class="product-duration">2019.10.10-102.4422</text>
						
					</view>
					<view class="shoucang">
						<text class="product-tip iconfont">&#xe87c;</text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'product-list',
            productList: [{
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
                    title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
                    originalPrice: 9999,
                    favourPrice: 8888,
                    tip: '自营'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
                    title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
                    originalPrice: 3499,
                    favourPrice: 3399,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
                    title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
                    originalPrice: 12999,
                    favourPrice: 10688,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
                    title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
                    originalPrice: 999,
                    favourPrice: 958,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
                    title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
                    originalPrice: 8888,
                    favourPrice: 8288,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
                    title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
                    originalPrice: 2899,
                    favourPrice: 2799,
                    tip: '自营'
                }],
            renderImage: false
        };
    },
    methods: {
        loadData(action = 'add') {
            const data = [
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
                    title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
                    originalPrice: 9999,
                    favourPrice: 8888,
                    tip: '自营'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
                    title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
                    originalPrice: 3499,
                    favourPrice: 3399,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
                    title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
                    originalPrice: 12999,
                    favourPrice: 10688,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
                    title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
                    originalPrice: 999,
                    favourPrice: 958,
                    tip: '秒杀'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
                    title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
                    originalPrice: 8888,
                    favourPrice: 8288,
                    tip: '优惠'
                },
                {
                    image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
                    title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
                    originalPrice: 2899,
                    favourPrice: 2799,
                    tip: '自营'
                }
            ];

            if (action === 'refresh') {
                this.productList = [];
            }

            data.forEach(item => {
                this.productList.push(item);
            });
        }
    },
    onLoad() {
        this.loadData();
        setTimeout(()=> {
            this.renderImage = true;
        }, 300);
    },
    onPullDownRefresh() {
        this.loadData('refresh');
        // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
        setTimeout(() => {
            uni.stopPullDownRefresh();
        }, 2000);
    },
    onReachBottom() {
        this.loadData();
    }
};
</script>

<style>
.product-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
	justify-content: space-around;
}

.product {
	background: rgb(255,255,255);
    padding: 10upx 30upx;
    display: flex;
    flex-direction: column;
	margin-bottom: 10upx;
}

.image-view {
    height: 298upx;
    width: 298upx;
}

.product-image {
    width: 100%;
	height: 100%;
}

.product-title {
    width: 300upx;
    font-size: 24upx;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
	font-weight:500;
	color:rgba(51,51,51,1);
	line-height:30upx;
	
}

.product-price {
    font-size: 28upx;
    display: flex;
	flex-direction: column;
}

.product-price-original {
    font-size:18px;

	font-weight:bold;
	color:rgba(196,156,90,1);
	line-height:38upx;
}

.product-price-favour {
	font-size:12px;
	font-family:PingFang-SC-Medium;
	font-weight:500;
	text-decoration:line-through;
	color:rgba(204,204,204,1);
	line-height:38upx;
}
.product-duration{
	font-size:11px;

	font-weight:500;
	color:rgba(204,204,204,1);
	line-height:38upx;
}
.product-bot{
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around
}
.product-tip {
	font-size: 27px;
    color: rgba(196,156,90,1);
    
  
}
</style>
