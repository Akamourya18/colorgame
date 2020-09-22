var numSquares= 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var ch = document.getElementById('ch');

var sc=0;

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
 			sc=0;
 			ch.textContent=0;
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
 		if (clickedColor===pickedColor)
		{
			if(numSquares==6)
			{
				ch.textContent=6-sc;
				if(sc==6 || sc==5)
					messageDisplay.textContent="You are noob!!";
				if(sc==4 || sc==3)
					messageDisplay.textContent="You need little more practice!!";
				if(sc==2 || sc==1)
					messageDisplay.textContent="You are almost there!!";
				if(sc==0)
					messageDisplay.textContent="You are Pro man!!";
			}
			if(numSquares==3){
                        
			ch.textContent=3-sc;	
                        if(sc==2)
					messageDisplay.textContent="You need little more practice!!";
				if(sc==1)
					messageDisplay.textContent="You are almost there!!";
				if(sc==0)
					messageDisplay.textContent="You are Pro man!!";
                                        }

			//messageDisplay.textContent="Correct!";
 			resetButton.textContent = "Play Again?";
 			changeColors(clickedColor);
 			h1.classList.remove("new");
 			for(var i=0;i<squares.length;i++)
 				squares[i].style.visibility="visible";
 			h1.style.backgroundColor= clickedColor;
 			
 		
 		} 
 		else 
 		{
 			sc++;
 			if(sc==6)
 				sc=0;
 			ch.textContent=0;
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
