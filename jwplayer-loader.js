//Functions to run after the script tag has loaded
var jwplayerLoadCallback = function(){
	if(!jwplayer)console.log("JWPlayer not found!");	
	else jwplayer.key = "9IQoJNofYuFbhrJGURs9NEz/4+OiKpGoJ0ADpHXSCw8=";
};

//If the script doesn't load
var jwplayerErrorCallback = function(error){
    if(typeof console !== undefined) {
        console.log(error);
    }
};

var head = document.getElementsByTagName('head')[0];

//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '/js/jwplayer/jwplayer.js';
script.id = 'jwplayerscript';
script.base = 'http://10.0.1.134:3000/js/jwplayer/'; // TODO programmatic base URL
script.onload = jwplayerLoadCallback;
script.onerror = jwplayerErrorCallback;

head.appendChild(script);

