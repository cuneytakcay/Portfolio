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

var btnClicked = false;

$('#menu-btn').on('mouseenter', function() {
	if (!btnClicked) {
		$('.chevron').addClass('paused');
		$('.tagline').addClass('tagline-opaque');
		pulsate({
			color: '#fff',
			size: 75,
			speed: 3000,
			interval: 500,
			left: 0,
			top: 50,
			zIndex: -1
		});
		$('#horizontal').removeClass('line undraw-right').addClass('line draw-right');
		$('#vertical').removeClass('line undraw-right').addClass('line draw-right');
		$('#diagonal-long').removeClass('line undraw-long').addClass('line draw-long');
		$('#diagonal-short').removeClass('line undraw-short').addClass('line draw-short');
	}
});

$('#menu-btn').on('mouseleave', function() {
	if (!btnClicked) {
		$('.chevron').removeClass('paused');
		$('.tagline').removeClass('tagline-opaque');
		pulsate('disable');
		$('#horizontal').removeClass('line draw-right').addClass('line undraw-right');
		$('#vertical').removeClass('line draw-right').addClass('line undraw-right');
		$('#diagonal-long').removeClass('line draw-long').addClass('line undraw-long');
		$('#diagonal-short').removeClass('line draw-short').addClass('line undraw-short');
	}
});

$('#menu-btn').on('click', function() {
	if (!btnClicked) {
		btnClicked = true;
		$('#menu-btn').css('opacity', '1');
		$('.chevron').addClass('paused');
		$('.tagline').addClass('tagline-opaque');
		$('#horizontal').removeClass('draw-right undraw-right').addClass('line');
		$('#vertical').removeClass('draw-right undraw-right').addClass('line');
		$('#diagonal-long').removeClass('draw-long undraw-long').addClass('line');
		$('#diagonal-short').removeClass('draw-short undraw-short').addClass('line');
	} else {
		btnClicked = false;
		$('#menu-btn').css('opacity', '0.3');
		$('.chevron').removeClass('paused');
		$('.tagline').removeClass('tagline-opaque');
	}
});



// Animating chevron images
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