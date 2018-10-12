//手写一个bind函数

function bind(thisObj){
    var that = this;
    var arg = arguments;
    return function(){
        that.apply(thisObj,arg);
    }

}