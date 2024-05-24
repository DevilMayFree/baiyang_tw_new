﻿//輸入框ID = codeInput
//驗證碼Canvas ID = codePic
//回傳之驗證碼  = ValidateCode

document.getElementById("codeInput").addEventListener("change", defined);

//給輸入驗證碼的input添加監聽事件，當輸入框的值改變的時候，觸發defined()函數。

var ValidateCode = " ";
var Validation = false;

function defined() {

    var text = document.getElementById("codeInput").value.toUpperCase();
    Validation = false;

    //獲取輸入框的值，並用toUpperCase()將其轉化為大寫。

    function clearAndUpdate() {

        //定義clearAndUpdate()函數。用於在驗證碼錯誤的情況下刷新驗證碼和清空輸入框的值。

        document.getElementById("codeInput").value = '';

        //清空輸入框的值。

        drawPic();


    }

    //對驗證碼進行驗證。

    if (text.length < 0) {//判斷為空的情況，彈出提示框。

        alert("請輸入驗證碼");

    } else if (text.length !== 4) {//判斷驗證碼位數不等於4的情況。

        alert("請輸入正確格式的驗證碼");

        clearAndUpdate();

    } else if (text == ValidateCode) {//比較驗證碼

        Validation = true;
        ////alert("通過驗證");

    } else {

        alert("驗證碼錯誤");//其他情況

        clearAndUpdate();

    }

}


//生成一個隨機數

function randomNum(min, max) {

    return Math.floor(Math.random() * (max - min) + min);//在max和min之間生成隨機數。

}

//生成一個隨機色

function randomColor(min, max) {//採用rgb顏色，注意顏色是0-255。

    var r = randomNum(min, max);

    var g = randomNum(min, max);

    var b = randomNum(min, max);

    return "rgb(" + r + "," + g + "," + b + ")";

}

drawPic();

//點擊驗證碼，則刷新驗證碼

document.getElementById("codePic").onclick = function (e) {

    e.preventDefault();

    drawPic();

};

//繪製驗證碼圖片

function drawPic() {

    var codePic = document.getElementById("codePic");//獲取畫布容器

    var width = codePic.width;//分別獲取畫布的寬和高。


    var height = codePic.height;

    var ctx = codePic.getContext('2d');//獲取該codePic的2D繪圖環境對象

    ctx.textBaseline = 'bottom';//設置文本基線是畫布的底部。

    //繪製背景色

    ctx.fillStyle = randomColor(200, 240); //顏色若太深可能導致看不清

    ctx.fillRect(0, 0, width, height);//畫出矩形，要記得ctx.fillStyle放在ctx.fillRect哦。

    //繪製文字

    var str = 'ABCEFGHJKLMNPQRSTWXY123456789';//選擇全部大寫字母和數字，這下知道為啥要把獲取的值轉化為大寫了吧。

    ValidateCode = "";//定義一個變量ValidateCode用於存儲生成的驗證碼。

    for (var i = 0; i < 4; i++) {//這裡i<4是生成4位數的驗證碼。

        var txt = str[randomNum(0, str.length)];//隨機獲取str的一個元素。

        ValidateCode += txt;//將元素加入到ValidateCode里。

        ctx.fillStyle = randomColor(50, 160); //隨機生成字體顏色

        ctx.font = randomNum(30, 40) + 'px SimHei'; //隨機生成字體大小

        var x = 10 + i * 25;//元素在水平方向上的位置。

        var y = randomNum(30, 40);//元素在豎直方向上的位置，儘量保持在中間，防止部分元素在畫布外。

        var deg = randomNum(-15, 15);//隨機生成旋轉角度。

        //修改坐標原點和旋轉角度

        ctx.translate(x, y);//平移元素

        ctx.rotate(deg * Math.PI / 180);//旋轉元素

        ctx.fillText(txt, 0, 0, 20);

        //恢復坐標原點和旋轉角度

        ctx.rotate(-deg * Math.PI / 180);

        ctx.translate(-x, -y);


    }
    //console.log(ValidateCode);

    //繪製干擾線

    for (var i = 0; i < 2; i++) {

        ctx.strokeStyle = randomColor(40, 180);//干擾線顏色。

        ctx.beginPath();//開始繪製。

        ctx.moveTo(randomNum(0, width), randomNum(0, height));//起點位置

        ctx.lineTo(randomNum(0, width), randomNum(0, height));//終點位置

        ctx.stroke();

    }

    /**繪製干擾點**/

    for (var i = 0; i < 50; i++) {

        ctx.fillStyle = randomColor(0, 255);

        ctx.beginPath();

        ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);//繪製點，下面說arc函數。

        ctx.fill();

    }

}

