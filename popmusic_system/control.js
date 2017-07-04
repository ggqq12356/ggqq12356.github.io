$(document).ready(function() {

	/*
	function start() {
		// 2. Initialize the JavaScript client library.
		gapi.client.init({
		'apiKey': 'AIzaSyBRrsxwlgFO9jvq-QtvciT3zhUv60U1apA',
		// Your API key will be automatically added to the Discovery Document URLs.
		'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
		// clientId and scope are optional if auth is not required.
		'clientId': '754211882017-b1ieivvifmrdvga3jq6atcefs5l4s33k.apps.googleusercontent.com',
		'scope': 'profile',
		}).then(function() {
		// 3. Initialize and make the API request.
		return gapi.client.people.people.get({
		  'resourceName': 'people/me',
		  'requestMask.includeField': 'person.names'
		});
		}).then(function(response) {
		console.log(response.result);
		}, function(reason) {
		console.log('Error: ' + reason.result.error.message);
		});
	};
	// 1. Load the JavaScript client library.
	gapi.load('client', start);
	*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    $('#calendar').fullCalendar({
    	header:{
    		left:   'title',
		    center: '',
		    right:  'today month agendaWeek agendaDay prev next'
    	},

    	defaultView: 'agendaWeek',
    	height: 650,
        selectable: true,
        selectHelper: true,
        //unselectAuto: false,

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
        	//var new_title = prompt('編輯', event.title);
	        //event.title = new_title;
	        //$('#calendar').fullCalendar('updateEvent', event);
			return false;
	    },

	    /*
	    eventDestroy: function( event, element, view ){
			console.log(event);
		},
		*/

	    //獲取時間
	    /*
	    dayClick: function(date) {
	        var newDate = date.format();
	        console.log(newDate);
	    },
	    */

	});
    
    

    //$('.bottom').append("<button class='send'>送出</button>");
    
    /*
    $(".send").click(function(){

	});
	*/
	/*
	API_KEY = 'AIzaSyBRrsxwlgFO9jvq-QtvciT3zhUv60U1apA';
	spreadsheetId = '1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M';
	ranges = 'A1:G2';

	AjaxUrl = "https://sheets.googleapis.com/v4/spreadsheets/"+spreadsheetId+"/values/"+ranges+"?key="+API_KEY;
	*/

	AjaxUrl_1 = 'https://spreadsheets.google.com/feeds/cells/1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M/1/public/values?alt=json';

	AjaxUrl_2 = 'https://spreadsheets.google.com/feeds/cells/1yS-MW2BMESK6o5_-qYwzNi1BPu7kmtx3w7JqAF1wO0M/2/public/values?alt=json';

	Json = ''; //json
	Timestamps = []; //時間戳記
	Bands_Name = []; //團名
	Names = []; //姓名
	Date_Times = []; //日期
	Start_Times = []; //起始時間
	End_Times = []; //結束時間

	$.ajax({
		url: AjaxUrl_1,
		type: "GET",
		success:function(result){

		Json = result
		JFE = Json.feed.entry
		JFE_Length = JFE.length;
		
		//由第6個開始跑資料
		//一列6組資料
		//迴圈讀取資料 由6開始
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

		//console.log(Timestamps)
		console.log(Bands_Name)
		//console.log(Names)
		console.log(Date_Times)
		console.log(Start_Times)
		console.log(End_Times)
		}


	});

	Test_Events = [];
	
	setTimeout(function() {

		for(i=0;i<Bands_Name.length;i++){
			Test_Events[i] = {
				title: Bands_Name[i],
			    start: Date_Times[i]+'T'+Start_Times[i],
			    end:   Date_Times[i]+'T'+End_Times[i],
			    color: 'yellow',
				textColor: 'black',
			    editable: false,
			};
		};

		/*
		Test_Events = [
			{
			    title: Bands_Name[0],
			    start: Date_Times[0]+'T'+Start_Times[0],
			    end:   Date_Times[0]+'T'+End_Times[0],
			    color: 'yellow',
				textColor: 'black',
			    //editable: true,
			},
		];
		*/

		//$('#calendar').fullCalendar( 'renderEvents', Band_Events, true );
		$('#calendar').fullCalendar( 'addEventSource', Test_Events );

	}, 1000);
		
});