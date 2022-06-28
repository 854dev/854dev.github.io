"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Meta)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/utils/AppConfig.ts
var AppConfig = __webpack_require__(7342);
;// CONCATENATED MODULE: ./src/utils/Url.ts
function addTrailingSlash(url) {
  // If the trailing slash exists, it is replaced with /.
  // If the trailing slash does not exist, a / is appended to the end
  // (to be exact: The trailing anchor is replaced with /)
  return url.replace(/\/?$/, '/');
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layout/Meta.tsx









const Meta = props => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "UTF-8"
      }, 'charset'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1"
      }, 'viewport'), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: `${router.basePath}/apple-touch-icon.png`
      }, 'apple'), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `${router.basePath}/favicon-32x32.png`
      }, 'icon32'), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `${router.basePath}/favicon-16x16.png`
      }, 'icon16'), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: `${router.basePath}/favicon.ico`
      }, 'favicon'), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: `${props.title} | ${AppConfig/* AppConfig.site_name */.X.site_name}`
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: props.description ? props.description : AppConfig/* AppConfig.description */.X.description
      }, 'description'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: AppConfig/* AppConfig.author */.X.author
      }, 'author'), props.canonical && /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "canonical",
        href: props.canonical
      }, 'canonical'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: `${props.title} | ${AppConfig/* AppConfig.site_name */.X.site_name}`
      }, 'og:title'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: props.description ? props.description : AppConfig/* AppConfig.description */.X.description
      }, 'og:description'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:locale",
        content: AppConfig/* AppConfig.locale */.X.locale
      }, 'og:locale'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: AppConfig/* AppConfig.site_name */.X.site_name
      }, 'og:site_name'), props.post && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:type",
          content: "article"
        }, 'og:type'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "og:image",
          content: `${AppConfig/* AppConfig.url */.X.url}${router.basePath}${props.post.image}`
        }, 'og:image'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "twitter:card",
          content: "summary_large_image"
        }, 'twitter:card'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "article:published_time",
          content: new Date(props.post.date).toISOString()
        }, 'article:published_time'), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          property: "article:modified_time",
          content: new Date(props.post.modified_date).toISOString()
        }, 'article:modified_time'), /*#__PURE__*/jsx_runtime_.jsx("script", {
          type: "application/ld+json" // eslint-disable-next-line react/no-danger
          ,
          dangerouslySetInnerHTML: {
            __html: `
          {
            "description": "${props.description ? props.description : AppConfig/* AppConfig.description */.X.description}",
            "author": {
              "@type": "Person",
              "name": "${AppConfig/* AppConfig.author */.X.author}"
            },
            "@type": "BlogPosting",
            "url": "${AppConfig/* AppConfig.url */.X.url}${router.basePath}${addTrailingSlash(router.asPath)}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${AppConfig/* AppConfig.url */.X.url}${router.basePath}/assets/images/logo.png"
              },
              "name": "${AppConfig/* AppConfig.author */.X.author}"
            },
            "headline": "${props.title} | ${AppConfig/* AppConfig.site_name */.X.site_name}",
            "image": ["${AppConfig/* AppConfig.url */.X.url}${router.basePath}${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${AppConfig/* AppConfig.url */.X.url}${router.basePath}${addTrailingSlash(router.asPath)}"
            },
            "@context": "http://schema.org"
          }`
          }
        }, 'ldjson')]
      })]
    })
  });
};



/***/ }),

/***/ 9883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ Main)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/navigation/Navbar.tsx





const Navbar = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
  className: "jsx-2702236979" + " " + 'navbar flex flex-wrap text-xl',
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx((styled_jsx_default()), {
    id: "2702236979",
    children: [".navbar.jsx-2702236979 a{--tw-text-opacity:1;color:rgb(74 85 104/var(--tw-text-opacity));}", ".navbar.jsx-2702236979 a:hover{--tw-text-opacity:1;color:rgb(26 32 44/var(--tw-text-opacity));-webkit-text-decoration-line:none;-webkit-text-decoration-line:none;text-decoration-line:none;}"]
  })]
});


// EXTERNAL MODULE: ./src/utils/AppConfig.ts
var AppConfig = __webpack_require__(7342);
;// CONCATENATED MODULE: ./src/templates/Main.tsx







const Main = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "antialiased w-full text-gray-700 px-3 md:px-0",
  children: [props.meta, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "max-w-screen-md mx-auto",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "border-b border-gray-300",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pt-16 pb-8",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "font-semibold text-3xl text-gray-900",
          children: AppConfig/* AppConfig.title */.X.title
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-xl",
          children: AppConfig/* AppConfig.description */.X.description
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Navbar, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "Home"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/about/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "About"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "mr-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://github.com/ixartz/Next-js-Blog-Boilerplate",
              children: "GitHub"
            })
          })]
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xl py-5",
      children: props.children
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "border-t border-gray-300 text-center py-8 text-sm",
      children: ["\xA9 Copyright ", new Date().getFullYear(), " ", AppConfig/* AppConfig.title */.X.title, ". Powered with", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
        role: "img",
        "aria-label": "Love",
        children: "\u2665"
      }), ' ', "by ", /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://creativedesignsguru.com",
        children: "CreativeDesignsGuru"
      })]
    })]
  })]
});



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

/***/ })

};
;