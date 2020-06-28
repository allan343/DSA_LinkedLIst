


class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
      
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    insertBefore(value,item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (nextNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (nextNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode=nextNode;
                nextNode = currNode.next;
               
            }
        }
        // Found it
       currNode.next= new _Node(value,nextNode);
       
    }

    insertAfter(value,item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (nextNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (nextNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                nextNode = nextNode.next;
            }
        }
        // Found it
        let saveNext= nextNode.next;
        nextNode.next = new _Node(value, saveNext)
    }

    insertAt(value,pos) { 
        // Start at the head
        let index= pos-1;
        let count=0;
        let currNode = this.head;
        // If the list is empty
        if (pos=="0") {
            this.insertFirst(value);
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (count < index) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode=nextNode;
                nextNode = currNode.next;
               
            }
            count++;
        }
        // Found it
       currNode.next= new _Node(value,nextNode);
       
    }

    
    size() { 
        // Start at the head
    
        let currNode = this.head;
        let size=0;
        // If the list is empty
        if (!this.head) {
           console.log("list is empty")
        }
        let nextNode= currNode.next;
        // Check for the item 
        while (currNode !== null) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
          
                currNode=currNode.next;
            size++;
        }
        // Found it
       return size;
    }

    isEmpty(){
        let currNode = this.head;
        if (currNode==null)
        {
            console.log("list is empty")

        }
        else{
            console.log("list is not empty")
        }
    }

    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }

    findPrevious(item) { 
        // Start at the head
        let currNode = this.head;
        let prevNode= null;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                prevNode= currNode;
                currNode = currNode.next;
            }
        }
        // Found it
        return prevNode;
    }

    findLast() { 
        // Start at the head
        let currNode = this.head;
     
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.next !== null) {
          
                // Otherwise, keep looking 
            //    console.log(currNode.value);
                
                currNode = currNode.next;
            
        }
        // Found it
        return currNode;
    }

    thirdFromEnd() { 
        // Start at the head
        let third = this.size()-3;
        console.log(this.size());
        console.log(third);
        let currNode = this.head;
        let pos = 0;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (pos<third) {
          
                // Otherwise, keep looking 
            //    console.log(currNode.value);
                
                currNode = currNode.next;
                pos++;
            
        }
        // Found it
        return currNode;
    }

    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
}

function display(ls){
let currNode = ls.head;

console.log(currNode.value);

while(currNode.next!==null){
    //console.log(currNode.head.value);
    currNode=currNode.next;
    console.log(currNode.value);
}

}

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
    return current;
}
function arrayStuff(){

 

    // Create an instance of the Array class

    var ls = new LinkedList();

    // Add an item to the array
    ls.insertLast("Apollo");
     
    // console.log(ls.find("Apollo"));

     ls.insertLast("Boomer");
     
    // console.log(ls.find("Boomer"));

     ls.insertLast("Helo");
     
    // console.log(ls.find("Helo"));

     ls.insertLast("Husker");
     
     //console.log(ls.find("Husker"));

     ls.insertLast("Starbuck");
     
    // console.log(ls.find("Starbuck"));
    ls.insertLast("Tauhida");

 //console.log("remove Husker");
 ls.insertBefore("Adama","Husker");
 display(ls);
 console.log("now inserting after");
 console.log(" ");
 ls.insertAfter("Gaius","Adama");
 display(ls);
 console.log("now inserting at");
 console.log();
 ls.insertAt("Chief",3);
    display(ls);

  ls.size();
  
  ls.isEmpty();
  let PrevNode= ls.findPrevious("Adama");
  console.log(PrevNode.value);

  let LastNode= ls.findLast();
  console.log(LastNode);

  let current = WhatDoesThisProgramDo(ls);
  console.log(current);

  let third = ls.thirdFromEnd();
  console.log(third.value);
}

arrayStuff()

module.exports =new LinkedList;
