<template>
	<view id="app">
		<Navbar :title="currentTitle">
			<template #right>
				<button v-if="userStore.isMerchant" @click="userStore.clearUser()">切换到普通用户</button>
			</template>
		</Navbar>
		<router-view />
		<!-- 修正后：仅在目标页面显示 -->
		<BottomTab v-if="isTabBarPage" />
	</view>
</template>

<script>
	import {
		useUserStore
	} from './stores/userStore';
	import Navbar from './components/navigation/Navbar.vue';
	import BottomTab from './components/navigation/BottomTab.vue';
	import {
		computed
	} from 'vue';

	export default {
		components: {
			Navbar,
			BottomTab
		},
		setup() {
			const userStore = useUserStore();

			// 修正后的路由判断（关键修复点）
			const isTabBarPage = computed(() => {
				const currentPage = getCurrentPages().at(-1);
				if (!currentPage) return false;
				const pageModule = currentPage.route.split('/')[2]; // 如 'home', 'category'
				return ['home', 'category', 'itinerary', 'my'].includes(pageModule);
			});

			return {
				userStore,
				isTabBarPage
			};
		}
	};
</script>