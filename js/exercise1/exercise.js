/**
 * Created by hzou on 4/21/16.
 */

function exercise() {
  function func() {
    var bar = 3;
    foo     = bar;
  }

  func(); //calling foo

  console.log('bar', bar);
  console.log('foo', foo);
}

// What's the output of exercise();
// exercise();