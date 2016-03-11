

document.addEventListener('DOMContentLoaded', onDomLoad);

function onDomLoad (){	
	var btnMenu = document.getElementById('btnMenu');
	var navbarMenu = document.getElementById('navbarMenu');

	btnMenu.addEventListener('click', onClickMenu);

	loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');


	function onClickMenu(){
		navbarMenu.classList.toggle('header-menu-list--show');

	};

	function loadCss (url){
		var elem = document.createElement('link');
		elem.rel = 'stylesheet';
		elem.href = url;
		document.head.appendChild(elem);
	};
	
};