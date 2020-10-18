//STACK = LAST IN FAST OUT === LIFO

//simple example:

const numbers = []
numbers.push(10); //IN
numbers.push(20); //IN
numbers.push(30); //IN
numbers.push(40); //LAST IN
console.log(numbers); //all numbers
const out = numbers.pop(); //FIRST OUT
console.log(out); //LAST IN number is FIRST OUT number.
console.log(numbers); //rest numbers

//another example:

class Stack {
    constructor() {
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
};

const guest = new Stack();
guest.add("Businessman"); //IN
guest.add("Developer"); //IN
guest.add("Entrepreneur"); //IN
guest.add("Minister"); //LAST IN
console.log(guest.stack); //all guests
const speaker = guest.remove(); //FIRST OUT
console.log(speaker); //very busy person, LAST IN, then speak in the stage and FIRST OUT
console.log(guest.stack); //rest guests




