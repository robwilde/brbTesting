/**
 * Created by robert on 22/08/2015.
 */
angular.module("brbApp", ["ngCordova", "ionic"])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            //
            // Hide the accessory bar by default (remove to show the accessory bar)
            //
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

        $ionicConfigProvider.tabs.position('bottom');

        $stateProvider
            .state('home', {
                abstract: false,
                url: "/home",
                templateUrl: "app/home/home.html"
            })

            .state('home.search', {
                url: "/search",
                views: {
                    "tab-search": {
                        templateUrl: "app/home/search.html"
                    }
                }
            })
            .state('home.scan', {
                url: "/scan",
                views: {
                    "tab-scan": {
                        templateUrl: "app/home/scan.html"
                    }
                }
            })

            .state('app', {
                abstract: true,
                url: "/app",
                templateUrl: "app/layout/menu-layout.html"
            })

            .state('app.allStock', {
                url: "/allStock",
                views: {
                    'mainContent': {
                        templateUrl: "app/stock/allStock.html"
                    }
                }
            })

            .state('app.stockDetail', {
                url: "/details/:productId",
                views: {
                    'mainContent': {
                        templateUrl: "app/stock/stockDetails.html"
                    }
                }
            })

            .state('app.myStock', {
                url: "/myStock/:vehicleId",
                views: {
                    'mainContent': {
                        templateUrl: "app/staff/myStock.html"
                    }
                }
            })

            .state('app.myInstalls', {
                url: "/myInstalls/:vehicleId",
                views: {
                    'mainContent': {
                        templateUrl: "app/staff/myInstalls.html"
                    }
                }
            })

            .state('app.help', {
                url: "/help",
                views: {
                    'mainContent': {
                        templateUrl: "app/help.html"
                    }
                }
            })

            .state('app.deviceInfo', {
                url: "/deviceInfo",
                views: {
                    'mainContent': {
                        templateUrl: "app/device/deviceInfo.html"
                    }
                }
            });


//
// if nothing matched, use this as fallback
//
        $urlRouterProvider.otherwise('/home');
    })
;
