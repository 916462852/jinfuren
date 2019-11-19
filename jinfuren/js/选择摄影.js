var conten_bottom=document.getElementsByClassName("conten_bottom")[0];
var btns=conten_bottom.children[1].children;
var divbox=document.getElementsByClassName("divbox")[0];
var ps=divbox.children;
var photo=document.getElementsByClassName("photo")[0];
var photos=photo.children;
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.children[2].innerHTML=="+"){
			for(var i=0;i<btns.length;i++){
				btns[i].children[1].style.color="";
				btns[i].children[2].innerHTML="+";
				btns[i].children[0].style.opacity=0;
				ps[i].className="";
				ps[i].children[2].style.color="";
				photos[i].className="";
				photos[i].children[2].style.display="none";
			}
			this.children[2].innerHTML="-";
			this.children[1].style.color="#a1080a"
			this.children[0].style.opacity=1;
			var i=this.getAttribute("lx");
			ps[i].className="active";
			ps[i].children[2].style.color="#a1080a";
			photos[i].className="photoOneC";
			photos[i].children[2].style.display="block";
		}
		else{
			this.children[2].innerHTML="+";
			this.children[0].style.opacity=0;
		}
	}
}
