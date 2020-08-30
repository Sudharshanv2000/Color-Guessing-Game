//alert("connected");
var no=6;
var colors=generateRandomColors(no);
var correctColor=pickrandomColor();
var selectedColor;

var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
var message=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
squares=document.querySelectorAll(".square");
h1=document.querySelector("h1");

refresh(6);

function reset(no)
{	 resetButton.textContent="New Colors";	
	 colors=generateRandomColors(no);
	  correctColor=pickrandomColor();
	  message.textContent="        ";
	  refresh(no);
}

resetButton.addEventListener("click",function()
{
	//alert("clicked");
	reset(no);
})

//add event listeners
easybtn.addEventListener("click",function()	//if easy mode is chosen add selected to easyBtn and remove from hardBtn
{
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");

no=3;
reset(3);
});
hardbtn.addEventListener("click",function()	//if hard mode is chosen add selected to hardBtn and remove from easyBtn
{
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
reset(6);
no=6;
});



function refresh(num)	//helper function to refresh the page elements each time 
{	h1.style.backgroundColor="steelblue";
	for (var i = 0; i < squares.length; i++) 
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor= colors[i];
			squares[i].style.display="block";
		}
		else
			squares[i].style.display="none";

			squares[i].addEventListener("click",function()
		{ selectedColor=this.style.backgroundColor
		//	alert(selectedColor);
		
		 if(correctColor==selectedColor)
		 	{message.textContent="Correct!!!";
		 	changeColors(correctColor);
		 	resetButton.textContent="New Game";
			}
		else
			//alert("Wrong..... Try Again!!")
			{this.style.backgroundColor="#232323";
			message.textContent="try again";}
		 })
	}
	var disp=document.querySelector("#dispColor");
	disp.textContent=correctColor;

}

//changing colors when correct
function changeColors(color)	
{
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
}
//picking the correct color
function pickrandomColor()			//select a color from the generated random colors 
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColors(num)	//generate random colors 3 or 6
{ var arr=[];
	for (var i = 0; i < num; i++) {
		
		arr.push(randomColor());

	}
	return arr;
}
function randomColor()		//generate a random color
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}