//#region 判斷頁面有無ajaxEvent 去FadeOut LoadingDiv
var HaveAjaxEvent = false;
$(document).ajaxStart(function (event, xhr, settings) {

    HaveAjaxEvent = true;
});
$(document).ajaxStop(function (settings) {
    CoverFadeOut();
});
$(window).on('load', function () {
    if (!HaveAjaxEvent) {
        CoverFadeOut();
    }
});
function CoverFadeOut() {

    $(".CoverWhite").fadeOut().promise().done(function () {

    });
}
//#endregion 判斷頁面有無ajaxEvent 去FadeOut LoadingDiv

function msg(content, durl, showOtherBTN, showOtherURL) {

    $('#msgContent').html(content);

    var obj = {
        "關閉": function () {
            $(this).dialog("close");
            $('.blockPrevent').css('display', 'none');
            if (typeof durl != "undefined") {
                location.href = durl;
            }
        }
    }

    if (showOtherBTN && typeof (showOtherBTN) == "boolean") {
        obj = {
            "繼續兌換其他商品": function () {
                location.href = showOtherURL;
            },
            "確認": function () {
                if (typeof durl != "undefined") {
                    location.href = durl;
                }
            }
        }
    }

    if (showOtherBTN == "1" && typeof (showOtherBTN) == "string") {
        obj = {
            "回首頁": function () {
                location.href = "../home/index";
            },
            "繼續填寫問卷": function () {
                $(this).dialog("close");
            }
        }
    }

    $("#dialog-message").dialog({
        modal: true,
        closeOnEscape: false,//按ESC不能關閉
        open: function (event, ui) {
            //隱藏「x」關閉按鈕
            $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
        },
        buttons: obj
    });
}

$(function () {
    //動態將radio 塞入class
    $('input[type=radio]').addClass('form').next("label").addClass('form');
    //動態將checkbox 塞入class
    //$('input[type=checkbox]').addClass('agreecheck2top').next("label").addClass('agreecheck3');

    //基金一覽 選項
    Slick();

    //基金消息 More button bind
    FundNewsBindMore();

    //$(".tel").hover(function (e) {
    //    var $this = $(".tel").find(".DataToolTip");
    //    var html = '<div class="GreenPhoneBox"></div>';
    //    $this.parent().append(html);

    //    var $GreenPhoneBox = $this.parent().find(".GreenPhoneBox");
    //    $GreenPhoneBox.append("<span style='display:none;'>"+$this.attr("data-tooltip-content")+"</span>");
    //    var $GreenPhoneText = $this.parent().find(".GreenPhoneBox span");

    //    $GreenPhoneBox.stop().animate({
    //        "min-width": $GreenPhoneBox.outerWidth(),
    //        "width": "220px"
    //    }, 200, "linear", function () {
    //        $GreenPhoneText.fadeIn();
    //    });
    //}, function () {
    //    var $this = $(this).find(".DataToolTip");
    //    var $GreenPhoneBox = $this.parent().find(".GreenPhoneBox");
    //    $GreenPhoneBox.stop().animate({
    //        "min-width": "0px",
    //        "width": "0px"
    //    },100, function () {
    //        $(this).remove();
    //    });
    //});
    var $this = $(".tel").find(".DataToolTip");
    var html = '<div class="GreenPhoneBox"></div>';
    $this.parent().append(html);

    var $GreenPhoneBox = $this.parent().find(".GreenPhoneBox");
    $GreenPhoneBox.append("<span style='display:none;'>" + $this.attr("data-tooltip-content").escapeHTML() + "</span>");
    var $GreenPhoneText = $this.parent().find(".GreenPhoneBox span");

    $GreenPhoneBox.css({
        "min-width": $GreenPhoneBox.outerWidth(),
        "width": "220px"
    }).promise().done(function () {
        $GreenPhoneText.fadeIn();
    });


});
function SomeJavaScriptCode(sender) {
    var $this = $(sender);
    var val = $this.find("option:selected").val();
    var No = "PageNo" + val.escapeHTML();
    $("#" + No).click();
}

