const aboutme = `
	<div id="content" style="display:none;">
		<h2>About me</h2><br>
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

const portfolio = `
	<div id="content" style="display:none;">
		<h2>Projects</h2>
		<a href="http://serene-oasis-24845.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/skilltrade.png" alt="skilltrade app"></div>
		</a>
		<a href="http://serene-castle-95327.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/shifter.png" alt="shifter app"></div>
		</a>
		<a href="http://quiet-ravine-19580.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/nyt.png" alt="nyt article search"></div>
		</a>
		<a href="http://peaceful-inlet-85002.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/articlescraper.png" alt="article scraper"></div>
		</a>
		<a href="http://glacial-retreat-34307.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/nefisburger.png" alt="nefis burger"></div>
		</a>
		<a href="http://shielded-castle-38951.herokuapp.com/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/couplemaker.png" alt="couplemaker"></div>
		</a>
		<a href="http://heyjaypray.github.io/pick4.io/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/restaurantroulette.png" alt="restaurant roulette app"></div>
		</a>
		<a href="http://cuneytakcay.github.io/GifTastic/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/giphy.png" alt="gif search engine"></div>
		</a>
		<a href="http://cuneytakcay.github.io/TriviaGame/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/trivia.png" alt="trivia game"></div>
		</a>
		<a href="http://cuneytakcay.github.io/week-4-game/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/heman.png" alt="he-man rpg game"></div>
		</a>
		<a href="http://cuneytakcay.github.io/Hangman-Game/" target="_blank">
			<div class="portfolio"><img src="assets/img/portfolio/hangman.png" alt="hangman game"></div>
		</a>
	</div>
`

const contact = `
	<div id="content" style="display:none;">
		<h2>Contact me</h2>
		<form id="contact-form" method="post" action="mailer.php">
			<input type="text" name="name" id="name" placeholder="Your name...">
			<input type="email" name="email" id="email" placeholder="Your email...">
			<textarea name="message" id="message" placeholder="Your message..." rows="6"></textarea>	
			<button type="submit" id="form-btn">Send</button>
			<div id="message-result"></div>
		</form>
	</div>
`

let linkIsOpen = false

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
			linkIsOpen = true
			break
		case 'portfolio':
			goToLink(id, portfolio)
			$('#home, #aboutme, #contact').removeClass('active').addClass('link')
			$('#portfolio').addClass('active').removeClass('link')
			linkIsOpen = true
			break
		case 'contact':
			goToLink(id, contact)
			$('#home, #portfolio, #aboutme').removeClass('active').addClass('link')
			$('#contact').addClass('active').removeClass('link')
			linkIsOpen = true
			break
	}
})

const goToLink = (id, link) => {
	if (linkIsOpen) {
		$('.image, .material, .content-box').fadeOut(500)
		setTimeout(() => {
			$('.content-box').css('display', 'block').addClass('draw-box')
			$('.image').fadeIn().css('background-image', `url("assets/img/${id}.jpg")`).addClass('show-image')
			$('.material').fadeIn().html(link)
			setTimeout(() => {
				$('#content').fadeIn(2000)
			}, 2300)
		}, 600)
	} else {
		$('.tagline').fadeOut(500)
		$('.content-box').css('display', 'block').addClass('draw-box')
		$('.image').fadeIn().css('background-image', `url("assets/img/${id}.jpg")`).addClass('show-image')
		$('.material').fadeIn().html(link)
		setTimeout(() => {
			$('#content').fadeIn(2000)
		}, 2300)
	}
}

const goToHome = () => {
	$('.image, .material, .content-box').fadeOut(500, () => {
		$('.tagline').fadeIn(1000)
	})
	linkIsOpen = false;
}

// Contact form submit script
$(document).on('click', '#form-btn', event => {
  event.preventDefault()
	$.ajax({
	    type: 'POST',
	    url: 'mailer.php',
	    data: {
	    	name: $('#name').val(),
	    	email: $('#email').val(),
	    	message: $('#message').val()
	    }
	}).done(response => {
	    $('#message-result').html(`<p><em>${response}</em></p>`)
	    $('#name').val('')
	    $('#email').val('')
	    $('#message').val('')
	}).fail(data => {
	    $('#message-result').html(`<p><em>An error occured and your message could not be sent!</em></p>`)
	})
})

