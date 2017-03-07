function f() { // Define the decorator f() 
    console.log("f(): evaluated"); //Gets evaluated first
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called"); //Gets evaluated fourth
    }
}

function g() { // Define the decorator g() 
    console.log("g(): evaluated"); //Gets evaluated second
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called"); //Gets evaluated third
    }
}

class C { //Defines a class C consiting of the above defined decorator 
    @f()
    @g()
    method() {}
}

//Logs the below:
// f(): evaluated
// g(): evaluated
// g(): called
// f(): called