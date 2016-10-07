$(document).ready(function(){
	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	console.log("#Device : Mobile")
    }
    else {
        console.log("#Device : PC")
    }

    //鎖定右鍵選單
    $("body").contextmenu(function(e){
        e.preventDefault()
    });

    //參數
    var contain = $(".contain")
        img = $(".img")
        ball = $(".ball")
        card = $(".card")
        r_max = 0
        t = 0
    	player = ["Bulbasaur", "Dragonite", "Hoothoot", "Kingler", "Plusle_Minun"]
        player_c = ["妙蛙種子", "快龍", "咕咕", "巨鉗蟹", "正負拍拍"]
        punishment = ["用屁股寫名字", "畫臉", "跳繩", "交互蹲跳", "夾夾子", "跑操場"]

    function randomNum(r_max){
        var x = Math.floor(Math.random() * r_max)
        if (x==t){
            x = Math.floor(Math.random() * r_max)
        }
        t = x
        return x
    }

    ball.click(function(){
        var r_max = player.length
            p = randomNum(r_max)
            cardcontain = $(".cardcontain")
            imagecontain = $(".imagecontain")

        cardcontain.remove()
        imagecontain.remove()
        img.css({"background-image":"url("+player[p]+".png)"})
        contain.append("<div class='imagecontain'>"+player_c[p]+"</div>")
        //console.log('p:', p, 't:', t, player_c[p])
    })

    card.click(function(){
        var r_max = punishment.length
            p = randomNum(r_max)
            cardcontain = $(".cardcontain")
            imagecontain = $(".imagecontain")

        cardcontain.remove()
        imagecontain.remove()
        img.css({"background-image":"url()"})
        contain.append("<div class='cardcontain'>"+punishment[p]+"</div>")
        //console.log('p:', p, 't:', t, punishment[p])
    })
})
