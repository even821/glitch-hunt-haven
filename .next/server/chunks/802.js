"use strict";
exports.id = 802;
exports.ids = [802];
exports.modules = {

/***/ 802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/MenuItem.jsx


const MenuItem = ({ item , slug  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: "my-3 mx-5 hover:cursor-pointer",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "/router/" + slug,
            children: item
        })
    });
};
/* harmony default export */ const components_MenuItem = (MenuItem);

;// CONCATENATED MODULE: ./components/Menu.jsx



const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " bg-slate-900 text-white grid grid-cols-2 shadow-lg shadow-black",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex py-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuItem, {
                        item: "Hunters",
                        slug: "hunter"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuItem, {
                        item: "Games",
                        slug: "game"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuItem, {
                        item: "Techs",
                        slug: "tech"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MenuItem, {
                        item: "Strats",
                        slug: "strat"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " grid justify-items-end pr-10"
            })
        ]
    });
};
/* harmony default export */ const components_Menu = (Menu);


/***/ })

};
;