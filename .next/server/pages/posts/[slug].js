"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Content)
/* harmony export */ });
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Content = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
  className: "jsx-802940705" + " " + 'content',
  children: [props.children, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_0___default()), {
    id: "802940705",
    children: [".content.jsx-802940705 *{overflow-wrap:break-word;}", ".content.jsx-802940705 p{margin-bottom:1.5rem;margin-top:1.5rem;}", ".content.jsx-802940705 ul{margin-bottom:1.5rem;margin-top:1.5rem;}", ".content.jsx-802940705 h2{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));font-size:1.5rem;font-weight:600;margin-bottom:1rem;margin-top:1rem;}", ".content.jsx-802940705 h3{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));font-size:1.25rem;font-weight:600;margin-bottom:1rem;margin-top:1rem;}"]
  })]
});



/***/ }),

/***/ 4114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2916);
/* harmony import */ var _layout_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5265);
/* harmony import */ var _templates_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9883);
/* harmony import */ var _utils_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3787);
/* harmony import */ var _utils_Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1830);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Markdown__WEBPACK_IMPORTED_MODULE_6__]);
_utils_Markdown__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const DisplayPost = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_templates_Main__WEBPACK_IMPORTED_MODULE_4__/* .Main */ .o, {
  meta: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_layout_Meta__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h, {
    title: props.title,
    description: props.description,
    post: {
      image: props.image,
      date: props.date,
      modified_date: props.modified_date
    }
  }),
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
    className: "text-center font-bold text-3xl text-gray-900",
    children: props.title
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: "text-center text-sm mb-8",
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(props.date), 'LLLL d, yyyy')
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_content_Content__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .V, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML: {
        __html: props.content
      }
    })
  })]
});

const getStaticPaths = async () => {
  const posts = (0,_utils_Content__WEBPACK_IMPORTED_MODULE_5__/* .getAllPosts */ .Bd)(['slug']);
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  const post = (0,_utils_Content__WEBPACK_IMPORTED_MODULE_5__/* .getPostBySlug */ .zQ)(params.slug, ['title', 'description', 'date', 'modified_date', 'image', 'content', 'slug']);
  const content = await (0,_utils_Markdown__WEBPACK_IMPORTED_MODULE_6__/* .markdownToHtml */ .c)(post.content || '');
  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayPost);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5780);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5390);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6688);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2509);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([rehype_stringify__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, unified__WEBPACK_IMPORTED_MODULE_5__]);
([rehype_stringify__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__, remark_parse__WEBPACK_IMPORTED_MODULE_3__, remark_rehype__WEBPACK_IMPORTED_MODULE_4__, unified__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// TODO: @mapbox/rehype-prism does not have typescript definition
// @ts-ignore






async function markdownToHtml(markdown) {
  const result = await (0,unified__WEBPACK_IMPORTED_MODULE_5__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_3__["default"]).use(remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_4__["default"]).use((_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_0___default())).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_1__["default"]).process(markdown);
  return result.toString().replace(/@@baseUrl@@/g,  false || '');
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5780:
/***/ ((module) => {

module.exports = require("@mapbox/rehype-prism");

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

/***/ 5390:
/***/ ((module) => {

module.exports = import("rehype-stringify");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 6688:
/***/ ((module) => {

module.exports = import("remark-parse");;

/***/ }),

/***/ 2509:
/***/ ((module) => {

module.exports = import("remark-rehype");;

/***/ }),

/***/ 4390:
/***/ ((module) => {

module.exports = import("unified");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [101,664,819,787], () => (__webpack_exec__(4114)));
module.exports = __webpack_exports__;

})();