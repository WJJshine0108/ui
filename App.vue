<template>
	<view>
		<Navbar :title="getCurrentTitle" />
		<router-view />
		<BottomTab v-if="isTabBarPage" />
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

	// 判断是否显示底部导航
	const isTabBarPage = computed(() => {
		const pages = getCurrentPages();
		if (!pages.length) return false;
		const currentPage = pages[pages.length - 1];
		const route = currentPage.route || currentPage.$page?.fullPath;
		return route?.startsWith('pages/home/') ||
			route?.startsWith('pages/category/') ||
			route?.startsWith('pages/itinerary/') ||
			route?.startsWith('pages/my/');
	});

	// 动态获取页面标题
	const getCurrentTitle = computed(() => {
		const currentPage = getCurrentPages().at(-1);
		return currentPage?.route.includes('user') ? '用户端' :
			currentPage?.route.includes('merchant1') ? '商家1端' :
			currentPage?.route.includes('merchant2') ? '商家2端' :
			currentPage?.route.includes('merchant3') ? '商家3端' : '旅游平台';
	});
</script>