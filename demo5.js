//requestAnimationFrame实现动画效果，1000/60运用一次.60正

function anima(){
	var i = 1;
    requestAnimationFrame(function a(){
		++i;
        document.documentElement.scrollTop = document.documentElement.scrollTop - 7 *i;
        if(document.documentElement.scrollTop !==0){
            requestAnimationFrame(a);
        }
    })
}