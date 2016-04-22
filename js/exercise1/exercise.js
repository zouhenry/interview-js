/**
 * Created by hzou on 4/21/16.
 */

function exercise() {
  (function IIFE() {
    var bar = 3;
    foo     = bar;
  })();
  console.log('foo', foo);
  console.log('bar', bar);
}
// What's the output of exercise();
// exercise();