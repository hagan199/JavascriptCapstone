"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjavascriptcapstone"] = self["webpackChunkjavascriptcapstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Courier New', Courier, monospace;\\n}\\n\\nbody {\\n  background-color: blueviolet;\\n  background-image: url('https://example.com/path/to/background/image.jpg');\\n  background-size: cover;\\n  background-position: center;\\n  background-blend-mode: multiply;\\n  background-repeat: no-repeat;\\n}\\n\\nheader {\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  position: fixed;\\n  display: flex;\\n  justify-content: end;\\n  gap: 3rem;\\n  color: rgb(240, 233, 233);\\n  padding: 1rem;\\n  background-color: #0e0202;\\n  cursor: pointer;\\n}\\n\\nheader img {\\n  width: 4rem;\\n  margin-right: auto;\\n  margin-left: 1rem;\\n  border-radius: 40px;\\n  transition: transform 0.3s ease-in-out;\\n}\\n\\nheader img:hover {\\n  transform: scale(1.2);\\n}\\n\\nheader:hover {\\n  background-color: #1d0606;\\n}\\n\\nheader h2 {\\n  margin: 0;\\n  padding: 10px;\\n  font-size: 16px;\\n}\\n\\nheader h2:hover {\\n  color: #f00; /* Example hover color */\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  gap: 80px;\\n  margin-top: 10rem;\\n  padding: 3rem;\\n}\\n\\nmain div {\\n  display: flex;\\n  flex-direction: column;\\n  box-shadow: rgba(0, 0, 0, 0.25) 1px 54px 55px, rgba(0, 0, 0, 0.12) 1px -12px 30px, rgba(0, 0, 0, 0.12) 1px 4px 6px, rgba(0, 0, 0, 0.17) 1px 12px 13px, rgba(0, 0, 0, 0.09) 1px -3px 5px;\\n  gap: 0.5rem;\\n  padding: 1rem;\\n}\\n\\nmain div span {\\n  font-size: 1.4rem;\\n  font-weight: 700;\\n}\\n\\nmain div button > i {\\n  float: right;\\n  margin-top: -2.1rem;\\n}\\n\\n.color-change {\\n  color: red;\\n  transition: color 1s ease;\\n}\\n\\nmain div span.likes {\\n  width: fit-content;\\n  margin-left: auto;\\n  margin-top: 2rem;\\n  margin-right: 2rem;\\n}\\n\\nmain div span.likes::after {\\n  content: ' likes';\\n  font-size: 0.8rem;\\n}\\n\\nfooter {\\n  padding: 0.5rem;\\n  opacity: 0.9;\\n  text-align: center;\\n}\\n\\nfooter p {\\n  font-weight: 500;\\n}\\n\\n.comment,\\n.reservation {\\n  border: none;\\n  padding: 1rem;\\n  text-decoration: none;\\n  margin: 0.5rem;\\n  color: white;\\n  font-weight: 500;\\n  font-size: 1.2rem;\\n}\\n\\nbutton.comment {\\n  background-color: #041905;\\n}\\n\\n.movie-info {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n  margin-top: -5rem;\\n}\\n\\n.movie-image {\\n  margin-top: 8rem;\\n  margin-right: 20px;\\n}\\n\\n.movie-details {\\n  display: block;\\n  width: 100%;\\n}\\n\\n.movie-details-flex {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  gap: 0.5rem;\\n  padding: 1rem;\\n}\\n\\n.movie-details-left {\\n  width: 40%;\\n  text-align: left;\\n}\\n\\n.movie-details-right {\\n  width: 40%;\\n  text-align: left;\\n}\\n\\n.movie-info .movie-summary {\\n  text-align: left;\\n  padding: 1rem;\\n  margin-left: 3rem;\\n  margin-right: 3rem;\\n}\\n\\n#comment-lists {\\n  text-align: left;\\n  margin-top: 0.5rem;\\n}\\n\\n.coment-item {\\n  padding: 0.5rem;\\n  background-color: #201515;\\n}\\n\\n.add-comment {\\n  margin-top: 1rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n}\\n\\n.add-comment .input-name {\\n  padding: 0.4rem;\\n  width: fit-content;\\n}\\n\\n.add-comment #user-comment {\\n  padding: 0.4rem;\\n  width: fit-content;\\n}\\n\\n.add-comment .btn-comment {\\n  padding: 0.4rem;\\n  width: fit-content;\\n}\\n\\n.diplayBlock {\\n  display: block;\\n}\\n\\n.testing {\\n  background-color: bisque;\\n  border: none;\\n}\\n\\n.fa-heart {\\n  font-size: 30px;\\n  color: bisque;\\n}\\n\\n.fa-solid,\\n.fas {\\n  font-weight: 900;\\n  color: bisque;\\n}\\n\\nmain div#2 {\\n  border: 1px solid red;\\n  background-color: #140707 !important;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascriptcapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_movieApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movieApi.js */ \"./src/modules/movieApi.js\");\n/* harmony import */ var _modules_Counters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Counters.js */ \"./src/modules/Counters.js\");\n\n\n\n\n\n\nconst renderMovies = (movies, likes) => {\n  const moviesContainer = document.querySelector('.movies-container');\n  movies.forEach(({ id, name, image,language, description,  }, index) => {\n    const movieCard = `\n      <div class=\"container\" id=${id}>\n      <img src=${image.medium}>\n      <span>${name}</span>\n      <span>Language: ${language}</span>\n      <span> Description: ${description}</span>\n      <button class=\"testing\">\n        <i class=\"fa-solid fa-heart\"></i>\n      </button>\n      <span class=\"likes\">${likes[index].likes}</span>\n      <button id=${id} class=\"comment\">Comments</button>\n      </div>`;\n    moviesContainer.innerHTML += movieCard;\n  });\n  document.querySelector('.movies-count').textContent = (0,_modules_Counters_js__WEBPACK_IMPORTED_MODULE_3__.countMovies)();\n};\n\nwindow.onload = async () => {\n  const movies = (await (0,_modules_movieApi_js__WEBPACK_IMPORTED_MODULE_2__.fetchAllMovies)()).splice(0, 9);\n  const likes = await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  renderMovies(movies, likes);\n  const commentBtns = document.querySelectorAll('.comment');\n  commentBtns.forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      const movieID = btn.getAttribute('id');\n      displayPopUp(movieID);\n    });\n  });\n};\n\ndocument.querySelector('main.movies-container').addEventListener('click', (event) => {\n  if (event.target.classList.contains('fa-heart')) {\n    // stylings of hurt\n    event.target.classList.add('color-change');\n    event.target.style.color = 'red';\n    event.target.style.fontSize = '2rem';\n    setTimeout(() => {\n      event.target.style.color = 'white';\n      event.target.style.fontSize = '1.5rem';\n    }, 500);\n    const { id } = event.target.parentElement.parentElement;\n    (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(`${id - 1}`);\n    const like = event.target.parentElement.nextElementSibling;\n    let noLike = event.target.parentElement.nextElementSibling.innerHTML;\n    noLike = `${Number(noLike) + 1}`;\n    like.innerHTML = noLike;\n  }\n});\n\n//# sourceURL=webpack://javascriptcapstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/Counters.js":
/*!*********************************!*\
  !*** ./src/modules/Counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countMovies: () => (/* binding */ countMovies)\n/* harmony export */ });\nconst countMovies = () => {\n  const moviesCount = document.querySelectorAll('.container').length;\n  return moviesCount;\n};\n\n\n\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/Counters.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   getLikes: () => (/* binding */ getLikes)\n/* harmony export */ });\nconst addLike = async (likeId) => {\n  await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/76pKaDmDMWX5au9eSHVx/likes/',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: `${likeId}`,\n      }),\n      headers: {\n        'content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n};\n\nconst getLikes = async () => {\n  const like = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/76pKaDmDMWX5au9eSHVx/likes/',\n    {\n      method: 'GET',\n      headers: {\n        'content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n\n  const result = await like.json();\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/movieApi.js":
/*!*********************************!*\
  !*** ./src/modules/movieApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAllMovies: () => (/* binding */ fetchAllMovies),\n/* harmony export */   fetchMovie: () => (/* binding */ fetchMovie)\n/* harmony export */ });\nconst fetchAllMovies = async () => {\n  try {\n    const submit = await fetch('https://api.tvmaze.com/shows');\n    if (!submit.ok) {\n      throw new Error('Failed to fetch movies');\n    }\n    const response = await submit.json();\n    return response;\n  } catch (error) {\n    console.error('Error fetching movies:', error);\n    return [];\n  }\n};\n\nconst fetchMovie = async (id) => {\n  try {\n    const submit = await fetch(`https://api.tvmaze.com/shows/${id}`);\n    if (!submit.ok) {\n      throw new Error('Failed to fetch movie');\n    }\n    const response = await submit.json();\n    return response;\n  } catch (error) {\n    console.error('Error fetching movie:', error);\n    return null;\n  }\n};\n\n\n\n\n//# sourceURL=webpack://javascriptcapstone/./src/modules/movieApi.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);