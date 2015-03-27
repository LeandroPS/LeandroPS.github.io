function next(){
	var curr = $("section.body.current");
	var indx = curr.index();
	//var indxplus = indx++;
	if($("section.body").size()> indx+1){
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
	
	$("div.buttons button.down").click(function(){
		next();
	});
	
	$("div.buttons button.top").click(function(){
		previous();
	});
	
});
