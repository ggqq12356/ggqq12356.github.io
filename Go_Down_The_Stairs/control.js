//當DOM載入
$(function(){

/**************************************************************************/

    //////////預設值//////////
    //參數
    var $body = $("body"),
        $stage = $("#stage"),
        $screen = $("#screen"),
        $player = $("#player"),
        $point = $("#point"),
        $information = $("#information"),
        $warm = $("#warm"),
        $enemy = $("#enemy"),
        $gameover = $("#gameover"),
        $stairs = $("#stairs"),

        screen_width = $screen.width(),         //螢幕寬度
        screen_height = $screen.height(),       //螢幕高度
        player_width = $player.width(),         //人物寬度
        player_height = $player.height(),       //人物高度

        sx_l = parseInt($screen.offset().left), //左 - 螢幕座標
        sx_r = sx_l + $screen.width(),          //右 - 螢幕座標
        sy_t = parseInt($screen.offset().top),  //上 - 螢幕座標
        sy_b = sy_t + $screen.height(),         //下 - 螢幕座標

        px_l = parseInt($player.offset().left), //左 - 角色座標
        px_r = px_l + player_width,             //右 - 角色座標
        px_t = parseInt($player.offset().top),  //上 - 角色座標
        px_b = px_t + player_height,            //下 - 角色座標

        edge_l = sx_l + player_width,   //左 - 邊界座標
        edge_r = sx_r - player_width,   //右 - 邊界座標
        edge_t = sy_t,                  //上 - 邊界座標
        edge_b = sy_b - player_height,  //下 - 邊界座標

        //寬高資料
        width_data = '螢幕=>'+'寬:'+screen_width+', 高:'+screen_height,
        player_data = '人物=>'+'寬:'+player_width+', 高:'+player_height,
        //螢幕座標
        screen_data = '螢幕座標=>'+'左:'+sx_l+', 右:'+sx_r+', 上:'+sy_t+', 下:'+sy_b,
        //角色座標
        player_data = '角色座標=>'+'左:'+px_l+', 右:'+px_r+', 上:'+px_t+', 下:'+px_b,
        //邊界座標
        edge_data = '邊界座標=>'+'左:'+edge_l+', 右:'+edge_r+', 上:'+edge_t+', 下:'+edge_b;

        //console.log(width_data);

    //人物初始位置
    /*
    $player.css("left", (screen_width - player_width)/2+"px");
    $player.css("top", (screen_height - player_height));
    */
    $player.css("left", (screen_width - player_width)/2+"px");
    $player.css("top", player_height);

/**************************************************************************/

    //////////使用者操作//////////
    //滑鼠移動
    $body.mousemove(function(e){
        //px_l = parseInt($player.offset().left), //角色left座標
        //px_r = px_l + $player.width(), //角色right座標
        mx = e.pageX;   //點擊座標
        my = e.pageY;   //點擊座標

        //console.log('[滑鼠座標] : ' + 'X:' + mx + ' , ' + 'Y:' + my + ' , ');
        $point.html('[滑鼠座標] : ' + 'X:' + mx + ' , ' + 'Y:' + my + ' , ');

        //滑鼠移動
        /*
        var x = parseInt($player.css("left"));
        if (mx > sx_m){
            parseInt($player.css("left", x+80));
        }
        if (mx < sx_m){
            parseInt($player.css("left", x-80));
        }
        */
    })
    //鎖定右鍵選單
    $body.contextmenu(function(e){
        e.preventDefault();
    })
    //鍵盤
    $body.keypress(function(e){
        var $key = String.fromCharCode(e.keyCode),

            px_t = parseInt($player.offset().top), //角色top座標
            px_l = parseInt($player.offset().left), //角色left座標
            px_r = px_l + $player.width(); //角色right座標

        state();

        switch ($key) {
            case 'a':
                if(px_l > edge_l){
                    left_action(), normal();
                }else{warm();}
                break;
            case 'd':
                if(px_l < edge_r){
                    right_action(), normal();
                }else{warm();}
                break;

            case 'w':
                if(px_t > edge_t){
                    jump_action(), normal();
                }else{warm();}
                break;

            case 's':
                if(px_t < edge_b){
                    down_action(), normal();
                }else{warm();}
                break;
            default:
                break;
        }

        function normal() {
            //console.log("[狀態] : 正常移動");
            $warm.html('[狀態] : 正常移動');
        }

        function warm() {
            //console.log("[狀態] : 無法移動");
            $warm.html('[狀態] : 無法移動');
        }

        function state() {
            //console.log('[鍵盤]:', $key, '[Left座標] :', px_l, '[Top座標] :', px_t);
            $information.html('[鍵盤] : ' + $key + ' , [Left座標] : ' + px_l + ' , [Top座標] : ' + px_t);
        }

    })

/**************************************************************************/

    //////////人物動作//////////
    /*
    未做功能:
    1. timeout的簡化
    2. 地心引力
    */
    //參數
    var delayTime = 50,     //延遲時間
        moveDis = 80;       //移動距離

    //人物向左
    var lft;
    function left_action() {
        $player.css({"background-image":"url(player_j.png)"});
        lft = window.setTimeout(left_start, delayTime);
    }
    function left_start() {
        var x = parseInt($player.css("left"));
        parseInt($player.css("left", x - moveDis));
        left_stop();
    }
    function left_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(lft);
    }

    //人物向右
    var rt;
    function right_action() {
        $player.css({"background-image":"url(player_j.png)"});
        rt = window.setTimeout(right_start, delayTime);
    }
    function right_start() {
        var x = parseInt($player.css("left"));
        parseInt($player.css("left", x + moveDis));
        right_stop();
    }
    function right_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(rt);
    }

    //人物向上
    var jmp;
    function jump_action() {
        $player.css({"background-image":"url(player_j.png)"});
        jmp = window.setTimeout(jump_start, delayTime);
    }
    function jump_start() {
        var y = parseInt($player.css("top"));
        parseInt($player.css("top", y - moveDis));
        jump_stop();
    }
    function jump_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(jmp);
    }

    //人物向下
    var dwn;
    function down_action() {
        $player.css({"background-image":"url(player_j.png)"});
        dwn = window.setTimeout(down_start, delayTime);
    }
    function down_start() {
        var y = parseInt($player.css("top"));
        parseInt($player.css("top", y + moveDis));
        down_stop();
    }
    function down_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(dwn);
    }

    //人物墜落
    var drop;
    function drop_action() {
        $player.css({"background-image":"url(player_j.png)"});
        drop = window.setTimeout(drop_start, delayTime);
    }
    function drop_start() {
        var y = parseInt($player.css("top")),
            sy_t = parseInt($screen.offset().top);  //上 - 螢幕座標

        parseInt($player.css("top", y + moveDis));

        //判斷是否到底 or 判斷人物腳下是否有階梯
        drop_stop();
    }
    function drop_stop() {
        $player.css({"background-image":"url(player_n.png)"});
        window.clearTimeout(drop);
    }
    drop_action();

