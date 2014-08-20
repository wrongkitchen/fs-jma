// function of Daikin Online Shop

$(".banner img").ready(function(){	
	banner_init();					   
	
	$(".btn-container .btn-right").live("click",function(){
		if(!clicked)
		{
			banner_front();	
		}
	})
	$(".btn-container .btn-left").live("click",function(){
		if(!clicked)
		{
			banner_back();
		}
	})
	$(".timer-scrollbar-holder .clickable").live("click",function(){											  
		if(!clicked)
		{
			banner_select($(this).index());
		}
	})
});


var add;
var debugCounter;//unknow issus for missing one count

var banner ; //timer
var aniTimer;//timeline timer
var anicounter;

var photo_per_sec ;
var clicked = false;

function banner_init(){
	var long = ''
	var clickable = 100/$(".slideshow .banner li").length;
	var pos = 0;
	
	photo_per_sec = 5000 /*ms*/;
	
	for(var i=0; i < $(".slideshow .banner li").length; i++){
		pos = clickable * i;
		long += "<div class='clickable' style='width:" + clickable + "%;left:"+pos+"%;'>";
		long += "<div class='marker'></div><div class='timer-scrollbar-bg'></div><div class='timer-scrollbar'></div></div>";
	}
	$(".timer-scrollbar-holder").prepend(long);
	$(".timer-scrollbar-holder .clickable").first().addClass("current");
	
	add = (100 / (photo_per_sec/1000)) /10; 
	debugCounter = (100/photo_per_sec) * 100;
	timer();
}

function timer(){
	anicounter = debugCounter;
	banner = setInterval(function(){banner_front()},photo_per_sec);
	aniTimer = setInterval(function(){animateTimer()},100);
}
function stoptimer(){
	clearInterval(banner)
	clearInterval(aniTimer);
}
function animateTimer(){
	anicounter = anicounter + (100/photo_per_sec) * 100;
	$(".timer-scrollbar-holder .clickable.current .timer-scrollbar").animate({"width":""+anicounter+"%"},50);
}


function banner_front(){
	clicked = true;	
	stoptimer();
	
	var show = $(".slideshow .banner li.show");
	var next = $(".slideshow .banner li.show").next();
	
	var timerNext = $(".timer-scrollbar-holder .clickable.current").next();
	
	if(next.length == 0){
		next = $(".slideshow .banner li").first();
	}
	if(timerNext.length == 0){
		timerNext = $(".timer-scrollbar-holder .clickable").first();
	}

	if(next.hasClass("black")){
		$(".slideshow .btn-container").addClass("black").removeClass("white");
	}else 
	if(next.hasClass("white")){
		$(".slideshow .btn-container").addClass("white").removeClass("black");
	}

	next.addClass("next");
	next.show();
	
	show.fadeOut(500,function(){
		next.fadeIn(500,function(){
			show.removeClass("show");
			next.addClass("show").removeClass("next");	
			
			timerNext.prevAll().find(".timer-scrollbar").width("100%");
			timerNext.nextAll().find(".timer-scrollbar").width("0%");
			$(".timer-scrollbar-holder .clickable.current").removeClass("current");
			timerNext.addClass("current");

			clicked = false;
			timer();
		});					   					   
	});
}
function banner_back(){
	clicked = true;	
	stoptimer();
	
	var show = $(".slideshow .banner li.show");
	var next = $(".slideshow .banner li.show").prev();
	
	var timerNext = $(".timer-scrollbar-holder .clickable.current").prev();
	
	if(next.length == 0){
		next = $(".slideshow .banner li").last();
	}
	if(timerNext.length == 0){
		timerNext = $(".timer-scrollbar-holder .clickable").last();
	}
	
	if(next.hasClass("black")){
		$(".slideshow .btn-container").addClass("black").removeClass("white");
	}else 
	if(next.hasClass("white")){
		$(".slideshow .btn-container").addClass("white").removeClass("black");
	}
	
	next.addClass("next");
	next.show();
	
	show.fadeOut(500,function(){
		next.fadeIn(500,function(){
			show.removeClass("show");
			next.addClass("show").removeClass("next");
			
			timerNext.prevAll().find(".timer-scrollbar").width("100%");
			timerNext.nextAll().find(".timer-scrollbar").width("0%");
			$(".timer-scrollbar-holder .clickable.current").removeClass("current");
			timerNext.addClass("current");
			
			clicked = false;
			timer();
		});					   					   
	});
}

function banner_select(index){
	stoptimer();
	clicked = true;	
	
	var show = $(".slideshow .banner li.show");
	var next = $(".slideshow .banner li").eq(index);
	
	var timerShow = $(".timer-scrollbar-holder .clickable.current");
	var timerNext = $(".timer-scrollbar-holder .clickable").eq(index);
	
	if(next.hasClass("black")){
		$(".slideshow .btn-container").addClass("black").removeClass("white");
	}else 
	if(next.hasClass("white")){
		$(".slideshow .btn-container").addClass("white").removeClass("black");
	}
	
	if(show.index() !== next.index())
	{
		next.addClass("next");
		next.show();
		
		show.fadeOut(500,function(){
			next.fadeIn(500,function(){				 
				if(timerShow.index() !== timerNext.index())
				{
					$(".timer-scrollbar-holder .clickable.current").removeClass("current");
					timerNext.prevAll().find(".timer-scrollbar").width("100%");
					timerNext.nextAll().find(".timer-scrollbar").width("0%");
					timerNext.addClass("current");
				}
				
				show.removeClass("show");
				next.addClass("show").removeClass("next");
				clicked = false;
				timer();
			});					   					   
		});
	}else{
		timer();
		clicked = false;	
	}
}
