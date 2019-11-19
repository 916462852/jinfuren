var btns=document.getElementsByClassName("btn");
var uls=document.getElementsByClassName("uls");
var photos=document.getElementsByClassName("photo");
var divbg=document.getElementsByClassName("conten_topnext")[0].children;

for(var i=0;i<btns.length;i++){
	//给四个加号绑定点击事件
	btns[i].onclick=function(){
		if(this.children[2].innerHTML=="+"){
			//清空四个加按钮的样式以及让之前显示的下拉框收回
			for(var i=0;i<btns.length;i++){
				btns[i].children[2].innerHTML="+";
				btns[i].children[0].src="";
				btns[i].children[1].style.color="";
				btns[i].nextElementSibling.style.display="none";
			}
			//当点击四个加号的时候给左侧按钮、中间内容清空格式
			for(var i=0;i<uls.length;i++){
				var lis=uls[i].children;
				var oDivs=photos[i].children;
				for(var j=0;j<lis.length;j++){
					lis[j].style.borderBottom="0";
					lis[j].style.color="";
					oDivs[j].className="";
			
				}
			}
			//设置当前加按钮对应的中间内容，同时四个加按钮设置样式，让当前下拉框显示
			photos[this.getAttribute("bg")].children[0].className="photoOneC"
			this.children[0].src="images/13.jpg";
			this.children[1].style.color="#840a15";
			this.children[2].innerHTML="-";
			this.nextElementSibling.style.display="block";
		}else{
			//当是减按钮的时候清空所有的导航条、中间内容样式（因为存在按了当前减按钮下的小按钮，所以按减按钮时得清空小按钮样式）
			for(var i=0;i<photos.length;i++){
				var oDivs=photos[i].children;
				var ps=divbg[i].children;
				for(var j=0;j< oDivs.length;j++){
					oDivs[j].className="";
					ps[j].className="";
				}
			}
			//给当前减按钮设置样式以及让当前下拉框收回，同时设置当前按钮对应的中间内容；
			this.children[0].src="";
			this.children[1].style.color="";
			this.children[2].innerHTML="+";
			this.nextElementSibling.style.display="none";
			photos[this.getAttribute("bg")].children[0].className="photoOneC"
		}
		//获得当前加或减按钮的自定义属性（数字）
		var y=this.getAttribute("bg");
		//清空导航条的样式
		for(var i=0;i<divbg.length;i++){
			divbg[i].className="";
			divbg[i].children[0].className="";
		}
		//让导航条匹配当前（加或减按钮）点击的内容
		divbg[y].className="divbox";
		divbg[y].children[0].className="active";
	}
}
//给左边16个按钮绑定点击事件
for(var i=0;i<uls.length;i++){
	var lis=uls[i].children;
	for(var j=0;j<lis.length;j++){
		lis[j].onclick=function(){
			//给所有导航条、中间内容以及16个按钮清除格式
			for(var i=0;i<photos.length;i++){
				var oDivs=photos[i].children;
				var ps=divbg[i].children;
				var lis=uls[i].children;
				for(var j=0;j<oDivs.length;j++){
					oDivs[j].className="";
					ps[j].className="";
					lis[j].style.borderBottom="0";
					lis[j].style.color="";
				}
			}
			//找到当前（共16个小按钮）小按钮所对应的中间内容，以及对的导航条
			var oDiv = photos[this.parentNode.getAttribute("lx")].children[this.getAttribute("lxs")];
			var p=divbg[this.parentNode.getAttribute("lx")].children[this.getAttribute("lxs")];
			//给对应的导航条、中间内容以及当前按钮设置样式
			p.className="active";
			oDiv.className="photoOneC";
			this.style.borderBottom="1px solid #9a9a9a";
			this.style.color="#840a15";
		}
	}
}
