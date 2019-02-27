var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html"
    })
    .when("/ingreso_tarifa", {
        templateUrl : "ingreso_tarifas.html"
    })
    .when("/ingresar_pendiente", {
        templateUrl : "ingreso_oportunidades.html"
    })
    .when("/ventas_potenciales", {
        templateUrl : "ventas_potenciales.html"
    });
});