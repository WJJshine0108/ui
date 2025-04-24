<template>
	<view class="tabbar" :style="{ paddingBottom: safeAreaBottom + 'px' }">
		<view v-for="(item, index) in tabs" :key="index" class="tab-item" @click="switchTab(item)">
			<image :src="selectedIndex === index ? getIconPath(item.selectedIcon) : getIconPath(item.icon)"
				class="tab-icon" />
			<text :class="['text', { active: selectedIndex === index }]">
				{{ item.text }}
			</text>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from 'vue';
	import {
		useUserStore
	} from '@/stores/userStore';
	import {
		tabBarConfig
	} from '@/config/tabBar.js';

	// 微信小程序安全区域适配
	const safeAreaBottom = ref(uni.getSystemInfoSync().safeAreaInsets.bottom || 0);
	const userStore = useUserStore();

	const tabs = computed(() => {
		const userType = userStore.userType || 1; // 默认用户类型为1
		return tabBarConfig[userType]?.list || [];
	});

	const selectedIndex = ref(0);

	const getIconPath = (iconName) => {
		return `/static/${iconName}.png`;
	};

	const switchTab = (item) => {
		const index = tabs.value.findIndex(tab => tab.pagePath === item.pagePath);
		selectedIndex.value = index;
		uni.redirectTo({
			url: `/${item.pagePath}`
		});
	};
</script>

<style scoped>
	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 50px;
		background: #ffffff;
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.05);
	}

	.tab-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.tab-icon {
		width: 24px;
		height: 24px;
		margin-bottom: 2px;
	}

	.text {
		font-size: 10px;
		color: #666;
	}

	.text.active {
		color: #007AFF;
		font-weight: 500;
	}
</style>