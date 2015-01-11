if(!$(".tmline"))
$(function(){	

        var $window = $(window);
	var scrollTime = 1.2;
	var scrollDistance = 170;

	$window.on("mousewheel DOMMouseScroll .tmline", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});
var h=window.innerHeight;
$('.navbar').scrollupbar();
    $(document).ready(function(){
   // cache the window object
   $window = $(window);
 	
   		$('div[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
	   		var $scroll = $(this);
	                     
	      	$(window).scroll(function() {
	        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
	        var coords = '53% '+ yPos + 'px';
	        $scroll.css({ backgroundPosition: coords });    
      		}); 
   		}); 
	});
	 $(document).ready(function(){
   // cache the window object
   $window = $(window);
 	
   		$('div[data-type="background5"]').each(function(){
     // declare the variable to affect the defined data-type
	   		var $scroll = $(this);
	                     
	      	$(window).scroll(function() {
	        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
	        yPos-=60;
	        var coords = '53% '+ yPos + 'px';
	        $scroll.css({ backgroundPosition: coords });    
      		}); 
   		}); 
	});
	$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   		$('section[data-type="background1"]').each(function(){
     // declare the variable to affect the defined data-type
	   		var $scroll = $(this);
	                     
	      	$(window).scroll(function() {
	        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
	        yPos+=100;
	        var coords = '70% '+ yPos + 'px';
	        $scroll.css({ backgroundPosition: coords });    
      		}); 
   		}); 
	});
	$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   		$('div[data-type="background3"]').each(function(){
     // declare the variable to affect the defined data-type
	   		var $scroll = $(this);
	                     
	      	$(window).scroll(function() {
	        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
	        yPos+=400;
	        var coords = '50% '+ yPos + 'px';
	        $scroll.css({ backgroundPosition: coords });    
      		}); 
   		}); 
	});
	