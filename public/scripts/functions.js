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

  $('#Fader').easyFader({
    autoCycle: false,
    slideDur: 7000,
		effectDur: 500
  });
  /* For other styles of carousel, these are the init functions */
  /*
  $('#Slider').easyFader({
  	effect: 'slide'
  });
  $('#Carousel').easyFader({
  	effect: 'carousel'
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
    Tabs
   ======================================================= */
   
  $tabs = $('.tab');
  $tabtargets = $('.tab-target');
  
  $tabs.on('click', function(event) {
    
    event.preventDefault(); // Prevent the default behavior so the page doesn't jump
    
    if ($(this).hasClass('is-active')) { // If the clicked tab is currently active...
            
      $(this).removeClass('is-active'); // De-activate the clicked tab
      var target = $(this).attr('href'); // Get the target
      $(target).removeClass('is-active'); // De-activate the target
    
    } else { // If the clicked toggle is not currently active...
      
      $tabs.removeClass('is-active'); // De-activate all tabs in case another is active
      $(this).addClass('is-active'); // Activate the clicked tab
      $tabtargets.removeClass('is-active'); // De-activate all tab targets
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