function GetWindowWidth() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        //'Its Safari'
        windowWidth = document.documentElement.clientWidth;
    }
    return windowWidth;
}

//#region 基金一覽 選項
function Slick() {
    if ($(".variable").length > 0) {
        $(".variable").slick({
            dots: true,
            infinite: false,
            //variableWidth: true,
            //centerMode: true,
            responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                  }
              }
            ]
        });
    }
    $('.variable').find("div.slick-slide").click(function () {
   
        $("ul.select-fund-tab .link_btnList").removeClass("select-fund-tab-v");
        $("ul.select-fund-tab li").eq($(this).index()).find(".link_btnList").addClass("select-fund-tab-v");
        
        $('.variable').slick('slickGoTo', $(this).index());
        $('.variable').find("div.slick-slide").removeClass("select-fund-tab-v").addClass("select-fund-tab2");
        $(this).removeClass("select-fund-tab2").addClass("select-fund-tab-v");
    });
    //$('.variable').slick('slickGoTo', 2);
    //$('.variable').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    //    //console.log("currentSlide", currentSlide);
    //    //console.log("nextSlide", nextSlide);
    //    $('.variable').find("div.slick-slide").removeClass("select-fund-tab-v").addClass("select-fund-tab2");
    //    $('.variable').find("div.slick-slide").eq(currentSlide).removeClass("select-fund-tab2").addClass("select-fund-tab-v");
    //});

    //170724 by Hank 只有基金內容頁調整有循環
    if ($(".1variable1").length > 0) {
        $(".1variable1").slick({
            dots: true,
            infinite: true,
            //variableWidth: true,
            //centerMode: true,
            responsive: [
              {
                  breakpoint: 768,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 3
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      arrows: false,
                      centerMode: true,
                      centerPadding: '40px',
                      slidesToShow: 1
                  }
              }
            ]
        });
    }
    $('.1variable1').find("div.slick-slide").click(function () {

        $("ul.select-fund-tab .link_btnList").removeClass("select-fund-tab-v");
        $("ul.select-fund-tab li").eq($(this).index()).find(".link_btnList").addClass("select-fund-tab-v");

        $('.1variable1').slick('slickGoTo', $(this).index());
        $('.1variable1').find("div.slick-slide").removeClass("select-fund-tab-v").addClass("select-fund-tab2");
        $(this).removeClass("select-fund-tab2").addClass("select-fund-tab-v");
    });
}
//#endregion 基金一覽 選項

