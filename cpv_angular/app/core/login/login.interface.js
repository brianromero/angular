"use strict";
var LoginInterface = (function () {
    function LoginInterface(username, clave) {
        if (username === void 0) { username = ''; }
        if (clave === void 0) { clave = ''; }
        this.username = username;
        this.clave = clave;
    }
    return LoginInterface;
}());
exports.LoginInterface = LoginInterface;
//# sourceMappingURL=login.interface.js.map