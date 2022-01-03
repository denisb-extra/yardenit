(function ( $ ) {
 


$.fn.simpleSlider = function() {
    
    var mainElement = this;

    var myTimeout = setTimeout(function(){
		nextImage();
	},3000);

	var curslideNum = 0;
	var num = 0;
	var animating = false;

	function nextImage() {
		num ++;

		if(num >= $(mainElement).find(".slide").length) num = 0;
		showImageNumber(num);
	}

	function showImageNumber(index) {
		if(animating) {
			return;
		}
		animating = true;
		clearTimeout(myTimeout);

		var curSlide = $(mainElement).find(".slide").eq(curslideNum);
		$(curSlide).animate({
		    right: "-70px",
		    opacity:0
		  }, 2000, "swing", function() {
		  		$(this).css({"display":"none"});
		  });

		showNextImage(index);
	}

	function showNextImage(index) {
		curslideNum = index;
		var curSlide = $(mainElement).find(".slide").eq(curslideNum);
		$(curSlide).css({"right":"-70px", "opacity": "0", "display":"block"});

		$(curSlide).animate({
		    right: "0",
		    opacity: 1
		  }, 2000, function() {
		  		animating = false;
		  		clearTimeout(myTimeout);
				myTimeout = setTimeout(function(){
					
			    	nextImage();
			    },3000, "swing");
		  });
	}
};


}( jQuery ));