var IntervalTr;
function FundNewsBindMore() {
    var $Button_More = $(".Button_More");//按鈕
    var $Table = $(".TableMore");
    var $TBody = $(".TableMore tbody");
    var $Tr = $Table.find("tr:not(.table-title03)");
    
    
    var clickCount = 0;
    var index = 0;
    var isDrawing = false;


    //資料初始化 假如資料小於 data-length(設定一頁比數)  則more按鈕隱藏
    $Button_More.each(function () {
        var $this = $(this);
        var ThisTableType = $this.attr("data-type");
        var DefaultSize = ~~($this.attr("data-length"));
        switch (ThisTableType) {
            case "InvestReport":
                TableId = "#TBLInvestReport";
                break;
            case "FundNews":
                TableId = "#TBLFundNews";
                break;
            default:
                break;
        }

        if ($(TableId + " .AnimateTr").length <= 0) {
       
            $this.hide();
        }

    });
  

    //more按鈕事件
    $Button_More.click(function (e) {
        e.preventDefault();

        if (isDrawing)
            return;

        isDrawing = true;

    
        
        var $this = $(this);
        var DefaultSize = ~~($this.attr("data-length"));
        var ThisTableType = $this.attr("data-type");
        
        var speed = 30;
        //var $NewTable = $(".TableMore");
        //var $NewTr = $NewTable.find("tr:not(.table-title03)");
        //var NewSize = $NewTr.length;
        var Tr_Class = "";
        var TableId = "";

        switch (ThisTableType) {
            case "InvestReport":
                speed = 60;
                TableId = "#TBLInvestReport";
                break;
            case "FundNews":
                speed = 60;
                TableId = "#TBLFundNews";
                break;
            default:
                speed = 30;
                break;
        }

        if ($this.attr("data-continue-index")) {
            index = parseInt($this.attr("data-continue-index"));
        }
        else {
            index = 0;
        }

        if ($this.attr("data-continue-clickcount")) {
            clickCount = parseInt($this.attr("data-continue-clickcount"));
        }
        else {
            clickCount = 0;
        }
        clickCount++;
     //   $TBody.append(TrHtml).promise().done(function () {
            
            IntervalTr = setInterval(function () {
                console.log(index, ThisTableType, TableId + " .AnimateTr", DefaultSize);
                switch (ThisTableType) {
                    case "InvestReport":
                        $(TableId + " .AnimateTr").eq(index).fadeIn();
                        $(TableId + " .AnimateTr").eq(index).next().fadeIn();
                   //     $(".AnimateTr").eq(index).next().next().fadeIn();
                        break;
                    default:
                        $(TableId + " .AnimateTr").eq(index).fadeIn();
                        break;
                }

                if (index == DefaultSize * clickCount - 1 || $(TableId + " .AnimateTr").eq(index + 1).length == 0) {
                    isDrawing = false;
                    clearInterval(IntervalTr);
                    console.log("stop");
                }
                if ($(TableId + " .AnimateTr").eq(index + 1).length == 0) {
                    isDrawing = false;
                     $this.hide();
                }

                index++;

                $this.attr("data-continue-index", index);
                $this.attr("data-continue-clickcount", clickCount);

            }, speed);
      //  });
  
     
       

    });
}

//#region AntiXss
function AntiXss(str) {

    if (!str) {
        return true;
    } else {
        var aryXss = ["<", ">", "<script", "%5c", "%3c", "%3e"];
        var isXss = 0;
        $.each(aryXss, function (i, data) {

            if (str.toString().toLowerCase().indexOf(data) > -1) {
                isXss++;
            }
        });

        if (isXss > 0) {
            return false;
        } else
            return true;
    }
}

function AntiXssRedirect(str) {

    if (str) {
        if (!AntiXss(str)) {//偵測到Xss攻擊
            AjaxErrorLog("XssAttack" + "," + str);
        }
        else
            return str;
    } else {
        return str;
    }
}
//#endregion AntiXss



var $window = $(window);
var StartScroll = false;

function check_if_in_view() {
    var $animation_elements = $('.AwardYear');
    //console.log(StartScroll);
    if (StartScroll) {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        console.log($animation_elements.length);
        $.each($animation_elements, function () {

            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            //check to see if this current container is within viewport
            //if (((element_bottom_position - $animation_elements.height() * 0.8)  >= window_top_position) &&
            //    ((element_top_position + $animation_elements.height() * 0.8) <= window_bottom_position)) {
            //    $element.addClass('in-view');
            //} else {
            //    $element.removeClass('in-view');
            //}

            //if ((element_bottom_position >= window_top_position) &&
            //   (element_top_position <= window_bottom_position)) {
            if (((element_bottom_position - window_height * 0.3) >= window_top_position) &&
               ((element_top_position + window_height * 0.3) <= window_bottom_position)) {

                var $Outer = $element.parent().parent();
               
                $Outer.addClass("active");
                $Outer.find(".H_Y_S_yeartext_inner").addClass('in-view');
                setTimeout(function () { $element.addClass('in-view'); },500);



                var NextIndex = $element.index('.animation-element');
                if (typeof ($animation_elements.eq(NextIndex + 1).offset()) != "undefined") {
                    var NextScrollTop = $animation_elements.eq(NextIndex + 1).offset().top;
                    $(".step_btn").attr("data-Next-scrollTop", NextScrollTop);
                    $(".step_btn").attr("data-Next-index", NextIndex + 1);
                }

                var $animateImg = $element.find(".animate-img");
                $animateImg.sort(function (a, b) { return $(a).attr("data-animateindex") - $(b).attr("data-animateindex") });

                $animateImg.each(function () {
                    var $this = $(this);
                    var delay = parseInt($this.attr("data-delay"));
                    var speed = parseInt($this.attr("data-speed"));
                    var index = parseInt($this.attr("data-animateindex")) + 1;

                    setTimeout(function () { $this.fadeIn(speed); }, delay * index);
                });
            } else {
                //var $animateImg = $element.find(".animate-img");
                //$animateImg.hide();
                //$element.removeClass('in-view');
            }
        });
    }
}

