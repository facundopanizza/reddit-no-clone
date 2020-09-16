webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UpdootSection */ \"./src/components/UpdootSection.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    limit: 20,\n    cursor: null\n  }),\n      variables = _useState[0],\n      setVariables = _useState[1];\n\n  var _usePostsQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostsQuery\"])({\n    variables: variables\n  }),\n      _usePostsQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_usePostsQuery, 1),\n      _usePostsQuery2$ = _usePostsQuery2[0],\n      data = _usePostsQuery2$.data,\n      fetching = _usePostsQuery2$.fetching;\n\n  if (!fetching && !data) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 12\n      }\n    }, \"you got no posts for some reason\");\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, !data && fetching ? __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Loading...\") : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n    spacing: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, data.posts.posts.map(function (p) {\n    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      key: p.id,\n      p: 5,\n      shadow: \"md\",\n      borderWidth: \"1px\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, __jsx(_components_UpdootSection__WEBPACK_IMPORTED_MODULE_8__[\"UpdootSection\"], {\n      post: p,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 15\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/post/[id]\",\n      as: \"/post/\".concat(p.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n      fontSize: \"xl\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 21\n      }\n    }, p.title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, \"posted by \", p.creator.username), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Text\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 19\n      }\n    }, p.textSnippet), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n      icon: \"delete\",\n      \"aria-label\": \"Delete Post\",\n      onClick: function onClick() {\n        return console.log('delete');\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }))));\n  })), data && data.posts.hasMore ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    onClick: function onClick() {\n      setVariables({\n        limit: variables.limit,\n        cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n      });\n    },\n    m: \"auto\",\n    my: 8,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"load more\")) : null);\n};\n\n_s(Index, \"SAVRmdEAK227HBJZj/9lBMSZFlw=\", false, function () {\n  return [_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostsQuery\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_7__[\"createUrqlClient\"], {\n  ssr: true\n})(Index));\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJsaW1pdCIsImN1cnNvciIsInZhcmlhYmxlcyIsInNldFZhcmlhYmxlcyIsInVzZVBvc3RzUXVlcnkiLCJkYXRhIiwiZmV0Y2hpbmciLCJwb3N0cyIsIm1hcCIsInAiLCJpZCIsInRpdGxlIiwiY3JlYXRvciIsInVzZXJuYW1lIiwidGV4dFNuaXBwZXQiLCJjb25zb2xlIiwibG9nIiwiaGFzTW9yZSIsImxlbmd0aCIsImNyZWF0ZWRBdCIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDZ0JDLHNEQUFRLENBQUM7QUFDekNDLFNBQUssRUFBRSxFQURrQztBQUV6Q0MsVUFBTSxFQUFFO0FBRmlDLEdBQUQsQ0FEeEI7QUFBQSxNQUNYQyxTQURXO0FBQUEsTUFDQUMsWUFEQTs7QUFBQSx1QkFLV0Msd0VBQWEsQ0FBQztBQUN6Q0YsYUFBUyxFQUFUQTtBQUR5QyxHQUFELENBTHhCO0FBQUE7QUFBQTtBQUFBLE1BS1RHLElBTFMsb0JBS1RBLElBTFM7QUFBQSxNQUtIQyxRQUxHLG9CQUtIQSxRQUxHOztBQVNsQixNQUFJLENBQUNBLFFBQUQsSUFBYSxDQUFDRCxJQUFsQixFQUF3QjtBQUN0QixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNBLElBQUQsSUFBU0MsUUFBVCxHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsR0FHQyxNQUFDLHFEQUFEO0FBQU8sV0FBTyxFQUFFLENBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsSUFBSSxDQUFFRSxLQUFOLENBQVlBLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxXQUNyQixNQUFDLG9EQUFEO0FBQU0sU0FBRyxFQUFFQSxDQUFDLENBQUNDLEVBQWI7QUFBaUIsT0FBQyxFQUFFLENBQXBCO0FBQXVCLFlBQU0sRUFBQyxJQUE5QjtBQUFtQyxpQkFBVyxFQUFDLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHVFQUFEO0FBQWUsVUFBSSxFQUFFRCxDQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQVUsVUFBSSxjQUFkO0FBQThCLFFBQUUsa0JBQVdBLENBQUMsQ0FBQ0MsRUFBYixDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx1REFBRDtBQUFTLGNBQVEsRUFBQyxJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXdCRCxDQUFDLENBQUNFLEtBQTFCLENBREYsQ0FERixDQURGLEVBTUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFpQkYsQ0FBQyxDQUFDRyxPQUFGLENBQVVDLFFBQTNCLENBTkYsRUFPRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFEO0FBQU0sUUFBRSxFQUFFLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjSixDQUFDLENBQUNLLFdBQWhCLENBREYsRUFFRSxNQUFDLDBEQUFEO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxvQkFBVyxhQUZiO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixDQUFOO0FBQUEsT0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FQRixDQUZGLENBRHFCO0FBQUEsR0FBdEIsQ0FESCxDQUpKLEVBNEJHWCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsS0FBTCxDQUFXVSxPQUFuQixHQUNDLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsc0RBQUQ7QUFDRSxXQUFPLEVBQUUsbUJBQU07QUFDYmQsa0JBQVksQ0FBQztBQUNYSCxhQUFLLEVBQUVFLFNBQVMsQ0FBQ0YsS0FETjtBQUVYQyxjQUFNLEVBQUVJLElBQUksQ0FBQ0UsS0FBTCxDQUFXQSxLQUFYLENBQWlCRixJQUFJLENBQUNFLEtBQUwsQ0FBV0EsS0FBWCxDQUFpQlcsTUFBakIsR0FBMEIsQ0FBM0MsRUFBOENDO0FBRjNDLE9BQUQsQ0FBWjtBQUlELEtBTkg7QUFPRSxLQUFDLEVBQUMsTUFQSjtBQVFFLE1BQUUsRUFBRSxDQVJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERCxHQWNHLElBMUNOLENBREY7QUE4Q0QsQ0EzREQ7O0dBQU1yQixLO1VBS3lCTSxnRTs7O0tBTHpCTixLO0FBNkRTc0IsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRHhCLEtBQWhELENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEZsZXgsXG4gIEhlYWRpbmcsXG4gIExpbmssXG4gIFN0YWNrLFxuICBUZXh0LFxuICBJY29uLFxuICBJY29uQnV0dG9uLFxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tICduZXh0LXVycWwnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IHVzZVBvc3RzUXVlcnkgfSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudCc7XG5pbXBvcnQgeyBVcGRvb3RTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9VcGRvb3RTZWN0aW9uJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFt2YXJpYWJsZXMsIHNldFZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7XG4gICAgbGltaXQ6IDIwLFxuICAgIGN1cnNvcjogbnVsbCBhcyBudWxsIHwgc3RyaW5nLFxuICB9KTtcbiAgY29uc3QgW3sgZGF0YSwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAgICB2YXJpYWJsZXMsXG4gIH0pO1xuXG4gIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj55b3UgZ290IG5vIHBvc3RzIGZvciBzb21lIHJlYXNvbjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHshZGF0YSAmJiBmZXRjaGluZyA/IChcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0+XG4gICAgICAgICAge2RhdGEhLnBvc3RzLnBvc3RzLm1hcCgocCkgPT4gKFxuICAgICAgICAgICAgPEZsZXgga2V5PXtwLmlkfSBwPXs1fSBzaGFkb3c9XCJtZFwiIGJvcmRlcldpZHRoPVwiMXB4XCI+XG4gICAgICAgICAgICAgIDxVcGRvb3RTZWN0aW9uIHBvc3Q9e3B9IC8+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9e2AvcG9zdC9baWRdYH0gYXM9e2AvcG9zdC8ke3AuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCJ4bFwiPntwLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgICAgIDxUZXh0PnBvc3RlZCBieSB7cC5jcmVhdG9yLnVzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cC50ZXh0U25pcHBldH08L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSBQb3N0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2RlbGV0ZScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgKX1cbiAgICAgIHtkYXRhICYmIGRhdGEucG9zdHMuaGFzTW9yZSA/IChcbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgIGxpbWl0OiB2YXJpYWJsZXMubGltaXQsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkYXRhLnBvc3RzLnBvc3RzW2RhdGEucG9zdHMucG9zdHMubGVuZ3RoIC0gMV0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBtPVwiYXV0b1wiXG4gICAgICAgICAgICBteT17OH0+XG4gICAgICAgICAgICBsb2FkIG1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9KShJbmRleCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})