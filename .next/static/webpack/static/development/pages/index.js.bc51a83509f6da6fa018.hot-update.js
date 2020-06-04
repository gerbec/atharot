webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Main/Main.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar Etiqueta = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Etiqueta\",\n  componentId: \"sc-1h4u0uu-0\"\n})([\"width:64px;height:64px;background-color:#5500ff;border-radius:50%;margin:auto;\"]);\n_c = Etiqueta;\nvar EtiquetaConProps = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__EtiquetaConProps\",\n  componentId: \"sc-1h4u0uu-1\"\n})([\"width:64px;height:64px;background-color:\", \";border-radius:50%;margin:auto;border:\", \";\"], function (props) {\n  return props.propiedad ? 'blue' : 'red';\n}, function (props) {\n  return props.borde ? '3px solid #000' : 'none';\n});\n_c2 = EtiquetaConProps;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h3.withConfig({\n  displayName: \"Main__Title\",\n  componentId: \"sc-1h4u0uu-2\"\n})([\"font-weight:bold;\"]);\n_c3 = Title;\nvar Texto = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__Texto\",\n  componentId: \"sc-1h4u0uu-3\"\n})([\"font-size:20px;margin:16px 0px;\"]);\n_c4 = Texto;\nvar AclaracionSuperImportante = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__AclaracionSuperImportante\",\n  componentId: \"sc-1h4u0uu-4\"\n})([\"color:red;\"]);\n_c5 = AclaracionSuperImportante;\nvar LinkSuperCopado = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Main__LinkSuperCopado\",\n  componentId: \"sc-1h4u0uu-5\"\n})([\"color:blue;display:block;font-size:14px;\"]);\n_c6 = LinkSuperCopado;\nvar ConsoleTag = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__ConsoleTag\",\n  componentId: \"sc-1h4u0uu-6\"\n})([\"background-color:#333;color:#fff;padding:8px;border-radius:4px;\"]);\n_c7 = ConsoleTag;\nvar Step = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Step\",\n  componentId: \"sc-1h4u0uu-7\"\n})([\"margin:52px 0px;background-color:#fff;border-radius:8px;padding:16px 32px 32px;box-shadow:0px 0px 5px 1px #00000033;\"]);\n_c8 = Step;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Container\",\n  componentId: \"sc-1h4u0uu-8\"\n})([\"width:800px;margin:auto;\"]);\n_c9 = Container;\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(Container, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 13\n        }\n      }, __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }, \"\\xBFQue es styled components?\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Es una libreria que nos permite crear un componente al mismo tiempo que definimos sus estilos a partir de cualquier etiqueta.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }, \"Como lo instalamos ? \"), __jsx(ConsoleTag, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 21\n        }\n      }, \"npm install --save styled-components\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 21\n        }\n      }, \"Adem\\xE1s de esto nos permite escribir CSS como nos dicto el gran oraculo W3C.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 21\n        }\n      }, \"Definimos un nuevo componente y le damos estilos.\"), __jsx(Etiqueta, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 21\n        }\n      }, \"\\xBFPodemos darle props y cambiar su estado visual?\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, \"\\xBFMas de una? S\\xED todas las que quieras\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        borde: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 17\n        }\n      }, __jsx(AclaracionSuperImportante, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }\n      }, \"No se olviden de la semantica !! -.- y la accesibilidad que proporciona cada etiqueta\"), __jsx(\"a\", {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      }, \"esto es un link\"), __jsx(LinkSuperCopado, {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }\n      }, \"esto es un link\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 21\n        }\n      }, \"Como extender estilos de un componente predeterminado\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }\n      }, \"imaginemos que tenemos un boton y queremos darle mas estilos a otro o por ejemplo tenemos diferentes botones en nuestro sitio y tenemos varios parametros pero todos tienen algo en com\\xFAn\")));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"Etiqueta\");\n$RefreshReg$(_c2, \"EtiquetaConProps\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Texto\");\n$RefreshReg$(_c5, \"AclaracionSuperImportante\");\n$RefreshReg$(_c6, \"LinkSuperCopado\");\n$RefreshReg$(_c7, \"ConsoleTag\");\n$RefreshReg$(_c8, \"Step\");\n$RefreshReg$(_c9, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanM/OGQxOSJdLCJuYW1lcyI6WyJFdGlxdWV0YSIsInN0eWxlZCIsImRpdiIsIkV0aXF1ZXRhQ29uUHJvcHMiLCJwcm9wcyIsInByb3BpZWRhZCIsImJvcmRlIiwiVGl0bGUiLCJoMyIsIlRleHRvIiwicCIsIkFjbGFyYWNpb25TdXBlckltcG9ydGFudGUiLCJMaW5rU3VwZXJDb3BhZG8iLCJhIiwiQ29uc29sZVRhZyIsIlN0ZXAiLCJDb250YWluZXIiLCJNYWluIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNGQUFkO0tBQU1GLFE7QUFRTixJQUFNRyxnQkFBZ0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FHRSxVQUFDRSxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDQyxTQUFOLEdBQWtCLE1BQWxCLEdBQTJCLEtBQXZDO0FBQUEsQ0FIRixFQU1SLFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxnQkFBZCxHQUFpQyxNQUE3QztBQUFBLENBTlEsQ0FBdEI7TUFBTUgsZ0I7QUFTTixJQUFNSSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEseUJBQVg7TUFBTUQsSztBQUdOLElBQU1FLEtBQUssR0FBR1IseURBQU0sQ0FBQ1MsQ0FBVjtBQUFBO0FBQUE7QUFBQSx1Q0FBWDtNQUFNRCxLO0FBS04sSUFBTUUseUJBQXlCLEdBQUdWLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsa0JBQS9CO01BQU1DLHlCO0FBSU4sSUFBTUMsZUFBZSxHQUFHWCx5REFBTSxDQUFDWSxDQUFWO0FBQUE7QUFBQTtBQUFBLGdEQUFyQjtN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QUEsd01BRkosQ0F6Q0osQ0FESjtBQW9ESDs7OztFQTNEY0MsNENBQUssQ0FBQ0MsUzs7QUE4RFZILG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEV0aXF1ZXRhID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MDBmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuYDtcblxuY29uc3QgRXRpcXVldGFDb25Qcm9wcyA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJvcGllZGFkID8gJ2JsdWUnIDogJ3JlZCcpfTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5ib3JkZSA/ICczcHggc29saWQgIzAwMCcgOiAnbm9uZScpfTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmNvbnN0IFRleHRvID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG5gO1xuXG5jb25zdCBBY2xhcmFjaW9uU3VwZXJJbXBvcnRhbnRlID0gc3R5bGVkLnBgXG4gICAgY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IExpbmtTdXBlckNvcGFkbyA9IHN0eWxlZC5hYFxuICAgIGNvbG9yOiBibHVlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5jb25zdCBDb25zb2xlVGFnID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5jb25zdCBTdGVwID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDUycHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMzJweCAzMnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjMDAwMDAwMzM7XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5gO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+wr9RdWUgZXMgc3R5bGVkIGNvbXBvbmVudHM/PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXMgdW5hIGxpYnJlcmlhIHF1ZSBub3MgcGVybWl0ZSBjcmVhciB1biBjb21wb25lbnRlIGFsIG1pc21vIHRpZW1wbyBxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaW1vcyBzdXMgZXN0aWxvcyBhIHBhcnRpciBkZSBjdWFscXVpZXIgZXRpcXVldGEuXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+Q29tbyBsbyBpbnN0YWxhbW9zID8gPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnNvbGVUYWc+bnBtIGluc3RhbGwgLS1zYXZlIHN0eWxlZC1jb21wb25lbnRzPC9Db25zb2xlVGFnPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGVtw6FzIGRlIGVzdG8gbm9zIHBlcm1pdGUgZXNjcmliaXIgQ1NTIGNvbW8gbm9zIGRpY3RvIGVsIGdyYW4gb3JhY3VsbyBXM0MuXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5EZWZpbmltb3MgdW4gbnVldm8gY29tcG9uZW50ZSB5IGxlIGRhbW9zIGVzdGlsb3MuPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhPjwvRXRpcXVldGE+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+wr9Qb2RlbW9zIGRhcmxlIHByb3BzIHkgY2FtYmlhciBzdSBlc3RhZG8gdmlzdWFsPzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YUNvblByb3BzIHByb3BpZWRhZD17ZmFsc2V9PjwvRXRpcXVldGFDb25Qcm9wcz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT7Cv01hcyBkZSB1bmE/IFPDrSB0b2RhcyBsYXMgcXVlIHF1aWVyYXM8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RXRpcXVldGFDb25Qcm9wcyBwcm9waWVkYWQ9e2ZhbHNlfSBib3JkZT17dHJ1ZX0+PC9FdGlxdWV0YUNvblByb3BzPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPEFjbGFyYWNpb25TdXBlckltcG9ydGFudGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBzZSBvbHZpZGVuIGRlIGxhIHNlbWFudGljYSAhISAtLi0geSBsYSBhY2Nlc2liaWxpZGFkIHF1ZSBwcm9wb3JjaW9uYSBjYWRhXG4gICAgICAgICAgICAgICAgICAgICAgICBldGlxdWV0YVxuICAgICAgICAgICAgICAgICAgICA8L0FjbGFyYWNpb25TdXBlckltcG9ydGFudGU+XG4gICAgICAgICAgICAgICAgICAgIDxhIGFsdD1cImVzdG8gZXMgdW4gbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RvIGVzIHVuIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1N1cGVyQ29wYWRvIGFsdD1cImVzdG8gZXMgdW4gbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RvIGVzIHVuIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rU3VwZXJDb3BhZG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5Db21vIGV4dGVuZGVyIGVzdGlsb3MgZGUgdW4gY29tcG9uZW50ZSBwcmVkZXRlcm1pbmFkbzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdpbmVtb3MgcXVlIHRlbmVtb3MgdW4gYm90b24geSBxdWVyZW1vcyBkYXJsZSBtYXMgZXN0aWxvcyBhIG90cm8gbyBwb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGVqZW1wbG8gdGVuZW1vcyBkaWZlcmVudGVzIGJvdG9uZXMgZW4gbnVlc3RybyBzaXRpbyB5IHRlbmVtb3MgdmFyaW9zXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0cm9zIHBlcm8gdG9kb3MgdGllbmVuIGFsZ28gZW4gY29tw7puXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main/Main.js\n");

/***/ })

})