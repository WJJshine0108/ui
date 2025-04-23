<template>
	<view id="app">
		<!-- 通用导航栏 -->
		<Navbar :title="currentTitle">
			<template #right>
				<!-- 商家端显示切换回普通用户按钮 -->
				<button v-if="userStore.isMerchant" @click="userStore.clearUser()">
					切换到普通用户
				</button>
			</template>
		</Navbar>

		<!-- 页面内容 -->
		<router-view />

		<!-- 动态底部标签栏（仅核心页面显示） -->
		<BottomTab v-if="isTabBarPage" />
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from './stores/userStore';
	import Navbar from './components/navigation/Navbar.vue';
	import BottomTab from '@/components/navigation/BottomTab.vue';
	import {
		computed,
		onMounted
	} from 'vue';

	const userStore = useUserStore();

	// 判断是否显示底部标签栏（home/category/itinerary/my 模块）
	const isTabBarPage = computed(() => {
		const currentPage = getCurrentPages().at(-1);
		if (!currentPage) return false;
		// 修正：路径格式为 'pages/模块/...'，模块名为路径的第二个部分（索引1）
		const pageModule = currentPage.route.split('/')[1]; // 原为索引2，现改为1
		return ['home', 'category', 'itinerary', 'my'].includes(pageModule);
	});

	// 动态页面标题（可根据路由配置进一步优化）
	const currentTitle = computed(() => {
		const currentPage = getCurrentPages().at(-1);
		const pageName = currentPage?.route.split('/').slice(-1)[0] || '旅游平台';
		return userStore.isMerchant ? `${pageName} - 商家端` : `${pageName} - 用户端`;
	});

	// 全局路由守卫（权限拦截）
	onMounted(() => {
		// 拦截所有导航操作（navigateTo/switchTab/reLaunch）
		const interceptors = ['navigateTo', 'switchTab', 'reLaunch'].map(type => {
			return uni.addInterceptor(type, {
				invoke(options) {
					// 解析目标页面的商家类型（路径格式：/pages/模块/商家类型/页面）
					const merchantTypeMatch = options.url.match(/\/merchant(\d)\/.+/);
					if (merchantTypeMatch) {
						const targetType = parseInt(merchantTypeMatch[1]) + 1; // merchant1对应type2
						if (!userStore.isMerchant || userStore.userType !== targetType) {
							// 权限不足提示
							uni.showModal({
								title: '权限提示',
								content: `您需要切换为${getMerchantName(targetType)}才能访问`,
								success: (res) => {
									if (res.confirm) {
										userStore.setUserType(targetType); // 尝试切换身份
									} else {
										options.url = '/pages/my/user/My'; // 回退到我的页面
									}
								}
							});
							return false; // 阻止原始导航
						}
					}
					return options;
				}
			});
		});

		// 清理拦截器（避免重复注册）
		return () => interceptors.forEach(interceptor => interceptor());
	});

	// 辅助函数：获取商家名称
	const getMerchantName = (type) => {
		const names = ['普通用户', '地接社商家', '组团社商家', '特色旅游服务商家'];
		return names[type] || '普通用户';
	};
</script>

<style>
	/* 全局容器样式 */
	#app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>