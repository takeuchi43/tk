var display_mode = 'w'; // "w" or "n"
var resize_eventname = 'resize'; // "resize" or "orientationchange"
var $win = $(window);
var device = 'pc'; // "pc" or "sp"
var touch_device = false;
if (
	(navigator.userAgent.indexOf('iPhone') > 0 &&
		navigator.userAgent.indexOf('iPad') == -1) ||
	navigator.userAgent.indexOf('iPod') > 0 ||
	navigator.userAgent.indexOf('Android') > 0
) {
	resize_eventname = 'orientationchange';
	device = 'sp';
}
if (window.ontouchstart === null) {
	touch_device = true;
}

$(function() {
	'user strict';
	if (touch_device) {
		$('body').addClass('touch');
	}

	/* resize event */
	var resize_event = function() {
		set_display_mode();
	};
	resize_event();
	$win.on('load ' + resize_eventname, resize_event);

	/* page top */
	$("a[href^='#']:not(.page-top__image)").on('click', function() {
		$('html, body')
			.stop(true, false)
			.animate(
				{ scrollTop: $($(this).attr('href')).offset().top },
				480,
				'swing'
			);
		return false;
	});

	// 表示時に発火
	/* prettier-ignore */
	$('.js_load').delay(400).queue(function() {$(this).addClass('js_load--on').dequeue();});
	$(window).scroll(function() {
		$('.scr_fadetop').each(function() {
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if ($(window).width() > 767) {
				if (scroll > elemPos - windowHeight / 2) {
					$(this).addClass('scrollin');
				}
			} else {
				if (scroll > elemPos - windowHeight / 2) {
					$(this).addClass('scrollin');
				}
			}
		});
	});
});

function set_display_mode() {
	var break_point = 767;
	display_mode = $(window).innerWidth() <= break_point ? 'n' : 'w';
}

// SPメニューのやつ
$(document).ready(function() {
	$('.menu-btn').click(function() {
		$('.overlay').toggleClass('overlay--open');
		$(this)
			.toggleClass('btn-open')
			.toggleClass('btn-close');
		$('body').toggleClass('ovh');
	});
	$('.hnav-close__link').click(function() {
		$('.overlay').toggleClass('overlay--open');
		$('.menu-btn')
			.addClass('btn-open')
			.removeClass('btn-close');
		$('body').toggleClass('ovh');
	});
});
$(window).on(resize_eventname, function() {
	if (display_mode === 'w') {
		$('body').attr('class', '');
		$('.hnav').attr('style', '');
		$('.btn-close')
			.toggleClass('btn-open')
			.toggleClass('btn-close');
	}
});

// ページトップに戻る
$(function() {
	$('.page-top').on('click', function() {
		$('.page-top__image').hide();
		$(this)
			.addClass('page-top--move')
			.delay(500)
			.queue(function() {
				$(this)
					.removeClass('page-top--move')
					.dequeue();
				$('.page-top__image').show();
			});
		$('html, body')
			.stop(true, false)
			.animate({ scrollTop: 0 }, 500, 'swing', function() {
				$('.page-top').hide();
			});
		return false;
	});
	$(window).on('load scroll', function() {
		if (
			$(this).scrollTop() > 200 &&
			!$('.page-top').hasClass('page-top--move')
		) {
			$('.page-top').fadeIn();
		} else if ($('.page-top').css('display') == 'block') {
			$('.page-top').fadeOut();
		}
		// 跳ねる動きのときにじゃまになるからコメントアウト
		// scrollHeight = $(document).height();
		// scrollPosition = $(window).height() + $(window).scrollTop();
		// pageTopWrp = $('.page-top').height();
		// footerHeight = $('.footer-group').height();

		// if ($(window).width() > 767) {
		// 	if (scrollHeight - scrollPosition <= footerHeight-50) {
		// 		$('.page-top').css({ position: 'absolute', top: '-80px' });
		// 	} else {
		// 		$('.page-top').css({ position: 'fixed', top: 'auto' });
		// 	}
		// } else {
		// 	if (scrollHeight - scrollPosition <= footerHeight-45) {
		// 		$('.page-top').css({ position: 'absolute', top: '-40px' });
		// 	} else {
		// 		$('.page-top').css({ position: 'fixed', top: 'auto' });
		// 	}
		// }
	});
});

// IE,Edgeでのカクつき対応
$(function() {
	var userAgent = window.navigator.userAgent.toLowerCase();
	var userAgent02 = window.navigator.userAgent;
	if (
		userAgent.match(/(msie|MSIE)/) ||
		userAgent.match(/(T|t)rident/) ||
		userAgent.match(/(E|e)dge/)
	) {
		$('body').on('mousewheel', function() {
			if (!$('html').hasClass('fixed')) {
				event.preventDefault();
				var wd = event.wheelDelta;
				var csp = window.pageYOffset;
				window.scrollTo(0, csp - wd);
			}
		});
	}
});
