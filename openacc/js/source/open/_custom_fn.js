
//$.fn.swipeDetector = function (options) {
//    // States: 0 - no swipe, 1 - swipe started, 2 - swipe released
//    // Coordinates when swipe started
//    var startX = 0;
//    var startY = 0;
//    // Distance of swipe
//    var pixelOffsetX = 0;
//    var pixelOffsetY = 0;
//    // Target element which should detect swipes.
//    var swipeTarget = this, $this = $(this);
//    var defaultSettings = {
//        // Amount of pixels, when swipe don't count.
//        swipeThreshold: 70,
//        // Flag that indicates that plugin should react only on touch events.
//        // Not on mouse events too.
//        useOnlyTouch: false
//    };

//    // Initializer
//    (function init() {
//        swipeTarget.swipeState = 0;
//        swipeTarget.options = $.extend(defaultSettings, options);
//        // Support touch and mouse as well.
//        swipeTarget.on('mousedown touchstart', swipeStart);
//        swipeTarget.on('mouseup touchend', swipeEnd);
//        swipeTarget.on('mousemove touchmove', swiping);
//        $this.addClass("mouse_grab");
//    })();

//    function swipeStart(event) {
//        $this.addClass("mouse_grabing");

//        if (swipeTarget.options.useOnlyTouch && !event.originalEvent.touches)
//            return;

//        if (event.originalEvent.touches)
//            event = event.originalEvent.touches[0];

//        if (swipeTarget.swipeState === 0) {
//            swipeTarget.swipeState = 1;
//            startX = event.clientX;
//            startY = event.clientY;
//        }
//    }

//    function swipeEnd(event) {
//        $this.removeClass("mouse_grabing");
//        //if (swipeTarget.swipeState === 2) {
//        swipeTarget.swipeState = 0;

//        if (Math.abs(pixelOffsetX) > Math.abs(pixelOffsetY) &&
//            Math.abs(pixelOffsetX) > swipeTarget.options.swipeThreshold) { // Horizontal Swipe

//            if (pixelOffsetX < 0) {
//                swipeTarget.trigger($.Event('swipeLeft.sd'));

//            } else {
//                swipeTarget.trigger($.Event('swipeRight.sd'));
//                //console.log('Right');
//            }
//            pixelOffsetX = 0;
//        } else if (Math.abs(pixelOffsetY) > swipeTarget.options.swipeThreshold) { // Vertical swipe
//            if (pixelOffsetY < 0) {
//                swipeTarget.trigger($.Event('swipeUp.sd'));
//                //console.log('Up');
//            } else {
//                swipeTarget.trigger($.Event('swipeDown.sd'));
//                //console.log('Down');
//            }
//        }
//        pixelOffsetX = 0;
//        swipeTarget._swipe_OffsetX = pixelOffsetX;
//        //}
//    }

//    function swiping(event) {
//        // If swipe don't occuring, do nothing.     
//        if (swipeTarget.swipeState !== 1)
//            return;

//        swipeTarget.trigger($.Event('swipe.sd'));

//        if (event.originalEvent.touches) {
//            event = event.originalEvent.touches[0];
//        }

//        var swipeOffsetX = event.clientX - startX;
//        var swipeOffsetY = event.clientY - startY;

//        //if ((Math.abs(swipeOffsetX) > swipeTarget.options.swipeThreshold) || (Math.abs(swipeOffsetY) > swipeTarget.options.swipeThreshold)) {
//        //swipeTarget.swipeState = 2;
//        pixelOffsetX = swipeOffsetX;
//        pixelOffsetY = swipeOffsetY;
//        swipeTarget._swipe_OffsetX = pixelOffsetX;
//        //console.log(pixelOffsetX);
//        // }
//    }

//    return swipeTarget; // Return element available for chaining.
//}
//$.fn.menuFloat = function (options) {
//    //top
//    //right-bottom,right,right-top
//    //bottom
//    //left-bottom,left,left-top
//    var defaults = {
//        activeClass: "",
//        position: "right",
//        scrollHeight_show: 0,//px
//    };
//    var settings = this.options = $.extend({
//        ori_activeClass: "float-bar-fixed"
//    }, defaults, options);

//    var $this = $(this), $body = $("body");

//    $body.addClass(settings.ori_activeClass).addClass(settings.activeClass);
//    $this.addClass("menufloat").addClass("fbf-" + settings.position);

//    var _loadfloat = function (loadttype) {
//        if ($(window).scrollTop() >= settings.scrollHeight_show) {
//            $this.addClass("active").removeClass("inactive");
//            //$this.addClass("active");
//        } else {

//            if (loadttype == "scroll" && $this.hasClass("active")) {
//                $this.addClass("inactive").delay(100).stop().promise().done(function () {
//                    $this.removeClass("active");
//                });
//            }
//            //$this.removeClass("active");
//        }
//    }

//    _loadfloat("firstload");
//    $(window).scroll(function () {
//        _loadfloat("scroll");
//    });
//};
//$.fn.fixedTopHeader = function (options) {
//    var defaults = {
//        activeClass: "",
//    };
//    var settings = this.options = $.extend({ ori_activeClass: "nav-fixed" }, defaults, options);

//    if ($(this).length > 0) {
//        var $this = $(this), $body = $("body"), $main = $("main");

//        var _scf_offset_top = settings.defaultOffsetTop >= 0 ? settings.defaultOffsetTop : $this.offset().top;
//        $this.addClass("scrollfixed");

//        var _loadfixed = function (type) {
//            var height = $this.outerHeight(true);

//            if ($(this).scrollTop() >= _scf_offset_top) {

//                $body.addClass(settings.ori_activeClass)
//                    .addClass(settings.activeClass);

//            } else {
//                $body.removeClass(settings.ori_activeClass)
//                    .removeClass(settings.activeClass);
//            }

//            if (type == "load" || type == "resize") $body.css("padding-top", height);
//        }


//        _loadfixed("load");
//        $(window).scroll(function () {
//            _loadfixed();
//        });
//        $(document).on("afterResized", function (event) {
//            _loadfixed("resize");
//        });

//    }
//};
//$.fn.elementScrollToShowHide = function (options) {
//    var defaults = {
//        action: "hide",//hide or show
//        always: false,
//        animateAtStart: false,
//        animateAtStart_delay: 0,
//        animationElement: "",
//        animationClass: "afterElementScrollToHide",
//        scrollHeightToHide: 0,//px
//        slideToHideClass: "slideToHide_body",
//        slideToShowClass: "slideToShow_body",
//        afterAnimation: function () { }
//    };
//    var settings = this.options = $.extend({ ori_activeClass: "nav-fixed" }, defaults, options);

//    if ($(this).length > 0) {
//        var $this = $(this), $Container = $this;
//        var position_pagescroll = $(window).scrollTop();

//        var _loadfixed = function (type) {
//            var scroll = $(window).scrollTop();

//            var isToShow = settings.action == "show" ? true : false;

//            if (type == "load") {
//                if (settings.animateAtStart) {
//                    var delay = settings.animateAtStart_delay < 200 ? 200 : settings.animateAtStart_delay;

//                    $this.delay(delay).promise().done(function () {
//                        if (isToShow)
//                            $Container.removeClass(settings.slideToHideClass).addClass(settings.slideToShowClass);
//                        else
//                            $Container.removeClass(settings.slideToShowClass).addClass(settings.slideToHideClass);
//                    });
//                } else {
//                    if (!isToShow)
//                        $Container.css("transition", "none").removeClass(settings.slideToHideClass).addClass(settings.slideToShowClass);
//                    else
//                        $Container.css("transition", "none").removeClass(settings.slideToShowClass).addClass(settings.slideToHideClass);
//                }
//            } else {
//                $Container.css("transition", "");
//                if (scroll <= settings.scrollHeightToHide) {
//                    //Top (show)
//                    if (!isToShow)
//                        $Container.removeClass(settings.slideToHideClass).addClass(settings.slideToShowClass);
//                    else
//                        $Container.removeClass(settings.slideToShowClass).addClass(settings.slideToHideClass);

//                    settings.afterAnimation();
//                }
//                else if (scroll <= ($("html").height() - $(window).height() + 20) && scroll >= ($("html").height() - $(window).height() - 20)) {
//                    if (settings.always)
//                        return;

//                    //Bottom (hide)
//                    $Container.removeClass(settings.slideToShowClass).addClass(settings.slideToHideClass);
//                    settings.afterAnimation();
//                }
//                else {
//                    if (scroll > position_pagescroll) {
//                        //scrollDown
//                        if (!isToShow) {
//                            if (!$Container.hasClass(settings.slideToHideClass)) {
//                                $Container.removeClass(settings.slideToShowClass).addClass(settings.slideToHideClass);
//                                settings.afterAnimation();
//                            }
//                        } else {
//                            if (!$Container.hasClass(settings.slideToShowClass)) {
//                                $Container.removeClass(settings.slideToHideClass).addClass(settings.slideToShowClass);
//                                settings.afterAnimation();
//                            }
//                        }

//                    } else {
//                        if (settings.always)
//                            return;

