$(document).ready(function() {

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


	//==============================OAuth2.0====================================

	/*
	OLD
	function start() {
		  // 2. Initialize the JavaScript client library.
		  gapi.client.init({
		    'apiKey': API_KEY,
		    // Your API key will be automatically added to the Discovery Document URLs.
		    'discoveryDocs': [discoveryDocs],
		    // clientId and scope are optional if auth is not required.
		    'clientId': CLIENT_ID,
		    'scope': scope,
		  }).then(function() {
		    // 3. Initialize and make the API request.

		  }).then(function(response) {
		    //console.log(response)
		  }, function(reason) {
		    //console.log('Error: ' + reason.result.error.message);
		  })
	}
	// 1. Load the JavaScript client library.
	gapi.load('client', start)
	*/

	function initClient() {

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/spreadsheets'

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': scope,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus)
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
      });
    }

    gapi.load('client:auth2', initClient)

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        //makeApiCall()
      }
    }

    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn()
    }

    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut()
    }

    $('#signin-button').click(function(){
    	handleSignInClick()
    })
    $('#signout-button').click(function(){
    	handleSignOutClick()
    })


	addEventTimestamp = ''
	$('.save-calendar').click(function(){

		newTitle = Select_Events[0].title
		newStart = Select_Events[0].start
		newEnd = Select_Events[0].end
		newTime = addEventTimestamp

		newValues = [
					newTime,
					newBand_Name,
					newName,
					RegisterTime,
					Select_Events_Start,
					Select_Events_End
		]

		makeApiCall()
		function makeApiCall() {
		      var params = {
		        // The ID of the spreadsheet to update.
		        spreadsheetId: spreadsheetId,  // TODO: Update placeholder value.

		        // The A1 notation of a range to search for a logical table of data.
		        // Values will be appended after the last row of the table.
		        range: range,  // TODO: Update placeholder value.

		        // How the input data should be interpreted.
		        valueInputOption: 'USER_ENTERED',  // TODO: Update placeholder value.

		        // How the input data should be inserted.
		        insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
		      };

		      var valueRangeBody = {
		        // TODO: Add desired properties to the request body.
		        "range": range,
				"majorDimension": 'DIMENSION_UNSPECIFIED',
				"values": newValues,
		      };

		      var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
		      request.then(function(response) {
		        // TODO: Change code below to process the `response` object:
		        console.log(response.result);
		      }, function(reason) {
		        console.error('error: ' + reason.result.error.message);
		      });
		}

	    /*
		//old
		//Sheets_Append_Url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheetId+"/values/A1:append?valueInputOption="+USER_ENTERED+"&key="+API_KEY

		//new
		Sheets_Append_Url = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheetId+"/values/Sheet1!A1:append?valueInputOption=USER_ENTERED"

		$.ajax({
    		url: Sheets_Append_Url,
    		method: "POST",
    		success: function(result){
    			console.log(result)
    		}
    	})
    	*/

    	console.log('[訊息] '+newTime+' 行事曆已儲存！')
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

	//-----------------Excel-Table-----------------
	winWidth = (window.innerWidth/1.3)
	$('.excel').css({"width":winWidth})

    //-----------------Full Calendar---------------


	Select_Events = []
	newName = ''
    newBand_Name = ''
	Select_Events_Start = ''
	Select_Events_End = ''
	RegisterTime = ''

    $('#calendar').fullCalendar({

    	header:{
    		left:   'title',
		    center: '',
		    right:  'today month agendaWeek agendaDay prev next'
    	},

    	defaultView: 'agendaWeek',
    	//網頁全開寬度1058
    	contentHeight: 1325,
    	//height: 1349,
        selectable: true,
        selectHelper: true,
        //unselectAuto: true,

        //timezone: 'UTC',

        /*
        //Google Calendar
        googleCalendarApiKey: 'AIzaSyBRrsxwlgFO9jvq-QtvciT3zhUv60U1apA',
        events: {
        	
            googleCalendarId: 'ggqqqqgg12356@gmail.com',
		    color: 'yellow',
		    textColor: 'black',
		    editable: true,
        },

		events: [
			{
			    title: 'Neverland',
			    start: '2017-07-05T10:00',
			    end:   '2017-07-05T12:00',
			    color: 'yellow',
				textColor: 'black',
			    editable: true,
			},
			{
			    title: 'Babyband',
			    start: '2017-07-06T10:00',
			    end:   '2017-07-06T12:00',
			    color: 'yellow',
				textColor: 'black',
			    editable: true,
			},
	    ],

        */

        //修改事件
        eventClick: function(event, element, view) {
        	/*
        	var new_title = prompt('編輯', event.title)
	        event.title = new_title
	        $('#calendar').fullCalendar('updateEvent', event)
	        console.log(event.title)
	        */
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

	    	slt_yr_st = slt_st[0]
	    	slt_mth_st = (parseInt(slt_st[1])+1).toString()
	    	slt_day_st = slt_st[2]
	    	slt_hr_st = slt_st[3]
	    	slt_min_st = slt_st[4]

	    	//RegisterTime 轉換格式前
	    	RegisterTime = slt_yr_st+'/'+slt_mth_st+'/'+slt_day_st


	    	//格式轉換
	    	if(slt_mth_st.length<2) slt_mth_st = '0'+slt_mth_st
	    	if(slt_day_st.length<2) slt_day_st = '0'+slt_day_st
	    	if(slt_hr_st.length<2) slt_hr_st = '0'+slt_hr_st
	    	if(slt_min_st.length<2) slt_min_st = '0'+slt_min_st
			



	    	//end
	    	slt_end = end._i
	    	slt_end = slt_end.toString().split(",")

	    	slt_yr_end = slt_end[0]
	    	slt_mth_end = (parseInt(slt_end[1])+1).toString()
	    	slt_day_end = slt_end[2]
	    	slt_hr_end = slt_end[3]
	    	slt_min_end = slt_end[4]




	    	//格式轉換
	    	if(slt_mth_end.length<2) slt_mth_end = '0'+slt_mth_end
	    	if(slt_day_end.length<2) slt_day_end = '0'+slt_day_end
	    	if(slt_hr_end.length<2) slt_hr_end = '0'+slt_hr_end
	    	if(slt_min_end.length<2) slt_min_end = '0'+slt_min_end
	    	


	    	//
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

	    	

			bootbox.prompt({
				  size: "small",
				  title: "團名",
				  callback: function(result){

				  	newBand_Name = result
					//console.log('團名 : '+newBand_Name)

					//2017-07-05T17:58:11.939Z
					d = new Date()
					newD = d.toLocaleString()
					newDate = d.toLocaleDateString()
					newTime = d.toLocaleTimeString()

					nt1 = newTime.slice(0,2)
					nt1 = nt1+' '
					nt2 = newTime.slice(2)
					
					newTime = nt1+nt2
					//console.log(newTime)

					addEventTimestamp = newTime

				  	if(newBand_Name==null||newBand_Name==''){}
			    	else{
				    	Select_Events = []
						Select_Events.push(
						{
							title: newBand_Name,
						    start: Select_Events_Start,
						    end:   Select_Events_End,
						    color: color[random(0, color.length-1)],
							textColor: 'black',
						    editable: false,
						})

						//console.log(Select_Events[0])

						$('#calendar').fullCalendar( 'addEventSource', Select_Events )
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


	    /*
	    eventDestroy: function( event, element, view ){
			console.log(event);
		},
		*/

	    //獲取時間
	    /*
	    dayClick: function(date) {
	    	console.log(date)
	        newDate = date.format()
	        console.log(newDate)
	    },
	    */

	})
    

    //儲存行事曆 送出表單
    $('.fc-left').append('<button type="button" class="save-calendar fc-button fc-state-default fc-corner-left fc-corner-right">儲存</button>')

    $('.fc-button').mouseenter(function(){$(this).addClass('fc-state-hover')})
    $('.fc-button').mouseleave(function(){$(this).removeClass('fc-state-hover')})

    $('.fc-button').mousedown(function(){$(this).addClass('fc-state-down')})
    $('.fc-button').mouseup(function(){$(this).removeClass('fc-state-down')})
    
	//---------------AJAX------------------

	

	

	sheet_flag_1 = '1'
	sheet_flag_2 = '2'
	sheet_flag_3 = '3'

	//AjaxUrl_1 = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheetId+"/values/"+ranges+"?key="+API_KEY

	AjaxUrl_2 = "https://spreadsheets.google.com/feeds/cells/"+spreadsheetId+"/"+sheet_flag_1+"/public/values?alt=json"

	AjaxUrl_3 = "https://spreadsheets.google.com/feeds/cells/"+spreadsheetId+"/"+sheet_flag_2+"/public/values?alt=json"

	Json = '' //json
	Timestamps = [] //時間戳記
	Bands_Name = [] //團名
	Names = [] //姓名
	Date_Times = [] //日期
	Start_Times = [] //起始時間
	End_Times = [] //結束時間

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

		console.log(Timestamps)
		console.log(Bands_Name)
		console.log(Names)
		console.log(Date_Times)
		console.log(Start_Times)
		console.log(End_Times)

		EventHeader = Bands_Name

		$addEventToCalendar(EventHeader, Bands_Name, Date_Times, Start_Times, End_Times)

		}

	}).done(console.log('[訊息] Google Excel 資料載入成功!'))
	

	//addEventToCalendar新增事件到行事曆
	$addEventToCalendar = function(EventHeader, Bands_Name, Date_Times, Start_Times, End_Times){
		Events_Array = []
		for(i=0;i<EventHeader.length;i++){
			Events_Array[i] = {
				title: Bands_Name[i],
			    start: Date_Times[i]+'T'+Start_Times[i],
			    end:   Date_Times[i]+'T'+End_Times[i],
			    color: color[random(0, color.length-1)],
				textColor: 'black',
			    editable: false,

			    //
			}
		}

		//$('#calendar').fullCalendar( 'renderEvents', Events_Array, true );
		$('#calendar').fullCalendar( 'addEventSource', Events_Array )
	}

	
});