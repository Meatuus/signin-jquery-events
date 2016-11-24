
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
					event.stopPropagation();
			} else if ($("form input[name='pass']").val().length === 0) {
				$("form input[name='pass']").addClass('error');
					event.stopPropagation();
			} else {
				$('.modal').fadeOut('start');
			}
		});

		$('form input').click(function() {
			$("input").removeClass('error');
			event.stopPropagation();
		});

		$('form').click(function() {
			event.stopPropagation();
		});

		$('.modal').click(function() {
			$('.modal').fadeOut('start');
		});
});