//                        //scrollUp
//                        if (!$Container.hasClass(settings.slideToShowClass)) {
//                            $Container.removeClass(settings.slideToHideClass).addClass(settings.slideToShowClass);
//                            settings.afterAnimation();
//                        }
//                    }
//                }
//            }
//            position_pagescroll = scroll;
//        }

//        _loadfixed("load");
//        $(window).scroll(function () {
//            _loadfixed();
//        });
//    }
//};

//$.fn.rippleClick = function (options) {

//    var defaults = {
//    };
//    var settings = this.options = $.extend({}, defaults, options);
//    var $this = $(this);

//    if ($this.data("pluginloaded") == true)
//        return;

//    $this.click(function (e) {
//        // Remove any old one
//        $(".ripple").remove();

//        var posX = $(this).offset().left,
//            posY = $(this).offset().top,
//            buttonWidth = $(this).width(),
//            buttonHeight = $(this).height();

//        // Add the element
//        $(this).prepend("<span class='ripple'></span>");


//        // Make it round!
//        if (buttonWidth >= buttonHeight) {
//            buttonHeight = buttonWidth;
//        } else {
//            buttonWidth = buttonHeight;
//        }

//        // Get the center of the element
//        var x = e.pageX - posX - buttonWidth / 2;
//        var y = e.pageY - posY - buttonHeight / 2;


//        // Add the ripples CSS and start the animation
//        $(".ripple").css({
//            width: buttonWidth,
//            height: buttonHeight,
//            top: y + 'px',
//            left: x + 'px'
//        }).addClass("rippleEffect");
//    });
//    // Setup

//    $this.data("pluginloaded", true);

//};
//$.fn.BtnFrameboxMoveOnHover = function (options) {

//    var defaults = {
//        extendWidth: 0,
//        extendHeight: 0,
//        hideTopDistance: 0,
//        frameClass: ".frameBtn",
//        positionClass: "",
//        delay: 1,
//        animationDuration: 300,
//        scaleY: .7,
//        scaleX: 1,
//        removeFromParentElement: false,
//        removeDefaultFramebox_windowwidth_range: 0
//    };

//    var __this = this;
//    var settings = __this.options = $.extend({}, defaults, options);
//    var $this = $(this),
//        $ParentElement = settings.positionClass == "" ? $this.parent() : $(settings.positionClass),
//        isout = false,
//        o_posX = 0,
//        o_posY = 0,
//        timeout_fbox,
//        timeout_scaleh,
//        $tempTarget;


//    //SetDefaultFrameboxPosition
//    __this.defaultFramebox = function () {
//        var result = false;


//        if (settings.removeDefaultFramebox_windowwidth_range > 0 && GetWindowWidth() <= settings.removeDefaultFramebox_windowwidth_range)
//            result = false;
//        else {
//            var $defaultElement = $($.grep($this, function (e) { return $(e).data("framebox-default") == true }));
//            if ($defaultElement.length > 0) {
//                __this.moveFramebox($defaultElement, false);
//                result = true;
//            }
//        }
//        return result;
//    }

//    //moveFramebox
//    __this.moveFramebox = function (_this, withExtraSzie) {
//        $tempTarget = _this;

//        var posX = _this.position().left + parseInt(_this.css("margin-left").replace(/px/g, "")),
//            posY = _this.position().top + parseInt(_this.css("margin-top").replace(/px/g, ""));

//        // Get the center of the element
//        var extra_w = withExtraSzie ? settings.extendWidth : 0;
//        var extra_h = withExtraSzie ? settings.extendHeight : 0;
//        var w = _this.outerWidth() + extra_w;
//        var h = _this.outerHeight() + extra_h;

//        var x = posX - extra_w / 2;
//        var y = posY - extra_h / 2;


//        if (!isout) {
//            $frameobject.css({
//                width: w,
//                height: h,
//                "-webkit-transform": "translate(" + x + "px," + (y + settings.hideTopDistance) + "px)",
//                "transform": "translate(" + x + "px," + (y + settings.hideTopDistance) + "px)",
//                "transition-duration": "0s"
//            }).delay(100).promise().done(function () {
//                $frameobject.css({
//                    "-webkit-transform": "translate(" + x + "px," + y + "px)",
//                    "transform": "translate(" + x + "px," + y + "px)",
//                    "opacity": "1",
//                    "transition-duration": (settings.animationDuration / 1000) + "s"
//                });

//            });
//        } else {
//            clearTimeout(timeout_scaleh);
//            // Add the CSS and start the animation
//            $frameobject.css({
//                width: w,
//                height: h,
//                "-webkit-transform": "translate(" + x + "px," + y + "px) scale(" + settings.scaleX + "," + settings.scaleY + ")",
//                "transform": "translate(" + x + "px," + y + "px) scale(" + settings.scaleX + "," + settings.scaleY + ")",
//                "opacity": "1",
//                "transition-duration": (settings.animationDuration / 1000) + "s"
//            });
//            timeout_scaleh = setTimeout(function () {
//                $frameobject.css({
//                    "-webkit-transform": "translate(" + x + "px," + y + "px) scale(1,1)",
//                    "transform": "translate(" + x + "px," + y + "px) scale(1,1)"
//                });
//            }, 150);
//        }
//        o_posX = x;
//        o_posY = y;

//        isout = true;
//    }

//    //closeFramebox
//    __this.closeFramebox = function () {

//        if (!__this.defaultFramebox()) {

//            var posX = o_posX,
//                posY = o_posY;

//            var x = posX;
//            var y = posY + settings.hideTopDistance;

//            $frameobject.css({
//                "-webkit-transform": "translate(" + x + "px," + y + "px)",
//                "transform": "translate(" + x + "px," + y + "px)",
//                "opacity": "0"
//            });
//            isout = false;
//        }
//    }


//    //Create the framebox
//    var $frameobject = $("<span class='" + settings.frameClass.substr(1) + "'></span>");

//    //Set default position
//    __this.defaultFramebox();

//    //Add the framebox
//    $ParentElement.prepend($frameobject);

//    if (settings.removeFromParentElement) {
//        $ParentElement.mouseleave(function () {
//            __this.closeFramebox();
//        });
//    }

//    $this.mouseenter(function (e) {
//        var _$this = $(this);
//        clearTimeout(timeout_fbox);
//        timeout_fbox = setTimeout(function () {

//            __this.moveFramebox(_$this, true);
//        }, settings.delay);

//    });
//    $this.mouseleave(function () {
//        clearTimeout(timeout_fbox);
//    });

//    return {
//        closeFramebox: function () {
//            __this.closeFramebox();
//        },
//        setDelay: function (delay) {
//            settings.delay = delay;
//        },
//        resetSize: function () {
//            __this.moveFramebox($tempTarget, false);
//        }
//    }

//};
//$.fn.Collapse = function (options) {
//    var defaults = {
//        targetId: "",
//        startToShow: true,
//        closeOthers: false,
//        speed: 200
//    };
//    var settings = this.options = $.extend({}, defaults, options);

//    var __this = this;
//    var $this = $(this), $body = $("body");
//    var timeout_c;


//    //show
//    __this.shownoduration = function (_$this, __settings) {
//        $("#" + __settings.targetId).show();
//        _$this.addClass("active");
//        __this.toogleshow(_$this, __settings);
//    }

//    __this.hidenoduration = function (_$this, __settings) {
//        $("#" + __settings.targetId).hide();
//        _$this.removeClass("active");
//        __this.toogleshow(_$this, __settings);
//    }

//    __this.show = function (_$this, __settings) {

//        if (__settings.closeOthers) {
//            $("[data-collapse-groupclass=" + __settings.groupclass + "]").stop().slideUp(__settings.speed);
//            $("[data-collapse-btngroupclass=" + __settings.groupclass + "]").removeClass("active").each(function () {
//                var __$this = $(this);
//                var __settings_others = __$this.data("collapseptions");
//                __settings_others.startToShow = true;
//                __$this.data("collapseptions", __settings_others)
//            });
//        }

//        $("#" + __settings.targetId).stop().slideDown(__settings.speed);
//        _$this.addClass("active");

//        __this.toogleshow(_$this, __settings);
//    }

//    __this.hide = function (_$this, __settings) {
//        console.log("hide");
//        $("#" + __settings.targetId).stop().slideUp(__settings.speed);
//        _$this.removeClass("active");

//        __this.toogleshow(_$this, __settings);
//    }

//    __this.toogleshow = function (_$this, __settings) {
//        __settings.startToShow = !__settings.startToShow;
//        _$this.data("collapseptions", __settings);
//    }

//    $.each($this, function (i, item) {
//        var _$this = $(this);
//        var o_collapsespeed = _$this.data("collapsespeed");
//        var _collapse_target = _$this.data("collapseid"),
//            _collapse_groupclass = _$this.data("collapse-btngroupclass"),
//            _collapse_closeOthers = _$this.data("collapse-closeothers"),
//            _collapse_startToShow = _$this.data("collapsestartoshow"),
//            _collapse_speed = !isNaN(o_collapsespeed) && o_collapsespeed.toString() != "" ? o_collapsespeed : settings.speed;

//        var _options = {
//            targetId: _collapse_target,
//            groupclass: _collapse_groupclass,
//            startToShow: _collapse_startToShow,
//            speed: _collapse_speed,
//            closeOthers: _collapse_closeOthers
//        };

