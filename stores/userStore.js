// stores/userStore.js
import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		userType: uni.getStorageSync('userType') || 2, // 初始化读取缓存，默认普通用户
		userInfo: null
	}),
	getters: {
		isMerchant() {
			return this.userType >= 2; // 商家类型>=2
		}
	},
	actions: {
		setUserType(type) {
			this.userType = type;
			uni.setStorageSync('userType', type); // 持久化存储
		},
		clearUser() {
			this.userType = null;
			uni.removeStorageSync('userType');
		}
	}
});