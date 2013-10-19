//Functions to run after the script tag has loaded
var jwplayerLoadCallback = function(){

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
script.src = '//api.longtailvideo.com/library/U4WWQDLeEeOytRIxOUCPzg.js';
script.onload = videojsLoadCallback;
script.onerror = videojsErrorCallback;

head.appendChild(script);