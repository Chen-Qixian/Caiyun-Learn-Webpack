
// js模块化

// 1 直接对外导出字符串
// module.exports='My name is ChenQixian'

// 2 对外导出json对象
// let json={
//     str : 'hello this is ChenQixian'
// }
// module.exports=json;

// 3 对外导出function
function outStr(s) {
    return s;
}

module.exports=outStr;