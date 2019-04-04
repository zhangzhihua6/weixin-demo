//文本框
var oIpt1 = document.getElementsByClassName("txt1")[0];
var oIpt3 = document.getElementsByClassName("txt2")[0];
//发送框
var oIpt2 = document.getElementsByClassName("fs1")[0];
var oIpt4 = document.getElementsByClassName("fs2")[0];
//显示框
var oText = document.getElementsByClassName("chat")[0];
var zk = document.getElementsByClassName("zchat")[0];
var yk = document.getElementsByClassName("ychat")[0];
oIpt2.onclick = function () {
    var ss =document.createElement("li");
    zk.appendChild(ss);
    ss.innerHTML = `<section class="zk">
    <section class="zktxt1">尬聊Jim</section>
    <section class="zktxt2">
        <section class="zktxt3">
            <p>${oIpt1.value}</p>
        </section>
    </section>
</section>`
    oIpt1.value = ""
}
oIpt4.onclick = function () {
    var dd =document.createElement("li");
    zk.appendChild(dd);
    dd.innerHTML = `<section class="yk">
    <section class="yktxt1">爆炒Liz</section>
    <section class="yktxt2">
        <section class="yktxt3">
            <p>${oIpt3.value}</p>
        </section>
    </section>
</section>`
    oIpt3.value = ""
}

function keypress() {
    var keyCode = window.event.keyCode;

    var opCell = window.event.srcElement;

    if (keyCode == "22") {
        // press Ctrl+V keyboard 
        var txt = clipboardData.getData('text');
        if (txt == null) { txt = "" };
        opCell.innerText = txt;

    } else if (keyCode == "26") {
        // press Ctrl+Z keyboard (ctrl+z只是简单的将这个单元格的值清空，要想恢复上一次值，请用右键) 
        opCell.innerHTML = " ";
    } else {
        if (window.event.srcElement.tagName == "TD") {
            mygrid.editCell(window.event);
        }
    }
}

function keyup() {
    var keyCode = window.event.keyCode;

    /* Ctrl+C 事件要在onKeyup事件中捕获 */
    if (keyCode == "67") {
        // press Ctrl+C keyboard 
        var opCell = window.event.srcElement;
        clipboardData.setData("text", opCell.innerText);
    }
} 
keypress();
keyup();