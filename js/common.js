// function of Daikin Online Shop

var isMobile = false;
var w;

$(document).ready(function(){	
	w = $(window).width();

	/* init function */
	jam_event_init();
	productListItem_init();
	eventListItem_init();
	
	$(".event-items img").load(function(){
		eventHeight_init();
	})
	

	if($("html").find(".slider").length > 0)
	{
		$(".slider").photoslide();
	}
	/* init function */
	
	
	/* click function */
	$(".btn-search").click(function(){
			$(".search.desktop").toggleClass("open")
			$(".search-text").toggle();	
			$(".search-text").focus();							
	});
	$(".goldrate .holder").click(function(){
			$(this).toggleClass("open")
			$(".goldrate-content").toggle();
	})
	$(".details-holder").mouseenter(function(){
		$(this).parent().find(".details").stop().show(100);						   						   
	});
	$(".details-holder").mouseleave(function(){
		$(this).parent().find(".details").stop().delay(500).hide(100);
	});
	$(".activities-content li").mouseenter(function(){
		var temp = $(this).index() + 1;
		$(this).find(".bw").attr("src","../images/activities-img-"+ temp +".png");
	})
	$(".activities-content li").mouseleave(function(){
		var temp = $(this).index() + 1;
		$(this).find(".bw").attr("src","../images/activities-img-"+ temp +"_bw.png");
	})
	
	$(".btn-navbar").click(function(){
		if($(this).hasClass("opened"))
		{
			$(".navbar-container").slideUp(500);
			$(this).find("img").attr("src" , "../images/mobile/btn-navbar.png");
			$(this).removeClass("opened");
		}else
		{						
			$(".navbar-container").slideDown(500);
			$(this).find("img").attr("src" , "../images/mobile/btn-navbar-close.png");
			$(this).addClass("opened");
		}
	});
	var search_open = false;
	$(".member-selector .byproduct").click(function(){
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$("#byproduct").removeClass("hide");
		$("#byalphabetical").addClass("hide");
		$("#bysearch").addClass("hide");
		search_open = false;
	});
	$(".member-selector .byalpha").click(function(){
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$("#byproduct").addClass("hide");
		$("#byalphabetical").removeClass("hide");
		$("#bysearch").addClass("hide");
		search_open = false;
	});
	$(".member-selector .search-icon").click(function(){
	    $(".member-selector .selector").toggleClass("close");
		$(".member-selector .search-bar").toggleClass("open");
		$(".member-selector .search-icon").toggleClass("open");
		$(".member-selector .search-bar input").focus();
		if(!search_open)
		{
			$("#byproduct").addClass("hide");
			$("#byalphabetical").addClass("hide");
			$("#bysearch").removeClass("hide");
			search_open = true;
		}else
		{
			var check = $(".member-selector").find(".selected");
			if($(check).hasClass("byalpha"))
			{
				$("#byalphabetical").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
			if($(check).hasClass("byproduct"))
			{
				$("#byproduct").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
		}
	});
	$(".search-bar input[type='text']").focusin(function(){
		w = $(window).width();		
		if(w < 980)
		{
			$("#byalphabetical").addClass("hide");
			$("#byproduct").addClass("hide");
			$("#bysearch").removeClass("hide");
			search_open = true;
		}
	});
	$(".search-bar input[type='text']").focusout(function(){
		w = $(window).width();
		if(w < 980)
		{
			var check = $(".member-selector").find(".selected");
			if($(check).hasClass("byalpha"))
			{
				$("#byalphabetical").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
			if($(check).hasClass("byproduct"))
			{
				$("#byproduct").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
		}
	});
	$(".search-bar input[type='text']").keydown(function(event){
			$("#byalphabetical").addClass("hide");
			$("#byproduct").addClass("hide");
			$("#bysearch").removeClass("hide");
			search_open = true;												 
		 if ( event.which == 13 ) {
			event.preventDefault();
		 }
	})
	
	/******* news counter ********/
	var newscounter_t =0;
	var newscounter_m =0;
	var mobnews = $(".news-items .news-holder").length;
	var tabletnews = $(".news-items .news-holder").length / 2;
	$(".news-btn-holder .news-btn-left").click(function(){
		if(w > 640)
		{
			if(newscounter_t > 0)
			{
				$(".news-items").animate({"left" : "+=105%"});
				newscounter_t--;
				if(newscounter_t == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".news-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".news-btn-right").removeClass("dim");
				}
			}
		}else
		{
			if(newscounter_m > 0)
			{
				$(".news-items").animate({"left" : "+=105%"});
				newscounter_m--;
				if(newscounter_m == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".news-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".news-btn-right").removeClass("dim");
				}
			}
		}
	});
	$(".news-btn-holder .news-btn-right").click(function(){
		if(w > 640)
		{
			if(newscounter_t < tabletnews -1)
			{
				$(".news-items").animate({"left" : "-=105%"});
				newscounter_t++;
				if(newscounter_t == Math.floor(tabletnews))
				{
					$(this).addClass("dim");
					$(this).parent().find(".news-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".news-btn-left").removeClass("dim");
				}
			}
		}else
		{
			if(newscounter_m < mobnews -1)
			{
				$(".news-items").animate({"left" : "-=105%"});
				newscounter_m++;
				if(newscounter_m == Math.floor(mobnews-1))
				{
					$(this).addClass("dim");
					$(this).parent().find(".news-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".news-btn-left").removeClass("dim");
				}
			}
		}	
	});
	
	/******* event counter ********/
	var eventcounter_w =0;
	var eventcounter_t =0;
	var eventcounter_m =0;
	var mobevent = $(".event-items .event-holder").length;
	var tabletevent = $(".event-items .event-holder").length / 2;
	var deskevent = $(".event-items .event-holder").length / 3;
	$(".event-btn-holder .event-btn-left").click(function(){
		if(w > 980)
		{
			if(eventcounter_w > 0)
			{
				$(".event-items").animate({"left" : "+=105%"});
				eventcounter_w--;
				$(".event-list li").eq(eventcounter_w).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_w == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}
			}
		}else if(w > 640)
		{
			if(eventcounter_t > 0)
			{
				$(".event-items").animate({"left" : "+=104%"});
				eventcounter_t--;
				$(".event-list li").eq(eventcounter_t).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_t == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}
			}
		}else
		{
			if(eventcounter_m > 0)
			{
				$(".event-items").animate({"left" : "+=104%"});
				eventcounter_m--;
				$(".event-list li").eq(eventcounter_m).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_m == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-right").removeClass("dim");
				}
			}
		}
	});
	$(".event-btn-holder .event-btn-right").click(function(){
		
		if(w > 980)
		{
			if(eventcounter_w < deskevent -1)
			{
				$(".event-items").animate({"left" : "-=105%"});
				eventcounter_w++;
				$(".event-list li").eq(eventcounter_w).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_w == Math.floor(deskevent))
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}
			}
		}else if(w > 640)
		{
			if(eventcounter_t < tabletevent -1)
			{
				$(".event-items").animate({"left" : "-=104%"});
				eventcounter_t++;
				$(".event-list li").eq(eventcounter_t).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_t == Math.floor(tabletevent))
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}
			}
		}else
		{
			if(eventcounter_m < mobevent -1)
			{
				$(".event-items").animate({"left" : "-=104%"});
				eventcounter_m++;
				$(".event-list li").eq(eventcounter_m).addClass("selected").siblings().removeClass("selected");
				if(eventcounter_m == Math.floor(mobevent-1))
				{
					$(this).addClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".event-btn-left").removeClass("dim");
				}
			}
		}
	});
	$(".event-list li").live("click",function(){
		var count = $(".event-list li").length;
		eventcounter_w = $(this).index();
		eventcounter_t = $(this).index();
		eventcounter_m = $(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		if(w > 980)
		{	 
				$(".event-items").animate({"left" : "-"+eventcounter_w*105+"%"});
		}else if(w > 640)
		{	 
				$(".event-items").animate({"left" : "-"+eventcounter_t*104+"%"});
		}else{		 
				$(".event-items").animate({"left" : "-"+eventcounter_m*104+"%"});
		}
		
		if(eventcounter_w == 0 || eventcounter_t == 0 || eventcounter_m == 0)
		{
			$(".event-btn-holder .event-btn-left").addClass("dim");
		}
		if(eventcounter_w == count-1 || eventcounter_t == count-1 || eventcounter_m == count-1)
		{
			$(".event-btn-holder .event-btn-right").addClass("dim");
		}
		
	});
	
	/******* product counter ********/
	var productcounter_w =0;
	var productcounter_t =0;
	var productcounter_m =0;
	var mobproduct = $(".product-items li").length;
	var tabletproduct = $(".product-items li").length /4;
	var deskproduct = $(".product-items li").length / 5;
	var moveplace = 0;
	
	$(".product-btn-holder .product-btn-left").click(function(){
		if(w > 980)
		{
			if(productcounter_w > 0)
			{
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace + long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_w--;
				$(".product-list li").eq(productcounter_w).addClass("selected").siblings().removeClass("selected");
				if(productcounter_w == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}
				
			}
		}else if(w > 640)
		{
			if(productcounter_t > 0)
			{
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace + long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_t--;
				$(".product-list li").eq(productcounter_w).addClass("selected").siblings().removeClass("selected");
				if(productcounter_t == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}
			}
		}else
		{
			if(productcounter_m > 0)
			{
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace + long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_m--;
				$(".product-list li").eq(productcounter_m).addClass("selected").siblings().removeClass("selected");
				if(productcounter_m == 0)
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}else
				{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-right").removeClass("dim");
				}
			}
		}
		
	});
	$(".product-btn-holder .product-btn-right").click(function(){
		if(w > 980)
		{
			if(productcounter_w < deskproduct-1)
			{	
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace - long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_w++;
				$(".product-list li").eq(productcounter_w).addClass("selected").siblings().removeClass("selected");
				if(productcounter_w == Math.floor(deskproduct -1))
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}
			}
		}else if(w > 640)
		{
			if(productcounter_t < tabletproduct-1)
			{				
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace - long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_t++;
				$(".product-list li").eq(productcounter_t).addClass("selected").siblings().removeClass("selected");
				if(productcounter_t == Math.floor(tabletproduct -1))
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}
			}
		}else{
			if(productcounter_m < mobproduct-1)
			{			
				var marginR = parseFloat($(".product-items li").css("margin-right"));
				var totalW = parseFloat($(".product-container").css("width"));
				long = marginR/totalW*100;
				long = long.toFixed(); 
				long = parseFloat(long) + 100;
				moveplace = moveplace - long;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
				productcounter_m++;
				$(".product-list li").eq(productcounter_m).addClass("selected").siblings().removeClass("selected");
				if(productcounter_m == Math.floor(mobproduct -1))
				{
					$(this).addClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}else{
					$(this).removeClass("dim");
					$(this).parent().find(".product-btn-left").removeClass("dim");
				}
			}
		}
	});
	$(".product-list li").live("click",function(){
		var count = $(".product-list li").length;
		productcounter_w = $(this).index();
		productcounter_t = $(this).index();
		productcounter_m = $(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		if(w > 980)
		{	 
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = productcounter_w*long;
			$(".product-items").animate({"left" : "-"+moveplace+"%"});
		}if(w > 640)
		{	 
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = productcounter_t*long;
			$(".product-items").animate({"left" : "-"+moveplace+"%"});
		}else{	
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = productcounter_m*long;
			$(".product-items").animate({"left" : "-"+moveplace+"%"});
		}
		
		if(productcounter_w == 0 || productcounter_t == 0 || productcounter_m == 0)
		{
			$(".product-btn-holder .product-btn-left").addClass("dim");
		}
		if(productcounter_w == count-1 || productcounter_t == count-1 || productcounter_m == count-1)
		{
			$(".product-btn-holder .product-btn-right").addClass("dim");
		}
	});
	
	
	$(".product-showcase .product-items li").mouseenter(function(){
		$(this).find(".product-details").show(100);						   						   
	});
	$(".product-showcase .product-items li").mouseleave(function(){
		$(this).find(".product-details").delay(500).hide(100);						   						   
	});

	/*click function*/
	
	/*resize function*/
	$(window).bind('resize',onResize);
	function onResize(){
		w = $(window).width();
		if(w > 980)
		{
			clickEvent_reset();
		}
		navbarReset();
		memberListingReset();
		productListItem_init();
		eventListItem_init();
		eventHeight_init();
		resizeCalendar();
	}
	
	function clickEvent_reset(){
		$(".product-items").stop().animate({"left" : "0%"},function(){									 
		productcounter_w = 0;
		productcounter_t =0;
		productcounter_m = 0;
		moveplace = 0;
		$(".product-btn-holder .product-btn-left").addClass("dim");
		$(".product-btn-holder .product-btn-right").removeClass("dim");
		});
		$(".event-items").stop().animate({"left" : "0%"},function(){
		eventcounter_w =0;
		eventcounter_t =0;
		eventcounter_m =0;
		$(".event-btn-holder .event-btn-left").addClass("dim");
		$(".event-btn-holder .event-btn-right").removeClass("dim");
		});
		$(".news-items").stop().animate({"left" : "0%"},function(){
		newscounter_t =0;
	    newscounter_m =0;
		$(".news-btn-holder .news-btn-left").addClass("dim");
		$(".news-btn-holder .news-btn-right").removeClass("dim");
		});

	}
	function navbarReset(){
		w = $(window).width();
		if(w > 980)
		{
			$(".navbar-container").show();
		}else
		{
			$(".btn-navbar").find("img").attr("src" , "../images/mobile/btn-navbar.png");
			$(".navbar-container").hide();
		}
	}
	function memberListingReset(){
		w = $(window).width();
		if(w < 980)
		{
			$(".member-selector *").stop().removeClass("open close");
			var check = $(".member-selector").find(".selected");
			if($(check).hasClass("byalpha"))
			{
				$("#byalphabetical").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
			if($(check).hasClass("byproduct"))
			{
				$("#byproduct").removeClass("hide");
				$("#bysearch").addClass("hide");
				search_open = false;
			}
		}
	}

	/*resize function*/
	
	/* navbar */
	var hei;
	var idx;
	

	$("#menu li").mouseenter(function () {
		idx = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(".menu-lv2-holder").stop().delay(200).addClass("open").siblings().removeClass("open");
		$(".menu-lv2").eq(idx).addClass("open").siblings().removeClass("open");
		hei = $(".menu-lv2").eq(idx).outerHeight(true);
		if(idx == 1 || idx == 4 || idx == 5 || idx == 6){
			hei = 0;
		}
		$(".menu-lv2-holder").stop().animate({ height: hei + "px" });
	})
	$(".menu-lv2-holder").mouseenter(function () {
		$("#menu li").eq(idx).addClass('selected').siblings().removeClass('selected');
		$(".menu-lv2-holder").eq(idx).stop().delay(200).addClass("open").siblings().removeClass("open");
		$(".menu-lv2").eq(idx).addClass("open").siblings().removeClass("open");
		hei = $(".menu-lv2").eq(idx).outerHeight(true);
		$(".menu-lv2-holder").stop().animate({ height: hei + "px" });
	})
	$('#menu li, .menu-lv2-holder').mouseleave(function () {
		$(".menu-lv2-holder").stop().delay(200).removeClass("open");
		$(".menu-lv2").removeClass("open");
		$(".menu-lv2-holder").stop().animate({ height: 0 });
		$("#menu li").removeClass('selected');
	});
	/* navbar */

	
	/*init event*/
	function jam_event_init(){
		$(".month-item").each(function(){
			if($(this).find(".event-detail").length > 0){
				$(this).addClass("openable");
			}
		})
	}
	$(".openable").click(function(){
			$(this).find(".event-detail").click(function(){
				$(this).hide();	
				$(this)	.parent().removeClass("open");
			});
			$(this)	.toggleClass("open");
			$(this).find(".event-detail").toggle();
		})
	
	function productListItem_init(){
		w = $(window).width();
		var longthing = '';
		if(w > 980)
		{
			var desktoplong = $(".product-items li").length / 5
			for(var i=0;i< desktoplong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".product-list").html(longthing);
			$(".product-list li").first().addClass("selected");
			clickEvent_reset();
		}else if(w > 640)
		{
			var tablettoplong = $(".product-items li").length / 4
			for(var i=0;i< tablettoplong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".product-list").html(longthing);
			$(".product-list li").first().addClass("selected");
			clickEvent_reset();
		}else{
			var moblong = $(".product-items li").length;
			for(var i=0;i< moblong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".product-list").html(longthing);
			$(".product-list li").first().addClass("selected");
			clickEvent_reset();
		}
	}
	function eventListItem_init(){
		w = $(window).width();
		var longthing = '';
		if(w > 980)
		{
			var desktoplong = $(".event-items .event-holder").length / 3
			for(var i=0;i< desktoplong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".event-list").html(longthing);
			$(".event-list li").first().addClass("selected");
			clickEvent_reset();
		}else if(w > 640)
		{
			var tablettoplong = $(".event-items .event-holder").length / 2
			for(var i=0;i< tablettoplong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".event-list").html(longthing);
			$(".event-list li").first().addClass("selected");
			clickEvent_reset();
		}else{
			var moblong = $(".event-items .event-holder").length;
			for(var i=0;i< moblong ;i++){
				longthing += '<li><a href="javascript:void(0);"></a></li>';
			}
			$(".event-list").html(longthing);
			$(".event-list li").first().addClass("selected");
			clickEvent_reset();
		}
	}
	function eventHeight_init(){	   		
		$(".event-items .event-holder").css({"height" : "auto"});
		var temp = 0;
		var highest = 0;
		$(".event-items .event-holder").each(function(){
			temp = $(this).height();
			if(highest < temp)
			{
				highest = temp;
			}
		})
		$(".event-items .event-holder").height(highest);
	}
	
	
	/*init event*/
	
	
	/*calendar event*/
	var eventDates = {};
	eventDates[new Date('09/03/2014')] = new Date('09/03/2014');
	eventDates[new Date('09/05/2014')] = new Date('09/05/2014');
	eventDates[new Date('09/23/2014')] = new Date('09/23/2014');
	eventDates[new Date('09/25/2014')] = new Date('09/25/2014');
	eventDates[new Date('07/30/2014')] = new Date('07/30/2014');
	eventDates[new Date('08/07/2014')] = new Date('08/07/2014');
	eventDates[new Date('08/10/2014')] = new Date('08/10/2014');
	
	var highlightDate = {};
	highlightDate[new Date('09/26/2014')] = new Date('09/26/2014');

	$('.calendar').datepicker({
		beforeShowDay: function(date) {
			var eventday = eventDates[date];
			var highlightday = highlightDate[date];
			
			if (eventday) {
				return [true, "date-event", eventday];//[selectable area? / CSS / array date]
			}else if(highlightday){
				return [true, "date-highlight", highlightday];
			}
			else{
				return [true, '', ''];
			}
		},
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: 0,
		dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
	});
	resizeCalendar();
	function resizeCalendar(){
		w = $(window).width();
		if(w > 980)
		{
			$( ".calendar" ).datepicker( "option", "dayNamesMin", [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ] );
		}else if(w < 980){
			$( ".calendar" ).datepicker( "option", "dayNamesMin", [ "S", "M", "T", "W", "T", "F", "S" ] );
		}
	}
	
	/*calendar event*/
});

