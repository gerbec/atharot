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

/***/ "./src/components/CircleEye/CircleEye.js":
/*!***********************************************!*\
  !*** ./src/components/CircleEye/CircleEye.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/CircleEye/CircleEye.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Eye = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CircleEye__Eye",
  componentId: "sc-17e1uzi-0"
})(["margin:auto;width:20px;height:20px;background-color:#fff;overflow:hidden;border-radius:50%;display:inline-block;margin:22px 5px;"]);
const Pupile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CircleEye__Pupile",
  componentId: "sc-17e1uzi-1"
})(["width:4px;height:4px;background-color:#000;border-radius:50%;margin:8px 4px;"]);

const CircleEye = () => {
  return __jsx(Eye, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(Pupile, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CircleEye);

/***/ }),

/***/ "./src/components/CircleEye/index.js":
/*!*******************************************!*\
  !*** ./src/components/CircleEye/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircleEye__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleEye */ "./src/components/CircleEye/CircleEye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CircleEye__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ "./src/components/index.js");
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/Main/Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__Container",
  componentId: "sc-1h4u0uu-0"
})(["height:100vh;width:100%;margin:auto;font-family:Arial,Helvetica,sans-serif;background-color:#000;overflow:hidden;"]);
const ThreePhanthoms = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__ThreePhanthoms",
  componentId: "sc-1h4u0uu-1"
})(["display:flex;flex-direction:row;justify-content:center;"]); // EXTENDING STYLES
// animación

const DaVueltas = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Main__DaVueltas",
  componentId: "sc-1h4u0uu-2"
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
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx(ThreePhanthoms, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Phantom"], {
      chColor: '#e05c5c',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Phantom"], {
      chColor: '#1c6aad',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), __jsx(_index__WEBPACK_IMPORTED_MODULE_3__["Phantom"], {
      chColor: '#e0ca5c',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
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

/***/ "./src/components/Phantom/Phantom.js":
/*!*******************************************!*\
  !*** ./src/components/Phantom/Phantom.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/components/index.js");
var _jsxFileName = "/Users/alejandro/Documents/Atharot/src/components/Phantom/Phantom.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const phantomWalk = styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
  from {
    background-position: 0px;
  }

  to {
    background-position: 26px 0px;
  }
`;
const Caracter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Phantom__Caracter",
  componentId: "fqd5f3-0"
})(["margin:8px;width:90px;overflow:hidden;"]);
const PhantomHead = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Phantom__PhantomHead",
  componentId: "fqd5f3-1"
})(["border-top-left-radius:90px;border-top-right-radius:90px;height:45px;width:90px;background-color:", ";margin:0px auto;"], props => props.colorized);
const PhantomBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Phantom__PhantomBody",
  componentId: "fqd5f3-2"
})(["height:30px;width:90px;margin:0px auto;background-color:", ";"], props => props.colorized);
const PhantomFooter = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Phantom__PhantomFooter",
  componentId: "fqd5f3-3"
})(["width:150px;height:27px;background:", ";background-size:26px 26px;background-repeat:repeat-x;animation:", " 0.5s linear infinite;"], props => props.colorized ? `linear-gradient(${props.colorized} 40%, rgba(255, 255, 255, 0) 0px) 0px 0px, radial-gradient(circle closest-side,  ${props.colorized} 100%, rgba(0, 0, 0, 0) 0) 100px 0px transparent` : `linear-gradient(#e05c5c 40%, rgba(255, 255, 255, 0) 0px) 0px 0px, radial-gradient(circle closest-side, #e05c5c 100%, rgba(0, 0, 0, 0) 0) 100px 0px transparent`, phantomWalk);
const Eyes = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Phantom__Eyes",
  componentId: "fqd5f3-4"
})([""]);

const Phantom = props => {
  const {
    chColor
  } = props;
  return __jsx(Caracter, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(PhantomHead, {
    colorized: chColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(Eyes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(___WEBPACK_IMPORTED_MODULE_2__["CircleEye"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }), __jsx(___WEBPACK_IMPORTED_MODULE_2__["CircleEye"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }))), __jsx(PhantomBody, {
    colorized: chColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(PhantomFooter, {
    colorized: chColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Phantom);

/***/ }),

