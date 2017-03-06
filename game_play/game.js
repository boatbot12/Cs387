function pap()//ปุ่มกดกระดาษ
{
	var state = fight(0) ;
	moveRight(state) ;
}

function ham()//ปุ่มกดค้อน
{
	var state = fight(1) ;
	moveRight(state) ;
}

function cut()//ปุ่มกดกรรไกร
{
	var state = fight(2) ;
	moveRight(state) ;
}

function fight(player)//เมื่อกดปุ่ม ค้อน กรรไกร กระดาษ
{
	var ran = Math.floor(Math.random() * 3);//random ค่าที่คอมจะออก
	if(player == 0)//คนเล่นกดปุ่มกระดาษ
	{
		if(ran == 0)//draw คอมออกกระดาษ
		{
			document.getElementById("status").innerHTML = "PLAYER : PAPER" + space() + "COM : PAPER";
			return 0 ;
		}
		else if(ran == 1)//win คอมออกค้อน
		{
			document.getElementById("status").innerHTML = "PLAYER : PAPER" + space() + "COM : HAMMER";
			return 1 ;
		}
		else if(ran == 2)//lose คอมออกกรรไกร
		{
			document.getElementById("status").innerHTML = "PLAYER : PAPER" + space() + "COM : CUTTER";
			return 2 ;
		}
	}

	else if(player == 1)//คนเล่นกดปุ่มค้อน
	{
		if(ran == 0)//lose คอมออกกระดาษ
		{
			document.getElementById("status").innerHTML = "PLAYER : HAMMER" + space() + "COM : PAPER";
			return 2 ;
		}
		else if(ran == 1)//draw คอมออกค้อน
		{
			document.getElementById("status").innerHTML = "PLAYER : HAMMER" + space() + "COM : HAMMER";
			return 0 ;
		}
		else if(ran == 2)//win คอมออกกรรไกร
		{
			document.getElementById("status").innerHTML = "PLAYER : HAMMER" + space() + "COM : CUTTER";
			return 1 ;
		}
	}

	else if(player == 2)//คนเล่นกดปุ่มกรรไกร
	{
		if(ran == 0)//win คอมออกกระดาษ
		{
			document.getElementById("status").innerHTML = "PLAYER : CUTTER" + space() + "COM : PAPER";
			return 1 ;
		}
		else if(ran == 1)//lose คอมออกค้อน
		{
			document.getElementById("status").innerHTML = "PLAYER : CUTTER" + space() + "COM : HAMMER";
			return 2 ;
		}
		else if(ran == 2)//draw คอมออกกรรไกร
		{
			document.getElementById("status").innerHTML = "PLAYER : CUTTER" +  space() + "COM : CUTTER";
			return 0 ;
		}
	}
}

function moveRight(move)// เมื่อตัวละครวิ่ง https://www.tutorialspoint.com/javascript/javascript_animation.htm
{
	 var modal = document.getElementById('myModal');
	 var modal2 = document.getElementById('myModal2');

		if(move == 1)//ตัวละครผู้เล่่นวิ่ง
		{
			document.getElementById('run_sound').play() ;
			if(parseInt(sonic.style.left)<screen.width-400)
			{
				$(document).ready(function()
				{
					$("#sonic").animate({left: parseInt(sonic.style.left) + screen.width/9 + 'px'});//ตัวผู้เล่นเคลื่อนที่ไปข้างหน้าแบบค่อยๆเลื่อน
				});
			}

			else
			{
				document.getElementById('win_sound').play() ;
					$(document).ready(function()//เมื่อเล่นจบจะค่อยๆแสดงหน้าจอผลว่าผู้เล่นชนะ
					{
						$("#sonic").animate({left: parseInt(sonic.style.left) + 68 + 'px'});
						$(document.getElementById('myModal')).fadeIn("slow","linear");
    				$("#reset").click(function()//ทำการเริ่มเล่นเกมใหม่ตัวละครกลับไปที่จุดเริ่มต้น
						{
	        		modal.style.display = "none"
							$(sonic).animate({left: 0 + 'px'});
							$(lion).animate({left: 0 + 'px'});
							document.getElementById("status").innerHTML = "START";
    				});
					});
				}
		}
		else if(move == 2)//ตัวละครคอมวิ่ง
		{
			document.getElementById('run_sound').play() ;
			if(parseInt(lion.style.left)<screen.width-400)
			{
				$(document).ready(function()
				{
					$("#lion").animate({left: parseInt(lion.style.left) + screen.width/9 + 'px'});//ตัวคอมเคลื่อนที่ไปข้างหน้าแบบค่อยๆเลื่อน
				});
			}
				else
				{
					document.getElementById('lose_sound').play() ;
					$(document).ready(function()//เมื่อเล่นจบจะค่อยๆแสดงหน้าจอผลว่าผู้เล่นแพ้
					{
						$("#lion").animate({left: parseInt(lion.style.left) + 68 + 'px'});
						$(document.getElementById('myModal2')).fadeIn("slow","linear");
						$("#reset2").click(function()//ทำการเริ่มเล่นเกมใหม่ตัวละครกลับไปที่จุดเริ่มต้น
						{
							modal2.style.display = "none"
							$(sonic).animate({left: 0 + 'px'});
							$(lion).animate({left: 0 + 'px'});
							document.getElementById("status").innerHTML = "START";
						});
					});
				}
		}
}

function run() //กำหนดตำแหน่งเริ่มก่อนตัวละครวิ่ง https://www.tutorialspoint.com/javascript/javascript_animation.htm
{
		var sonic,lion = null;
	  sonic = document.getElementById("sonic") ;
		sonic.style.position= 'relative';
		sonic.style.left = '0px';

	  lion = document.getElementById("lion") ;
		lion.style.position= 'relative';
		lion.style.left = '0px';
}
window.onload = run;

function space() //เว้นวรรคข้อความ
{
	var s = "";
	for(var i=0;i<30;i++)
		s = s + "\u00a0";
	return s;
}
