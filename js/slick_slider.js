        $(document).ready(function(){
            $('.slick-slider').slick({
                  slidesToShow: 1,
				  slidesToScroll: 1,
				  autoplay: true,
				  autoplaySpeed: 8000,
				  arrows: true,
				  dots: true,
				infinite: true,
				speed: 800,
				fade: true,
				slide: 'div',
				cssEase: 'linear'
			});
        });