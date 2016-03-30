(function () {
  var loadCSS = require('./lib/loadCSS');
  var onScroll = require('./lib/onScroll');

  document.addEventListener('DOMContentLoaded', onDOMLoad);

  var headerElem = document.querySelector('.header');
  headerElem.addEventListener('scroll', onScroll);


  function onDOMLoad() {
    var btnMenu = document.getElementById('btnMenu');
    var navbarMenu = document.getElementById('navbarMenu');
    var divtext = document.getElementById('divtext');
    var hide = document.getElementById('hide');

    btnMenu.addEventListener('click', onClickMenu);
    divtext.addEventListener('click', onClickSect);

    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css');
    loadCSS('https://fonts.googleapis.com/css?family=Muli|Roboto');

    function onClickMenu() {
      navbarMenu.classList.toggle('header-menu-list--show');
    }

    function onClickSect(){
      hide.classList.toggle('sectTwo-hide--show')
    }

  }

}());
