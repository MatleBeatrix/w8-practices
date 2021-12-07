function displayer(something){
    return something;
}

function calculator (n1, n2, mycallback){
    let result = n1 + n2;
    console.log(mycallback(result))
}

calculator(5,5, displayer);

function greet(){
    console.log("Hello World");
}

function sayName(name) {
    console.log("Hello " + name);
}

function callSayName(callback, name=""){
    callback(name);
}

callSayName(sayName, "John");
callSayName(greet);

setTimeout(greet, 2000);
sayName("David");
