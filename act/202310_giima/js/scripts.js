!function n(i,a,r){function s(e,t){if(!a[e]){if(!i[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(l)return l(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}o=a[e]={exports:{}},i[e][0].call(o.exports,function(t){return s(i[e][1][t]||t)},o,o.exports,n,i,a,r)}return a[e].exports}for(var l="function"==typeof require&&require,t=0;t<r.length;t++)s(r[t]);return s}({1:[function(t,e,o){function i(t){var n,i=$("body, html"),a=$("nav");$(t).each(function(){var o=$(this);o.on("click",function(t){var e;t.preventDefault(),o.attr("role")||(t=$(this).attr("href"),e=$(t),$iconHeight=$(".product-title .icon").height(),n=(e.length?e.offset().top:0)-a.height(),e.is(':not(":first-child")')&&(n-=$iconHeight/2),console.log("_href",t),"#kv"===t&&(console.log("hi"),history.pushState("",document.title,window.location.pathname+window.location.search)),i.animate({scrollTop:n}))})})}$(function(){$("body, html");var t=$(".hud--gototop"),e=$(".preload"),o=$(window),o=(t.hide(),o.on("scroll",function(){$(window).scrollTop()<window.innerHeight?t.length&&t.hide():t.length&&t.show()}),$(window).load(function(){e.fadeOut(),AOS.init({duration:1e3})}),i('a[href^="#"]'),i("#gototop"),!function(){function t(t,e){if(document.querySelectorAll)e=document.querySelectorAll(t);else{var o=document,n=o.styleSheets[0]||o.createStyleSheet();n.addRule(t,"f:b");for(var i=o.all,a=0,r=[],s=i.length;a<s;a++)i[a].currentStyle.f&&r.push(i[a]);n.removeRule(0),e=r}return e}function e(t,e){o.addEventListener?this.addEventListener(t,e,!1):o.attachEvent?this.attachEvent("on"+t,e):this["on"+t]=e}var o=this;function n(t,e){var o=new Image,n=t.getAttribute("data-src");o.onload=function(){t.parent?t.parent.replaceChild(o,t):t.src=n,e&&e()},n&&(o.src=n)}function i(t){t=t.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.top<=2*(o.innerHeight||document.documentElement.clientHeight)}function a(){for(var t=0;t<r.length;t++)i(r[t])&&n(r[t],function(){r.splice(t,t)})}for(var r=new Array,s=t("img"),l=0;l<s.length;l++)r.push(s[l]);a(),e("scroll",a)}(),$(".navbar-toggler-icon.is-open").hide(),$(".navbar-collapse").on("shown.bs.collapse",function(){$(this).parent().find("> .navbar-social").addClass("is-hide"),$(".navbar-toggler-icon.is-collapse").hide(),$(".navbar-toggler-icon.is-open").show()}),$(".navbar-collapse").on("hidden.bs.collapse",function(){$(this).parent().find("> .navbar-social").removeClass("is-hide"),$(".navbar-toggler-icon.is-collapse").show(),$(".navbar-toggler-icon.is-open").hide()}),[]),n=(navigator.userAgent.match(/(iPad|iPhone|iPod)/i)&&o.push("device-ios"),navigator.userAgent.match(/android/i)&&o.push("device-android"),navigator.userAgent.match(/Firefox/i)&&o.push("device-firefox"),navigator.userAgent.match(/Edg/i)&&o.push("device-edge"),navigator.userAgent.match(/Chrome/i)&&o.push("device-chrome"),document.getElementsByTagName("html")[0]);o.length&&o.push("on-device"),n.classList&&n.classList.add.apply(n.classList,o),$('.navbar a[href^="#"]:not(".dropdown-toggle")').on("click",function(){window.location.hash=$(this).attr("href"),$(window).width()<992&&$(".navbar-toggler").click()}),(n=document.querySelector(".navbar-collapse"))&&new MutationObserver(function(t,e){t.forEach(function(t){"attributes"===t.type&&"class"===t.attributeName&&(t=$(t.target).hasClass("show"),$(window).width()<992)&&(t?$("body").addClass("nav--open"):$("body").removeClass("nav--open"))})}).observe(n,{attributes:!0}),$(".owl-carousel").each(function(){const s=$(this),{colorArrow:t="#16365C",colorSwitcher:l,...e}=s.data("options");if(s.owlCarousel({...e,navText:[`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.02 95.07"><rect x=".75" y=".75" width="38.52" height="93.57" transform="translate(40.02 95.07) rotate(180)" style="fill: #fff;"/><rect x=".75" y=".75" width="38.52" height="93.57" transform="translate(40.02 95.07) rotate(180)" style="fill: none; stroke: ${t}; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/><polygon points="26.53 30.34 9.34 47.53 26.53 64.72 17.93 47.53 26.53 30.34" style="fill: ${t};"/></svg>`,`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.02 95.07"><rect x=".75" y=".75" width="38.52" height="93.57" style="fill: #fff;"/><rect x=".75" y=".75" width="38.52" height="93.57" style="fill: none; stroke: ${t}; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/><polygon points="13.49 64.72 30.68 47.53 13.49 30.34 22.09 47.53 13.49 64.72" style="fill: ${t};"/></svg>`]}),s.on({"changed.owl.carousel":r=>{setTimeout(function(){var t=$(l).find(".section-tabs-item"),e=t.eq(r.page.index),o=s.find(".owl-item");const n=s.find(".owl-item.active").eq(1).prevObject;var i=o.find(".section-carousel-video iframe"),a=n.find(".section-carousel-video iframe"),o=(o.find(".aos-init").addClass("invisible").removeClass("aos-animate"),setTimeout(()=>{n.find(".aos-init").removeClass("invisible").addClass("aos-animate")},500),t.removeClass("active"),e.addClass("active"),i&&a&&(i.each(function(){$(this).attr("src","")}),a.attr("src",a.attr("data-src"))),$("body, html")),t=$(l).height()/2,e=$(l).offset().top-$(".navbar").height()-t;o.animate({scrollTop:e})},10)}}),l){const n=$(l).children();n.addClass("clickable").on("click",function(t){var e=n.index(this),o=s.find("img");s.trigger("to.owl.carousel",e),s.trigger("stop.owl.autoplay"),o.each(function(){$(this).attr("src")||$(this).attr("src",$(this).data("src"))})})}});{let t=$(".navbar").height(),e=location.hash;e&&setTimeout(()=>{window.scrollTo({top:$(e).offset().top-t,behavior:"instant"})},1e3)}})},{}]},{},[1]);
//# sourceMappingURL=scripts.js.map
