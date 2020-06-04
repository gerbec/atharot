module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Blueprint/Blueprint.js":
/*!***********************************************!*\
  !*** ./src/components/Blueprint/Blueprint.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Blueprint = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Blueprint",
  componentId: "sc-1it16m3-0"
})(["background-color:#2e3561;padding:32px;"]);
/* harmony default export */ __webpack_exports__["default"] = (Blueprint);

/***/ }),

/***/ "./src/components/Blueprint/index.js":
/*!*******************************************!*\
  !*** ./src/components/Blueprint/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blueprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blueprint */ "./src/components/Blueprint/Blueprint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Blueprint__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Button",
  componentId: "hkq3n0-0"
})(["background-color:", ";border:", ";border-radius:4px;box-sizing:border-box;color:#000;font-size:16px;margin:0px;padding:8px 24px;text-align:center;&:hover{border:1px solid #0055ff;color:#0055ff;}"], props => props.backgroundColor ? props.backgroundColor : '#fff', props => props.color ? `1px solid ${props.color}` : `1px solid #000`);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Container/Container.js":
/*!***********************************************!*\
  !*** ./src/components/Container/Container.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Container",
  componentId: "pbzgid-0"
})(["transform:scale(0.8);"]);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Container/index.js":
/*!*******************************************!*\
  !*** ./src/components/Container/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ "./src/components/Container/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Container__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Footer",
  componentId: "xc4zh4-0"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/components/index.js");
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1y8sj70-0"
})(["align-items:center;background-color:#fff;border-bottom:2px solid #000;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;padding:16px 24px;position:sticky;top:0px;width:100%;z-index:100;"]);

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Title1"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "Styled components"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Title1"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://styled-components.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "https://styled-components.com/")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Main/Main.js":
/*!*************************************!*\
  !*** ./src/components/Main/Main.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_themeStyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/themeStyledComponents */ "./src/styles/themeStyledComponents.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/Main/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // BASIC STYLES

const Etiqueta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Etiqueta",
  componentId: "sc-1h4u0uu-0"
})(["width:64px;height:64px;background-color:#5500ff;border-radius:50%;margin:auto;"]);
const EtiquetaConProps = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__EtiquetaConProps",
  componentId: "sc-1h4u0uu-1"
})(["width:", ";height:64px;background-color:#5500ff;border-radius:50%;margin:auto;border:none;"], props => props.ovalo ? '128px' : '64px');
const EtiquetaConPropsConValor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__EtiquetaConPropsConValor",
  componentId: "sc-1h4u0uu-2"
})(["width:", ";height:64px;background-color:", ";border-radius:50%;margin:auto;border:", ";"], props => props.ovalo ? '128px' : '64px', props => props.propiedad ? 'blue' : 'red', props => props.borde ? '3px solid #000' : 'none');
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "Main__Title",
  componentId: "sc-1h4u0uu-3"
})(["font-weight:bold;"]);
const Texto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Main__Texto",
  componentId: "sc-1h4u0uu-4"
})(["font-size:20px;margin:16px 0px;"]);
const AclaracionSuperImportante = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Main__AclaracionSuperImportante",
  componentId: "sc-1h4u0uu-5"
})(["color:red;"]);
const LinkSuperCopado = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Main__LinkSuperCopado",
  componentId: "sc-1h4u0uu-6"
})(["color:blue;display:block;font-size:14px;"]);
const ConsoleTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__ConsoleTag",
  componentId: "sc-1h4u0uu-7"
})(["background-color:#333;color:#fff;padding:8px;border-radius:4px;"]);
const Step = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Step",
  componentId: "sc-1h4u0uu-8"
})(["margin:52px 0px;background-color:#fff;border-radius:8px;padding:16px 32px 32px;box-shadow:0px 0px 5px 1px #00000033;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Container",
  componentId: "sc-1h4u0uu-9"
})(["width:800px;margin:auto;font-family:Arial,Helvetica,sans-serif;"]); // EXTENDING STYLES

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Main__Button",
  componentId: "sc-1h4u0uu-10"
})(["color:#5500ff;font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid #5500ff;border-radius:3px;"]);
const ButtonSecundario = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Button).withConfig({
  displayName: "Main__ButtonSecundario",
  componentId: "sc-1h4u0uu-11"
})(["background-color:#5500ff;color:#fff;"]);
const ButtonDesactivado = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ButtonSecundario).withConfig({
  displayName: "Main__ButtonDesactivado",
  componentId: "sc-1h4u0uu-12"
})(["opacity:0.5;pointer-events:'none';"]); // animación

