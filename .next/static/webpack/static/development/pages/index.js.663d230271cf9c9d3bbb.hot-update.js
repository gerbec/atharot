webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Phantom/Phantom.js":
/*!*******************************************!*\
  !*** ./src/components/Phantom/Phantom.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .. */ \"./src/components/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Phantom/Phantom.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    background-position: 0px;\\n  }\\n\\n  to {\\n    background-position: 26px 0px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar phantomWalk = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject());\nvar Caracter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Phantom__Caracter\",\n  componentId: \"fqd5f3-0\"\n})([\"margin:auto;width:90px;overflow:hidden;\"]);\n_c = Caracter;\nvar PhantomHead = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Phantom__PhantomHead\",\n  componentId: \"fqd5f3-1\"\n})([\"border-top-left-radius:90px;border-top-right-radius:90px;height:45px;width:90px;background-color:\", \";margin:0px auto;\"], function (props) {\n  return props.color || '#e05c5c';\n});\n_c2 = PhantomHead;\nvar PhantomBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Phantom__PhantomBody\",\n  componentId: \"fqd5f3-2\"\n})([\"height:30px;width:90px;margin:0px auto;background:#e05c5c;\"]);\n_c3 = PhantomBody;\nvar PhantomFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Phantom__PhantomFooter\",\n  componentId: \"fqd5f3-3\"\n})([\"width:150px;height:27px;background:linear-gradient(#e05c5c 40%,rgba(255,255,255,0) 0px) 0px 0px,radial-gradient(circle closest-side,#e05c5c 100%,rgba(0,0,0,0) 0) 100px 0px transparent;background-size:26px 26px;background-repeat:repeat-x;animation:\", \" 0.5s linear infinite;\"], phantomWalk);\n_c4 = PhantomFooter;\nvar Eyes = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Phantom__Eyes\",\n  componentId: \"fqd5f3-4\"\n})([\"\"]);\n_c5 = Eyes;\n\nvar Phantom = function Phantom(color) {\n  return __jsx(Caracter, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, __jsx(PhantomHead, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(Eyes, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, __jsx(___WEBPACK_IMPORTED_MODULE_3__[\"CircleEye\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 21\n    }\n  }), __jsx(___WEBPACK_IMPORTED_MODULE_3__[\"CircleEye\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 21\n    }\n  }))), __jsx(PhantomBody, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }), __jsx(PhantomFooter, {\n    color: color,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }));\n};\n\n_c6 = Phantom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Phantom);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Caracter\");\n$RefreshReg$(_c2, \"PhantomHead\");\n$RefreshReg$(_c3, \"PhantomBody\");\n$RefreshReg$(_c4, \"PhantomFooter\");\n$RefreshReg$(_c5, \"Eyes\");\n$RefreshReg$(_c6, \"Phantom\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaGFudG9tL1BoYW50b20uanM/M2I2MCJdLCJuYW1lcyI6WyJwaGFudG9tV2FsayIsImtleWZyYW1lcyIsIkNhcmFjdGVyIiwic3R5bGVkIiwiZGl2IiwiUGhhbnRvbUhlYWQiLCJwcm9wcyIsImNvbG9yIiwiUGhhbnRvbUJvZHkiLCJQaGFudG9tRm9vdGVyIiwiRXllcyIsIlBoYW50b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxtRUFBSCxtQkFBakI7QUFTQSxJQUFNQyxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0NBQWQ7S0FBTUYsUTtBQUtOLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrSEFLTyxVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLElBQWUsU0FBMUI7QUFBQSxDQUxQLENBQWpCO01BQU1GLFc7QUFRTixJQUFNRyxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWpCO01BQU1JLFc7QUFNTixJQUFNQyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMFJBT0ZKLFdBUEUsQ0FBbkI7TUFBTVMsYTtBQVNOLElBQU1DLElBQUksR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFWO01BQU1NLEk7O0FBRU4sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0osS0FBRCxFQUFXO0FBQ3ZCLFNBQ0ksTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFdBQUQ7QUFBYSxTQUFLLEVBQUVBLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixDQURKLEVBT0ksTUFBQyxXQUFEO0FBQWEsU0FBSyxFQUFFQSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLGFBQUQ7QUFBZSxTQUFLLEVBQUVBLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBWUgsQ0FiRDs7TUFBTUksTztBQWVTQSxzRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BoYW50b20vUGhhbnRvbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NpcmNsZUV5ZX0gZnJvbSAnLi4nO1xuXG5jb25zdCBwaGFudG9tV2FsayA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI2cHggMHB4O1xuICB9XG5gO1xuY29uc3QgQ2FyYWN0ZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcbmNvbnN0IFBoYW50b21IZWFkID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA5MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5MHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3IgfHwgJyNlMDVjNWMnfTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuYDtcbmNvbnN0IFBoYW50b21Cb2R5ID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZTA1YzVjO1xuYDtcbmNvbnN0IFBoYW50b21Gb290ZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlMDVjNWMgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDBweCkgMHB4IDBweCxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUsICNlMDVjNWMgMTAwJSwgcmdiYSgwLCAwLCAwLCAwKSAwKSAxMDBweCAwcHggdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGFuaW1hdGlvbjogJHtwaGFudG9tV2Fsa30gMC41cyBsaW5lYXIgaW5maW5pdGU7XG5gO1xuY29uc3QgRXllcyA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgUGhhbnRvbSA9IChjb2xvcikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJhY3Rlcj5cbiAgICAgICAgICAgIDxQaGFudG9tSGVhZCBjb2xvcj17Y29sb3J9PlxuICAgICAgICAgICAgICAgIDxFeWVzPlxuICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRXllPjwvQ2lyY2xlRXllPlxuICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRXllPjwvQ2lyY2xlRXllPlxuICAgICAgICAgICAgICAgIDwvRXllcz5cbiAgICAgICAgICAgIDwvUGhhbnRvbUhlYWQ+XG4gICAgICAgICAgICA8UGhhbnRvbUJvZHkgY29sb3I9e2NvbG9yfT48L1BoYW50b21Cb2R5PlxuICAgICAgICAgICAgPFBoYW50b21Gb290ZXIgY29sb3I9e2NvbG9yfT48L1BoYW50b21Gb290ZXI+XG4gICAgICAgIDwvQ2FyYWN0ZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoYW50b207XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Phantom/Phantom.js\n");

/***/ })

})