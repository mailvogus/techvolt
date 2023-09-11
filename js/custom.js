(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        /*
       Jquery sidebar Toggle
       ============================*/
        $(".te-mobile-menu-toggle-btn").on("click", function () {
            $(".te-menu-sidebar-area").addClass("active");
            $(".te-body-overlay").addClass("active");
        });
        $(".te-menu-sidebar-close-btn").on("click", function () {
            $(".te-menu-sidebar-area").removeClass("active");
            $(".te-body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".te-body-overlay").on("click", function () {
            $(".te-menu-sidebar-area").removeClass("active");
            $(".te-body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        // const body = document.body;
        // const html = document.documentElement;
        // const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        // if( height  > 1400 ) {
        //     const nav = $(".te-header-menu-area.te-sticky-header");
        //     let scrolled = false;
        //     $(window).scroll(function () {
        //         if (160 < $(window).scrollTop() && !scrolled) {
        //             nav
        //                 .addClass("te-sticky_menu animated fadeIn")
        //                 .animate({"margin-top": "0px"});
        //             scrolled = true;
        //         }
        //         if (160 > $(window).scrollTop() && scrolled) {
        //             nav.removeClass("te-sticky_menu animated fadeIn").css("margin-top", "0px");
        //             scrolled = false;
        //         }
        //     });
        // }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .te-post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progressbar').one('inview', function(event, isInView) {
            if (isInView) {
                $('.progress-inner').each(function() {
                    $(this).find('.progress-content').animate({
                        width:$(this).attr('data-percentage')
                    },2000);

                    $(this).find('.progress-number-count').animate(
                        {left:$(this).attr('data-percentage')},
                        {
                            duration: 2000,
                            step: function(now) {
                                let data = Math.round(now);
                                $(this).find('.progress-percent').html(data + '%');
                            }
                        });
                });

            }
        });

        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='te-info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='te-info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Team Slider
       ============================*/
        $("#team_slider_wrapper").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        $('#team_slider_prev').on('click', function(e) {
            e.preventDefault();
            $('.slick-prev').trigger('click');
        });
        $('#team_slider_next').on('click', function(e) {
            e.preventDefault();
            $('.slick-next').trigger('click');
        });
        /*
       Testimonial Slider
       ============================*/
        $("#home3_testimonial").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                }
            ],
        });


        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_one").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                }
            ],
        });

        $('#testimonial_slider_prev').on('click', function(e) {
            e.preventDefault();
            $('.slick-prev').trigger('click');
        });
        $('#testimonial_slider_next').on('click', function(e) {
            e.preventDefault();
            $('.slick-next').trigger('click');
        });

        /*
       Testimonial Slider Two
       ============================*/
       $("#testimonial_two").slick({
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        draggable: true,
        arrows: true,
        slidesToScroll: 2,
        loop: true,
        dots: true,
        speed: 1500,
        variableWidth:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                },
            }
        ],
    });
        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".te-scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });

        /*
		Portfolio Isotope Js
		============================*/	 
		$('.te-portfolio-filter').on( 'click', 'li', function() {
            $("li").removeClass("active");
            $(this).addClass("active");			
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });				
            var $grid = $('.te-portfolio-isotope-wrapper').isotope({
              itemSelector: '.te-single-isotop',
              percentPosition: true,
              masonry: {
                columnWidth: '.te-single-isotop'
              }
            })
        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
        });

    });
})(jQuery);
