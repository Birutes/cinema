$(document).ready(function() {
	$('#first').on('click', function() {
		var $this = $(this);
		var animationType = $this.data("class");
		$this.toggleClass(animationType);
		$('#second').toggleClass('animation2');
			});

	$('#third').on('click', function() {
		$(this).toggleClass('animation3');
			});

	$('#fourth').on('click', function() {
		$(this).toggleClass('animation4');
			});

	$('#fifth').on('click', function() {
		$(this).toggleClass('animation5');
			});

	$('#sixth').on('click', function() {
		$(this).toggleClass('animation6');
			});

	$('#seventh').on('click', function() {
		$(this).toggleClass('animation7');
			});

	$('#eight').on('click', function() {
		$(this).toggleClass('animation8');
			});

	$('#ninth').on('click', function() {
		$(this).toggleClass('animation9');
			});

	$('#tenth').on('click', function() {
		$(this).toggleClass('animation10');
			});
});
	