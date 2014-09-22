// function of Daikin Online Shop

var isMobile = false;
var w;

$(document).ready(function(){	
	w = $(window).width();

	/* init function */
	navbarReset()
	jam_event_init();
	productListItem_init();
	eventListItem_init();
	selectboxChange();

	$(".scrollable").each(function(){
		$(this).mCustomScrollbar({advanced:{autoExpandHorizontalScroll:true}});
	})

	$(".scrollable-x").each(function(){
		$(this).mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:true}});

		w = $(window).width();	
		if(w < 640)
		{
			$(".goldrate-overflow").mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:true}});
		}else{
			$(".goldrate-overflow").mCustomScrollbar("destroy");
		}

	})
	
	$(".event-items img").load(function(){
		eventHeight_init();
	})
	

	if($("html").find(".slider").length > 0)
	{
		$(".slider").photoslide();
	}
	/* init function */
	
	
	/* click function */
	var home_search = false
	$(".btn-search").click(function(){
		$(".menu-lv2-holder").toggleClass("open");

		if($(".menu-lv2-holder").hasClass("open")){
			$(".menu-lv2-holder").animate({"height" : "86px"});
			$("#search-container").addClass("open")
			home_search = true;

		}else{
			$(".menu-lv2-holder").animate({"height" : "0px"});
			$("#search-container").removeClass("open")
		}
	});




	$(".goldrate-toggle").click(function(){
			$(this).parent().toggleClass("open")
			w = $(window).width();	

			if(w < 640)
			{
				$(".goldrate-overflow").mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:true}});
			}else{
				$(".goldrate-overflow").mCustomScrollbar("destroy");
			}

	})
	$(".details-holder").mouseenter(function(){
		$(this).parent().find(".details").stop().animate({"bottom" : "0px"},500);				   						   
	});
	$(".details-holder").mouseleave(function(){
		$(this).parent().find(".details").stop().animate({"bottom" : "-200px"},500);
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
			li_lv2Leave();
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

	$(".btn-tab").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".tab").hide();
		var temp = $(this).attr("id");
		$("."+temp).show();
	})

	$(".industry-header").click(function(){
		$(this).toggleClass("open");
		$(this).parent().find(".industry-content").toggleClass("open");
	})
	
	/******* news counter ********/
	var newscounter_t =0;
	var newscounter_m =0;
	var mobnews = $(".news-items .news-holder").length;
	var tabletnews = $(".news-items .news-holder").length / 2;
	var tabletnewsModulus = $(".news-items .news-holder").length % 2;
	$(".news-btn-holder .news-btn-left").click(function(){
		if(w > 640)
		{
			if(newscounter_t > 0)
			{
				
				if(newscounter_t-1 == 0 && tabletnewsModulus !== 0)
				{
					$(".news-items").animate({"left" : "0%"});
				}else
				{
				 	$(".news-items").animate({"left" : "+=105%"});
				}

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

				if(newscounter_t+1 == Math.floor(tabletnews) && tabletnewsModulus !== 0)
				{
					var temp = (47.5+5) * tabletnewsModulus;
					$(".news-items").animate({"left" : "-="+temp+"%"});
				}else
				{
					$(".news-items").animate({"left" : "-=105%"});
				}

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
	var deskeventModulus = $(".event-items .event-holder").length % 3;
	var tableteventModulus = $(".event-items .event-holder").length % 2;
	$(".event-btn-holder .event-btn-left").click(function(){
		if(w > 980)
		{
			if(eventcounter_w > 0)
			{

				if(eventcounter_w-1 == 0 && deskeventModulus !== 0)
				{
					$(".event-items").animate({"left" : "0%"});
				}else
				{
				 	$(".event-items").animate({"left" : "+=105%"});
				}

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

				if(eventcounter_t-1 == 0 && tableteventModulus !== 0)
				{
					$(".event-items").animate({"left" : "0%"});
				}else
				{
				 	$(".event-items").animate({"left" : "+=104%"});
				}

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
				if(eventcounter_w+1 == Math.floor(deskevent) && deskeventModulus !== 0)
				{
					var temp = (30+5) * deskeventModulus;
					$(".event-items").animate({"left" : "-="+temp+"%"});
				}else
				{
					$(".event-items").animate({"left" : "-=105%"});
				}

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
				if(eventcounter_t+1 == Math.floor(tabletevent) && tableteventModulus !== 0)
				{
					var temp = (48+4) * tableteventModulus;
					$(".event-items").animate({"left" : "-="+temp+"%"});
				}else
				{
					$(".event-items").animate({"left" : "-=104%"});
				}

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
		$(".event-btn-holder .event-btn-left").removeClass("dim");
		$(".event-btn-holder .event-btn-right").removeClass("dim");
		if(w > 980)
		{	 
			if(eventcounter_w == Math.floor(deskevent) && deskeventModulus !== 0)
			{
				var temp = (eventcounter_w-1)*105 + (30+5) * deskeventModulus;
				$(".event-items").animate({"left" : "-"+temp+"%"});
			}else if(eventcounter_w == 0 && deskeventModulus !== 0)
			{
				$(".event-items").animate({"left" : "-"+eventcounter_w*105+"%"});
			}else{
				$(".event-items").animate({"left" : "-"+eventcounter_w*105+"%"});
			}
		}else if(w > 640)
		{	 
			if(eventcounter_t == Math.floor(tabletevent) && tableteventModulus !== 0)
			{
				var temp = (eventcounter_t-1)*104 + (48+4) * tableteventModulus;
				$(".event-items").animate({"left" : "-"+temp+"%"});
			}else if(eventcounter_t == 0 && tableteventModulus !== 0)
			{
				$(".event-items").animate({"left" : "-"+eventcounter_t*104+"%"});
			}else{
				$(".event-items").animate({"left" : "-"+eventcounter_t*104+"%"});
			}
		}else{		 
				$(".event-items").animate({"left" : "-"+eventcounter_m*104+"%"});
		}
		
		if(eventcounter_w == 0 || eventcounter_t == 0 || eventcounter_m == 0)
		{
			$(".event-btn-holder .event-btn-left").addClass("dim");
			$(".event-btn-holder .event-btn-right").removeClass("dim");
		}
		if(eventcounter_w == count-1 || eventcounter_t == count-1 || eventcounter_m == count-1)
		{
			$(".event-btn-holder .event-btn-left").removeClass("dim");
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
	var tabletproductModulus = $(".product-items li").length % 4;
	var deskproductModulus = $(".product-items li").length % 5;
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

				if(productcounter_w-1 == 0 && deskproductModulus !== 0)
				{
					moveplace = 0;
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}else
				{
				 	$(".product-items").animate({"left" : ""+moveplace+"%"});
				}

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

				if(productcounter_t-1 == 0 && tabletproductModulus !== 0)
				{
					moveplace = 0;
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}else
				{
				 	$(".product-items").animate({"left" : ""+moveplace+"%"});
				}

				productcounter_t--;
				$(".product-list li").eq(productcounter_t).addClass("selected").siblings().removeClass("selected");
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

				if(productcounter_w+1 == Math.round(deskproduct) && deskproductModulus !== 0)
				{
					moveplace = moveplace + long;
					var li_w = parseFloat($(".product-items li").css("width"));
					var temp = ((li_w/totalW*100)+(marginR/totalW*100)) * deskproductModulus;
					moveplace = moveplace - temp
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}else
				{
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}

				productcounter_w++;
				$(".product-list li").eq(productcounter_w).addClass("selected").siblings().removeClass("selected");
				if(productcounter_w == Math.round(deskproduct))
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

				if(productcounter_t+1 == Math.round(tabletproduct) && tabletproductModulus !== 0)
				{
					moveplace = moveplace + long;
					var li_w = parseFloat($(".product-items li").css("width"));
					var temp = ((li_w/totalW*100)+(marginR/totalW*100)) * tabletproductModulus;
					moveplace = moveplace - temp
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}else
				{
					$(".product-items").animate({"left" : ""+moveplace+"%"});
				}

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
		$(".product-btn-holder .product-btn-left").removeClass("dim");
		$(".product-btn-holder .product-btn-right").removeClass("dim");
		if(w > 980)
		{	 
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = -productcounter_w*long;

			if(productcounter_w == Math.round(deskproduct) && deskproductModulus !== 0)
			{
				var li_w = parseFloat($(".product-items li").css("width"));
				moveplace = -((productcounter_w-1)*long) - ((li_w/totalW*100)+(marginR/totalW*100)) * deskproductModulus;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}else if(productcounter_w == 0 && deskproductModulus !== 0)
			{
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}else{
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}

		}else if(w > 640)
		{	 
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = -productcounter_t*long;
			
			if(productcounter_t == Math.round(tabletproduct) && tabletproductModulus !== 0)
			{
				var li_w = parseFloat($(".product-items li").css("width"));
				moveplace = -((productcounter_w-1)*long) - ((li_w/totalW*100)+(marginR/totalW*100)) * tabletproductModulus;
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}else if(productcounter_t == 0 && tabletproductModulus !== 0)
			{
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}else{
				$(".product-items").animate({"left" : ""+moveplace+"%"});
			}


		}else{	
			var marginR = parseFloat($(".product-items li").css("margin-right"));
			var totalW = parseFloat($(".product-container").css("width"));
			long = marginR/totalW*100;
			long = long.toFixed(); 
			long = parseFloat(long) + 100;
			moveplace = -productcounter_m*long;
			$(".product-items").animate({"left" : ""+moveplace+"%"});
		}
		
		if(productcounter_w == 0 || productcounter_t == 0 || productcounter_m == 0)
		{
			$(".product-btn-holder .product-btn-left").addClass("dim");
			$(".product-btn-holder .product-btn-right").removeClass("dim");
		}
		if(productcounter_w == count-1 || productcounter_t == count-1 || productcounter_m == count-1)
		{
			$(".product-btn-holder .product-btn-right").addClass("dim");
			$(".product-btn-holder .product-btn-left").removeClass("dim");
		}
	});
	
	
	$(".product-showcase .product-items li").mouseenter(function(){
		$(this).find(".product-details").stop().animate({"bottom" : "0px"},500);						   						   
	});
	$(".product-showcase .product-items li").mouseleave(function(){
		$(this).find(".product-details").stop().animate({"bottom" : "-200px"},500);					   						   
	});

	$(".year-selector select").change(function(){
		$("body").scrollTo("#"+$(this).attr("value"),1000,{easing:'easeInSine',onAfter:function(){
			$(".btn-scrolltop").fadeIn(1000)
		}})	
	})
	$(".history-selector select").change(function(){
		$("body").scrollTo("#"+$(this).attr("value"),1000,{easing:'easeInSine',onAfter:function(){
			$(".btn-scrolltop").fadeIn(1000)
		}})	
	})
	$(".btn-scrolltop").click(function(){
		$.scrollTo(0,2000,{easing:'easeInSine',onAfter:function(){
			$(".btn-scrolltop").fadeOut(1000)
		}})
	})

	$(window).bind('scroll',checkScroll);

	function checkScroll(){
		if($(window).scrollTop() >= 720)
		{
			$(".btn-scrolltop").fadeIn(1000);
		}else{
			$(".btn-scrolltop").fadeOut(1000);
		}


		if($(window).scrollTop() >= $("#footer").position().top - 848)
		{
			$(".btn-scrolltop").css({"position" : "absolute","top" : $("#footer").position().top - 60})
			$(".btn-scrolltop").addClass("stop")
		}else
		{
			$(".btn-scrolltop").css({"position" : "fixed","top" : "auto"})
			$(".btn-scrolltop").removeClass("stop")
		}
	}

	
	$(".select-style select").change(function(){  
		selectboxChange();
	})
	function selectboxChange(){
		$(".select-style>p").text($(this +":selected").text())	;
	}
	
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
		goldrateScrollBar_reset()
	}

	function goldrateScrollBar_reset(){
		w = $(window).width();
		if(w < 640)
		{
			$(".goldrate-overflow").mCustomScrollbar({axis:"x",advanced:{autoExpandHorizontalScroll:true}});
		}else{
			$(".goldrate-overflow").mCustomScrollbar("destroy");
		}
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
			$("#menu li").unbind("mouseenter",liEnter).bind("mouseenter",liEnter);
			$(".menu-lv2-holder").unbind("mouseenter",lv2Enter).bind("mouseenter",lv2Enter);
			$('#menu li, .menu-lv2-holder').unbind("mouseleave",li_lv2Leave).bind("mouseleave",li_lv2Leave);
			$("#menu li").unbind("click",liEnter);
			$("#menu li").removeClass("selected");
			$(".menu-lv2-holder,.menu-lv2,.menu-lv2-holder .btn-back").removeAttr("style");
			$(".menu-lv2").removeClass("open");
		}else
		{
			$(".btn-navbar").find("img").attr("src" , "../images/mobile/btn-navbar.png");
			$(".navbar-container").hide();
			$("#menu li").unbind("mouseenter",liEnter);
			$(".menu-lv2-holder").unbind("mouseenter",lv2Enter);
			$('#menu li, .menu-lv2-holder').unbind("mouseleave",li_lv2Leave);
			$("#menu li").unbind("click",liEnter).bind("click",liEnter);
			$(".menu-lv2-holder .btn-back").unbind("click",li_lv2Leave).bind("click",li_lv2Leave);
			li_lv2Leave();
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

	function liEnter(){
		idx = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(".menu-lv2-holder").stop().delay(200).addClass("open").siblings().removeClass("open");
		$(".menu-lv2").eq(idx).addClass("open").siblings().removeClass("open");
		hei = $(".menu-lv2").eq(idx).outerHeight(true);
		if(idx == 1 || idx == 4 || idx == 5 || idx == 6){
			hei = 0;
		}
		if(w < 980){
			if(idx == 1 || idx == 4 || idx == 5 || idx == 6){
				$(".menu-lv2-holder .btn-back").hide();
				$(".menu-lv2").removeClass("open")
				return true;
			}else
			{
				$(".menu-lv2-holder .btn-back").show();
				$(".menu-lv2").eq(idx).height("auto");
				var menu_h = $(".menu-lv2").eq(idx).height();
				var lv2_hei = $("#menu").height() + $(".ext-links.mob.tablet").height() +$(".lang.mob.tablet").height();
				
				if(menu_h < lv2_hei)
				{
					$(".menu-lv2").height(lv2_hei);
				}
			}
		}else{
			$(".menu-lv2-holder .btn-back").hide();
		}
		
		$(".menu-lv2-holder").stop().animate({ height: hei + "px" });
	}
	function lv2Enter(){


		if(!home_search)
		{

			if(idx == 1 || idx == 4 || idx == 5 || idx == 6){
				$(".menu-lv2-holder .btn-back").hide();
				$(".menu-lv2").removeClass("open")
				return false;
			}

			$("#menu li").eq(idx).addClass('selected').siblings().removeClass('selected');
			$(".menu-lv2-holder").eq(idx).stop().delay(200).addClass("open").siblings().removeClass("open");
			$(".menu-lv2").eq(idx).addClass("open").siblings().removeClass("open");
			hei = $(".menu-lv2").eq(idx).outerHeight(true);
			$(".menu-lv2-holder").stop().animate({ height: hei + "px" });
		}
	}
	function li_lv2Leave(){
		$(".menu-lv2-holder").stop().delay(200).removeClass("open");
		$(".menu-lv2").removeClass("open");
		$(".menu-lv2-holder").stop().animate({ height: 0 });
		$("#menu li").removeClass('selected');
		$(".menu-lv2-holder .btn-back").hide();
		home_search = false;
	}
	
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
	eventDates[new Date('10/30/2014')] = new Date('10/30/2014');
	eventDates[new Date('10/07/2014')] = new Date('10/07/2014');
	eventDates[new Date('10/10/2014')] = new Date('10/10/2014');
	
	var highlightDate = {};
	highlightDate[new Date('09/26/2014')] = new Date('09/26/2014');

	var multiDate = {};
	multiDate[new Date('09/27/2014')] = new Date('09/27/2014');

	$('.calendar').datepicker({
		beforeShowDay: function(date) {
			var eventday = eventDates[date];
			var highlightday = highlightDate[date];
			var multiday = multiDate[date];
			
			if (eventday) {
				return [true, "date-event", eventday];//[selectable area? / CSS / array date]
			}else if(highlightday){
				return [true, "date-highlight", highlightday];
			}else if(multiday)
			{
				return [true, "date-multiday", multiday];
			}
			else{
				return [true, '', ''];
			}
		},
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: 0,
		dateFormat: "ddmmyy",
		dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
		onSelect: function(){calendar_click()}
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
	function calendar_click(){
		var clicked = $( ".calendar" ).val();
		if($("#D"+clicked).length !== 0)
		{
			$(".trade-fairs-event-item").removeClass("highlight")
			$("#D"+clicked).addClass("highlight")
			$(".trade-fairs-event-holder").mCustomScrollbar("scrollTo","#D"+clicked);
		}else
		{
			$(".trade-fairs-event-item").removeClass("highlight")
		}
	}
	


	/*calendar event*/
});

