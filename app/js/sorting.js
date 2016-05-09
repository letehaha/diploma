$(function() {

	$('.category_all').click(function(){
		if($('.portfolio_item').not(':visible')){
			$('.portfolio_item').show(600);
		} else{

		}
	});

	$(".category_site").click(function(){
		if($('.category_site_item').not(':visible')){
			$('.category_site_item').show(600);
			$('.category_landing_item, .category_logo_item').hide(600);
		}else{

		}
	});

	$('.category_landing').click(function(){
		if($('.category_landing_item').not(':visible')){
			$('.category_landing_item').show(600);
			$('.category_site_item, .category_logo_item').hide(600);
		}else{

		}
	});

	$('.category_logo').click(function(){
		if($('.category_logo_item').not(':visible')){
			$('.category_logo_item').show(600);
			$('.category_site_item, .category_landing_item').hide(600);
		}else{

		}
	});
});