$window.on('scroll resize', check_if_in_view);





$(function () {
    

    $.fn.ShowBlockUI = function (option) {
        $(this).children("div").hide().eq(0).show();
        $(this).find("input[type=text]").val("");


        //message
        if (option) {
            if (option.message) {
                var message = option.message.replace(/<script/g, "");
                $(this).find(".PopTitle").html(message);
            }
        }

        var $CoverBlack = $(".CoverBlack2");
        if ($CoverBlack.length > 0)
            $CoverBlack.remove();

        $("body").append("<div class='CoverBlack2' onclick='HideBlockUI(\"" + $(this).attr("id").escapeHTML() + "\");'></div>");

        $(this).ResizeBlockUI();
        $(this).fadeIn({ queue: false, duration: 200 });


        $(".CoverBlack2").fadeIn(200);


    }

    $.fn.HideBlockUI = function () {
        var $CoverBlack = $(".CoverBlack2");
        if ($CoverBlack.length > 0) {
            $(this).animate({
                "margin-top": "-" + (($(this).outerHeight() / 2) + 50) + "px",

            }, 300);
            $(this).fadeOut({ queue: false, duration: 200 });

            $(".CoverBlack2").fadeOut(100, function () {
                $(this).remove();
            });
        }
    }
    $.fn.ResizePopupBox = function () {
        
        var $Popbox = $(this);

        if ($Popbox.length > 0) {
            $Popbox.each(function () {
                var $this = $(this);

                $this.css({
                    "margin-top": "-" + ($this.outerHeight() / 2) + "px",
                    "margin-left": "-" + ($this.outerWidth() / 2) + "px"

                });

            });
        }
    }
    $.fn.ResizeBlockUI = function () {
     
        var $PopupBox = $(this);
        $PopupBox.css({
            "margin-top": "-" + (($PopupBox.outerHeight() / 2) + 50) + "px",

        });

        $PopupBox.animate({
            "margin-top": "-" + ($PopupBox.outerHeight() / 2) + "px",

        }, 300);
        $PopupBox.css({
            "margin-left": "-" + ($PopupBox.outerWidth() / 2) + "px"

        });
    }


});

function ShowBlockUI(id) {

    $("#" + id).children("div").hide().eq(0).show();
    $("#" + id).find("input[type=text]").val("");


    var $CoverBlack = $(".CoverBlack");
    if ($CoverBlack.length > 0)
        $CoverBlack.remove();

    $("body").append("<div class='CoverBlack'></div>");
    ResizeBlockUI(id);
    $("#" + id).fadeIn({ queue: false, duration: 200 });


    $(".CoverBlack2").fadeIn(200);


}
function HideBlockUI(id) {

    
    var $CoverBlack = $(".CoverBlack2");
    if ($CoverBlack.length > 0) {
        $("#" + id).animate({
            "margin-top": "-" + (($("#" + id).outerHeight() / 2) + 50) + "px",

        }, 300);
        $("#" + id).fadeOut({ queue: false, duration: 200 });

        $(".CoverBlack2").fadeOut(100, function () {
            $(this).remove();
        });
    }
}
function ResizePopupBox() {
    var $Popbox = $(".PopupBox");

    if ($Popbox.length > 0) {
        $Popbox.each(function () {
            var $this = $(this);

            $this.css({
                "margin-top": "-" + ($this.outerHeight() / 2) + "px",
                "margin-left": "-" + ($this.outerWidth() / 2) + "px"

            });

        });
    }
}

