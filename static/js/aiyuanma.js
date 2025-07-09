function unableScroll() {
	var top = jQuery(document).scrollTop();
	jQuery(document).on('scroll.unable',function (e) {
		jQuery(document).scrollTop(top);
	})
}
function enableScroll() {
	jQuery(document).unbind("scroll.unable");
}
$(function(){
	var search = $('#search');
	var schBtn = $('#schBtn');
	var navBtn = $('#navBtn');
	var nav = $('#nav');
	var navItem = nav.find('li');
	navItem.each(function(){
		var _href = $(this).children('a').attr('href');
		if(_href == _url){
			if($(this).parents('li').length > 0){
				$(this).parents('li').addClass('cur');
			}else{
				$(this).addClass('cur');
			}
		}
		if($(this).children('ul').length > 0){
			$(this).addClass('hasSub').children('a').after('<em></em>');
		}
	});

	navItem.find('em').click(function(){
		$(this).toggleClass('open').siblings('ul').stop().slideToggle('fast').parent().siblings().find('em').removeClass('open').siblings('ul').stop().slideUp('fast');
	});

	navBtn.click(function(){
		search.removeAttr('style');
		if($(this).hasClass('active')){
			enableScroll();
			$(this).removeClass('active');
			nav.removeClass('active');
		}else{
			unableScroll();
			$(this).addClass('active');
			nav.addClass('active');
		}
	});

	search.find('.submit').click(function(){
		if($(this).siblings().children('input').val() == ''){
			alert('请输入关键词搜索！');
			return false;
		}
	});
	$('#divSearchPanel input[type="submit"]').click(function(){
		if($(this).siblings('input').val() == ''){
			alert('请输入关键词搜索！');
			return false;
		}
	});
	schBtn.click(function(){
		enableScroll();
		search.stop().fadeToggle('fast');
		nav.removeClass('active');
		navBtn.removeClass('active');
	});
	
    $('#social a').click(function(){
    	if($(this).siblings('.qr').length > 0){
    		$(this).siblings('.qr').stop().fadeToggle('fast').parents('li').siblings('li').find('.qr').hide();
    	}		
	});
    
    $('#divStatistics li').each(function(){
        var _text = $(this).text().split(':');
        if(_text.length > 0){
            var _name = '<span class="left">'+_text[0]+'：</span>';
            var _num = '<span class="right"><i>'+_text[1]+'</i></span>';
            $(this).html(_name + _num);
        }
    });
	
	var _sidebar = $('#sidebar');
	var _main = $('#main');
	$(window).resize(function(){
		if($(this).width() > 1024){
			nav.removeAttr('style');
			search.removeAttr('style');
			navBtn.removeClass('active');
			navItem.on('mouseenter mouseleave');
			navItem.mouseenter(function(){
				$(this).addClass('on').children('ul').stop().slideDown(300);
			}).mouseleave(function(){
				$(this).removeClass('on').children('ul').stop().slideUp(300);
			});
		}else{
			navItem.off('mouseenter mouseleave');
		}
	}).trigger('resize');


	if($('#about .intro').length > 0){
		$('#about .intro').mCustomScrollbar({
	        scrollbarPosition: "outside",
	        autoDraggerLength:true,
	        alwaysShowScrollbar:0   
	    }); 	
	}

	if($('#slides').length > 0){
		$('#slides .slick-load').slick({
	        autoplay: true,
	        autoplaySpeed: 5000,
	        speed: 500,
	        dots: true,
	        arrows: true,
	        vertical: false,
	        fade:true,
	        lazyLoad:true,
	        infinite: true,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        pauseOnHover: true,
	        responsive: [
			   
			    {
			      breakpoint: 769,
			      settings: {
			        fade:false,
			      }
			    }
			]
	    });
	}

	var _this = $('#showcase');	
	if(_this.find('.slick-load').length > 0){					
		_this.find('.slick-load').slick({
	        autoplay: true,
	        autoplaySpeed: 5000,
	        speed: 500,
	        dots: false,
	        arrows: true,
	        vertical: false,
	        fade:false,
	        infinite: true,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        pauseOnHover: true,
	        appendArrows:_this.find('.boxTitle .arrow'),
	       	prevArrow:'<button type="button" class="slick-prev"></button>',
	       	nextArrow:'<button type="button" class="slick-next"></button>',
	        responsive: [
			    {
			      breakpoint: 769,
			      settings: {
			        slidesToShow: 2,
			      }
			    }
			]
	    });		
	}
	/**/
	$('#propost .wx').click(function(){
		$(this).children('img').stop().fadeToggle('fast');
	});
});