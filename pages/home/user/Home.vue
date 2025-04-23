<template>
	<view class="home-container">
		<text>普通用户首页</text>
		<IdentitySelector @selectIdentity="onIdentitySelect" />
		<button @click="a(1)">999</button>
	</view>
</template>

<script>
	import {
		useUserStore
	} from '@/stores/userStore';
	import IdentitySelector from '@/components/form/IdentitySelector.vue';
	import {
		ref
	} from 'vue';
	import {
		tabBarConfig
	} from '@/config/tabBar.js';
	export default {
		components: {
			IdentitySelector
		},
		setup() {
			const userStore = useUserStore();
			const selectedIndex = ref(0);
			const a = (e) => {
				console.log(userStore.userType)
			};
			const onIdentitySelect = (type) => {
				if (type >= 2 && !userStore.isMerchant) { // 非商家用户选择商家类型
					uni.showModal({
						title: '权限提示',
						content: '您需要注册成为商家才能访问',
						success: (res) => {
							if (res.confirm) uni.navigateTo({
								url: '/pages/merchant/Register'
							});
						}
					});
				} else {
					userStore.setUserType(type); // 更新用户类型
					uni.switchTab({
						url: '/'+tabBarConfig[type].list[0].pagePath // 跳转到对应商家首页
					});
				}
			};
			return {
				selectedIndex,
				onIdentitySelect,
				a
			};
		}
	};
</script>

<style scoped>
	.home-container {
		padding: 20px;
	}
</style>