"use strict";
var router_1 = require('@angular/router');
var login_service_1 = require('./core/services/login/login.service');
var login_component_1 = require('./core/login/login.component');
var routes = getRoutes();
exports.routing = router_1.RouterModule.forRoot(routes);
function getRoutes() {
    var http;
    var loginservice = new login_service_1.LoginService(http);
    var session = loginservice.getJsonSession();
    var results = Array();
    var validsession = loginservice.isValidSession();
    results.push({ path: '', component: login_component_1.LoginComponent });
    results.push({ path: 'welcome', loadChildren: 'app/core/welcome/welcome.module' });
    if (validsession) {
        var modules = session[0]['routes'];
        console.log(modules);
        modules.map(function (module) { return results.push({ path: module, loadChildren: 'app/apps/' + module + '/' + module + '.module' }); });
    }
    return results;
}
//# sourceMappingURL=routing.js.map