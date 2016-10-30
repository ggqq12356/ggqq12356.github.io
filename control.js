$(document).ready(function(){

	//預設狀態
	/*
	$(".fa-toggle-on").hide();
	$(".icon").hide();

	$(".fa-toggle-off").click(function(){
		$(this).hide();
		$(".fa-toggle-on").show();
		$(".icon").show();
	});

	$(".fa-toggle-on").click(function(){
		$(this).hide();
		$(".fa-toggle-off").show();
		$(".icon").hide();
	});
	*/
	
	$(".fun").click(function(){
		alert("\n" + "呆呆獸：蛤？");
	})

	//鎖定右鍵選單
    $("body").contextmenu(function(e){
        e.preventDefault();
    });

	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	console.log("#Device : Mobile");

		$(".list").css({
			"width":"300px"
		})
    }
    else {
        console.log("#Device : PC");

        $("body").css({
        	"margin-left":"35%"
        })
        $(".mid").css({
			"margin-left":"-60px"
        })
    }

});
