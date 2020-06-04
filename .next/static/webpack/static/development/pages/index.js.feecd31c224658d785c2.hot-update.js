webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/alejandro/Documents/Atharot/src/components/Main/Main.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // BASIC STYLES\n\nvar Etiqueta = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Etiqueta\",\n  componentId: \"sc-1h4u0uu-0\"\n})([\"width:64px;height:64px;background-color:#5500ff;border-radius:50%;margin:auto;\"]);\n_c = Etiqueta;\nvar EtiquetaConProps = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__EtiquetaConProps\",\n  componentId: \"sc-1h4u0uu-1\"\n})([\"width:64px;height:64px;background-color:\", \";border-radius:50%;margin:auto;border:\", \";\"], function (props) {\n  return props.propiedad ? 'blue' : 'red';\n}, function (props) {\n  return props.borde ? '3px solid #000' : 'none';\n});\n_c2 = EtiquetaConProps;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h3.withConfig({\n  displayName: \"Main__Title\",\n  componentId: \"sc-1h4u0uu-2\"\n})([\"font-weight:bold;\"]);\n_c3 = Title;\nvar Texto = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__Texto\",\n  componentId: \"sc-1h4u0uu-3\"\n})([\"font-size:20px;margin:16px 0px;\"]);\n_c4 = Texto;\nvar AclaracionSuperImportante = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n  displayName: \"Main__AclaracionSuperImportante\",\n  componentId: \"sc-1h4u0uu-4\"\n})([\"color:red;\"]);\n_c5 = AclaracionSuperImportante;\nvar LinkSuperCopado = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].a.withConfig({\n  displayName: \"Main__LinkSuperCopado\",\n  componentId: \"sc-1h4u0uu-5\"\n})([\"color:blue;display:block;font-size:14px;\"]);\n_c6 = LinkSuperCopado;\nvar ConsoleTag = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__ConsoleTag\",\n  componentId: \"sc-1h4u0uu-6\"\n})([\"background-color:#333;color:#fff;padding:8px;border-radius:4px;\"]);\n_c7 = ConsoleTag;\nvar Step = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Step\",\n  componentId: \"sc-1h4u0uu-7\"\n})([\"margin:52px 0px;background-color:#fff;border-radius:8px;padding:16px 32px 32px;box-shadow:0px 0px 5px 1px #00000033;\"]);\n_c8 = Step;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"Main__Container\",\n  componentId: \"sc-1h4u0uu-8\"\n})([\"width:800px;margin:auto;font-family:Arial,Helvetica,sans-serif;\"]); // EXTENDING STYLES\n\n_c9 = Container;\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button.withConfig({\n  displayName: \"Main__Button\",\n  componentId: \"sc-1h4u0uu-9\"\n})([\"color:#5500ff;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid #5500ff;border-radius:3px;\"]);\n_c10 = Button;\nvar ButtonSecundario = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Button).withConfig({\n  displayName: \"Main__ButtonSecundario\",\n  componentId: \"sc-1h4u0uu-10\"\n})([\"background-color:#5500ff;color:#fff;\"]);\n_c11 = ButtonSecundario;\nvar ButtonDesactivado = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(ButtonSecundario).withConfig({\n  displayName: \"Main__ButtonDesactivado\",\n  componentId: \"sc-1h4u0uu-11\"\n})([\"opacity:0.5;pointer-events:'none';\"]);\n_c12 = ButtonDesactivado;\n\nvar Main = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Main, _React$Component);\n\n  var _super = _createSuper(Main);\n\n  function Main(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Main);\n\n    _this = _super.call(this, props);\n    _this.state = {};\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Main, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(Container, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 13\n        }\n      }, __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, \"\\xBFQue es styled components?\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }, \"Es una libreria que nos permite crear un componente al mismo tiempo que definimos sus estilos a partir de cualquier etiqueta.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 21\n        }\n      }, \"Como lo instalamos ? \"), __jsx(ConsoleTag, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 21\n        }\n      }, \"npm install --save styled-components\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 21\n        }\n      }, \"Adem\\xE1s de esto nos permite escribir CSS como nos dicto el gran oraculo W3C.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 21\n        }\n      }, \"Definimos un nuevo componente y le damos estilos.\"), __jsx(Etiqueta, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }\n      }, \"\\xBFPodemos darle props y cambiar su estado visual?\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }\n      }, \"\\xBFMas de una? S\\xED todas las que quieras\"), __jsx(EtiquetaConProps, {\n        propiedad: false,\n        borde: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }\n      })), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 17\n        }\n      }, __jsx(AclaracionSuperImportante, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 21\n        }\n      }, \"No se olviden de la semantica !! -.- y la accesibilidad que proporciona cada etiqueta\"), __jsx(\"a\", {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 21\n        }\n      }, \"esto es un link\"), __jsx(LinkSuperCopado, {\n        alt: \"esto es un link\",\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 21\n        }\n      }, \"esto es un link\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 17\n        }\n      }, __jsx(Title, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 21\n        }\n      }, \"Como extender estilos de un componente predeterminado\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 21\n        }\n      }, \"Imaginemos que tenemos varios botones pero queremos mantener nuestra guia de estilos como por ejemplo activado y desactivado que si bien tienen muchas cosas en com\\xFAn tienen diferentes colores, pero todos tienen algo en com\\xFAn, para eso utilizamos esta t\\xE9cnica que se llama \", __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 71\n        }\n      }, \"Extending Styles\"), \" y de esa manera no crear codigo ni componentes de m\\xE1s.\"), __jsx(Button, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 21\n        }\n      }, \"Boton generico\"), __jsx(ButtonSecundario, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 21\n        }\n      }, \"Boton secundario\"), __jsx(ButtonDesactivado, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 21\n        }\n      }, \"Boton Desactivado\"), __jsx(Texto, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 21\n        }\n      }, \"Tengamos en cuenta que esto tambien podemos hacerlo desde las props, pero depender\\xE1 del uso que le demos y el cual pensemos a la hora de desarrolla nuestra interfaz.\")), __jsx(Step, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 17\n        }\n      }));\n    }\n  }]);\n\n  return Main;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Etiqueta\");\n$RefreshReg$(_c2, \"EtiquetaConProps\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Texto\");\n$RefreshReg$(_c5, \"AclaracionSuperImportante\");\n$RefreshReg$(_c6, \"LinkSuperCopado\");\n$RefreshReg$(_c7, \"ConsoleTag\");\n$RefreshReg$(_c8, \"Step\");\n$RefreshReg$(_c9, \"Container\");\n$RefreshReg$(_c10, \"Button\");\n$RefreshReg$(_c11, \"ButtonSecundario\");\n$RefreshReg$(_c12, \"ButtonDesactivado\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanM/OGQxOSJdLCJuYW1lcyI6WyJFdGlxdWV0YSIsInN0eWxlZCIsImRpdiIsIkV0aXF1ZXRhQ29uUHJvcHMiLCJwcm9wcyIsInByb3BpZWRhZCIsImJvcmRlIiwiVGl0bGUiLCJoMyIsIlRleHRvIiwicCIsIkFjbGFyYWNpb25TdXBlckltcG9ydGFudGUiLCJMaW5rU3VwZXJDb3BhZG8iLCJhIiwiQ29uc29sZVRhZyIsIlN0ZXAiLCJDb250YWluZXIiLCJCdXR0b24iLCJidXR0b24iLCJCdXR0b25TZWN1bmRhcmlvIiwiQnV0dG9uRGVzYWN0aXZhZG8iLCJNYWluIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBLElBQU1BLFFBQVEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzRkFBZDtLQUFNRixRO0FBUU4sSUFBTUcsZ0JBQWdCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0dBR0UsVUFBQ0UsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixNQUFsQixHQUEyQixLQUF2QztBQUFBLENBSEYsRUFNUixVQUFDRCxLQUFEO0FBQUEsU0FBWUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsZ0JBQWQsR0FBaUMsTUFBN0M7QUFBQSxDQU5RLENBQXRCO01BQU1ILGdCO0FBU04sSUFBTUksS0FBSyxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFYO01BQU1ELEs7QUFHTixJQUFNRSxLQUFLLEdBQUdSLHlEQUFNLENBQUNTLENBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQVg7TUFBTUQsSztBQUtOLElBQU1FLHlCQUF5QixHQUFHVix5REFBTSxDQUFDUyxDQUFWO0FBQUE7QUFBQTtBQUFBLGtCQUEvQjtNQUFNQyx5QjtBQUlO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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosRUFRSSxNQUFDLGVBQUQ7QUFBaUIsV0FBRyxFQUFDLGlCQUFyQjtBQUF1QyxZQUFJLEVBQUMsR0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSixDQTVCSixFQXlDSSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQURKLEVBRUksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1NBSWtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSmxELCtEQUZKLEVBVUksTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVkosRUFXSSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWEosRUFZSSxNQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWkosRUFjSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvTEFkSixDQXpDSixFQThESSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTlESixDQURKO0FBa0VIOzs7O0VBekVjQyw0Q0FBSyxDQUFDQyxTOztBQTRFVkgsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL01haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQkFTSUMgU1RZTEVTXG5jb25zdCBFdGlxdWV0YSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTAwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IEV0aXF1ZXRhQ29uUHJvcHMgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gKHByb3BzLnByb3BpZWRhZCA/ICdibHVlJyA6ICdyZWQnKX07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6ICR7KHByb3BzKSA9PiAocHJvcHMuYm9yZGUgPyAnM3B4IHNvbGlkICMwMDAnIDogJ25vbmUnKX07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5jb25zdCBUZXh0byA9IHN0eWxlZC5wYFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDE2cHggMHB4O1xuYDtcblxuY29uc3QgQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZSA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiByZWQ7XG5gO1xuXG5jb25zdCBMaW5rU3VwZXJDb3BhZG8gPSBzdHlsZWQuYWBcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuY29uc3QgQ29uc29sZVRhZyA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuYDtcblxuY29uc3QgU3RlcCA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiA1MnB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMzJweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggIzAwMDAwMDMzO1xuYDtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuYDtcbi8vIEVYVEVORElORyBTVFlMRVNcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBjb2xvcjogIzU1MDBmZjtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTAwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuYDtcblxuY29uc3QgQnV0dG9uU2VjdW5kYXJpbyA9IHN0eWxlZChCdXR0b24pYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTAwZmY7XG4gICAgY29sb3I6ICNmZmY7XG5gO1xuXG5jb25zdCBCdXR0b25EZXNhY3RpdmFkbyA9IHN0eWxlZChCdXR0b25TZWN1bmRhcmlvKWBcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcG9pbnRlci1ldmVudHM6ICdub25lJztcbmA7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT7Cv1F1ZSBlcyBzdHlsZWQgY29tcG9uZW50cz88L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFcyB1bmEgbGlicmVyaWEgcXVlIG5vcyBwZXJtaXRlIGNyZWFyIHVuIGNvbXBvbmVudGUgYWwgbWlzbW8gdGllbXBvIHF1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5pbW9zIHN1cyBlc3RpbG9zIGEgcGFydGlyIGRlIGN1YWxxdWllciBldGlxdWV0YS5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5Db21vIGxvIGluc3RhbGFtb3MgPyA8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q29uc29sZVRhZz5ucG0gaW5zdGFsbCAtLXNhdmUgc3R5bGVkLWNvbXBvbmVudHM8L0NvbnNvbGVUYWc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZW3DoXMgZGUgZXN0byBub3MgcGVybWl0ZSBlc2NyaWJpciBDU1MgY29tbyBub3MgZGljdG8gZWwgZ3JhbiBvcmFjdWxvIFczQy5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkRlZmluaW1vcyB1biBudWV2byBjb21wb25lbnRlIHkgbGUgZGFtb3MgZXN0aWxvcy48L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RXRpcXVldGE+PC9FdGlxdWV0YT5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT7Cv1BvZGVtb3MgZGFybGUgcHJvcHMgeSBjYW1iaWFyIHN1IGVzdGFkbyB2aXN1YWw/PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhQ29uUHJvcHMgcHJvcGllZGFkPXtmYWxzZX0+PC9FdGlxdWV0YUNvblByb3BzPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/TWFzIGRlIHVuYT8gU8OtIHRvZGFzIGxhcyBxdWUgcXVpZXJhczwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YUNvblByb3BzIHByb3BpZWRhZD17ZmFsc2V9IGJvcmRlPXt0cnVlfT48L0V0aXF1ZXRhQ29uUHJvcHM+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8QWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHNlIG9sdmlkZW4gZGUgbGEgc2VtYW50aWNhICEhIC0uLSB5IGxhIGFjY2VzaWJpbGlkYWQgcXVlIHByb3BvcmNpb25hIGNhZGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0aXF1ZXRhXG4gICAgICAgICAgICAgICAgICAgIDwvQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZT5cbiAgICAgICAgICAgICAgICAgICAgPGEgYWx0PVwiZXN0byBlcyB1biBsaW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdG8gZXMgdW4gbGlua1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rU3VwZXJDb3BhZG8gYWx0PVwiZXN0byBlcyB1biBsaW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdG8gZXMgdW4gbGlua1xuICAgICAgICAgICAgICAgICAgICA8L0xpbmtTdXBlckNvcGFkbz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkNvbW8gZXh0ZW5kZXIgZXN0aWxvcyBkZSB1biBjb21wb25lbnRlIHByZWRldGVybWluYWRvPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2luZW1vcyBxdWUgdGVuZW1vcyB2YXJpb3MgYm90b25lcyBwZXJvIHF1ZXJlbW9zIG1hbnRlbmVyIG51ZXN0cmEgZ3VpYSBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0aWxvcyBjb21vIHBvciBlamVtcGxvIGFjdGl2YWRvIHkgZGVzYWN0aXZhZG8gcXVlIHNpIGJpZW4gdGllbmVuIG11Y2hhc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29zYXMgZW4gY29tw7puIHRpZW5lbiBkaWZlcmVudGVzIGNvbG9yZXMsIHBlcm8gdG9kb3MgdGllbmVuIGFsZ28gZW4gY29tw7puLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBlc28gdXRpbGl6YW1vcyBlc3RhIHTDqWNuaWNhIHF1ZSBzZSBsbGFtYSA8Yj5FeHRlbmRpbmcgU3R5bGVzPC9iPiB5IGRlXG4gICAgICAgICAgICAgICAgICAgICAgICBlc2EgbWFuZXJhIG5vIGNyZWFyIGNvZGlnbyBuaSBjb21wb25lbnRlcyBkZSBtw6FzLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Qm90b24gZ2VuZXJpY288L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblNlY3VuZGFyaW8+Qm90b24gc2VjdW5kYXJpbzwvQnV0dG9uU2VjdW5kYXJpbz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRlc2FjdGl2YWRvPkJvdG9uIERlc2FjdGl2YWRvPC9CdXR0b25EZXNhY3RpdmFkbz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZW5nYW1vcyBlbiBjdWVudGEgcXVlIGVzdG8gdGFtYmllbiBwb2RlbW9zIGhhY2VybG8gZGVzZGUgbGFzIHByb3BzLCBwZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlcsOhIGRlbCB1c28gcXVlIGxlIGRlbW9zIHkgZWwgY3VhbCBwZW5zZW1vcyBhIGxhIGhvcmEgZGUgZGVzYXJyb2xsYVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVlc3RyYSBpbnRlcmZhei5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD48L1N0ZXA+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/Main.js\n");

/***/ })

})