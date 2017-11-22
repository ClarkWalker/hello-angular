(function() {
  angular.module('myApp').controller('HelloForm', HelloForm);
  function HelloForm() {
    let name = '';
    this.submit = function(str) {
      name = str;
    };
  }
})();
