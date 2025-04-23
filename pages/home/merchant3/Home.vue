<template>
	<view class="home-container">
		<text>商家3</text>
		<IdentitySelector @selectIdentity="onIdentitySelect" />
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

			const onIdentitySelect = (type) => {
				if (type >= 2 && !userStore.isMerchant) {
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
					userStore.setUserType(type);
					uni.switchTab({
						url: '/'+tabBarConfig[type].list[0].pagePath
					});
				}
			};

			return {
				selectedIndex,
				onIdentitySelect
			};
		}
	};
</script>

<style scoped>
	.home-container {
		padding: 20px;
	}
</style>