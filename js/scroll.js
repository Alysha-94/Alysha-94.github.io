//window.onbeforeunload = function () {
  //window.scrollTo(0, 0);
//}
$(document).ready( function () {
	$('.down1').on('click',function () {
	//$('body, html').animate({ scrollTop: 0 }, 'slow');
	//$("html").scrollTop(0);
	//$(this).addClass("animated fadeOutUp");
		$('html, body').animate({
		scrollTop: $("#section2").offset().top
	}, 1000);
	}),
	$('.down2').on('click',function () {
		$('html, body').animate({
	    scrollTop: $("#section3").offset().top
	}, 1000);
	}),
	$('.down3').on('click',function () {
		$('html, body').animate({
	    scrollTop: $("#section4").offset().top
	}, 1000);
	}),
	$('.down4').on('click',function () {
		$('html, body').animate({
	    scrollTop: $("#section5").offset().top
	}, 1000);
	}),
	$('.down5').on('click',function () {
		$('html, body').animate({
	    scrollTop: $("#section6").offset().top
	}, 1000);
	}),
	$('.down6').on('click',function () {
		$('html, body').animate({
	    scrollTop: $("#section1").offset().top
	}, 1000);
	});
});
