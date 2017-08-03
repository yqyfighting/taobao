//轮播图
	function slider(wrap,num,width){
	
	var imagenum=num;
	
	var $show=$(wrap);
	console.log($show)
	var $allimage=$show.find("#allimage");
	var $olist=$show.find(".listitem");
	var $leftbtn=$show.find(".leftarrow");
	var $rightbtn=$show.find(".rightarrow");
	var w=width;
	var idx=1;
	var timer;
	console.log($allimage);
	function goto(yourindex){
		$allimage.animate({"left":-1*yourindex*w+"px"},600,function(){
			if(yourindex==0){
				$allimage.css("left",-1*imagenum*w+"px");
				idx=imagenum;
				$olist.eq(idx-1).css("background","#f40").siblings().css("background","");
			}else if(yourindex==(imagenum+1)){
				$allimage.css("left",-1*w+"px");
				idx=1;
				$olist.eq(idx-1).css("background","#f40").siblings().css("background","");
			}
		});
		$olist.eq(yourindex-1).css("background","#f40").siblings().css("background","");
	}
	$leftbtn.on("click",function(){
		if($allimage.is(":animated")){
			return;
		}
		idx--;
		goto(idx);
		
	});
	$rightbtn.on("click",function(){
		if($allimage.is(":animated")){
			return;
		}
		idx++;
		goto(idx);
		
	});
	function lunbo(){
		timer=setInterval(function(){
		idx++;
		goto(idx);
	},1000);
	}
	lunbo();
	$show.on("mouseenter",function(){
		clearInterval(timer);
	})
	$show.on("mouseleave",function(){
		lunbo();
	})
	$olist.on("click",function(){
		idx=$(this).index()+1;
		goto(idx);
	});
	};