function getStyle(obj,attr){// 解决 offset 下的 bug
    if(obj.currentStyle){// currentStyle 针对IE浏览器
        return obj.currentStyle[attr];
    }else{// getComputedStyle 针对firefox浏览器
        return getComputedStyle(obj,false)[attr];
    }
};
// function startMove(obj,{attr1:iTarget1,attr2:iTarget2},fn){};
function startMove(obj,json,fn){
    var flag = true;// 标杆，假设所有的运动都到达了目标值
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr in json){
            // 1.取当前的值
            var icur = 0;
            if(attr == 'opacity'){
                icur = Math.round(parseFloat(getStyle(obj,attr))*100);
            }else{
                var icur = parseInt(getStyle(obj,attr));
            }
            // 2.算速度
            var speed = (json[attr] - icur)/8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 3.检测停止
            if(icur != json[attr]){// 不是所有的运动都到达目标值
                flag = false;
            }
            if(attr == 'opacity'){
                obj.style.filter = 'alpha(opacity: '+ (icur + speed) +')';
                obj.style.opacity = (icur + speed)/100;
            }else{
                // obj.style.width = icur + speed + 'px';
                obj.style[attr] = icur + speed + 'px';
            }
            if(flag){// 所有的运动都到达目标值
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }
        }
    },30);
};