const gira = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const DaVueltas = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__DaVueltas",
  componentId: "sc-1h4u0uu-13"
})(["width:64px;height:64px;background-color:red;animation:", " 1s linear infinite;"], gira); // THEME

const ConTheme = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Main__ConTheme",
  componentId: "sc-1h4u0uu-14"
})(["color:", ";"], props => props.theme.colors.primary);

class Main extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, "\xBFQue es styled components?"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, "Es una libreria que nos permite crear un componente al mismo tiempo que definimos sus estilos a partir de cualquier etiqueta.")), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }, "Como lo instalamos ? "), __jsx(ConsoleTag, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    }, "npm install --save styled-components"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, "Adem\xE1s de esto nos permite escribir CSS como nos dicto el gran oraculo W3C.")), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, "Definimos un nuevo componente y le damos estilos."), __jsx(Etiqueta, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 21
      }
    })), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, "Integrando props"), __jsx(EtiquetaConProps, {
      ovalo: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }
    }), __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, "\xBFPodemos darle props con un valor y cambiar su estado visual?"), __jsx(EtiquetaConPropsConValor, {
      propiedad: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }), __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, "\xBFMas de una? "), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 21
      }
    }, "S\xED todas las que quieras"), __jsx(EtiquetaConProps, {
      propiedad: false,
      borde: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 21
      }
    })), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx(AclaracionSuperImportante, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, "No se olviden de la semantica !! -.- y la accesibilidad que proporciona cada etiqueta"), __jsx("a", {
      alt: "esto es un link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 21
      }
    }, "esto es un link"), __jsx(LinkSuperCopado, {
      alt: "esto es un link",
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }
    }, "esto es un link")), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, "Como extender estilos de un componente predeterminado"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, "Imaginemos que tenemos varios botones pero queremos mantener nuestra guia de estilos como por ejemplo activado y desactivado que si bien tienen muchas cosas en com\xFAn tienen diferentes colores, pero todos tienen algo en com\xFAn, para eso utilizamos esta t\xE9cnica que se llama ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 71
      }
    }, "Extending Styles"), " y de esa manera no crear codigo ni componentes de m\xE1s."), __jsx(Button, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, "Boton generico"), __jsx(ButtonSecundario, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 21
      }
    }, "Boton secundario"), __jsx(ButtonDesactivado, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 21
      }
    }, "Boton Desactivado"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 21
      }
    }, "Tengamos en cuenta que esto tambien podemos hacerlo desde las props, pero depender\xE1 del uso que le demos y el cual pensemos a la hora de desarrolla nuestra interfaz.")), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 21
      }
    }, "ANIMACIONES!!!!!! :P XD =)"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }, "hay animaciones de muchos tipos y se pueden combinar con lo todo lo anterior"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 21
      }
    }, "para poder utilizar animaciones tienen que importar ", styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"], " en:"), __jsx(ConsoleTag, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 21
      }
    }, "import styled, keyframes from 'styled-components';"), __jsx(DaVueltas, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 21
      }
    }), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }, " no se envicien")), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 21
      }
    }, "Utilizando Theme's"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 21
      }
    }, "Esta tecnica esta buena para tomar velocidad al igual que utilizar global styles, como ejepmlo pueden revisar el repo de aerolab pero veamos un ejmplo a continuaci\xF3n."), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 21
      }
    }, "Para utilizarlo debemos llamarlo tambien en:"), __jsx(ConsoleTag, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, "import ThemeProvider from 'styled-components';"), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
      theme: _styles_themeStyledComponents__WEBPACK_IMPORTED_MODULE_1__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 21
      }
    }, __jsx(ConTheme, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 25
      }
    }, "este es un texto con theme. No hace falta insertarlo en cada componente ya que el ThemeProvider funciona como un high order component por lo cual tenemos la ventaja de declararlo en nuestro archivo de inicio _document o como nosotros en views disponemos de varios repos con diferentes estilos podriamos declararlo por page y funcionaria exactamente igual solo deberiamos definir cada theme para cada template. esto nos va a dar mucha velocidad ya que no deberemos reescribir estilos sumado a esto podremos generar que nuestra libreria views sea aun mas agil ya que podremos utilizar una definici\xF3n de componente en diferentes proyectos los cuales cada uno poseeran su propio theme"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Main/index.js":
