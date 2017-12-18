/**
 * @Author: jecyu
 * @Date: 2017-12-18 9:31:59 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-18 9:45:42 am 
 */
/**
 * 显示图片
 * @param {object} whichpic 图片节点
 */
function showPic(whichpic) {    
    var source = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
}