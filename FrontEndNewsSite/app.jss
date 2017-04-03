//-----------------------------------------------
//   DOCUMENT READY
//-----------------------------------------------

$(document).ready(function () {
	$('.js-like').on('click', function(event) {
		event.preventDefault();


//-----------------------------------------------
//   Add Linked
//-----------------------------------------------

		$(this).text('Liked!')
		 .closest('.news-item')
		  .addClass('is-liked');

	});



//-----------------------------------------------
//   Add Blink
//-----------------------------------------------

	$('.js-add-link').on('click', function(event) {
		event.preventDefault();

		$('.js-form').toggleClass('is-visible');

	});


//-----------------------------------------------
//   Add Modal
//-----------------------------------------------

$('.js-show-modal').on('click', function(event) {
		event.preventDefault();

		$('.js-modal').addClass('is-visible');
		$('.js-modal-overlay').addClass('is-visible');

	});
	
});