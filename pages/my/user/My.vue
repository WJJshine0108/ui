<template>
	<view class="my-page">
		<text v-if="!userStore.isMerchant">当前身份：普通用户</text>
		<text v-else>当前身份：商家{{ userStore.userType - 1 }}端</text>

		<view class="identity-switch" v-if="userStore.isMerchant">
			<button @click="switchToUser">切回用户端</button>
		</view>

		<view class="merchant-switch" v-else>
			<button @click="userStore.setUserType(2)">进入商家1端</button>
			<button @click="userStore.setUserType(3)">进入商家2端</button>
			<button @click="userStore.setUserType(4)">进入商家3端</button>
		</view>
	</view>
</template>

<script setup>
	import {
		useUserStore
	} from '@/stores/userStore'

	const userStore = useUserStore()

	const switchToUser = () => {
		userStore.setUserType(1)
	}
</script>