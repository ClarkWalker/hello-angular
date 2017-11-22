(function() {
  angular.module('myApp').component('displayName', {
    templateUrl: '/js/displayname/DisplayName.template.html',
    binding: {
      name: '='
    }
  });
})();
