//取出隨機整數
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//當DOM讀取完畢執行
$(function(){

    //參數設定
    var $body = $("body"),
        $logo = $("#logo"),
        $stage = $("#stage"),
        $player = $("#player"),
        $score = $("#score"),
        $speed = $("#speed"),
        enemy_count = 1, //障礙物數量
        enemy_fall_speed = 5, //障礙物初始掉落速度
        //enemy_fall_max_speed = 20, //障礙物掉落極限速度
        enemy_wave = 0, //障礙物初始波數
        enemy_wave_gap = 250, //障礙物間距
        hit_test_r = 20, //碰撞半徑
        score = 0, //分數
        score_add = 100, //獲得分數
        loop,
        speedup,

        r = $("#stage").offset().left,
        w = ($stage.width()/2),
        mid = r+w;

    $logo.click(function() {
        document.location.href="../";
    });

    //判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        //console.log("使用行動裝置!");
        console.log("#Device : Mobile");

        var fps = 60, //顯示的fps偵數，滑順度
            enemy_fall_max_speed = 50; //障礙物掉落極限速度

        //取得滑鼠移動x, y座標
        $body.mousedown(function(e){

            sx = e.pageX;
            //sy = e.pageY;

            var x = parseInt($player.css("left"));
            if (sx < mid){
                if(x > 10) $player.css("left", x-100+"px");
            }

            if (sx >= mid){
                if(x < 210) $player.css("left", x+100+"px");
            }
        });
    }
    else {
        //console.log("使用桌上型裝置!");
        console.log("#Device : PC");

        var fps = 60, //顯示的fps偵數，滑順度
            enemy_fall_max_speed = 30; //障礙物掉落極限速度

        //左鍵點擊事件
        function left_click_action(){
            var x = parseInt($player.css("left"));
            if(x > 10) $player.css("left", x-100+"px");
        }

        //右鍵點擊事件
        function right_click_action(e){
            e.preventDefault();
            var x = parseInt($player.css("left"));
            if(x < 210) $player.css("left", x+100+"px");
        }

        //鍵盤 點擊
        $body.keypress(function(e){
            $key = String.fromCharCode(e.keyCode);
            //console.log('[Key] : ', $key);
            $x_place = "left";
            $y_place = "top";

            var x = parseInt($player.css($x_place));

            if(x > 10)
                if ($key == 'a') $player.css($x_place, x-100+"px");

            if(x < 210)
                if ($key == 'd') $player.css($x_place, x+100+"px");

            /*
            var y = parseInt($player.css($y_place));

            if (y > 20)
                if ($key == 'w') $player.css($y_place, y-100+"px");

            if (y < 420)
                if ($key == 's') $player.css($y_place, y+100+"px");
            */

            //空白鍵
            if($key == " ") $('.gameover').mousedown()
        });

        /*
        //鎖定右鍵選單
        $body.contextmenu(function(e){
            e.preventDefault();
        });
        */
    }

    //遊戲參數初始化
    function resetGame(){
        //參數
        enemy_fall_speed = 5, //障礙物初始掉落速度
        enemy_wave = 0, //障礙物初始波數
        score = 0; //分數

        //player 初始位置
        $player.css("left", ($stage.width()-$player.width())/2+"px");
        $player.css("top", $stage.height()-$player.height());

        //score 初始位置
        $score.css("left", $stage.width()-$score.width()-5+"px");
        $score.css("top", "5px");

        //speed 初始位置
        $speed.css("top", "5px");

        //建立敵人
        createEnemy();

        //計時器重設
        loop = setInterval(loop_func,1000/fps);

        //加速度重設
        speedup = setInterval(speedup_func,1000);

        //左鍵點擊
        $body.click(left_click_action);

        //右鍵點擊
        $body.contextmenu(right_click_action);
    }
    resetGame(); //初始化

    //生成障礙物
    function createEnemy(){
    	var enemy_pos = [10, 110, 210]; //障礙物初始位置
        //for (var i=0 ; i<enemy_count ; i++)
        //{
            $stage.append("<div class='sprite enemy'></div>");
            var $enemy = $stage.find(".enemy:last");
            $enemy.data("wave", enemy_wave);

            var rand_index = getRandomInt(0, enemy_pos.length-1);
            var enemy_x = enemy_pos.splice(rand_index, 1)[0];

            //障礙物起始位置
            $enemy.css("left", enemy_x+"px");
            $enemy.css("top", -($enemy.height())+"px");
        //};
    }

    //計時器(處理落下動畫跟碰撞機制)
    function loop_func(){

        $stage.find(".enemy").each(function(){
            var enemy_y = parseInt($(this).css("top"));
            if (enemy_y > enemy_wave_gap && $(this).data("wave") == enemy_wave){
                enemy_wave++;
                createEnemy();
            }

            //計算碰撞距離
            var px = parseInt($player.css("left"))+$player.width()/2,
                py = parseInt($player.css("top"))+$player.height()/2,
                ex = parseInt($(this).css("left"))+$(this).width()/2,
                ey = parseInt($(this).css("top"))+$(this).height()/2,
                p_e_dist = Math.sqrt(Math.pow(px-ex,2)+Math.pow(py-ey,2));

            //吃到皮卡丘&&加分
            if (hit_test_r*2 > p_e_dist){
            	$(this).remove();
		        score += score_add;
		        score = parseInt(score); //轉為整數，去除小數點
            }

            //超出範圍移除
            if (enemy_y > $stage.height()){
                GameOver();
            }

            //障礙物加速
            $(this).css("top", enemy_y+enemy_fall_speed+"px");

            //顯示分數
            $score.html(score+':分數');

            //顯示加速度
            speed = parseInt(enemy_fall_speed);
        	$speed.html('速度:'+speed);
        })
    }

    //每秒增加落下速度
    var add_speed = 0.5; //落下加速度
    function speedup_func(){
        if (enemy_fall_speed >= enemy_fall_max_speed)
        {
            enemy_fall_speed = enemy_fall_max_speed;
            clearInterval(speedup);
        }
        enemy_fall_speed += add_speed;
    }

    //遊戲結束
    function GameOver(){
        //清除計數器
        clearInterval(loop);

        //清除加速度
        clearInterval(speedup);

        //跳出結束畫面
        $stage.append("<div id='gameover' class='gameover'>RETRY</div>");
        $gameover = $("#gameover");
        /*
        $("#gameover").css({
            "background":"black",
            "opacity":"0.5",
            "width":"100%",
            "height":"100%",
            "position":"relative",
            "color":"white",
            "line-height":"500px",
            "text-align":"center",
            "font-size":"35px"
        })
        */

        //鎖定w, a, s, d
        //$body.unbind(keypress);

        //鎖定腳色移動
        $body.unbind("click");
        $body.unbind("contextmenu");

        $gameover.mousedown(function(){
            $gameover.unbind("mousedown");

            //清空Retry頁面
            $gameover.remove();

            //清空Enemy
            $stage.find(".enemy").remove();

            resetGame();
        })

        alert(`喔喔!失敗了!你的總分為：${score}`)
    }

    //stats.js
    var script=document.createElement('script');
    script.onload=function(){
        var stats=new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop(){
            stats.update();
            requestAnimationFrame(loop)});
    };
    //script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';
    script.src='../js/stats.min.js';
    document.head.appendChild(script);

})
