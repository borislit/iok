'use strict';
(function() {

function MainController($scope, $http, socket) {
  var self = this;
  this.awesomeThings = [];

  socket.syncUpdates('thing');

  $http.post('/api/things', { name: self.newThing });

  $scope.$on('$destroy', function() {
    socket.unsyncUpdates('thing');
  });
}

angular.module('iokApp')
  .controller('MainController', MainController);

})();