/*!**************************************!*\
  !*** ./src/components/Main/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/components/Main/Main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Ps4Controller/Ps4Controller.js":
/*!*******************************************************!*\
  !*** ./src/components/Ps4Controller/Ps4Controller.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Ps4Controller = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Ps4Controller",
  componentId: "ost5lv-0"
})(["position:relative;width:1428px;height:898px;display:block;margin:auto;"]);
/* harmony default export */ __webpack_exports__["default"] = (Ps4Controller);

/***/ }),

/***/ "./src/components/Ps4Controller/index.js":
/*!***********************************************!*\
  !*** ./src/components/Ps4Controller/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ps4Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ps4Controller */ "./src/components/Ps4Controller/Ps4Controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Ps4Controller__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Section/Section.js":
/*!*******************************************!*\
  !*** ./src/components/Section/Section.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "Section",
  componentId: "sc-1b7ybdk-0"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./src/components/Section/index.js":
/*!*****************************************!*\
  !*** ./src/components/Section/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./src/components/Section/Section.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Section__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/Title1/Title1.js":
/*!*****************************************!*\
  !*** ./src/components/Title1/Title1.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Title1",
  componentId: "qhqhom-0"
})(["font-weight:700;box-sizing:border-box;color:", ";font-size:28px;font-family:Lato;font-style:italic;line-height:23px;margin:0px;padding:0px;"], props => props.color ? props.color : '#000');
/* harmony default export */ __webpack_exports__["default"] = (Title1);

/***/ }),

/***/ "./src/components/Title1/index.js":
/*!****************************************!*\
  !*** ./src/components/Title1/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title1 */ "./src/components/Title1/Title1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Title1__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Blueprint, Button, Container, Header, Footer, Main, Ps4Controller, Section, Title1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blueprint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blueprint */ "./src/components/Blueprint/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blueprint", function() { return _Blueprint__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./src/components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Main */ "./src/components/Main/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Ps4Controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Ps4Controller */ "./src/components/Ps4Controller/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ps4Controller", function() { return _Ps4Controller__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Section */ "./src/components/Section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Title1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Title1 */ "./src/components/Title1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title1", function() { return _Title1__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/components/index.js");
/* harmony import */ var _utils_Fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Fonts */ "./utils/Fonts.js");
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__Body",
  componentId: "sc-1vj0zd-0"
})(["background-color:'#ffffff';padding:0;margin:0;"]);

