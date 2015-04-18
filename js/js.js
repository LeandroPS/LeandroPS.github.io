var Photos_Colors = [{color:"blue", photo: "img/photos/webdevelopment.jpg"}, {color:"green", photo: "img/photos/study.jpg"}, {color:"red", photo: "img/photos/brain2.jpg"}, {color:"yellow", photo: "img/photos/projects.jpg"}, {color:"grey", photo: "img/photos/Telephone.jpg"}];

var timeline = [{
	type: "course",
	image: "img/iff-logo.svg",
	title: "Instituto Federal Fluminense",
	course: "Information Systems",
	location: "Campos dos Goytacazes, RJ, Brazil",
	description: "The Instituto Federal Fluminense is the Institute where I started my degree on Information Systems, there I participated of Research Projects and had awesome classes such as Object Oriented Programming, Web Programming and Database Management"
},{
	type: "research project",
	image: "img/iff-logo.svg",
	title: "Developing Digital Learning Objects Development in HTML5",
	course: "Research Project",
	location: "Campos dos Goytacazes, RJ, Brazil",
	description: "On this research project I was responsible for developing new Learning objects in HTML5 and I was also responsible for coordinate the transition from the development in Flash to HTML 5"
},{
	type: "honor",
	image: "",
	title: "Honored with a Science Without Borders scholarship",
	course: "Information Systems",
	location: "Campos dos Goytacazes, RJ, Brazil",
	description: "The Science Without Borders (or Brazil Scientific Mobility Program is a program that award Brazilian students with a year Scholarship and academic training in one of more than 20 countries that have a partnership with the program, in 2014 I was awarded with this program and I chose the United States to have a scholarship)"
},{
	type: "course",
	image: "img/slu-logo.png",
	title: "Saint Leo University",
	course: "Information Systems",
	location: "Saint Leo, FL, USA",
	description: "Saint Leo University is the university where I had my scholarship through the Science Without Borders Program, There I could have classes sucha as Software Engineering, Social Media Marketing, Artificial Inteligence and Network Security"
}];

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
		$("div.everything").toggleClass("menu-active");
		$("button.nav-menu span").toggleClass("fa-times fa-bars");
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
	
	$("button.nav-menu").click(function(){
		$("div.everything").toggleClass("menu-active");
		$("button.nav-menu span").toggleClass("fa-times fa-bars");
	});
	
	$("div.timeline ul li").click(function(){
		var year = $(this).text();
		var pos = $(this).index();
		
		$("section.edu div.desc span.click").hide();
		$("section.edu div.desc div.nib").removeClass("pos-0 pos-1 pos-2 pos-3").addClass("pos-"+pos);
		$("section.edu div.desc h1, section.edu div.desc h2, section.edu div.desc h3, section.edu div.desc p").text("");
		$("section.body.edu div.desc div.exp-logo").css("opacity", "1");
		
		if(timeline[pos].type == "course" || timeline[pos].type == "research project"){
			$("section.edu div.desc div.exp-logo").html("<img src='"+timeline[pos].image+"'>");
		}else{
			$("section.edu div.desc div.exp-logo").html("<span class='fa fa-star'></span>");
		}
		$("section.edu div.desc h1").text(timeline[pos].title);
		$("section.edu div.desc h2").text(timeline[pos].course);
		$("section.edu div.desc h3").text(timeline[pos].location);
		$("section.edu div.desc p").text(timeline[pos].description);
		
		
		
	});
	
	/*
	$(".teste").click(function(){
		$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
			'key': 'BmvVdeczdHWr74P0SvEVJg',
			'message': {
			  'from_email': 'leandro.pires.souza@outlook.com',
			  'to': [
				  {
					'email': 'leandro.pires.souza@outlook.com',
					'name': 'RECIPIENT NAME (OPTIONAL)',
					'type': 'to'
				  }
				],
			  'autotext': 'true',
			  'subject': 'YOUR SUBJECT HERE!',
			  'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
			}
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
		 });
	});
	*/
	$("form.contact-form").on("submit", function(){
		var values = {};
		sent = 0;
		$.each($(this).serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});
		
		$("ul.messages li.msg-form").remove();
		$("ul.messages").append("<li><div class='msg msg-from-him'><div class='nib'></div>"+values.response+"</div></li>");
		
		$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json",
		  data: {
			'key': 'BmvVdeczdHWr74P0SvEVJg',
			'message': {
			  'from_email': 'leandro.pires.souza@outlook.com',
			  'to': [
				  {
					'email': 'leandro.pires.souza@outlook.com',
					'name': 'RECIPIENT NAME (OPTIONAL)',
					'type': 'to'
				  }
				],
			  'autotext': 'true',
			  'subject': 'A new contact on your website',
			  'html': 'Name: '+values.name+'<br/> email: '+values.email+'<p>'+values.response+'</p>'
			}
		  }
		 }).done(function(response) {
		   console.log(response); // if you're into that sorta thing
			sent = 1;
			$("ul.messages").append("<li><img class='photo' src='img/photos/1553459.jpeg'><div class='msg msg-from-me'><div class='nib'></div>Your message was sent! Thank you for your interest on my work, as I said I will respond to your message as soon as possible, In this sections are some links to where you can reach me around the Web. Hope to see you soon!</div></li>");
		 });
		/*
		var m = new mandrill.Mandrill('BmvVdeczdHWr74P0SvEVJg');

		// create a variable for the API call parameters
		var params = {
			"message": {
				"from_email":"your_email_address",
				"to": "leandro.pires.souza@outlook.com",
				"subject": "from contact",
				"text": "name: "+values.name+"  email: "+values.email+"  text: "+values.response
			}
		};

		m(params, function(res) {
			console.log(res);
		}, function(err) {
			console.log(err);
		});
		return false;
		*/
		
		
		
		setTimeout(function(){
			if(sent == 0){
				$("ul.messages").append("<li><img class='photo' src='img/photos/1553459.jpeg'><div class='msg msg-from-me'><div class='nib'></div>Ops, it's looks that your message is taking to much to be sent, (I swear is not my fault) could you please check your internet connection? Thank you for your interest on my work anyway, if you don't be notified that your message was sent you still can reach me on <a href='mailto://leandro.pires.souza@outlook.com'>leandro.pires.souza@outlook.com</a>, sorry for this infortuny, once I receive it I will respond to your message as soon as possible, In this sections are some links to where you can reach me around the Web. Hope to see you soon!</div></li>");
			}
		}, 4000);
		
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
	
	$("div.playground a").click(function(){
		$(this).addClass("animated rubberBand");
	});
	
	$("section.body.proj section.project-description").on("click", "section.prev", function(){
		var prev = $("section.body.proj section.project-description section.prev");
		var curr = $("section.body.proj section.project-description section.curr");
		var next = $("section.body.proj section.project-description section.next");
		
		prev.prev().removeClass("prevv").addClass("prev");
		prev.removeClass("prev").addClass("curr");
		curr.removeClass("curr").addClass("next");
		next.removeClass("next").addClass("nextt");
		
		$("section.body.proj div.projects div").removeClass("selected");
		$("section.body.proj div.projects div:eq("+prev.index()+")").addClass("selected");
	});
	
	$("section.body.proj section.project-description").on("click", "section.next", function(){
		var prev = $("section.body.proj section.project-description section.prev");
		var curr = $("section.body.proj section.project-description section.curr");
		var next = $("section.body.proj section.project-description section.next");
		

		prev.removeClass("prev").addClass("prevv");
		curr.removeClass("curr").addClass("prev");
		next.removeClass("next").addClass("curr");
		next.next().removeClass("nextt").addClass("next");
		
		$("section.body.proj div.projects div").removeClass("selected");
		$("section.body.proj div.projects div:eq("+next.index()+")").addClass("selected");
		
	});
	
	$("section.body.proj div.projects div").click(function(){
		$("section.body.proj div.projects div").removeClass("selected");
		$(this).addClass("selected");
		var indx = $(this).index();
	
		var curr = $("section.body.proj section.project-description section:eq("+indx+")");
		var prev = curr.prev();
		var next = curr.next();
		var prevv = prev.prev();
		var nextt = next.next();
		
		$("section.body.proj section.project-description section").removeClass("prevv prev curr next nextt");
		prevv.addClass("prevv");
		prev.addClass("prev");
		curr.addClass("curr");
		next.addClass("next");
		nextt.addClass("nextt");
	});
	
});
