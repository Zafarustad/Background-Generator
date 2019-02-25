let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.querySelector("body");
let button = document.querySelector("#random");


function setGradient(){
	body.style.background = "linear-gradient(to right," 
 	                         + color1.value 
 	                         + "," 
 	                         + color2.value 
 	                         + ")"; 
 
css.textContent = body.style.background + ";";
 }


function randomcolor(){
	color1.setAttribute("value", gradient());
	color2.setAttribute("value", gradient());
	body.style.background = "linear-gradient(to right," 
 	                         + color1.value 
 	                         + "," 
 	                         + color2.value 
 	                         + ")"; 

 css.textContent = body.style.background + ";";

}

function gradient(){
	var letters = '0123456789ABCDEF';
	let color = '#';
     for(var i = 0; i < 6; i++){
	color += letters[Math.floor(Math.random() * 16)];
}
return color;

}



color1.addEventListener("input",setGradient);
 	
color2.addEventListener("input", setGradient);

button.addEventListener("click", randomcolor);
 	
