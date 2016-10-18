var app = angular.module('Terapore',[]);

app.controller('addMembraneCtrl',function($scope, addMembrane){
  $scope.data = {
    name: '',
    polymer: '',
    humidity: '',
    flowThru: ''
  };
  $scope.addData = function(){
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
    return $http({
      method: 'POST',
      url:'/membranes',
      data:membrane
    }).then(function(resp){
      console.log('this is in the factory')
      return resp.data
    })
  }
  return { newMembrane:newMembrane }
});

app.controller('findMembraneCtrl',function($scope, findMembrane){
  $scope.display = 'your membranes await...'
  $scope.data = {
    name: '',
    flowThru: ''
  };
  $scope.findData = function(){
    console.log('the $scope.data is: ',$scope.data)
    console.log('this is in the finding controller')
    findMembrane.findMembrane($scope.data).then(function(res){
      console.log(res.data)
      $scope.display = res.data
    })

    $scope.data = {
      name: '',
      flowThru: ''
    };
  }
});

app.factory('findMembrane',function($http){
  var findMembrane = function(){
    return $http({
      method: 'GET',
      url:'/membranes',
      //data: membrane
    })
  }
  return { findMembrane:findMembrane }
});