$(function(){

		//取出隨機整數
		function getRandomInt(min, max){
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		$('body').css({
			"font-size":"24px",
			"font-weight":"bolder",
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
			"width":"400px",
			"height":"80px",
			"font-size":"16px",
			"font-weight":"bolder"
		})

		$('body').append("[顯示數量]:<input value=\'6\'></input>")
		$('input').css({
			"width":"200px",
			"height":"25px",
			"font-size":"20px",
			"font-weight":"bolder"
		})

		$('body').append("<button>OK</button><br>")
		$('button').css({
			"width":"100px",
			"height":"35px",
			"font-size":"20px",
			"font-weight":"bolder"
		})		

		$('body').append("<span></span>")

		$('button').click(function(){

			showMax = $('input').val()

			$('span').html("")

			int = []
			getdata = ($('textarea').val()).split(",")

			for(i=0 ; i<getdata.length ; i++){
				int.push( parseInt(getdata[i]) )
			}

			//console.log("int:"+int)

			result_list = []

			for (i=0 ; i<showMax ; i++){

				r = getRandomInt(0, int.length-1)

				//console.log("int.length:"+int.length)
				//console.log("r:", r)

				//console.log("int[r]=>"+int[r])
				//console.log("int.pop(r)=>"+int.pop(int[r]))

				showValue = int[r]

				result_list.push(showValue)

				int.pop(r-1) //clear

				//pop(t) t-> index

				//console.log("showValue:"+showValue.toString())
				//console.log("showValue:"+showValue)
			}

			//result_list = result_list.sort()

			//console.log("result_list.sort() => "+result_list.sort())

			//result_list = [60, 50, 40, 30, 20, 10] //debug

			$('span').append("[排序前]:"+result_list.toString()+"<br>")

			//Sort
			for (i=0 ; i<result_list.length-1 ; i++){

				//break

				for (j=0 ; j<result_list.length-1 ; j++){

					if(j!=result_list.length-1){
						if(result_list[j] > result_list[j+1]){
							temp = result_list[j]
							result_list[j] = result_list[j+1]
							result_list[j+1] = temp
						}
					}
					
				}

				$('span').append("[排序 "+(i+1)+" ]:"+result_list.toString()+"<br>")
			}

			$('span').append("[排序後]:"+result_list.toString()+"<br>")

			//console.log("result_list => "+result_list)

		})

	})