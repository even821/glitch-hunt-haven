"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tech/[slug]",{

/***/ "./pages/tech/[slug].jsx":
/*!*******************************!*\
  !*** ./pages/tech/[slug].jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Menu */ \"./components/Menu.jsx\");\n/* harmony import */ var _components_Pill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pill */ \"./components/Pill.jsx\");\n\n\n\nvar __N_SSG = true;\nfunction IndexPage(param) {\n    let { tech  } = param;\n    return (tech === null || tech === void 0 ? void 0 : tech.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" text-white p-10 grid grid-cols-1 lg:grid-cols-2 bg-slate-600 shadow-black shadow-md rounded-xl mx-4 justify-items-start lg:justify-items-end\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pr-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-semibold\",\n                                children: [\n                                    tech.name,\n                                    \".\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \" text-base font-normal\",\n                                        children: tech.game.name\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 62\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"p-2 block\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            \"Found by \",\n                            tech.hunters.map((hunter)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pill__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    text: hunter.name,\n                                    color: \"bg-green-600\",\n                                    link: \"/hunter/\" + hunter.slug.current\n                                }, hunter._id, false, {\n                                    fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-10 whiteSpace\",\n                                children: tech.description\n                            }, void 0, false, {\n                                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    tech.video ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        className: \"w-[400px] md:w-[500px] 2xl:w-[720px] aspect-video mt-4 rounded-3xl shadow-black shadow-lg\",\n                        src: \"https://www.youtube.com/embed/\" + tech.video,\n                        title: \"YouTube video player\",\n                        allowFullScreen: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                        lineNumber: 25,\n                        columnNumber: 10\n                    }, this) : \"\"\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" text-slate-300 text-center mt-4\",\n                children: \"\\xa9 2023 Glitch Hunting Haven. All rights reserved.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\sanity\\\\glitchhaven\\\\app\\\\pages\\\\tech\\\\[slug].jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZWNoL1tzbHVnXS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN5QztBQUNBOztBQUUxQixTQUFTRSxVQUFVLEtBQVEsRUFBRTtRQUFWLEVBQUVDLEtBQUksRUFBRSxHQUFSO0lBRWhDLE9BQ0dBLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUMsSUFBSSxtQkFDWCw4REFBQ0M7OzBCQUNDLDhEQUFDTCx3REFBSUE7Ozs7OzBCQUNMLDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FHYiw4REFBQ0M7Z0NBQUdELFdBQVU7O29DQUEwQkgsS0FBS0MsSUFBSTtvQ0FBQztrREFBQyw4REFBQ0k7d0NBQUtGLFdBQVU7a0RBQTBCSCxLQUFLTSxJQUFJLENBQUNMLElBQUk7Ozs7Ozs7Ozs7OzswQ0FDM0csOERBQUNJO2dDQUFLRixXQUFVOzs7Ozs7NEJBQW1COzRCQUV6QkgsS0FBS08sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ3hCLDhEQUFDWCx3REFBSUE7b0NBQUNZLE1BQU1ELE9BQU9SLElBQUk7b0NBQUVVLE9BQU07b0NBQWVDLE1BQU0sYUFBYUgsT0FBT0ksSUFBSSxDQUFDQyxPQUFPO21DQUFPTCxPQUFPTSxHQUFHOzs7OzswQ0FFekcsOERBQUNDO2dDQUFFYixXQUFVOzBDQUFvQkgsS0FBS2lCLFdBQVc7Ozs7Ozs7Ozs7OztvQkFHbERqQixLQUFLa0IsS0FBSyxpQkFDViw4REFBQ0M7d0JBQU9oQixXQUFVO3dCQUNuQmlCLEtBQUssbUNBQW1DcEIsS0FBS2tCLEtBQUs7d0JBQ2xERyxPQUFNO3dCQUNOQyxlQUFlOzs7OzsrQkFDYixFQUFFOzs7Ozs7OzBCQUdOLDhEQUFDcEI7Z0JBQUlDLFdBQVU7MEJBQW1DOzs7Ozs7Ozs7Ozs7QUFHeEQsQ0FBQztLQTlCdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RlY2gvW3NsdWddLmpzeD9hYTM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xyXG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZW51XCI7XHJcbmltcG9ydCBQaWxsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BpbGxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSh7IHRlY2ggfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgKHRlY2g/Lm5hbWUgJiZcclxuICAgIDxkaXY+XHJcbiAgICAgIDxNZW51PjwvTWVudT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdGV4dC13aGl0ZSBwLTEwIGdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTIgYmctc2xhdGUtNjAwIHNoYWRvdy1ibGFjayBzaGFkb3ctbWQgcm91bmRlZC14bCBteC00IGp1c3RpZnktaXRlbXMtc3RhcnQgbGc6anVzdGlmeS1pdGVtcy1lbmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByLTEwXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+e3RlY2gubmFtZX0uPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtYmFzZSBmb250LW5vcm1hbFwiPnt0ZWNoLmdhbWUubmFtZX08L3NwYW4+PC9oMT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInAtMiBibG9ja1wiPjwvc3Bhbj4gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIEZvdW5kIGJ5IHt0ZWNoLmh1bnRlcnMubWFwKChodW50ZXIpID0+IChcclxuICAgICAgICAgICAgICA8UGlsbCB0ZXh0PXtodW50ZXIubmFtZX0gY29sb3I9XCJiZy1ncmVlbi02MDBcIiBsaW5rPXtcIi9odW50ZXIvXCIgKyBodW50ZXIuc2x1Zy5jdXJyZW50fSBrZXk9e2h1bnRlci5faWR9PjwvUGlsbD5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMTAgd2hpdGVTcGFjZVwiPnt0ZWNoLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICB7dGVjaC52aWRlbyA/XHJcbiAgICAgICAgKDxpZnJhbWUgY2xhc3NOYW1lPVwidy1bNDAwcHhdIG1kOnctWzUwMHB4XSAyeGw6dy1bNzIwcHhdIGFzcGVjdC12aWRlbyBtdC00IHJvdW5kZWQtM3hsIHNoYWRvdy1ibGFjayBzaGFkb3ctbGdcIlxyXG4gICAgICAgIHNyYz17XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArIHRlY2gudmlkZW99IFxyXG4gICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBcclxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW4gLz4pXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtc2xhdGUtMzAwIHRleHQtY2VudGVyIG10LTRcIj4mIzE2OTsgMjAyMyBHbGl0Y2ggSHVudGluZyBIYXZlbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBgKltfdHlwZSA9PSBcImdhbWVcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3Qge3NsdWcgPSBcIlwifSA9IGNvbnRleHQucGFyYW1zO1xyXG5cclxuICBjb25zdCB0ZWNoID0gYXdhaXQgY2xpZW50LmZldGNoKGBcclxuICAqW190eXBlID09IFwidGVjaFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgICBuYW1lLCBzbHVnLCB2aWRlbywgaHVudGVyc1tdLT4sIGRlc2NyaXB0aW9uLCBnYW1lLT5cclxuICB9YCwge3NsdWd9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGVjaFxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1lbnUiLCJQaWxsIiwiSW5kZXhQYWdlIiwidGVjaCIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJnYW1lIiwiaHVudGVycyIsIm1hcCIsImh1bnRlciIsInRleHQiLCJjb2xvciIsImxpbmsiLCJzbHVnIiwiY3VycmVudCIsIl9pZCIsInAiLCJkZXNjcmlwdGlvbiIsInZpZGVvIiwiaWZyYW1lIiwic3JjIiwidGl0bGUiLCJhbGxvd0Z1bGxTY3JlZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tech/[slug].jsx\n"));

/***/ })

});