/**************************************************************************/

    //////////障礙物 && 階梯//////////
    //建立障礙物
    function createEnemy() {
        $enemy_div = "<div id=\"enemy\" class=\"enemy\"></div>";
        $screen.append($enemy_div);
        $enemy_place = $screen.find(".enemy");

        //障礙物生成位置
        $enemy_place.css("top", 0);
        $enemy_place.css("left", 0);
    }
    //createEnemy();

    //生成新階梯
    //var c_t = setInterval(createStairs, 3000);
    stairs_place_list = [];
    function createStairs(){
        $screen.append("<div id=\"stairs\" class=\"stairs\"></div>");
        var $stairs_space = $screen.find(".stairs:last");

        //新階梯起始位置
        $stairs_space.css("left", screen_width / 2 - 40);   //x軸位置
        $stairs_space.css("top", screen_height - 20);            //y軸位置
    }
    createStairs();

/**************************************************************************/

    //////////物件循環控制//////////
    //螢幕移動
    var s_m = setInterval(screen_move, 1000);
    function screen_move() {
        player_y_1 = $player.css("top"); //角色在螢幕中的座標上
        player_y_2 = parseInt($player.offset().top); //角色座標上

        //console.log(px_t);

        stairs_last = $screen.find(".stairs:last");
        stairs = $screen.find(".stairs");
        stairs_y = parseInt(stairs.css("top"));

        //階梯向上
        //console.log(player_y_2);

        //人物向下
        if(player_y_1 < edge_b){
            $player.css("top", player_y_1 + 1);
        }
    }


/**************************************************************************/

    //////////遊戲結束//////////
    /*
    function GameOver_action(){
        $screen.append("<div id=\"gameover\" calss=\"gameover\">GameOver</div>");
        console.log($gameover.css("top"));
        $gameover.click(function () {
            $(this).remove();
        })
    }
    GameOver_action();
    */
})