$(window).resize(function () {
    var $Popbox = $(".PopupBox");

    if ($Popbox.length > 0) {
        $Popbox.ResizePopupBox();
    }
});

//#region 年齡判斷(20歲)
function calculateBirthdayge20(y, m, d) {
    var r = true;

    var isOks = checkValidDate(y, m, d);
    if (isOks) {
        isOks = checkIsTomorrow(y, m, d);//檢查是否大於今天
        if (isOks) {
            var isGE20 = false;
            var birthdate = new Date(y, m, d);
            if (isNaN(birthdate)) { // 無法解析
                birthdate = IE8DateFormat((y) + "/" + m + "/" + d);
            }
            var today = new Date();
            var NowYear = today.getFullYear();
            var NowMonth = today.getMonth() + 1;
            var NowDate = today.getDate();
            var years = NowYear - y;
            var months = NowMonth - m;
            var dates = NowDate - d;

            if (years < 20) {
                r = false;
            } else if (years == 20) {
                if (months > 0) {
                    r = true;
                } else if (months < 0) {
                    r = false;
                } else if (months == 0) {
                    if (dates >= 0) {
                        r = true;
                    } else if (dates < 0) {
                        r = false;
                    }
                }
            } else {
                r = true;
            }
        }
    }
    return r;
}
//#endregion 年齡判斷(20歲)

//#region 年齡判斷
//function calculateBirthdayge(y, m, d) {
//    r = '';
//    var isOks = checkValidDate(y, m, d);
//    var birth = new Date(y,m,d);
//    //birth = 
//    if (birth) {
//        var year = 1000 * 60 * 60 * 24 * 365;
//        var now = new Date();
//        var birthday = new Date(birth);
//        var age = parseInt((now - birthday) / year);
//        r = age;
//    }
//    return r;
//}
//#endregion 年齡判斷

function calculateBirthdayge(birthday) {
    if(birthday != null && birthday != ""){ 
        var timeStr = ""; 
        var age = 0; 
        timeStr = birthday.replace(/-/g,"//"); 
        //2016-03-01 00:00:00.0 
        var index = timeStr.indexOf("."); 
        if(index != -1){ 
            timeStr = timeStr.substring(0,index); 
        } 
        var curDate = new Date(); 
        var oriDate = new Date(timeStr); 
        var curYear = parseInt(curDate.getFullYear());//返回4位完整的年份 
        var oriYear = parseInt(oriDate.getFullYear()); 
        var curMonth = parseInt(curDate.getMonth());//返回表示月份的數字,返回值是0(一月)到11(十二月),比當前月小1 
        var oriMonth = parseInt(oriDate.getMonth()); 
        var curDay = parseInt(curDate.getDate());//返回月份的某一天,返回值是1~31之間的一個整數 
        var oriDay = parseInt(oriDate.getDate()); 
        /*var curHours = parseInt(curDate.getHours()); 
        var oriHours = parseInt(oriDate.getHours()); 
        var curMinutes = parseInt(curDate.getMinutes()); 
        var oriMinutes = parseInt(oriDate.getMinutes()); 
        var curSeconds = parseInt(curDate.getSeconds()); 
        var oriSeconds = parseInt(oriDate.getSeconds());*/ 
        age = curYear - oriYear; 
        if(curMonth>oriMonth){ 
            return age; 
        }else{ 
            if(curMonth == oriMonth){ 
                if(curDay > oriDay){ 
                    return age; 
                }else{ 
                    if(curDay == oriDay){ 
                        return age; 
                    }else{ 
                        return age-1; 
                    } 
                } 
            }else{ 
                return age-1; 
            } 
        } 
    } 
}

