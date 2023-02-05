"use strict";
(() => {
var exports = {};
exports.id = 15;
exports.ids = [15,610];
exports.modules = {

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

/***/ 459:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(891);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(802);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function IndexPage({ hunter  }) {
    return hunter?.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-slate-600",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " text-white p-10 grid grid-cols-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-3xl mb-3 font-semibold",
                        children: hunter.name
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " text-xl font-semibold",
                                children: "Games"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: " pl-4",
                                children: hunter.games.map((game)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "/game/" + game.slug.current,
                                            children: game.name
                                        })
                                    }, game._id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getStaticPaths() {
    const paths = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`*[_type == "game" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: true
    };
}
async function getStaticProps(context) {
    const { slug =""  } = context.params;
    const hunter = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`
  *[_type == "hunter" && slug.current == $slug][0]{
    name, image, games[]->
  }`, {
        slug
    });
    return {
        props: {
            hunter
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [802], () => (__webpack_exec__(459)));
module.exports = __webpack_exports__;

})();