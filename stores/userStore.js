// stores/userStore.js
import {
	defineStore
} from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => ({
		userType: Number(uni.getStorageSync('userType')) || 1, // 确保类型为数字
		userInfo: null
	}),
	getters: {
		isMerchant: (state) => state.userType >= 2,
	},
	actions: {
		setUserType(type) {
			this.userType = type;
			uni.setStorageSync('userType', type);
		},
		clearUser() {
			this.userType = 1;
			uni.removeStorageSync('userType');
		}
	},
	persist: true // 启用持久化
});