//#region 年判斷
function _calculateAge(DateStart, DateEnd) { // birthday is a date
    var isGE20 = false;
    var Startdate = DateStart;

    var today = DateEnd;
    var NowYear = today.getFullYear();
    var NowMonth = today.getMonth() + 1;
    var NowDate = today.getDate();

    var BEFYear = Startdate.getFullYear();
    var BEFMonth = Startdate.getMonth() + 1;
    var BEFDate = Startdate.getDate();

    var years = NowYear - BEFYear;
    var months = NowMonth - BEFMonth;
    var dates = NowDate - BEFDate;

    if (years < 1) {
        isGE20 = true;
    } else if (years == 1) {
        if (months > 0) {
            isGE20 = false;
        } else if (months < 0) {
            isGE20 = true;
        } else if (months == 0) {
            if (dates > 0) {
                isGE20 = false;
            } else if (dates <= 0) {
                isGE20 = true;
            }
        }
    } else {
        isGE20 = false;
    }

    return isGE20;
    //alerts(Years);
}

function isValidDate(text) {

    var result = false;
    var comp = text.split('/');
    var m = parseInt(comp[1], 10);
    var d = parseInt(comp[2], 10);
    var y = parseInt(comp[0], 10);
    var date = new Date(y, m - 1, d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        result = true;
    } else {
        result = false;
    }

    return result;
}
//#endregion 年判斷


//#region 日期(有效)判斷
function checkValidDate(year, month, day) {
    //var text = '02/29/2012';
    //var comp = text.split('/');
    year = parseInt(year);

    var m = parseInt(month, 10);
    var d = parseInt(day, 10);
    var y = parseInt(year, 10);
    //var m = parseInt(comp[0], 10);
    //var d = parseInt(comp[1], 10);
    //var y = parseInt(comp[2], 10);
    var date = new Date(y, m - 1, d);
    if (isNaN(date)) { // 無法解析
        date = IE8DateFormat((y) + "/" + m + "/" + d);

    }
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
        //ALERT('Valid date');

        return true;
    } else {
        //ALERT('Invalid date');
        return false
    }
}
//#endregion 日期(有效)判斷

//#region 日期(是否超過今天)判斷
function checkIsTomorrow(year, month, day) {
    year = parseInt(year);


    var CurrentDate = new Date();
    var SelectedDate = new Date(
        year,
        month - 1,
        day
    );
    if (isNaN(SelectedDate)) { // 無法解析
        SelectedDate = IE8DateFormat(year + "/" + (month - 1) + "/" + day);

    }
    if (CurrentDate > SelectedDate) {
        //CurrentDate is more than SelectedDate
        return true;
    }
    else {
        //SelectedDate is more than CurrentDate
        return false;
    }


}
//#endregion 日期(是否超過今天)判斷

//#region 電子郵件
function checkMail(Str) {
    //验证邮箱的正则表达式
    //var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    //var reg = /^[A-Za-z0-9]+([A-Za-z0-9]*[_]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]+[_]?[A-Za-z0-9]+)*\@[A-Za-z0-9]+((\.\w{2,3}){1,3})$/;
    //var reg = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
    if (!re.test(Str))
    {
        return false;
    }

    return true;
}
//#endregion 電子郵件

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



function IE8DateFormat(strDate) {
    var dt = "";

    strDate = strDate.split(/\D/); // 分割日期字串
    if (strDate[3] == null || strDate[4] == null || strDate[5] == null) {
        dt = new Date(strDate[0], strDate[1] - 1, strDate[2]);//這一行改用以下兩行也可以
    } else {
        dt = new Date(strDate[0], strDate[1] - 1, strDate[2], strDate[3], strDate[4], strDate[5]);//這一行改用以下兩行也可以
    }


    return dt;
}
equalheight = function (container) {

    $(container).each(function () {
        $el = $(this);
        $el.height('auto');

    }).promise().done(function () {

        var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $el.height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {

                    rowDivs[currentDiv].height(currentTallest);

                }

                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);

                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

            }

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);

            }

        });
    });


}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function SetFB(vurl, vimg, vname, vcaption, vdesc, vfid, vcid, vmid, vtype) {
    // calling the API ...

    var obj = {
        method: 'feed',
        redirect_uri: vurl,
        display: 'popup',
        link: vurl,
        picture: vimg,
        name: vname,
        caption: vcaption,
        description: vdesc
    };
    var data = { fid: vfid, cid: vcid, mid: vmid, type: vtype };

    function callback(response) {
        try {
            var id = response["post_id"];
            var data = "{ 'fid': '" + vfid + "', 'cid':'" + vcid + "', 'mid': '" + vmid + "', 'type':'" + vtype + "' }";
            $.ajax({
                url: './WebAPI.aspx/Share',
                data: data,
                type: "POST",
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    if (data.d != "0")
                    { alert('您分享此篇文章，恭喜您獲得點數' + data.d + '點！'); }
                }
            });

            //$.post("./webapi.aspx/Share", data, function (res) {
            //    if (res != "0")
            //    { alert('您分享此篇文章，恭喜您獲得點數' + res + '點！'); }
            //}, "json");

        } catch (ex) {
            alert("很遺憾，您沒有分享此篇文章！");
        }
    }

    FB.ui(obj, callback);
}

