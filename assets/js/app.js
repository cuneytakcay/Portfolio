let linksAreOpen = false;

/* ================================================= */
/* ======= jPulse & Links opening animations ======= */
/* ================================================= */

const pulsate = cond => {
	$('#menu-btn').jPulse(cond);
}

const openLinks = () => {
	$('#arrowhead').addClass('hide');
	$('.tagline').css('opacity', '0');
	$('#rod').removeClass('undraw-rod').addClass('draw-rod');
	$('#top-bar').removeClass('undraw-top').addClass('draw-top');
	$('#mid-bar').removeClass('undraw-mid').addClass('draw-mid');
	$('#bottom-bar').removeClass('undraw-bottom').addClass('draw-bottom');
	$('#portfolio, #about, #contact').removeClass('close-link').addClass('open-link link');
	$('.title').css({'opacity': '1', 'transition-duration': '1s', 'transition-delay': '1.5s'});
} 

const closeLinks = () => {
	$('#arrowhead').removeClass('hide');
	$('.tagline').css('opacity', '1');
	setTimeout(() => {
		$('#rod').addClass('undraw-rod').removeClass('draw-rod');
	}, 900);
	setTimeout(() => {
		$('#top-bar').removeClass('draw-top').addClass('undraw-top');
		$('#mid-bar').removeClass('draw-mid').addClass('undraw-mid');
		$('#bottom-bar').removeClass('draw-bottom').addClass('undraw-bottom');
	}, 500);
	$('#portfolio, #about, #contact').removeClass('open-link').addClass('close-link link');
	$('.title').css({'opacity': '0', 'transition-duration': '0.5s', 'transition-delay': '0s'});
}

$('#menu-btn').on('click',() => {
	const makeOpaque = () => {
	  $('#menu-btn').css('opacity', '0.3');
	  $('.beam').css('opacity', '0');
	}

	if (!linksAreOpen) {
		pulsate({
			color: '#fff',
			size: 100,
			speed: 3000,
			interval: 300,
			left: 0,
			top: 0,
			zIndex: -1
		});
		openLinks();
		$('#menu-btn').css('opacity', '1');
		$('.beam').css('opacity', '1');
		linksAreOpen = true;
	} else {
		pulsate('disable');
		closeLinks();
		linksAreOpen = false;
		setTimeout(makeOpaque, 1500);
	}
});

$('#menu-btn').on('mouseenter',() => {
	if (!linksAreOpen) {
		pulsate({
			color: '#fff',
			size: 75,
			speed: 3000,
			interval: 300,
			left: 0,
			top: 0,
			zIndex: -1
		});
	} 
});

$('#menu-btn').on('mouseleave',() => {
	if (!linksAreOpen) {
		pulsate('disable');
	} 
});

