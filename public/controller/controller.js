/**
 * Created by tarun on 9/13/2017.
 */
var PozzettoApp = angular.module('PozzettoApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
PozzettoApp.config(function ($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeController'
        })
        // route for the about page
        .when('/gallery', {
            templateUrl: 'gallery.html',
            controller: 'galleryController'
        })

        // route for the contact page
        .when('/menu', {
            templateUrl: 'menu.html',
            controller: 'menuController'
        })


        .when('/orderOnline', {
            templateUrl: 'orderOnline.html',
            controller: 'orderOnlineController'
        });
});

PozzettoApp.controller('homeController', function ($scope) {

    $scope.message = "This is the home page";

});

PozzettoApp.controller('galleryController', function ($scope) {

    $scope.message = "This is the Gallery page";

});

PozzettoApp.controller('menuController', function ($scope) {

    $scope.message = "This is the Menu page";

});

PozzettoApp.controller('orderOnlineController', function ($scope) {

    $scope.message = "This is the Order Online page";

});

PozzettoApp.controller ('CarouselCtrl', function ($scope) {

    $scope.slides = [
        {
            image: 'images/background.jpg',
            height: '250px'
        },
        {
            image: 'images/wooden-background-with-italian-pasta-and-basil_23-2147606554.jpg',
            height: '250px'

        }


    ];

});


