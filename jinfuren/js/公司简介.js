var conten_bottom=document.getElementsByClassName("conten_bottom")[0];
var btn=conten_bottom.children[1].children[0];
var divbox=document.getElementsByClassName("divbox")[0];
var p=divbox.children[0];
btn.onclick=function(){
	if(btn.children[2].innerHTML=="+"){
		this.children[2].innerHTML="-";
		this.children[1].style.color="#a1080a"
		this.children[0].style.opacity=1;
		p.children[0].style.color="#a1080a";
	}
	else{
		this.children[2].innerHTML="+";
		this.children[1].style.color=""
		this.children[0].style.opacity=0;
		p.children[0].style.color="";
	}
}
