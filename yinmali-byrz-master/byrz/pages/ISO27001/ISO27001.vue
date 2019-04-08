<template>
	<view class="fml-detail">
		<view class="detail-img">
			<image src="../../static/images/banner/banner1.jpg"></image>
		</view>
		<view class="detail-info">
			<view class="info-main">
				<view class="detail-name text-center">ISO 27001 认证</view>
				<view class="detail-context">
				ISO27001 信息安全管理实用规则ISO/IEC27001的前身为英国的BS7799标准，该标准由英国标准协会（BSI）于1995年2月提出，并于1995年5月修订而成的。1999年BSI重新修改了该标准。BS7799分为两个部分：BS7799-1，信息安全管理实施规则BS7799-2，信息安全管理体系规范。第一部分对信息安全管理给出建议，供负责在其组织启动、实施或维护安全的人员使用；第二部分说明了建立、实施和文件化信息安全管理体系（ISMS）的要求，规定了根据独立组织的需要应实施安全控制的要求。
				</view>
				<view class="detail-good">
					<view class="detail-name text-center">认证益处</view>
					<view class="good-list">
						<view class="fml-flex flex-start">
							<view class="code-num">1)：</view>
							<view class="flex-1">符合法律法规要求</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">2)：</view>
							<view class="flex-1">维护企业的声誉、品牌和客户信任</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">3)：</view>
							<view class="flex-1">履行信息安全管理责任</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">4)：</view>
							<view class="flex-1">增强员工的意识、责任感和相关技能</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">5)：</view>
							<view class="flex-1">保持业务持续发展和竞争优势</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">6)：</view>
							<view class="flex-1">实现风险管理</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">7)：</view>
							<view class="flex-1">减少损失，降低成本</view>
						</view>
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

			};
		}
	}
</script>

<style>
	@import '../../public.css';

	view {
		font-size: 26upx;
	}

	.fml-detail image {
		width: 100%;
		height: 300upx;
	}

	.code-num {
		color: #1F73F3
	}

	.detail-title {
		background: #1F73F3;
		padding: 10upx;
		color: #fff;
		display: inline;
		font-size:30upx;
	}

	.detail-name {
		margin: 20upx 0;
		color: #1F73F3;
		font-size:30upx;

	}

	.detail-context {
		line-height: 40upx;
		margin: 10upx 30upx;
	}

	.detail-context view {
		margin: 20upx 0;
	}

	.good-list {
		margin:0 30upx 30upx 30upx;
	}

	.good-list view {
		margin-bottom: 10upx;
	}
</style>
