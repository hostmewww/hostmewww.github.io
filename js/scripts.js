/*----------------------------------------------------*/
/*	REMOVE PRELOADER
/*----------------------------------------------------*/
$(document).ready(function() {
	$('#preload-spinner').remove()
});


/*----------------------------------------------------*/
/*	SCCROLL NAVBAR
/*----------------------------------------------------*/
$(window).scroll(function() {
	"use strict";
	var b = $(window).scrollTop();
	if (b > 100) {
		$(".scroll-nav").addClass("scroll-fixed-nav");
	} else {
		$(".scroll-nav").removeClass("scroll-fixed-nav");
	}
});


/*----------------------------------------------------*/
/*	WOW ANIMATION
/*----------------------------------------------------*/
$(window).load(function() {
	var wow = new WOW({
		mobile: false
	});
	wow.init();
});



/*----------------------------------------------------*/
/*	PRETTYPHOTO LIGHTBOX
/*----------------------------------------------------*/
$(document).ready(function() {
	"use strict";
	$("a[class^='prettyPhoto']").prettyPhoto();
});



/*----------------------------------------------------*/
/*	TESTIMONIAL SLIDER
/*----------------------------------------------------*/
$('#testimonial-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	draggable: false,
	fade: true,
	asNavFor: '#testimonial-carousel'
});



/*----------------------------------------------------*/
/*	TESTIMONIAL CAROUSEL
/*----------------------------------------------------*/
$('#testimonial-carousel').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '#testimonial-slider',
	dots: false,
	arrows: false,
	centerMode: true,
	autoplay: true,
	focusOnSelect: true,
	centerPadding: '10px',
	responsive: [{
		breakpoint: 640,
		settings: {
			dots: false,
			autoplay: true,
			slidesToShow: 3,
			centerPadding: '0px',
		}
	}, {
		breakpoint: 575,
		settings: {
			autoplay: true,
			dots: false,
			slidesToShow: 1,
			centerMode: true,
		}
	}]
});



/*----------------------------------------------------*/
/*	SCROLL TO TOP
/*----------------------------------------------------*/
$(document).ready(function() {
	$(function() {
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			scrollDistance: 300, // Distance from top/bottom before showing element (px)
			scrollFrom: 'top', // 'top' or 'bottom'
			scrollSpeed: 750, // Speed back to top (ms)
			easingType: 'linear', // Scroll to top easing (see http://easings.net/)
			animation: 'fade', // Fade, slide, none
			animationSpeed: 200, // Animation speed (ms)
			scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
			scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
			scrollText: '<i class="fa fa-chevron-up"></i>', // Text for element, can contain HTML
			scrollTitle: false, // Set a custom <a> title if required.
			scrollImg: false, // Set true to use image
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			zIndex: 2147483647 // Z-Index for the overlay
		});
	});
});



/*----------------------------------------------------*/
/*	ONE PAGE NAV
/*----------------------------------------------------*/
$(document).ready(function() {
	$('#nav').onePageNav({
		currentClass: 'current-nav',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
			//I get fired when the animation is starting
		},
		end: function() {
			//I get fired when the animation is ending
		},
		scrollChange: function($currentListItem) {
			//I get fired when you enter a section and I pass the list item of the section
		}
	});
});


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/*---------------------------------------*/
/*	SIGNUP FORM
/*---------------------------------------*/
$("#signup-form").submit(function(e) {
        e.preventDefault();
        var name = $("#sf-name").val();
        var email = $("#sf-email").val();
        var phone = $("#sf-phone").val();
        var sku = getParameterByName('product');

        var dataString = 'fullname=' + name + '&email=' + email+ '&phone=' + phone + '&utm_source=website&utm_medium=form&utm_campaign=signup&product=' + sku;
        var msg = 'Customer ' + name + ' wth email ' + email + ' and phone ' + phone + ' signed up for ' + sku;

        $.ajax({
                type: "POST",
                url: "https://slack.com/api/chat.postMessage?token=xoxp-3918065660-3918155500-4101602308-16adaf&channel=%23customers&text="+msg+"&pretty=1",
                data: dataString
                }
            );

        //ga('send', 'event', 'button', 'click', 'signup', 1);

        if (email.length > 1 && (name.length > 1)) {
            window.location.replace("http://panel.hostmeapp.com/#/signup?" + dataString);
        } else {
            $('.email-error').fadeIn(1000);
            $('.email-success').fadeOut(500);
        }
        return false;
    });
