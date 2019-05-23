//JavaScript

$(document).ready(function(e) {
    document.addEventListener("deviceready", onDeviceReady, false);

});

function onDevideReady(){
	
	$('#posicion').on('click', function(){
		getPosition ();
	});
}

function getPosition() {
	var options={
		enableHighAccuracy : true,
		maximumAge:3600000
	}
	
	var watchID=navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position){
		
		alert('Latitude:' + position.coords.latitude  + '\n' +
		'Longtude:' + position.coords.longitude  + '\n');
	};
	
	function onError(error){
		alert('code:' + error.code  + '\n'+'message:'+error.message+'\n');
	}
}
