/**
 * Created by robert on 22/08/2015.
 */
(function () {
    "use strict";

    angular.module('brbApp')
        .factory('brbApi', [brbApi]);

    function brbApi() {

        var products = JSON.parse('[{"productId":1,"productNumber":"22F520SMF","ah":54,"rc":95,"cca":520,"dimensions":{"length":240,"width":127,"height":203},"terminal":"STD","holdDowns":"B9","cost":75.00,"price":110.00,"type":"BCI","orders":5,"ordered":7,"vehicleStock":3,"primeStock":4},{"productId":2,"productNumber":"S50D20L","ah":54,"rc":95,"cca":520,"dimensions":{"length":240,"width":127,"height":203},"terminal":"STD","holdDowns":"B9","cost":55.00,"price":95.00,"type":"JIS","orders":2,"ordered":2,"vehicleStock":1,"primeStock":3},{"productId":3,"productNumber":"AU22R600SMF","ah":54,"rc":95,"cca":520,"dimensions":{"length":240,"width":127,"height":203},"terminal":"STD","holdDowns":"B9","cost":85.00,"price":125.00,"type":"22F","orders":4,"ordered":3,"vehicleStock":3,"primeStock":5}]');

        function getProducts() {
            return products;
        }

        function getProduct(productID) {
            return _.findWhere(products, {productId: productID});
        }

        return {
            getProducts: getProducts,
            getProduct: getProduct
        };
    };

}());
