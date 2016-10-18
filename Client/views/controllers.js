var app = angular.module('Terapore',[]);

app.controller('addMembraneCtrl',function($scope, addMembrane){
  $scope.data = {
    name: '',
    polymer: '',
    humidity: '',
    MW:'',
    rejRate:'',
    flowThru: ''
  };
  $scope.addData = function(){
    addMembrane.newMembrane($scope.data)
    $scope.data = {
    name: '',
    polymer: '',
    humidity: '',
    MW:'',
    rejRate:'',
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
      return resp.data
    })
  }
  return { newMembrane:newMembrane }
});

app.controller('findMembraneCtrl',function($scope, findMembrane){
  $scope.display = 'your membranes await...'
  $scope.data = {
    name: '',
    MW:'',
    rejRate:'',
    flowThru: ''
  };
  $scope.findData = function(){
    findMembrane.findMembrane().then(function(res){
      var displayedBranes = [];
      for(var i = 0; i < res.length;i++){
        //if the name exists
        if($scope.data.name !== ''){
          //and the other parameters are not input or match
          if($scope.data.name === res[i].name && ($scope.data.MW ==res[i].MW || $scope.data.MW == '')&&($scope.data.rejRate == res[i].rejRate || $scope.data.rejRate == '')&&($scope.data.flowThru == res[i].flowThru || $scope.data.flowThru == '')){
            displayedBranes.push(res[i])
          }
        //if no name exists
        } else if(($scope.data.MW == res[i].MW || $scope.data.MW == '')&&($scope.data.rejRate == res[i].rejRate || $scope.data.rejRate == '')&&($scope.data.flowThru == res[i].flowThru || $scope.data.flowThru == '')){
          displayedBranes.push(res[i])
        }
      }
      $scope.display = displayedBranes
      $scope.data = {
        name: '',
        MW:'',
        rejRate:'',
        flowThru: ''
      }
    })
  }
});

app.factory('findMembrane',function($http){
  var findMembrane = function(){
    return $http({
      method: 'GET',
      url:'/membranes',
      // data: membrane
    }).then(function(resp){
      console.log('the response to the client is',resp)
      return resp.data;
    })
  }
  return { findMembrane:findMembrane }
});