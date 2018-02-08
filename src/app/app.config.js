let app_config = function($compileProvider, $stateProvider, $urlRouterProvider, $httpProvider, GlobalConfigFactoryProvider) {
        // $httpProvider.defaults.headers.common['Authorization'];
        const user_login_state = {
            "name" : "login",
            "url" : "/",
            "component" : "login"
        };

        $stateProvider.state(user_login_state);
        $urlRouterProvider.otherwise("/");
};

app_config.$inject = ["$compileProvider", "$stateProvider", "$urlRouterProvider","$httpProvider","GlobalConfigFactoryProvider"];
module.exports = app_config;
