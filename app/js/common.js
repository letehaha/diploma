'use strict';

$(function() {

	$(window).load(function(){
		$("preloader-dots").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});

	// animate toggle_menu
	// $("#js-toggle_menu").click(function() {
	//   $(".burger").toggleClass("active");
	// });

	// animated elements
	let topIntroCenter = document.getElementsByClassName('top_intro_center')[0];
	topIntroCenter.getElementsByTagName('h1')[0].classList.add('animated', 'fadeInDown');
	topIntroCenter.getElementsByTagName('p')[0].classList.add('animated', 'fadeInUp');
	// $(".top_intro_center h1").addClass('animated fadeInDown');
	// $(".top_intro_center p").addClass('animated fadeInUp');

	
	// enable/disable top_menu
	let toggleMenu = document.getElementById('js-toggle_menu');
	let topMenu = document.getElementsByClassName('js-top_menu')[0];
	let burger = document.getElementById('burger');

	toggleMenu.onclick = function(){
		burger.classList.toggle('active');
		let topMenuLi = topMenu.getElementsByTagName('li');
		if (topMenu.style.display == 'block'){
			topMenu.style.display = 'none';
			for(let i = 0; i < topMenuLi.length; i++){
				topMenuLi[i].getElementsByTagName('a')[0].classList.remove('animated', 'fadeInUp');
			}
			// topIntroCenter.classList.remove('it_opacity'); //узнать зачем нужен этот класс
			// $(".top_menu").fadeOut(600);
			// $(".top_menu li a").removeClass("fadeInUp animated");
			// $(".top_intro_center").removeClass("it_opacity");
		} else{
			topMenu.style.display = 'block';
			for(let i = 0; i < topMenuLi.length; i++){
				topMenuLi[i].getElementsByTagName('a')[0].classList.add('animated', 'fadeInUp');
			}
			// topIntroCenter.classList.add('it_opacity'); //узнать зачем нужен этот класс
			// $(".top_menu").fadeIn(600);
			// $(".top_menu li a").addClass("fadeInUp animated");
			// $(".top_intro_center").addClass("it_opacity");
		};
	};

	//close top_menu when click items
	// $(".top_menu ul a").click(function(){
	// 	$(".top_menu").fadeOut(600);
	// 	$(".burger").toggleClass("active");
	// });


	let topMenuUl = topMenu.getElementsByTagName('ul');
	for(let i = 0; i < topMenuUl.length; i++){
		let countLinks = topMenuUl[i].getElementsByTagName('a');
		for(let i = 0; i < countLinks.length; i++){
			countLinks[i].onclick = function(){
				topMenu.style.display = 'none';
				burger.classList.toggle('active');
			}
		}
	}
	

	// transform header-text
	$(window).scroll(function() {

		var st = $(this).scrollTop();

		$(".top_intro_center").css({
			"transform" : "translate(0%, " + st/6  + "%"
		});
	});
	

	//section WORKS, list items .active
	// $(".js-change-category").click(function() {
	// 	$(".js-change-category").removeClass("active");
	// 	$(this).addClass("active");
	// });
	let categories = document.getElementsByClassName('js-change-category');
	for(let i = 0; i < categories.length; i++){
		categories[i].onclick = function(){
			// var toMass = Array.prototype.slice.call(categories);
			HTMLCollectionToMass(categories).forEach(function(item){
				item.classList.remove('active');
			});
			this.classList.add('active');
		};
	};

	$(".popup_content").magnificPopup({
		type:"inline"
	});


	//Scroll to id
	$("a[href='#home'], a[href='#about'], a[href='#works'], a[href='#contact'], a[href='#contact_message']").mPageScroll2id();

	//enable/disable contact-message
	// $(".link_contact-message, .close-button").click(function(){
	// 	if ($(".contact-message").is(":visible")){
	// 		$(".contact-message").fadeOut(600);
	// 	} else{
	// 		$(".contact-message").fadeIn(600);
	// 	};
	// });
	// $('.ft-link_contact-message').click(function() {
	// 	$(".contact-message").fadeIn(600);
	// });
	let linkContactMessage = document.querySelectorAll('.link_contact-message');
	let closeButton = document.getElementsByClassName('close-button')[0];
	let contactMessage = document.getElementById('contact_message');
	let ftLinkContactMessage = document.getElementById('ft-link_contact-message');
	
	for(let i = 0; i < linkContactMessage.length; i++){
		linkContactMessage[i].onclick = function(){
			if(contactMessage.style.display == 'block'){
				contactMessage.style.display = 'none';
			} else{
				contactMessage.style.display = 'block';
			};
		};
	};
	ftLinkContactMessage.onclick = function(){
		contactMessage.style.display = 'block';
	}
	closeButton.onclick = function(){
		if(contactMessage.style.display == 'block'){
			contactMessage.style.display = 'none';
		} else{
			contactMessage.style.display = 'block';
		};
	};

	//Animation load scrollbar
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},2000);
	});
	let skillbars = document.getElementsByClassName('.skillbar');
	console.log(HTMLCollectionToMass(skillbars));

	//Add target on link
	var root = location.protocol + '//' + location.host;
	$('a').not(':contains(root)').click(function(){
	    this.target = "_blank";
	});
	

	//sorting

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

	//forms


	$("#contact_form").submit(function() {
		$.ajax({
			url: "https://formspree.io/letehaha@gmail.com", 
			method: "POST",
			data: $(this).serialize(),
			dataType: "json"
		}).done(function() {
			$('.input-submit span').fadeIn(100);
			setTimeout(function(){
				$('.input-submit span').fadeOut(800);
			}, 2000);
			$("#contact_form").trigger("reset");
		});
		return false;
	});


	$("#contact_form-message").submit(function() {
		$.ajax({
			url: "https://formspree.io/letehaha@gmail.com", 
    		method: "POST",
    		data: $(this).serialize(),
    		dataType: "json"
		}).done(function() {
			$('.input-submit span').fadeIn(100);
			setTimeout(function(){
				$('.input-submit span').fadeOut(800);
			}, 2000);
			$("#contact_form-message").trigger("reset");
		});
		return false;
	});

	$("#ft-form").submit(function() {
		$.ajax({
			url: "https://formspree.io/letehaha@gmail.com", 
    		method: "POST",
    		data: $(this).serialize(),
    		dataType: "json"
		}).done(function() {
			$('.ft-input-submit span').fadeIn(100);
			setTimeout(function(){
				$('.ft-input-submit span').fadeOut(800);
			}, 2000);
			$("#ft-form").trigger("reset");
		});
		return false;
	});
});

var dateCp = new Date(),
		yar = dateCp.getFullYear(),
		yarMyself = yar - 1997,
		yarMyexp = yar - 2015;

document.getElementById('js-myself').innerHTML = yarMyself;
document.getElementById('js-myexp').innerHTML = yarMyexp;
document.getElementById('cp-year').innerHTML = yar;

function HTMLCollectionToMass(mass){
	return Array.prototype.slice.call(mass);
}