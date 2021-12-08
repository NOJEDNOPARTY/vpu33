var common = {
	init: function() {
		common.fixNavigation();
		common.main();
		common.carousel();
		common.submit();
	},
	fixNavigation: function(){
		function fixPanel() {
			$('body').css({'padding-top': $('.header').outerHeight()})
			if($(window).scrollTop() > 0){
				$('.header').addClass('fixed');
			}else {
				$('.header').removeClass('fixed');
			}
		};
		fixPanel();
		$(window).scroll(function() {
			fixPanel();
		});
		$( window ).resize(function() {
			fixPanel();
			var bLazy = new Blazy({});
		});

		$( ".header-nav-submenu-hover" ).hover(function() {
			$(this).parent('.header-nav-submenu').addClass('link-in');
		});

		$( ".header-nav-submenu-hover" ).mouseleave(function() {
			$(this).parent('.header-nav-submenu').removeClass('link-in');
		});
	},
	main: function(){

		// menu-trigger

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$(this).toggleClass('active');
			$('.header-nav').toggleClass('active');
			$('body').toggleClass('hidden');
		});

		$('.header-nav-link-back').click(function(event){
			event.preventDefault();
			$(this).closest('.header-nav-submenu').removeClass('active');
		});

		
		$('.header-nav-link-trigger').click(function(event){
			event.preventDefault();
			$(this).closest('.header-nav-link-wrap').find('.header-nav-submenu:first').addClass('active');
		});

		// b-lazy

		var bLazy = new Blazy({});

		$('.form-row select').click(function(){
			$(this).toggleClass('active');
		});

		// click in another place

		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				var popupLayout = $(".popup-layout");
				var select = $('select');
				if (!popup.is(e.target) && popupLayout.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').fadeOut('fast');
					$('body').removeClass('hidden');
				}
				if (!select.is(e.target) 
					&& select.has(e.target).length === 0) { 
						select.removeClass('active');
				}
			});
		});


		// popups call
		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			$(popup).addClass('active')
			$('.header').removeClass('open');
			$('body').addClass('hidden');

		});
		
		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
		});

		// phone mask
		$('.tel-trigger').mask("+380(99) 999-99-99");

		

	},
	carousel: function(){
		var bannerSlider = $('.banner-slider');

		bannerSlider.owlCarousel({
			loop:false,
			items: 1,
			loop: true,
			margin: 0,
			nav: true,
			dots: true,
			autoHeight: true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true
		});

		$('.statute-slider').owlCarousel({
			loop:true,
			items: 1,
			margin: 0,
			nav: true,
			dots: true,
			autoHeight: true,
			// animateOut: 'fadeOut',
			// animateIn: 'fadeIn'
		});

		$('.gallery-slider').owlCarousel({
			loop:true,
			items:3,
			margin:20,
			nav:true,
			dots: false,
			responsive:{
				0:{
					items:1,
					margin:20,
					dots: true
				},
				767:{
					items:2,
					margin:20,
					dots: true
				},
				1000:{
					items:3,
					margin:20,
				}
			}
		});

		$('.news-slider').owlCarousel({
			loop:true,
			items:3,
			margin:20,
			nav: false,
			dots: false,
			responsive:{
				0:{
					items:1,
					margin:20,
					dots: true
				},
				767:{
					items:2,
					margin:20,
					dots: true
				},
				1000:{
					items:3,
					margin:20,
				}
			}
		});

		$('.owl-carousel').on('translated.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})

		
	},
	submit: function(){
		$("form").submit(function(event){
			event.preventDefault();
			formField = $(this).find(".required-field")
			thanksTrigger1 = $(this).find('.thanks-page-trigger1');
			thanksTrigger2 = $(this).find('.thanks-page-trigger2');
			
			formField.each(function(){
				var thisEl = $(this);
				if (! thisEl.val().length) {
					thisEl.addClass('error')
					setTimeout(function(){
						thisEl.removeClass('error')
					}, 3000)
					thisEl.addClass('form-error')
				}else { thisEl.removeClass('form-error')}
			});	
			if(formField.hasClass('form-error') == false){
				if(thanksTrigger1.hasClass('thanks-page-trigger1')) {
					$('.popup-wrapper').removeClass('active');
					$('#thanks1').addClass('active');
					$('body').addClass('hidden');
					var bLazy = new Blazy({});
				}
				if(thanksTrigger2.hasClass('thanks-page-trigger2')) {
					$('.popup-wrapper').removeClass('active');
					$('#thanks2').addClass('active');
					$('body').addClass('hidden');
					var bLazy = new Blazy({});
				}
			}
		});
		$('.form-row .form-field').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {
				$(this).closest('.form-row').addClass('active')
			}
		});

		
	},
};

(function() {
	common.init();
}());