//        var __settings = __this.options = $.extend({}, defaults, _options);

//        if (_collapse_startToShow) {
//            __this.shownoduration(_$this, _options);
//        } else {
//            __this.hidenoduration(_$this, _options);
//        }

//    });

//    $this.click(function () {
//        var _$this = $(this);
//        var __settings = _$this.data("collapseptions");

//        if (__settings.startToShow) {
//            __this.show(_$this, __settings);
//        } else {
//            __this.hide(_$this, __settings);
//        }

//    });

//    return {
//        _This: function (_options) {
//            var newoptions = __this.options = $.extend({}, defaults, _options);
//            return $this;
//        },
//        Show: function (_options) {
//            var newoptions = __this.options = $.extend({}, defaults, _options);

//            __this.show($(this)[0]._This(), newoptions);
//        },
//        Hide: function (_options) {
//            var newoptions = __this.options = $.extend({}, defaults, _options);
//            __this.hide($(this)[0]._This(), newoptions);
//        },
//        ShowbyCollapseId: function (CollapseId, _options) {
//            clearTimeout(timeout_c);
//            var $d = $.Deferred();
//            var newoptions = __this.options = $.extend({}, defaults, _options);
//            __this.show($($.grep($this, function (e) { return $(e).data("collapseid") == CollapseId; })), newoptions);

//            timeout_c = setTimeout(function () { $d.resolve() }, newoptions.speed);

//            return $d.promise();
//        },
//    }
//};

//$.fn.ShowPassword = function (options) {
//    var defaults = {
//        activeClass: "active",
//        startToShow: false
//    };
//    var settings = this.options = $.extend({}, defaults, options);

//    var __this = this;
//    var $this = $(this), $body = $("body");


//    __this.show = function (_$this) {

//        _$this.removeClass(settings.activeClass);
//        _$this.nextAll("input[type=password]").attr("type", "text").removeAttr("autocomplete").attr("autocomplete", "off");
//    }

//    __this.hide = function (_$this) {
//        _$this.addClass(settings.activeClass);
//        _$this.nextAll("input[type=text]").attr("type", "password").removeAttr("autocomplete").attr("autocomplete", "new-password");
//    }

//    $.each($this, function (i, item) {
//        var _$this = $(this);
//        var _eye_startToShow = _$this.data("eyeptions");

//        var _options = {
//            startToShow: _eye_startToShow
//        };

//        var __settings = __this.options = $.extend({}, defaults, _options);

//        if (_eye_startToShow) {

//            __this.show(_$this);
//        } else {
//            __this.hide(_$this);
//        }
//        _$this.data("eyeptions", __settings);
//    });

//    $this.click(function () {
//        var _$this = $(this);
//        var __settings = _$this.data("eyeptions");

//        if (!__settings.startToShow) {
//            __this.show(_$this);
//        } else {
//            __this.hide(_$this);
//        }
//        __settings.startToShow = !__settings.startToShow;
//        _$this.data("eyeptions", __settings);
//    });


//    return {
//        Show: function (_options) {
//            var newoptions = __this.options = $.extend({}, defaults, _options);
//            __this.show($(this));
//        },
//        Hide: function (_options) {
//            var newoptions = __this.options = $.extend({}, defaults, _options);
//            __this.hide($(this));
//        }
//    }
//};

//$.fn.GetCollapseIndex = function (options) {
//    var defaults = {
//    };
//    var settings = this.options = $.extend({ ori_activeClass: "nav-fixed" }, defaults, options);
//    var __this = this;
//    var $this = $(this), $Container = $("header");

//    //get how many elements in a row
//    //get $this element in which row 

//    __this.getafterindex = function (_$this, newindex) {

//        var thisindex = newindex,
//            _newindex = 0;

//        var positionTop_temp = _$this.position().top;

//        for (var i = thisindex; i < $this.length; i++) {
//            var _this_pos_top = $this.eq(i).position().top;

//            if (_this_pos_top > positionTop_temp) {
//                _newindex = (i - 1);
//                break;
//            }
//            if (i == $this.length - 1) {
//                _newindex = (i);
//            }
//            positionTop_temp = _this_pos_top;
//        }

//        return _newindex
//    }

//    return {
//        Rows: function () {
//            return __this.elements();
//        },
//        GetAfterIndex: function (_$this, newindex) {
//            return __this.getafterindex(_$this, newindex);
//        }
//    }
//};
//$.fn.BannerParallex = function (options) {
//    var defaults = {
//        maxScaleRate: 1.5,
//        ScaleRate: 0.0003,
//        Range: 0,
//        RangeScale: 0,
//        Speed: 0.1,
//        animateDuration: 2000,//ms
//        animateTimingfunction: "cubic-bezier(0.18, 0.69, 0.07, 1.01)",
//        direction: "normal",
//        horizontal: false,
//        selector: "img"
//    };
//    var settings = this.options = $.extend({}, defaults, options);
//    var __this = this;
//    var $this = $(this), $Container = $("header"), _$banner_array = [];

//    __this.init = function () {
//        _$banner_array = [];
//        if ($this && $this.length > 0) {
//            $.each($this, function (i, item) {
//                var _$this = $(item), top = _$this.offset().top;;
//                var object = {
//                    _this: _$this,
//                    offsetTop: top,
//                    win_top: 0,
//                    scale_size: 1
//                };
//                _$banner_array.push(object);
//            });
//        }
//    };

//    __this.animate = function (data) {
//        if (data.length > 0) {
//            var scrolltop = $(window).scrollTop();

//            $.each(data, function (i, item) {

//                var _$this = item._this,
//                    _$bannerImg = _$this.find(settings.selector),
//                    itemtop = item.offsetTop;
//                var banner_parallex_speed = _$bannerImg.data("parallexspeed") || settings.Speed,
//                    banner_parallex_duration = _$bannerImg.data("parallexduration") || settings.animateDuration,
//                    range = _$bannerImg.data("parallexrange") || settings.Range,
//                    rangescale = _$bannerImg.data("parallexrangescale") || settings.RangeScale,
//                    scale_rate = _$bannerImg.data("parallexscalerate") || settings.ScaleRate,
//                    horizontal = _$bannerImg.data("parallexhorizontal") || settings.horizontal,
//                    direction = _$bannerImg.data("parallexdirection") || settings.direction,
//                    directionIndex = direction == "normal" ? 1 : -1,
//                    start_top_distance = scrolltop,
//                    i_top = itemtop - $(window).height();

//                if (itemtop >= $(window).height()) {
//                    start_top_distance = (scrolltop - (itemtop - $(window).height()));
//                    i_top = 0;
//                }

//                if (scrolltop > (i_top) && scrolltop < (itemtop + _$this.height() + range)) item.win_top = start_top_distance * banner_parallex_speed * directionIndex;

//                var startscale_top_distance = (scrolltop - itemtop + rangescale);
//                if (scrolltop > (i_top + rangescale) && scrolltop < (itemtop + _$this.height())) item.scale_size = 1 + 1 * (startscale_top_distance * scale_rate);

//                item.scale_size = item.scale_size > settings.maxScaleRate ? settings.maxScaleRate : item.scale_size <= 1 ? 1 : item.scale_size;

//                var _transform = "";

//                if (horizontal) {
//                    _transform = "translate(" + item.win_top + "px,0) scale(" + item.scale_size + ")";
//                } else {
//                    _transform = "translate(0," + item.win_top + "px) scale(" + item.scale_size + ")";
//                }
//                _$bannerImg.css({
//                    "-webkit-transform": _transform,
//                    "transform": _transform,
//                    "transition-duration": banner_parallex_duration / 1000 + "s",
//                    "transition-timing-function": settings.animateTimingfunction,
//                });
//            });
//        }
//    }

//    __this.reset = function () {
//        __this.init();
//        __this.animate(_$banner_array);
//    };

//    __this.init();
//    __this.animate(_$banner_array);

//    $(window).scroll(function () {

//        __this.animate(_$banner_array);
//    });

//    return {
//        reset: function () {
//            __this.reset();
//        }
//    }

//};

//$.fn.ElementParallexMove = function (options) {
//    var defaults = {
//        maxScaleRate: 1.5,
//        Speed: 0.1,
//        RateX: 0.1,
//        RateY: 0.05,
//        animateDuration: 2000,//ms
//        animateTimingfunction: "cubic-bezier(0.18, 0.69, 0.07, 1.01)",
//        directionX: "reverse",
//        directionY: "reverse"
//    };
//    var settings = this.options = $.extend({}, defaults, options);
//    var __this = this;
//    var $this = $(this), $Container = $("header");

//    var throttleOn = false;
//    var actionLock = false;
//    var throttleTimer = 50;

//    __this.animate = function (e) {
//        var client_x = e.clientX - ($(window).width() / 2), client_y = e.clientY - ($(window).height() / 2);

//        $.each($this, function (i, item) {
//            var _$this = $(item);
//            var _speedratex = _$this.data("speedratex") || settings.RateX,
//                _speedratey = _$this.data("speedratey") || settings.RateY,
//                directionX = _$this.data("parallexdirectionx") || settings.directionX,
//                directionY = _$this.data("parallexdirectiony") || settings.directionY,
//                _directionIndexX = directionX == "normal" ? 1 : -1,
//                _directionIndexY = directionY == "normal" ? 1 : -1;

