<template>
	<view class="navbar">
		<text class="title">{{ title }}</text>
		<slot name="right"></slot> <!-- 新增右侧插槽 -->
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '标题'
			}
		}
	};
</script>

<style scoped>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		background-color: var(--uni-bg-color-grey);
		/* 使用全局变量 */
	}

	.title {
		font-size: 20px;
		font-weight: bold;
	}
</style>