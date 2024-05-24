
$.fn.BlockUI = function (options) {
    var defaults = {       
        Popup_activeClass: "active",//popup 顯示class
        Popup_inactiveClass: "inactive",//popup 隱藏class
        PopupCover_Class: "Popup-cover",
        PopupCover_activeClass: "active",//遮罩 顯示class
        PopupCover_inactiveClass: "inactive",//遮罩 隱藏class
        PopupCover_transparent: false,//遮罩 是否要透明
        PopupCover_opacity: .7,//遮罩 透明度
        PopupCover_bgColor: "#000000",//遮罩 bgColor
        PopupCover_Zindex:48,
        Popup_isFixed:false,
        Top: 0,//popup 彈出時與頂端的距離
        Left: "50%",//popup 彈出時與左邊的距離
        Right: "auto",//popup 彈出時與右邊的距離
        Bottom: "auto",//popup 彈出時與底端的距離
        CloseCover: true,//隱藏popup時 是否要隱藏遮罩
        CloseOtherPopup: false,//隱藏popup時 是否要隱藏其他popup
        BodyOverflowHidden: false,//彈出popup時 Body是否要隱藏scrollbar
        BodyOverflowHiddenRemove: true,//隱藏popup時 Body是否要顯示scrollbar
        BodyOverflowHiddenClass: "overflow_hidden",
        Popupbox_distanceFromTop: 20,//如果內容超出視窗高度
        TitleText: "",
        OtherText:[]
    };

    var __this = this,
        settings = __this.options = $.extend({}, defaults, options);
    var $this = $(this), $body = $("body"), $Popup_cover = $("." + settings.PopupCover_Class), $Popup_bgcover = $("." + settings.PopupCover_Class + " .cover"), $Popup_close = $this.find(".Popup-close");

    __this.resetPosition = function () {
        var __settings = __this.options;
      
        if ($this.outerHeight() > $(window).height()) {

            if (__settings.Popup_isFixed) {
                __settings.Top = __settings.Popupbox_distanceFromTop;
            } else {
                __settings.Top = __settings.Popupbox_distanceFromTop + $(window).scrollTop();
            }
        } else {
            __settings.Top = (($(window).height() / 2) - ($this.outerHeight() / 2)) + $(window).scrollTop();
        }

        if (__settings.Left < 0 || (__settings.Right + $this.outerWidth() > $(window).width())) {
            __settings.Left = 0;
            __settings.Right = "auto";
        }

        if (__settings.Left + $this.outerWidth() > $(window).width() || __settings.Right < 0) {
            __settings.Right = 0;
            __settings.Left = "auto";
        }

        $this.removeClass(__settings.Popup_inactiveClass).addClass(__settings.Popup_activeClass).css({
            "top": __settings.Top,
            "right": __settings.Right,
            "bottom": __settings.Bottom,
            "left": __settings.Left,
        });
    };

    //show
    __this.show = function () {
        var __settings = settings;

        if (__settings.PopupCover_transparent) {
            $Popup_bgcover.css({
                "background-color": "transparent",
            });
        } else {
            $Popup_bgcover.css({
                "opacity": __settings.PopupCover_opacity,
                "background-color": __settings.PopupCover_bgColor,
            });
        }

        if (__settings.TitleText != '') {
            $this.find("[data-popup-title=true]").text(__settings.TitleText);
        }

        if (__settings.OtherText.length > 0) {
            for (var i = 0; i < __settings.OtherText.length; i++) {
                $this.find("[data-popup-othertext" + i + "=true]").text(__settings.OtherText[i]);
            }
        }

        if (__settings.BodyOverflowHidden) {
            $body.addClass(settings.BodyOverflowHiddenClass);
        }

        __this.resetPosition();
       
        $Popup_cover.removeClass(__settings.PopupCover_inactiveClass).addClass(__settings.PopupCover_activeClass).css({
            "z-index": __settings.PopupCover_Zindex
        });
        //console.log("show");
    }  

    //hide
    __this.hide = function () {
        var __settings = settings;
        var $Popbox = $(".Popup-box").not($this);

        if (!__this.isshow())
            return;

        if (__settings.CloseCover) {
            $Popup_cover.removeAttr("class").addClass(__settings.PopupCover_Class).addClass(__settings.PopupCover_inactiveClass);
        }

        if (__settings.BodyOverflowHiddenRemove)
            $body.removeClass(__settings.BodyOverflowHiddenClass);


        $this.removeClass(settings.Popup_activeClass);

   
        if (__settings.CloseOtherPopup) {
            $Popbox.removeClass(settings.Popup_activeClass);
            CloseAllClassForPopup();
        }


        //console.log("hide");
    }

    //hideAll
    __this.hideAll = function () {
        var __settings = settings;
        var $Popbox = $(".Popup-box").not($this);


        if (__settings.CloseCover) {
            $Popup_cover.addClass(__settings.PopupCover_inactiveClass);
        }

        $Popbox.removeClass(settings.Popup_activeClass);
        CloseAllClassForPopup();

        if (__settings.BodyOverflowHiddenRemove)
            $body.removeClass(settings.BodyOverflowHiddenClass);



        //console.log("hideAll");
    }

    //isshow 是否顯示
    __this.isshow = function () {

        var isVisible = false;
        if ($this.hasClass("active") && !$this.hasClass("inactive")) isVisible = true;

        return isVisible;
    }

    //取得所有元素
    __this.getall = function () {
        return $this;
    }

    $this.click(function (event) {
        event.stopPropagation();
    });

    $Popup_close.click(function (event) {
        event.stopPropagation();
        var $body = $("body");
        //console.log($(this).data("closecollapse"));
        if (($body.hasClass("hamburger-is-active") || $body.hasClass("subcategory--open")) && $(this).data("closecollapse") != true) {
            __this.options.CloseOtherPopup = false;
            __this.options.CloseCover = false;
            __this.options.BodyOverflowHiddenRemove = false;
        }
        else {
            __this.options.CloseCover = true;
            __this.options.BodyOverflowHiddenRemove = true;
        }

        __this.hide();
    });


    return {
        Show: function (_options) {
            __this.options = $.extend({}, defaults, _options);
            __this.show();
        },
        Hide: function (_options) {
            __this.options = $.extend({}, defaults, _options);
            __this.hide();
        },
        HideAllBlockUI: function (_options) {
            __this.options = $.extend({}, defaults, _options);
            __this.hideAll();
        },
        isShow: function (_options) {

            return __this.isshow();
        },
        GetAll: function (_options) {

            return __this.getall();
        },
        ResetPosition: function (_options) {
            __this.options = $.extend({}, defaults, _options);
            return __this.resetPosition();
        },
    }

}

