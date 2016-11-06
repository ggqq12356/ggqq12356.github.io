$(function(){
    var $body = $("body"),
        $contain = $('.contain'),
        $header = $('.header'),
        $title = $('.title'),
        $window = $('.window'),
        $player = $('.player');

    var $Win_W = $window.width(),
        $Win_H = $window.height(),

        $Win_Top = $Win_H - $Win_H,
        $Win_Bottom = $Win_H - 75,
        $Win_Left = $Win_W - $Win_W,
        $Win_Right = $Win_W - 75,

        $Player_W = parseInt($player.css("width")),
        $Player_H = parseInt($player.css("height")),
        $Player_L = parseInt($player.css("margin-left")),
        $Player_T = parseInt($player.css("margin-top")),
        $PLeft = parseInt($player.offset().left),
        $PTop = parseInt($player.offset().top);

    /*
    var max = 10,
        min = 1,
        r1 = parseInt(Math.random() * (max-min+1)+1);
        r2 = parseInt(Math.random() * (max-min+1)+1);
    */

    var $consoleCss1 = "color: pink; font-style: 微軟正黑體; font-weight: bold; font-size: 16px",
        $consoleCss2 = "color: skyblue; font-style: 微軟正黑體; font-weight: bold; font-size: 16px",
        $consoleCss3 = "color: #00FF00; font-style: 微軟正黑體; font-weight: bold; font-size: 16px",
        $consoleCss4 = "color: yellow; font-style: 微軟正黑體; font-weight:bold; font-size: 16px;";

    console.log('%c [視窗大小] '+$Win_W+", "+$Win_H, $consoleCss1)
    console.log(('%c [參數] '+String($Win_Top)+", "+String($Win_Bottom)+", "+String($Win_Left)+", "+String($Win_Right)+", "+String($Player_W)+", "+String($Player_H)), $consoleCss2)

    //Player Default Place
    var x = parseInt($player.css("margin-left"))
    parseInt($player.css("margin-left", x+($Win_W/2)-($Player_W/2)))
    var y = parseInt($player.css("margin-top"))
    parseInt($player.css("margin-top", y+$Win_H-$Player_H))

    $body.keypress(function(e){
        var key = String.fromCharCode(e.keyCode);

        switch (key) {
            case 'w':
                console.log('%c [鍵盤] '+key, $consoleCss3)
                up(), getPlayerXY()
                break;

            case 's':
                console.log('%c [鍵盤] '+key, $consoleCss3)
                down(), getPlayerXY()
                break;

            case 'a':
                console.log('%c [鍵盤] '+key, $consoleCss3)
                left(), getPlayerXY()
                break;

            case 'd':
                console.log('%c [鍵盤] '+key, $consoleCss3)
                right(), getPlayerXY()
                break;

            default:
                break;
        }

        function up(){
            var y = parseInt($player.css("margin-top"))
            $player.css("margin-top", y-75)
        }

        function down(){
            var y = parseInt($player.css("margin-top"))
            $player.css("margin-top", y+75)
        }

        function left(){
            var x = parseInt($player.css("margin-left"))
            $player.css("margin-left", x-75)
        }

        function right(){
            var x = parseInt($player.css("margin-left"))
            $player.css("margin-left", x+75)
        }

        function getPlayerXY(){
            var $Player_X = parseInt($player.css("margin-left")),
                $Player_Y = parseInt($player.css("margin-top"));

            console.log('%c [當前座標] '+$Player_X+", "+$Player_Y, $consoleCss4)
        }
    })

    $player.mouseenter(function(){
        $player.css({"background-color":"yellow"});
        $player.innerHTML = "AOA";
    })

    $player.mouseout(function(){
        $player.css({"background-color":"red"});
    })

})
