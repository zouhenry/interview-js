/**
 * Created by hzou on 4/21/16.
 */

function exercise() {
  var counter;
  for ( counter = 0; counter < 5; ++counter ) {
    setTimeout(function () {
      console.log(counter);
    }, counter * 1000);
  }
}

//what's the output of exercise()?
exercise();