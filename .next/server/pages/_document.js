"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 4001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6859);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7342);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);

 // Need to create a custom _document because i18n support is not compatible with `next export`.




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_0__.Html, {
      lang: _utils_AppConfig__WEBPACK_IMPORTED_MODULE_1__/* .AppConfig.locale */ .X.locale,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Head, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_0__.NextScript, {})]
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 7342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ AppConfig)
/* harmony export */ });
const AppConfig = {
  site_name: 'Starter',
  title: 'Next.js Boilerplate',
  description: 'Starter code for your Next.js blog Boilerplate with Tailwind CSS',
  url: 'https://example.com',
  locale: 'en',
  author: 'Anonymous',
  pagination_size: 5
};

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [101,859], () => (__webpack_exec__(4001)));
module.exports = __webpack_exports__;

})();