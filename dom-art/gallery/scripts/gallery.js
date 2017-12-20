/**
 * @Author: jecyu
 * @Date: 2017-12-18 9:31:59 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-20 9:19:19 am 
 */
/**
 * 显示图片
 * @param {object} whichpic 图片节点
 */
function showPic(whichpic) {    
    var source      = whichpic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src', source);
    
    var text        = whichpic.getAttribute('title');
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;
}

/**
 * 计算body所有子元素，childNodes包含元素节点、属性节点、文件节点、空格或换行
 */
function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    console.log(body_element.childNodes.length);
    for (var i = 0; i < body_element.childNodes.length; i++) {
        console.log(body_element.childNodes[i]);
    }
}


window.onload = countBodyChildren;