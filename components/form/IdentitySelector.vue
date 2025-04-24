<template>
	<view class="identity-container">
		<!-- 标题栏 -->
		<view class="header">
			<text class="title">选择身份类型</text>
		</view>

		<!-- 身份选项列表 -->
		<view class="identity-list">
			<view v-for="(item, index) in identityList" :key="index" class="identity-item"
				:class="{ disabled: item.type >= 2 && !userStore.isMerchant }" @click="selectIdentity(item.type)">
				<text class="identity-name">{{ item.name }}</text>
				<text v-if="item.type >= 2 && !userStore.isMerchant" class="permission-tag">需商家认证</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '@/stores/userStore';

	const userStore = useUserStore();

	const identityList = ref([{
			type: 1,
			name: '普通用户'
		},
		{
			type: 2,
			name: '地接社商家'
		},
		{
			type: 3,
			name: '组团社商家'
		},
		{
			type: 4,
			name: '特色服务商家'
		}
	]);

	const selectIdentity = (type) => {
		if (type >= 2 && !userStore.isMerchant) {
			uni.showModal({
				title: '商家权限提示',
				content: '请先完成商家认证',
				confirmText: '去认证',
				success: (res) => {
					if (res.confirm) uni.navigateTo({
						url: '/pages/merchant/Register'
					});
				}
			});
			return;
		}
		userStore.setUserType(type);
		uni.switchTab({
			url: '/pages/home/user/Home'
		});
	};
</script>

<style scoped>
	.identity-container {
		background-color: #ffffff;
		min-height: 100vh;
	}

	.header {
		padding: 44px 20px 20px;
		/* 适配微信状态栏 */
		border-bottom: 1px solid #f5f5f5;
	}

	.title {
		font-size: 20px;
		font-weight: 500;
		color: #333;
	}

	.identity-list {
		padding: 20px;
	}

	.identity-item {
		padding: 16px;
		margin-bottom: 12px;
		border-radius: 8px;
		background: #f8f8f8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: all 0.2s;
	}

	.identity-item:active {
		background: #f0f0f0;
	}

	.disabled {
		opacity: 0.6;
		filter: grayscale(80%);
	}

	.identity-name {
		font-size: 16px;
		color: #333;
	}

	.permission-tag {
		font-size: 12px;
		color: #ff5722;
		padding: 2px 8px;
		border-radius: 4px;
		background: rgba(255, 87, 34, 0.1);
	}
</style>