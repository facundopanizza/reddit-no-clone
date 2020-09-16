webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./src/pages/post/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/post/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  _s();\n\n  var _data$post, _data$post2;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var intId = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;\n\n  var _usePostQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostQuery\"])({\n    pause: intId === -1,\n    variables: {\n      id: intId\n    }\n  }),\n      _usePostQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_usePostQuery, 1),\n      _usePostQuery2$ = _usePostQuery2[0],\n      data = _usePostQuery2$.data,\n      error = _usePostQuery2$.error,\n      fetching = _usePostQuery2$.fetching;\n\n  if (fetching) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }\n    }, \"Loading...\"));\n  }\n\n  if (!(data === null || data === void 0 ? void 0 : data.post)) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, \"could not find post\"));\n  }\n\n  if (error) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, \"error.message\"));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__[\"Layout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__[\"Heading\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, data === null || data === void 0 ? void 0 : (_data$post = data.post) === null || _data$post === void 0 ? void 0 : _data$post.title), data === null || data === void 0 ? void 0 : (_data$post2 = data.post) === null || _data$post2 === void 0 ? void 0 : _data$post2.text);\n};\n\n_s(Post, \"UkAa9MQJsIOaIVx23Rpsi3Q7Hi8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__[\"usePostQuery\"]];\n});\n\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_3__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_4__[\"createUrqlClient\"], {\n  ssr: true\n})(Post));\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvLnRzeD9lZDMzIl0sIm5hbWVzIjpbIlBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnRJZCIsInF1ZXJ5IiwiaWQiLCJwYXJzZUludCIsInVzZVBvc3RRdWVyeSIsInBhdXNlIiwidmFyaWFibGVzIiwiZGF0YSIsImVycm9yIiwiZmV0Y2hpbmciLCJwb3N0IiwidGl0bGUiLCJ0ZXh0Iiwid2l0aFVycWxDbGllbnQiLCJjcmVhdGVVcnFsQ2xpZW50Iiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQWtCLEdBQUcsU0FBckJBLElBQXFCLE9BQVE7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FDVCxPQUFPRixNQUFNLENBQUNHLEtBQVAsQ0FBYUMsRUFBcEIsS0FBMkIsUUFBM0IsR0FBc0NDLFFBQVEsQ0FBQ0wsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQWQsQ0FBOUMsR0FBa0UsQ0FBQyxDQURyRTs7QUFGaUMsc0JBS0dFLHVFQUFZLENBQUM7QUFDL0NDLFNBQUssRUFBRUwsS0FBSyxLQUFLLENBQUMsQ0FENkI7QUFFL0NNLGFBQVMsRUFBRTtBQUNUSixRQUFFLEVBQUVGO0FBREs7QUFGb0MsR0FBRCxDQUxmO0FBQUE7QUFBQTtBQUFBLE1BS3hCTyxJQUx3QixtQkFLeEJBLElBTHdCO0FBQUEsTUFLbEJDLEtBTGtCLG1CQUtsQkEsS0FMa0I7QUFBQSxNQUtYQyxRQUxXLG1CQUtYQSxRQUxXOztBQVlqQyxNQUFJQSxRQUFKLEVBQWM7QUFDWixXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERjtBQUtEOztBQUVELE1BQUksRUFBQ0YsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVHLElBQVAsQ0FBSixFQUFpQjtBQUNmLFdBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLENBREY7QUFLRDs7QUFFRCxNQUFJRixLQUFKLEVBQVc7QUFDVCxXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERjtBQUtEOztBQUVELFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVELElBQVYsYUFBVUEsSUFBVixxQ0FBVUEsSUFBSSxDQUFFRyxJQUFoQiwrQ0FBVSxXQUFZQyxLQUF0QixDQURGLEVBRUdKLElBRkgsYUFFR0EsSUFGSCxzQ0FFR0EsSUFBSSxDQUFFRyxJQUZULGdEQUVHLFlBQVlFLElBRmYsQ0FERjtBQU1ELENBMUNEOztHQUFNZixJO1VBQ1dFLHFELEVBSXFCSywrRDs7O0tBTGhDUCxJO0FBNENTZ0IsK0hBQWMsQ0FBQ0Msd0VBQUQsRUFBbUI7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBbkIsQ0FBZCxDQUFnRGxCLElBQWhELENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gJ25leHQtdXJxbCc7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VQb3N0UXVlcnkgfSBmcm9tICcuLi8uLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBIZWFkaW5nLCBCb3ggfSBmcm9tICdAY2hha3JhLXVpL2NvcmUnO1xuXG5jb25zdCBQb3N0OiBSZWFjdC5GQzx7fT4gPSAoe30pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGludElkID1cbiAgICB0eXBlb2Ygcm91dGVyLnF1ZXJ5LmlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCkgOiAtMTtcblxuICBjb25zdCBbeyBkYXRhLCBlcnJvciwgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0UXVlcnkoe1xuICAgIHBhdXNlOiBpbnRJZCA9PT0gLTEsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZDogaW50SWQsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKGZldGNoaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghZGF0YT8ucG9zdCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Qm94PmNvdWxkIG5vdCBmaW5kIHBvc3Q8L0JveD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5lcnJvci5tZXNzYWdlPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWRpbmc+e2RhdGE/LnBvc3Q/LnRpdGxlfTwvSGVhZGluZz5cbiAgICAgIHtkYXRhPy5wb3N0Py50ZXh0fVxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwgeyBzc3I6IHRydWUgfSkoUG9zdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[id].tsx\n");

/***/ })

})