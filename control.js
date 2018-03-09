$(document).ready(function(){
	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	console.log("#Device : Mobile")
    	Device = "Mobile"

        if(innerWidth<=360) initial_scale_size = 0.8125
        else if(innerWidth<=375) initial_scale_size = 0.85
        else if(innerWidth<=425) initial_scale_size = 0.965

        $('head').append(
            "<meta name='viewport' content='width=device-width, initial-scale="+initial_scale_size+", maximum-scale=1.0, user-scalable=0'>",
            "<meta name='theme-color' content='purple'>",
        )

        $('.contain').css({
            "margin":"10px",
        })

        $('.bar').css({
            "margin-left":"60px",
        })

        $('.author').css({
            "margin-left":"60px",
        })
    }
    else {
        console.log("#Device : PC")
    	Device = "PC"
        $('head').append(
            "<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>",
            "<meta name='theme-color' content='purple'>",
        )

        $("body").css({
        	"margin-left":"35%"
        })

        $(".mid").css({
			"margin-left":"-60px"
        })

        $('.contain').css({
            "margin":"10px",
        })
    }

    //動態生成表格
    //表格清單
    menu_list = [
    	'聯大熱音社-借社辦系統, https://nuupopmusic.github.io',
    	'命運大岩蛇之天堂與地獄, ./fate/',
    	'Pokemon Ver.1, ./Pokemon_Game_1/',
    	'Pokemon Ver.2, ./Pokemon_Game_2/',
    	'ESP8266_WF8266R, ./ESP8266_WF8266R/',
    	'Ramdom, ./random/',
    	'小瑪莉(瑪仔台), ./slot_machine/',
    ]

    for(i=0 ; i<menu_list.length ; i++){

    	title = menu_list[i].split(',')[0]
		href = menu_list[i].split(',')[1]

        $('.list').append("<!--第"+(i+1)+"列-->")
    	$('.list').append("<a href='"+href+"' target='_top' class='text'>"+title+"</a><br>")

    }

    //表格字體
    if(Device=='Mobile'){
    	$('.text').css({
			"font-size":"30px",
		})
    }
    if(Device=='PC'){
    	$('.text').css({
			"font-size":"26px",
		})	
    }

    //預設狀態
	/*
	$(".fa-toggle-on").hide()
	$(".icon").hide()

	$(".fa-toggle-off").click(function(){
		$(this).hide()
		$(".fa-toggle-on").show()
		$(".icon").show()
	})

	$(".fa-toggle-on").click(function(){
		$(this).hide()
		$(".fa-toggle-off").show()
		$(".icon").hide()
	})
	*/
	
	$(".fun").click(function(){
		bootbox.alert({size: 'small', message: '呆呆獸：蛤？'})
	})

	//鎖定右鍵選單
    $("body").contextmenu(function(e){
        e.preventDefault()
    })

});
