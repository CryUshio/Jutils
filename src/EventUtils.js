;
(function(){

  EventUtils = function() {
      this.eventList = {};
  }
  
  EventUtils.prototype.addSubscribe = function(eventType, subscriber) {
      if (arguments.length !== 2) {
          throw new SyntaxError("This function need 2 parameters [eventType, subscriber].");
      }
      if (typeof eventType != 'string' && !eventType) {
          throw new TypeError("[eventType] must be string and not null.");
      }
      if (!this.eventList[eventType]) {
          this.eventList[eventType] = [];
      }
      this.eventList[eventType].push(subscriber);
  }
  
  EventUtils.prototype.publish = function(event) {
      if (!event.type) {
          return console.error("Cannot find event type.");
      }
      if (!this.eventList[event.type]) {
          return console.warn("No subscriber.");
      }
      let subscribers = this.eventList[event.type];
      for (let i = 0; i < subscribers.length; i++) {
          subscribers[i](event);
      }
  }
  
  EventUtils.prototype.removeSubscribe = function(eventType, subscriber) {
      if (arguments.length !== 2) {
          throw new SyntaxError("This function need 2 parameters [eventType, subscriber].");
      }
      if (typeof eventType != 'string' && !eventType) {
          throw new TypeError("[eventType] must be string and not null.");
      }
      if (!(this.eventList[eventType] instanceof Array)) {
          return;
      }
      let subscribers = this.eventList[eventType];
      for (let i = 0; i < subscribers.length; i++) {
          if (subscribers[i] === subscriber) {
              subscribers.splice(i, 1);
              break;
          }
      }
      if (subscribers.length == 0) {
          delete this.eventList[eventType];
      }
  }
})();
