webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_themeStyledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/themeStyledComponents */ \"./src/styles/themeStyledComponents.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Main/Main.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Container\",\n  componentId: \"sc-1h4u0uu-0\"\n})([\"height:100vh;width:100%;margin:auto;font-family:Arial,Helvetica,sans-serif;background-color:#000;overflow:hidden;\"]);\n_c = Container;\nvar move = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"keyframes\"])([\"from{background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;}to{background-position:-2px -2px,-2px -2px,-1px 20px,-1px -1px;}\"]);\nvar Floor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Floor\",\n  componentId: \"sc-1h4u0uu-1\"\n})([\"height:400px;width:25vw;margin:auto;background-color:#000;background-image:linear-gradient(cyan 0px,transparent 0px),linear-gradient(90deg,cyan 4px,transparent 0px),linear-gradient(cyan 1px,transparent 1px),linear-gradient(90deg,cyan 1px,transparent 1px);background-size:20% 20%,20% 20%,20% 5%,20% 20%;background-position:-2px -2px,-2px -2px,-1px -9px,-1px -1px;transform-style:preserve-3d;transform:perspective(125px) rotateX(45deg);animation:\", \" 0.5s linear infinite;\"], move);\n_c2 = Floor;\nvar Square = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Square\",\n  componentId: \"sc-1h4u0uu-2\"\n})([\"\"]); // EXTENDING STYLES\n// animación\n\n_c3 = Square;\nvar DaVueltas = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__DaVueltas\",\n  componentId: \"sc-1h4u0uu-3\"\n})([\"width:64px;height:64px;background-color:red;\"]);\nvar Phantom = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Phantom\",\n  componentId: \"sc-1h4u0uu-4\"\n})([\"margin:auto;\"]);\n_c4 = Phantom;\nvar PhantomHead = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__PhantomHead\",\n  componentId: \"sc-1h4u0uu-5\"\n})([\"border-top-left-radius:90px;border-top-right-radius:90px;height:45px;width:90px;background:#9e978e;display:inline-block;margin:0 1em 1em 0;\"]);\n_c5 = PhantomHead;\nvar PhantomBody = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__PhantomBody\",\n  componentId: \"sc-1h4u0uu-6\"\n})([\"\"]);\n_c6 = PhantomBody;\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(Container, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      }, __jsx(Floor, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(Square, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      })), __jsx(Phantom, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, __jsx(PhantomHead, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 21\n        }\n      }), __jsx(PhantomBody, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Floor\");\n$RefreshReg$(_c3, \"Square\");\n$RefreshReg$(_c4, \"Phantom\");\n$RefreshReg$(_c5, \"PhantomHead\");\n$RefreshReg$(_c6, \"PhantomBody\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanM/OGQxOSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJtb3ZlIiwia2V5ZnJhbWVzIiwiRmxvb3IiLCJTcXVhcmUiLCJEYVZ1ZWx0YXMiLCJQaGFudG9tIiwiUGhhbnRvbUhlYWQiLCJQaGFudG9tQm9keSIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUYsUztBQVNOLElBQU1HLElBQUksR0FBR0MsbUVBQUgsd0lBQVY7QUFVQSxJQUFNQyxLQUFLLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK2RBYU1DLElBYk4sQ0FBWDtNQUFNRSxLO0FBZU4sSUFBTUMsTUFBTSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVosQyxDQUNBO0FBRUE7O01BSE1JLE07QUFLTixJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0RBQWY7QUFNQSxJQUFNTSxPQUFPLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0JBQWI7TUFBTU0sTztBQUdOLElBQU1DLFdBQVcsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtSkFBakI7TUFBTU8sVztBQVNOLElBQU1DLFdBQVcsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNUSxXOztJQUVBQyxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZlO0FBR2xCOzs7OzZCQUVRO0FBQ0wsYUFDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBSUksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixDQUpKLENBREo7QUFXSDs7OztFQWxCY0MsNENBQUssQ0FBQ0MsUzs7QUFxQlZKLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lcywgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZVN0eWxlZENvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBtb3ZlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0ycHgsIC0ycHggLTJweCwgLTFweCAtMXB4LCAtMXB4IC0xcHg7XG4gIH1cblxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtMnB4LC0ycHggLTJweCwtMXB4IDIwcHgsLTFweCAtMXB4O1xuICB9XG5gO1xuXG5jb25zdCBGbG9vciA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICB3aWR0aDogMjV2dztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoY3lhbiAwcHgsIHRyYW5zcGFyZW50IDBweCksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgY3lhbiA0cHgsIHRyYW5zcGFyZW50IDBweCksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudChjeWFuIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBjeWFuIDFweCwgdHJhbnNwYXJlbnQgMXB4KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwJSAyMCUsIDIwJSAyMCUsIDIwJSA1JSwgMjAlIDIwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0ycHgsIC0ycHggLTJweCwgLTFweCAtOXB4LCAtMXB4IC0xcHg7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyNXB4KSByb3RhdGVYKDQ1ZGVnKTtcbiAgICBhbmltYXRpb246ICR7bW92ZX0gMC41cyBsaW5lYXIgaW5maW5pdGU7XG5gO1xuY29uc3QgU3F1YXJlID0gc3R5bGVkLmRpdmBgO1xuLy8gRVhURU5ESU5HIFNUWUxFU1xuXG4vLyBhbmltYWNpw7NuXG5cbmNvbnN0IERhVnVlbHRhcyA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IFBoYW50b20gPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogYXV0bztcbmA7XG5jb25zdCBQaGFudG9tSGVhZCA9IHN0eWxlZC5kaXZgXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgYmFja2dyb3VuZDogIzllOTc4ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwIDFlbSAxZW0gMDtcbmA7XG5jb25zdCBQaGFudG9tQm9keSA9IHN0eWxlZC5kaXZgYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Rmxvb3I+XG4gICAgICAgICAgICAgICAgICAgIDxTcXVhcmU+PC9TcXVhcmU+XG4gICAgICAgICAgICAgICAgPC9GbG9vcj5cbiAgICAgICAgICAgICAgICA8UGhhbnRvbT5cbiAgICAgICAgICAgICAgICAgICAgPFBoYW50b21IZWFkPjwvUGhhbnRvbUhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxQaGFudG9tQm9keT48L1BoYW50b21Cb2R5PlxuICAgICAgICAgICAgICAgIDwvUGhhbnRvbT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/Main.js\n");

/***/ })

})