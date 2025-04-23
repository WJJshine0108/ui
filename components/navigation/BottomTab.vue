<template>
	<view class="bottom-tab" v-show="shouldShowTab">
		<view v-for="(item, index) in currentTabList" :key="index" class="tab-item"
			:class="{ active: selectedIndex === index }" @click="switchTab(index, item)">
			<image :src="`/static/icons/${selectedIndex === index ? item.selectedIcon : item.icon}.png`"
				mode="aspectFit" class="tab-icon" />
			<text class="tab-text">{{ item.text }}</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue'
	import {
		useUserStore
	} from '@/stores/userStore'

	const userStore = useUserStore()
	const selectedIndex = ref(0)
	const currentPage = getCurrentPages().at(-1) || {
		route: ''
	}

	// 获取当前用户类型对应的Tab列表
	const currentTabList = computed(() =>
		userStore.getTabBarConfig().then(config => config[userStore.userType].list)
	)

	// 判断是否显示TabBar（排除登录/注册等页面）
	const shouldShowTab = computed(() => {
		return !currentPage.route.includes('login') && !currentPage.route.includes('register')
	})

	const switchTab = (index, item) => {
		selectedIndex.value = index
		uni.switchTab({
			url: `/${item.pagePath}`
		})
	}
</script>

<style scoped>
	.bottom-tab {
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #fff;
		border-top: 1px solid var(--uni-border-color);
		padding: 10px 0;
		z-index: 999;
		/* 新增：确保导航栏在页面上方 */
	}
</style>