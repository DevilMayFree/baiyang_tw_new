setTimeout(function(){
    AOS.init();
}, 1000);

function myFunction(x) {
    x.classList.toggle("change");
}

$(function(){
    $("header .menu>li>a").on("click", function(){
        $("header .change").removeClass("change");
    });

    /*$(".menu a[href^='#s']").on("click", function(){
        var id = $(this).attr("href");
        var t = $("header").height()*-1;
        $(window).scrollTo(id, 600, {offset:{
            top: t
        }});
        return false;
    });*/

    $("a[href='#top']").on("click", function(){
        $(window).scrollTo(0, 800);
        return false;
    });

    $('.section2 .slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false
    });

    $('.section3 .slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: false,
        responsive: [
        {
            breakpoint: 997.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $("header .menu").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 600,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: 'swing'
    });

        $("#section2 a[href^='#s']").on("click", function(){
            var id = $(this).attr("href");
            var t = $("header").height()*-1;
            $(window).scrollTo(id, 600);
            return false;
        });
   
});
