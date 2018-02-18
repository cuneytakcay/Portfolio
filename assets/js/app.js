// Water ripple effect on the main page
$('body').ripples({
	imgUrl: null,
	resolution: 500,
	dropRadius: 10,
	perturbance: 0.05,
});

// Pulsating menu button
function pulsate(cond) {

	$('#menu-btn').jPulse(cond);
}

$('#menu-btn').on('mouseenter', function() {
	$('.chevron').addClass('paused', 'slow');
	$('.tagline').addClass('tagline-opaque', 'slow');
	pulsate({
		color: '#700000',
		size: 75,
		speed: 3000,
		interval: 500,
		left: 0,
		top: 50,
		zIndex: -1
	});
});

$('#menu-btn').on('mouseleave', function() {
	setTimeout(function() {
		$('.chevron').removeClass('paused', 'slow');
		$('.tagline').removeClass('tagline-opaque', 'slow');
	}, 2000);
	pulsate('disable');
});


// Animating chevron images
var animateChevron = function() {

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
	clearTimeout(animateChevron);
	setTimeout(animateChevron, 1600);
}

setTimeout(animateChevron, 100);