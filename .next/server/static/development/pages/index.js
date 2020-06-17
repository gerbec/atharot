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
})([""]);
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
})([""]);
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
})([""]);

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
        lineNumber: 13,
        columnNumber: 16
      }
    });
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



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Container",
  componentId: "sc-1h4u0uu-0"
})(["height:100vh;width:100%;margin:auto;font-family:Arial,Helvetica,sans-serif;background-color:#000;overflow:hidden;"]);
const move = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;}to{background-position:-2px -2px,-2px -2px,-1px 20px,-1px -1px;}"]);
const Floor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Floor",
  componentId: "sc-1h4u0uu-1"
})(["height:400px;width:25vw;margin:auto;background-color:#000;background-image:linear-gradient(cyan 0px,transparent 0px),linear-gradient(90deg,cyan 0px,transparent 0px),linear-gradient(cyan 1px,transparent 1px),linear-gradient(90deg,cyan 1px,transparent 1px);background-size:100px 100px,100px 100px,20px 20px,100px 100px;background-position:-2px -2px,-2px -2px,-1px -1px,-1px -1px;transform-style:preserve-3d;transform:perspective(125px) rotateX(45deg);animation:", " 0.5s linear infinite;"], move);
const Square = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Square",
  componentId: "sc-1h4u0uu-2"
})([""]); // EXTENDING STYLES
// animación

const DaVueltas = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__DaVueltas",
  componentId: "sc-1h4u0uu-3"
})(["width:64px;height:64px;background-color:red;"]);

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
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx(Floor, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, __jsx(Square, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    })));
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
/*! exports provided: Blueprint, Button, Container, Header, Footer, Main, Section, Title1 */
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

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Section */ "./src/components/Section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Title1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Title1 */ "./src/components/Title1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title1", function() { return _Title1__WEBPACK_IMPORTED_MODULE_7__["default"]; });










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




const Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.body.withConfig({
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
    }, "Styled components")), __jsx(Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmx1ZXByaW50L0JsdWVwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbHVlcHJpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUxL1RpdGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWVTdHlsZWRDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL0ZvbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbnRmYWNlb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmx1ZXByaW50Iiwic3R5bGVkIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwiQ29udGFpbmVyIiwiRm9vdGVyIiwiZm9vdGVyIiwiaGVhZGVyIiwiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJtb3ZlIiwia2V5ZnJhbWVzIiwiRmxvb3IiLCJTcXVhcmUiLCJEYVZ1ZWx0YXMiLCJNYWluIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJUaXRsZTEiLCJoMSIsImNvbG9yIiwiQm9keSIsImJvZHkiLCJpbmRleCIsImNvbXBvbmVudERpZE1vdW50IiwiRm9udHMiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJncmF5IiwiZ3JheTIiLCJtaWRMaWdodEdyYXkiLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiRm9udEZhY2VPYnNlcnZlciIsInJlcXVpcmUiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJvYm90byIsImxvYWQiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFB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QUdILENBYkQ7O0FBZWV4QixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQmx1ZXByaW50ID0gc3R5bGVkLmRpdmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzNTYxO1xuICAgIHBhZGRpbmc6IDMycHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCbHVlcHJpbnQ7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vQmx1ZXByaW50JztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYGA7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9CdXR0b24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0NvbnRhaW5lcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBgO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vRm9vdGVyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUaXRsZTF9IGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBgO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb250YWluZXI+PC9Db250YWluZXI+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0hlYWRlcic7XG4iLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lU3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IG1vdmUgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTJweCwgLTJweCAtMnB4LCAtMXB4IC0xcHgsIC0xcHggLTFweDtcbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMnB4IC0ycHgsIC0ycHggLTJweCwgLTFweCAyMHB4LCAtMXB4IC0xcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEZsb29yID0gc3R5bGVkLmRpdmBcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAyNXZ3O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChjeWFuIDBweCwgdHJhbnNwYXJlbnQgMHB4KSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCBjeWFuIDBweCwgdHJhbnNwYXJlbnQgMHB4KSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KGN5YW4gMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIGN5YW4gMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwcHgsIDEwMHB4IDEwMHB4LCAyMHB4IDIwcHgsIDEwMHB4IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0ycHggLTJweCwgLTJweCAtMnB4LCAtMXB4IC0xcHgsIC0xcHggLTFweDtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTI1cHgpIHJvdGF0ZVgoNDVkZWcpO1xuICAgIGFuaW1hdGlvbjogJHttb3ZlfSAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbmA7XG5jb25zdCBTcXVhcmUgPSBzdHlsZWQuZGl2YGA7XG4vLyBFWFRFTkRJTkcgU1RZTEVTXG5cbi8vIGFuaW1hY2nDs25cblxuY29uc3QgRGFWdWVsdGFzID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8Rmxvb3I+XG4gICAgICAgICAgICAgICAgICAgIDxTcXVhcmU+PC9TcXVhcmU+XG4gICAgICAgICAgICAgICAgPC9GbG9vcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9NYWluJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gYDtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9TZWN0aW9uJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZTEgPSBzdHlsZWQuaDFgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5jb2xvciA/IHByb3BzLmNvbG9yIDogJyMwMDAnKX07XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTE7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vVGl0bGUxJztcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBCbHVlcHJpbnR9IGZyb20gJy4vQmx1ZXByaW50JztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBCdXR0b259IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBDb250YWluZXJ9IGZyb20gJy4vQ29udGFpbmVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBIZWFkZXJ9IGZyb20gJy4vSGVhZGVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBGb290ZXJ9IGZyb20gJy4vRm9vdGVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBNYWlufSBmcm9tICcuL01haW4nO1xuXG5leHBvcnQge2RlZmF1bHQgYXMgU2VjdGlvbn0gZnJvbSAnLi9TZWN0aW9uJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBUaXRsZTF9IGZyb20gJy4vVGl0bGUxJztcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkLCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7QnV0dG9uLCBIZWFkZXIsIEZvb3RlciwgTWFpbiwgU2VjdGlvbiwgVGl0bGUxfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCBGb250cyBmcm9tICcuLi8uLi91dGlscy9Gb250cyc7XG5cbmNvbnN0IEJvZHkgPSBzdHlsZWQuYm9keWBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAnI2ZmZmZmZic7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG5gO1xuXG5jbGFzcyBpbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEZvbnRzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXNlci1zY2FsYWJsZT0wLCBpbml0aWFsLXNjYWxlPTEsICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtaW5pbXVtLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCwgaGVpZ2h0PWRldmljZS1oZWlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIkF0aGFyb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiIGNvbnRlbnQ9XCJ5ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtdGl0bGVcIiBjb250ZW50PVwiQXRoYXJvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsaWNhdGlvbi1uYW1lXCIgY29udGVudD1cIkF0aGFyb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiI0ZGRkZGRlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hZnJhbWUuaW8vcmVsZWFzZXMvMC45LjIvYWZyYW1lLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5TdHlsZWQgY29tcG9uZW50czwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiY29uc3QgdGhlbWUgPSB7XG4gICAgY29sb3JzOiB7XG4gICAgICAgIHByaW1hcnk6ICcjNTUwMEZGJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnI0ZGQzkzRCcsXG4gICAgICAgIGdyYXk6ICcjMDUwMDM4JyxcbiAgICAgICAgZ3JheTI6ICcjNDM0MDYzJyxcbiAgICAgICAgbWlkTGlnaHRHcmF5OiAnI0UwREZFOCdcbiAgICB9LFxuICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgbW9iaWxlOiAnbWF4LXdpZHRoOiAxMjQwcHgnXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJjb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZSgnZm9udGZhY2VvYnNlcnZlcicpO1xuXG5jb25zdCBGb250cyA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsuaHJlZiA9XG4gICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzoxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw3MDAsNzAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAmc3Vic2V0PWxhdGluLWV4dCc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgY29uc3Qgcm9ib3RvID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ0xhdG8nKTtcblxuICAgIHJvYm90by5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYXRvJyk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb250cztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvbnRmYWNlb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=