$(function() {
	// code
	$(".js-slider").slick({
		autoplay: true,
		dots: false,
		infinite: true,
		arrows: true,
		pauseOnHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:
			'<a class="slick-prev" href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>',
		nextArrow:
			'<a class="slick-next" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>',
		responsive: [
			{
				breakpoint: 767, // 〜479px
				settings: {
					slidesToShow: 1,
					variableWidth: true,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: "0"
				}
			}
		]
	});

	$(".js-voiceslider").slick({
		autoplay: false,
		dots: false,
		infinite: true,
		arrows: false,
		pauseOnHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: "0",
		prevArrow: '<a class="slick-prev" href="#"></a>',
		nextArrow: '<a class="slick-next" href="#"></a>',
		responsive: [
			{
				breakpoint: 767, // 〜479px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true
				}
			}
		]
	});

	// lcl-interview-list
	$(".lcl-interview-list").slick({
		autoplay: true,
		dots: false,
		infinite: true,
		arrows: true,
		pauseOnHover: false,
		focusOnSelect: false,
		pauseOnFocus: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:
			'<a class="slick-prev" href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a>',
		nextArrow:
			'<a class="slick-next" href="#"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a>',
		responsive: [
			{
				breakpoint: 767, // 〜479px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: "50px"
				}
			}
		]
	});
});

// スクロールしたら発火
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 250) {
		$("header").addClass("h_scroll");
	} else {
		$("header").removeClass("h_scroll");
	}
});