//            _$this.css({
//                "-webkit-transform": "translate(" + client_x * _speedratex * _directionIndexX + "px," + client_y * _speedratey * _directionIndexY + "px)",
//                "transform": "translate(" + client_x * _speedratex * _directionIndexX + "px," + client_y * _speedratey * _directionIndexY + "px)",
//            });
//        });
//    }

//    __this.throttle = function (e) {
//        if (throttleOn) {
//            actionLock = true;
//        };
//        if (!actionLock) {
//            throttleOn = true;
//            setTimeout(function () {
//                throttleOn = false;
//            }, throttleTimer);
//            __this.animate(e);
//        };
//        actionLock = false;
//    }

//    $(window).mousemove(function (e) {

//        __this.throttle(e);
//    });

//};

//$.fn.RenderParallexLetters = function (options) {
//    var defaults = {
//        Speed: 0.03,
//        parallex_box_classname: ".parallex_box",
//        parallex_object_classname: ".parallex_object",
//        parallex_word_classname: ".parallex_word",
//        minSpeedWordsLength: 5,
//        maxSpeedWordsLength: 0,
//        isSplitLetters: false
//    };
//    var settings = this.options = $.extend({}, defaults, options);
//    var __this = this;
//    var $this = $(this), $Container = $("header");
//    var english_regx = /^[A-Za-z0-9]*$/,
//        pagetitle_length = 0;

//    __this.splitletters = function (e) {
//        if (!settings.isSplitLetters) return;

//        if ($this && $this.length > 0) {
//            $.each($this, function () {
//                var _$this = $(this);
//                var isEnglish = english_regx.test(_$this.text().replace(/\s/g, ''));

//                if (isEnglish) {
//                    //英文字母
//                    var _pageTitle__words = _$this.text().trim().split(" ");
//                    var _pageTitle__chars_whole = _$this.text().replace(/\s/g, '').split('');

//                    _$this.empty();
//                    var html = "";
//                    for (var s = 0; s < _pageTitle__words.length; s++) {
//                        var _pageTitle__chars = _pageTitle__words[s].replace(/\s/g, '').split('');
//                        pagetitle_length = _pageTitle__chars_whole.length <= 3 ? settings.minSpeedWordsLength : _pageTitle__chars_whole.length;

//                        if (settings.minSpeedWordsLength > 0) {
//                            if (pagetitle_length < settings.minSpeedWordsLength)
//                                pagetitle_length = settings.minSpeedWordsLength;
//                        }

//                        if (settings.maxSpeedWordsLength > 0) {
//                            if (pagetitle_length > settings.maxSpeedWordsLength)
//                                pagetitle_length = settings.maxSpeedWordsLength;
//                        }

//                        for (var i = 0; i < _pageTitle__chars.length; i++) {
//                            var index = (Math.floor(Math.random() * pagetitle_length) + 1);
//                            var classname = settings.parallex_object_classname + index.toString(),
//                                speed_range = (settings.Speed * index) * 1000,
//                                direction = (Math.floor(Math.random() * 2) + 1) == 1 ? "down" : "up";

//                            html += '<span class="parallex ' + settings.parallex_object_classname + ' ' + settings.parallex_word_classname + ' ' + classname + '" data-speed="' + speed_range + '" data-direction="' + direction + '">' + _pageTitle__chars[i] + '</span>';
//                        }
//                        html += "&nbsp;";
//                    }
//                    _$this.append(html.substr(0, html.lastIndexOf("&nbsp;")));
//                } else {
//                    //中文
//                    var _pageTitle__chars = _$this.text().replace(/\s/g, '').split('');
//                    pagetitle_length = _pageTitle__chars.length <= 3 ? settings.minSpeedWordsLength : _pageTitle__chars.length;


//                    if (settings.minSpeedWordsLength > 0) {
//                        if (pagetitle_length < settings.minSpeedWordsLength)
//                            pagetitle_length = settings.minSpeedWordsLength;
//                    }

//                    if (settings.maxSpeedWordsLength > 0) {
//                        if (pagetitle_length > settings.maxSpeedWordsLength)
//                            pagetitle_length = settings.maxSpeedWordsLength;
//                    }

//                    _$this.empty();

//                    var html = "";
//                    for (var i = 0; i < _pageTitle__chars.length; i++) {
//                        var index = (Math.floor(Math.random() * pagetitle_length) + 1);
//                        var classname = settings.parallex_object_classname + index.toString(),
//                            speed_range = (settings.Speed * index) * 1000,
//                            direction = (Math.floor(Math.random() * 2) + 1) == 1 ? "down" : "up";

//                        html += '<span class="parallex ' + settings.parallex_object_classname + ' ' + settings.parallex_word_classname + ' ' + classname + '" data-speed="' + speed_range + '" data-direction="' + direction + '">' + _pageTitle__chars[i] + '</span>';
//                    }
//                    _$this.append(html);
//                }
//            });
//        }
//    }

//    __this.run = function (loadtype) {

//        var scrolltop = loadtype == "load" ? $(window).scrollTop() > 0 ? 0 : 400 : $(window).scrollTop();

//        var animate_object = function (type) {
//            $.each($(settings.parallex_object_classname), function () {
//                var $this = $(this);
//                var isGrayScale = parseInt($this.attr("data-isgrayscale")) == 1 ? true : false,
//                    speed = parseInt($this.attr("data-speed")) / 1000,
//                    direction = $this.attr("data-direction") == "down" ? 1 : -1,
//                    _this_offsettop = parseInt($this.attr("data-offsettop"));

//                var _distance = ((scrolltop - _this_offsettop) * speed);
//                var win_top = _distance * direction;

//                if (isGrayScale) {
//                    var grayscale_rate = 1 - (0.0025 * (scrolltop - _this_offsettop + 200));
//                    $this.css({
//                        "-webkit-transform": "translate(0," + win_top + "px)",
//                        "transform": "translate(0," + win_top + "px)",
//                        "filter": "grayscale(" + grayscale_rate + ")"
//                    });
//                } else {
//                    $this.css({
//                        "-webkit-transform": "translate(0," + win_top + "px)",
//                        "transform": "translate(0," + win_top + "px)"
//                    });
//                }

//                if (type != "load" && $this.hasClass(settings.parallex_word_classname)) {
//                    var _opacity = 0;
//                    if (_distance > 200) {
//                        _opacity = 0;
//                    } else {
//                        _opacity = 1;
//                    }
//                    $this.css({
//                        "opacity": _opacity
//                    });
//                }
//            });
//        };

//        //物件浮動(動畫)
//        if (loadtype == "load") {
//            $.each($(settings.parallex_object_classname), function () {
//                var $this = $(this);
//                var parallex_box_offsetTop = $this.closest(settings.parallex_box_classname).length > 0 ? $this.closest(settings.parallex_box_classname).offset().top : 0;

//                $this.attr("data-offsettop", parallex_box_offsetTop);
//            }).promise().done(function () {
//                animate_object(loadtype);
//            });
//        } else {
//            if ($("body").hasClass(body_finished_class)) {
//                animate_object(loadtype);
//            }
//        }
//    }

//    __this.splitletters();

//    $(window).scroll(function () {
//        __this.run();
//    });

//    return {
//        Run: function (loadtype) {
//            __this.run(loadtype);
//        }
//    }

//};
//$.fn.RenderWaveLetters = function (options) {
//    //ex : var wave = $(".wave1").RenderWaveLetters();
//    var defaults = {
//        IsLoadFinished: false,
//        wave_box_classname: ".wave"
//    };
//    var settings = this.options = $.extend({}, defaults, options);
//    var __this = this;
//    var $this = $(this), $Container = $("header");
//    var english_regx = /^[A-Za-z0-9]*$/;

//    __this.splitletters = function (e) {
//        if ($this && $this.length > 0) {
//            $.each($this, function () {
//                var _$this = $(this);
//                var isEnglish = english_regx.test(_$this.text().replace(/\s/g, ''));

//                if (isEnglish) {
//                    //英文字母
//                    var _wave1__words = _$this.text().trim().split(" ");

//                    _$this.empty();

//                    var html = "";

//                    for (var s = 0; s < _wave1__words.length; s++) {
//                        var _wave1__chars = _wave1__words[s].replace(/\s/g, '').split('');
//                        for (var i = 0; i < _wave1__chars.length; i++) {
//                            html += '<span>' + _wave1__chars[i] + '</span>';
//                        }
//                        html += '<span>&nbsp;</span>';
//                    }
//                    _$this.append(html.substr(0, html.lastIndexOf("<span>&nbsp;</span>")));
//                } else {
//                    //中文
//                    var _wave1__chars = _$this.text().replace(/\s/g, '').split('');
//                    _$this.empty();

//                    var html = "";
//                    for (var i = 0; i < _wave1__chars.length; i++) {
//                        html += '<span>' + _wave1__chars[i] + '</span>';
//                    }
//                    _$this.append(html);
//                }
//            });
//        }
//    }

//    __this.show = function (e) {
//        var _window_scrollTop = $(window).scrollTop();
//        var $wave = $(settings.wave_box_classname).not(".active");
//        var _win_height = $(window).height();