/***/ "./src/components/Phantom/index.js":
/*!*****************************************!*\
  !*** ./src/components/Phantom/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Phantom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Phantom */ "./src/components/Phantom/Phantom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Phantom__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/*! exports provided: Blueprint, Button, Container, Header, Footer, Main, Phantom, Section, Title1, CircleEye */
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

/* harmony import */ var _Phantom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Phantom */ "./src/components/Phantom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Phantom", function() { return _Phantom__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Section */ "./src/components/Section/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return _Section__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Title1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Title1 */ "./src/components/Title1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title1", function() { return _Title1__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _CircleEye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CircleEye */ "./src/components/CircleEye/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleEye", function() { return _CircleEye__WEBPACK_IMPORTED_MODULE_9__["default"]; });












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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmx1ZXByaW50L0JsdWVwcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbHVlcHJpbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2lyY2xlRXllL0NpcmNsZUV5ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaXJjbGVFeWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGhhbnRvbS9QaGFudG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BoYW50b20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGl0bGUxL1RpdGxlMS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZTEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWVTdHlsZWRDb21wb25lbnRzLmpzIiwid2VicGFjazovLy8uL3V0aWxzL0ZvbnRzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvbnRmYWNlb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQmx1ZXByaW50Iiwic3R5bGVkIiwiZGl2IiwiQnV0dG9uIiwiYnV0dG9uIiwiRXllIiwiUHVwaWxlIiwiQ2lyY2xlRXllIiwiQ29udGFpbmVyIiwiRm9vdGVyIiwiZm9vdGVyIiwiaGVhZGVyIiwiSGVhZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJyZW5kZXIiLCJUaHJlZVBoYW50aG9tcyIsIkRhVnVlbHRhcyIsIk1haW4iLCJwaGFudG9tV2FsayIsImtleWZyYW1lcyIsIkNhcmFjdGVyIiwiUGhhbnRvbUhlYWQiLCJjb2xvcml6ZWQiLCJQaGFudG9tQm9keSIsIlBoYW50b21Gb290ZXIiLCJFeWVzIiwiUGhhbnRvbSIsImNoQ29sb3IiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlRpdGxlMSIsImgxIiwiY29sb3IiLCJCb2R5IiwiYm9keSIsImluZGV4IiwiY29tcG9uZW50RGlkTW91bnQiLCJGb250cyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImdyYXkiLCJncmF5MiIsIm1pZExpZ2h0R3JheSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJGb250RmFjZU9ic2VydmVyIiwicmVxdWlyZSIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwicmVsIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicm9ib3RvIiwibG9hZCIsInRoZW4iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBQWY7QUFLZUYsd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFB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LEdBQUcsSUFBSVQsZ0JBQUosQ0FBcUIsTUFBckIsQ0FBZjtBQUVBUyxRQUFNLENBQUNDLElBQVAsR0FBY0MsSUFBZCxDQUFtQixNQUFNO0FBQ3JCUixZQUFRLENBQUNTLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxNQUF2QztBQUNILEdBRkQ7QUFHSCxDQWJEOztBQWVleEIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEJsdWVwcmludCA9IHN0eWxlZC5kaXZgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzU2MTtcbiAgICBwYWRkaW5nOiAzMnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmx1ZXByaW50O1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0JsdWVwcmludCc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBgO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vQnV0dG9uJztcbiIsImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEV5ZSA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDIycHggNXB4O1xuYDtcblxuY29uc3QgUHVwaWxlID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogOHB4IDRweDtcbmA7XG5cbmNvbnN0IENpcmNsZUV5ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RXllPlxuICAgICAgICAgICAgPFB1cGlsZT48L1B1cGlsZT5cbiAgICAgICAgPC9FeWU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENpcmNsZUV5ZTtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9DaXJjbGVFeWUnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0NvbnRhaW5lcic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBgO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vRm9vdGVyJztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUaXRsZTF9IGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBgO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxDb250YWluZXI+PC9Db250YWluZXI+O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL0hlYWRlcic7XG4iLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzLCBUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vc3R5bGVzL3RoZW1lU3R5bGVkQ29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQaGFudG9tfSBmcm9tICcuLi9pbmRleCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgVGhyZWVQaGFudGhvbXMgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG4vLyBFWFRFTkRJTkcgU1RZTEVTXG5cbi8vIGFuaW1hY2nDs25cblxuY29uc3QgRGFWdWVsdGFzID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuYDtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8VGhyZWVQaGFudGhvbXM+XG4gICAgICAgICAgICAgICAgICAgIDxQaGFudG9tIGNoQ29sb3I9eycjZTA1YzVjJ30+PC9QaGFudG9tPlxuICAgICAgICAgICAgICAgICAgICA8UGhhbnRvbSBjaENvbG9yPXsnIzFjNmFhZCd9PjwvUGhhbnRvbT5cbiAgICAgICAgICAgICAgICAgICAgPFBoYW50b20gY2hDb2xvcj17JyNlMGNhNWMnfT48L1BoYW50b20+XG4gICAgICAgICAgICAgICAgPC9UaHJlZVBoYW50aG9tcz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImV4cG9ydCB7ZGVmYXVsdH0gZnJvbSAnLi9NYWluJztcbiIsImltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXMsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NpcmNsZUV5ZX0gZnJvbSAnLi4nO1xuXG5jb25zdCBwaGFudG9tV2FsayA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4O1xuICB9XG5cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI2cHggMHB4O1xuICB9XG5gO1xuY29uc3QgQ2FyYWN0ZXIgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbjogOHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgUGhhbnRvbUhlYWQgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDkwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDkwcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcml6ZWR9O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG5gO1xuY29uc3QgUGhhbnRvbUJvZHkgPSBzdHlsZWQuZGl2YFxuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcml6ZWR9O1xuYDtcbmNvbnN0IFBoYW50b21Gb290ZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+XG4gICAgICAgIHByb3BzLmNvbG9yaXplZFxuICAgICAgICAgICAgPyBgbGluZWFyLWdyYWRpZW50KCR7cHJvcHMuY29sb3JpemVkfSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMHB4KSAwcHggMHB4LCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSwgICR7cHJvcHMuY29sb3JpemVkfSAxMDAlLCByZ2JhKDAsIDAsIDAsIDApIDApIDEwMHB4IDBweCB0cmFuc3BhcmVudGBcbiAgICAgICAgICAgIDogYGxpbmVhci1ncmFkaWVudCgjZTA1YzVjIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwcHgpIDBweCAwcHgsIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlLCAjZTA1YzVjIDEwMCUsIHJnYmEoMCwgMCwgMCwgMCkgMCkgMTAwcHggMHB4IHRyYW5zcGFyZW50YH07XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGFuaW1hdGlvbjogJHtwaGFudG9tV2Fsa30gMC41cyBsaW5lYXIgaW5maW5pdGU7XG5gO1xuY29uc3QgRXllcyA9IHN0eWxlZC5kaXZgYDtcblxuY29uc3QgUGhhbnRvbSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHtjaENvbG9yfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJhY3Rlcj5cbiAgICAgICAgICAgIDxQaGFudG9tSGVhZCBjb2xvcml6ZWQ9e2NoQ29sb3J9PlxuICAgICAgICAgICAgICAgIDxFeWVzPlxuICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRXllPjwvQ2lyY2xlRXllPlxuICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlRXllPjwvQ2lyY2xlRXllPlxuICAgICAgICAgICAgICAgIDwvRXllcz5cbiAgICAgICAgICAgIDwvUGhhbnRvbUhlYWQ+XG4gICAgICAgICAgICA8UGhhbnRvbUJvZHkgY29sb3JpemVkPXtjaENvbG9yfT48L1BoYW50b21Cb2R5PlxuICAgICAgICAgICAgPFBoYW50b21Gb290ZXIgY29sb3JpemVkPXtjaENvbG9yfT48L1BoYW50b21Gb290ZXI+XG4gICAgICAgIDwvQ2FyYWN0ZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBoYW50b207XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vUGhhbnRvbSc7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYGA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iLCJleHBvcnQge2RlZmF1bHR9IGZyb20gJy4vU2VjdGlvbic7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGl0bGUxID0gc3R5bGVkLmgxYFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuY29sb3IgPyBwcm9wcy5jb2xvciA6ICcjMDAwJyl9O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LWZhbWlseTogTGF0bztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGl0bGUxO1xuIiwiZXhwb3J0IHtkZWZhdWx0fSBmcm9tICcuL1RpdGxlMSc7XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgQmx1ZXByaW50fSBmcm9tICcuL0JsdWVwcmludCc7XG5leHBvcnQge2RlZmF1bHQgYXMgQnV0dG9ufSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQge2RlZmF1bHQgYXMgQ29udGFpbmVyfSBmcm9tICcuL0NvbnRhaW5lcic7XG5leHBvcnQge2RlZmF1bHQgYXMgSGVhZGVyfSBmcm9tICcuL0hlYWRlcic7XG5leHBvcnQge2RlZmF1bHQgYXMgRm9vdGVyfSBmcm9tICcuL0Zvb3Rlcic7XG5leHBvcnQge2RlZmF1bHQgYXMgTWFpbn0gZnJvbSAnLi9NYWluJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBQaGFudG9tfSBmcm9tICcuL1BoYW50b20nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFNlY3Rpb259IGZyb20gJy4vU2VjdGlvbic7XG5leHBvcnQge2RlZmF1bHQgYXMgVGl0bGUxfSBmcm9tICcuL1RpdGxlMSc7XG5leHBvcnQge2RlZmF1bHQgYXMgQ2lyY2xlRXllfSBmcm9tICcuL0NpcmNsZUV5ZSc7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCwge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0J1dHRvbiwgSGVhZGVyLCBGb290ZXIsIE1haW4sIFNlY3Rpb24sIFRpdGxlMX0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgRm9udHMgZnJvbSAnLi4vLi4vdXRpbHMvRm9udHMnO1xuXG5jb25zdCBCb2R5ID0gc3R5bGVkLmJvZHlgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJyNmZmZmZmYnO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuYDtcblxuY2xhc3MgaW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBGb250cygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXItc2NhbGFibGU9MCwgaW5pdGlhbC1zY2FsZT0xLCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbWluaW11bS1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIGhlaWdodD1kZXZpY2UtaGVpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImFwcGxlLW1vYmlsZS13ZWItYXBwLXRpdGxlXCIgY29udGVudD1cIkF0aGFyb3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9XCJBdGhhcm90XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNGRkZGRkZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWZyYW1lLmlvL3JlbGVhc2VzLzAuOS4yL2FmcmFtZS5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+U3R5bGVkIGNvbXBvbmVudHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImNvbnN0IHRoZW1lID0ge1xuICAgIGNvbG9yczoge1xuICAgICAgICBwcmltYXJ5OiAnIzU1MDBGRicsXG4gICAgICAgIHNlY29uZGFyeTogJyNGRkM5M0QnLFxuICAgICAgICBncmF5OiAnIzA1MDAzOCcsXG4gICAgICAgIGdyYXkyOiAnIzQzNDA2MycsXG4gICAgICAgIG1pZExpZ2h0R3JheTogJyNFMERGRTgnXG4gICAgfSxcbiAgICByZXNwb25zaXZlOiB7XG4gICAgICAgIG1vYmlsZTogJ21heC13aWR0aDogMTI0MHB4J1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwiY29uc3QgRm9udEZhY2VPYnNlcnZlciA9IHJlcXVpcmUoJ2ZvbnRmYWNlb2JzZXJ2ZXInKTtcblxuY29uc3QgRm9udHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLmhyZWYgPVxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MTAwLDEwMGksMzAwLDMwMGksNDAwLDQwMGksNzAwLDcwMGksOTAwLDkwMGkmZGlzcGxheT1zd2FwJnN1YnNldD1sYXRpbi1leHQnO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcblxuICAgIGNvbnN0IHJvYm90byA9IG5ldyBGb250RmFjZU9ic2VydmVyKCdMYXRvJyk7XG5cbiAgICByb2JvdG8ubG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGF0bycpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9udHM7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb250ZmFjZW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9