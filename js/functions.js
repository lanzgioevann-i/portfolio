/*PRE LOADER*/
$(window).load(function() {
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
		
	setTimeout(function(){
		$('#content').addClass("content-show");
		$('#content').removeClass("content-hide");
	}, 1200);
});
/*
document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(1700).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(1700)
		.fadeOut();
		
	setTimeout(function(){
		$('#content').addClass("content-show");
		$('#content').removeClass("content-hide");
	}, 1200);
});
*/
/* NAV BAR */
function navshow(){
	//nav show
	var window_top = $(window).scrollTop();
	var div_top = $('#nav-line').offset().top;
	/*
	*/
	if(window_top > div_top){ 
		$('#navbar').addClass('shownav');
		$('#navbar').removeClass('hidenav');
	}
	else{
		$('#navbar').removeClass('shownav');
		$('#navbar').addClass('hidenav');
	}
}

function skillshow(){
	//skill show
	var window_top = $(window).scrollTop();
	var div_top = $('#skill-line').offset().top;
	/*
	*/
	if(window_top > div_top){
		$('#skill-cs').addClass('skill-cs');
		$('#skill-java').addClass('skill-java');
		$('#skill-sql').addClass('skill-sql');
		$('#skill-ps').addClass('skill-ps');
		$('#skill-vegas').addClass('skill-vegas');
		$('#skill-html').addClass('skill-html');
		$('#skill-css').addClass('skill-css');
		$('#skill-js').addClass('skill-js');	
		
		$('.skill-percent').addClass('sp-visible');
	}
}

$(function() { 
  $(window).scroll(navshow);
  $(window).scroll(skillshow);
});

/* PARALLAX */
$(document).ready(function(){
  $('.parallax').parallax();
});

/* HEADER */
jQuery(document).ready(function($){
 // Defining a function to set size for #hero 
	function fullscreen(){
		jQuery('#hero').css({
            width: jQuery(window).width(),
            height: jQuery(window).height()
        });
	}
  
	fullscreen();

  // Run the function in case of window resize
  jQuery(window).resize(function() {
       fullscreen();         
    });

});
