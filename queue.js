// QUEUE = FIRST IN FIRST OUT === FIFO

//simple example:

const numbers = []
numbers.push(10); //FIRST IN
numbers.push(20); //IN
numbers.push(30); //IN
numbers.push(40); //IN
console.log(numbers); //all numbers
const out = numbers.shift(); //FIRST OUT
console.log(out); //FIRST IN number is FIRST OUT number.
console.log(numbers); //rest numbers

//another example: 

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item){                     //you can also name it as add
        this.queue.push(item);
    }
    dequeue(){                         //you can also name it as remove
        if(this.queue.length){
            return this.queue.shift();
        }
    }
};

const customers = new Queue();
customers.enqueue("Rahim"); //FIRST IN
customers.enqueue("Karim"); //IN
customers.enqueue("Salam"); //IN
customers.enqueue("Selim"); //IN
console.log(customers.queue); //all customers
const buyingFinished = customers.dequeue(); //FIRST OUT
console.log(buyingFinished); //FIRST IN, customer will buy first then FIRST OUT
console.log(customers.queue); //rest customers


