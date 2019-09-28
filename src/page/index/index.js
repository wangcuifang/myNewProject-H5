'use strict'
require('./index.css');

require('@/common/nav-simple/index.js');
require('@/common/nav/index.js');
require('@/common/header/index.js');

var _mm = require('util/mm.js');
/*_mm.requset({
	//url:'./xx.do',
	url:'/product/list.do?keyword=1',
	success:function(res){
		console.log('认同感同仁',res);
		
	},
	error: function(errMsg){
		console.log(errMsg);
	}
});*/

//console.log(_mm.getUrlParam('test'));

// var html  = '<div>{{data}}</div>';
// var data = {
// 	data:123
// }
// 
// console.log(_mm.renderHtml(html,data));



