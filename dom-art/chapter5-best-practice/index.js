/**
 * @Author: jecyu
 * @Date: 2017-12-21 9:27:35 am 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-21 4:57:04 pm 
 */

/**
 * 弹出新的窗口
 * @param {string} 新窗口的url地址
 */
function popUp(winUrl) {
    window.open(winUrl, 'popUp', 'width=320, height=480');
}

/**
 * 把弹出窗口函数绑定到含“popup”类的链接中
 */
function prepareLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0, len = links.length; i < len; i++) {
        if (links[i].getAttribute('class') === 'popup') {
            links[i].onclick = function () {
                popUp(this.getAttribute('href'));
                return false; // 禁止链接的默认行为
            }
        }
    }     
}

// 待文档对象加载完成，再执行这个函数
window.onload = prepareLinks;


// 脚本向后兼容
/* window.onload = function() {
    if (!docment.getElementsByTagName) {
        return false;
    }
    
    for (var i = 0, len = links.length; i < len; i++) {
        if (links[i].getAttribute('class') === 'popup') {
            links[i].onclick = function () {
                popUp(this.getAttribute('href'));
                return false; // 禁止链接的默认行为
            }
        }
    }     
} */