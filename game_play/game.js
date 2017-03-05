
var script = document.createElement('script');
script.src = 'jquery-3.1.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function pap()
{
	var state = fight(0) ;
	//document.getElementById("pa").innerHTML = state;
	moveRight(state) ;

}
function ham()
{
var state = fight(1) ;
	//document.getElementById("pa").innerHTML = state;
	moveRight(state) ;
}
function cut()
{
var state = fight(2) ;
	//document.getElementById("pa").innerHTML = state ;
	moveRight(state) ;
}

function fight(player){
	var ran = Math.floor(Math.random() * 3);
	if(player == 0)
	{
		if(ran == 0){//draw
			document.getElementById("pa").innerHTML = "player : paper  &&  com : paper --> DRAW";
			return 0 ;
		}else if(ran == 1){//lose
			document.getElementById("pa").innerHTML = "player : paper  &&  com : hammer --> player WIN";
			return 1 ;
		} else if(ran == 2){//win
			document.getElementById("pa").innerHTML = "player : paper  &&  com : cutter --> player LOSE";
			return 2 ;
		}
	}

	else if(player == 1){
		if(ran == 0){//lose
			document.getElementById("pa").innerHTML = "player : hammer  &&  com : paper --> player LOSE";
			return 2 ;
		}else if(ran == 1){//draw
			document.getElementById("pa").innerHTML = "player : hammer  &&  com : hammer --> DRAW";
			return 0 ;
		} else if(ran == 2){//win
			document.getElementById("pa").innerHTML = "player : hammer  &&  com : cutter --> player WIN";
			return 1 ;
		}
	}

	else if(player == 2){
	if(ran == 0){//win
		document.getElementById("pa").innerHTML = "player : cutter  &&  com : paper --> player WIN";
		return 1 ;
	}else if(ran == 1){//lose
		document.getElementById("pa").innerHTML = "player : cutter  &&  com : hammer --> player LOSE";
		return 2 ;
	} else if(ran == 2){//draw
		document.getElementById("pa").innerHTML = "player : cutter  &&  com : cutter --> DRAW";
		return 0 ;
	}
	}
}

 function moveRight(move){//https://www.tutorialspoint.com/javascript/javascript_animation.htm
	 var modal = document.getElementById('myModal');
	 var modal2 = document.getElementById('myModal2');

		if(move == 1){
			if(parseInt(sonic.style.left)<screen.width-500){
				$(document).ready(function(){
        $(sonic).animate({left: parseInt(sonic.style.left) + screen.width/9 + 'px'});
			});
			}

				else {
					$(document).ready(function(){
						$(sonic).animate({left:0 + 'px'});
						$(lion).animate({left: 0 + 'px'});
						$(document.getElementById('myModal')).fadeIn("slow","linear");
					});
				}
		}

		else if(move == 2){
			if(parseInt(lion.style.left)<screen.width-500){
				$(document).ready(function(){
        $(lion).animate({left: parseInt(lion.style.left) + screen.width/9 + 'px'});
			});
			}
				else {
						$(document).ready(function(){
						$(sonic).animate({left: 0 + 'px'});
						$(lion).animate({left: 0 + 'px'});
						$(document.getElementById('myModal2')).fadeIn("slow","linear");
					});
				}
		}
   }

	   function run() {//https://www.tutorialspoint.com/javascript/javascript_animation.htm
	   var sonic,lion = null;
	   		sonic = document.getElementById("sonic") ;
				sonic.style.position= 'relative';
				sonic.style.left = '0px';

	    	lion = document.getElementById("lion") ;
		    lion.style.position= 'relative';
		   	lion.style.left = '0px';
	   }
	window.onload = run;
