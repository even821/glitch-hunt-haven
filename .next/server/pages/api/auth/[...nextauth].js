"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/discord"
const discord_namespaceObject = require("next-auth/providers/discord");
var discord_default = /*#__PURE__*/__webpack_require__.n(discord_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js



/* harmony default export */ const _nextauth_ = (next_default()({
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        discord_default()({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(897));
module.exports = __webpack_exports__;

})();