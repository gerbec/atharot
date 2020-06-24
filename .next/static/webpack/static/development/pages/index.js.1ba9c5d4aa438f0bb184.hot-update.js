webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_themeStyledComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/themeStyledComponents */ \"./src/styles/themeStyledComponents.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Main/Main.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Container\",\n  componentId: \"sc-1h4u0uu-0\"\n})([\"height:100vh;width:100%;margin:auto;font-family:Arial,Helvetica,sans-serif;background-color:#000;overflow:hidden;\"]);\n_c = Container;\nvar move = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"keyframes\"])([\"from{background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;}to{background-position:-2px -2px,-2px -2px,-1px 20px,-1px -1px;}\"]);\nvar phantomWalk = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__[\"keyframes\"])([\"from{background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;}to{background-position:-2px -2px,-2px -2px,-1px 20px,-1px -1px;}\"]);\nvar Floor = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Floor\",\n  componentId: \"sc-1h4u0uu-1\"\n})([\"height:100px;width:100px;margin:auto;background-color:#000;background-image:linear-gradient(cyan 0px,transparent 0px),linear-gradient(90deg,cyan 4px,transparent 0px),linear-gradient(cyan 1px,transparent 1px),linear-gradient(90deg,cyan 1px,transparent 1px);background-size:20% 20%,20% 20%,20% 5%,20% 20%;background-position:-2px -2px,-2px -2px,-1px -9px,-1px -1px;transform-style:preserve-3d;\"]);\n_c2 = Floor;\nvar Square = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Square\",\n  componentId: \"sc-1h4u0uu-2\"\n})([\"\"]); // EXTENDING STYLES\n// animación\n\nvar DaVueltas = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__DaVueltas\",\n  componentId: \"sc-1h4u0uu-3\"\n})([\"width:64px;height:64px;background-color:red;\"]);\nvar Phantom = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__Phantom\",\n  componentId: \"sc-1h4u0uu-4\"\n})([\"margin:auto;width:90px;overflow:hidden;\"]);\n_c3 = Phantom;\nvar PhantomHead = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__PhantomHead\",\n  componentId: \"sc-1h4u0uu-5\"\n})([\"border-top-left-radius:90px;border-top-right-radius:90px;height:45px;width:90px;background:#e05c5c;margin:0px auto;\"]);\n_c4 = PhantomHead;\nvar PhantomBody = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__PhantomBody\",\n  componentId: \"sc-1h4u0uu-6\"\n})([\"height:30px;width:90px;margin:0px auto;background:#e05c5c;\"]);\n_c5 = PhantomBody;\nvar PhantomFooter = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"Main__PhantomFooter\",\n  componentId: \"sc-1h4u0uu-7\"\n})([\"width:150px;height:27px;background:linear-gradient(#e05c5c 40%,rgba(255,255,255,0) 0px) 0px 0px,radial-gradient(circle closest-side,#e05c5c 100%,rgba(0,0,0,0) 0) 100px 0px transparent;background-size:26px 26px;background-repeat:repeat-x;animation:\", \" 0.5s linear infinite;\"], phantomWalk);\n_c6 = PhantomFooter;\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(Container, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 13\n        }\n      }, __jsx(Floor, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }\n      }), __jsx(PhantomFooter, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }\n      }), __jsx(Phantom, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 17\n        }\n      }, __jsx(PhantomHead, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }\n      }), __jsx(PhantomBody, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      }), __jsx(PhantomFooter, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 21\n        }\n      })));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Floor\");\n$RefreshReg$(_c3, \"Phantom\");\n$RefreshReg$(_c4, \"PhantomHead\");\n$RefreshReg$(_c5, \"PhantomBody\");\n$RefreshReg$(_c6, \"PhantomFooter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanM/OGQxOSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJtb3ZlIiwia2V5ZnJhbWVzIiwicGhhbnRvbVdhbGsiLCJGbG9vciIsIlNxdWFyZSIsIkRhVnVlbHRhcyIsIlBoYW50b20iLCJQaGFudG9tSGVhZCIsIlBoYW50b21Cb2R5IiwiUGhhbnRvbUZvb3RlciIsIk1haW4iLCJwcm9wcyIsInN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUhBQWY7S0FBTUYsUztBQVNOLElBQU1HLElBQUksR0FBR0MsbUVBQUgsd0lBQVY7QUFTQSxJQUFNQyxXQUFXLEdBQUdELG1FQUFILHdJQUFqQjtBQVVBLElBQU1FLEtBQUssR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrWUFBWDtNQUFNSSxLO0FBZU4sSUFBTUMsTUFBTSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVosQyxDQUNBO0FBRUE7O0FBRUEsSUFBTU0sU0FBUyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFmO0FBTUEsSUFBTU8sT0FBTyxHQUFHUix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLCtDQUFiO01BQU1PLE87QUFLTixJQUFNQyxXQUFXLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWpCO01BQU1RLFc7QUFRTixJQUFNQyxXQUFXLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWpCO01BQU1TLFc7QUFNTixJQUFNQyxhQUFhLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMFJBT0ZHLFdBUEUsQ0FBbkI7TUFBTU8sYTs7SUFVQUMsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGZTtBQUdsQjs7Ozs2QkFFUTtBQUNMLGFBQ0ksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLENBSEosQ0FESjtBQVdIOzs7O0VBbEJjQyw0Q0FBSyxDQUFDQyxTOztBQXFCVkosbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lU3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IG1vdmUgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTJweCwgLTJweCAtMnB4LCAtMXB4IC0xcHgsIC0xcHggLTFweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0ycHgsLTJweCAtMnB4LC0xcHggMjBweCwtMXB4IC0xcHg7XG4gIH1cbmA7XG5jb25zdCBwaGFudG9tV2FsayA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTJweCAtMnB4LCAtMnB4IC0ycHgsIC0xcHggLTFweCwgLTFweCAtMXB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTJweCwtMnB4IC0ycHgsLTFweCAyMHB4LC0xcHggLTFweDtcbiAgfVxuYDtcblxuY29uc3QgRmxvb3IgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChjeWFuIDBweCwgdHJhbnNwYXJlbnQgMHB4KSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBjeWFuIDRweCwgdHJhbnNwYXJlbnQgMHB4KSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KGN5YW4gMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGN5YW4gMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAlIDIwJSwgMjAlIDIwJSwgMjAlIDUlLCAyMCUgMjAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTJweCwgLTJweCAtMnB4LCAtMXB4IC05cHgsIC0xcHggLTFweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIC8qIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTI1cHgpIHJvdGF0ZVgoNDVkZWcpOyAqL1xuICAgIC8qIGFuaW1hdGlvbjogJHttb3ZlfSAwLjVzIGxpbmVhciBpbmZpbml0ZTsgKi9cbmA7XG5jb25zdCBTcXVhcmUgPSBzdHlsZWQuZGl2YGA7XG4vLyBFWFRFTkRJTkcgU1RZTEVTXG5cbi8vIGFuaW1hY2nDs25cblxuY29uc3QgRGFWdWVsdGFzID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuYDtcblxuY29uc3QgUGhhbnRvbSA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgUGhhbnRvbUhlYWQgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDkwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDkwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJhY2tncm91bmQ6ICNlMDVjNWM7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbmA7XG5jb25zdCBQaGFudG9tQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2UwNWM1YztcbmA7XG5jb25zdCBQaGFudG9tRm9vdGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTA1YzVjIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwcHgpIDBweCAwcHgsXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlLCAjZTA1YzVjIDEwMCUsIHJnYmEoMCwgMCwgMCwgMCkgMCkgMTAwcHggMHB4IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjZweCAyNnB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBhbmltYXRpb246ICR7cGhhbnRvbVdhbGt9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Rmxvb3I+PC9GbG9vcj5cbiAgICAgICAgICAgICAgICA8UGhhbnRvbUZvb3Rlcj48L1BoYW50b21Gb290ZXI+XG4gICAgICAgICAgICAgICAgPFBoYW50b20+XG4gICAgICAgICAgICAgICAgICAgIDxQaGFudG9tSGVhZD48L1BoYW50b21IZWFkPlxuICAgICAgICAgICAgICAgICAgICA8UGhhbnRvbUJvZHk+PC9QaGFudG9tQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFBoYW50b21Gb290ZXI+PC9QaGFudG9tRm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvUGhhbnRvbT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/Main.js\n");

/***/ })

})