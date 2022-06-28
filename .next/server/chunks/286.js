"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 2286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ BlogGallery)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utils/Pagination.ts
var Pagination = __webpack_require__(6464);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pagination/Pagination.tsx






const Pagination_Pagination = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "text-sm flex justify-between",
  children: [props.previous && /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: (0,Pagination/* convertUrlToLinkHref */.Z)(props.previous),
      as: props.previous,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "\u2190 Newer Posts"
      })
    })
  }), props.next && /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "text-right ml-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
      href: (0,Pagination/* convertUrlToLinkHref */.Z)(props.next),
      as: props.next,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Older Posts \u2192"
      })
    })
  })]
});


;// CONCATENATED MODULE: ./src/blog/BlogGallery.tsx








const BlogGallery = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
    children: props.posts.map(elt => /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
      className: "mb-3 flex justify-between",
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/posts/[slug]",
        as: `/posts/${elt.slug}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: elt.title
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-right",
        children: (0,external_date_fns_.format)(new Date(elt.date), 'LLL d, yyyy')
      })]
    }, elt.slug))
  }), /*#__PURE__*/jsx_runtime_.jsx(Pagination_Pagination, {
    previous: props.pagination.previous,
    next: props.pagination.next
  })]
});



/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ convertTo2D),
/* harmony export */   "Z": () => (/* binding */ convertUrlToLinkHref)
/* harmony export */ });
function convertTo2D(arr, size) {
  const res = [];
  arr.forEach((elt, ind) => {
    if (ind % size === 0) {
      res.push([elt]);
    } else {
      res[res.length - 1].push(elt);
    }
  });
  return res;
}
function convertUrlToLinkHref(url) {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}

/***/ })

};
;