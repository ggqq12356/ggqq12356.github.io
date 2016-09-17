	$(document).ready(function(){
		var $body = $("body"),
			$toggle_on = $(".fa-toggle-on"),
			$toggle_off = $(".fa-toggle-off"),
			$icon = $(".icon");

		//預設狀態
		$toggle_on.hide();
		$icon.hide();

		$toggle_off.click(function(){
			$(this).hide();
			$toggle_on.show();
			$icon.show();
		});

		$toggle_on.click(function(){
			$(this).hide();
			$toggle_off.show();
			$icon.hide();
		});

		$fun = $(".fun");

		$fun.click(function(){
			alert("蛤？");
		})

		//鎖定右鍵選單
        $body.contextmenu(function(e){
            e.preventDefault();
        });

		//判斷裝置種類
	    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    	console.log("#Device : Mobile");
	    }
	    else {
	        console.log("#Device : PC");
	        $body.css({
	        	"margin-left":"35%"
	        })
	    }

	});