/**
 * @Author: jecyu
 * @Date: 2017-12-26 9:26:51 am
 * @Modified By: jeCyu
 * @Last Modified time: 2017-12-26 9:57:05 am
 */

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
 * 使用document.write插入一段字符串，缺点需要在stript标签引用函数
 * @param {string} text
 */
function insertParagraph(text) {
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}

window.onload = function() {
    // 传统技术innerHTML(大锤)
    // var testdiv = document.getElementById("testdiv");
    // testdiv.innerHTML = "<p> I inserted <em>this</em> content</p>";

    // 使用DOM方法
    var testdiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += " nodeType: ";
    info += para.nodeType;
    console.log(info);

    testdiv.appendChild(para);
};
