var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")

var next1 = document.getElementById("next1")
var next2 = document.getElementById("next2")
var next3 = document.getElementById("next3")

var back1 = document.getElementById("back1")
var back2 = document.getElementById("back2")
var back3 = document.getElementById("back3")

var progress = document.getElementById("progress")

next1.onclick = function(){
	form1.style.left = "-600px";
	form2.style.left = "40px";
	progress.style.width = "240px";
}
back1.onclick = function(){
	form1.style.left = "40px";
	form2.style.left = "600px";
	progress.style.width = "120px";
}
next2.onclick = function(){
	form2.style.left = "-600px";
	form3.style.left = "40px";
	progress.style.width = "360px";
}
back2.onclick = function(){
	form2.style.left = "40px";
	form3.style.left = "600px";
	progress.style.width = "240px";
}
next3.onclick = function(){
	form3.style.left = "-600px";
	form4.style.left = "40px";
	progress.style.width = "480px";
}
back3.onclick = function(){
	form3.style.left = "40px";
	form4.style.left = "600px";
	progress.style.width = "360px";
}