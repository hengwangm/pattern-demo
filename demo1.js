/* 单例模式 */
/*所谓单例模式，就是每次访问的实例都是同一个实例，
  不用重新构建,常用于构建数据资源池 
*/
//1.利用常量来实现,缺点很明显，会被改动
function Singleton1(name) {
    if (!Singleton.instance) {
        this.name = name || '666';
        Singleton.instance = this;
    }
    return Singleton.instance;
}

//2.利用闭包来实现私有,缺点是改变了Singleton的构造方法。原型链被改变了
function Singleton2(name) {
    var instance = this;
    this.name = name || '666';
    Singleton = function () {
        return instance;
    }
}

//3.闭包优化
function Singleton(name) {
    var instance;
    Singleton = function () {
        return instance;
    }
    Singleton.prototype = this; //修改原型为this
    instance = new Singleton();
    instance.constructor = Singleton; //重置构造方法
    this.name = name || '666';
    return instance;
}

//4.立即执行函数 实现
var Universe;

(function () {
    var instance;
    Universe = function Universe() {
        if (instance) {
            return instance;
        }
        instance = this;
        this.start_time = 0;
        this.bang = "Big";
    };

}());


Singleton.prototype.myName = '666';
var singleton1 = new Singleton('1');
Singleton.prototype.myName2 = '666';
var singleton2 = new Singleton('2');
console.log(singleton1 == singleton2);
console.log(singleton1.myName);
console.log(singleton1.myName2);