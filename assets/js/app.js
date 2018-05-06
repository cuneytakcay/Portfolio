const aboutme = `
	<div id="content" style="display:none;">
		<p>Hello! My name is Cuneyt- just say June-8 to nail your pronunciation!</p><br>

		<p>Chemistry was my specialty in college, and in my career I've taught science 
		and technology classes, but now it's time for a change. I have completed the 
		University of Arizona Coding Bootcamp to become a full stack web developer. 
		It has been incredible to see how much I've managed to learn and grow in 6 months, 
		and I cannot wait to use my programming skills in a professional field to make a 
		difference. Of course, the most exciting thing is having the opportunity to be 
		introduced to new technologies while doing professional work.</p><br>

		<p>Here on this portfolio page you can access some of my sample project works, 
		and if you want to learn more about them please check out my github repositories. 
		Please feel free to contact me anytime regarding web development projects.</p><br>
	</div>
`

const portfolio = null

const contact = `
	<form id="content" method="post" action="mailer.php" style="display:none;">
		<input type="text" name="name" id="name" placeholder="Your name...">
		<input type="email" name="email" id="email" placeholder="Your email...">
		<textarea name="message" id="message" placeholder="Your message..." rows="6"></textarea>	
		<button type="submit">Submit</button>
		<div id="message-result"></div>
	</form>
`

$('.link').on('click', function(){
	const id = $(this).attr('id')

	switch (id) {
		case 'home':
			goToHome()
			$('#aboutme, #portfolio, #contact').removeClass('active').addClass('link')
			$('#home').addClass('active').removeClass('link')
			break
		case 'aboutme':
			goToLink(id, aboutme)
			$('#home, #portfolio, #contact').removeClass('active').addClass('link')
			$('#aboutme').addClass('active').removeClass('link')
			break
		case 'portfolio':
			goToLink(id, portfolio)
			$('#home, #aboutme, #contact').removeClass('active').addClass('link')
			$('#portfolio').addClass('active').removeClass('link')
			break
		case 'contact':
			goToLink(id, contact)
			$('#home, #portfolio, #aboutme').removeClass('active').addClass('link')
			$('#contact').addClass('active').removeClass('link')
			break
	}
})

const goToLink = (id, link) => {
	$('.tagline').fadeOut(500)
	$('.content-box').css('display', 'block').addClass('draw-box')
	$('.image').fadeIn().css('background-image', `url("assets/img/${id}.jpg")`).addClass('show-image')
	$('.material').fadeIn().html(link)
	setTimeout(() => {
		$('#content').fadeIn(2000)
	}, 2300)
}

const goToHome = () => {
	$('.content-box').css('box-shadow', 'none')
	$('.image, .material, .content-box').fadeOut(1000, () => {
		$('.tagline').fadeIn(1000)
	});
}

