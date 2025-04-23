<template>
	<view class="merchant-home" v-if="userStore.hasPermission(2)">
		<text>商家1端首页</text>
		<button @click="userStore.setUserType(1)">返回用户端</button>
	</view>
	<view v-else>
		<text>您没有权限访问此商家端</text>
		<button @click="userStore.setUserType(1)">返回用户端</button>
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '@/stores/userStore'

	const userStore = useUserStore()

	// 页面加载时校验权限
	onLoad(() => {
		if (!userStore.hasPermission(2)) {
			uni.showToast({
				title: '权限不足',
				icon: 'none'
			})
			uni.switchTab({
				url: '/pages/my/user/My'
			})
		}
	})
</script>