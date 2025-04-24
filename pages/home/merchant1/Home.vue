<template>
	<view class="merchant-home" v-if="userStore.hasPermission(2)">
		<text>商家1端首页</text>
		<BottomTab></BottomTab>
	</view>
</template>

<script setup>
	import BottomTab from '@/components/navigation/BottomTab.vue';
</script>