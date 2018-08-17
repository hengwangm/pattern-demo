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
function debounce(fn){
    
}

document.onclick = once(function(e){
    console.log(e);
})

var canOnlyFireOnce = once(function() {
    console.log('Fired!');
  });
  canOnlyFireOnce();
  canOnlyFireOnce();