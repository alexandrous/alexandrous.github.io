$(document).ready(function(){
	$('.slide_flat').slick({
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: false,
		centerMode: false,
		// centerPadding: '0px',
		dots: true
	});
	$('.slider_bank').slick({
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: true,
		centerMode: false,
		// centerPadding: '0px',
		dots: false
	});
	$('.clider_otdelka').slick({
		// autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		arrows: false,
		centerMode: false,
		// centerPadding: '0px',
		dots: true
	});
	$('.clider_gallery1').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 3,
		arrows: true,
		centerMode: false,
		// centerPadding: '505px',
		// centerPadding: '0px',
		dots: false
	});
	

	$("a.fancybox").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	2000, // скорость открытия
		'speedOut'		:	2000, // затухание
		'overlayShow'	:	true, // затемнение страницы
		'hideOnContentClick':	true,
		'overlayOpacity':	0.9,
		'showNavArrows':	true,
		'showCloseButton':	true

	});
	
});
$("body").on("click", "a.scroll_down_a", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 1000);
    return false;
	});
$("body").on("click", "a.botton_blue, a.botton_green_call, a.botton_green_price", function(){
    var idtop = $($(this).attr("href")).offset().top;
    $('html,body').animate({scrollTop: idtop}, 1000);
    return false;
	});
