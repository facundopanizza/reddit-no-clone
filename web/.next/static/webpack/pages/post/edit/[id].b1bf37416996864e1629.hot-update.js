webpackHotUpdate_N_E("pages/post/edit/[id]",{

/***/ "./src/pages/post/edit/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/post/edit/[id].tsx ***!
  \**************************************/
/*! exports provided: EditPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditPost\", function() { return EditPost; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ \"./node_modules/@chakra-ui/core/dist/es/index.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/InputField */ \"./src/components/InputField.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/useGetIntId */ \"./src/utils/useGetIntId.ts\");\n\n\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/facundo/code/reddit/web/src/pages/post/edit/[id].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar EditPost = function EditPost(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_ref);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"])();\n  var intId = Object(_utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__[\"useGetIntId\"])();\n\n  var _usePostQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_12__[\"usePostQuery\"])({\n    pause: intId === -1,\n    variables: {\n      id: intId\n    }\n  }),\n      _usePostQuery2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_usePostQuery, 1),\n      _usePostQuery2$ = _usePostQuery2[0],\n      data = _usePostQuery2$.data,\n      fetching = _usePostQuery2$.fetching;\n\n  var _useUpdatePostMutatio = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_12__[\"useUpdatePostMutation\"])(),\n      _useUpdatePostMutatio2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_useUpdatePostMutatio, 2),\n      updatePost = _useUpdatePostMutatio2[1];\n\n  if (fetching) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }\n    }, \"loading...\"));\n  }\n\n  if (!(data === null || data === void 0 ? void 0 : data.post)) {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"Layout\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 7\n      }\n    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }\n    }, \"could not find post\"));\n  }\n\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__[\"Layout\"], {\n    variant: \"small\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_6__[\"Formik\"], {\n    initialValues: {\n      title: data.post.title,\n      text: data.post.text\n    },\n    onSubmit: /*#__PURE__*/function () {\n      var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, _ref2) {\n        var setErrors;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setErrors = _ref2.setErrors;\n                _context.next = 3;\n                return updatePost(_objectSpread({\n                  id: intId\n                }, values));\n\n              case 3:\n                router.back();\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, function (_ref4) {\n    var isSubmitting = _ref4.isSubmitting;\n    return __jsx(formik__WEBPACK_IMPORTED_MODULE_6__[\"Form\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_10__[\"InputField\"], {\n      name: \"title\",\n      placeholder: \"title\",\n      label: \"Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n      mt: 4,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_10__[\"InputField\"], {\n      textarea: true,\n      name: \"text\",\n      placeholder: \"text\",\n      label: \"Body\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 15\n      }\n    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n      type: \"submit\",\n      variantColor: \"teal\",\n      mt: \"4\",\n      isLoading: isSubmitting,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 13\n      }\n    }, \"edit post\"));\n  }));\n};\n\n_s(EditPost, \"U9u1e7FsFda5Pj2GTxrJXrOskDw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_8__[\"useRouter\"], _utils_useGetIntId__WEBPACK_IMPORTED_MODULE_14__[\"useGetIntId\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_12__[\"usePostQuery\"], _generated_graphql__WEBPACK_IMPORTED_MODULE_12__[\"useUpdatePostMutation\"]];\n});\n\n_c = EditPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_urql__WEBPACK_IMPORTED_MODULE_7__[\"withUrqlClient\"])(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_13__[\"createUrqlClient\"])(EditPost));\n\nvar _c;\n\n$RefreshReg$(_c, \"EditPost\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvZWRpdC8udHN4PzZlOGEiXSwibmFtZXMiOlsiRWRpdFBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpbnRJZCIsInVzZUdldEludElkIiwidXNlUG9zdFF1ZXJ5IiwicGF1c2UiLCJ2YXJpYWJsZXMiLCJpZCIsImRhdGEiLCJmZXRjaGluZyIsInVzZVVwZGF0ZVBvc3RNdXRhdGlvbiIsInVwZGF0ZVBvc3QiLCJwb3N0IiwidGl0bGUiLCJ0ZXh0IiwidmFsdWVzIiwic2V0RXJyb3JzIiwiYmFjayIsImlzU3VibWl0dGluZyIsIndpdGhVcnFsQ2xpZW50IiwiY3JlYXRlVXJxbENsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFTyxJQUFNQSxRQUFzQixHQUFHLFNBQXpCQSxRQUF5QixPQUFRO0FBQUE7O0FBQUE7O0FBQzVDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHVFQUFXLEVBQXpCOztBQUY0QyxzQkFHZkMsd0VBQVksQ0FBQztBQUN4Q0MsU0FBSyxFQUFFSCxLQUFLLEtBQUssQ0FBQyxDQURzQjtBQUV4Q0ksYUFBUyxFQUFFO0FBQ1RDLFFBQUUsRUFBRUw7QUFESztBQUY2QixHQUFELENBSEc7QUFBQTtBQUFBO0FBQUEsTUFHbkNNLElBSG1DLG1CQUduQ0EsSUFIbUM7QUFBQSxNQUc3QkMsUUFINkIsbUJBRzdCQSxRQUg2Qjs7QUFBQSw4QkFTckJDLGlGQUFxQixFQVRBO0FBQUE7QUFBQSxNQVNuQ0MsVUFUbUM7O0FBVzVDLE1BQUlGLFFBQUosRUFBYztBQUNaLFdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGO0FBS0Q7O0FBRUQsTUFBSSxFQUFDRCxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRUksSUFBUCxDQUFKLEVBQWlCO0FBQ2YsV0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsQ0FERjtBQUtEOztBQUVELFNBQ0UsTUFBQywwREFBRDtBQUFRLFdBQU8sRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFBRUMsV0FBSyxFQUFFTCxJQUFJLENBQUNJLElBQUwsQ0FBVUMsS0FBbkI7QUFBMEJDLFVBQUksRUFBRU4sSUFBSSxDQUFDSSxJQUFMLENBQVVFO0FBQTFDLEtBRGpCO0FBRUUsWUFBUTtBQUFBLG1NQUFFLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQkMseUJBQWpCLFNBQWlCQSxTQUFqQjtBQUFBO0FBQUEsdUJBQ0ZMLFVBQVU7QUFBR0osb0JBQUUsRUFBRUw7QUFBUCxtQkFBaUJhLE1BQWpCLEVBRFI7O0FBQUE7QUFFUmYsc0JBQU0sQ0FBQ2lCLElBQVA7O0FBRlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRztBQUFBLFFBQUdDLFlBQUgsU0FBR0EsWUFBSDtBQUFBLFdBQ0MsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrRUFBRDtBQUFZLFVBQUksRUFBQyxPQUFqQjtBQUF5QixpQkFBVyxFQUFDLE9BQXJDO0FBQTZDLFdBQUssRUFBQyxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0VBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFXLEVBQUMsTUFIZDtBQUlFLFdBQUssRUFBQyxNQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQUZGLEVBVUUsTUFBQyxzREFBRDtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsa0JBQVksRUFBQyxNQUZmO0FBR0UsUUFBRSxFQUFDLEdBSEw7QUFJRSxlQUFTLEVBQUVBLFlBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixDQUREO0FBQUEsR0FOSCxDQURGLENBREY7QUErQkQsQ0ExRE07O0dBQU1uQixRO1VBQ0lFLHFELEVBQ0RFLCtELEVBQ2VDLGdFLEVBTU5NLHlFOzs7S0FUWlgsUTtBQTRERW9CLCtIQUFjLENBQUNDLHlFQUFELENBQWQsQ0FBaUNyQixRQUFqQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3QvZWRpdC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJztcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gJ2Zvcm1payc7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gJ25leHQtdXJxbCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge1xuICB1c2VQb3N0UXVlcnksXG4gIHVzZVVwZGF0ZVBvc3RNdXRhdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQnO1xuaW1wb3J0IHsgdXNlR2V0SW50SWQgfSBmcm9tICcuLi8uLi8uLi91dGlscy91c2VHZXRJbnRJZCc7XG5cbmV4cG9ydCBjb25zdCBFZGl0UG9zdDogUmVhY3QuRkM8e30+ID0gKHt9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpbnRJZCA9IHVzZUdldEludElkKCk7XG4gIGNvbnN0IFt7IGRhdGEsIGZldGNoaW5nIH1dID0gdXNlUG9zdFF1ZXJ5KHtcbiAgICBwYXVzZTogaW50SWQgPT09IC0xLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgaWQ6IGludElkLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCBbLCB1cGRhdGVQb3N0XSA9IHVzZVVwZGF0ZVBvc3RNdXRhdGlvbigpO1xuXG4gIGlmIChmZXRjaGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cblxuICBpZiAoIWRhdGE/LnBvc3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEJveD5jb3VsZCBub3QgZmluZCBwb3N0PC9Cb3g+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHZhcmlhbnQ9XCJzbWFsbFwiPlxuICAgICAgPEZvcm1pa1xuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHRpdGxlOiBkYXRhLnBvc3QudGl0bGUsIHRleHQ6IGRhdGEucG9zdC50ZXh0IH19XG4gICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzLCB7IHNldEVycm9ycyB9KSA9PiB7XG4gICAgICAgICAgYXdhaXQgdXBkYXRlUG9zdCh7IGlkOiBpbnRJZCwgLi4udmFsdWVzIH0pO1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH19PlxuICAgICAgICB7KHsgaXNTdWJtaXR0aW5nIH0pID0+IChcbiAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgIDxJbnB1dEZpZWxkIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwidGl0bGVcIiBsYWJlbD1cIlRpdGxlXCIgLz5cbiAgICAgICAgICAgIDxCb3ggbXQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRGaWVsZFxuICAgICAgICAgICAgICAgIHRleHRhcmVhXG4gICAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb2R5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwidGVhbFwiXG4gICAgICAgICAgICAgIG10PVwiNFwiXG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNTdWJtaXR0aW5nfT5cbiAgICAgICAgICAgICAgZWRpdCBwb3N0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L0Zvcm1paz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KGNyZWF0ZVVycWxDbGllbnQpKEVkaXRQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/post/edit/[id].tsx\n");

/***/ })

})