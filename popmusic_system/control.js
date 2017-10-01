$(document).ready(function() {

	/*
	jQuery.get('file.txt', function(data) {
   			alert(data)
			//process text file line by line
	})
	*/


    ScreenWidth = (window.innerWidth)
    BodyWidth = $('body').width()

	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	console.log("#Device : Mobile")

    	//框架1
		$('.tp1').css({"position":"relative"})

		//框架2
		$('.tp2').css({"position":"static"})

		//Logo調整
		$('.popmusic_logo').css({"margin":"0% auto"})
		$('.popmusic_logo').css({"margin-top":"5%"})

		//admin控制
		$('.admin').css({"margin-top":"2.5%"})
		$('.admin').css({"margin-bottom":"2.5%"})
		$('.admin').css({"font-size":"22px"})

		//表格調整
		//ToolbarWidth = 612
		//$('.toolbar').css({'width':ToolbarWidth})
		$('.toolbar').css({'margin':"0px auto"})
		$('.toolbar').css({'margin-top':"-5%"})
		//$('.toolbar').css({'margin-bottom':"-2.5%"})

    }
    else {
        console.log("#Device : PC")

        //$('body').css({"width":BodyWidth})

        //框架1
		$('.tp1').css({"position":"absolute"})

		//Logo調整
		//$('.popmusic_logo').css({"margin":"0% auto"})
		$('.popmusic_logo').css({"margin-top":"5%"})

		//admin控制
		$('.admin').css({"margin-top":"15%"})
		$('.admin').css({"margin-bottom":"15%"})
		$('.admin').css({"font-size":"28px"})

		//框架2
		$('.tp2').css({"position":"static"})

		//Table2位置調整
		tp2Position = $('.popmusic_logo').width() + 30
		$('.tp2').css({"margin-left":tp2Position})
		//$('.tp2').css({"margin-top":""})

		//表格調整
		ToolbarWidth = 612
		$('.toolbar').css({'width':ToolbarWidth})
		//$('.toolbar').css({'margin-top':"-2.5%"})
		$('.toolbar').css({'margin-bottom':"1%"})

		//顯示表單
		$('.tp2').append('<div class="excel-table"><iframe src="https://docs.google.com/spreadsheets/d/1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M/pubhtml?widget=true&amp;headers=false" class="excel"></iframe></div>')

		//表單寬度控制
		excelWidth = 612 //(window.innerWidth)/2.25
		$('.excel').css({"width":excelWidth})

    }

    //鎖定右鍵選單
    $("body").contextmenu(function(e){
        e.preventDefault()
        /*
        bootbox.confirm({
		    message: "是否刪除?",
		    buttons: {
		        confirm: {
		            label: '是',
		            className: 'btn-success'
		        },
		        cancel: {
		            label: '否',
		            className: 'btn-danger'
		        }
		    },
		    callback: function (result) {
		    	if(result==true) r = "是"
				else r = "否"

		        console.log('[訊息] ' + r)
		    }
		})
		*/
    })

	var styles = 'background: #f0f; color: #fff; padding: 0 100px; font-size: 30px;'
	console.log("%c"+"阿嘶～～～！(´;ω;`)", styles)

	/*
    var date = new Date()
    var d = date.getDate()
    var m = date.getMonth()
    var y = date.getFullYear()
    */
    
    color = ['red','orange','yellow','green','blue','purple']

    function random(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	API_KEY = 'AIzaSyBSXyW_Btqv0QTWWzjllBn0NZmYn1jN6mg'
	CLIENT_ID = '333036251532-o7cs05kl4ck7mrsnb7o66l7ehopihf2v.apps.googleusercontent.com'

	//scope = 'https://www.googleapis.com/auth/calendar'
	scope = 'https://www.googleapis.com/auth/spreadsheets'

	//scope1 = "https://www.googleapis.com/auth/drive"
	//scope2 = "https://www.googleapis.com/auth/drive.file"
	//scope3 = "https://www.googleapis.com/auth/spreadsheets"

	discoveryDocs = 'https://sheets.googleapis.com/$discovery/rest?version=v4'

	spreadsheetId = '1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M'
	range = 'A1'

	GoogleAppScript = "https://script.google.com/macros/s/AKfycbwXe1UlNdLZErA5ouR45DDPCw9ZctBj9CIoahuQL6rhvcTPCTJj/exec"

	Select_Events = []
	newName = ''
    newBand_Name = ''
	Select_Events_Start = ''
	Select_Events_End = ''

	RegisterTime = ''
	slt_st_full = ''
	slt_end_full = ''

	/*
	$('.buttons').append("<button class='read'>read</button>")
	$('.read').click(function(){
		newData = {"method":"read"}
		$.ajax({
    		url: GoogleAppScript,
    		type: "GET",
    		data: newData,
    		success: function(result){
    			//var data = JSON.stringify(result)
    			var data = result.split(',')
    			var data_array = []

    			//列Rows
    			//行Columns
    			//產生列次數 = 筆資料

    			//234
    			var data_length = data.length
    			//234/6 = 39
    			var data_rows = data.length/6

    			console.log(data_length)
				console.log(data_rows)

    			var i=0, j=0;
    			//i=0 -> data_rows 39
    			//j=0 -> 6
    			for(k=0 ; k<data_length ; k++){

    				/*
    				if(j==3||j==4||j==5){
    					data_array[i][j] = data[k].slice(0, -5)
    				}
    				else{
    					//data_array[i][j] = data[k] //###bug
    				}

    				console.log("j", j)
    				console.log("i", i)


    				if(j<6){
    					j++
    				}
    				else{
    					j=0
    					if(i<data_rows) i++
    					else i=0
    				}

    			}

    			//console.log(data_array)

    		}
    	})
	})
	*/

	/*
	$('.buttons').append("<button class='update'>update</button>")
	$('.update').click(function(){

		newData = {
			"method":"update"
		}

		$.ajax({
    		url: GoogleAppScript,
    		type: "POST",
    		data: newData,
    		success: function(result){
    			console.log(result)
    		}
    	})

	})

	$('.buttons').append("<button class='delete'>delete</button>")
	$('.delete').click(function(){

		newData = {
			"method":"delete"
		}

		$.ajax({
    		url: GoogleAppScript,
    		type: "POST",
    		data: newData,
    		success: function(result){
    			console.log(result)
    		}
    	})

	})
	*/

    //-----------------Full Calendar---------------

    $('#calendar').fullCalendar({


    	//行事曆設定
    	header:{
    		left:   'title',
		    center: '',
		    right:  'today month agendaWeek agendaDay prev next'
    	},

    	defaultView: 'agendaWeek',

    	//選擇
        selectable: true,
        selectHelper: true,
        //unselectAuto: true,

    	//網頁全開寬度1058
    	contentHeight: 1325,
    	//height: 1349,

        //handleWindowResize: true,
        //aspectRatio: 2,
		//windowResizeDelay: 1000,

        //timezone: 'UTC',



        //按下
        eventClick: function(event, element, view) {
        	
        	/*
        	var title1, title2

        	bootbox.prompt({
				  size: "small",
				  title: "團名變更", 
				  callback: function(result){
				  	title1 = result

					event.title = title1+"\n"+title2

					console.log(event.title)
				  }
			})
			bootbox.prompt({
				  size: "small",
				  title: "姓名變更", 
				  callback: function(result){
				  	title2 = result
				  }
			})


	        $('#calendar').fullCalendar('updateEvent', event)

	        $(this).contextmenu(function(e){
		        //e.preventDefault()
		        /*
		        bootbox.confirm({
				    message: "是否刪除?",
				    buttons: {
				        confirm: {
				            label: '是',
				            className: 'btn-success'
				        },
				        cancel: {
				            label: '否',
				            className: 'btn-danger'
				        }
				    },
				    callback: function (result) {
				    	if(result==true) r = "是"
						else r = "否"

				        console.log('[訊息] ' + r)
				    }
				})
				
		    })
    		*/
		    //console.log(Date())
			return false
	    },

    	//typeof()
    	//.toString()
    	//.parseInt()

	    //選擇
	    select: function( start, end, jsEvent, view, resource){
	    	
	    	//start
	    	slt_st = start._i
	    	slt_st = slt_st.toString().split(",")
			//console.log(slt_st)

	    	slt_yr_st = slt_st[0]
	    	slt_mth_st = (parseInt(slt_st[1])+1).toString()
	    	slt_day_st = slt_st[2]
	    	slt_hr_st = slt_st[3]
	    	slt_min_st = slt_st[4]
	    	slt_sec_st = slt_st[5]

	    	//RegisterTime 轉換格式前
	    	RegisterTime = slt_yr_st+'/'+slt_mth_st+'/'+slt_day_st

	    	//slt_hr_st 轉換格式前
	    	slt_hr_st_before = slt_hr_st

	    	//判斷上下午
	    	if(slt_hr_st>12){
	    		slt_Am_Pm_st = "下午"
	    		slt_hr_st_before -= 12
	    	}
	    	else slt_Am_Pm_st = "上午"

	    	//格式轉換
	    	if(slt_mth_st.length<2) slt_mth_st = '0'+slt_mth_st
	    	if(slt_day_st.length<2) slt_day_st = '0'+slt_day_st
	    	if(slt_hr_st.length<2) slt_hr_st = '0'+slt_hr_st
	    	if(slt_min_st.length<2) slt_min_st = '0'+slt_min_st
	    	if(slt_sec_st.length<2) slt_sec_st = '0'+slt_sec_st
			
			//array = [slt_yr_st, slt_mth_st, slt_day_st, slt_hr_st, slt_min_st, slt_sec_st]
	    	//console.log(array)

	    	slt_st_all = slt_hr_st_before+':'+slt_min_st+':'+slt_sec_st
	    	slt_st_full = slt_Am_Pm_st + ' ' + slt_st_all

	    	//console.log('slt_st_full : '+slt_st_full)

	    	//end
	    	slt_end = end._i
	    	slt_end = slt_end.toString().split(",")

	    	slt_yr_end = slt_end[0]
	    	slt_mth_end = (parseInt(slt_end[1])+1).toString()
	    	slt_day_end = slt_end[2]
	    	slt_hr_end = slt_end[3]
	    	slt_min_end = slt_end[4]
			slt_sec_end = slt_end[5]

			//slt_hr_end 轉換格式前
	    	slt_hr_end_before = slt_hr_end

	    	//判斷上下午
	    	if(slt_hr_end>12){
	    		slt_Am_Pm_end = "下午"
	    		slt_hr_end_before -= 12
	    	}
	    	else slt_Am_Pm_end = "上午"

	    	//格式轉換
	    	if(slt_mth_end.length<2) slt_mth_end = '0'+slt_mth_end
	    	if(slt_day_end.length<2) slt_day_end = '0'+slt_day_end
	    	if(slt_hr_end.length<2) slt_hr_end = '0'+slt_hr_end
	    	if(slt_min_end.length<2) slt_min_end = '0'+slt_min_end
	    	if(slt_sec_end.length<2) slt_sec_end = '0'+slt_sec_end

	    	//array2 = [slt_yr_end, slt_mth_end, slt_day_end, slt_hr_end, slt_min_end, slt_sec_end]
	    	//console.log(array2)

	    	slt_end_all = slt_hr_end_before+':'+slt_min_end+':'+slt_sec_end
	    	slt_end_full = slt_Am_Pm_end + ' ' + slt_end_all

	    	//console.log('slt_end_full : '+slt_end_full)

	    	//格式轉換
	    	dt_st = slt_yr_st+'-'+slt_mth_st+'-'+slt_day_st
	    	st_t = slt_hr_st+':'+slt_min_st
	    	Select_Events_Start = dt_st+'T'+st_t

	    	dt_end = slt_yr_end+'-'+slt_mth_end+'-'+slt_day_end
	    	end_t = slt_hr_end+':'+slt_min_end
	    	Select_Events_End = dt_end+'T'+end_t
	    	


	    	//console.log(Select_Events_Start)
	    	//console.log(Select_Events_End)

	    	//newBand_Name = prompt('團名', event.title)
	    	//newBand_Name = bootbox.prompt('團名', function(result){})

	    	
	    	//輸入資料
			bootbox.prompt({
				  size: "small",
				  title: "團名",
				  callback: function(result){

				  	newBand_Name = result

					//2017-07-05T17:58:11.939Z
					d = new Date()
					newD = d.toLocaleString()
					newDate = d.toLocaleDateString()
					newTime = d.toLocaleTimeString()

					nt1 = newTime.slice(0,2)
					nt1 = nt1+' '
					nt2 = newTime.slice(2)
					
					nt = nt1+nt2

					addEventTimestamps = newDate+' '+nt

				  	if(newBand_Name==null||newBand_Name==''){}
			    	else{
			    		
			    		/*
			    		EventHeader = newBand_Name
			    		Timestamps = addEventTimestamps
			    		Bands_Name = newBand_Name
			    		Names = newName
			    		Date_Times = RegisterTime
			    		Start_Times = Select_Events_Start
			    		End_Times = Select_Events_End

						//console.log(EventHeader, Timestamps, Bands_Name, Names, Date_Times, Start_Times, End_Times)
						$addEventToCalendar(EventHeader, Timestamps, Bands_Name, Names, Date_Times, Start_Times, End_Times)
						*/

						Select_Events.push(
						{
							title: newBand_Name+"\n"+newName,
						    start: Select_Events_Start,
						    end:   Select_Events_End,
						    color: color[random(0, color.length-1)],
							textColor: 'black',
						    editable: false,
						})

						//console.log(Select_Events[0])

						$('#calendar').fullCalendar( 'addEventSource', Select_Events )

						Select_Events = [] //清除事件快取

						//addEventTimestamps = ''

						newStart = slt_st_full
						newEnd = slt_end_full
						newTime = addEventTimestamps

						newData = {
							  "method": "write",
							  "Timestamps": newTime,
							  "Bands_Name": newBand_Name,
							  "Names": newName,
							  "Date_Times": RegisterTime,
							  "Start_Times": newStart,
							  "End_Times": newEnd
						}

						//console.log("[送出資料] :"), console.log(newData)

						$.ajax({
				    		url: GoogleAppScript,
				    		type: "POST",
				    		data: newData,
				    		success: function(result){
				    			console.log(result)
				    		}
				    	})
				    	console.log('[訊息] '+newTime+' 已儲存！')
						
					}

				  }

			})
	    	bootbox.prompt({
				  size: "small",
				  title: "姓名", 
				  callback: function(result){
				  	newName = result
				  }
			})

	    },


	    //移動
	    eventDestroy: function( event, element, view ){
			//console.log(event.title)
		},

	    //獲取時間
	    /*
	    dayClick: function(date) {
	    	console.log(date)
	        newDate = date.format()
	        console.log(newDate)
	    },
	    */

	})
    


    
	//---------------AJAX------------------

	sheet_flag_1 = '1'
	sheet_flag_2 = '2'
	sheet_flag_3 = '3'

	//AjaxUrl_1 = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheetId+"/values/"+ranges+"?key="+API_KEY

	AjaxUrl_2 = "https://spreadsheets.google.com/feeds/cells/"+spreadsheetId+"/"+sheet_flag_1+"/public/values?alt=json"

	//https://spreadsheets.google.com/feeds/cells/1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M/1/public/values?alt=json

	AjaxUrl_3 = "https://spreadsheets.google.com/feeds/cells/"+spreadsheetId+"/"+sheet_flag_2+"/public/values?alt=json"

	Json = '' //json
	Timestamps = [] //時間戳記
	Bands_Name = [] //團名
	Names = [] //姓名
	Date_Times = [] //日期
	Start_Times = [] //起始時間
	End_Times = [] //結束時間

	//獲取Excel資料
	$.ajax({
		url: AjaxUrl_2,
		method: "GET",
		success: function(result){

		Json = result
		JFE = Json.feed.entry
		JFE_Length = JFE.length;
		//console.log(JFE[6].content.$t)
		
		//由第6個開始跑資料
		//一列6組資料
		//迴圈讀取資料 由6開始
		//console.log(JFE[59].content.$t)

		n = 1;
		for(var i=6;i<JFE_Length;i++){
			data = JFE[i].content.$t;
			switch(n){
				case 1:
					Timestamps.push(data) //時間戳記
					break;
				case 2:
					Bands_Name.push(data) //團名
					break;
				case 3:
					Names.push(data) //姓名
					break;
				case 4:
					//2017/7/5
					//split分割文字
					dt = data.split("/")
					dt_y = dt[0]
					dt_m = dt[1]
					dt_d = dt[2]
					if(dt_m.length<2) dt_m = '0'+dt_m
					if(dt_d.length<2) dt_d = '0'+dt_d
					new_dt = dt_y+'-'+dt_m+'-'+dt_d
					//console.log(new_dt)
					Date_Times.push(new_dt) //日期
					break;
				case 5:
					//.slice(3) //利用slice分割字串取得時間
					//上下午處理,轉換24小時制
					//std_h => Start_Time_Data_h
					//std_m_s => Start_Time_Data_m_s
					//下午 5:00:00
					//下午 11:00:00
					Am_Pm = data.slice(0,-8)
					t_all = data.slice(3,-3)
					t_array = t_all.split(":")
					t_h = t_array[0]
					t_m = t_array[1]

					if (Am_Pm=='下午'||Am_Pm=='下午 ') t_h = parseInt(t_h)+12
					if(t_h.length<2) t_h = '0'+t_h
					t = t_h+':'+t_m
					Start_Times.push(t) //起始時間
					break;
				case 6:
					//.slice(3) //利用slice分割字串取得時間
					//上下午處理,轉換24小時制
					//下午 5:00:00
					//下午 11:00:00
					Am_Pm = data.slice(0,-8)
					t_all = data.slice(3,-3)
					t_array = t_all.split(":")
					t_h = t_array[0]
					t_m = t_array[1]

					if (Am_Pm=='下午'||Am_Pm=='下午 ') t_h = parseInt(t_h)+12
					if(t_h.length<2) t_h = '0'+t_h
					t = t_h+':'+t_m
					End_Times.push(t) //結束時間
					break;
				default:
					break;
			}
			if(n==6) n=1;
			else n++;
		}

		console.log("[訊息] 載入資料中...")
		//console.log(Timestamps)
		//console.log(Bands_Name)
		//console.log(Names)
		//console.log(Date_Times)
		//console.log(Start_Times)
		//console.log(End_Times)

		EventHeader = Bands_Name

		$addEventToCalendar(EventHeader, Timestamps, Bands_Name, Names, Date_Times, Start_Times, End_Times)

		}

	}).done(function(){
		console.log('[訊息] Google Excel 資料載入成功!')
	})



	//addEventToCalendar新增事件到行事曆
	$addEventToCalendar = function(EventHeader, Timestamps, Bands_Name, Names, Date_Times, Start_Times, End_Times)
	{

		Events_Array = []
		for(i=0 ; i<EventHeader.length ; i++){
			Events_Array[i] = {
				//"\n" "\r"
				title: Bands_Name[i]+"\n"+Names[i],
			    start: Date_Times[i]+'T'+Start_Times[i],
			    end:   Date_Times[i]+'T'+End_Times[i],
			    color: color[random(0, color.length-1)],
				textColor: 'black',
			    editable: false,
			}
		}

		//$('#calendar').fullCalendar( 'renderEvents', Events_Array, true );
		$('#calendar').fullCalendar( 'addEventSource', Events_Array )

	}

	
});
