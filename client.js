

var Client = function(){

    
    EventBus.apply(this);

};



Client.prototype = Object.create(EventBus.prototype);
Client.constructor = Client;

module.exports = client;