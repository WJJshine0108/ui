<template>
	<view class="identity-selector">
		<view class="identity-item" v-for="(item, index) in identityList" :key="index"
			@click="selectIdentity(item.type)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				identityList: [{
						name: '普通用户',
						type: 1
					},
					{
						name: '地接社商家',
						type: 2
					},
					{
						name: '组团社商家',
						type: 3
					},
					{
						name: '特色旅游服务商家',
						type: 4
					}
				]
			};
		},
		methods: {
			selectIdentity(type) {
				this.$emit('selectIdentity', type);
			}
		}
	};
</script>

<style scoped>
	.identity-selector {
		padding: 20px;
	}

	.identity-item {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		margin-bottom: 10px;
		text-align: center;
	}
</style>