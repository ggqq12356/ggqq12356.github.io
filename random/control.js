$(function(){

	//取出隨機整數
	function getRandomInt(min, max){
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	meta_set() //head -> meta 顯示設定
	function meta_set(){
		$('head').append(
	    	"<meta name='viewport' content='width=device-width, initial-scale=0.5, maximum-scale=1.0, user-scalable=0'>",
	    	"<meta name='theme-color' content='purple'>"
	    )
	}

	$('body').css({
		"font-size":"50px",
		"font-weight":"bold",
		"background-color":"#ff9999"
	})

	random_value = [01, 02, 03, 04, 05, 06, 07, 09, 10, 
					11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
					21, 22, 23, 24, 25, 26, 27, 29, 30,
					31, 32, 33, 34, 35, 36, 37, 39]

	$('body').append("[亂數]:<textarea></textarea><br>")

	for (i=0 ; i<random_value.length ; i++){

		if(i!=random_value.length-1){
			$('textarea').append(random_value[i]+", ")
		}
		else{
			$('textarea').append(random_value[i])
		}
		
		if(random_value[i]%10==0){
			$('textarea').append("\n")
		}
		
	}

	$('textarea').css({
		"width":"540px",
		"height":"220px",
		"font-size":"26px",
		"font-weight":"bold"
	})

	$('body').append("[顯示數量]:<input value=\'6\'></input>")
	$('input').css({
		"width":"200px",
		"height":"130px",
		"font-size":"80px",
		"font-weight":"bold"
	})

	$('body').append("<button>OK</button><br>")
	$('button').css({
		"width":"200px",
		"height":"140px",
		"font-size":"80px",
		"font-weight":"bold",
		"margin-left":"10px",
	})		

	$('body').append("<span></span>")

	$('button').click(function(){

		showMax = $('input').val()

		$('span').html("")

		int = []
		getdata = ($('textarea').val()).split(",")

		for(let i=0 ; i<getdata.length ; i++){
			int.push( parseInt(getdata[i]) )
		}

		//console.log("int:"+int)

		result_list = []

		for (let i=0 ; i<showMax ; i++){

			r = getRandomInt(0, int.length-1)

			//console.log("int.length:"+int.length)
			//console.log("r:", r)

			//console.log("int[r]=>"+int[r])
			//console.log("int.pop(r)=>"+int.pop(int[r]))

			showValue = int[r]
			int.pop(r) //clear

			console.log(r, showValue)
			if ( result_list.includes(showValue) ) continue
			result_list.push(showValue)

			//pop(t) t-> index

			//console.log("showValue:"+showValue.toString())
			//console.log("showValue:"+showValue)
		}

		//result_list = result_list.sort()

		//console.log("result_list.sort() => "+result_list.sort())

		//result_list = [60, 50, 40, 30, 20, 10] //debug

		$('span').append("[排序前]:"+result_list.toString()+"<br>")

		//Sort
		for (let i=0 ; i<result_list.length-1 ; i++) {

			let count = 0

			for (let j=0 ; j<result_list.length-1 ; j++) {

				if ( j!=result_list.length-1 ) {
					if ( result_list[j] < result_list[j+1]  ) {
						temp = result_list[j]
						result_list[j+1] = result_list[j]
						result_list[j] = temp
						++count
					}
				}
				
			}

			if ( count==result_list.length ) break

			$('span').append("[排序 "+(i+1)+" ]:"+result_list.toString()+"<br>")
		}

		$('span').append("[排序後]:"+result_list.toString()+"<br>")

		//console.log("result_list => "+result_list)

	})

})