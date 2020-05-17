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
})(["align-items:center;background-color:#fff;border-bottom:2px solid #000;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between;padding:16px 24px;position:sticky;top:0px;width:100%;"]);

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
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Title1"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, "Atharot"), __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Title1"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, "AAG"));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/components/index.js");
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/Main/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BodyCircleLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__BodyCircleLeft",
  componentId: "sc-1h4u0uu-0"
})(["width:303px;height:303px;border:1px solid #fff;border-radius:50%;position:absolute;bottom:0;left:0;"]);
const BodyCircleRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__BodyCircleRight",
  componentId: "sc-1h4u0uu-1"
})(["width:303px;height:303px;border:1px solid #fff;border-radius:50%;position:absolute;bottom:0;right:0;"]);
const TouchPad = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__TouchPad",
  componentId: "sc-1h4u0uu-2"
})(["border-bottom-right-radius:8px;border-bottom-left-radius:8px;border-top-right-radius:4px;border-top-left-radius:4px;border:1px solid #fff;height:275px;width:485.5px;margin:auto;"]);
const TouchPadIn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__TouchPadIn",
  componentId: "sc-1h4u0uu-3"
})(["border-bottom-right-radius:8px;border-bottom-left-radius:8px;border-top-right-radius:2px;border-top-left-radius:2px;border:1px solid #fff;height:265px;width:475.5px;margin:2px auto 0px auto;"]);
const ArrowsCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__ArrowsCircle",
  componentId: "sc-1h4u0uu-4"
})(["width:343px;height:343px;border-radius:50%;border:1px solid #fff;position:absolute;left:50px;"]);
const ButtonsCircle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Main__ButtonsCircle",
  componentId: "sc-1h4u0uu-5"
})(["width:343px;height:343px;border-radius:50%;border:1px solid #fff;position:absolute;right:50px;"]);

