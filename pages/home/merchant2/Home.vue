<template>
	<view class="wechat-page">
		<!-- 导航栏 -->
		<Navbar />

		<!-- 空白内容区 -->
		<view class="content-container">
			<text class="placeholder-text">商家2首页</text>
		</view>

		<!-- 底部导航 -->
		<BottomTab />
	</view>
</template>

<script setup>
	import Navbar from '@/components/navigation/Navbar.vue'
	import BottomTab from '@/components/navigation/BottomTab.vue'
</script>

<style scoped>
	.wechat-page {
		background: #ffffff;
		height: 100vh;
	}

	.content-container {
		display: flex;
		justify-content: center;
		padding-top: 100px;
	}

	.placeholder-text {
		color: rgba(0, 0, 0, 0.5);
		font-size: 24px;
	}
</style>