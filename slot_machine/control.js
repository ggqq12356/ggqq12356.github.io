$(function(){

	///////////////////////////////////////////////////////////////////

	$win_width = window.innerWidth
	$win_height = window.innerHeight

	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	print("#Device : Mobile");
    }
    else {
        print("#Device : PC");
    }

    meta_set() //head -> meta 顯示設定
	function meta_set(){
		$('head').append(
	    	"<meta name='viewport' content='width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=0'>",
	    	"<meta name='theme-color' content='purple'>",
	    )
	}

	///////////////////////////////////////////////////////////////////

	css_set()
	function css_set(){
		$('.content').css({
			"width":"700px",
			//"height":"600px",
		})

		///

		$('.top').css({
			"height":"50px",
			"display":"inline-flex",
		})

		$('.score').css({
			"height":"50px",
			"font-size":"40px",
		})

		$('.time').css({
			"height":"50px",
			"font-size":"40px",
			"margin-left":"100px",
		})

		///

		$('.mid').css({
			"height":"auto",
		})

		$('.screen').css({
			"width":"520px",
			"height":"520px",
			"padding-top":"10px",
			"margin-left":"100px",
			"background":"white",
		})

		///

		$('.bottom').css({
			"height":"100px",
		})

		$('button').css({
			"margin-top":"35px",
		})	
	}

	///////////////////////////////////////////////////////////////////

	////////// init define //////////

	score = 0

	color_list = ["red", "blue", "green", "yellow", "purple", "orange"]

	screen_view = [
		1, 1, 1, 1, 1, 
		1, 0, 0, 0, 1, 
		1, 0, 2, 0, 1, 
		1, 0, 0, 0, 1, 
		1, 1, 1, 1, 1, 
	]

	/*
	indexs of screen view
	screen_view = [
		1, 2, 3, 4, 5,
		6, 7, 8, 9, 10,
		11, 12, 13, 14, 15,
		16, 17, 18, 19, 20,
		21, 22, 23, 24, 25
	]
	*/

	ch_list = [
		1, 2, 3, 4, 5,
		10, 15, 20, 
		25, 24, 23, 22, 21,
		16, 11, 6,
	]

	obj_int_list = [
		01, 02, 03, 04, 05,
		16,'x','x','x', 06,
		15,'x','x','x', 07,
		14,'x','x','x', 08,
		13, 12, 11, 10, 09,
	]

	/*
	obj_show_list = [
		'我', '愛', '鄧', '紫', '棋',
		'♥','x','x','x', '♥',
		'♥','x','x','x', '♥',
		'♥','x','x','x', '♥',
		'G', 'E', 'M', '好', '正',
	]
	*/

	/*
	obj_show_list = [
		01, 02, 03, 04, 05,
		16,'x','x','x', 06,
		15,'x','x','x', 07,
		14,'x','x','x', 08,
		13, 12, 11, 10, 09,
	]
	*/

	obj_show_list = [
		'●', '＄', 'Ω', '■', '▲',
		'▲','x','x','x', '▼',
		'♀','x','x','x', '♂',
		'＄','x','x','x', '♥',
		'♥', 'Ω', '●', '▼', '■',
	]

	count = 0

	////////// init define //////////

	//----------TOP

	//Score
	$('.score').html("Score:"+score)

	//Time

	//timeCheck = setInterval(getNowTime, 1000)

	//getNowTime()

	function getNowTime() {
		d = new Date()
		h = d.getHours()
		m = d.getMinutes()
		s = d.getSeconds()

		time = h+":"+m+":"+s
		$('.time').html("Time:"+time)
	}

	//clearInterval(timeCheck)

	/////////////////////////////////////////////////////////////////

	//setTimeout(start, 100) //開啟遊戲

	function start(){
		r = getRandomInt(1, ch_list.length)
		//console.log("[r]=>", r)
		//$('.answer').html(r)
		add_t = 100
		add_t_max = r*1000
		gameTime = setInterval(game, 20) //進行遊戲
	}

	function game(){

		move()

		//console.log("[add_t]=>", add_t)

		if(add_t == add_t_max){
			clearInterval(gameTime)
			check_score()
		}
		add_t+=100
	}

	function check_score(){
		console.log("get=>", get)
		console.log("answer=>", answer)

		if(get == answer){

			switch(answer){
				case '●':
					score+=100
					break
				case 'Ω':
					score+=200
					break
				case '■':
					score+=300
					break
				case '▲':
					score+=400
					break
				case '▼':
					score+=500
					break
				case '♥':
					score+=600
					break
				case '♀':
					start()
					break
				case '♂':
					score-=100
					break
				case '＄':
					score+=1000
					break
			}
			$('.score').html("Score:"+score)
			setTimeout("alert('You got answer!!!')", 100)
		}

	}

	///////////////////////////////////////////////////////////////////
	//----------MID

	//Screen

	build_block() //建立方塊
	function build_block(){
		for(i=0 ; i<screen_view.length ; i++){

			$('.screen').append("<div class='obj"+(i+1)+"'></div>")

			switch(screen_view[i]){
				case 0:
					font_color_set = "white"
					color_set = "white"
					int_set = obj_show_list[i]
					break;
				case 1:
					font_color_set = "black"
					color_set = color_list[i%color_list.length]
					int_set = obj_show_list[i]
					break;
				case 2:
					font_color_set = "white"
					color_set = "black"
					int_set = "<div class='answer'>X</div>"
					break;
			}

			$('.obj'+(i+1)).css({
				"color":font_color_set,
				"background-color":color_set,
				"width":"100px",
				"height":"100px",
				"display":"inline-block",
				"margin-bottom":"0px",
			})

			$('.obj'+(i+1)).append("<span class='obj_int'>"+int_set+"</span>")
			$('.obj_int').css({
				"font-size":"80px",
				"margin-top":"100px",
			})
		}

		for(i=0;i<ch_list.length;i++){

			$('.check').append("<div class='select'>"+obj_show_list[ch_list[i]-1]+"</div>")

			$('.check').css({
				"margin-top":"10px",
				"border":"5px solid black",
				"margin-bottom":"-20px",
				"padding-top":"5px",
				"padding-bottom":"5px",
			})

			$('.select').css({
				"width":"65px",
				"height":"65px",
				"display":"inline-block",
				"font-size":"65px",
				"background-color":"white",
				"border":"2px solid blue",
				"padding":"5px",
				"cursor":"pointer",
			})

			if((i+1)%8==0){
				$('.check').append("<br>")
			}
		}

		$('.select').mouseenter(function(){
			$(this).css({
				"background-color":"purple",
			})
		})

		$('.select').mouseleave(function(){
			$(this).css({
				"background-color":"white",
			})
		})

		$('.select').click(function(){
			get = $(this).html()
			console.log("[get]=>", get)
			$('.answer').html(get)
		})
	}

	/// app ///
	i=0
	function move() {

		stop = i+1
		answer = obj_show_list[ ch_list[i]-1 ]
		console.log('[move stop]=>', stop, answer)
		//$('.answer').html(answer)

		//最後一項設定顏色
		if(i==ch_list.length){
			$('.obj'+ch_list[ch_list.length-1]).css({
				//"background-color":color_list[i%color_list.length],
				"border":"0px solid black",
			})
		}

		//歸零
		if(i==ch_list.length) i=0

		//被選擇轉換顏色
		$('.obj'+ch_list[i]).css({
			//"background-color":"black",
			"border":"5px solid black",
		})

		//顏色還原
		$('.obj'+ch_list[i-1]).css({
			"background-color":color_list[i%color_list.length],
			"border":"0px solid black",
		})

		i++
	}

	function random_run() {

		r = getRandomInt(0, ch_list.length-1)

		$('.obj'+ch_list[r]).css({
			"background-color":"black"
		})

		// debug
		//print("ch_list=>", ch_list)
		//print("r", r)
	}

	function reset(){
		for(i=0 ; i<screen_view.length ; i++){

			switch(screen_view[i]){
				case 0:
					color_set = "white"
					break;
				case 1:
					color_set = color_list[i%color_list.length]
					break;
				case 2:
					color_set = "black"
					break;
			}

			$('.obj'+(i+1)).css({
				"background-color":color_set,
				"width":"100px",
				"height":"100px",
				"display":"inline-block",
				"margin-bottom":"0px",
				"border":"0px solid black",
			})

		}
	}

	///////////////////////////////////////////////////////////////////
	//----------BOTTOM

	//Button
	$('.bt1').click(function(){
		$('.score').html("Score:"+score)
		//reset()
		start()
		//random_run()
	})

	$('.bt2').click(function(){
		score=0
		$('.score').html("Score:"+score)
		reset()
	})

	///////////////////////////////////////////////////////////////////

	//random
	//取出隨機整數
	function getRandomInt(min, max){
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//print
	function print(text){
		console.log(text)
	}

	function debug() {
		print("debug!!! count=>"+count++)
	}

	///////////////////////////////////////////////////////////////////


})