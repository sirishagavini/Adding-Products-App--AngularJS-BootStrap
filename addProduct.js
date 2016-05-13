/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//creating a module- myOnlineApp
var myAppVar = angular.module('myOnlineApp', [])
//Creating a controller for the module
myAppVar.controller('myControl', function($scope,message)
{
//creating an array called myProducts
 $scope.myProducts = [{Name: 'Choclate', Description: 'Food', Price: 10},
{Name: 'Icecream', Description: 'Food', Price: 20 },
{Name: 'GreenTea', Description: 'Drink', Price: 5},
];
//creating a function to add new products
$scope.add = function()
{
        //inserting new element in an array

$scope.myProducts.push({Name: '', Description: '', Price: 0 });

}
//calling the service from the controller

$scope.numProd = message.prodlength($scope.myProducts);
});
//creating a service to the module to finc out initial number of products

myAppVar.service('message', function()
{
    var num = 0 ;
    this.prodlength = function(a)
      {
   num = a.length;
    return num;
}
});


