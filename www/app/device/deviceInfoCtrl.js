/**
 * Created by robert on 23/08/2015.
 */
(function() {
    "use strict";

    angular.module('brbApp')
        .controller('DeviceInfoCtrl', ['$cordovaDevice', DeviceInfoCtrl]);

    function DeviceInfoCtrl($cordovaDevice){
        var vm = this;

        vm.deviceModel = function() {
            vm.results = $cordovaDevice.getModel();
        };

        vm.devicePlatform = function () {
            vm.results = $cordovaDevice.getPlatform();
        };

        vm.deviceUUID = function(){
            vm.results = $cordovaDevice.getUUID();
        };

        vm.deviceVersion = function () {
            vm.results = $cordovaDevice.getVersion();
        };

        vm.cordovaVersion = function () {
            vm.results = $cordovaDevice.getCordova();
        };

        vm.device = function () {
            vm.results = $cordovaDevice.getDevice();
        };
    }

}());