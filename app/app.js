(function() {
    var app = angular.module("app",[
        'ngRoute'
    ]);
    
    app.config(['$routeProvider', function ($routeProvider) {
        
        $routeProvider.when('/', {
            templateUrl: '/main/main.html',
            controller: 'MainController'

        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }])
    
}());