//        if (settings.IsLoadFinished) {
//            $.each($wave, function (i, e) {
//                var _waveTop_from_window = $(e).offset().top - _window_scrollTop;
//                if (_waveTop_from_window < (_win_height * 0.85)) {
//                    $(e).addClass("active");
//                }
//            });
//        }
//    }

//    __this.splitletters();

//    $(window).scroll(function () {
//        __this.show();
//    });

//    return {
//        Show: function () {
//            __this.show();
//        },
//        Activate: function () {
//            settings.IsLoadFinished = true;
//        }
//    }
//};
//$.fn.SwitchBox = function (options) {

//    var defaults = {
//        defaultSwitchIndex: "",
//        positionClass: "",
//        delay: 1,
//        animationDuration: 500,
//        swipe: false,
//        afterSlide: function (e) { },
//    };

//    var __this = this;
//    var settings = __this.options = $.extend({}, defaults, options);
//    var $this = $(this), $switchbtnbox = $this.children(".switchbtn_section").children("[data-switchbtnname]"), $switchcontentbox = $this.find(".switchcontent_section"), frameClass = "switchbox", _target_temp = null, _target_left_temp = 0;

//    __this.switchbtnbox_tempindex = 0;

//    if (settings.swipe) {
//        var $target_swipe = $this.swipeDetector();
//        $target_swipe.on("swipeLeft.sd", function () {
//            __this.switchbtnbox_tempindex += 1;
//            __this.moveContent();
//        }).on("swipeRight.sd", function () {
//            __this.switchbtnbox_tempindex -= 1;
//            __this.moveContent();
//        }).on("swipe.sd", function () {

//            if (_target_temp && _target_temp != null) {
//                _target_temp.parent().css({
//                    "-webkit-transform": "translate(" + ($target_swipe._swipe_OffsetX + _target_left_temp) + "px,0px)",
//                    "transform": "translate(" + ($target_swipe._swipe_OffsetX + _target_left_temp) + "px,0px)",
//                    "transition-duration": 0 + "s"
//                });
//            }
//        }).on("mouseup touchend", function () {
//            var x_pos = 0;

//            if (_target_temp && _target_temp != null) {
//                if ($target_swipe._swipe_OffsetX <= $target_swipe.options.swipeThreshold) {
//                    x_pos = _target_left_temp;
//                    _target_temp.parent().css({
//                        "-webkit-transform": "translate(" + (x_pos) + "px,0px)",
//                        "transform": "translate(" + (x_pos) + "px,0px)",
//                        "transition-duration": settings.animationDuration / 1000 + "s"
//                    }).delay(settings.animationDuration).promise().done(function (e) {
//                    });
//                }
//            }
//        });
//    }

//    $this.addClass(frameClass);

//    //moveContent
//    __this.moveContent = function () {

//        __this.switchbtnbox_tempindex = __this.switchbtnbox_tempindex > $switchbtnbox.length - 1 ? $switchbtnbox.length - 1 : __this.switchbtnbox_tempindex < 0 ? 0 : __this.switchbtnbox_tempindex;

//        var SwitchName = $switchbtnbox.eq(__this.switchbtnbox_tempindex).data("switchbtnname");
//        var _target = _target_temp = $($.grep($switchcontentbox.children(), function (e) { return $(e).data("switchcontentname") == SwitchName }));
//        var _targetbtn = $($.grep($switchbtnbox, function (e) { return $(e).data("switchbtnname") == SwitchName }));

//        $switchcontentbox.children("[data-switchcontentname]").removeClass("active");
//        $switchbtnbox.removeClass("active");

//        var boxheight = _target.children("div").height() + parseInt(_target.css("padding-top").replace(/px/g, "")) + parseInt(_target.css("padding-bottom").replace(/px/g, ""));
//        _target.parent().stop().animate({
//            "height": boxheight
//        }, 200);
//        _target.parent().css({
//            "-webkit-transform": "translate(" + (_target.position().left * -1) + "px,0px)",
//            "transform": "translate(" + (_target.position().left * -1) + "px,0px)",
//            "transition-duration": settings.animationDuration / 1000 + "s"
//        }).delay(settings.animationDuration).promise().done(function (e) {
//            settings.afterSlide(e);
//        });

//        _target_left_temp = _target.position().left * -1;

//        _target.addClass("active");
//        _targetbtn.addClass("active");
//    }

//    //initial active index
//    __this.init = function () {
//        var boxlength = $switchcontentbox.children("[data-switchcontentname]").length;
//        boxlength = boxlength <= 0 ? 1 : boxlength;
//        $switchcontentbox.css("width", 100 * boxlength + "%");


//        var index = settings.defaultSwitchIndex != "" ? defaultSwitchIndex : 0;
//        __this.switchbtnbox_tempindex = index;
//        __this.moveContent();
//    }

//    __this.init();

//    $switchbtnbox.on("click", function () {
//        var SwitchName = $(this).data("switchbtnname");
//        __this.switchbtnbox_tempindex = $(this).index();
//        __this.moveContent();
//    });

//    $(document).on("afterResized", function (event) {
//        __this.moveContent();
//    });

//    return {
//        moveto: function (index) {
//            __this.switchbtnbox_tempindex = index;
//            __this.moveContent();
//        },
//        reset: function () {
//            __this.init();
//        }
//    }

//};

//$.fn.Anchor = function (options) {

//    var defaults = {
//        delay: 1,
//        activeClass: "anchor_show",
//        setCurrentClass: false,
//        animationDuration: 1000,
//        onClick: function () { }
//    };

//    var __this = this;
//    var settings = __this.options = $.extend({}, defaults, options);
//    var $this = $(this), temptop = 0;

//    var $default = $($.grep($this, function (e) { return $(e).data("anchor-defaut") == true; }));
//    var hash = window.location.href.split('#')[1];

//    //getTarget
//    __this.getTarget = function (e) {
//        var __$this = e;
//        var id = __$this.data("anchor-id");
//        var $target = $("[data-anchor-targetid=" + id + "]");
//        return $target;
//    }

//    //moveToTarget
//    __this.moveToTarget = function ($target, noDuration) {
//        var d = noDuration ? 0 : settings.animationDuration;

//        var _offset_top = $target.offset().top;
//        window.location.hash = $target.data("anchor-targetid");
//        if ($target.length > 0)
//            $('html,body').stop().animate({ scrollTop: _offset_top }, d, 'easeOutQuart');
//    }

//    //add current Class
//    __this.setCurrentClass = function () {
//        var _scrollTop = $(window).scrollTop();
//        var $target = $($.grep($("[data-anchor-targetid]"), function (e) { return _scrollTop >= Math.floor($(e).offset().top) && _scrollTop < Math.floor(Math.floor($(e).offset().top) + $(e).outerHeight()) }));
//        var _$thisbtn = $("[data-anchor-id=" + $target.data("anchor-targetid") + "]")

//        if (!_$thisbtn.hasClass(settings.activeClass)) {
//            $("[data-anchor-id]").removeClass(settings.activeClass);
//            _$thisbtn.addClass(settings.activeClass);
//        }
//    }


//    $this.click(function (e) {
//        var __$this = $(this);
//        var $target = __this.getTarget(__$this);

//        settings.onClick(e, $this, $target);
//        __this.moveToTarget($target, false);
//    });

//    if (hash) {
//        var $target = $("[data-anchor-targetid=" + hash + "]");
//        __this.moveToTarget($target, true);
//    } else {
//        if ($default.length > 0) {
//            var $target = __this.getTarget($default);
//            __this.moveToTarget($target, true);
//        }
//    }


//    $(window).scroll(function (e) {
//        if (settings.setCurrentClass)
//            __this.setCurrentClass();
//    });

//    return {
//        moveto: function ($target, noDuration) {
//            __this.moveToTarget($target, noDuration);
//        }
//    }

//};


//$.fn.ContentFloat = function (options) {

//    var defaults = {
//        extraTop: 0,
//        stopContainer: "",
//        afterScroll: function () { }
//    };

//    var __this = this;
//    var settings = __this.options = $.extend({}, defaults, options);
//    var $this = $(this), tempTop = $this.offset().top;


//    //move
//    __this.move = function (e) {
//        var $OutBox = settings.stopContainer != "" ? $(settings.stopContainer) : $this.parent();

//        if ($(window).scrollTop() >= tempTop - settings.extraTop) {
//            var isStop = false;
//            if ($(window).scrollTop() + $this.outerHeight() + settings.extraTop >= $OutBox.offset().top + $OutBox.outerHeight()) {
//                isStop = true;
//            } else
//                isStop = false;

//            if (isStop)
//                return;

//            $this.css({
//                "-webkit-transform": "translate(0," + ($(window).scrollTop() - tempTop + settings.extraTop) + "px)",
//                "transform": "translate(0," + ($(window).scrollTop() - tempTop + settings.extraTop) + "px)",
//            });

//        } else {
//            $this.css({
//                "-webkit-transform": "",
//                "transform": "",
//            });
//            return;
//        }
//    }

//    $(window).scroll(function (e) {
//        __this.move(e);
//    });

//    return {

//    }

//};

