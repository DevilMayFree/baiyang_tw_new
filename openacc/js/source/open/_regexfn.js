function regexfn(regex, oldVal) {
    var result = false;
    if (isIE()) {

        result = regex.exec(oldVal);

    } else {
        regex = new RegExp(regex, 'g');
        result = regex.test(oldVal);
    }


    return result;
}
//檢查中文(only)
function checkZhOnly(oldVal) {
    var errorcount = 0
    var regex = /^[\u4e00-\u9fa5]+$/;

    if (oldVal != "" && oldVal != undefined) {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } else
        errorcount++;

    return errorcount > 0 ? false : true;
}
//檢查英文(only)
function checkEnOnly(oldVal) {
    var errorcount = 0
    var regex = /^[A-Za-z\- ]*$/;

    if (oldVal != "" && oldVal != undefined) {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } else
        errorcount++;

    return errorcount > 0 ? false : true;
}

//檢查手機號碼
function checkcellphone(oldVal) {
    var errorcount = 0;
    oldVal = $.trim(oldVal);
    var regex = /^09[0-9]{8}$/;


    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } 

    return errorcount > 0 ? false : true;
}

//檢查生日
function checkbirth(oldVal) {
    var errorcount = 0;
    var regex = /^[1-9]\d{3}\/(0{0,1}[1-9]|1[0-2])\/(0{0,1}[1-9]|[1-2][0-9]|3[0-1])$/ig;


    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    }
    return errorcount > 0 ? false : true;
}

//檢查連絡電話
function checkphone(oldVal) {
    var errorcount = 0;
    oldVal = $.trim(oldVal);
    var regex = /[0-9]{5,8}$/;


    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    }

    return errorcount > 0 ? false : true;
}
//檢查連絡電話區號
function checkphone_sectionnumber(oldVal) {
    var errorcount = 0;
    oldVal = $.trim(oldVal);
    var list = ["02", "03", "037", "04", "049", "05", "06", "07", "08", "089", "082", "0826", "0836"];


    if (oldVal != "") {
        if (list.indexOf(oldVal) < 0) {
            errorcount++;
        }
    }

    return errorcount > 0 ? false : true;
}

//檢查email
function checkemail(oldVal) {

    var errorcount = 0;
    oldVal = $.trim(oldVal);
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;


    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    }

    return errorcount > 0 ? false : true;

}

//檢查密碼
function checkpwd(e) {
    var input = e, errorcount = 0, errortext = "格式錯誤，請重填";
    var oldVal = $.trim(input.val());
    var regex = /^[a-zA-Z0-9]{4,20}$/;

    clearError(input);

    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } else {
        errorcount++;
        errortext = "請輸入新密碼";

    }

    if (errorcount > 0) {
        showError(input, errortext);
    }

    return errorcount > 0 ? false : true;
}

//檢查手機條碼
function checkcellcode(e, ismust) {
    var input = e, errorcount = 0, errortext = "格式錯誤，請重填";
    var oldVal = $.trim(input.val());
    var regex = /^\/[A-Z0-9]+$/;

    clearError(input);

    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } else {
        if (ismust) {
            errorcount++;
            errortext = "請輸入手機條碼";
        }
    }

    if (errorcount > 0) {
        showError(input, errortext);
    }

    return errorcount > 0 ? false : true;
}

