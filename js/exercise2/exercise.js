
var john = {
  title    : "john",
  echoTitle: function () {
    console.log("My title is", this.title);
  }
};

var jane = {
  title: "jane"
};

















function exercise1() {
  john.echoTitle();
}
// exercise1();

















function exercise2() {
  var echoTitle = john.echoTitle;
  echoTitle();
}
// exercise2();

















function exercise3() {
  var echoTitle = john.echoTitle.bind(jane);
  echoTitle();
}
// exercise3();


















function exercise4() {
  john.echoTitle.call(jane);
}
// exercise4();


















function exercise5() {
  john.echoTitle.apply(jane);
}
// exercise5();