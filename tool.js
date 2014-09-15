function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

function startMove(obj,json,callback){

	clearInterval(obj.timer);//取消由setInterval设置的timer;

	obj.timer=setInterval(function(){

		var bStop=true;
		for(var iattr in json){
			var iCur=0;
		    if(iattr=="opacity"){
		    	iCur=Math.round(parseFloat(getStyle(obj,iattr)*100));
		    }else{
		    	iCur=parseInt(getStyle(obj,iattr));
		    }
			var speed=(json[iattr]-iCur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(iCur!=json[iattr]){
				bStop=false;
			}//是否达到终点；

			if(iattr=="opacity"){
				obj.style.filter='alpha(opacity:'+(iCur+speed)+')';
				obj.style.opacity=(iCur+speed)/100;
			}
			else{
				obj.style[iattr]=iCur+speed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(callback){
				callback();
			}
		}	
	},30);
}