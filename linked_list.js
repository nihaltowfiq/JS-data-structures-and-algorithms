//value-next === LINKED LIST

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    };
};

class LinkedList {
    constructor(head) {
        this.head = head;
    }
    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.value === value) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    };
};

const head = new Node("Nihal");
const humanChain = new LinkedList(head);
humanChain.add("Tomal");
humanChain.add("Pronoy");
humanChain.remove("Pronoy")
humanChain.add("Ifti")
humanChain.add("Shakil");
humanChain.add("Omy");
humanChain.remove("Tomal");
console.log(JSON.stringify(humanChain));