$(document).ready(function()
{
	 $('.featured_reviews_row_alternative').slick({
		  dots: true,
		  arrows: false,
		  infinite: true,
		  speed: 500,
		  autoplay: true,
		  autoplaySpeed: 3500,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  responsive: [
		    {
		      breakpoint: 1170,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        appendDots: $(".featured_review_image")
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});

	 $('.featured_reviews_row_alternative').on('afterChange', function(slick, currentSlide)
	 {
	 	// currentSlide.$dots.children().removeClass('slick-active');
	 	$($(currentSlide.$dots[currentSlide.currentSlide]).children()[currentSlide.currentSlide]).addClass('slick-active');
	 });

});
