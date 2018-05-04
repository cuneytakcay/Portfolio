// --------------------------------------------- //
// -------------- BEAMS ANIMATE ---------------- //
// --------------------------------------------- //

$('.link').on('click', function(){
	const id = $(this).attr('id')
	$(`#${id}-beam`).removeClass('undraw-beam').addClass('draw-beam')
	$('.beam').css('opacity', '1')
	setTimeout(() => {
		$(`#${id}-beam`).removeClass('draw-beam').addClass('undraw-beam')
	}, 2000)
})
