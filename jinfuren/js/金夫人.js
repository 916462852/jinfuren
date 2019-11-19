var btns=document.getElementsByTagName("button");
var j=0;
var banner_img=document.getElementsByClassName("banner_img")[0];
var imgs=banner_img.getElementsByTagName("img");
var banner=document.getElementsByClassName("banner")[0];
var lis=banner.getElementsByTagName("li");
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			animating(1)
		}
		else{
			animating(-1)
		}
	}
}
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		
		j=this.getAttribute("lx");
		animating(j)
	}
}
function animating(y){
	if(y===1){
		j++;
		if(j==4){
		j=0
		}
	}
	else if(y===-1){
		j--;
		if(j==-1){
		j=3}
	}
	else{
		j=y;
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].className="";
		lis[i].className="";
	}
	imgs[j].className="active";
	lis[j].className="active";
}
timer=setInterval(function(){
	animating(1)
},2000);
for(var i=0;i<imgs.length;i++){
	imgs[i].onmouseover=function(){
	clearInterval(timer);
	timer=null;
	}
	imgs[i].onmouseout=function(){
		timer=setInterval(function(){
			animating(1)
			},2000);
	}
}
for(var i=0;i<btns.length;i++){
	btns[i].onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	btns[i].onmouseout=function(){
		timer=setInterval(function(){
			animating(1)
			},2000);
	}
}