function shareFB() {
    var Now = new Date();
    var strTimeNow = Now.getFullYear() + Now.getMonth() + Now.getDate() + Now.getHours() + Now.getMinutes() + Now.getSeconds() + Now.getMilliseconds();
    var url = location.href + "&N=" + strTimeNow;

    var fburl = 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
    var obj = this;  //重新命名
    common.confirm_act('confirm_dialog', function () { recommend.delete($(obj).attr('url'), fburl) });
    $('.ui-dialog-buttonset button:first').addClass("btn-Y");
    $('.ui-dialog-buttonset button:last').addClass("btn-N");
    //window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url));
}

function shareLine() {
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href));
}

function decode(str) {
    var encoded = str
    return decodeURIComponent(encoded.replace(/\+/g, " "));
}

function groupBy(array, key, fn) {
    var hash = Object.create(null);
    return array.reduce(function (r, o) {
        if (!hash[o[key]]) {
            hash[o[key]] = {};
            hash[o[key]][key] = o[key];
            r.push(hash[o[key]]);
        }
        fn(o, hash[o[key]]);
        return r;
    }, []);
}
function unique(list) {
    var result = [];
    $.each(list, function (i, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}

var common = {
    confirm_act: function (dialog_id, callback) {
        $("#" + dialog_id).html("<p class='message'>您確定將開啟非百揚投資之網頁連結？</p>");
        $("#" + dialog_id).dialog({
            resizable: false,
            modal: true,
            overlay: {
                backgroundColor: '#000',
                opacity: 0.5
            },
            buttons: {
                '確認開啟': function () {
                    callback.call();
                    $(this).dialog('close');
                },
                '取消': function () {
                    $(this).dialog('close');
                }
            }
        });
    }
}

var recommend = {
    delete: function (url, obj) {
        $.ajax({
            url: url,
            type: "get",
            success: function (data) {
                window.open(obj);
            }
        });
    }
}

//#region 顯示千分位
var thousandComma = function (n) {
    n += "";
    var arr = n.split(".");
    var re = /(\d{1,3})(?=(\d{3})+$)/g;
    return arr[0].replace(re, "$1,") + (arr.length == 2 ? "." + arr[1] : "");

}

//ryderlin20191028
function ajaxPost(pStrFName, pStrData) {
    var result;
    $.ajax({
        url: 'WebAPI.aspx/' + pStrFName,
        data: pStrData,
        dataType: "json",
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            result = data;
            //do_function(pCbFunctionName, result);
        },
        error: function (response) {
            //AjaxErrorLog(response);
            //window.location.replace("ErrorPage.aspx?ID=EMS01");
            return false;
        },
        failure: function (response) {
            //AjaxErrorLog(response);
            //window.location.replace("ErrorPage.aspx?ID=EMS01");
            return false;
        }
    });
    return result;
}

//RL20200714 - string utility
function StrPadLeft(str, len, char) {
    var strRet = str.toString();
    if (char.length > 1) return strRet;
    var strLen = strRet.length;
    if (strLen >= len) return strRet;
    for (let i = 0; i < (len - strLen); i++) {
        strRet = char + strRet;
    }
    return strRet;
}
