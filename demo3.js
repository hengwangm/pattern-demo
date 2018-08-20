/**
 * 装饰者模式
 * 在我理解，就是不修改原有函数的情况下，
 * 添加一个新功能
 */

//函数执行一次
function once(fn){
    return function(){
        //首先执行这个函数
        fn && fn.apply(this,arguments)
        //然后清空这个函数
        fn=null;
    }
}

//函数防抖动
/**
 * 例如angular的ngmodel有个debounce属性，就是用户输入后停止一段时间
 * 才开始计算这个值，防止这个input的值一直抖动，影响性能.
 * 如果一直输入不停，那么该函数不会被执行。
 */
function debounce(fn,ms){
    var timer;
    return function(){
        var self = this,args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(self,args);
        },ms)
    }
}



//节流
/**
 * 每隔ms至少会执行一次
 */
function throttle(fn,ms){
    var startTime = new Data();
    return function(){
        var self = this,args = arguments;
        curTime  = new Data();
        if(curTime - startTime >= ms){
            fn.apply(self,args);
            startTime = curTime;
        }
    }
}


document.onclick = once(function(e){
    console.log(e);
})

var canOnlyFireOnce = once(function() {
    console.log('Fired!');
  });
  canOnlyFireOnce();
  canOnlyFireOnce();