$(document).ready(function() {
	$('.square').on('click', function() {
		var $this = $(this);
		var animationType = $this.data("animation");
		$this.toggleClass(animationType);
			});
	