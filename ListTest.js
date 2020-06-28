var LinkedList= require('./LinkedList.js');
/*
function display(ls){
    let currNode = ls.head;

   // while(currNode !==null)
    {
        console.log(currNode.head.value)
        currNode = ls.next;
        
        console.log(ls.head.value)
    }
}
*/
function display(ls){
    let currNode = ls.head;
    
    
    
    while(currNode!==null){
        //console.log(currNode.head.value);
        currNode=ls.next;
        console.log(ls.head.value);
    }
    
    
    }
    function arrayStuff(){
    
     
    
        // Create an instance of the Array class
    
        var ls = new LinkedList();
    
        // Add an item to the array
     ls.insertFirst("Apollo");
     
     console.log(ls.find("Apollo"));

     ls.insertLast("Boomer");
     
     console.log(ls.find("Boomer"));
     //display(ls);
    }
    
    arrayStuff()
    
    module.exports =new LinkedList;
    