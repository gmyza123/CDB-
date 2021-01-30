'use strict';

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window / innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - animItemHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animOffset + animHeight)) {
				animItem.classList.add('_active');
			} else {
				animItem.classList.remove('_active');
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}

(function ($) {
	$(document).ready(function () {
		// Slider
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			focusOnSelect: true,
			appendArrows: $('.slider__arrows'),
			prevArrow: '<div class="slider-prev"><svg class="chevron-left"><use xlink:href="#chevron-left"></use></svg></div>',
			nextArrow: '<div class="slider-next"><svg class="chevron-right"><use xlink:href="#chevron-right"></use></svg></div>',
		});

		// Animation
		AOS.init();
	});
})(jQuery);
