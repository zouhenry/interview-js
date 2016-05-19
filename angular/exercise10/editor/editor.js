/**
 * Created by hzou on 4/21/16.
 */

(function () {
  angular
    .module('app')
    .directive('editor', editor);

  function editor() {
    return {
      bindToController: {
        student: "=",
        save   : "&"
      },
      controller      : controller,
      controllerAs    : 'editorCtrl',
      restrict        : 'EA',
      scope           : true,
      templateUrl     : "editor/editor.html"
    };

    function controller() {

    }
  }

}());