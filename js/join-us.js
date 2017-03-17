function swi(obj){
	if($(obj).attr("swi")==undefined){
		return;
	}else{
		$("#"+$(obj).attr("swi")).siblings(".swi").fadeOut();
		$("#"+$(obj).attr("swi")).fadeIn();
	}	
}
$(document).ready(function(){
	$(".z-join-list").click(function(){
		swi(this);
	});
	$(".z-close").click(function() {
		$(".z-list-item").css("display","none");
	});
	var a = $(".z-join-list-wraper").height();
	var b = a + "px";
	$(".z-list-item").height(b);
	$(".z-list-item-bg").height(b);
	$(".z-item-con").height(b);
});

