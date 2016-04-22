/**
 * Created by hzou on 4/21/16.
 */

(function () {
  angular
    .module('app')
    .controller('StudentController', StudentController);

  function StudentController() {
    var vm      = this;
    vm.students = getData();
  }


  function getData() {
    return [{
      id       : 1,
      firstname: "John",
      lastname : "Smith",
      score    : 75
    }, {
      id       : 2,
      firstname: "Jane",
      lastname : "Smith",
      score    : 91
    }, {
      id       : 3,
      firstname: "Al",
      lastname : "Jones",
      score    : 87
    }, {
      id       : 4,
      firstname: "Ben",
      lastname : "Franklin",
      score    : 56
    }];
  }
})();