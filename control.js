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
    var menu_list = {
        0: { name: '聯大熱音社-借社辦系統', link:'https://nuupopmusic.github.io'},
        1: { name: '聯大熱音社-吉他和弦查詢', link: './GuitarChordBook/' },
        2: { name: '命運大岩蛇之天堂與地獄', link: './fate/' },
        3: { name: 'Pokemon Ver.1', link: './Pokemon_Game_1/' },
        4: { name: 'Pokemon Ver.2', link: './Pokemon_Game_2/' },
        5: { name: 'ESP8266_WF8266R', link: './ESP8266_WF8266R/' },
        6: { name: 'Ramdom', link: './random/' },
        7: { name: '小瑪莉(瑪仔台)', link: './slot_machine/' },
    }

    for (let i = 0; i < Object.keys(menu_list).length; ++i ) {
        $('.list').append(`<!--第${(i + 1)}列-->`);
        $('.list').append(`<a href='${menu_list[i].link}' target='_top' class='text'>${menu_list[i].name}</a><br>`);
    }

    //表格字體
    // if(Device=='Mobile'){
    // 	$('.text').css({
	// 		"font-size":"30px",
	// 	})
    // }
    // if(Device=='PC'){
    // 	$('.text').css({
	// 		"font-size":"26px",
	// 	})	
    // }

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
