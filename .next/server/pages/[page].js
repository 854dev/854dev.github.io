"use strict";
(() => {
var exports = {};
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 1221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blog_BlogGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2286);
/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5265);
/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9883);
/* harmony import */ var _utils_AppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7342);
/* harmony import */ var _utils_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3787);
/* harmony import */ var _utils_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6464);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const PaginatePosts = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_templates_Main__WEBPACK_IMPORTED_MODULE_3__/* .Main */ .o, {
  meta: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_layout_Meta__WEBPACK_IMPORTED_MODULE_2__/* .Meta */ .h, {
    title: "Lorem ipsum",
    description: "Lorem ipsum"
  }),
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_blog_BlogGallery__WEBPACK_IMPORTED_MODULE_1__/* .BlogGallery */ .T, {
    posts: props.posts,
    pagination: props.pagination
  })
});

const getStaticPaths = async () => {
  const posts = (0,_utils_Content__WEBPACK_IMPORTED_MODULE_5__/* .getAllPosts */ .Bd)(['slug']);
  const pages = (0,_utils_Pagination__WEBPACK_IMPORTED_MODULE_7__/* .convertTo2D */ .R)(posts, _utils_AppConfig__WEBPACK_IMPORTED_MODULE_4__/* .AppConfig.pagination_size */ .X.pagination_size);
  return {
    paths: pages.slice(1).map((_, ind) => ({
      params: {
        // Ind starts from zero so we need to do ind + 1
        // slice(1) removes the first page so we do another ind + 1
        // the first page is implemented in index.tsx
        page: `page${ind + 2}`
      }
    })),
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const posts = (0,_utils_Content__WEBPACK_IMPORTED_MODULE_5__/* .getAllPosts */ .Bd)(['title', 'date', 'slug']);
  const pages = (0,_utils_Pagination__WEBPACK_IMPORTED_MODULE_7__/* .convertTo2D */ .R)(posts, _utils_AppConfig__WEBPACK_IMPORTED_MODULE_4__/* .AppConfig.pagination_size */ .X.pagination_size);
  const currentPage = Number(params.page.replace('page', ''));
  const currentInd = currentPage - 1;
  const pagination = {};

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentInd],
      pagination
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginatePosts);

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [101,664,819,787,286], () => (__webpack_exec__(1221)));
module.exports = __webpack_exports__;

})();