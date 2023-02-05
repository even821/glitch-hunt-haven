"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,610];
exports.modules = {

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Card = ({ items , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " bg-slate-800 m-5 p-4 rounded-md shadow-slate-900 shadow-lg",
        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: `/${url}?name=${item.url}`,
                    children: item.name
                })
            }, item._id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 891:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_1__]);
next_sanity__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const pill = ({ link , text , color  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: ` inline ${color} text-white p-[6px] rounded-lg font-semibold mr-2 shadow-black shadow-inner`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: link,
            children: text
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pill);
let client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_1__.createClient)({
    projectId: "1q0xyy8m",
    dataset: "production",
    apiVersion: "2023-02-03",
    useCdn: false,
    token: process.env.SANITY_WRITE_TOKEN
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 197:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function IndexPage({ hunters , games , strats , techs  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-slate-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: hunters,
                        url: "hunter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: games,
                        url: "game"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: techs,
                        url: "tech"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        items: strats,
                        url: "strat"
                    })
                ]
            })
        ]
    });
}
async function getStaticProps() {
    const hunters = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`*[_type == "hunter"]`);
    const games = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`*[_type == "game"]`);
    const strats = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`*[_type == "strat"]`);
    const techs = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`*[_type == "tech"]`);
    return {
        props: {
            hunters,
            games,
            strats,
            techs
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 91:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [802], () => (__webpack_exec__(197)));
module.exports = __webpack_exports__;

})();