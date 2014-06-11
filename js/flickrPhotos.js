
function json_to_html( jsonDATA ){

	// console.log(jsonDATA.photos.photo[0]);
	// console.log(jsonDATA.photos.photo[0].farm);
	// console.log(jsonDATA.photos.photo[0].server);
	// console.log(jsonDATA.photos.photo[0].id);
	// console.log(jsonDATA.photos.photo[0].secret);
	// console.log(jsonDATA.photos.photo[0].title);
	// console.log(jsonDATA.photos.photo.length);

	for( var i = 0; i < jsonDATA.photos.photo.length ; i++){
		var id_id = "#flick" + (i + 1);
		$(id_id).append(function(){
			var img_src =	
				'<img src="http://farm' + jsonDATA.photos.photo[i].farm +
					'.staticflickr.com/' + jsonDATA.photos.photo[i].server +
					'/' + jsonDATA.photos.photo[i].id + 
					'_' + jsonDATA.photos.photo[i].secret + '_z.jpg" class="flick_style" />';
			console.log(img_src);
			return img_src;
		});
	}
}

/* event */ 
$( window ).load(function(){
	
	/* Build URL String */
	var	method = "method=flickr.people.getPublicPhotos&",
		api_key = "api_key=&",
		additional = "user_id=&format=json&per_page=5&page=1&nojsoncallback=1",
		baseURL = "https://api.flickr.com/services/rest/?" + method + api_key + additional;

	/* Make asynchronous call to flickr API*/ 
	$.getJSON( baseURL, function( jsonData ){
	})
		.done(function(jsonData){ 
			try{
				json_to_html( ($.parseJSON( (JSON.stringify(jsonData)) )) ); //valid json!?
			}
			catch(e){
				console.log("Format from server not correct." + e );
			}
		})
		.fail( function(e){
			console.log("fail\n" + e);
		})
		.always( function() {
			console.log( "Request was made to " + baseURL );
		});
});