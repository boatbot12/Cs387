$(document).ready(function()
{
  var num = Math.floor((Math.random() * 3));//random ตัวคนเล่นมา 1 ตัว
  if(num==0)
  {
    $("#sonic").attr('src', 'gif/source.gif');
  }
  if(num==1)
  {
    $("#sonic").attr('src', 'gif/poke.gif');
  }
  if(num==2)
  {
    $("#sonic").attr('src', 'gif/mario.gif');
  }

  var r = Math.floor((Math.random() * 3));//random ตัวคอมมา 1 ตัว
  if(num==r)
  {
    while(true)
    {
        r = Math.floor((Math.random() * 3));//ถ้าตัวคอมเท่ากับตัวผู้เล่นให้ random ตัวใหม่
        if(num!=r)
        {
          break;
        }
    }
  }
  if(r==0)
  {
  	$("#lion").attr('src', 'gif/source.gif');
  }
  if(r==1)
  {
  	$("#lion").attr('src', 'gif/poke.gif');
  }
  if(r==2)
  {
  	$("#lion").attr('src', 'gif/mario.gif');
  }
});
