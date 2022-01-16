// First In First Out, FIFO

function Queue() {
  let items = [];
  this.enqueue = function(element) {
    items.push(element)
  }
  this.dequeue = function() {
    return items.shift();
  }
  this.front = function() {
    return items[0];
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  this.print = function() {
    console.log(items.toString());
  }
}

// Priority Queue
function priorityQueue() {
  let items = [];
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority
  }
  this.enqueue = function(element, priority) {
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < items.length; i++) {
        if(queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break
        }
      }
      if (!add) {
        items.push(queueElement)
      }
    }
  }
  this.dequeue = function() {
    return items.shift();
  }
  this.front = function() {
    return items[0];
  }
  this.isEmpty = function() {
    return items.length === 0;
  }
  this.clear = function() {
    items = [];
  }
  this.size = function() {
    return items.length;
  }
  this.print = function() {
    console.log(JSON.stringify(items));
  }
}





// Refer:https://blog.techbridge.cc/2016/12/10/javascript-data-structure-algorithm-queue/