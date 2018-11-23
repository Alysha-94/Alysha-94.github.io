
$("#section1").on('mousemove', function(event) {
	var x = event.pageX - this.offsetLeft;
    if (x < $(this).width() / 2) {
		$('#me').css('transform', 'scaleX(-1)');
    } else {
		$('#me').css('transform', 'scaleX(1)');
    }
});