var ShowMessage = function (options) {
    var defaults = {
        container: null,
        width: "auto",
        height: "auto",
        Fixed: false,
        Center: false,
        Top: "auto",
        Left: "auto",
        Right: "auto",
        Bottom: "auto",
        zIndex: null,
        zIndexCover:null,
        aw_Width: 10,
        aw_Height:10,
        aw_Top: "auto",
        aw_Left: "auto",
        aw_Right: "auto",
        aw_Bottom: "",
        class: "messagebox",
        customclass: [],
        autoHide: true,
        clicktoRemove: false,
        showDuration: 300,
        showDelay: 50,
        hideDuration: 300,
        hideDelay: 2000,
        initiativeHideDelay: 1,
        html: "",
        htmlClass: "innerbox",
        showCoverbg: false,
        CoverBgClass: "_messageCoverBg",
        CoverBgOpacity: 0.7,
        CoverBgColor: "#000000",
        showRemoveBtn: false,
        RemoveBtnClass: "removecross",
        showConfirmBtn: false,
        ConfirmBtnClass: "msg_btnconfirm",
        ConfirmBtnText: "confirm",
        Confirm_fn: function (e) { },
        otherButtons: [],
        showLoadingbar: false,
        LoadingbarClass: "msg_loadingbar",
        showarrow: false,
        arrowClass: "arrow",
        afterShow: function () { },
        afterRemove: function () { },
        elementFrom: null,//Which to activate msgbox
        distanceFromElement_h: 0,//horizontal distance from which activate msgbox
        distanceFromElement_v: 0,//vertical distance from which activate msgbox
        distanceArrow_h: 0,//horizontal distance for arrow
        distanceArrow_v: 0,//vertical distance for arrow
        direction: "righttop",
        directionArrow: "",//center / left / right
        directionAnimation: "bottom",
        removeAfterleave: false,
        removeAfterleave_action: "mouseleave"//mouseleave or focusout
    };
    var settings = this.options = $.extend({}, defaults, options);
    
    var __this = this;
    var $this = $(this), $body = $("body"), _$msgbox, _$CoverBg, hideTimeout;

    __this.show = function (__settings) {
        var html = "", classlist = [];

        clearTimeout(hideTimeout);

        //Get initial class and custom class
        classlist.push(__settings.class);
        for (var i = 0; i < __settings.customclass.length; i++) {
            classlist.push(__settings.customclass[i]);
        }

        //Get html msg
        var confimObj = $('<div>' + __settings.html + '</div>').addClass(__settings.htmlClass);

        //Create Msgbox
        if (__settings.container != null) {
            _$msgbox = $(__settings.container);
            _$msgbox.find("." + __settings.arrowClass).remove();
            _$msgbox.find("." + __settings.htmlClass).remove();           
        } else {
            _$msgbox = $('<div></div>');
        }
        _$msgbox.on("click", function (event) {
            event.stopPropagation();
        });

        //If removeAfterleave is true
        //Remove msgbox while leaving from (itself and elementFrom)
        if (__settings.removeAfterleave) {
            var ishover = false, timeout_msgleave;

            if (__settings.removeAfterleave_action == "mouseleave") {
                _$msgbox.on("mouseenter", function (event) {
                    ishover = true;
                }).on("mouseleave", function (event) {
                    clearTimeout(timeout_msgleave);
                    ishover = false;
                    leave();
                });
            }

            __settings.elementFrom.on(__settings.removeAfterleave_action, function (event) {

                clearTimeout(timeout_msgleave);
                ishover = false;
                leave();
            });

            var leave = function () {
                timeout_msgleave = setTimeout(function () {
                    if (!ishover) {
                        _$msgbox.remove();
                        __settings.afterRemove();
                    }
                }, 100);
            }
        }

        //Add arrow to msgbox edge
        var _$msgarrow;
        if (__settings.showarrow) {
            _$msgarrow = $('<div></div>').addClass(__settings.arrowClass);
            _$msgbox.append(_$msgarrow);
        }

        //Add Cover Bg
        if (__settings.showCoverbg) {
            var $inner = $('<div class="inner" style="opacity:' + __settings.CoverBgOpacity + ';background-color:' + __settings.CoverBgColor + '"></div>');
            _$CoverBg = $('<div></div>').addClass(__settings.CoverBgClass).append($inner);
            var CoverCss = {};
            if (__settings.zIndexCover != null) {
                CoverCss['z-index'] = __settings.zIndexCover;
            }
            _$CoverBg.css(CoverCss);
            if (__settings.clicktoRemove) {
                _$CoverBg.on("click", function () {
                    __this.hide(__settings);
                });
            }
            $body.append(_$CoverBg);
        }

        //Add remove button to msgbox
        if (__settings.showRemoveBtn) {
            var _$removebtn = $('<span id="fn-remove-btn"></span>');            
            confimObj[0].innerHTML += _$Loadingbar.prop("outerHTML");
            var tmpRemoveObj = confimObj.find("a[id=fn-remove-btn]");
            if (tmpRemoveObj != null) {
               
                tmpConfirmObj.on("click", function () {
                    __this.hide(__settings);
                });            
            }
            //var _$removebtn = $('<span></span>').on("click", function () {
            //    __this.hide(__settings);
            //});            
            //confimObj.append(_$removebtn.addClass(__settings.RemoveBtnClass));
        }

        //Add confirm buttons to msgbox
        if (__settings.otherButtons.length > 0) {
            var btns = [];
            for (var i = 0; i < __settings.otherButtons.length; i++) {

                var item = __settings.otherButtons[i];

                var tmpHTML = confimObj[0].innerHTML;
                var _$otherbtn = $('<a id="fn-' + i + '"></a>');
                confimObj[0].innerHTML += _$otherbtn.prop("outerHTML");
                var tmpObj = confimObj.find("a[id=fn-" + i + "]");               
                if (tmpObj != null) {
                    tmpObj.text(DOMPurify.sanitize(item.text)).on("click", function (e) {
                        var index_i = parseInt($(this).attr("id").replace("fn-",""));
                        __settings.otherButtons[index_i].callback_fn(e, __settings.otherButtons[index_i].parameter_fn);
                    });
                    for (var is = 0; is < item.class.length; is++) {
                        var element = item.class[is];
                        tmpObj.addClass(element)
                    }
                }
               
                //var _$otherbtn = $('<a></a>').data("index", i).text(DOMPurify.sanitize(item.text)  ).on("click", function (e) {
                //    var index_i = parseInt($(this).data("index"));
                //    __settings.otherButtons[index_i].callback_fn(e, __settings.otherButtons[index_i].parameter_fn);
                //});
                //for (var is = 0; is < item.class.length; is++) {
                //    var element = item.class[is];
                //    _$otherbtn.addClass(element)
                //}

                //btns.push(_$otherbtn);
            }
            //confimObj.append(btns);
        }

        //Add other button to msgbox
        if (__settings.showConfirmBtn) { 
            var _$confirmbtn = $('<a id="fn-confirm-btn"></a>');
            confimObj[0].innerHTML += _$confirmbtn.prop("outerHTML");
            var tmpConfirmObj = confimObj.find("a[id=fn-confirm-btn]");
            if (tmpConfirmObj != null) {
                tmpConfirmObj.text(__settings.ConfirmBtnText);
                tmpConfirmObj.on("click", function (e) {
                    __settings.Confirm_fn(e);
                });
            }
            //var _$confirmbtn = $('<a></a>').on("click", function (e) {
            //    __settings.Confirm_fn(e);
            //});

            //confimObj.append(_$confirmbtn.addClass(__settings.ConfirmBtnClass).text(DOMPurify.sanitize(__settings.ConfirmBtnText)));
        }


        if (__settings.showLoadingbar) {
            var _$Loadingbar = $('<div></div>').addClass(__settings.LoadingbarClass);
            confimObj[0].innerHTML += _$Loadingbar.prop("outerHTML");
            //_html.append(_$Loadingbar);
        }

        //Add html msg to msgbox
        _$msgbox.append(confimObj);

        //Set msgbox class
        for (var ix = 0; ix < classlist.length; ix++) {
            var element = classlist[ix];
            _$msgbox.addClass(element)
        }
        _$msgbox.attr("data-direction", __settings.direction).attr("data-directionanimation", __settings.directionAnimation);

        //Set msgbox size
        _$msgbox.css({
            "width": __settings.width,
            "height": __settings.height,
            "transition-duration": (__settings.showDuration / 1000) + "s"
        });

        //Set CoverBg transition-duration
        if (__settings.showCoverbg) {
            _$CoverBg.css({
                "transition-duration": (__settings.showDuration / 1000) + "s"
            });
        }

        //Add msgbox to body
        $body.append(_$msgbox);


        var msgWidth = _$msgbox.outerWidth(),
            msgHeight = _$msgbox.outerHeight();


        var type = 0;

        if (__settings.elementFrom) {
            var msg_halfwidth = (msgWidth / 2), elementFrom_halfwidth = (__settings.elementFrom.outerWidth() / 2);
            var msg_halfheight = (_$msgbox.outerHeight() / 2), elementFrom_halfheight = (__settings.elementFrom.outerHeight() / 2);

            //Set position (12 positions)
            switch (__settings.direction) {
                case "topleft":
                    __settings.Top = "auto";
                    __settings.Bottom = $("html").height() - (__settings.elementFrom.offset().top - __settings.distanceFromElement_v);
                    __settings.Left = __settings.elementFrom.offset().left + __settings.distanceFromElement_h;
                    if (__settings.showarrow) {
                        __settings.aw_Left = (__settings.elementFrom.outerWidth() / 2) - (__settings.aw_Width / 2);
                        __settings.aw_Right = "auto";

                    }

                    break;
                case "topcenter":
                    __settings.Top = "auto";
                    __settings.Bottom = $("html").height() - (__settings.elementFrom.offset().top - __settings.distanceFromElement_v);
                    __settings.Left = __settings.elementFrom.offset().left - msg_halfwidth + elementFrom_halfwidth + __settings.distanceFromElement_h;
                    if (__settings.showarrow) {
                        __settings.aw_Left = (msgWidth / 2) - (__settings.aw_Width / 2);
                        __settings.aw_Right = "auto";

                    }
                    break;
                case "topright":
                    __settings.Top = "auto";
                    __settings.Bottom = $("html").height() - (__settings.elementFrom.offset().top - __settings.distanceFromElement_v);
                    __settings.Left = "auto";
                    __settings.Right = $(window).width() - (__settings.elementFrom.offset().left + __settings.elementFrom.outerWidth()) + __settings.distanceFromElement_h;
                    if (__settings.showarrow) {
                        __settings.aw_Left = "auto";
                        __settings.aw_Right = (__settings.elementFrom.outerWidth() / 2) - (__settings.aw_Width / 2);

                    }
                    break;

                case "righttop":
                    //if (__settings.Left + msgWidth > $(window).width()) {
                    //    __settings.Left = "auto";
                    //    __settings.Right = $(window).width() - (__settings.elementFrom.offset().left - __settings.distanceFromElement_h);
                    //} else {
                    //    __settings.Left = __settings.Left + __settings.distanceFromElement_h;
                    //}
                    __settings.Left = __settings.elementFrom.offset().left + __settings.elementFrom.outerWidth() + __settings.distanceFromElement_h;
                    __settings.Right = "auto";
                    __settings.Bottom = "auto";
                    __settings.Top = __settings.elementFrom.offset().top + __settings.distanceFromElement_v;
                    if (__settings.showarrow) {
                        __settings.aw_Top = (__settings.elementFrom.outerHeight() / 2) - (__settings.aw_Height / 2);
                        __settings.aw_Bottom = "auto";

                    }
                    type = 1;
                    break;
                case "rightcenter":
                    __settings.Left = __settings.elementFrom.offset().left + __settings.elementFrom.outerWidth() + __settings.distanceFromElement_h;
                    __settings.Right = "auto";
                    __settings.Bottom = "auto";
                    __settings.Top = __settings.elementFrom.offset().top - msg_halfheight + elementFrom_halfheight + __settings.distanceFromElement_v;
                    if (__settings.showarrow) {
                        __settings.aw_Top = msg_halfheight - (__settings.aw_Height / 2);
                        __settings.aw_Bottom = "auto";
                    }
                    type = 1;
                    break;
                case "rightbottom":
                    __settings.Left = __settings.elementFrom.offset().left + __settings.elementFrom.outerWidth() + __settings.distanceFromElement_h;
                    __settings.Right = "auto";
                    __settings.Bottom = $("html").height() - (__settings.elementFrom.offset().top + __settings.elementFrom.outerHeight() - __settings.distanceFromElement_v);
                    __settings.Top = "auto";
                    if (__settings.showarrow) {
                        __settings.aw_Top = "auto";
                        __settings.aw_Bottom = (__settings.elementFrom.outerHeight() / 2) - (__settings.aw_Height / 2);

                    }
                    type = 1;
                    break;

                case "bottomleft":
                    __settings.Top = __settings.elementFrom.offset().top + __settings.elementFrom.outerHeight() + __settings.distanceFromElement_v;
                    __settings.Bottom = "auto";
                    __settings.Left = __settings.elementFrom.offset().left + __settings.distanceFromElement_h;
                    if (__settings.showarrow) {

                        __settings.aw_Left = (__settings.elementFrom.outerWidth() / 2) - (__settings.aw_Width / 2);
                        __settings.aw_Right = "auto";

                    }
                    break;
                case "bottomcenter":
                    __settings.Top = __settings.elementFrom.offset().top + __settings.elementFrom.outerHeight() + __settings.distanceFromElement_v;
                    __settings.Bottom = "auto";
                    __settings.Left = __settings.elementFrom.offset().left - msg_halfwidth + elementFrom_halfwidth + __settings.distanceFromElement_h;

                    if (__settings.showarrow) {
                        
                        __settings.aw_Left = (msgWidth / 2) - (__settings.aw_Width / 2);
                        __settings.aw_Right = "auto";
                    
                    }
                    break;
                case "bottomright":
                    __settings.Top = __settings.elementFrom.offset().top + __settings.elementFrom.outerHeight() + __settings.distanceFromElement_v;
                    __settings.Bottom = "auto";
                    __settings.Left = "auto";
                    __settings.Right = $(window).width() - (__settings.elementFrom.offset().left + __settings.elementFrom.outerWidth()) + __settings.distanceFromElement_h;
                    if (__settings.showarrow) {

                        __settings.aw_Left = "auto";
                        __settings.aw_Right = (__settings.elementFrom.outerWidth() / 2) - (__settings.aw_Width / 2);
                    }
                    break;


                case "lefttop":
                    //if (msgWidth > (__settings.elementFrom.offset().left - __settings.distanceFromElement_h)) {
                    //    __settings.Left = __settings.elementFrom.offset().left + __settings.elementFrom.outerWidth() + __settings.distanceFromElement_h;
                    //    __settings.Right = "auto";
                    //} else {
                    //    __settings.Right = $(window).width() - (__settings.elementFrom.offset().left - __settings.distanceFromElement_h);

                    //}

                    __settings.Left = "auto";
                    __settings.Right = $(window).width() - __settings.elementFrom.offset().left - __settings.distanceFromElement_h;
                    __settings.Bottom = "auto";
                    __settings.Top = __settings.elementFrom.offset().top + __settings.distanceFromElement_v;
                    if (__settings.showarrow) {
                        __settings.aw_Top = (__settings.elementFrom.outerHeight() / 2) - (__settings.aw_Height / 2);
                        __settings.aw_Bottom = "auto";
                    }
                    type = 1;
                    break;

                case "leftcenter":
                    __settings.Left = "auto";
                    __settings.Right = $(window).width() - __settings.elementFrom.offset().left - __settings.distanceFromElement_h;
                    __settings.Bottom = "auto";
                    __settings.Top = __settings.elementFrom.offset().top - msg_halfheight + elementFrom_halfheight + __settings.distanceFromElement_v;
                    if (__settings.showarrow) {
                        __settings.aw_Top = msg_halfheight - (__settings.aw_Height / 2);
                        __settings.aw_Bottom = "auto";

                    }
                    type = 1;
                    break;

                case "leftbottom":
                    __settings.Left = "auto";
                    __settings.Right = $(window).width() - __settings.elementFrom.offset().left - __settings.distanceFromElement_h;
                    __settings.Bottom = $("html").height() - (__settings.elementFrom.offset().top + __settings.elementFrom.outerHeight() - __settings.distanceFromElement_v);
                    __settings.Top = "auto";
                    if (__settings.showarrow) {
                        __settings.aw_Top = "auto";
                        __settings.aw_Bottom = (__settings.elementFrom.outerHeight() / 2) - (__settings.aw_Height / 2);

                    }
                    type = 1;
                    break;
                default:
            }
        }

        if (__settings.directionArrow != "") {
            __settings.aw_Top = "";
            __settings.aw_Bottom = "";
            switch (__settings.directionArrow) {
                case "center":
                    __settings.aw_Left = (__settings.elementFrom.outerWidth() / 2) - (__settings.aw_Width / 2);
                    __settings.aw_Right = "auto";
                    break;
                case "right":
                    __settings.aw_Left = "auto";
                    __settings.aw_Right = 0;
                    break;
                case "left":
                    __settings.aw_Left = 0;
                    __settings.aw_Right = "auto";
                    break;
                default:
            }
        }

        if (__settings.showarrow) {
  
            _$msgarrow.css({
                "top": __settings.aw_Top,
                "left": __settings.aw_Left + __settings.distanceArrow_h,
                "right": __settings.aw_Right,
                "bottom": __settings.aw_Bottom
            });
        }

        if ((__settings.Left + _$msgbox.outerWidth()) > $(window).width()) {
            __settings.Left = "auto";
            __settings.Right = 0;

            if (type == 1)
                __settings.Top = __settings.Top + __settings.elementFrom.outerHeight() + 10;

        }

        if ((__settings.Right + _$msgbox.outerWidth()) > $(window).width()) {
            __settings.Right = "auto";
            __settings.Left = 0;
        }

        if (__settings.Center) {
            var scr_top = $(window).scrollTop();
            if (__settings.Fixed) {
                scr_top = 0;
                __settings.Top = scr_top + ($(window).height() / 2) - (_$msgbox.outerHeight() / 2);
            }
            else {
                if ((($(window).height() / 2) - (_$msgbox.outerHeight() / 2)) < 0) {
                    __settings.Top = scr_top;
                } else
                    __settings.Top = scr_top + ($(window).height() / 2) - (_$msgbox.outerHeight() / 2);
            }
            
            __settings.Left = ($(window).width() / 2) - (_$msgbox.outerWidth() / 2);

        }

        var msgboxCss = {
            "top": __settings.Top,
            "left": __settings.Left,
            "right": __settings.Right,
            "bottom": __settings.Bottom,
            "position": __settings.Fixed ? "fixed" : "absolute"
        };
        if (__settings.zIndex != null) {
            msgboxCss['z-index'] = __settings.zIndex;
        }
        _$msgbox.css(msgboxCss);

        //create countdown      
        var $countdown = _$msgbox.find(".countdown");
        if ($countdown.length > 0) {
            settings.countdown = function cdn() {
                if (settings.time > 0) {
                    setTimeout(function () {
                        settings.time -= 1;
                        $countdown.text(settings.time);
                        cdn();
                    }, 1000);
                }
            };
            settings.time = parseInt($countdown.data("countdowntime"));
            $countdown.text(settings.time);
            settings.countdown();
        }


        //Show
        if (_$msgbox.length > 0) {
            
            setTimeout(function () {
                if (__settings.showCoverbg) {
                    _$CoverBg.addClass("show");
                }
                _$msgbox.addClass("show").delay(__settings.showDuration).promise().done(function () {
                    
                    if (__settings.showCoverbg) {
                        _$CoverBg.css({
                            "transition-duration": (__settings.hideDuration / 1000) + "s"
                        });
                    }

                    __settings.afterShow();
                    $(this).css({
                        "transition-duration": (__settings.hideDuration / 1000) + "s"
                    }).delay(__settings.hideDelay).promise().done(function () {

                        //If autoHide is true
                        if (__settings.autoHide) {
                            if (__settings.showCoverbg) {
                                _$CoverBg.addClass("hide").delay(__settings.hideDuration).promise().done(function () {

                                    $(this).remove();
                                });
                            }
                            $(this).addClass("hide").delay(__settings.hideDuration).promise().done(function () {

                                $(this).remove();
                                __settings.afterRemove();
                            });
                        }
                    });
                    
                });
            }, __settings.showDelay);

        }
    }

    __this.hide = function (__settings2) {
        hideTimeout = setTimeout(function () {
            if (_$CoverBg && _$CoverBg.length > 0) {
                _$CoverBg.addClass("hide")
                setTimeout(function () { _$CoverBg.remove(); }, __settings2.hideDuration);
            }
            if (_$msgbox && _$msgbox.length > 0) {
                _$msgbox.addClass("hide");
                setTimeout(function () {
                    if (__settings2.container == null)
                        _$msgbox.remove();
                    else {
                        _$msgbox = $(__settings2.container);
                        _$msgbox.removeClass("hide").removeClass("show");
                    }

                    __settings2.afterRemove();
                }, __settings2.hideDuration);
            }
        }, __settings2.initiativeHideDelay);

    }


    return {
        Show: function (_options) {
            settings = $.extend({}, defaults, _options);
            __this.show(settings);
        },
        Hide: function (_options) {
            settings = $.extend({}, defaults, _options);

            __this.hide(settings);
        }
    }
};

