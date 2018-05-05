const home = null

const aboutme = `
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
`

const portfolio = null

const contact = `
	<form id="contact-form" method="post" action="mailer.php">
		<input type="text" name="name" id="name" placeholder="Your name...">
		<input type="email" name="email" id="email" placeholder="Your email...">
		<textarea name="message" id="message" placeholder="Your message..." rows="6"></textarea>	
		<button type="submit">Submit</button>
		<div id="message-result"></div>
	</form>
`

$('.link').on('click', function(){
	const id = $(this).attr('id')
	let content = null;

	switch (id) {
		case 'home':
			content = home
			break
		case 'aboutme':
			content = aboutme
			break
		case 'portfolio':
			content = portfolio
			break
		case 'contact':
			content = contact
			break
	}

	$('.tagline').css('opacity', '0')
	$('.content-box').css('opacity', '1')
	$('.content-box').addClass('draw-box')
	$('.image').css('background-image', `url("assets/img/${id}.jpg")`).addClass('show-image')
	$('.content').addClass('show-content')
	$('#material').html(content)
	setTimeout(() => {
		$('#material').css('display', 'block')
		$('#material').addClass('display-material')
	}, 2300)

})

