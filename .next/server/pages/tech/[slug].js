"use strict";
(() => {
var exports = {};
exports.id = 99;
exports.ids = [99,610];
exports.modules = {

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FooterBar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " text-slate-300 text-center mt-4",
        children: "\xa9 2023 Glitch Hunting Haven. All rights reserved."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterBar);


/***/ }),

/***/ 940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ 354:
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
/* harmony import */ var _components_Pill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(940);
/* harmony import */ var _components_FooterBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(525);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_1__]);
_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function IndexPage({ tech  }) {
    return tech?.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: " text-white p-10 grid grid-cols-1 lg:grid-cols-2 shadow-black shadow-md justify-items-start lg:justify-items-center bg-gradient-to-t from-transparent via-slate-700 to-transparent",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mr-5 pr-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "text-3xl font-semibold",
                                children: [
                                    tech.name,
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: " text-base font-normal border-l-[1px] py-1 px-2",
                                        children: [
                                            " Tech for ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: " bg-red-700 font-semibold px-2 py-[2px] rounded-lg cursor-pointer shadow-md shadow-black",
                                                children: tech.game.name
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "p-2 block"
                            }),
                            "Discovered by ",
                            tech.hunters.map((hunter)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pill__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    text: hunter.name,
                                    color: "bg-blue-600",
                                    link: "/hunter/" + hunter.slug.current
                                }, hunter._id)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-10 whiteSpace",
                                children: tech.description
                            })
                        ]
                    }),
                    tech.video ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                        className: "w-[400px] md:w-[500px] 2xl:w-[720px] aspect-video mt-4 rounded-2xl shadow-black shadow-lg bg-slate-800 p-1",
                        src: "https://www.youtube.com/embed/" + tech.video,
                        title: "YouTube video player",
                        allowFullScreen: true
                    }) : ""
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FooterBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
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
    const tech = await _client__WEBPACK_IMPORTED_MODULE_1__.client.fetch(`
  *[_type == "tech" && slug.current == $slug][0]{
    name, slug, video, hunters[]->, description, game->
  }`, {
        slug
    });
    return {
        props: {
            tech
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
var __webpack_exports__ = __webpack_require__.X(0, [802], () => (__webpack_exec__(354)));
module.exports = __webpack_exports__;

})();