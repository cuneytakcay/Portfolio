var btnClicked = false;

// ------------------------------------------------- //
// ------- jPulse & Links opening animations ------- //
// ------------------------------------------------- //
function pulsate(cond) {
	$('#menu-btn').jPulse(cond);
}

function openLinks() {
	$('#menu-btn').css('opacity', '1');
	$('.chevron').addClass('hide');
	$('.tagline').css('opacity', '0');
	$('#top-line').removeClass('undraw-top lines').addClass('draw-top lines');
	$('#mid-line').removeClass('undraw-mid lines').addClass('draw-mid lines');
	$('#bot-line').removeClass('undraw-bot lines').addClass('draw-bot lines');
	$('#portfolio, #blog, #about-me').removeClass('close-links links').addClass('open-links links');
	$('.line-title').css({'visibility': 'visible', 'opacity': '1'});
} 

function closeLinks() {
	$('#menu-btn').css('opacity', '0.3');
	$('.chevron').removeClass('hide');
	$('.tagline').css('opacity', '1');
	$('#top-line').removeClass('draw-top lines').addClass('undraw-top lines');
	$('#mid-line').removeClass('draw-mid lines').addClass('undraw-mid lines');
	$('#bot-line').removeClass('draw-bot lines').addClass('undraw-bot lines');
	$('#portfolio, #blog, #about-me').removeClass('open-links links').addClass('close-links links');
	$('.line-title').css({'visibility': 'hidden', 'opacity': '0'});
}

$('#menu-btn').on('mouseenter', function() {
	if (!btnClicked) {
		pulsate({
			color: '#fff',
			size: 120,
			speed: 2000,
			interval: 400,
			left: 0,
			top: 50,
			zIndex: -1
		});
		openLinks();
	}
});

$('#menu-btn').on('mouseleave', function() {
	if (!btnClicked) {
		pulsate('disable');
		closeLinks();
	}
});

$('#menu-btn').on('click', function() {
	if (!btnClicked) {
		btnClicked = true;
		openLinks();
	} else {
		btnClicked = false;
		closeLinks();
	}
});

// ------------------------------------------------- //
// ----------- Animating chevron effects ----------- //
// ------------------------------------------------- //
var animateChevron = function() {
	clearTimeout(animateChevron);

	setTimeout(function() {
		$('#top-chev').animate({ opacity: 1 });
	}, 400);
	setTimeout(function() {
		$('#mid-chev').animate({ opacity: 1 });
	}, 800);
	setTimeout(function() {
		$('#bot-chev').animate({ opacity: 1 });
	}, 1200);
	setTimeout(function() {
		$('.chevron').animate({ opacity: 0.3 });
	}, 1600);
	
	setTimeout(animateChevron, 1600);
}

setTimeout(animateChevron, 100);

// ------------------------------------------------- //
// ----- Water ripple effect on the main page. ----- //
// ------------------------------------------------- //
// $('body').ripples({
// 	imgUrl: null,
// 	resolution: 500,
// 	dropRadius: 10,
// 	perturbance: 0.05,
// });


////////////////////////////////////////////////////////////////////
