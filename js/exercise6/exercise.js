
/*
  1. create a helloMr function which takes a name to output "Hello Mr. <name>"
  2. create a helloMrs function which takes a name to output "Hello Mrs. <name>"
  3. create a helloMrAndMrs function which takes a name to output "Hello Mr. and Mrs. <name>"
  4. create a generic partial function which takes a function and then partial fills in the parameters.
  When it is invoked again with additional parameter, that's when the original function is resolved.
  5. update helloMr, helloMrs, helloMrAndMrs, to use the function from #4
*/

function sayHello(title, name){
    return 'Hello ' + title + ' ' + name;
}

//TODO: implement helloMr, helloMrs, helloMrAndMrs

function exercise(){
    console.log(helloMr('Smith')); //Hello Mr. Smith
    console.log(helloMrs('Smith')); //Hello Mrs. Smith
    console.log(helloMrAndMrs('Smith')); //Hello Mr. And Mrs. Smith
}

// exercise();
