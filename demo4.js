/**
 * 发布/订阅模式
 * 观察者模式。
 * 一个简单实现版本，复杂的需要events可以多次on一个事件，需要push
 */

 class Event{

    constructor(){
        this.events = {};
    }

    on(eventName,fn){
        this.events[eventName] = fn;
    }

    emit(eventName ,data){
        if(this.events[eventName]){
            var fn = this.events[eventName];
            fn.call(this,data)
        }
    }

    remove(eventName){
        if(this.events[eventName]){
            this.events[eventName] = null;
        }
    }
 }

 var event = new Event();
 event.on('aaaa',function(event,data){
    console.log(event)
 })
 event.on('bbbb',function(event,data){
    console.log(event)
 })
 event.remove('aaaa')
 event.emit('aaaa',1)
 event.emit('bbbb',2)