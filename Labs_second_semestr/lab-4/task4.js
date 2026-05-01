class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(task, weight) {
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (weight > this.items[i].weight) {
        this.items.splice(i, 0, { task, weight });
        added = true;
        break;
      }
    }
    if (!added) this.items.push({ task, weight });
  }

  dequeue() {
    return this.items.shift().task;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
