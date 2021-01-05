function a()
{
var x = document.getElementById("name").value;
var y = document.getElementById("pass").value;


if (x=="" || x==null || y=="" || y==null)
{
   document.getElementById("p1").innerHTML = "PLEASE FILL USERNAME AND PASSWORD";
}
else if (x=="naqi" && y=="123")
{
   document.getElementById("p1").innerHTML = "HI";
	
}
else
{
	document.getElementById("p1").innerHTML = "INVALID USER";
}
}