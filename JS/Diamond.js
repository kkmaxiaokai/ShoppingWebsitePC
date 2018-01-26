//INDEX
$(function(){	
	$(window).scroll(function() {		
		if($(window).scrollTop() >= 700){ 
			$('.btn_TOP').fadeIn(300);
		}else{    
			$('.btn_TOP').fadeOut(300);
		}  
	});
	$('.btn_TOP').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
});
//------------------滑动滚动条固定------------------
				$(window).scroll(function(){
					if($(window).scrollTop()>=30){
						$("nav").css({
							position:"fixed",
							top:"0"
						})
					}else{
						$("nav").css({
							position:"relative",
							top:"0"
						})
					}
				});
//------------------搜索框下拉特效------------------
$(function(){
	$("#ProName").focus(function(){
		$(".list").slideDown();
	}).blur(function(){
		$(".list").slideUp();
	});
				
	$(".list li").mousedown(function(){
		$("#ProName").val($(this).html());
	});

});
//------------------全部产品特效------------------
$(function(){
	$(".all").mouseover(function(){
		$(".all0").show();
	}).mouseleave(function(){
		$(".all0").hide()
	});
	
	$(".sidebar h4").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var i=$(".sidebar h4").index(this);
		$(".contet").eq(i).show().siblings(".contet").hide();
	});
	
	$(".all0").mouseleave(function(){
		$(".sidebar h4").removeClass("cur");
		$(".contet").hide();
	});
})
//------------------banner特效------------------
$(function(){
		$(".banner").mouseover(function(){
			$(".banner .left").stop().animate({left:"0"},400);
			$(".banner .right").stop().animate({right:"0"},400)
		}).mouseleave(function(){
				$(".banner .left").stop().animate({left:"-45px"},400);
				$(".banner .right").stop().animate({right:"-45px"},400)
		    })

		var i=0;
		$(".banner .left").click(function(){
			if(i>=$(".banner li").length-1){
				i=0;
			}else{
				i++;
			}

			$(".banner ul").stop().animate({
				left:-$(".banner li").width()*i
			},500)	
		})

		$(".banner .right").click(function(){
			if(i>0){
				i--;
			}
			$(".banner ul").stop().animate({
				left:-$(".banner li").width()*i
			},500)	
		})
				
})
//----------------图片特效----------------
$(function(){
		$(".pic1 li").mouseover(function(){
			var i=$(".pic1 li").index(this);
				$(".pic1 span").eq(i).stop().animate({bottom:"0"},300)
		}).mouseleave(function(){
			var i=$(".pic1 li").index(this);
				$(".pic1 span").eq(i).stop().animate({bottom:"-400px"},300)
		})
})
//---------------新驻品牌特效---------------
$(function(){
		$("#two").mouseover(function(){
			var i=$("#two").index(this);
				$("#two").eq(i).stop().animate({left:"200px"},400)
		}).mouseleave(function(){
			var i=$("#two").index(this);
				$("#two").eq(i).stop().animate({left:"500px"},800)
		})
})
$(function(){
		$("#thr").mouseover(function(){
			var i=$("#thr").index(this);
				$("#thr").eq(i).stop().animate({left:"400px"},400)
		}).mouseleave(function(){
			var i=$("#thr").index(this);
				$("#thr").eq(i).stop().animate({left:"700px"},800)
		})
})
$(function(){
		$("#fro").mouseover(function(){
			var i=$("#fro").index(this);
				$("#fro").eq(i).stop().animate({left:"500px"},400)
		}).mouseleave(function(){
			var i=$("#fro").index(this);
				$("#fro").eq(i).stop().animate({left:"850px"},800)
		})
})
$(function(){
		$("#fiv").mouseover(function(){
			var i=$("#fiv").index(this);
				$("#fiv").eq(i).stop().animate({left:"700px"},400)
		}).mouseleave(function(){
			var i=$("#fiv").index(this);
				$("#fiv").eq(i).stop().animate({left:"1000px"},800)
		})
})
//------------人气单品特效------------------
window.onload=function(){
				var lbtn=document.getElementById("lbtn");
				var rbtn=document.getElementById("rbtn");
				var Box=document.getElementById("box");
				var oUl=document.getElementById("oul");
				var oLi=Box.getElementsByTagName("li");
				oUl.innerHTML+=oUl.innerHTML;
				var ulWidth=oLi.length*oLi[0].offsetWidth;
				var speed=2;
				
				setInterval(function(){
					oUl.style.left=oUl.offsetLeft-speed+"px";
						if(oUl.offsetLeft==-ulWidth/2){
							oUl.style.left=0;
						}
						else if(oUl.offsetLeft>0){
							oUl.style.left=-ulWidth/2+"px";
						}
				},30)
				lbtn.onclick=function(){speed=2}
				rbtn.onclick=function(){speed=-2}
}

//List
//------------折叠菜单------------
$(function(){
	$("#L_fl ul:first").slideDown();
	$("#L_fl h2").click(function(){
		$(this).next().slideToggle("slow");
	});
})
//------------列表图片变大变小------------


//Details
//-----------返回选择特效-----------
//$(function(){
//	$("#D_house").click(function(){
//		$(".D_last").click(function(){$('html,body').animate({scrollTop: '0px'}, 800);}); 
//	});
//})
//-----------弹窗-------------
$(function(){
	$(".D_add").click(function(){
					alert("您想要的商品已加入购物车")
				});
	$(".D_shop").click(function(){
					alert("商品已收藏！！！")
				});
})
//------------选项卡特效------------
$(function(){
				$(".D_text li:first").addClass("D_active");
				$(".D_list").eq(0).show();
				$(".D_text li").click(function(){
					$(this).addClass("D_active").siblings().removeClass("D_active");
					var i=$(".D_text li").index(this);
					$(".D_list").eq(i).show().siblings(".D_list").hide();
				});
			})
//------------图片变大------------
$(function(){
        		$(".D_list img").mouseover(function(even){
        			$("body").append('<div class="tips"><img src="'+this.src+'"></div>');
        			$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
        		}).show();
        		}).mouseout(function(){
					$(".tips").remove();
				}).mousemove(function(){
					$(".tips").css({
					left:event.pageX+"px",
					top:event.pageY+"px"
				}).show();
				})
			
})