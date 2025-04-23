// stores/userStore.js
import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		// 用户类型：1=普通用户，2=地接社商家，3=组团社商家，4=特色旅游服务商家
		userType: uni.getStorageSync('userType') || 1, // 默认为普通用户
		userInfo: null // 可扩展用户详情信息
	}),
	getters: {
		// 判断是否为商家用户（类型>=2）
		isMerchant() {
			return this.userType >= 2;
		},
		// 当前用户身份名称
		currentIdentity() {
			const identities = ['普通用户', '地接社商家', '组团社商家', '特色旅游服务商家'];
			return identities[this.userType - 1] || '普通用户';
		}
	},
	actions: {
		/**
		 * 设置用户类型并持久化存储
		 * @param {number} type - 用户类型（1-4）
		 */
		setUserType(type) {
			this.userType = type;
			uni.setStorageSync('userType', type); // 存储到本地缓存
			// 切换身份后跳转到对应首页（可根据路由配置扩展）
			uni.switchTab({
				url: `/pages/home/${type === 1 ? 'user' : `merchant${type - 1}`}/Home`
			});
		},
		/**
		 * 清除用户身份（退出登录）
		 */
		clearUser() {
			this.userType = null;
			uni.removeStorageSync('userType');
			uni.navigateTo({
				url: '/pages/user/Login'
			}); // 跳转登录页
		}
	}
});