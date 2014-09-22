// JavaScript Document

;(function($) {
    $.fn.photoslide = function() {
		var slideTotal = [];
		var slideNum = [];
		var timer = [];
		var temp = 0;
		
		photoSliderInit = function(){
			var container = this;
			for(var i=0;i<$(container).find(".slider-container li").length;i++){
				$(container).find(".slider-list").append('<li><a href="javascript:void(0);"></a></li>');
			}
			if($(container).find(".slider-container li").length == 1)
			{
				$(container).find(".slider-list").hide();
			}

			$(container).find(".slider-list li").first().addClass("selected");
			$(container).find(".slider-list").attr("rel" , temp);

			slideNum[temp] = 0;
			slideTotal[temp] = $(container).find(".slider-container li").length;
			timer[temp] = setInterval(photoSlide,5000);
			photoSlide(container,temp);
			temp++;
		};
		
		photoSlide = function(container,temp){
			clearInterval(timer[temp])
			$(container).find('.slider-list li').unbind('click',sliderClick);
			$(container).find('.slider-list li').eq(slideNum[temp]).addClass("selected").siblings().removeClass("selected")
			$(container).find(".slider-container").stop().animate({"left" : "-"+slideNum[temp]*$(container).find('.slider-container li').width()},1000,function(){
				slideNum[temp] = slideNum[temp] + 1;
				
				if(slideNum[temp] > slideTotal[temp] - 1)
				{
					slideNum[temp] = 0;
				}
				$(container).find('.slider-list li').bind('click',sliderClick);
				timer[temp] = setInterval(function (){photoSlide(container,temp); return false;},5000);
			});
		}
		
		sliderClick = function(){
			var temp = $(this).parent().attr("rel");
			slideNum[temp] = $(this).index();
			photoSlide($(this).parent().parent(),temp);
			return false;
		}
		
		btnLeft = function(){
			var temp = $(this).parent().attr("rel");
			slideNum[temp] = slideNum[temp] - 1;
			photoSlide($(this).parent().parent(),temp);
			return false;
		}
		
		btnRight = function(){
			var temp = $(this).parent().attr("rel");
			slideNum[temp] = slideNum[temp] + 1;
			photoSlide($(this).parent().parent(),temp);
			return false;
		}

		return this.each(
        	photoSliderInit
    	);
    };
})(jQuery);