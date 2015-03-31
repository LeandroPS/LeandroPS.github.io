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
			curr.removeClass("animated fadeOutUp current");
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
	autosize($("section.body.contact ul.messages li div.msg-from-him textarea"));
	$("nav ul.navigation li").click(function(){
		if(!$(this).hasClass("current")){
			
			$("nav ul.navigation li.current").removeClass("current");
			$(this).addClass("current");
		
			curr = $("section.body.current");
			curr.removeClass("current");
			n = $("section.body."+$(this).attr("data-link"));
			
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
	
	$("form.contact-form").on("submit", function(){
		var values = {};
		$.each($(this).serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		
		$("ul.messages li.msg-form").remove();
		$("ul.messages").append("<li><div class='msg msg-from-him'><div class='nib'></div>"+values.response+"</div></li>");
		
		setTimeout(function(){
			$("ul.messages").append("<li><img class='photo' src='img/photos/1553459.jpeg'><div class='msg'><div class='nib'></div>Thank you for your interest on my work, as I said I will respond to your message as soon as possible, In this sections are some links to where you can reach me around the Web. Hope to see you soon!</div></li>");
		}, 1000);
		
		return false;
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
