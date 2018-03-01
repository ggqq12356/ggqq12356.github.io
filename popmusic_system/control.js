$(document).ready(function() {

	/*
	jQuery.get('file.txt', function(data) {
   			alert(data)
			//process text file line by line
	})
	*/

	function random(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

    ScreenWidth = (window.innerWidth)
    BodyWidth = $('body').width()
    Device = "unknown"

	//判斷裝置種類
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	Device = "Mobile"
    	console.log("#Device : Mobile")

    	$("body").css({
    		//"margin":"30px auto",
    		//"padding-left":"2%",
    		//"padding-right":"2%",
    		//"padding-top":"1%",
    		//"padding-bottom":"1%",
    	})

    	$(".main").css({
    		"margin":"10px",
    		//"padding-left":"5%",
    		//"padding-right":"5%",
    		//"display":"grid",
    	})

    	$('.top').css({
			//"display":"flex",
    	})

    	//框架1
		$('.tp1').css({
			//"position":"relative",
			//"position":"static",
		})

		//框架2
		$('.tp2').css({
			//"position":"static",
			//"text-align":"center",
		})

		//Logo調整
		$('.popmusic_logo').css({
			//"margin-top":"1%",
			//"margin-left":"300px",
			"margin-left":"11.5%",
			//"width":"200%",
			//"height":"85%",
		})

		//admin控制
		$('.admin').css({
			"margin-top":"2.5%",
			"margin-bottom":"-2.5%",
			"font-size":"22px",
		})

		$('.mid').css({
			//"margin":"10px",
		})

		//表格調整
		//ToolbarWidth = 612
		ToolbarWidth = innerWidth/1.5
		$('.toolbar').css({
			"margin":"0% auto",
			//"margin-top":"40%",
			//"margin-bottom":"-2.5%",
			//"margin-left":"1.5%",
			"width":ToolbarWidth,
			//"padding-left":"5%",
			//"padding-right":"5%",
		})

		$('.font').css({
			"font-size":"14px",
		})

		$('.columns').css({
			//"width":"500px",
		})

    }
    else {
    	Device = "PC"
        console.log("#Device : PC")

        $('body').css({
        	//"width":BodyWidth,
        	"padding-left":"10%",
        	"padding-right":"10%",
        })

        //框架1
		$('.tp1').css({
			"position":"absolute",
		})

		//Logo調整
		$('.popmusic_logo').css({
			//"margin":"0% auto",
			"margin-top":"5%",
		})

		//admin控制
		$('.admin').css({
			//"margin-top":"15%",
			//"margin-bottom":"15%",
			"font-size":"28px",
		})

		//框架2
		//Table2位置調整
		tp2Position = $('.popmusic_logo').width() + 50
		$('.tp2').css({
			"position":"static",
			"margin-left":tp2Position,
			//"margin-top":"",
		})

		//表格調整
		ToolbarWidth = 612
		$('.toolbar').css({
			"width":ToolbarWidth,
			//"margin-top":"-2.5%",
			"margin-bottom":"1%",
		})

		$('.font').css({
			"font-size":"18px",
		})

		//顯示表單
		$('.tp2').append('<div class="excel-table"><iframe src="https://docs.google.com/spreadsheets/d/1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M/pubhtml?widget=true&amp;headers=false" class="excel"></iframe></div>')

		//表單寬度控制
		excelWidth = 612 //(window.innerWidth)/2.25
		$('.excel').css({
			"width":excelWidth,
		})

    }

    /*
    $('.tp2').append("<table border='1' class='toolbar'></table>")

    $('.toolbar').append("<!--第1列-->")

    $('.toolbar').append("AJHADSHJASJHKJHKASD")

    $('.toolbar').append(
	"<tr><td colspan='2'><a href='./'' target='_top' style='font-size: 24px;color: yellow;text-decoration:none;'>聯大熱音社 - 借社辦系統</a></td></tr>"
	)

	$('.toolbar').append("<!--第2列-->")
	$('.toolbar').append(
	"<tr>",
	"<td class='columns'><a href='https://fb.me/nuupopmusic' target='_blank' class='font'>聯大熱音社 - FB粉絲專頁</a></td>",
	"<td class='columns'><a href='https://fb.com/groups/133450906754131/' target='_blank' class='font'>聯大熱音社 - FB社團</a></td>",
	"</tr>"
	)

	$('.toolbar').append("<!--第3列-->")
	$('.toolbar').append(
	"<tr>",
	"<td class='columns'><a href='https://goo.gl/jXvAAT' target='_blank' class='font'>106(下)固定團時間表</a></td>",
	"<td class='columns'><a href='https://goo.gl/kpYBvz' target='_blank' class='font'>106(下)新生表演</a></td>"
	"</tr>"
	)

	$('.toolbar').append("<!--第4列-->")
	$('.toolbar').append(
	"<tr>",
	"<td class='columns'><a href='https://goo.gl/GvXhcF' target='_blank' class='font'>106(下)固定團</a></td><td class='columns'></td>",
	"</tr>"
	)
	*/

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
    
    color = ['PaleTurquoise','PaleGreen','PaleGoldenRod','Orchid','OrangeRed','Plum']

	API_KEY = 'AIzaSyAyHn3qgU8cgp5Mbpmp57RsHy4qlxrzRTQ'
	CLIENT_ID = '333036251532-o7cs05kl4ck7mrsnb7o66l7ehopihf2v.apps.googleusercontent.com'

	//scope = 'https://www.googleapis.com/auth/calendar'
	scope = 'https://www.googleapis.com/auth/spreadsheets'

	//scope1 = "https://www.googleapis.com/auth/drive"
	//scope2 = "https://www.googleapis.com/auth/drive.file"
	//scope3 = "https://www.googleapis.com/auth/spreadsheets"

	discoveryDocs = 'https://sheets.googleapis.com/$discovery/rest?version=v4'

	spreadsheetId = '1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M'
	range = 'A1'

	GoogleAppScript = 'https://script.google.com/macros/s/AKfycbwT8Qictwvyo_WvqFbCTgHaqpopPo2J9GTFfF3co3Ee9kzCIN8l/exec'

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
    if (Device == "Mobile") CalendarHeight = 1165
    if (Device == "PC") CalendarHeight = 1124

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
    	contentHeight: CalendarHeight,
    	//height: 1349,

        //handleWindowResize: true,
        //aspectRatio: 2,
		//windowResizeDelay: 1000,

        //timezone: 'UTC',

        //預設
        events: [
        /*
        {
	      title: '昨天的活動',
	      start: moment().subtract(1, 'days').format('YYYY-MM-DD')
	    },
	    */
	    ],

        //
        dayClick: function(date, event, view) {
        	/*
		    console.log('add event');
		    console.log(date);
		    console.log(event);
		    cosole.log(view);
		    */
		},

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
	    	slt_st = slt_st.toString().split(",")			//console.log(slt_st)

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

						console.log("[送出資料] :"), console.log(newData)

						$.ajax({
				    		url: GoogleAppScript,
				    		type: "POST",
				    		data: newData,
				    		success: function(result){
				    			console.log(result)
				    		}
				    	}).done(function(){
				    		console.log('[訊息] '+newTime+' 已儲存！')
				    	})
						
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


	//固定團時間
	AjaxUrl_Fixed_Band = "https://spreadsheets.google.com/feeds/cells/19ufVwi9Nu1Z9N30hywUe_Mjv16qfUmr5nTQUbRdIglo/1/public/values?alt=json"

	$.ajax({
		url: AjaxUrl_Fixed_Band,
		method: "GET",
		success: function(result){

		//console.log(result)

		Json = result
		JFE = Json.feed.entry
		JFE_Length = JFE.length;

		$('.bottom').append("<table border='1' class='view'></table>")

		L1 = []
		L2 = []
		L3 = []
		L4 = []
		L5 = []
		L6 = []
		L7 = []
		L8 = []

		for(i=0;i<JFE_Length;i++){
			data = JFE[i].content.$t

			if( (i+1)%8==0 ){
				$('.view').append("<tr class='row"+( (i+1)/8-1 )+"'>test</tr>")
			}

			switch( (i+1)%8 ){
				case 1:
					L1.push(data)
					break
				case 2:
					L2.push(data)
					break
				case 3:
					L3.push(data)
					break
				case 4:
					L4.push(data)
					break
				case 5:
					L5.push(data)
					break
				case 6:
					L6.push(data)
					break
				case 7:
					L7.push(data)
					break
				case 0:
					L8.push(data)
					break
			}

		}

		for(i=0;i<=L1.length;i++){
			$('.row'+i).append("<td class='vi vi1 week'>"+L1[i]+"</td>")
			$('.row'+i).append("<td class='vi vi2 week'>"+L2[i]+"</td>")
			$('.row'+i).append("<td class='vi vi3 week'>"+L3[i]+"</td>")
			$('.row'+i).append("<td class='vi vi4 week'>"+L4[i]+"</td>")

			$('.row'+i).append("<td class='vi vi5 week'>"+L5[i]+"</td>")
			$('.row'+i).append("<td class='vi vi6 week'>"+L6[i]+"</td>")
			$('.row'+i).append("<td class='vi vi7 week'>"+L7[i]+"</td>")
			$('.row'+i).append("<td class='vi vi8 week'>"+L8[i]+"</td>")
		}

		$('.vi').css({
			"color":"blue",
			"background-color":"rgb(214,216,217)",
			"border":"2px solid black",
			"font-size":"20px",
			"font-weight":"bold",
			"text-align":"center",
			"width":"150px",
			"height":"50px",
		})

		vi_colors = [
			"rgb(214,216,217)",
			"rgb(219,112,147)",
			"rgb(173,216,230)",
			"rgb(144,238,144)",
			"rgb(250,250,210)",
			"rgb(147,112,219)",
			"rgb(240,230,140)",
			"rgb(255,182,193)",
		]

		for(i=0;i<8;i++){
			$('.vi'+(i+1)).css({
				"color":"black",
				"background-color":vi_colors[i],
				"font-family":"微軟正黑體",
			})
		}

		/*
		console.log(L1)
		console.log(L2)
		console.log(L3)
		console.log(L4)
		console.log(L5)
		console.log(L6)
		console.log(L7)
		console.log(L8)
		*/

		// 新增至行事曆
		Monday = []
		Tuesday = []
		Wednesday = []
		Thursday = []
		Friday = []
		Saturday = []
		Sunday = []

		for(i=1;i<L1.length;i++){

			//1
			if(L2[i]!='Ｘ'){
				data = "一"+"|"+L1[i]+"|"+L2[i]
				Monday.push(data)
			}

			//2
			if(L3[i]!='Ｘ'){
				data = "二"+"|"+L1[i]+"|"+L3[i]
				Tuesday.push(data)
			}

			//3
			if(L4[i]!='Ｘ'){
				data = "三"+"|"+L1[i]+"|"+L4[i]
				Wednesday.push(data)
			}

			//4
			if(L5[i]!='Ｘ'){
				data = "四"+"|"+L1[i]+"|"+L5[i]
				Thursday.push(data)
			}

			//5
			if(L6[i]!='Ｘ'){
				data = "五"+"|"+L1[i]+"|"+L6[i]
				Friday.push(data)
			}

			//6
			if(L7[i]!='Ｘ'){
				data = "六"+"|"+L1[i]+"|"+L7[i]
				Saturday.push(data)
			}

			//7
			if(L8[i]!='Ｘ'){
				data = "日"+"|"+L1[i]+"|"+L8[i]
				Sunday.push(data)
			}
		}

		/*
		console.log(Monday)
		console.log(Tuesday)
		console.log(Wednesday)
		console.log(Thursday)
		console.log(Friday)
		console.log(Saturday)
		console.log(Sunday)
		*/

		fixed_Bands = []
		Weeks = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday]
		k=0
		for(i=0;i<Weeks.length;i++){
			for(j=0;j<Weeks[i].length;j++){

				data = Weeks[i][j]

				week = data.split('|')[0]
				time = data.split('|')[1].split('~')
				start = time[0]
				end = time[1]
				name = data.split('|')[2]

				/*
				console.log(week)
				console.log(start)
				console.log(end)
				console.log(name)
				*/

				fixed_Bands[k] = {
					"week":week, 
					"start":start, 
					"end":end, 
					"name":name
				}
				k++
			}
		}

		//console.log(fixed_Bands)

		Events_Array = []
		for(i=0 ; i<fixed_Bands.length ; i++){

			week = fixed_Bands[i]['week']
			start = fixed_Bands[i]['start']
			end = fixed_Bands[i]['end']
			name = fixed_Bands[i]['name']

			//console.log( moment().subtract(1, 'days').format('YYYY-MM-DD') )

			switch(week){
				case '一':
					week = 1
					break
				case '二':
					week = 2
					break
				case '三':
					week = 3
					break
				case '四':
					week = 4
					break
				case '五':
					week = 5
					break
				case '六':
					week = 6
					break
				case '日':
					week = 0
					break
			}

			Events_Array[i] = {
				title: name,
			    start: start,
			    end: end,
			    dow: [week],
			    color: color[random(0, color.length-1)],
				textColor: 'black',
			    editable: false,
			}
		}

		//console.log(Events_Array)
		
		//$('#calendar').fullCalendar( 'renderEvents', Events_Array, true );
		$('#calendar').fullCalendar( 'addEventSource', Events_Array )
		

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