var app = angular.module('Terapore',[]);

app.controller('addMembrane',function($scope, addMembrane){
  $scope.membranes = [];
  $scope.data = {
    name: '',
    polymer: '',
    humidity: '',
    flowThru: ''
  };
  $scope.addData = function(){
    $scope.membranes.push($scope.data);
    addMembrane.newMembrane($scope.data)
    $scope.data = {
      name: '',
      polymer: '',
      humidity: '',
      flowThru: ''
    };
  }
});

app.factory('addMembrane',function($http){
  var newMembrane = function(membrane){
    return $http.post('api/membranes', membrane).then(function(res){
      console.log(res);
    })
  }
  return { newMembrane:newMembrane }
});