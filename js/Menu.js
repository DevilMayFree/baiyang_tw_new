(function () {
    var animenuToggle = document.querySelector('.animenu__toggle'),
        animenuNav = document.querySelector('.animenu__nav'),
        animenuOpenLi = $(".animenu__nav.animenu__nav--open > li"),
        hasClass = function (elem, className) {
            return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
        },
        toggleClass = function (elem, className) {
            var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

            var $CoverBlack = $(".CoverBlack");

            if (hasClass(elem, className)) {
                while (newClass.indexOf(' ' + className + ' ') >= 0) {
                    newClass = newClass.replace(' ' + className + ' ', ' ');
                }
                elem.className = newClass.replace(/^\s+|\s+$/g, '');

                $CoverBlack.remove();
                $(elem).next().hide();
            } else {
                elem.className += ' ' + className;


                if ($CoverBlack.length <= 0) {
                    $("body").append("<div class='CoverBlack'></div>");
                    var $CoverBlack_new = $(".CoverBlack");
                    $CoverBlack_new.fadeIn({ queue: false, duration: 170 });

                    $(elem).next().fadeIn({ queue: false, duration: 170 });
                }

            }
        },
        animenuToggleNav = function () {
            toggleClass(animenuToggle, "animenu__toggle--active");
            toggleClass(animenuNav, "animenu__nav--open");
        }

    if (!animenuToggle.addEventListener) {
        animenuToggle.attachEvent("onclick", animenuToggleNav);
    }
    else {
        animenuToggle.addEventListener('click', animenuToggleNav);
    }

    $(".animenu__nav > li").click(function () {
        if (GetWindowWidth() <= 768) {
            $(this).find(".animenu__nav__child").stop().slideToggle(200);
        }

    });
})()