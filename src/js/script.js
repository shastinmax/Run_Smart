
$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	});
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog__content-item').eq(i).toggleClass('catalog__content-item_active');
				$('.catalog__content-list').eq(i).toggleClass('catalog__content-list_active');
			})
		});
	};

	toggleSlide('.catalog__link');
	toggleSlide('.catalog__link-back');
	//modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay,#consultation').fadeIn()
	})
	$('.modal__close').on('click', function () {
		$('.overlay,#consultation,#thanks,#order').fadeOut()
	})
	$('.button_buy').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__desc').text($('.catalog__subtitle').eq(i).text())
			$('.overlay,#order').fadeIn()
		})
	})
});

const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		this.el.classList.remove('btn-up_hide');
	},
	hide() {
		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			scrollY > 400 ? this.show() : this.hide();
		});
		document.querySelector('.btn-up').onclick = () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();
