<template>
	<view class="my-page">
		<text>我的（用户端）</text>
		<IdentitySelector /> <!-- 身份选择组件 -->
		<BottomTab></BottomTab>
	</view>
</template>

<script setup>
	import BottomTab from '@/components/navigation/BottomTab.vue';
	import IdentitySelector from '@/components/form/IdentitySelector.vue';
</script>

<style scoped>
	.my-page {
		padding: 20px;
		min-height: 100vh;
	}
</style>