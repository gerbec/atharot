webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Main/Main.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar Etiqueta = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Etiqueta\",\n  componentId: \"sc-1h4u0uu-0\"\n})([\"width:64px;height:64px;background-color:#5500ff;border-radius:50%;margin:auto;\"]);\n_c = Etiqueta;\nvar EtiquetaConProps = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__EtiquetaConProps\",\n  componentId: \"sc-1h4u0uu-1\"\n})([\"width:64px;height:64px;background-color:\", \";border-radius:50%;margin:auto;border:\", \";\"], function (props) {\n  return props.propiedad ? 'blue' : 'red';\n}, function (props) {\n  return props.borde ? '3px solid #000' : 'none';\n});\n_c2 = EtiquetaConProps;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h3.withConfig({\n  displayName: \"Main__Title\",\n  componentId: \"sc-1h4u0uu-2\"\n})([\"font-weight:bold;\"]);\n_c3 = Title;\nvar Texto = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__Texto\",\n  componentId: \"sc-1h4u0uu-3\"\n})([\"font-size:20px;margin:16px 0px;\"]);\n_c4 = Texto;\nvar AclaracionSuperImportante = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__AclaracionSuperImportante\",\n  componentId: \"sc-1h4u0uu-4\"\n})([\"color:red;\"]);\n_c5 = AclaracionSuperImportante;\nvar LinkSuperCopado = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Main__LinkSuperCopado\",\n  componentId: \"sc-1h4u0uu-5\"\n})([\"color:blue;display:block;font-size:14px;\"]);\n_c6 = LinkSuperCopado;\nvar ConsoleTag = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__ConsoleTag\",\n  componentId: \"sc-1h4u0uu-6\"\n})([\"background-color:#333;color:#fff;padding:8px;border-radius:4px;\"]);\n_c7 = ConsoleTag;\nvar Step = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Step\",\n  componentId: \"sc-1h4u0uu-7\"\n})([\"margin:52px 0px;background-color:#fff;border-radius:8px;padding:16px 32px 32px;box-shadow:0px 0px 5px 1px #00000033;\"]);\n_c8 = Step;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Container\",\n  componentId: \"sc-1h4u0uu-8\"\n})([\"width:800px;margin:auto;\"]);\n_c9 = Container;\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(Container, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }\n      }, __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, \"\\xBFQue es styled components?\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Es una libreria que nos permite crear un componente al mismo tiempo que definimos sus estilos a partir de cualquier etiqueta.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }, \"Como lo instalamos ? \"), __jsx(ConsoleTag, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }, \"npm install --save styled-components\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }, \"Adem\\xE1s de esto nos permite escribir CSS como nos dicto el gran oraculo W3C.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }, \"Definimos un nuevo componente y le damos estilos.\"), __jsx(Etiqueta, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }, \"\\xBFPodemos darle props y cambiar su estado visual?\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, \"\\xBFMas de una? S\\xED todas las que quieras\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        borde: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }\n      }, __jsx(AclaracionSuperImportante, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }, \"No se olviden de la semantica !! -.- y la accesibilidad que proporciona cada etiqueta\"), __jsx(\"a\", {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      }, \"esto es un link\"), __jsx(LinkSuperCopado, {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      }, \"esto es un link\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }\n      }, \"Como extender estilos de un componente predeterminado\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }\n      }, \"Imaginemos que tenemos varios botones pero queremos mantener nuestra guia de estilos como por ejemplo activado y desactivado que si bien tienen muchas cosas en com\\xFAn tienen diferentes colores, pero todos tienen algo en com\\xFAn, para eso utilizamos esta t\\xE9cnica que se llama \", __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 71\n        }\n      }, \"Extending Styles\"), \" y de esa manera no crear codigo ni componentes de Mas\")));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Etiqueta\");\n$RefreshReg$(_c2, \"EtiquetaConProps\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Texto\");\n$RefreshReg$(_c5, \"AclaracionSuperImportante\");\n$RefreshReg$(_c6, \"LinkSuperCopado\");\n$RefreshReg$(_c7, \"ConsoleTag\");\n$RefreshReg$(_c8, \"Step\");\n$RefreshReg$(_c9, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanM/OGQxOSJdLCJuYW1lcyI6WyJFdGlxdWV0YSIsInN0eWxlZCIsImRpdiIsIkV0aXF1ZXRhQ29uUHJvcHMiLCJwcm9wcyIsInByb3BpZWRhZCIsImJvcmRlIiwiVGl0bGUiLCJoMyIsIlRleHRvIiwicCIsIkFjbGFyYWNpb25TdXBlckltcG9ydGFudGUiLCJMaW5rU3VwZXJDb3BhZG8iLCJhIiwiQ29uc29sZVRhZyIsIlN0ZXAiLCJDb250YWluZXIiLCJNYWluIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNGQUFkO0tBQU1GLFE7QUFRTixJQUFNRyxnQkFBZ0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FHRSxVQUFDRSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLE1BQWxCLEdBQTJCLEtBQXZDO0FBQUEsQ0FIRixFQU1SLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxnQkFBZCxHQUFpQyxNQUE3QztBQUFBLENBTlEsQ0FBdEI7TUFBTUgsZ0I7QUFTTixJQUFNSSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEseUJBQVg7TUFBTUQsSztBQUdOLElBQU1FLEtBQUssR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBWDtNQUFNRCxLO0FBS04sSUFBTUUseUJBQXlCLEdBQUdWLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsa0JBQS9CO01BQU1DLHlCO0FBSU4sSUFBTUMsZUFBZSxHQUFHWCx5REFBTSxDQUFDWSxDQUFWO0FBQUE7QUFBQTtBQUFBLGdEQUFyQjtN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QUEsc1NBSWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSmxELDJEQUZKLENBekNKLENBREo7QUFzREg7Ozs7RUE3RGNDLDRDQUFLLENBQUNDLFM7O0FBZ0VWSCxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBFdGlxdWV0YSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTAwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IEV0aXF1ZXRhQ29uUHJvcHMgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByb3BpZWRhZCA/ICdibHVlJyA6ICdyZWQnKX07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuYm9yZGUgPyAnM3B4IHNvbGlkICMwMDAnIDogJ25vbmUnKX07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5jb25zdCBUZXh0byA9IHN0eWxlZC5wYFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuYDtcblxuY29uc3QgQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZSA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiByZWQ7XG5gO1xuXG5jb25zdCBMaW5rU3VwZXJDb3BhZG8gPSBzdHlsZWQuYWBcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuY29uc3QgQ29uc29sZVRhZyA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuYDtcblxuY29uc3QgU3RlcCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiA1MnB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMzJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzAwMDAwMDMzO1xuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/UXVlIGVzIHN0eWxlZCBjb21wb25lbnRzPzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVzIHVuYSBsaWJyZXJpYSBxdWUgbm9zIHBlcm1pdGUgY3JlYXIgdW4gY29tcG9uZW50ZSBhbCBtaXNtbyB0aWVtcG8gcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmltb3Mgc3VzIGVzdGlsb3MgYSBwYXJ0aXIgZGUgY3VhbHF1aWVyIGV0aXF1ZXRhLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkNvbW8gbG8gaW5zdGFsYW1vcyA/IDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlVGFnPm5wbSBpbnN0YWxsIC0tc2F2ZSBzdHlsZWQtY29tcG9uZW50czwvQ29uc29sZVRhZz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRlbcOhcyBkZSBlc3RvIG5vcyBwZXJtaXRlIGVzY3JpYmlyIENTUyBjb21vIG5vcyBkaWN0byBlbCBncmFuIG9yYWN1bG8gVzNDLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+RGVmaW5pbW9zIHVuIG51ZXZvIGNvbXBvbmVudGUgeSBsZSBkYW1vcyBlc3RpbG9zLjwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YT48L0V0aXF1ZXRhPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/UG9kZW1vcyBkYXJsZSBwcm9wcyB5IGNhbWJpYXIgc3UgZXN0YWRvIHZpc3VhbD88L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RXRpcXVldGFDb25Qcm9wcyBwcm9waWVkYWQ9e2ZhbHNlfT48L0V0aXF1ZXRhQ29uUHJvcHM+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+wr9NYXMgZGUgdW5hPyBTw60gdG9kYXMgbGFzIHF1ZSBxdWllcmFzPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhQ29uUHJvcHMgcHJvcGllZGFkPXtmYWxzZX0gYm9yZGU9e3RydWV9PjwvRXRpcXVldGFDb25Qcm9wcz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxBY2xhcmFjaW9uU3VwZXJJbXBvcnRhbnRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gc2Ugb2x2aWRlbiBkZSBsYSBzZW1hbnRpY2EgISEgLS4tIHkgbGEgYWNjZXNpYmlsaWRhZCBxdWUgcHJvcG9yY2lvbmEgY2FkYVxuICAgICAgICAgICAgICAgICAgICAgICAgZXRpcXVldGFcbiAgICAgICAgICAgICAgICAgICAgPC9BY2xhcmFjaW9uU3VwZXJJbXBvcnRhbnRlPlxuICAgICAgICAgICAgICAgICAgICA8YSBhbHQ9XCJlc3RvIGVzIHVuIGxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0byBlcyB1biBsaW5rXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtTdXBlckNvcGFkbyBhbHQ9XCJlc3RvIGVzIHVuIGxpbmtcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0byBlcyB1biBsaW5rXG4gICAgICAgICAgICAgICAgICAgIDwvTGlua1N1cGVyQ29wYWRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+Q29tbyBleHRlbmRlciBlc3RpbG9zIGRlIHVuIGNvbXBvbmVudGUgcHJlZGV0ZXJtaW5hZG88L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbWFnaW5lbW9zIHF1ZSB0ZW5lbW9zIHZhcmlvcyBib3RvbmVzIHBlcm8gcXVlcmVtb3MgbWFudGVuZXIgbnVlc3RyYSBndWlhIGRlXG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RpbG9zIGNvbW8gcG9yIGVqZW1wbG8gYWN0aXZhZG8geSBkZXNhY3RpdmFkbyBxdWUgc2kgYmllbiB0aWVuZW4gbXVjaGFzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3NhcyBlbiBjb23Dum4gdGllbmVuIGRpZmVyZW50ZXMgY29sb3JlcywgcGVybyB0b2RvcyB0aWVuZW4gYWxnbyBlbiBjb23Dum4sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhIGVzbyB1dGlsaXphbW9zIGVzdGEgdMOpY25pY2EgcXVlIHNlIGxsYW1hIDxiPkV4dGVuZGluZyBTdHlsZXM8L2I+IHkgZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzYSBtYW5lcmEgbm8gY3JlYXIgY29kaWdvIG5pIGNvbXBvbmVudGVzIGRlIE1hc1xuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/Main.js\n");

/***/ })

})