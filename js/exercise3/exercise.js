/**
 * Created by hzou on 4/21/16.
 */

function exercise() {
  console.log(1);
  setTimeout(function () { console.log(2);}, 1000);
  setTimeout(function () { console.log(3); }, 0);
  console.log(4);
}

// exercise();