/**
 * Created by robert on 23/08/2015.
 */
(function () {
    'use strict';

    angular.module('brbApp').controller('LocationMapCtrl', ['$cordovaGeolocation', '$log', '$stateParams', 'brbApi', LocationMapCtrl]);

    function LocationMapCtrl($cordovaGeolocation, $log, $stateParams, brbApi) {
        var vm = this;
        var posLat, posLong;

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                posLat  = position.coords.latitude
                posLong = position.coords.longitude
            }, function(err) {
                console.log(err);
            });

        vm.locationId = Number($stateParams.id);

        posLat = (!posLat) ? -27.502928 : posLat;
        posLong = (!posLong) ? 153.222811 : posLong;

        vm.map = {
            center: {
                latitude: posLat,
                longitude: posLong,
            },
            zoom: 14
        };

        //console.log(vm.map);
        vm.marker = {
            id: 0,
            coords: {
                latitude: posLat,
                longitude: posLong
            },
            options: { draggable: true },
            events: {
                dragend: function (marker, eventName, args) {
                    $log.log('marker dragend');
                    var lat = marker.getPosition().lat();
                    var lon = marker.getPosition().lng();
                    $log.log(lat);
                    $log.log(lon);

                    vm.marker.options = {
                        draggable: true,
                        labelContent: "lat: " + vm.marker.coords.latitude + ' ' + 'lon: ' + vm.marker.coords.longitude,
                        labelAnchor: "100 0",
                        labelClass: "marker-labels"
                    };
                }
            }
        };

        vm.locationClicked = function(marker){
            window.location = "geo:" + marker.latitude + "," + marker.longitude + ";u=35";
        };

    };
})();