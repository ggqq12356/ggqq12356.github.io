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
        t1 = 0
        t2 = 0
        count = 0
        ball_selected = false
        card_selected = false
        Bulbasaur_selected = false
        Zubat_selected = false
        //暫停角色："Plusle_Minun", "正負拍拍"
    	player = ["Bulbasaur", "Zubat", "Dragonite", "Hoothoot", "Kingler", "Jynx"]
        player_c = ["妙蛙種子", "超音蝠", "快龍", "咕咕", "巨鉗蟹", "迷唇姐"]
        punishment = ["用屁股寫名字", "畫臉", "跳繩5/10下", "用屁股寫名字", "交互蹲跳10下", "全隊跑1圈", "用屁股寫名字"]
        //player_max = 10 //玩家人數
        player_max = $(".playercount").val() //玩家人數
        player_list = []

    function randomNumY(r_max){
        var y = Math.floor(Math.random() * r_max)

        //減少重複機率
        if (y==t2) y = Math.floor(Math.random() * r_max)

        t2 = y //暫存變數
        return y
    }

    function randomNumX(r_max){
        var x = Math.floor(Math.random() * r_max)

        //減少重複機率
        if (x==t1) x = Math.floor(Math.random() * r_max)

        //判斷2人角色不重複
        //妙蛙種子
        if (count<=4 && x==0){
            x+=2
        }
        else if (x==0){
            if (Bulbasaur_selected != true){
                Bulbasaur_selected = true
            }
            else{
                x+=2
            }
        }
        //超音蝠
        if (x==1){
            if (Zubat_selected != true){
                Zubat_selected = true
            }
            else{
                x+=3
            }
        }

        if (count>=player_max-1){
            if (x==0) x+=2
            if (x==1) x+=3
        }

        //人數控制
        if (x==0 || x==1) count+=2
        else count+=1

        t1 = x //暫存變數
        return x
    }

    ball.click(function(){
        if (ball_selected == false){
            var r_max = player.length
                imagegroup = $(".image-group")
                cardtable = $(".cardtable")
                player_max = $(".playercount").val() //玩家人數

            imagegroup.remove()
            cardtable.remove()

            var i=0
            for (i=0 ; i<player_max ; i++){
                var p = randomNumX(r_max)
                player_list[i] = player_c[p]

                contain.append("<div class='image-group image"+i+"'>"+"("+(i+1)+")"+player_c[p]+"</div>")

                var image = $(".image"+i)
                image.css({"background-image":"url("+player[p]+".png)"})

                if (count >= player_max) break
            }

            ball_selected = true //重複按紐控制
            //console.log('player_list:', player_list)
            //console.log('count:', count)
            //console.log(player_max)
        }
    })

    card.click(function(){
        if (card_selected == false){
            var r_max = punishment.length
                p = randomNumY(r_max)
                imagegroup = $(".image-group")
                cardtable = $(".cardtable")

            imagegroup.remove()
            cardtable.remove()

            contain.append("<div class='cardtable'><div class='cardtitle'>命運卡</div><div class='cardcontain'>"+punishment[p]+"</div></div>")

            card_selected = true //重複按紐控制
            //console.log('punishment:', punishment[p])
        }
    })

    cleaner.click(function(){
        var imagegroup = $(".image-group")
            cardtable = $(".cardtable")

        imagegroup.remove()
        cardtable.remove()

        ball_selected = false
        card_selected = false
        Bulbasaur_selected = false
        Zubat_selected = false
        count = 0
    })
})
