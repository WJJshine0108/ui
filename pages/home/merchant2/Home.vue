<template>
	<view class="home-container">
		<text>商家3</text>
		<IdentitySelector @selectIdentity="onIdentitySelect" />
		<BottomTab></BottomTab>
	</view>
</template>

<script setup>
	import BottomTab from '@/components/navigation/BottomTab.vue';
</script>

<style scoped>
	.home-container {
		padding: 20px;
	}
</style>