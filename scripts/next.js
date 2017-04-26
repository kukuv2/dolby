
$(function() {
  FastClick.attach(document.body);
});
$(document).ready(function($) {
	$('body').on('click', '.back,.gohome', function(event) {
		event.preventDefault();
        // location.href
		history.go(-1)
	});
	$('body').on('click', '.video', function(event) {
		event.preventDefault();
		$('.zy_controls').css({
			'bottom': 0
		});
        $('.zy_playpause_btn_play').trigger('click')
		// $(this).hide()
	});
	// zymedia('video',{autoplay: false,enableFullscreen: false});
	zymedia('video',{autoplay: false});
	var windowheight = $(window).height()
	$(window).scroll(function(event) {
		if ($(window).scrollTop() > 0) {
			$('.btm').remove()
		}
	});
    var u = navigator.userAgent
    // if(u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
    var android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    if(android){
        $(".topB").css({
            'position': 'fixed'
        })
        var height = $(".tocT").height()
        height = height/2
        $(window).on('scroll', function (e) {
            var windowScroll = $(window).scrollTop()
            if(windowScroll > height){
                $(".topB").css({
                    'position': 'absolute'
                })
            }else{
                $(".topB").css({
                    'position': 'fixed'
                })
            }
        })
    }
    // $(".topB").sticky({top:0,bottom:0});
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