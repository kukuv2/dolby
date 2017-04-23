$(function() {
  FastClick.attach(document.body);
});
jQuery(document).ready(function($) {
	$('body').on('click', '.back,.gohome', function(event) {
		event.preventDefault();
		history.back(-1)
	});
	$('body').on('click', '#modelView', function(event) {
		event.preventDefault();
		$('.zy_controls').css({
			'bottom': 0
		});
		$('.zy_play').trigger('click')
		$(this).hide()
	});
	zymedia('video',{autoplay: false});
	var windowheight = $(window).height()
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 0) {
			$('.btm').remove()
		}
	});
    $(function(){
        $('.reveal').addClass('reveal-initialized')
        $('.reveal').addClass('reveal-shown')
        var realItem = $('[data-reveal-item]')
        realItem.each(function (index, item) {
            setTimeout(function () {
                if($(item).hasClass('nexttext')){
                    $(item).addClass('reveal-item-shown')
                }
            })
        })
    })
});