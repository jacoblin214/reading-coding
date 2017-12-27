/**
 * @Author: jecyu
 * @Date: 2017-12-18 9:31:59 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-27 9:53:26 am
 */

/* addLoadEvenet 和 insertAfter为通用函数 */
/**
 * 把那些在页面加载完毕时执行的函数创建为一个队列。
 * @param {object} func  在页面加载完毕时执行的函数的名字
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}

/**
 * insertAfter函数，插入一个元素到目标元素的后面
 * @param {*} newElement 将被插入的新元素
 * @param {*} targetElement 目标元素
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    // 是否是最后一个子元素
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSiblings);
    }
}

/**
 * 动态创建占位图片img/文本p
 */
function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "../public/images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

/**
 * 图片库准备，遍历图片库每个链接，绑定事件
 */
function preparyGallery() {
    // 向后兼容
    if (!document.getElementsByTagName) {
        return false;
    }

    if (!document.getElementById) {
        return false;
    }
    // 检测是否存在id“imagegallery”
    if (!document.getElementById("imagegallery")) {
        return false;
    }

    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for (var i = 0, len = links.length; i < len; i++) {
        links[i].onclick = function() {
            // 根据showPic的返回值来决定是否禁止链接的默认行为
            return showPic(this) ? false : true;
        };
        // 如果绑定onkeypress事件上的函数，任何键都触发，只是用键盘将无法离开当前链接
        // links[i].onkeypress = links[i].onclick;
    }
}

//  加强版：图片缩略图效果
/**
 * 把“占位符”图片切换为目标图片
 * @param {object} whichpic 图片节点
 */
function showPic(whichpic) {
    // 如果不在placeholder的元素
    if (!document.getElementById("placeholder")) {
        return false;
    }

    // 更换图片
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        // 更换文本
        var text = whichpic.getAttribute("title")
            ? whichpic.getAttribute("title")
            : "";
        var description = document.getElementById("description");

        // 判断是否为文本节点
        if (description.firstChild.nodeType === 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

/**
 * 计算body所有子元素，childNodes包含元素节点、属性节点、文件节点、空格或换行
 */
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    console.log(body_element.childNodes.length);
    for (var i = 0; i < body_element.childNodes.length; i++) {
        console.log(body_element.childNodes[i]);
    }
}

// window.onload = function() {
//     countBodyChildren();
//     preparyGallery();
// }

// DOM insertBefore()方法
// var gallery = document.getElementById("imagegallery");
// gallery.parentNode.insertBefore(placeholder, gallery);
// gallery.parentNode.insertBefore(description, gallery);

addLoadEvent(preparePlaceholder);
addLoadEvent(preparyGallery);
