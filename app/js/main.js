'use strict';

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0) {
// 	window.addEventListener('scroll', animOnScroll);
// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window / innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			}

// 			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animOffset + animHeight)) {
// 				animItem.classList.add('_active');
// 			} else {
// 				animItem.classList.remove('_active');
// 			}
// 		}
// 	}
// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}
// 	animOnScroll();
// }

(function ($) {
	$(document).ready(function () {
		// Slider
		let position = 0;
		const slidesToShow = 4;
		const slidesToScroll = 1;
		const container = $('.slider__container');
		const track = $('.slider__track');
		const item = $('.slider__item');
		const btnPrev = $('.slider__prev');
		const btnNext = $('.slider__next');
		const itemsCount = item.length;
		const itemWidth = container.width() / slidesToShow;
		const movePosition = slidesToScroll * itemWidth;

		item.each(function (index, item) {
			$(item).css({
				minWidth: itemWidth,
			})
		})

		btnPrev.click(function () {
			const itemsLeft = Math.abs(position) / itemWidth
			position -= itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

			setPosition();
			checkBtns();
		})

		btnNext.click(function () {
			const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
			position += itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

			setPosition();
			checkBtns();
		})

		const setPosition = () => {
			track.css(function () {
				transform: `translateX(${position}px)`
			})
		}

		const checkBtns = () => {
			btnPrev.prop('disabled', position === 0);
			btnNext.prop('disabled', position <= -(itemsCount - slidesToShow) * itemWidth);
		};

		checkBtns();
	});
})(jQuery);
