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
    }, "Es una libreria que nos permite crear un componente al mismo tiempo que definimos sus estilos.")), __jsx(Step, {
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
    }, "Adem\xE1s de esto nos permite escribir CSS como nos dicta the oracle W3C.")), __jsx(Step, {
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
    }, "este es un texto con theme. No hace falta insertarlo en cada componente ya que el ThemeProvider funciona como un high order component por lo cual tenemos la ventaja de declararlo en nuestro archivo de inicio _document o como nosotros en views disponemos de varios repos con diferentes estilos podriamos declararlo por page y funcionaria exactamente igual solo deberiamos definir cada theme para cada template. esto nos va a dar mucha velocidad ya que no deberemos reescribir estilos sumado a esto podremos generar que nuestra libreria views sea aun mas agil ya que podremos utilizar una definici\xF3n de componente en diferentes proyectos los cuales cada uno poseeran su propio theme"))), __jsx(Step, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }, __jsx(Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 21
      }
    }, " Styled compontents en typescript"), __jsx(Texto, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 21
      }
    }, ' ', "es similar lo unico que hay que tener en cuenta es q debemos definir el tipo en cada compoente o cada prop que le pasemos esta parte la voy a explicar con el repo de la nueva plataforma")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmx1ZXByaW50L0JsdWVwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbHVlcHJpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHM0Q29udHJvbGxlci9QczRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BzNENvbnRyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUxL1RpdGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWVTdHlsZWRDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL0ZvbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbnRmYWNlb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmx1ZXByaW50Iiwic3R5bGVkIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkNvbnRhaW5lciIsIkZvb3RlciIsImZvb3RlciIsImhlYWRlciIsIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsIkV0aXF1ZXRhIiwiRXRpcXVldGFDb25Qcm9wcyIsIm92YWxvIiwiRXRpcXVldGFDb25Qcm9wc0NvblZhbG9yIiwicHJvcGllZGFkIiwiYm9yZGUiLCJUaXRsZSIsImgzIiwiVGV4dG8iLCJwIiwiQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZSIsIkxpbmtTdXBlckNvcGFkbyIsImEiLCJDb25zb2xlVGFnIiwiU3RlcCIsIkJ1dHRvblNlY3VuZGFyaW8iLCJCdXR0b25EZXNhY3RpdmFkbyIsImdpcmEiLCJrZXlmcmFtZXMiLCJEYVZ1ZWx0YXMiLCJDb25UaGVtZSIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIk1haW4iLCJQczRDb250cm9sbGVyIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJUaXRsZTEiLCJoMSIsIkJvZHkiLCJpbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiRm9udHMiLCJzZWNvbmRhcnkiLCJncmF5IiwiZ3JheTIiLCJtaWRMaWdodEdyYXkiLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiRm9udEZhY2VPYnNlcnZlciIsInJlcXVpcmUiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJvYm90byIsImxvYWQiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhDQUFmO0FBS2VGLHdFQUFmLEU7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBOzs7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SUFBSVQsZ0JBQUosQ0FBcUIsTUFBckIsQ0FBZjtBQUVBUyxRQUFNLENBQUNDLElBQVAsR0FBY0MsSUFBZCxDQUFtQixNQUFNO0FBQ3JCUixZQUFRLENBQUNTLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxNQUF2QztBQUNILEdBRkQ7QUFHSCxDQWJEOztBQWVlckIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJsdWVwcmludCA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzU2MTtcbiAgICBwYWRkaW5nOiAzMnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmx1ZXByaW50O1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0JsdWVwcmludCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgPyBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgOiAnI2ZmZicpfTtcbiAgICBib3JkZXI6ICR7cHJvcHMgPT4gKHByb3BzLmNvbG9yID8gYDFweCBzb2xpZCAke3Byb3BzLmNvbG9yfWAgOiBgMXB4IHNvbGlkICMwMDBgKX07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA1NWZmO1xuICAgICAgICBjb2xvcjogIzAwNTVmZjtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vQnV0dG9uJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9Db250YWluZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEZvb3RlciA9IHN0eWxlZC5mb290ZXJgYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0Zvb3Rlcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VGl0bGUxfSBmcm9tICcuLi9pbmRleCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5oZWFkZXJgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG5gO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFRpdGxlMT5TdHlsZWQgY29tcG9uZW50czwvVGl0bGUxPlxuICAgICAgICAgICAgICAgIDxUaXRsZTE+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3N0eWxlZC1jb21wb25lbnRzLmNvbS9cIj5odHRwczovL3N0eWxlZC1jb21wb25lbnRzLmNvbS88L2E+XG4gICAgICAgICAgICAgICAgPC9UaXRsZTE+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9IZWFkZXInO1xuIiwiaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lcywgVGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZVN0eWxlZENvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gQkFTSUMgU1RZTEVTXG5jb25zdCBFdGlxdWV0YSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTAwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbmA7XG5cbmNvbnN0IEV0aXF1ZXRhQ29uUHJvcHMgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAkeyhwcm9wcykgPT4gKHByb3BzLm92YWxvID8gJzEyOHB4JyA6ICc2NHB4Jyl9O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUwMGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuYDtcblxuY29uc3QgRXRpcXVldGFDb25Qcm9wc0NvblZhbG9yID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogJHsocHJvcHMpID0+IChwcm9wcy5vdmFsbyA/ICcxMjhweCcgOiAnNjRweCcpfTtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IChwcm9wcy5wcm9waWVkYWQgPyAnYmx1ZScgOiAncmVkJyl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyOiAkeyhwcm9wcykgPT4gKHByb3BzLmJvcmRlID8gJzNweCBzb2xpZCAjMDAwJyA6ICdub25lJyl9O1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuY29uc3QgVGV4dG8gPSBzdHlsZWQucGBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbmA7XG5cbmNvbnN0IEFjbGFyYWNpb25TdXBlckltcG9ydGFudGUgPSBzdHlsZWQucGBcbiAgICBjb2xvcjogcmVkO1xuYDtcblxuY29uc3QgTGlua1N1cGVyQ29wYWRvID0gc3R5bGVkLmFgXG4gICAgY29sb3I6IGJsdWU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuYDtcbmNvbnN0IENvbnNvbGVUYWcgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbmA7XG5cbmNvbnN0IFN0ZXAgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogNTJweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZzogMTZweCAzMnB4IDMycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4ICMwMDAwMDAzMztcbmA7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbmA7XG4vLyBFWFRFTkRJTkcgU1RZTEVTXG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgY29sb3I6ICM1NTAwZmY7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTUwMGZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbmA7XG5cbmNvbnN0IEJ1dHRvblNlY3VuZGFyaW8gPSBzdHlsZWQoQnV0dG9uKWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTUwMGZmO1xuICAgIGNvbG9yOiAjZmZmO1xuYDtcblxuY29uc3QgQnV0dG9uRGVzYWN0aXZhZG8gPSBzdHlsZWQoQnV0dG9uU2VjdW5kYXJpbylgXG4gICAgb3BhY2l0eTogMC41O1xuICAgIHBvaW50ZXItZXZlbnRzOiAnbm9uZSc7XG5gO1xuXG4vLyBhbmltYWNpw7NuXG5jb25zdCBnaXJhID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBEYVZ1ZWx0YXMgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYW5pbWF0aW9uOiAke2dpcmF9IDFzIGxpbmVhciBpbmZpbml0ZTtcbmA7XG5cbi8vIFRIRU1FXG5cbmNvbnN0IENvblRoZW1lID0gc3R5bGVkLnBgXG4gICAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMucHJpbWFyeX07XG5gO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+wr9RdWUgZXMgc3R5bGVkIGNvbXBvbmVudHM/PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXMgdW5hIGxpYnJlcmlhIHF1ZSBub3MgcGVybWl0ZSBjcmVhciB1biBjb21wb25lbnRlIGFsIG1pc21vIHRpZW1wbyBxdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmluaW1vcyBzdXMgZXN0aWxvcy5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5Db21vIGxvIGluc3RhbGFtb3MgPyA8L1RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8Q29uc29sZVRhZz5ucG0gaW5zdGFsbCAtLXNhdmUgc3R5bGVkLWNvbXBvbmVudHM8L0NvbnNvbGVUYWc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZW3DoXMgZGUgZXN0byBub3MgcGVybWl0ZSBlc2NyaWJpciBDU1MgY29tbyBub3MgZGljdGEgdGhlIG9yYWNsZSBXM0MuXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuXG4gICAgICAgICAgICAgICAgPFN0ZXA+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZT5EZWZpbmltb3MgdW4gbnVldm8gY29tcG9uZW50ZSB5IGxlIGRhbW9zIGVzdGlsb3MuPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhPjwvRXRpcXVldGE+XG4gICAgICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+SW50ZWdyYW5kbyBwcm9wczwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxFdGlxdWV0YUNvblByb3BzIG92YWxvPjwvRXRpcXVldGFDb25Qcm9wcz5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/UG9kZW1vcyBkYXJsZSBwcm9wcyBjb24gdW4gdmFsb3IgeSBjYW1iaWFyIHN1IGVzdGFkbyB2aXN1YWw/PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPEV0aXF1ZXRhQ29uUHJvcHNDb25WYWxvciBwcm9waWVkYWQ9e2ZhbHNlfT48L0V0aXF1ZXRhQ29uUHJvcHNDb25WYWxvcj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPsK/TWFzIGRlIHVuYT8gPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlPDrSB0b2RhcyBsYXMgcXVlIHF1aWVyYXM8L1RleHRvPlxuICAgICAgICAgICAgICAgICAgICA8RXRpcXVldGFDb25Qcm9wcyBwcm9waWVkYWQ9e2ZhbHNlfSBib3JkZT17dHJ1ZX0+PC9FdGlxdWV0YUNvblByb3BzPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8QWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHNlIG9sdmlkZW4gZGUgbGEgc2VtYW50aWNhICEhIC0uLSB5IGxhIGFjY2VzaWJpbGlkYWQgcXVlIHByb3BvcmNpb25hIGNhZGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0aXF1ZXRhXG4gICAgICAgICAgICAgICAgICAgIDwvQWNsYXJhY2lvblN1cGVySW1wb3J0YW50ZT5cbiAgICAgICAgICAgICAgICAgICAgPGEgYWx0PVwiZXN0byBlcyB1biBsaW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdG8gZXMgdW4gbGlua1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rU3VwZXJDb3BhZG8gYWx0PVwiZXN0byBlcyB1biBsaW5rXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdG8gZXMgdW4gbGlua1xuICAgICAgICAgICAgICAgICAgICA8L0xpbmtTdXBlckNvcGFkbz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkNvbW8gZXh0ZW5kZXIgZXN0aWxvcyBkZSB1biBjb21wb25lbnRlIHByZWRldGVybWluYWRvPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2luZW1vcyBxdWUgdGVuZW1vcyB2YXJpb3MgYm90b25lcyBwZXJvIHF1ZXJlbW9zIG1hbnRlbmVyIG51ZXN0cmEgZ3VpYSBkZVxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0aWxvcyBjb21vIHBvciBlamVtcGxvIGFjdGl2YWRvIHkgZGVzYWN0aXZhZG8gcXVlIHNpIGJpZW4gdGllbmVuIG11Y2hhc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29zYXMgZW4gY29tw7puIHRpZW5lbiBkaWZlcmVudGVzIGNvbG9yZXMsIHBlcm8gdG9kb3MgdGllbmVuIGFsZ28gZW4gY29tw7puLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYSBlc28gdXRpbGl6YW1vcyBlc3RhIHTDqWNuaWNhIHF1ZSBzZSBsbGFtYSA8Yj5FeHRlbmRpbmcgU3R5bGVzPC9iPiB5IGRlXG4gICAgICAgICAgICAgICAgICAgICAgICBlc2EgbWFuZXJhIG5vIGNyZWFyIGNvZGlnbyBuaSBjb21wb25lbnRlcyBkZSBtw6FzLlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+Qm90b24gZ2VuZXJpY288L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblNlY3VuZGFyaW8+Qm90b24gc2VjdW5kYXJpbzwvQnV0dG9uU2VjdW5kYXJpbz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRlc2FjdGl2YWRvPkJvdG9uIERlc2FjdGl2YWRvPC9CdXR0b25EZXNhY3RpdmFkbz5cblxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBUZW5nYW1vcyBlbiBjdWVudGEgcXVlIGVzdG8gdGFtYmllbiBwb2RlbW9zIGhhY2VybG8gZGVzZGUgbGFzIHByb3BzLCBwZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlcsOhIGRlbCB1c28gcXVlIGxlIGRlbW9zIHkgZWwgY3VhbCBwZW5zZW1vcyBhIGxhIGhvcmEgZGUgZGVzYXJyb2xsYVxuICAgICAgICAgICAgICAgICAgICAgICAgbnVlc3RyYSBpbnRlcmZhei5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPkFOSU1BQ0lPTkVTISEhISEhIDpQIFhEID0pPC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgaGF5IGFuaW1hY2lvbmVzIGRlIG11Y2hvcyB0aXBvcyB5IHNlIHB1ZWRlbiBjb21iaW5hciBjb24gbG8gdG9kbyBsbyBhbnRlcmlvclxuICAgICAgICAgICAgICAgICAgICA8L1RleHRvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhIHBvZGVyIHV0aWxpemFyIGFuaW1hY2lvbmVzIHRpZW5lbiBxdWUgaW1wb3J0YXIge2tleWZyYW1lc30gZW46XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dG8+XG4gICAgICAgICAgICAgICAgICAgIDxDb25zb2xlVGFnPmltcG9ydCBzdHlsZWQsIGtleWZyYW1lcyBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7PC9Db25zb2xlVGFnPlxuICAgICAgICAgICAgICAgICAgICA8RGFWdWVsdGFzPjwvRGFWdWVsdGFzPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dG8+IG5vIHNlIGVudmljaWVuPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG5cbiAgICAgICAgICAgICAgICA8U3RlcD5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlPlV0aWxpemFuZG8gVGhlbWUnczwvVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVzdGEgdGVjbmljYSBlc3RhIGJ1ZW5hIHBhcmEgdG9tYXIgdmVsb2NpZGFkIGFsIGlndWFsIHF1ZSB1dGlsaXphciBnbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcywgY29tbyBlamVwbWxvIHB1ZWRlbiByZXZpc2FyIGVsIHJlcG8gZGUgYWVyb2xhYiBwZXJvIHZlYW1vcyB1biBlam1wbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGEgY29udGludWFjacOzbi5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlBhcmEgdXRpbGl6YXJsbyBkZWJlbW9zIGxsYW1hcmxvIHRhbWJpZW4gZW46PC9UZXh0bz5cbiAgICAgICAgICAgICAgICAgICAgPENvbnNvbGVUYWc+aW1wb3J0IFRoZW1lUHJvdmlkZXIgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnOzwvQ29uc29sZVRhZz5cblxuICAgICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvblRoZW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdGUgZXMgdW4gdGV4dG8gY29uIHRoZW1lLiBObyBoYWNlIGZhbHRhIGluc2VydGFybG8gZW4gY2FkYSBjb21wb25lbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWEgcXVlIGVsIFRoZW1lUHJvdmlkZXIgZnVuY2lvbmEgY29tbyB1biBoaWdoIG9yZGVyIGNvbXBvbmVudCBwb3IgbG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdWFsIHRlbmVtb3MgbGEgdmVudGFqYSBkZSBkZWNsYXJhcmxvIGVuIG51ZXN0cm8gYXJjaGl2byBkZSBpbmljaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZG9jdW1lbnQgbyBjb21vIG5vc290cm9zIGVuIHZpZXdzIGRpc3BvbmVtb3MgZGUgdmFyaW9zIHJlcG9zIGNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmVyZW50ZXMgZXN0aWxvcyBwb2RyaWFtb3MgZGVjbGFyYXJsbyBwb3IgcGFnZSB5IGZ1bmNpb25hcmlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RhbWVudGUgaWd1YWwgc29sbyBkZWJlcmlhbW9zIGRlZmluaXIgY2FkYSB0aGVtZSBwYXJhIGNhZGEgdGVtcGxhdGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0byBub3MgdmEgYSBkYXIgbXVjaGEgdmVsb2NpZGFkIHlhIHF1ZSBubyBkZWJlcmVtb3MgcmVlc2NyaWJpciBlc3RpbG9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtYWRvIGEgZXN0byBwb2RyZW1vcyBnZW5lcmFyIHF1ZSBudWVzdHJhIGxpYnJlcmlhIHZpZXdzIHNlYSBhdW4gbWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdpbCB5YSBxdWUgcG9kcmVtb3MgdXRpbGl6YXIgdW5hIGRlZmluaWNpw7NuIGRlIGNvbXBvbmVudGUgZW4gZGlmZXJlbnRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3llY3RvcyBsb3MgY3VhbGVzIGNhZGEgdW5vIHBvc2VlcmFuIHN1IHByb3BpbyB0aGVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db25UaGVtZT5cbiAgICAgICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvU3RlcD5cblxuICAgICAgICAgICAgICAgIDxTdGVwPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+IFN0eWxlZCBjb21wb250ZW50cyBlbiB0eXBlc2NyaXB0PC9UaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRvPlxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzIHNpbWlsYXIgbG8gdW5pY28gcXVlIGhheSBxdWUgdGVuZXIgZW4gY3VlbnRhIGVzIHEgZGViZW1vcyBkZWZpbmlyIGVsIHRpcG9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuIGNhZGEgY29tcG9lbnRlIG8gY2FkYSBwcm9wIHF1ZSBsZSBwYXNlbW9zIGVzdGEgcGFydGUgbGEgdm95IGEgZXhwbGljYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbiBlbCByZXBvIGRlIGxhIG51ZXZhIHBsYXRhZm9ybWFcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0bz5cbiAgICAgICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vTWFpbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHM0Q29udHJvbGxlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDI4cHg7XG4gICAgaGVpZ2h0OiA4OThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQczRDb250cm9sbGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1BzNENvbnRyb2xsZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1NlY3Rpb24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpdGxlMSA9IHN0eWxlZC5oMWBcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnIzAwMCcpfTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlMTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIEJsdWVwcmludH0gZnJvbSAnLi9CbHVlcHJpbnQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEJ1dHRvbn0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENvbnRhaW5lcn0gZnJvbSAnLi9Db250YWluZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEhlYWRlcn0gZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEZvb3Rlcn0gZnJvbSAnLi9Gb290ZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1haW59IGZyb20gJy4vTWFpbic7XG5leHBvcnQge2RlZmF1bHQgYXMgUHM0Q29udHJvbGxlcn0gZnJvbSAnLi9QczRDb250cm9sbGVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTZWN0aW9ufSBmcm9tICcuL1NlY3Rpb24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRpdGxlMX0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtCdXR0b24sIEhlYWRlciwgRm9vdGVyLCBNYWluLCBTZWN0aW9uLCBUaXRsZTF9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IEZvbnRzIGZyb20gJy4uLy4uL3V0aWxzL0ZvbnRzJztcblxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmZmZmYnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY2xhc3MgaW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBGb250cygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXItc2NhbGFibGU9MCwgaW5pdGlhbC1zY2FsZT0xLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWluaW11bS1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkF0aGFyb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNGRkZGRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWZyYW1lLmlvL3JlbGVhc2VzLzAuOS4yL2FmcmFtZS5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U3R5bGVkIGNvbXBvbmVudHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJjb25zdCB0aGVtZSA9IHtcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeTogJyM1NTAwRkYnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjRkZDOTNEJyxcbiAgICAgICAgZ3JheTogJyMwNTAwMzgnLFxuICAgICAgICBncmF5MjogJyM0MzQwNjMnLFxuICAgICAgICBtaWRMaWdodEdyYXk6ICcjRTBERkU4J1xuICAgIH0sXG4gICAgcmVzcG9uc2l2ZToge1xuICAgICAgICBtb2JpbGU6ICdtYXgtd2lkdGg6IDEyNDBweCdcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImNvbnN0IEZvbnRGYWNlT2JzZXJ2ZXIgPSByZXF1aXJlKCdmb250ZmFjZW9ic2VydmVyJyk7XG5cbmNvbnN0IEZvbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5ocmVmID1cbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjEwMCwxMDBpLDMwMCwzMDBpLDQwMCw0MDBpLDcwMCw3MDBpLDkwMCw5MDBpJmRpc3BsYXk9c3dhcCZzdWJzZXQ9bGF0aW4tZXh0JztcbiAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICBjb25zdCByb2JvdG8gPSBuZXcgRm9udEZhY2VPYnNlcnZlcignTGF0bycpO1xuXG4gICAgcm9ib3RvLmxvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xhdG8nKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvbnRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZm9udGZhY2VvYnNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==