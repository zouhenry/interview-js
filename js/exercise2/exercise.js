
var john = {
  title    : "john",
  echoTitle: function () {
    console.log("My title is", this.title);
  }
};

var jane = {
  title: "jane"
};

var exercise = function exercise() {
  john.echoTitle();
};
// exercise();













var exercise = function () {
  var echoTitle = john.echoTitle;
  echoTitle();
};
// exercise();













var exercise = function () {
  var echoTitle = john.echoTitle.bind(jane);
  echoTitle();
};
// exercise();


















var exercise = function() {
  john.echoTitle.call(jane);
};
// exercise();


















var exercise = function() {
  john.echoTitle.apply(jane);
};
// exercise();