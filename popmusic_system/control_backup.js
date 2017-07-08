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
	
	
	
	function initClient() {

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/spreadsheets'
	gapi.auth2.init({
  			client_id: CLIENT_ID
	}).then()

	//
      gapi.auth2.authorize({
			  client_id: CLIENT_ID,
			  scope: scope,
			  response_type: 'id_token permission'
			}, function(response) {
			  if (response.error) {
			    // An error happened!
			    return;
			  }
			  // The user authorized the application for the scopes requested.
			  var accessToken = response.access_token;
			  var idToken = response.id_token;
			  // You can also now use gapi.client to perform authenticated requests.

			  console.log(accessToken)
			  console.log(idToken)
		})
		//

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': scope,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus)

        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())

        

      })
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

    function makeApiCall(newValues) {

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
	        console.log(response.result)
	      }, function(reason) {
	        console.error('error: ' + reason.result.error.message)
	      })
	}

    $('#signin-button').click(function(){
    	handleSignInClick()
    })
    $('#signout-button').click(function(){
    	handleSignOutClick()
    })
    */