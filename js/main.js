
$(document).ready(function() {


		$('.signin').click(function() {
			$('.modal').fadeIn('start');
		});

		$('.close').click(function() {
			$('.modal').fadeOut('start');
		});

		$('.submit').click(function() {
			if ($("form input[name='user']").val().length === 0) {
				$("input[name='user']").addClass('error');
			} else if ($("form input[name='pass']").val().length === 0) {
				$("form input[name='pass']").addClass('error');
			} else {
				$('.modal').fadeOut('start');
			}
		});

		$('input').click(function() {
			$("input").removeClass('error');

		});
});
