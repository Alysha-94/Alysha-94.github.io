function flip(event) {
    var x = event.pageX;
    var width = window.innerWidth;
    var me = document.getElementById("me");
    if (x < width / 2) {
        me.style.transform = 'scaleX(-1)';
    } else {
        me.style.transform = 'scaleX(1)';
    }
}

/*
$("#section1").on('mousemove', function(event) {
	var x = event.pageX - this.offsetLeft;
    if (x < $(this).width() / 2) {
		$('#me').css('transform', 'scaleX(-1)');
    } else {
		$('#me').css('transform', 'scaleX(1)');
    }
});
*/