/**
 * Created by hzou on 4/21/16.
 */

function exercise() {
  (function () {
    var a = 3;
    b     = a;
  })();
  console.log(a);
  console.log(b);
}

// exercise();