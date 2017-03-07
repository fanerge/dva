//以下为系统配置项
const config = {
	systemName: '四川省交通控制系统',
	currentCity: '成都',
	nav: [{
			navKey: 'nav1',   //react为提升性能所添加
			text: '客车运输',
			children: [
				{ 
					subNavKey: '1',
					text: '客车地图',
					path: 'nav/coach/table'
				},
				{ 
					subNavKey: '2',
					text: '实时地图',
					path: 'nav/coach/map'
				},
				{ 
					subNavKey: '3',
					text: '客车信息(表格)',
					path: 'nav/coach/progress'
				}

			]
		},
		{
			navkey: 'nav2',
			text: '汽车运输',
			children: [
				{ 
					subNavKey: '4',
					text: '汽车地图',
					path: 'nav/coach/table'
				},
				{ 
					subNavKey: '5',
					text: '实时地图',
					path: 'nav/coach/map'
				},
				{ 
					subNavKey: '6',
					text: '汽车信息(表格)',
					path: 'nav/coach/progress'
				}

			]
		},
		{
			navkey: 'nav3',
			text: '出租车运输',
			children: [
				{ 
					subNavKey: '7',
					text: '出租车地图',
					path: 'nav/coach/table'
				},
				{ 
					subNavKey: '8',
					text: '实时地图',
					path: 'nav/coach/map'
				},
				{ 
					subNavKey: '9',
					text: '出租车信息(表格)',
					path: 'nav/coach/progress'
				}

			]
		},
	],  //nav-config-end
};


export default config;