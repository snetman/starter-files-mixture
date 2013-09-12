// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){


/* trigger when page is ready */
$(document).ready(function (){

/* =======================================================
    Carousel
   ======================================================= */

	/*
	$('.carousel').carousel({
    	interval: false
    });
    */

/* =======================================================
    Toggle responsive nav
   ======================================================= */

  $menu = $('.menu'),
  $menulink = $('#menu-link');
  
  $menulink.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
    return false;
  });

});

/* =======================================================
    Toggles
   ======================================================= */
   
  $toggles = $('.toggle');
  $toggletargets = $('.toggle-target');
  
  $toggles.on('click', function(event) {
    
    event.preventDefault(); // Prevent the default behavior so the page doesn't jump
    
    if ($(this).hasClass('is-active')) { // If the clicked toggle is currently active...
            
      $(this).removeClass('is-active'); // De-activate the clicked toggle
      var target = $(this).attr('href'); // Get the target
      $(target).removeClass('is-active'); // De-activate the target
    
    } else { // If the clicked toggle is not currently active...
      
      $toggles.removeClass('is-active'); // De-activate all toggles in case another is active
      $(this).addClass('is-active'); // Activate the clicked toggle
      $toggletargets.removeClass('is-active'); // De-activate all targets
      var target = $(this).attr('href'); // Get the new target
      $(target).addClass('is-active'); // Make the new target active
      
    }
    
  });

/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/


})(window.jQuery);