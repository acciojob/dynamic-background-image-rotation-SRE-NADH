//your JS code here. If required.
let body = document.getElementsByTagName('body');
let orientation = window.screen.orientation.type;
if(orientation.toLowerCase().includes("landscape")){
	body[0].style.backGroundImage ="https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg"
}
else{
	body[0].style.backGroundImage = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg"
}


