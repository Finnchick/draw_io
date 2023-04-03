/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/Camera.js":
/*!**************************************!*\
  !*** ./public/javascripts/Camera.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\nclass Camera {\r\n    constructor(context, options) {\r\n        this.distance = (options === null || options === void 0 ? void 0 : options.distance) || 1000.0;\r\n        this.startingPosition = (options === null || options === void 0 ? void 0 : options.startingPosition) || [0, 0];\r\n        this.context = context;\r\n        this.fieldOfView = (options === null || options === void 0 ? void 0 : options.fieldOfView) || Math.PI / 4.0;\r\n        this.viewPort = {\r\n            left: 0,\r\n            right: 0,\r\n            top: 0,\r\n            bottom: 0,\r\n            width: 0,\r\n            height: 0,\r\n            scale: [(options === null || options === void 0 ? void 0 : options.scaleX) || 0, (options === null || options === void 0 ? void 0 : options.scaleY) || 0]\r\n        };\r\n        //debugger\r\n        this.init();\r\n    }\r\n    init() {\r\n        this.addListeners();\r\n        this.updateViewport();\r\n    }\r\n    begin() {\r\n        this.context.save();\r\n        this.applyTranslation();\r\n        this.applyScale();\r\n    }\r\n    end() {\r\n        this.context.restore();\r\n    }\r\n    applyScale() {\r\n        this.context.scale(this.viewPort.scale[0], this.viewPort.scale[1]);\r\n    }\r\n    drawCameraBorders() {\r\n        // this.context.beginPath()\r\n        // this.context.strokeStyle = 'black';\r\n        // this.context.lineWidth = 5;\r\n        // this.context.lineCap = 'round';\r\n        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);\r\n        this.context.beginPath();\r\n        this.context.fillStyle = 'black';\r\n        // this.context.fillRect(250,250,250,250);\r\n        // this.context.rect(250,250,250,250);\r\n        this.context.rect(this.viewPort.left, this.viewPort.top, this.viewPort.right - this.viewPort.left, this.viewPort.bottom - this.viewPort.top);\r\n        this.context.closePath();\r\n        this.context.stroke();\r\n        // this.context.moveTo(this.viewPort.left, this.viewPort.top);\r\n        // this.context.lineTo(this.viewPort.right, this.viewPort.top);\r\n        // this.context.lineTo(this.viewPort.right, this.viewPort.bottom);\r\n        // this.context.lineTo(this.viewPort.left, this.viewPort.bottom);\r\n        // debugger\r\n        // this.context.lineTo(this.viewPort.left, this.viewPort.top);\r\n        // this.context.stroke();\r\n    }\r\n    applyTranslation() {\r\n        this.context.translate(-this.viewPort.left, -this.viewPort.top); //pochemu tak?\r\n    }\r\n    updateViewport() {\r\n        this.aspectRatio = this.context.canvas.width / this.context.canvas.height;\r\n        this.viewPort.width = this.distance / Math.tan(this.fieldOfView);\r\n        this.viewPort.height = this.viewPort.width / this.aspectRatio;\r\n        this.viewPort.left = this.startingPosition[0] - (this.viewPort.width / 2); //Polnay hueta, kazhetsy nado menyat' na pole\r\n        this.viewPort.top = this.startingPosition[1] - (this.viewPort.height / 2);\r\n        this.viewPort.right = this.viewPort.left + this.viewPort.width;\r\n        this.viewPort.bottom = this.viewPort.top + this.viewPort.height;\r\n        this.viewPort.scale[0] = this.context.canvas.width / this.viewPort.width;\r\n        this.viewPort.scale[1] = this.context.canvas.height / this.viewPort.height;\r\n        this.drawCameraBorders();\r\n    }\r\n    addListeners() {\r\n        window.onwheel = (e) => {\r\n            debugger;\r\n            if (e.ctrlKey) {\r\n                debugger;\r\n                let zoomLevel = this.distance - (e.deltaY * 20);\r\n                if (zoomLevel <= 1) {\r\n                    zoomLevel = 1;\r\n                }\r\n                this.zoomTo(zoomLevel);\r\n            }\r\n            else {\r\n                const x = this.startingPosition[0] + (e.deltaX * 2);\r\n                const y = this.startingPosition[1] + (e.deltaY * 2);\r\n                this.moveTo(x, y);\r\n            }\r\n        };\r\n        window.addEventListener('keydown', (e) => {\r\n            if (e.ctrlKey) {\r\n                let zoomLevel = this.distance;\r\n                if (e.key === 'q') {\r\n                    zoomLevel = this.distance - 10;\r\n                    if (zoomLevel <= 1) {\r\n                        zoomLevel = 1;\r\n                    }\r\n                }\r\n                else if (e.key === 'y') {\r\n                    zoomLevel = this.distance + 10;\r\n                }\r\n                this.zoomTo(zoomLevel);\r\n            }\r\n        });\r\n        window.addEventListener('keydown', (e) => {\r\n            if (e.key === 'r') {\r\n                this.zoomTo(1000);\r\n                this.moveTo(0, 0);\r\n                debugger;\r\n            }\r\n        });\r\n        window.addEventListener('keydown', (e) => {\r\n            if (e.key === 'ArrowLeft') {\r\n                const x = this.startingPosition[0] - 10;\r\n                const y = this.startingPosition[1];\r\n                this.moveTo(x, y);\r\n            }\r\n            else if (e.key === 'ArrowRight') {\r\n                const x = this.startingPosition[0] + 10;\r\n                const y = this.startingPosition[1];\r\n                this.moveTo(x, y);\r\n            }\r\n            else if (e.key === 'ArrowUp') {\r\n                const x = this.startingPosition[0];\r\n                const y = this.startingPosition[1] - 10;\r\n                this.moveTo(x, y);\r\n            }\r\n            else if (e.key === 'ArrowDown') {\r\n                const x = this.startingPosition[0];\r\n                const y = this.startingPosition[1] + 10;\r\n                this.moveTo(x, y);\r\n            }\r\n        });\r\n    }\r\n    zoomTo(distance) {\r\n        this.distance = distance;\r\n        this.updateViewport();\r\n    }\r\n    moveTo(x, y) {\r\n        this.startingPosition[0] = x;\r\n        this.startingPosition[1] = y;\r\n        this.updateViewport();\r\n    }\r\n    screenToWorld(x, y) {\r\n        const obj = { x, y };\r\n        obj.x = (x / this.viewPort.scale[0]) + this.viewPort.left; //pochemu tak?\r\n        obj.y = (y / this.viewPort.scale[1]) + this.viewPort.top;\r\n        return obj;\r\n    }\r\n    worldToScreen(x, y) {\r\n        const obj = { x, y };\r\n        obj.x = (x / this.viewPort.scale[0]) + this.viewPort.left; //pochemu tak?\r\n        obj.y = (y / this.viewPort.scale[1]) + this.viewPort.top;\r\n        return obj;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/Camera.js?");

/***/ }),

