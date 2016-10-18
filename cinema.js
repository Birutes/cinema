$(document).ready(function() {
	$('.square').on('click', function() {
		var $this = $(this);
		var animationType = $this.data("animation");
		$this.toggleClass(animationType);
			});
});

$(document).ready(function() {
	$('.ajax').on('click', function() {
		$.get( "data.txt", function( response ) {
 console.log( response );
 		});
	});



$.getJSON("http://www.colourlovers.com/api/palettes/new?jsonCallback=?",
 	function(colorPalettes) {
 		printColors(colorPalettes);
 	}
 );

 function printColors(colorPalettes){
 		var color = "#" + colorPalettes[0].colors[0];

        $(".ajax").on("click", function () {
            $("p").css("color", color);
        });
    };
});