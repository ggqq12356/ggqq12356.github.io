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
        ball = $(".ball")
        card = $(".card")
        cleaner = $(".cleaner")
        r_max = 0
        t = 0
        Bulbasaur_selected = false
        Zubat_selected = false
        //"Plusle_Minun", "正負拍拍"
    	player = ["Bulbasaur", "Zubat", "Dragonite", "Hoothoot", "Kingler", "Jynx"]
        player_c = ["妙蛙種子", "超音蝠", "快龍", "咕咕", "巨鉗蟹", "迷唇姐"]
        punishment = ["用屁股寫名字", "畫臉", "跳繩", "交互蹲跳", "夾夾子", "跑操場"]
        player_max = 10
        player_list = []

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
            imagegroup = $(".image-group")
            cardcontain = $(".cardcontain")

        cardcontain.remove()
        imagegroup.remove()

        for (var i = 0; i < player_max; i++) {
            var p = randomNum(r_max)
            player_list[i] = player_c[p]

            contain.append("<div class='image-group image"+i+"'>"+"("+(i+1)+")"+player_c[p]+"</div>")
            var image = $(".image"+i)
            image.css({"background-image":"url("+player[p]+".png)"})
        }
        //console.log('p:', p, 't:', t, player_c[p])
        console.log('player_list:', player_list)
    })

    card.click(function(){
        var r_max = punishment.length
            p = randomNum(r_max)
            imagegroup = $(".image-group")
            cardcontain = $(".cardcontain")

        cardcontain.remove()
        imagegroup.remove()
        contain.append("<div class='cardcontain'>"+punishment[p]+"</div>")
        //console.log('p:', p, 't:', t, punishment[p])
        console.log('punishment:', punishment[p])
    })

    cleaner.click(function(){
        var imagegroup = $(".image-group")
            cardcontain = $(".cardcontain")

        cardcontain.remove()
        imagegroup.remove()
    })
})
