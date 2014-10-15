/*************************************************************************
 * File Name: util.js
 * Author: Chris Dai
 * Mail: moonreplace@gmail.com
 * Created Time: 2014-10-13	18:36:28
 ************************************************************************/

var objPro = Object.prototype;

var util = {
    /**
     * 判断是否是数组
     * @param {Array} arr
     * @return {Boolean}
     *
     */
    isArray: function (arr) {
        return objPro.toString.call(arr) === '[object Array]' ? true : false;    
    },
    /**
     * 把给定的数组连接上给定的参数
     * @param {Array} target  目标数组
     * @param {Array|Function} src 源数据
     */
    concatArray: function (target, src) {
       target = target.concat(src);
    }
};


module.exports = util;
