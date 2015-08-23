/**
 * Created by robert on 22/08/2015.
 */
(function() {
    "use strict";

    angular.module('brbApp')
        .controller('stockCtrl', ['$state', 'brbApi', stockCtrl]);

    function stockCtrl($state, brbApi){
        var vm = this;

        var products = brbApi.getProducts();

        vm.products = products;

    }

}());
