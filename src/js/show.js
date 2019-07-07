// 0 直接输出字符串
// document.write('hello world!');

// 1 获取str.js导出的字符串（对应方法1）
// document.write(require('./str.js'));

// 2 获取str.js导出的json（对应方法2）
// let json = require('./str.js');
// document.write(json.str);

// 3 获取str.js导出的function
let outStr = require('./str.js');
document.write(outStr('<div>I am qixian</div>'));

// 4 加载CSS样式(未配置webpack设置文件前)
// require('!style-loader!css-loader!../css/style.css');

// 5 配置webpack设置文件后的CSS加载方式
require('../css/style.css');

// 6 加载第三方库，如jquery
let $=require('jquery');
$('div').html('this is a jquery content').css({'background-color' : 'green'});