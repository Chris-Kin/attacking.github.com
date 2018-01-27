var navs = [
	{
		name: '公司',
		desc: '就是公司呗',
		list: [
			{
				label: 'ddd',
				link: '//www.baidu.com',
				desc: 'bd'
			}
		]
	},
	{
		name: '媒体',
		desc: '就是呗',
		list: [
			{
				label: 'Medium',
				link: 'https://medium.com/',
				desc: 'medium'
			},
			{
				label: 'Medium',
				link: 'https://www.v2ex.com/',
				desc: 'v2ex'
			}
		]
	}
];

var app = new Vue({
  el: '#app',
  data: {
    navs: navs
  }
})
