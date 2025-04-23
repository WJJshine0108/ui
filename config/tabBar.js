// config/tabBar.js
export const tabBarConfig = {
	// 普通用户（类型1）
	1: {
		list: [{
				pagePath: 'pages/home/user/Home',
				text: '首页',
				icon: 'static/icons/home.png',
				selectedIcon: 'static/icons/home-selected.png'
			},
			{
				pagePath: 'pages/category/user/Category',
				text: '分类',
				icon: 'static/icons/category.png',
				selectedIcon: 'static/icons/category-selected.png'
			},
			{
				pagePath: 'pages/itinerary/user/Itinerary',
				text: '行程',
				icon: 'static/icons/itinerary.png',
				selectedIcon: 'static/icons/itinerary-selected.png'
			},
			{
				pagePath: 'pages/my/user/My',
				text: '我的',
				icon: 'static/icons/my.png',
				selectedIcon: 'static/icons/my-selected.png'
			}
		]
	},

	// 商家1（地接社，类型2）
	2: {
		list: [{
				pagePath: 'pages/home/merchant1/Home',
				text: '地接社首页',
				icon: 'static/icons/merchant1-home.png',
				selectedIcon: 'static/icons/merchant1-home-selected.png'
			},
			{
				pagePath: 'pages/category/merchant1/Category',
				text: '分类',
				icon: 'static/icons/merchant1-category.png',
				selectedIcon: 'static/icons/merchant1-category-selected.png'
			},
			{
				pagePath: 'pages/itinerary/merchant1/Itinerary',
				text: '行程',
				icon: 'static/icons/merchant1-itinerary.png',
				selectedIcon: 'static/icons/merchant1-itinerary-selected.png'
			},
			{
				pagePath: 'pages/my/merchant1/My',
				text: '我的',
				icon: 'static/icons/merchant1-my.png',
				selectedIcon: 'static/icons/merchant1-my-selected.png'
			}
		]
	},

	// 商家2（组团社，类型3）
	3: {
		list: [{
				pagePath: 'pages/home/merchant2/Home',
				text: '组团社首页',
				icon: 'static/icons/merchant2-home.png',
				selectedIcon: 'static/icons/merchant2-home-selected.png'
			},
			{
				pagePath: 'pages/category/merchant2/Category',
				text: '分类',
				icon: 'static/icons/merchant2-category.png',
				selectedIcon: 'static/icons/merchant2-category-selected.png'
			},
			{
				pagePath: 'pages/itinerary/merchant2/Itinerary',
				text: '行程',
				icon: 'static/icons/merchant2-itinerary.png',
				selectedIcon: 'static/icons/merchant2-itinerary-selected.png'
			},
			{
				pagePath: 'pages/my/merchant2/My',
				text: '我的',
				icon: 'static/icons/merchant2-my.png',
				selectedIcon: 'static/icons/merchant2-my-selected.png'
			}
		]
	},

	// 商家3（特色旅游服务，类型4）
	4: {
		list: [{
				pagePath: 'pages/home/merchant3/Home',
				text: '特色服务首页',
				icon: 'static/icons/merchant3-home.png',
				selectedIcon: 'static/icons/merchant3-home-selected.png'
			},
			{
				pagePath: 'pages/category/merchant3/Category',
				text: '分类',
				icon: 'static/icons/merchant3-category.png',
				selectedIcon: 'static/icons/merchant3-category-selected.png'
			},
			{
				pagePath: 'pages/itinerary/merchant3/Itinerary',
				text: '行程',
				icon: 'static/icons/merchant3-itinerary.png',
				selectedIcon: 'static/icons/merchant3-itinerary-selected.png'
			},
			{
				pagePath: 'pages/my/merchant3/My',
				text: '我的',
				icon: 'static/icons/merchant3-my.png',
				selectedIcon: 'static/icons/merchant3-my-selected.png'
			}
		]
	}
};