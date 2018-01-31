var app = angular.module("app", ['ngMaterial']);

(function(){
    'use strict';
    app.controler("HomeController", function(){
        homeCtrl = this;

        homeCtrl.allGames = [
            {
                'name': 'Vasco x Flamengo',
                'placar' : '4 x 1',
                'qtdMercados': 2
            },
            {
                'name': 'Treze x Campinense',
                'placar' : '4 x 1',
                'qtdMercados': 2
            },
        ];
    });
})();