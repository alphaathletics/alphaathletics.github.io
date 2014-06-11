/* JavaScript is FUN! */
$(window).load(function(){
	var theURL =
		"http://vimeo.com/api/v2//videos.json";

	$.getJSON( theURL, function(){
		console.log(":::::" + theURL);
	})
	.done(function(data){
		for( var i = 0; i < 5; i++){
			$(("#vimeo" + i)).append(function(){
				var iframe = 
					'<iframe src="http://player.vimeo.com/video/' + data[i].id + 
					'" class="iframe_style" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
				console.log(iframe);
				return iframe; 	 
			});
		}	
	})
	.fail(function(){
		console.log("fail");
	})
	.always(function(){
		console.log("always");
	});
})	