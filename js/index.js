
$(document).ready(function(){
	$('#home').css( "border-right", "0px" );
	$('#photos').css( "border-right", "0px" );
});



$('#home').hover(function()
{
	$('#home').css( "background-color" , "#009080" );

}
,function()
{
	$('#home').css( "background-color", "#661100" );

});










$('#photos').hover(function(){
	$('#photos').css( "background-color" , "#009080" );
},function(){
	$('#photos').css( "background-color", "#661100" );
});
$('#videos').hover(function(){
	$('#videos').css( "background-color" , "#009080" );
},function(){
	$('#videos').css( "background-color", "#661100" );
});
$('#about').hover(function(){
	$('#about').css( "background-color" , "#009080" );
},function(){
	$('#about').css( "background-color", "#661100" );
});