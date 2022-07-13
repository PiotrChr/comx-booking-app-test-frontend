"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcomx_booking_app_test_frontend"] = self["webpackChunkcomx_booking_app_test_frontend"] || []).push([["src_pages_Home_jsx"],{

/***/ "./src/pages/Home.jsx":
/*!****************************!*\
  !*** ./src/pages/Home.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.jsx\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.withRouter)(() => {\n  return 'Home';\n}));\n\n//# sourceURL=webpack://comx-booking-app-test-frontend/./src/pages/Home.jsx?");

/***/ }),

/***/ "./src/utils.jsx":
/*!***********************!*\
  !*** ./src/utils.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringifyParams\": function() { return /* binding */ stringifyParams; },\n/* harmony export */   \"withRouter\": function() { return /* binding */ withRouter; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst withRouter = Component => {\n  function ComponentWithRouterProp(props) {\n    let location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();\n    let navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();\n    let params = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, props, {\n      router: {\n        location,\n        navigate,\n        params\n      }\n    }));\n  }\n\n  return ComponentWithRouterProp;\n};\nconst stringifyParams = params => {\n  let pageParams = null;\n  let restParams = null;\n  const {\n    page,\n    ...rest\n  } = params;\n\n  if (page && Object.entries(page).length > 0) {\n    pageParams = Object.keys(page).reduce((string, paramName) => {\n      if (string.length > 0) {\n        string += '&';\n      }\n\n      string += \"page[\".concat(paramName, \"]=\").concat(page[paramName]);\n      return string;\n    }, '');\n  }\n\n  if (rest && Object.entries(rest).length > 0) {\n    restParams = query_string__WEBPACK_IMPORTED_MODULE_1__.stringify(rest);\n  }\n\n  if (pageParams || restParams) {\n    return '?' + [pageParams, restParams].filter(x => x).join('&');\n  }\n\n  return '';\n};\n\n//# sourceURL=webpack://comx-booking-app-test-frontend/./src/utils.jsx?");

/***/ })

}]);