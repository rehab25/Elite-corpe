/* ------------- 
$(function () {
	'use strict';
	var windowHeight = $(window).height(),
		upperHeight = $('.header').innerHeight(),
		navHeight = $('.navbar').innerHeight();
	$('.slider, .carousel-item ').height(windowHeight - (upperHeight + navHeight + 700));
});
------------------- */
$('.featuresWork ul li').on('click', function () {
	'use strict';	$(this).addClass('active').siblings().removeClass('active');
	if ($(this).data('class') === 'all') {
	$('.myShuffleImg .col-md').css('opacity', 1);
	} else {
	$('.myShuffleImg .col-md').css('opacity', '.08');
	$ ($(this).data('class')).parent().css('opacity', 1);
	}
});