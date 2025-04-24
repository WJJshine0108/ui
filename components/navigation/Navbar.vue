<template>
	<!-- 完全复刻截图导航栏 -->
	<view class="wechat-navbar">
		<!-- 状态栏 (高度20px) -->
		<view class="status-bar">
			<text class="brand">WeChat</text>
			<text class="time">17:33</text>
			<view class="battery">100%</view>
		</view>

		<!-- 导航栏主体 (高度44px) -->
		<view class="nav-body">
			<text class="title">标题</text>
			<view class="right-icons">
				<image src="/static/wechat/icon_more.png" class="icon" />
				<image src="/static/wechat/icon_camera.png" class="icon" />
			</view>
		</view>
	</view>
</template>

<style scoped>
	/* 精准还原截图样式 */
	.wechat-navbar {
		background: #ffffff;
	}

	.status-bar {
		height: 20px;
		padding: 0 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #f8f8f8;
		font-size: 12px;
	}

	.nav-body {
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 17px;
		font-weight: 600;
	}

	.right-icons {
		display: flex;
		gap: 20px;
	}

	.icon {
		width: 24px;
		height: 24px;
	}
</style>