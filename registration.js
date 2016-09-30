$(document).ready(function() {
	$('.button').on('click', function() {
		var email = $('#email').val();
		var username = $('#username').val();
		var password = $('#password').val();

	if(email === '' && username === '' && password === '') {
		$('.fail').show();
	}
	else {
		$('.success').show();
	}

	});
});