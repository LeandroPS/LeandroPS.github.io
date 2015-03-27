var Photos_Colors = [{color:"blue", photo: "img/photos/webdevelopment.jpg"}, {color:"green", photo: "img/photos/study.jpg"}, {color:"red", photo: "img/photos/skills.jpg"}, {color:"yellow", photo: "img/photos/projects.jpg"}, {color:"grey", photo: "..."}];

function next(){
	var curr = $("section.body.current");
	var indx = curr.index();
	//var indxplus = indx++;
	if($("section.body").size()> indx+1){
		$("div.colors-background").removeClass("blue green red yellow grey");
		$("div.colors-background").addClass(Photos_Colors[indx+1].color);

		$("div.photos-background").css("background-image", "url("+Photos_Colors[indx+1].photo+")");
		
		
		curr.addClass("animated fadeOutUp");
		curr.removeClass("current");
		var next = curr.next("section.body");
		next.show();
		next.addClass("current animated fadeInUp");
		
		var c = $("nav ul.navigation li.current");
		var n = c.next();
		var ind = c.index();
		if($("nav ul.navigation li").size()> ind+1){
			c.removeClass("current");
			n.addClass("current");
		}
		
		setTimeout(function(){
			curr.removeClass("animated fadeOutUp");
			next.removeClass("animated fadeInUp");
			curr.hide();
		},1000);
		
	}
}

function previous(){
	var curr = $("section.body.current");
	var indx = curr.index();
	
	//var indxplus = indx++;
	if(indx>0){
		
		$("div.colors-background").removeClass("blue green red yellow grey");
		$("div.colors-background").addClass(Photos_Colors[indx-1].color);
		
		$("div.photos-background").css("background-image", "url("+Photos_Colors[indx-1].photo+")");
		
		curr.addClass("animated fadeOutDown");
		curr.removeClass("current");
		var prev = curr.prev("section.body");
		prev.show();
		prev.addClass("current animated fadeInDown");
		
		var c = $("nav ul.navigation li.current");
		var p = c.prev();
		var ind = c.index();
		if(ind>0){
			c.removeClass("current");
			p.addClass("current");
		}
		
		setTimeout(function(){
			curr.removeClass("animated fadeOutDown");
			prev.removeClass("animated fadeInDown");
			curr.hide();
		},1000);
	}
}

$(function(){
	
	$("nav ul.navigation li").click(function(){
		if(!$(this).hasClass("current")){
			
			$("nav ul.navigation li.current").removeClass("current");
			$(this).addClass("current");
		
			curr = $("section.body.current");
			n = $("section.body."+$(this).attr("data-link"));
			curr.removeClass("current");
			curr.addClass("animated fadeOutDown");
			n.show();
			n.addClass("animated fadeInDown current");

			$("div.colors-background").removeClass("blue green red yellow grey");
			$("div.colors-background").addClass(Photos_Colors[n.index()].color);

			$("div.photos-background").css("background-image", "url("+Photos_Colors[n.index()].photo+")");

			setTimeout(function(){
				curr.removeClass("animated fadeOutDown");
				n.removeClass("animated fadeInDown");
				curr.hide();
			},1000);
		}
	});
	
	$("div.buttons button.down").click(function(){
		next();
	});
	
	$("div.buttons button.top").click(function(){
		previous();
	});
	
	$(document).keydown(function(e) {
		switch(e.which) {
			case 37: // left
			break;

			case 38: // up
				previous();
			break;

			case 39: // right
			break;

			case 40: // down
				next();
			break;

			default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});
	
});
