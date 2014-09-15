window.onload=function(){
	var oPlay=document.getElementById("play");
	var oPrev=document.getElementById("btn_prev");
	var oNext=document.getElementById("btn_next");
	var aLi=oPlay.getElementsByTagName("li");

	var arr=[];

	for (var i = 0; i < aLi.length; i++) {

		var oImg=aLi[i].getElementsByTagName("img")[0];
		arr.push([parseInt(getStyle(aLi[i],'left')),
			parseInt(getStyle(aLi[i],'top')),getStyle(aLi[i],'opacity')*100,getStyle(aLi[i],'zIndex'),oImg.offsetWidth]);
	};

	console.log(arr);
	oPrev.onclick=function(){//左箭头
		arr.push(arr[0]);
		arr.shift();
		change();
	}

	oNext.onclick=function(){//右箭头
		arr.unshift(arr[arr.length-1]);
		arr.pop();
		change();
	}

	function change(){
		for(var i=0;i<aLi.length;i++){
			var oImg=aLi[i].getElementsByTagName('img')[0];
			aLi[i].style.zIndex=arr[i][3];

			startMove(aLi[i],{left:arr[i][0],top:arr[i][1],opacity:arr[i][2]});
			startMove(oImg,{width:arr[i][4]});
		}
	}
}