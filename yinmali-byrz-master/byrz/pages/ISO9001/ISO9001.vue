<template>
	<view class="fml-detail">
		<view class="detail-img">
			<image src="../../static/images/banner/banner1.jpg"></image>
		</view>
		<view class="detail-info">
			<view class="info-main">
				<view class="detail-name text-center">ISO 9001 认证</view>
				<view class="detail-context">
					ISO9000族标准是世界上许多经济发达国家质量管理实践经验的科学总结，为组织提供了具有科学性的质量管理和质量保证的方法和手段。ISO9000系列标准自1987年发布以来，经历了1994版、2000版、2008版的历次修改，直至现今的ISO9001:2015版系列标准。
					<view>ISO9001标准为组织的质量管理体系提出了具体要求，通过目标管理，倡导强调需求、增值、流程绩效和有效性及持续改进的过程方法。新版的ISO9001标准更加通用，适用于各种类型,不同规模和提供不同产品和服务的组织。</view>
					采用质量管理体系是组织的一项战略决策，能够帮助其提高内部管理水平和整体绩效，并证实组织具有提供既满足顾客要求又满足适用法规要求的产品和服务的能力，为推动组织可持续发展奠定良好基础。
				</view>
				<view class="detail-good">
					<view class="detail-name text-center">认证益处</view>
					<view class="good-list">
						<view class="fml-flex flex-start">
							<view class="code-num">1)：</view>
							<view class="flex-1">稳定提供满足顾客要求以及适用的法律法规要求的产品和服务的能力</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">2)：</view>
							<view class="flex-1">促成增强顾客满意的机会</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">3)：</view>
							<view class="flex-1">应对与其环境和目标相关的风险和机遇</view>
						</view>
						<view class="fml-flex flex-start">
							<view class="code-num">3)：</view>
							<view class="flex-1">证实符合规定的质量管理体系要求的能力</view>
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
