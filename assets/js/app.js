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
		$('.chevron').addClass('paused', 'slow');
		$('.tagline').addClass('tagline-opaque', 'slow');
		pulsate({
			color: '#fff',
			size: 75,
			speed: 3000,
			interval: 500,
			left: 0,
			top: 50,
			zIndex: -1
		});
		$('#horizontal').removeClass('line undraw-line').addClass('line draw-line');
		$('#vertical').removeClass('line undraw-line').addClass('line draw-line');
	}
});

$('#menu-btn').on('mouseleave', function() {
	if (!btnClicked) {
		setTimeout(function() {
			$('.chevron').removeClass('paused', 'slow');
			$('.tagline').removeClass('tagline-opaque', 'slow');
		}, 2000);
		pulsate('disable');
		$('#horizontal').removeClass('line draw-line').addClass('line undraw-line');
		$('#vertical').removeClass('line draw-line').addClass('line undraw-line');
	}
});

$('#menu-btn').on('click', function() {
	if (!btnClicked) {
		btnClicked = true;
		$('#horizontal').removeClass('draw-line undraw-line').addClass('line');
		$('#vertical').removeClass('draw-line undraw-line').addClass('line');
	} else {
		btnClicked = false;
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