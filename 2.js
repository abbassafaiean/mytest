function dofirst(){
	var button=document.getElementById("button");
	button.addEventListener("clike",save,false);
}
function save(){
	var one =document.getElementById("one").value;
	var two=document.getElementById("two").value;
	sessionStorage.setItem(one,two);
    display(one);
}
function display(one){
	var sec2 =document.getElementById("sec2");
	var two =sessionStorage.getItem(one);
	sec2.innerHTML=one+two;
}
window.addEventListener("load",dofirst,false);