// Write your package code here!
if(Meteor.isClient){
    function drawAZLogo() {
    	var logo = "__      __       _     _         _          _                     _   \r\n\\ \\    / /_ _ __| |___| |_  _ _ /_\\  _ _ __| |_  _ __ _ _ ___ ___| |_ \r\n \\ \\/\\/ / _` / _` / -_) ' \\| '_/ _ \\| '_(_-< ' \\| '_ \\ '_/ -_) -_)  _|\r\n  \\_/\\_/\\__,_\\__,_\\___|_||_|_|/_/ \\_\\_| /__/_||_| .__/_| \\___\\___|\\__|\r\n                                                |_|                   \r\n  MeteorJS/PHP/Android Developer LinkedIn@WadehrArshpreet";


        $('html').prepend('<!--' + logo + '-->')
        console.log(logo);
    }
    drawAZLogo();
}