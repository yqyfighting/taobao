slider(".slider1",5,520);
slider(".slider2",6,520);
//点击鼠标实现搜索转换
$(function(){
	$(".search-add").on("click","li",function(){
		var idx=$(this).index();
		
		if(idx==1){
			$(this).css("background-color","#c60000").siblings().css("background-color","#fff");
			$(".search-container").css("border-color","#c60000");
			$(".submit").css("background-color","#c60000");
			$(".family").css("display","none");
			$(".catplace").css("display","block");
			$(".icon-camera").css("display","none");
		}else{
			$(this).css("background-color","#ff5400").siblings().css("background-color","#fff");
			$(".search-container").css("border-color","#ff5400");
			$(".submit").css("background-color","#ff5400");
			if(idx==0){
				$(".family").css("display","block");
				$(".catplace").css("display","none");
				$(".icon-camera").css("display","block");
			}else{
				$(".family").css("display","none");
				$(".catplace").css("display","none");
				$(".icon-camera").css("display","none");
			}
		}
	})
})
$(function(){
	$("input[type=text]").on("input",function(){
		$(".placeholder").css("display","none");
		$(".icon-fangdajing-copy").css("display","none");
	})
})
$(function(){
	$(".phonetaobao .icon-cha").on("click",function(){
		$(".phonetaobao").css("display","none");
	})
})

//$(function(){
//	var i=0;
//	var w=$("#all li").width();
////	console.log(w);
//	$(".leftarrow").on("click",function(){
//		i--;
//		i=i<0?5:i;
//		$(".all").animate({left:-i*w+"px"},600);
//		$(".or li").eq(i).css("background","#f40").siblings().css("background","");
//		$(".numshow .num").html(i+1).css("color","#C12C26");
//	});
//	$(".rightarrow").on("click",function(){
//		i++;
//		i=i>5?0:i;
//		$(".all").animate({left:-i*w+"px"},600);
//		$(".or li").eq(i).css("background","#f40").siblings().css("background","");
//		$(".numshow .num").html(i+1).css("color","#C12C26");
//	});
//	var timer1;
//	function lunbo2(){
//		timer1=setInterval(function(){
//		i++;
//		i=i>5?0:i;
//		$(".all").animate({left:-i*w+"px"},600);
//		$(".or li").eq(i).css("background","#f40").siblings().css("background","");
//		$(".numshow .num").html(i+1).css("color","#C12C26");
//	},800);
//	}
//	lunbo2();
//	$(".showoppo").on("mouseenter",function(){
//		clearInterval(timer1);
//	})
//	$(".showoppo").on("mouseleave",function(){
//		lunbo2();
//	})
//	$(".or").on("click","li",function(){
//		i=$(this).index();
//		$(".all").animate({left:-i*w+"px"},600);
//		$(this).css("background","#f40").siblings().css("background","");
//		$(".numshow .num").html(i+1).css("color","#C12C26");
//	})
//	
//})
$(function(){
	$(window).on("scroll",function(){
		var res=$(window).scrollTop();
		if(res>=93){
			$(".logo").addClass("fixed");
		}else{
			$(".logo").removeClass("fixed");
		}
	})
//	console.log($(".item"));
	$(".item").click(function(){
		if($("#logo").hasClass("fixed")){
//			console.log($("#logo").hasClass("fixed"))
			$(".search-add").prepend(this);
		}
	})
})
$(function(){
	$(".safetab li").mouseenter(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var res=$(this).index();
		$(".showlist").eq(res).css("display","block").siblings().css("display","none")
	})
});


//右侧固定导航
$(function(){
	$("#fx .items").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var cname=$(this).attr("link-class");
		var distance=$("."+cname).offset().top;
		$("body").stop(true).animate({"scrollTop":distance-51},800);
//		console.log(distance);
	});
	$(window).scroll(function(){
		var s=$(window).scrollTop();
//		console.log(s);
		if(s>=497){
			$(".fixednav").addClass("fixed");
		}else{
			$(".fixednav").removeClass("fixed");
		}
	});
});
window.onload=function(){
	var arr=[];
	$("#fx .items").each(function(i,ele){
		var cname=$("#fx .items").eq(i).attr("link-class");
		var s=$("."+cname).offset().top;
		arr.push(s);
	});
	console.log(arr);
	$(window).on("scroll",function(){
		var stop=$(window).scrollTop();
		var min=Math.abs(stop-arr[0]);
		var index=0;
		for(var num=1;num<arr.length;num++){
			if(min>Math.abs(stop-arr[num])){
				min=Math.abs(stop-arr[num]);
				index=num;
				console.log(index);
			}
		}
		$("#fx .items").eq(index).addClass("on").siblings().removeClass("on");
	});
}
