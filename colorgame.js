var numSquares= 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
h1.classList.add("new");
for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy"?numSquares =3 :numSquares=6;
		
		// if (this.textContent=="Easy") {
		// 	numSquares = 3;
		// } else {
		// 	numSquares =6;
		// }
		reset();

	});
}
function reset(){
	for(var i=0;i<numSquares;i++)
 				squares[i].style.visibility="visible";
	h1.classList.add("new");
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display="none"

		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor ="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="New colors";


}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares=3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}else{
// 			squares[i].style.display="none";
// 		}
// 	}
// });
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;

// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		
// 			squares[i].style.backgroundColor=colors[i];
		
// 			squares[i].style.display="block";
		
// 	}


// });
resetButton.addEventListener("click",function(){
	// colors = generateRandomColors(numSquares);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor ="steelblue";
	// messageDisplay.textContent="";
	// this.textContent="New colors";
	reset();

})
colorDisplay.textContent = pickedColor;

 for (var i = 0; i < squares.length; i++) { 

 	squares[i].style.backgroundColor = colors[i];
 	squares[i].addEventListener("click", function () {
 		var clickedColor = this.style.backgroundColor;
 		console.log(clickedColor,pickedColor);
 		if (clickedColor===pickedColor) {
 			messageDisplay.textContent="Correct!";
 			resetButton.textContent = "Play Again?";
 			changeColors(clickedColor);
 			h1.classList.remove("new");
 			for(var i=0;i<squares.length;i++)
 				squares[i].style.visibility="visible";
 			h1.style.backgroundColor= clickedColor;
 			
 		} else {
 			this.style.backgroundColor = "#232323";
 			messageDisplay.textContent="Try Again!!";
 			this.style.visibility="hidden";
 		}
 		// body...
 	});
 }
 function changeColors(color){
 	for (var i = 0; i < squares.length; i++) {
 		squares[i].style.backgroundColor=color;
 	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random()* colors.length);
 	return colors[random];
}
 function generateRandomColors(num){
 	var arr=[];
 	for (var i = 0; i < num; i++) {
 		arr.push(randomColor())
 	}
 	return arr;

 }
 function randomColor(){
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var b = Math.floor(Math.random()*256);
 	return "rgb("+r+", "+g+", "+b+")";
}
