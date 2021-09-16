$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 150) {
		$("#main-navbar").addClass("navbar-scroll")
	} else {
		$("#main-navbar").removeClass("navbar-scroll")
	}
});
$('.card .aFavs').click(function () {
	$(this).parents('.card').toggleClass('esFav');
})
$('.card .alCarrito').click(function () {
	$(this).parents('.card').toggleClass('enCarrito');
})
let closeForm = function () {
	let form = document.getElementById('contactForm');
	let open = true;

	form.style.display = "block";

	if (open == true) {
		form.style.display = "none";
		open = false;
	}
}
const scriptURL =
	'https://script.google.com/macros/s/AKfycbz85gb5KFJl7bdbVt4bukevPEjuXHwqp-3sdea-LZ-G_kr-5EBO-mR1pEbpvpoVs-Cy/exec'
const form = document.forms['Submit-GoogleSheet']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, {
			method: 'POST',
			body: new FormData(form)
		})
		.then(response => alert("Thanks for your valuable Feedback !"))
		.catch(error => console.error('Error!', error.message))
})