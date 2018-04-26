let btnClicked = false;

/* ================================================= */
/* ======= jPulse & Links opening animations ======= */
/* ================================================= */

const pulsate = cond => {
	$('#menu-btn').jPulse(cond);
}

const openLinks = () => {
	$('#chevron').addClass('hide');
	$('.tagline').css('opacity', '0');
	$('#top-line').removeClass('undraw-top lines').addClass('draw-top lines');
	$('#mid-line').removeClass('undraw-mid lines').addClass('draw-mid lines');
	$('#bot-line').removeClass('undraw-bot lines').addClass('draw-bot lines');
	$('#portfolio, #blog, #about-me').removeClass('close-links links').addClass('open-links links');
	$('.line-title').css({'visibility': 'visible', 'opacity': '1'});
} 

const closeLinks = () => {
	$('#chevron').removeClass('hide');
	$('.tagline').css('opacity', '1');
	$('#top-line').removeClass('draw-top lines').addClass('undraw-top lines');
	$('#mid-line').removeClass('draw-mid lines').addClass('undraw-mid lines');
	$('#bot-line').removeClass('draw-bot lines').addClass('undraw-bot lines');
	$('#portfolio, #blog, #about-me').removeClass('open-links links').addClass('close-links links');
	$('.line-title').css({'visibility': 'hidden', 'opacity': '0'});
}

$('#menu-btn').on('mouseenter',() => {
	if (!btnClicked) {
		pulsate({
			color: '#fff',
			size: 75,
			speed: 3000,
			interval: 300,
			left: 0,
			top: 0,
			zIndex: -1
		});
		openLinks();
	}
});

$('#menu-btn').on('mouseleave',() => {
	if (!btnClicked) {
		pulsate('disable');
		closeLinks();
	}
});

$('#menu-btn').on('click',() => {
	if (!btnClicked) {
		btnClicked = true;
		openLinks();
	} else {
		btnClicked = false;
		closeLinks();
	}
});
