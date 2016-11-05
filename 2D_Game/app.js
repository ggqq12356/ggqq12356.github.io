$(function(){
    var $body = $("body"),
        $contain = $('.contain'),
        $header = $('.header'),
        $title = $('.title'),
        $window = $('.window'),
        $player = $('.player');

    var $Win_W = $window.width(),
        $Win_H = $window.height(),
        $PLeft = parseInt($player.offset().left),
        $PTop = parseInt($player.offset().top);

    /*
    var max = 10,
        min = 1,
        r1 = parseInt(Math.random() * (max-min+1)+1);
        r2 = parseInt(Math.random() * (max-min+1)+1);
    */

    console.log($Win_W, $Win_H)

    //Player Default Place
    var x = parseInt($player.css("margin-left"))
    parseInt($player.css("margin-left", x+0))
    var y = parseInt($player.css("margin-top"))
    parseInt($player.css("margin-top", y+600-75))

    $body.keypress(function(e){
        var key = String.fromCharCode(e.keyCode);

        switch (key) {
            case 'w':
                console.log(key)
                up()
                break;

            case 's':
                console.log(key)
                down()
                break;

            case 'a':
                console.log(key)
                left()
                break;

            case 'd':
                console.log(key)
                right()
                break;

            default:

        }

        function up(){
            var y = parseInt($player.css("margin-top"))
            parseInt($player.css("margin-top", y-75))
        }

        function down(){
            var y = parseInt($player.css("margin-top"))
            parseInt($player.css("margin-top", y+75))
        }

        function left(){
            var x = parseInt($player.css("margin-left"))
            parseInt($player.css("margin-left", x-75))
        }

        function right(){
            var x = parseInt($player.css("margin-left"))
            parseInt($player.css("margin-left", x+75))
        }
    })


})
