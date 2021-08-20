$(function(){

	//取出隨機整數
	function getRandomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var random_value = [
		01, 02, 03, 04, 05, 06, 07, 09, 10,
		11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 29, 30,
		31, 32, 33, 34, 35, 36, 37, 39
	]

	for (let i=0 ; i<random_value.length ; i++) {

		if(i!=random_value.length-1) {
			$('textarea').append(random_value[i]+", ")
		} else {
			$('textarea').append(random_value[i])
		}
		
		if(random_value[i]%10==0){
			$('textarea').append("\n")
		}
		
	}

	$('input').css({
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

	$('button').click(function() {

		let max = $('input').val()

		$('span').html("")

		let numList = []
		let getdata = ($('textarea').val()).split(",")

		for(let i=0 ; i<getdata.length ; i++){
			numList.push(parseInt(getdata[i]))
		}

		let output = []
		for (let i=0; i<max; ++i) {
			let ri = getRandomInt(0, numList.length - 1)
			let value = num[ri]

			num.pop(ri) //clear
			console.log(ri, value)

			if (output.includes(value)) continue
			output.push(value)
		}

		$('span').append("[排序前]:"+output.toString()+"<br>")

		//Sort
		for (let i=0 ; i<output.length-1 ; i++) {

			let count = 0

			for (let j=0 ; j<output.length-1 ; j++) {
				if ( output[j] > output[j+1]  ) {
					let temp = output[j]
					output[j] = output[j+1]
					output[j+1] = temp
					++count
				}
			}

			if ( count==0 ) break

			$('span').append("[排序 "+(i+1)+" ]:"+output.toString()+"<br>")
		}

		$('span').append("[排序後]:"+output.toString()+"<br>")
	})

})