/***/ "./public/javascripts/draw.js":
/*!************************************!*\
  !*** ./public/javascripts/draw.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Camera */ \"./public/javascripts/Camera.js\");\n\r\nconst canvas = document.querySelector('canvas');\r\nconst context = canvas.getContext('2d');\r\nconst nodes = [];\r\nconst camera = new _Camera__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, { startingPosition: [700, 250] });\r\nif (!canvas) {\r\n    throw new Error('no canvas');\r\n}\r\nif (!context) {\r\n    throw new Error('no context');\r\n}\r\nfunction resize() {\r\n    canvas.width = window.innerWidth;\r\n    canvas.height = window.innerHeight;\r\n    draw();\r\n}\r\nfunction draw() {\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n}\r\nlet lastPoint;\r\nfunction move(e) {\r\n    if (e.buttons) {\r\n        if (!lastPoint) {\r\n            const { x: xTarget, y: yTarget } = camera.worldToScreen(e.offsetX, e.offsetY);\r\n            lastPoint = { x: xTarget, y: yTarget };\r\n            return;\r\n        }\r\n        camera.begin();\r\n        context.beginPath();\r\n        const { x: xLast, y: yLast } = camera.worldToScreen(lastPoint.x, lastPoint.y);\r\n        // context.moveTo(xLast, yLast);\r\n        const { x: xTarget, y: yTarget } = camera.worldToScreen(e.offsetX, e.offsetY);\r\n        console.log('xLast ' + xLast + ' yLast ' + yLast + ' xTarget ' + xTarget + ' yTarget ' + yTarget + ' event x ' + e.offsetX + ' event y ' + e.offsetY);\r\n        context.lineTo(xTarget, yTarget);\r\n        context.strokeStyle = 'green';\r\n        context.lineWidth = 5;\r\n        context.lineCap = 'round';\r\n        context.stroke();\r\n        // lastPoint = { x: xTarget, y: yTarget };\r\n        //\tdebugger\r\n        camera.end();\r\n    }\r\n}\r\nfunction key(e) {\r\n    if (e.key === 'Backspace') {\r\n        context.clearRect(0, 0, canvas.width, canvas.height);\r\n    }\r\n}\r\nwindow.onkeydown = key;\r\nwindow.onmousemove = move;\r\nwindow.onresize = resize;\r\nresize();\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/draw.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/draw.js");
/******/ 	
/******/ })()
;