//檢查身分證
function checkID(idStr) {
    // 依照字母的編號排列，存入陣列備用。
    var letters = new Array('A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
        'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
        'X', 'Y', 'W', 'Z', 'I', 'O');
    // 儲存各個乘數
    var multiply = new Array(1, 9, 8, 7, 6, 5,
        4, 3, 2, 1);
    var nums = new Array(2);
    var firstChar;
    var firstNum;
    var lastNum;
    var total = 0;
    // 撰寫「正規表達式」。第一個字為英文字母，
    // 第二個字為1或2，後面跟著8個數字，不分大小寫。
    var regExpID = /^[a-z](1|2)\d{8}$/i;
    // 使用「正規表達式」檢驗格式
    if (idStr.search(regExpID) == -1) {
        // 基本格式錯誤
        // alert("請仔細填寫身份證號碼");
        return false;
    } else {
        // 取出第一個字元和最後一個數字。
        firstChar = idStr.charAt(0).toUpperCase();
        lastNum = idStr.charAt(9);
    }
    // 找出第一個字母對應的數字，並轉換成兩位數數字。
    for (var i = 0; i < 26; i++) {
        if (firstChar == letters[i]) {
            firstNum = i + 10;
            nums[0] = Math.floor(firstNum / 10);
            nums[1] = firstNum - (nums[0] * 10);
            break;
        }
    }
    // 執行加總計算
    for (var i = 0; i < multiply.length; i++) {
        if (i < 2) {
            total += nums[i] * multiply[i];
        } else {
            total += parseInt(idStr.charAt(i - 1)) *
                multiply[i];
        }
    }

    if (lastNum == 0 && (total % 10) != lastNum) {
        // alert("身份證號碼寫錯了！");
        return false;
    }
    //規則二餘數與檢查碼需相符
    if (lastNum != 0 && (10 - (total % 10)) != lastNum) {
        //alert("身份證號碼寫錯了！");
        return false;
    }

    return true;
}
function checkForeignID(id) {
    if (id.length != 10) return false;

    if (isNaN(id.substr(2, 8)) || (id.substr(0, 1) < "A" || id.substr(0, 1) > "Z") || (id.substr(1, 1) < "A" || id.substr(1, 1) > "Z")) {
        return false;
    }

    var head = "ABCDEFGHJKLMNPQRSTUVXYWZIO";
    id = (head.indexOf(id.substr(0, 1)) + 10) + '' + ((head.indexOf(id.substr(1, 1)) + 10) % 10) + '' + id.substr(2, 8)
    s = parseInt(id.substr(0, 1)) +
        parseInt(id.substr(1, 1)) * 9 +
        parseInt(id.substr(2, 1)) * 8 +
        parseInt(id.substr(3, 1)) * 7 +
        parseInt(id.substr(4, 1)) * 6 +
        parseInt(id.substr(5, 1)) * 5 +
        parseInt(id.substr(6, 1)) * 4 +
        parseInt(id.substr(7, 1)) * 3 +
        parseInt(id.substr(8, 1)) * 2 +
        parseInt(id.substr(9, 1)) +
        parseInt(id.substr(10, 1));

    //判斷是否可整除
    if ((s % 10) != 0) return false;
    //居留證號碼正確		
    return true;
}
function IdTaxNumber2Check(oldVal) {
    var errorcount = 0;
    oldVal = $.trim(oldVal);
    var regex = /^\d{8}-[A-Za-z0-9]$/;

    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    }

    return errorcount > 0 ? false : true;

}

//檢查統一編號
function IdTaxNumberCheck(id) {
    var invalidList = "00000000,11111111";
    var regex = /^\d{8}$/;
    if (!regexfn(regex, id) || invalidList.indexOf(id) != -1) {
        return false;
    }

    var validateOperator = [1, 2, 1, 2, 1, 2, 4, 1],
        sum = 0,
        calculate = function (product) { // 個位數 + 十位數
            var ones = product % 10,
                tens = (product - ones) / 10;
            return ones + tens;
        };
    for (var i = 0; i < validateOperator.length; i++) {
        sum += calculate(id[i] * validateOperator[i]);
    }

    if (sum % 10 == 0 || (id[6] == "7" && (sum + 1) % 10 == 0)) {
        return true;
    } else {
        return false;
    }
}

//檢查數字
function checkNumberSize(e, number, ismust) {
    var input = e, errorcount = 0, errortext = "格式錯誤，請重填";
    var oldVal = $.trim(input.val());
    var regex = "^[0-9]{" + number + "}$";

    clearError(input);

    if (oldVal != "") {
        if (!regexfn(regex, oldVal)) {
            errorcount++;
        }
    } else {
        if (ismust) {
            errorcount++;
            errortext = "請輸入共" + number + "碼數字";
        }
    }

    if (errorcount > 0) {
        showError(input, errortext);
    }

    return errorcount > 0 ? false : true;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}


String.prototype.halfToFull = function () {
    var temp = "";
    for (var i = 0; i < this.toString().length; i++) {
        var charCode = this.toString().charCodeAt(i);
        if (charCode <= 126 && charCode >= 33) {
            charCode += 65248;
        } else if (charCode == 32) { // 半形空白轉全形
            charCode = 12288;
        }
        temp = temp + String.fromCharCode(charCode);
    }
    return temp;
};