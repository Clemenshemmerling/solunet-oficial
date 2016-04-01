(function () {
  var loadCSS = require('./lib/loadCSS');
  var onScroll = require('./lib/onScroll');
  var scrollToHash = require('./lib/jquery-offset-scroller');

  document.addEventListener('DOMContentLoaded', onDOMLoad);

  var headerElem = document.querySelector('.header');
  headerElem.addEventListener('scroll', onScroll);


  function onDOMLoad() {
    var btnMenu = document.getElementById('btnMenu');
    var navbarMenu = document.getElementById('navbarMenu');
    var divOne = document.getElementById('divOne');
    var hide = document.getElementById('hide');
    var divTwo = document.getElementById('divTwo');
    var hidetwo = document.getElementById('hidetwo');

    btnMenu.addEventListener('click', onClickMenu);
    divOne.addEventListener('click', onClickSect);
    divTwo.addEventListener('click', onClickSectwo)

    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');
    loadCSS('https://fonts.googleapis.com/css?family=Muli|Roboto');

    function onClickMenu() {
      navbarMenu.classList.toggle('header-menu-list--show');
    }

    function onClickSect(){
      hide.classList.toggle('sectTwo-hide--show');
    }

    function onClickSectwo(){
      hidetwo.classList.toggle('sectTwo-hidetwo--show');
    }

    $('#logo a').offsetScroller({offsetPixels: 182});
    $('#navbarMenu a').offsetScroller({offsetPixels: 182});
     $('.box a').offsetScroller({animationSpeed: 2000});
     // to enable for all anchor links...
     //$('a[href*=#]:not([href=#])').offsetScroller({offsetPixels:92});
     $().offsetScroller.scrollToHash(window.location.hash, {offsetPixels: 92});

  }

}());


