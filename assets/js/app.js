$('.link').on('click', function(){
	const id = $(this).attr('id')

	$('.tagline').css('opacity', '0')
	$('.content-box').css('opacity', '1')
	$('.content-box').addClass('draw-box')
	$('.image').addClass('show-image')
	$('.content').addClass('show-content')
})

