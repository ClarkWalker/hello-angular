(function() {
  angular.module('myApp').component('HelloForm', HelloForm);

  function HelloForm() {
    let name = '';
    this.submit = function(str) {
      name = str;
    };
  }
})();
