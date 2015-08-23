/**
 * Created by robert on 22/08/2015.
 */
(function() {
    "use strict";

    angular.module('brbApp').controller('stockDetailsCtrl',
        ['$stateParams', 'brbApi', stockDetailsCtrl]);

    function stockDetailsCtrl($stateParams, brbApi){
        var vm =this;
        var productId = Number($stateParams.productId);

        vm.product = brbApi.getProduct(productId);

    }

}());
