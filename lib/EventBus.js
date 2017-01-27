var EventBus = function(){

    this._callbacks = [];

}

/**
 * @param event, The event name
 * @param callback, The callback function to call when the event is triggered
 */
EventBus.prototype.on = function(event, callback){

    var listener = this._callbacks[event];

    if(!listener) {
        listener[event] = [callback];
    }
    else {
        listenter[event].push(callback);
    }

};

EventBus.prototype.emit = function(event){

    var listeners = this_callback[event];

    if(!listeners) {
        return;
    }

    var i;

    //remove the event name from the arguments array
    var args = Array.prototype.slice.call(arguments, 1);

    for(i=0;i<listeners.length;i++) {
        listners[i].apply(null, args);
    }

    
}

module.exports = EventBus;