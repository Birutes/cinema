$(document).ready(function() {
	$('.square').on('click', function() {
		var $this = $(this);
		var animationType = $this.data("animation");
		$this.toggleClass(animationType);
	});

$.getJSON("http://www.colourlovers.com/api/palettes/new?jsonCallback=?",
 	function(colorPalettes) {
 		printColors(colorPalettes);
 	}
 );

$('.ajax').on('click', function() {
		$.get( "data.txt", function( response ) {
 console.log( response );
 		});
});	

function printColors(colorPalettes){
 	var color = "#" + colorPalettes[0].colors[0];

    $(".ajax").on("click", function () {
        $("p").css("color", color);
    });

    console.log(colorPalettes)
    };
});