class index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Object(_utils_Fonts__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "viewport",
      content: 'user-scalable=0, initial-scale=1, ' + 'minimum-scale=1, width=device-width, height=device-height',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }), __jsx("meta", {
      property: "og:site_name",
      content: "Atharot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "apple-mobile-web-app-title",
      content: "Atharot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "application-name",
      content: "Atharot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#FFFFFF",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }), __jsx("script", {
      src: "https://aframe.io/releases/0.9.2/aframe.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, "Styled components")), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx(Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./src/styles/themeStyledComponents.js":
/*!*********************************************!*\
  !*** ./src/styles/themeStyledComponents.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    primary: '#5500FF',
    secondary: '#FFC93D',
    gray: '#050038',
    gray2: '#434063',
    midLightGray: '#E0DFE8'
  },
  responsive: {
    mobile: 'max-width: 1240px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./utils/Fonts.js":
/*!************************!*\
  !*** ./utils/Fonts.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FontFaceObserver = __webpack_require__(/*! fontfaceobserver */ "fontfaceobserver");

const Fonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap&subset=latin-ext';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  const roboto = new FontFaceObserver('Lato');
  roboto.load().then(() => {
    document.documentElement.classList.add('lato');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Fonts);

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alejandro/Documents/Atharot/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "fontfaceobserver":
/*!***********************************!*\
  !*** external "fontfaceobserver" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmx1ZXByaW50L0JsdWVwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbHVlcHJpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHM0Q29udHJvbGxlci9QczRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BzNENvbnRyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUxL1RpdGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWVTdHlsZWRDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL0ZvbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbnRmYWNlb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmx1ZXByaW50Iiwic3R5bGVkIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkNvbnRhaW5lciIsIkZvb3RlciIsImZvb3RlciIsImhlYWRlciIsIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsIkV0aXF1ZXRhIiwiRXRpcXVldGFDb25Qcm9wcyIsIm92YWxvIiwiRXRpcXVldGFDb25Qcm9wc0NvblZhbG9yIiwicHJvcGllZGFkIiwiYm9yZGUiLCJUaXRsZSIsImgzIiwiVGV4dG8iLCJwIiwiQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZSIsIkxpbmtTdXBlckNvcGFkbyIsImEiLCJDb25zb2xlVGFnIiwiU3RlcCIsIkJ1dHRvblNlY3VuZGFyaW8iLCJCdXR0b25EZXNhY3RpdmFkbyIsImdpcmEiLCJrZXlmcmFtZXMiLCJEYVZ1ZWx0YXMiLCJDb25UaGVtZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIk1haW4iLCJQczRDb250cm9sbGVyIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJUaXRsZTEiLCJoMSIsIkJvZHkiLCJpbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiRm9udHMiLCJzZWNvbmRhcnkiLCJncmF5IiwiZ3JheTIiLCJtaWRMaWdodEdyYXkiLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiRm9udEZhY2VPYnNlcnZlciIsInJlcXVpcmUiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJvYm90byIsImxvYWQiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFmO0FBS2VGLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBOzs7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Ozs7Ozs7Ozs7Ozs7O0FDakJBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCbHVlcHJpbnQgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTM1NjE7XG4gICAgcGFkZGluZzogMzJweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJsdWVwcmludDtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9CbHVlcHJpbnQnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYmFja2dyb3VuZENvbG9yID8gcHJvcHMuYmFja2dyb3VuZENvbG9yIDogJyNmZmYnKX07XG4gICAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5jb2xvciA/IGAxcHggc29saWQgJHtwcm9wcy5jb2xvcn1gIDogYDFweCBzb2xpZCAjMDAwYCl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNTVmZjtcbiAgICAgICAgY29sb3I6ICMwMDU1ZmY7XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0J1dHRvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vQ29udGFpbmVyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYGA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9Gb290ZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1RpdGxlMX0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuYDtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxUaXRsZTE+U3R5bGVkIGNvbXBvbmVudHM8L1RpdGxlMT5cbiAgICAgICAgICAgICAgICA8VGl0bGUxPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9zdHlsZWQtY29tcG9uZW50cy5jb20vXCI+aHR0cHM6Ly9zdHlsZWQtY29tcG9uZW50cy5jb20vPC9hPlxuICAgICAgICAgICAgICAgIDwvVGl0bGUxPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vSGVhZGVyJztcbiIsImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi9zdHlsZXMvdGhlbWVTdHlsZWRDb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIEJBU0lDIFNUWUxFU1xuY29uc3QgRXRpcXVldGEgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUwMGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG5gO1xuXG5jb25zdCBFdGlxdWV0YUNvblByb3BzID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IChwcm9wcy5vdmFsbyA/ICcxMjhweCcgOiAnNjRweCcpfTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MDBmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbmA7XG5cbmNvbnN0IEV0aXF1ZXRhQ29uUHJvcHNDb25WYWxvciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6ICR7KHByb3BzKSA9PiAocHJvcHMub3ZhbG8gPyAnMTI4cHgnIDogJzY0cHgnKX07XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiAocHJvcHMucHJvcGllZGFkID8gJ2JsdWUnIDogJ3JlZCcpfTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogJHsocHJvcHMpID0+IChwcm9wcy5ib3JkZSA/ICczcHggc29saWQgIzAwMCcgOiAnbm9uZScpfTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcbmNvbnN0IFRleHRvID0gc3R5bGVkLnBgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMTZweCAwcHg7XG5gO1xuXG5jb25zdCBBY2xhcmFjaW9uU3VwZXJJbXBvcnRhbnRlID0gc3R5bGVkLnBgXG4gICAgY29sb3I6IHJlZDtcbmA7XG5cbmNvbnN0IExpbmtTdXBlckNvcGFkbyA9IHN0eWxlZC5hYFxuICAgIGNvbG9yOiBibHVlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbmA7XG5jb25zdCBDb25zb2xlVGFnID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5gO1xuXG5jb25zdCBTdGVwID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDUycHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDE2cHggMzJweCAzMnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjMDAwMDAwMzM7XG5gO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5gO1xuLy8gRVhURU5ESU5HIFNUWUxFU1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGNvbG9yOiAjNTUwMGZmO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1MDBmZjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5gO1xuXG5jb25zdCBCdXR0b25TZWN1bmRhcmlvID0gc3R5bGVkKEJ1dHRvbilgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1MDBmZjtcbiAgICBjb2xvcjogI2ZmZjtcbmA7XG5cbmNvbnN0IEJ1dHRvbkRlc2FjdGl2YWRvID0gc3R5bGVkKEJ1dHRvblNlY3VuZGFyaW8pYFxuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBwb2ludGVyLWV2ZW50czogJ25vbmUnO1xuYDtcblxuLy8gYW5pbWFjacOzblxuY29uc3QgZ2lyYSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgRGFWdWVsdGFzID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGFuaW1hdGlvbjogJHtnaXJhfSAxcyBsaW5lYXIgaW5maW5pdGU7XG5gO1xuXG4vLyBUSEVNRVxuXG5jb25zdCBDb25UaGVtZSA9IHN0eWxlZC5wYFxuICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByaW1hcnl9O1xuYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/UXVlIGVzIHN0eWxlZCBjb21wb25lbnRzPzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVzIHVuYSBsaWJyZXJpYSBxdWUgbm9zIHBlcm1pdGUgY3JlYXIgdW4gY29tcG9uZW50ZSBhbCBtaXNtbyB0aWVtcG8gcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmltb3Mgc3VzIGVzdGlsb3MgYSBwYXJ0aXIgZGUgY3VhbHF1aWVyIGV0aXF1ZXRhLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkNvbW8gbG8gaW5zdGFsYW1vcyA/IDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlVGFnPm5wbSBpbnN0YWxsIC0tc2F2ZSBzdHlsZWQtY29tcG9uZW50czwvQ29uc29sZVRhZz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRlbcOhcyBkZSBlc3RvIG5vcyBwZXJtaXRlIGVzY3JpYmlyIENTUyBjb21vIG5vcyBkaWN0byBlbCBncmFuIG9yYWN1bG8gVzNDLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+RGVmaW5pbW9zIHVuIG51ZXZvIGNvbXBvbmVudGUgeSBsZSBkYW1vcyBlc3RpbG9zLjwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YT48L0V0aXF1ZXRhPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkludGVncmFuZG8gcHJvcHM8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8RXRpcXVldGFDb25Qcm9wcyBvdmFsbz48L0V0aXF1ZXRhQ29uUHJvcHM+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT7Cv1BvZGVtb3MgZGFybGUgcHJvcHMgY29uIHVuIHZhbG9yIHkgY2FtYmlhciBzdSBlc3RhZG8gdmlzdWFsPzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YUNvblByb3BzQ29uVmFsb3IgcHJvcGllZGFkPXtmYWxzZX0+PC9FdGlxdWV0YUNvblByb3BzQ29uVmFsb3I+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT7Cv01hcyBkZSB1bmE/IDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5Tw60gdG9kYXMgbGFzIHF1ZSBxdWllcmFzPC9UZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhQ29uUHJvcHMgcHJvcGllZGFkPXtmYWxzZX0gYm9yZGU9e3RydWV9PjwvRXRpcXVldGFDb25Qcm9wcz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPEFjbGFyYWNpb25TdXBlckltcG9ydGFudGU+XG4gICAgICAgICAgICAgICAgICAgICAgICBObyBzZSBvbHZpZGVuIGRlIGxhIHNlbWFudGljYSAhISAtLi0geSBsYSBhY2Nlc2liaWxpZGFkIHF1ZSBwcm9wb3JjaW9uYSBjYWRhXG4gICAgICAgICAgICAgICAgICAgICAgICBldGlxdWV0YVxuICAgICAgICAgICAgICAgICAgICA8L0FjbGFyYWNpb25TdXBlckltcG9ydGFudGU+XG4gICAgICAgICAgICAgICAgICAgIDxhIGFsdD1cImVzdG8gZXMgdW4gbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RvIGVzIHVuIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1N1cGVyQ29wYWRvIGFsdD1cImVzdG8gZXMgdW4gbGlua1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RvIGVzIHVuIGxpbmtcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rU3VwZXJDb3BhZG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5Db21vIGV4dGVuZGVyIGVzdGlsb3MgZGUgdW4gY29tcG9uZW50ZSBwcmVkZXRlcm1pbmFkbzwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEltYWdpbmVtb3MgcXVlIHRlbmVtb3MgdmFyaW9zIGJvdG9uZXMgcGVybyBxdWVyZW1vcyBtYW50ZW5lciBudWVzdHJhIGd1aWEgZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGlsb3MgY29tbyBwb3IgZWplbXBsbyBhY3RpdmFkbyB5IGRlc2FjdGl2YWRvIHF1ZSBzaSBiaWVuIHRpZW5lbiBtdWNoYXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvc2FzIGVuIGNvbcO6biB0aWVuZW4gZGlmZXJlbnRlcyBjb2xvcmVzLCBwZXJvIHRvZG9zIHRpZW5lbiBhbGdvIGVuIGNvbcO6bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmEgZXNvIHV0aWxpemFtb3MgZXN0YSB0w6ljbmljYSBxdWUgc2UgbGxhbWEgPGI+RXh0ZW5kaW5nIFN0eWxlczwvYj4geSBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXNhIG1hbmVyYSBubyBjcmVhciBjb2RpZ28gbmkgY29tcG9uZW50ZXMgZGUgbcOhcy5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPkJvdG9uIGdlbmVyaWNvPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25TZWN1bmRhcmlvPkJvdG9uIHNlY3VuZGFyaW88L0J1dHRvblNlY3VuZGFyaW8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25EZXNhY3RpdmFkbz5Cb3RvbiBEZXNhY3RpdmFkbzwvQnV0dG9uRGVzYWN0aXZhZG8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGVuZ2Ftb3MgZW4gY3VlbnRhIHF1ZSBlc3RvIHRhbWJpZW4gcG9kZW1vcyBoYWNlcmxvIGRlc2RlIGxhcyBwcm9wcywgcGVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZXLDoSBkZWwgdXNvIHF1ZSBsZSBkZW1vcyB5IGVsIGN1YWwgcGVuc2Vtb3MgYSBsYSBob3JhIGRlIGRlc2Fycm9sbGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG51ZXN0cmEgaW50ZXJmYXouXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5BTklNQUNJT05FUyEhISEhISA6UCBYRCA9KTwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhheSBhbmltYWNpb25lcyBkZSBtdWNob3MgdGlwb3MgeSBzZSBwdWVkZW4gY29tYmluYXIgY29uIGxvIHRvZG8gbG8gYW50ZXJpb3JcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBwb2RlciB1dGlsaXphciBhbmltYWNpb25lcyB0aWVuZW4gcXVlIGltcG9ydGFyIHtrZXlmcmFtZXN9IGVuOlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgICAgICA8Q29uc29sZVRhZz5pbXBvcnQgc3R5bGVkLCBrZXlmcmFtZXMgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOzwvQ29uc29sZVRhZz5cbiAgICAgICAgICAgICAgICAgICAgPERhVnVlbHRhcz48L0RhVnVlbHRhcz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPiBubyBzZSBlbnZpY2llbjwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5VdGlsaXphbmRvIFRoZW1lJ3M8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBFc3RhIHRlY25pY2EgZXN0YSBidWVuYSBwYXJhIHRvbWFyIHZlbG9jaWRhZCBhbCBpZ3VhbCBxdWUgdXRpbGl6YXIgZ2xvYmFsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMsIGNvbW8gZWplcG1sbyBwdWVkZW4gcmV2aXNhciBlbCByZXBvIGRlIGFlcm9sYWIgcGVybyB2ZWFtb3MgdW4gZWptcGxvXG4gICAgICAgICAgICAgICAgICAgICAgICBhIGNvbnRpbnVhY2nDs24uXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5QYXJhIHV0aWxpemFybG8gZGViZW1vcyBsbGFtYXJsbyB0YW1iaWVuIGVuOjwvVGV4dG8+XG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlVGFnPmltcG9ydCBUaGVtZVByb3ZpZGVyIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJzs8L0NvbnNvbGVUYWc+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25UaGVtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RlIGVzIHVuIHRleHRvIGNvbiB0aGVtZS4gTm8gaGFjZSBmYWx0YSBpbnNlcnRhcmxvIGVuIGNhZGEgY29tcG9uZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlhIHF1ZSBlbCBUaGVtZVByb3ZpZGVyIGZ1bmNpb25hIGNvbW8gdW4gaGlnaCBvcmRlciBjb21wb25lbnQgcG9yIGxvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VhbCB0ZW5lbW9zIGxhIHZlbnRhamEgZGUgZGVjbGFyYXJsbyBlbiBudWVzdHJvIGFyY2hpdm8gZGUgaW5pY2lvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RvY3VtZW50IG8gY29tbyBub3NvdHJvcyBlbiB2aWV3cyBkaXNwb25lbW9zIGRlIHZhcmlvcyByZXBvcyBjb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWZlcmVudGVzIGVzdGlsb3MgcG9kcmlhbW9zIGRlY2xhcmFybG8gcG9yIHBhZ2UgeSBmdW5jaW9uYXJpYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0YW1lbnRlIGlndWFsIHNvbG8gZGViZXJpYW1vcyBkZWZpbmlyIGNhZGEgdGhlbWUgcGFyYSBjYWRhIHRlbXBsYXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdG8gbm9zIHZhIGEgZGFyIG11Y2hhIHZlbG9jaWRhZCB5YSBxdWUgbm8gZGViZXJlbW9zIHJlZXNjcmliaXIgZXN0aWxvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bWFkbyBhIGVzdG8gcG9kcmVtb3MgZ2VuZXJhciBxdWUgbnVlc3RyYSBsaWJyZXJpYSB2aWV3cyBzZWEgYXVuIG1hc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFnaWwgeWEgcXVlIHBvZHJlbW9zIHV0aWxpemFyIHVuYSBkZWZpbmljacOzbiBkZSBjb21wb25lbnRlIGVuIGRpZmVyZW50ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm95ZWN0b3MgbG9zIGN1YWxlcyBjYWRhIHVubyBwb3NlZXJhbiBzdSBwcm9waW8gdGhlbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29uVGhlbWU+XG4gICAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vTWFpbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHM0Q29udHJvbGxlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDI4cHg7XG4gICAgaGVpZ2h0OiA4OThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQczRDb250cm9sbGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1BzNENvbnRyb2xsZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1NlY3Rpb24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpdGxlMSA9IHN0eWxlZC5oMWBcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnIzAwMCcpfTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlMTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIEJsdWVwcmludH0gZnJvbSAnLi9CbHVlcHJpbnQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEJ1dHRvbn0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENvbnRhaW5lcn0gZnJvbSAnLi9Db250YWluZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEhlYWRlcn0gZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEZvb3Rlcn0gZnJvbSAnLi9Gb290ZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1haW59IGZyb20gJy4vTWFpbic7XG5leHBvcnQge2RlZmF1bHQgYXMgUHM0Q29udHJvbGxlcn0gZnJvbSAnLi9QczRDb250cm9sbGVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTZWN0aW9ufSBmcm9tICcuL1NlY3Rpb24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRpdGxlMX0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtCdXR0b24sIEhlYWRlciwgRm9vdGVyLCBNYWluLCBTZWN0aW9uLCBUaXRsZTF9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IEZvbnRzIGZyb20gJy4uLy4uL3V0aWxzL0ZvbnRzJztcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmZmZmYnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY2xhc3MgaW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBGb250cygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXItc2NhbGFibGU9MCwgaW5pdGlhbC1zY2FsZT0xLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWluaW11bS1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkF0aGFyb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNGRkZGRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWZyYW1lLmlvL3JlbGVhc2VzLzAuOS4yL2FmcmFtZS5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U3R5bGVkIGNvbXBvbmVudHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJjb25zdCB0aGVtZSA9IHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeTogJyM1NTAwRkYnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjRkZDOTNEJyxcbiAgICAgICAgZ3JheTogJyMwNTAwMzgnLFxuICAgICAgICBncmF5MjogJyM0MzQwNjMnLFxuICAgICAgICBtaWRMaWdodEdyYXk6ICcjRTBERkU4J1xuICAgIH0sXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgICBtb2JpbGU6ICdtYXgtd2lkdGg6IDEyNDBweCdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImNvbnN0IEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XG5cbmNvbnN0IEZvbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5ocmVmID1cbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjEwMCwxMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDcwMCw3MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCZzdWJzZXQ9bGF0aW4tZXh0JztcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBjb25zdCByb2JvdG8gPSBuZXcgRm9udEZhY2VPYnNlcnZlcignTGF0bycpO1xuXG4gICAgcm9ib3RvLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhdG8nKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9udGZhY2VvYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==