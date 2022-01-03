(function ( $ ) {
 


$.fn.counters = function() {
	var mainElement = this;
	var sign = "";
	$(mainElement).find('.counter-value').each(function() {
		var $this = $(this);
		countTo = $this.attr('data-count');
		sign = $this.attr('data-sign');
		$this.find(".num").text(countTo);
		$this.find(".num").text(0);
	});
    var scrollHandlerCounters = function(){
		  var oTop = $(mainElement).offset().top - window.innerHeight;
		  if ($(window).scrollTop() > oTop) {
			$(mainElement).find('.counter-value').each(function() {
			  var $this = $(this),
				countTo = $this.attr('data-count');
			  $({
				countNum: $this.find(".num").text()
			  }).animate({
				  countNum: countTo
				},

				{
				  duration: 2000,
				  easing: 'swing',
				  step: function() {
					  	var text = numberWithCommas(Math.floor(this.countNum));
						if(sign) text += sign;
						$this.find(".num").text(text);
				  },
				  complete: function() {
						var text = numberWithCommas(Math.floor(this.countNum));
						if(sign) text += sign;
						$this.find(".num").text(text);
				  }

				});
			});
			$(window).off("scroll", scrollHandlerCounters);
		  }
	}

	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	scrollHandlerCounters();

	$(window).scroll(scrollHandlerCounters);

};


}( jQuery ));