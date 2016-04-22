/**
 * Created by hzou on 4/21/16.
 */

function Person(name) {
  this.name = name;
}

var jane = new Person('jane');
var john = new Person('john');

//add a sayHi method so the code below will log the right output

//output "hi jane"
jane.sayHi();

//output "hi john"
john.sayHi();