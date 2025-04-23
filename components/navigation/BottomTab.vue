<template>
	<view class="bottom-tab">
		<block v-for="(item, index) in currentTabList" :key="index">
			<view class="tab-item" :class="{ active: selectedIndex === index }" @click="onTabClick(index)">
				<!-- 自定义图标，需替换为实际图标路径 -->
				<image :src="selectedIndex === index ? item.selectedIcon : item.icon" mode="widthFix"
					class="tab-icon" />
				<text class="tab-text">{{ item.text }}</text>
			</view>
		</block>
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '@/stores/userStore';
	import {
		tabBarConfig
	} from '@/config/tabBar.js';
	import {
		ref,
		computed
	} from 'vue';

	const userStore = useUserStore();
	const selectedIndex = ref(0);
	const currentTabList = computed(() =>
		tabBarConfig[userStore.userType]?.list || tabBarConfig[1].list // 默认普通用户Tab
	);

	const onTabClick = (index) => {
		selectedIndex.value = index;
		uni.navigateTo({
			url: currentTabList.value[index].pagePath
		});
	};
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
	}

	.tab-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 8px 0;
	}

	.tab-icon {
		width: 24px;
		height: 24px;
		margin-bottom: 4px;
	}

	.tab-text {
		font-size: 12px;
		color: var(--uni-text-color-grey);
	}

	.tab-item.active .tab-text {
		color: var(--uni-color-primary);
	}
</style>