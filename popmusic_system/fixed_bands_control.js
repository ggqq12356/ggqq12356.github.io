$(document).ready(function(){

	//判斷裝置種類
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log("#Device : Mobile")

		$(".schedule").css({
			"width":"1150px",
			"height":"487px",
			"-ms-transform":"rotate(90deg) scale(0.7,0.7)",
			"-webkit-transform":"rotate(90deg) scale(0.7,0.7)",
			"transform":"rotate(90deg) scale(0.7,0.7)",
			"margin-top":"47%",
			"margin-left":"-115%"
		})
	}
	else {
	    console.log("#Device : PC")

	    $(".schedule").css({
			"width":"1150px",
			"height":"487px"
		})
	}

})