class Main extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return __jsx(_index__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    });
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
    }, "Atharot")), __jsx(Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }), __jsx(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmx1ZXByaW50L0JsdWVwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbHVlcHJpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHM0Q29udHJvbGxlci9QczRDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BzNENvbnRyb2xsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUxL1RpdGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL0ZvbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbnRmYWNlb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmx1ZXByaW50Iiwic3R5bGVkIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIkNvbnRhaW5lciIsIkZvb3RlciIsImZvb3RlciIsImhlYWRlciIsIkhlYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsInJlbmRlciIsIkJvZHlDaXJjbGVMZWZ0IiwiQm9keUNpcmNsZVJpZ2h0IiwiVG91Y2hQYWQiLCJUb3VjaFBhZEluIiwiQXJyb3dzQ2lyY2xlIiwiQnV0dG9uc0NpcmNsZSIsIk1haW4iLCJQczRDb250cm9sbGVyIiwiU2VjdGlvbiIsInNlY3Rpb24iLCJUaXRsZTEiLCJoMSIsIkJvZHkiLCJib2R5IiwiaW5kZXgiLCJjb21wb25lbnREaWRNb3VudCIsIkZvbnRzIiwiRm9udEZhY2VPYnNlcnZlciIsInJlcXVpcmUiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsInJlbCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInJvYm90byIsImxvYWQiLCJ0aGVuIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFYO0FBRUFILFVBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxXQUFkLENBQTBCTixJQUExQjtBQUVBLFFBQU1PLE1BQU0sR0FBRyxJQUFJVCxnQkFBSixDQUFxQixNQUFyQixDQUFmO0FBRUFTLFFBQU0sQ0FBQ0MsSUFBUCxHQUFjQyxJQUFkLENBQW1CLE1BQU07QUFDckJSLFlBQVEsQ0FBQ1MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLE1BQXZDO0FBQ0gsR0FGRDtBQUdILENBYkQ7O0FBZWVmLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InN0YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBCbHVlcHJpbnQgPSBzdHlsZWQuZGl2YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTM1NjE7XG4gICAgcGFkZGluZzogMzJweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJsdWVwcmludDtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9CbHVlcHJpbnQnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYmFja2dyb3VuZENvbG9yID8gcHJvcHMuYmFja2dyb3VuZENvbG9yIDogJyNmZmYnKX07XG4gICAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5jb2xvciA/IGAxcHggc29saWQgJHtwcm9wcy5jb2xvcn1gIDogYDFweCBzb2xpZCAjMDAwYCl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwNTVmZjtcbiAgICAgICAgY29sb3I6ICMwMDU1ZmY7XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0J1dHRvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vQ29udGFpbmVyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYGA7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9Gb290ZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1RpdGxlMX0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFRpdGxlMT5BdGhhcm90PC9UaXRsZTE+XG4gICAgICAgICAgICAgICAgPFRpdGxlMT5BQUc8L1RpdGxlMT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0hlYWRlcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Qmx1ZXByaW50LCBDb250YWluZXIsIFRpdGxlMSwgUHM0Q29udHJvbGxlcn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBCb2R5Q2lyY2xlTGVmdCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDMwM3B4O1xuICAgIGhlaWdodDogMzAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgQm9keUNpcmNsZVJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMzAzcHg7XG4gICAgaGVpZ2h0OiAzMDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuYDtcbmNvbnN0IFRvdWNoUGFkID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGhlaWdodDogMjc1cHg7XG4gICAgd2lkdGg6IDQ4NS41cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuYDtcbmNvbnN0IFRvdWNoUGFkSW4gPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgaGVpZ2h0OiAyNjVweDtcbiAgICB3aWR0aDogNDc1LjVweDtcbiAgICBtYXJnaW46IDJweCBhdXRvIDBweCBhdXRvO1xuYDtcblxuY29uc3QgQXJyb3dzQ2lyY2xlID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMzQzcHg7XG4gICAgaGVpZ2h0OiAzNDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTBweDtcbmA7XG5cbmNvbnN0IEJ1dHRvbnNDaXJjbGUgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAzNDNweDtcbiAgICBoZWlnaHQ6IDM0M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbmA7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgey8qIDxCbHVlcHJpbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxQczRDb250cm9sbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93c0NpcmNsZT48L0Fycm93c0NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zQ2lyY2xlPjwvQnV0dG9uc0NpcmNsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VjaFBhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG91Y2hQYWRJbj48L1RvdWNoUGFkSW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RvdWNoUGFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9keUNpcmNsZVJpZ2h0PjwvQm9keUNpcmNsZVJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJvZHlDaXJjbGVMZWZ0PjwvQm9keUNpcmNsZUxlZnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvUHM0Q29udHJvbGxlcj5cbiAgICAgICAgICAgICAgICA8L0JsdWVwcmludD4gKi99XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vTWFpbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHM0Q29udHJvbGxlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDI4cHg7XG4gICAgaGVpZ2h0OiA4OThweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQczRDb250cm9sbGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1BzNENvbnRyb2xsZXInO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBgO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1NlY3Rpb24nO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpdGxlMSA9IHN0eWxlZC5oMWBcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNvbG9yID8gcHJvcHMuY29sb3IgOiAnIzAwMCcpfTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgZm9udC1mYW1pbHk6IExhdG87XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlMTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIEJsdWVwcmludH0gZnJvbSAnLi9CbHVlcHJpbnQnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEJ1dHRvbn0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIENvbnRhaW5lcn0gZnJvbSAnLi9Db250YWluZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEhlYWRlcn0gZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIEZvb3Rlcn0gZnJvbSAnLi9Gb290ZXInO1xuZXhwb3J0IHtkZWZhdWx0IGFzIE1haW59IGZyb20gJy4vTWFpbic7XG5leHBvcnQge2RlZmF1bHQgYXMgUHM0Q29udHJvbGxlcn0gZnJvbSAnLi9QczRDb250cm9sbGVyJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBTZWN0aW9ufSBmcm9tICcuL1NlY3Rpb24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFRpdGxlMX0gZnJvbSAnLi9UaXRsZTEnO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtCdXR0b24sIEhlYWRlciwgRm9vdGVyLCBNYWluLCBTZWN0aW9uLCBUaXRsZTF9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IEZvbnRzIGZyb20gJy4uLy4uL3V0aWxzL0ZvbnRzJztcblxuY29uc3QgQm9keSA9IHN0eWxlZC5ib2R5YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICcjZmZmZmZmJztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbmA7XG5cbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgRm9udHMoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1c2VyLXNjYWxhYmxlPTAsIGluaXRpYWwtc2NhbGU9MSwgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21pbmltdW0tc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoLCBoZWlnaHQ9ZGV2aWNlLWhlaWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiQXRoYXJvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxpY2F0aW9uLW5hbWVcIiBjb250ZW50PVwiQXRoYXJvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjRkZGRkZGXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FmcmFtZS5pby9yZWxlYXNlcy8wLjkuMi9hZnJhbWUubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkF0aGFyb3Q8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8Qm9keT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJjb25zdCBGb250RmFjZU9ic2VydmVyID0gcmVxdWlyZSgnZm9udGZhY2VvYnNlcnZlcicpO1xuXG5jb25zdCBGb250cyA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsuaHJlZiA9XG4gICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzoxMDAsMTAwaSwzMDAsMzAwaSw0MDAsNDAwaSw3MDAsNzAwaSw5MDAsOTAwaSZkaXNwbGF5PXN3YXAmc3Vic2V0PWxhdGluLWV4dCc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuXG4gICAgY29uc3Qgcm9ib3RvID0gbmV3IEZvbnRGYWNlT2JzZXJ2ZXIoJ0xhdG8nKTtcblxuICAgIHJvYm90by5sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsYXRvJyk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb250cztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvbnRmYWNlb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=