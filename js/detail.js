$(function(){
	$(".unorder .item").hover(function(){
	$(this).addClass("on").siblings().removeClass("on");
	var addr=$(this).children().attr("src");
	$(".showbig").css("backgroundImage","url("+addr+")");
	$(".big").css("backgroundImage","url("+addr+".big.jpg)");
//	console.log(addr);
});

$(".showbig").on("mousemove",function(ev){
	ex=ev.pageX-$(".showbig").offset().left;
	ey=ev.pageY-$(".showbig").offset().top;
	//小阴影左上角的坐标
	x=ex-$(".shadow").width()/2;
	y=ey-$(".shadow").height()/2;
	if(x>$(".showbig").width()-$(".shadow").width()){
		x=$(".showbig").width()-$(".shadow").width();
		$(".shadow").css({"left":x,"top":y});
	}else if(x<0){
		x=0;
		$(".shadow").css({"left":x,"top":y});
	}else{
		$(".shadow").css({"left":x,"top":y});
	}
	if(y>$(".showbig").height()-$(".shadow").height()){
		y=$(".showbig").height()-$(".shadow").height();
		$(".shadow").css({"left":x,"top":y});
	}else if(y<0){
		y=0;
		$(".shadow").css({"left":x,"top":y});
	}else{
		$(".shadow").css({"left":x,"top":y});
	}
	
	var bx=2*x;
	var by=2*y;
	$(".big").css("backgroundPosition",-bx+"px "+-by+"px")
	
	
//	console.log(x,y);
});
});

