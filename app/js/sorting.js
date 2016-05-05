$(function() {

	var fade = 1000;

	$('.category_all').click(function(){
		if($('.portfolio_item').is(':hidden')){
			$('.portfolio_item').fadeIn(fade);
		} else{

		}
	});

	$(".category_site").click(function(){
		if($('.category_site_item').not(':visible')){
			$('.category_site_item').fadeIn(fade);
			$('.category_landing_item, .category_logo_item').fadeOut();
		}else{

		}
	});

	$('.category_landing').click(function(){
		if($('.category_landing_item').not(':visible')){
			$('.category_landing_item').fadeIn(fade);
			$('.category_site_item, .category_logo_item').fadeOut();
		}else{

		}
	});

	$('.category_logo').click(function(){
		if($('.category_logo_item').not(':visible')){
			$('.category_logo_item').fadeIn(fade);
			$('.category_site_item, .category_landing_item').fadeOut();
		}else{

		}
	});

});