<template>
	<view>
		<Navbar :title="getCurrentTitle" />
		<router-view />
		<BottomTab />
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '@/stores/userStore';
	import Navbar from '@/components/navigation/Navbar.vue';
	import BottomTab from '@/components/navigation/BottomTab.vue';
	import {
		computed
	} from 'vue';

	const userStore = useUserStore();

	// 动态获取页面标题
	const getCurrentTitle = computed(() => {
		const currentPage = getCurrentPages().at(-1);
		return currentPage?.route.includes('user') ? '用户端' :
			currentPage?.route.includes('merchant1') ? '商家1端' :
			currentPage?.route.includes('merchant2') ? '商家2端' :
			currentPage?.route.includes('merchant3') ? '商家3端' : '旅游平台';
	});
</script>