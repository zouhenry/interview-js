/**
 * Created by hzou on 4/21/16.
 */

function exercise(x) {
  return function (y) {
    console.log(x, y);
  };
}

//how do you output "hello world"?
exercise("hello")("world");