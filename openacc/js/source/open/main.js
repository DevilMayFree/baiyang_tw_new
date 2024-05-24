
//DOM Ready
docReady(function () {
    // DOM is loaded and ready for manipulation here

    //各區塊動畫 ex:data-aos="fade-up"
    AOS.init({
        // Global settings:
        //disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        //startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        //initClassName: 'aos-init', // class applied after initialization
        //animatedClassName: 'aos-animate', // class applied on animation
        //useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        //disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        //debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        //throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        //// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        //offset: 120, // offset (in px) from the original trigger point
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-back', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        //anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});

if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
    // Yes, there's really no need for `Object.defineProperty` here
    NodeList.prototype.forEach = Array.prototype.forEach;
}

function docReady(fn) {
    // see if DOM is already available

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

//get window width
function GetWindowWidth() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        //'Its Safari'
        windowWidth = document.documentElement.clientWidth;
    }
    return windowWidth;
}
function removeDups(names) {
    var unique = {};
    names.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}
function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};



function GoTop() {
    $('html,body').stop().animate({ scrollTop: 0 }, 800, 'easeOutQuart');
}

//get query string
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//check isIE
function isIE() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var result = false;
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        result = true;
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
        result = false;
    }

    return result;
}

//check isMobile
function isMobile() {
    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    return isMobile;
}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
function checkDuplicateInObject(propertyName, inputArray) {
    var seenDuplicate = false,
        testObject = {};

    inputArray.map(function (item) {
        var itemPropertyName = item[propertyName];
        if (itemPropertyName in testObject) {
            testObject[itemPropertyName].duplicate = true;
            item.duplicate = true;
            seenDuplicate = true;
        }
        else {
            testObject[itemPropertyName] = item;
            delete item.duplicate;
        }
    });

    return seenDuplicate;
}
function onlyNumberKeyUp(obj, e) {
    e = e || event;
    var keycode = e.keyCode;
    obj.value = obj.value.replace(/\D/g, '')
}
var ctrlDown = false,
    ctrlKey = 17,
    cmdKey = 91,
    xKey = 88,
    vKey = 86,
    cKey = 67;
$(document).keydown(function (e) {
    if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
}).keyup(function (e) {
    if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
});
function onlyNumberKeyDown(obj, e) {
    e = e || event;
    var keycode;
    var isShift;
    if (window.event) {
        keycode = window.event.keyCode;
        isShift = !!window.event.shiftKey; // typecast to boolean
    } else {
        keycode = ev.which;
        isShift = !!ev.shiftKey;
    }
    if (isShift) {
        return false
    }

    if ((keycode >= 48 && keycode <= 57) || (keycode >= 96 && keycode <= 105) || keycode == 8 || keycode == 9 || keycode == 37 || keycode == 39 || keycode == 46 || (ctrlDown && vKey) || (ctrlDown && cKey) || (ctrlDown && xKey)) {
        // 0-9 only
        return true;
    } else {
        return false
    }
    return true;

}
function startProcessing(errormsg) {
    var options = {
        Center: true,
        Fixed: true,
        directionAnimation: "bottom",
        showLoadingbar: true,
        clicktoRemove: false,
        showCoverbg: true,
        showRemoveBtn: false,
        autoHide: false,
        CoverBgOpacity: 0.7,
        //CoverBgColor: "rgb(0, 0, 0)",
        customclass: ["alert", "top"],
        html: "<div class='textContainer'>" + errormsg + "</div>",
    };
    ProccessMsg = showProccessMsg(options, false, null, []);
}
function drawScoreClock() {
    var canvas = document.getElementById("circle-canvas");
    var context = canvas.getContext("2d");
    var lineWidth = 35;

    canvas.width = 154;
    canvas.height = 81;

    var centerX = canvas.width / 2;
    var centerY = canvas.height;

    var radius = canvas.width / 2 - (lineWidth / 2);

    var FirstAngle = Math.PI;
    var SecondAngle = (Math.PI / 3) + Math.PI;
    var ThirdAngle = (Math.PI / 3 * 2) + Math.PI;
    var FourthAngle = (Math.PI) + Math.PI;
    var counterclockwise = false;

    //第一塊
    context.beginPath();
    context.arc(centerX, centerY, radius, FirstAngle,
        SecondAngle);
    context.lineWidth = lineWidth;
    context.strokeStyle = "#F6AB00";
    context.stroke();

    //第二塊
    context.beginPath();
    context.arc(centerX, centerY, radius, SecondAngle,
        ThirdAngle);
    context.lineWidth = lineWidth;
    context.strokeStyle = "#F08200";
    context.stroke();

    //第三塊
    context.beginPath();
    context.arc(centerX, centerY, radius, ThirdAngle,
        FourthAngle);
    context.lineWidth = lineWidth;
    context.strokeStyle = "#008764";
    context.stroke();

    context.font = "10px sans-serif";
    context.fillStyle = "#F6AB00";
    context.fillText("10", canvas.width * .17, canvas.height * 0.12);

    context.fillText("16", canvas.width * .75, canvas.height * 0.12);
}
function CollapseContent(e) {
    var $titlebox = $(e);
    var $contentbox = $titlebox.next();

    $titlebox.toggleClass("active");
    $contentbox.stop().slideToggle(200, function () {
        if ($titlebox.hasClass("active"))
            $('html,body').stop().animate({ scrollTop: ($(window).scrollTop() + $contentbox.outerHeight()) }, 800, 'easeOutQuart');
    });
}
