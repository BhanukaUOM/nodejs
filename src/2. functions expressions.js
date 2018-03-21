//Normal Function
function sayHello() {
    console.log("Hello");
}

sayHello();


// Function Expression
var sayBye = function() {
    console.log("Bye");
}

sayBye();

//call Function in Function
function callFunction(fun){
    fun();
}

callFunction(sayBye);