var ProccessMsg;
function showProccessMsg(_ops, _showConfirmBtn, _DoAfterRemove, _OtherButtons) {
    var _msg = new ShowMessage();

    var options = _ops;
    if (_showConfirmBtn) {
        options.showConfirmBtn = _showConfirmBtn.isShow;
        options.ConfirmBtnText = _showConfirmBtn.text;
        options.Confirm_fn = function () {
            _showConfirmBtn.callback_fn();
        };
    }

    if (_OtherButtons) {
        options.otherButtons = _OtherButtons;
    }

    if (_DoAfterRemove) {
        options.hideDelay = _DoAfterRemove.hideDelay;
        options.afterRemove = function () {
            _DoAfterRemove.callback_fn();
        };
    }

    _msg.Show(options);

    return _msg;
}


var ImgLazy = function () {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    var active = false;
    var _this = this, offset = 300;

    _this.ReGetImg = function () {
        lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    }

    _this.lazyLoad = function () {
        if (active === false) {
            active = true;

            setTimeout(function () {

                lazyImages.forEach(function (lazyImage) {
                    if ((lazyImage.getBoundingClientRect().top + offset <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                        lazyImage.onload = function () {
                            var _this = this;
                            _this.parentElement.classList.add("imgloaded");
                            setTimeout(function () { _this.parentElement.classList.add("imgloadedend"); }, 500);
                        }
                        lazyImage.onerror = function () {
                            //display error
                            var _this = this;
                            _this.parentElement.classList.add("imgloaded", "imgloadederror");
                            setTimeout(function () { _this.parentElement.classList.add("imgloadedend"); }, 500);
                        };
                        lazyImage.src = lazyImage.dataset.src;
                        //lazyImage.srcset = lazyImage.dataset.srcset;
                        lazyImage.classList.remove("lazy");

                        lazyImages = lazyImages.filter(function (image) {
                            return image !== lazyImage;
                        });
                        if (lazyImages.length === 0) {
                            _this.removeHandler();
                        }
                    }
                });

                active = false;
            }, 200);
        }
    };


    _this.addHandler = function () {
        document.addEventListener("scroll", _this.lazyLoad);
        window.addEventListener("resize", _this.lazyLoad);
        window.addEventListener("orientationchange", _this.lazyLoad);
    }

    _this.removeHandler = function () {
        document.removeEventListener("scroll", _this.lazyLoad);
        window.removeEventListener("resize", _this.lazyLoad);
        window.removeEventListener("orientationchange", _this.lazyLoad);
    }
    _this.addHandler();


    return {
        init: function () {
            _this.ReGetImg();
            _this.lazyLoad();
            _this.addHandler();
        }
    }
}
var FileData = function () {
    var __this = this;
    __this.data = [];

    __this.getFileData = function () {
        return __this.data;
    }
    __this.setFileData = function (data) {
        __this.data = data;
    }
    __this.clearFileData = function () {
        __this.data = [];
    }
    return {
        getData: function () {
            return __this.getFileData();
        },
        setData: function (data) {
            __this.setFileData(data);
        },
        clearData: function () {
            __this.clearFileData();
        }
    }
};

function hamburgerSwitch() {
    var _this = this, $header = $("header"), $body = $("body"), classname_burgerActive = "hamburger-is-active", classname_overflowHidden = "hamburger-is-active";

    _this.Open = function () {
        $body.addClass(classname_burgerActive).addClass(classname_overflowHidden);
    };
    _this.Close = function () {
        $body.removeClass(classname_burgerActive).removeClass(classname_overflowHidden);
    }
    _this.Switch = function () {
        if (!$body.hasClass(classname_burgerActive)) {
            _this.Open();
            return true;
        }
        else {
            _this.Close();
            return false;
        }
    };

    return {
        switch: function () {
            return _this.Switch();
        },
        open: function () {
            _this.Open();
        },
        close: function () {
            _this.Close();
        },
    }
}
function PdfDownload(url, filename) {
    ProccessMsg = showProccessMsg("下載中，請稍候", false, true, true);

    var URL = window.URL || window.webkitURL;
    var saveAs = function (content, filename) {

        var blob = new Blob([content], { type: 'application/pdf' });

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            var link = document.createElement('a');
            link.download = filename;
            link.href = URL.createObjectURL(blob);
            link.click();
            URL.revokeObjectURL(blob);
        }
    }
    var oReq = new XMLHttpRequest();
    // The Endpoint of your server 
    var URLToPDF = url;
    // Configure XMLHttpRequest
    oReq.open("GET", URLToPDF, true);
    // Important to use the blob response type
    oReq.responseType = "blob";
    // When the file request finishes
    // Is up to you, the configuration for error events etc.
    oReq.onload = function () {
        // Once the file is downloaded, open a new window with the PDF
        // Remember to allow the POP-UPS in your browser
        // Generate file download directly in the browser !
        saveAs(oReq.response, filename);
        ProccessMsg.Hide();
    };
    oReq.send();
}


//#region MergeFn
function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object'

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}
function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}
function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}
function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice()
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument)
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument)
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument))
        }
    })
    return destination
}
function mergeObject(target, source, optionsArgument) {
    var destination = {}
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument)
        })
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument)
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument)
        }
    })
    return destination
}
function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge }
    var arrayMerge = options.arrayMerge || defaultArrayMerge

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}
deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function (prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
}
//#endregion MergeFn

var resizeTimer, scrollTimer;
window.addEventListener('resize', function () {

    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        $(document).trigger("afterResized");
        // Run code here, resizing has "stopped"
    }, 500);

});

var W_position_pagescroll = $(window).scrollTop();
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();


    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
        $(document).trigger("afterScrolled");
        // Run code here, resizing has "stopped"

    }, 10);


    if (scroll > W_position_pagescroll) {
        //scrollDown
        $(document).trigger("PageScrollDown");

    } else {
        //scrollUp
        $(document).trigger("PageScrollUp");

    }
    W_position_pagescroll = scroll;
});


