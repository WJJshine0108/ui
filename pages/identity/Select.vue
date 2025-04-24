<template>
	<view class="identity-select-page">
		<IdentitySelector @selectIdentity="handleIdentitySelect" />
	</view>
</template>

<script>
	import IdentitySelector from '@/components/form/IdentitySelector.vue';
	import {
		useUserStore
	} from '@/stores/userStore';
	import {
		tabBarConfig
	} from '@/config/tabBar.js';

	export default {
		components: {
			IdentitySelector
		},
		methods: {
			handleIdentitySelect(type) {
				const userStore = useUserStore();
				if (type === 1 || userStore.isMerchant) {
					userStore.setUserType(type);
					const firstPage = tabBarConfig[type]?.list[0];
					if (firstPage) {
						uni.switchTab({
							url: `/${firstPage.pagePath}`
						});
					}
				} else {
					uni.showModal({
						title: '提示',
						content: '您没有权限进入该端，是否注册成为商家？',
						success: (res) => {
							if (res.confirm) uni.navigateTo({
								url: '/pages/merchant/Register'
							});
						}
					});
				}
			}
		}
	};
</script>

<style scoped>
	.identity-select-page {
		padding: 20px;
	}
</style>