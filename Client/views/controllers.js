var app = angular.module('Terapore',[]);

app.controller('addMembraneCtrl',function($scope, addMembrane){
  $scope.membranes = [];
  $scope.data = {
    name: '',
    polymer: '',
    humidity: '',
    flowThru: ''
  };
  $scope.addData = function(){
    $scope.membranes.push($scope.data);
    console.log('this is in the controller')
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
    console.log('this is in the factory before the post request')
    console.log('the membrane is: ', membrane)
    return $http({
      method: 'POST',
      url:'/membranes',
      data:JSON.stringify(membrane)
    }).then(function(resp){
      console.log('this is in the factory')
      return resp.data
    })
  }
  return { newMembrane:newMembrane }
});