!function e(t,o,n){function r(i,s){if(!o[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(l)return l(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var a=o[i]={exports:{}};t[i][0].call(a.exports,function(e){var o=t[i][1][e];return r(o?o:e)},a,a.exports,e,t,o,n)}return o[i].exports}for(var l="function"==typeof require&&require,i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,o){function n(e,t){var o=$.extend({},$.fn.offsetScroller.defaults,t);if(e&&"#"===e[0]){var n;try{n=$(e)}catch(r){console.log("offsetScroller could not scroll to: '"+e+"'")}var l=n&&n.offset();if(l)return $("html, body").animate({scrollTop:l.top-o.offsetPixels},o.animationSpeed),!0}return!1}function r(e){history.pushState&&"file:"!==window.location.protocol&&history.pushState(null,null,e)}function l(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var t=$(this).attr("href");if(t&&"#"===t[0]){var o=e.data;e.preventDefault(),r(t),n(t,o)}}}$.fn.offsetScroller=function(e){return this.each(function(){$(this).bind("click",e,l)})},$.fn.offsetScroller.defaults={offsetPixels:0,animationSpeed:500},$.fn.offsetScroller.scrollToHash=n,t.exports=n},{}],2:[function(e,t,o){var n=function(e){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)};t.exports=n},{}],3:[function(e,t,o){var n=function(){window.scrollY>=200?headerElem.classList.toggle(".header--light"):headerElem.classList.toggle(".header--light")};t.exports=n},{}],4:[function(e,t,o){!function(){function t(){function e(){l.classList.toggle("header-menu-list--show")}function t(){s.classList.toggle("sectTwo-hide--show")}function n(){f.classList.toggle("sectTwo-hidetwo--show")}var r=document.getElementById("btnMenu"),l=document.getElementById("navbarMenu"),i=document.getElementById("divOne"),s=document.getElementById("hide"),c=document.getElementById("divTwo"),f=document.getElementById("hidetwo");r.addEventListener("click",e),i.addEventListener("click",t),c.addEventListener("click",n),o("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"),o("https://fonts.googleapis.com/css?family=Muli|Roboto"),$("#navbarMenu a").offsetScroller({offsetPixels:182}),$(".box a").offsetScroller({animationSpeed:2e3}),$().offsetScroller.scrollToHash(window.location.hash,{offsetPixels:92})}var o=e("./lib/loadCSS"),n=e("./lib/onScroll");e("./lib/jquery-offset-scroller");document.addEventListener("DOMContentLoaded",t);var r=document.querySelector(".header");r.addEventListener("scroll",n)}()},{"./lib/jquery-offset-scroller":1,"./lib/loadCSS":2,"./lib/onScroll":3}]},{},[4]);