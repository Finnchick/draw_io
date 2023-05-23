/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	'use strict'
  /******/ 	const __webpack_modules__ = ({

    /***/ './public/javascripts/Sidebar.js':
    /*! ***************************************!*\
  !*** ./public/javascripts/Sidebar.js ***!
  \***************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\nclass Sidebar {\r\n    constructor() {\r\n        this.initSidebar();\r\n    }\r\n    initSidebar() {\r\n        this.menuContainer = document.getElementById('sidebar');\r\n        const radios = this.menuContainer.querySelectorAll('input');\r\n        this.selectedType = 'line';\r\n        radios.forEach((radio) => {\r\n            radio.addEventListener('change', (event) => {\r\n                this.selectItem(event.currentTarget.value);\r\n            });\r\n        });\r\n    }\r\n    selectItem(selectedType) {\r\n        this.selectedType = selectedType;\r\n    }\r\n    get getSelectedType() {\r\n        return this.selectedType;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/Sidebar.js?")
      /***/ },

    /***/ './public/javascripts/draw.js':
    /*! ************************************!*\
  !*** ./public/javascripts/draw.js ***!
  \************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawingObjects_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawingObjects/Canvas */ \"./public/javascripts/drawingObjects/Canvas.js\");\n/* harmony import */ var _drawingObjects_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawingObjects/Line */ \"./public/javascripts/drawingObjects/Line.js\");\n/* harmony import */ var _drawingObjects_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawingObjects/Circle */ \"./public/javascripts/drawingObjects/Circle.js\");\n/* harmony import */ var _drawingObjects_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawingObjects/Rectangle */ \"./public/javascripts/drawingObjects/Rectangle.js\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar */ \"./public/javascripts/Sidebar.js\");\n\r\n\r\n\r\n\r\n\r\nconst canvas = new _drawingObjects_Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas();\r\nconst sideBar = new _Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar();\r\nlet firstClick = null;\r\nlet currentObject = null;\r\nlet selectedObject = null;\r\nconst typeCreatorMap = {\r\n    line: createLine,\r\n    circle: createCircle,\r\n    rectangle: createRectangle\r\n}; // convert to ENUM\r\nfunction createFigure(event) {\r\n    if (event.which === 1) {\r\n        const type = sideBar.getSelectedType;\r\n        typeCreatorMap[type](event);\r\n    }\r\n}\r\nfunction createLine(event) {\r\n    if (firstClick === null) {\r\n        firstClick = {\r\n            x: event.offsetX,\r\n            y: event.offsetY\r\n        };\r\n    }\r\n    else {\r\n        const secondClick = {\r\n            x: event.offsetX,\r\n            y: event.offsetY\r\n        };\r\n        const line = new _drawingObjects_Line__WEBPACK_IMPORTED_MODULE_1__.Line();\r\n        line.create(firstClick, secondClick);\r\n        canvas.addObject(line);\r\n        firstClick = null;\r\n    }\r\n}\r\nfunction createRectangle(event) {\r\n    if (firstClick === null) {\r\n        firstClick = {\r\n            x: event.offsetX,\r\n            y: event.offsetY\r\n        };\r\n    }\r\n    else {\r\n        const secondClick = {\r\n            x: event.offsetX,\r\n            y: event.offsetY\r\n        };\r\n        const rectangle = new _drawingObjects_Rectangle__WEBPACK_IMPORTED_MODULE_3__.Rectangle();\r\n        rectangle.create(firstClick, secondClick);\r\n        canvas.addObject(rectangle);\r\n        firstClick = null;\r\n    }\r\n}\r\nfunction createCircle(event) {\r\n    const firstClick = {\r\n        x: event.offsetX,\r\n        y: event.offsetY\r\n    };\r\n    const circle = new _drawingObjects_Circle__WEBPACK_IMPORTED_MODULE_2__.Circle();\r\n    circle.create(firstClick);\r\n    canvas.addObject(circle);\r\n}\r\nfunction clearCanvas(event) {\r\n    if (event.which === 2) {\r\n        canvas.clear();\r\n    }\r\n}\r\nfunction cancelChange(event) {\r\n    // console.log(event.which, event.ctrlKey, String.fromCharCode(event.which))\r\n    if (String.fromCharCode(event.which).toLowerCase() === 'z' && event.ctrlKey) {\r\n        canvas.cancelChange();\r\n    }\r\n}\r\nlet startX, startY;\r\nfunction findColliding(event) {\r\n    console.log('3');\r\n    startX = event.offsetX;\r\n    startY = event.offsetY;\r\n    if (event.which === 2) {\r\n        currentObject = canvas.findColliding(startX, startY);\r\n        console.log(currentObject);\r\n    }\r\n}\r\nfunction selectFigure(event) {\r\n    startX = event.offsetX;\r\n    startY = event.offsetY;\r\n    console.log('1');\r\n    if (event.which === 1 && event.ctrlKey) {\r\n        selectedObject = canvas.findColliding(startX, startY);\r\n        selectedObject.select();\r\n        canvas.rePaint();\r\n        console.log('2');\r\n    }\r\n}\r\nfunction mouseOut(event) {\r\n    if (!(currentObject === null || currentObject === void 0 ? void 0 : currentObject.isDragging)) {\r\n        return;\r\n    }\r\n    event.preventDefault();\r\n    currentObject.endMovement();\r\n    //  console.log('mouse out')\r\n    // TODO change only to mouse up event\r\n    currentObject.layDown(); // change to setter Q А нахуй я это сделал, если интерфейс всё равно не поменялся? У меня же в методах(сет/гет) ниху не происходит\r\n    canvas.rePaint();\r\n}\r\nfunction mouseMove(event) {\r\n    if (currentObject === null || currentObject === void 0 ? void 0 : currentObject.isDragging) { // Q: How to check need we to run this func or not\r\n        const mouseX = event.offsetX;\r\n        const mouseY = event.offsetY;\r\n        const dx = mouseX - startX;\r\n        const dy = mouseY - startY;\r\n        // console.log(`canvas ${canvas}, canvas.objects ${canvas.objects}, currentIndex ${currentIndex}, canvas.objects[currentIndex] ${canvas.objects[currentIndex]}`)\r\n        currentObject.move(dx, dy);\r\n        // console.log(dx, dy)\r\n        canvas.rePaint();\r\n        startY = mouseY;\r\n        startX = mouseX;\r\n    }\r\n}\r\ncanvas.canvas.addEventListener('mousedown', createFigure);\r\ncanvas.canvas.addEventListener('mousemove', mouseMove);\r\ncanvas.canvas.addEventListener('mousedown', findColliding);\r\ncanvas.canvas.addEventListener('mouseout', mouseOut);\r\ncanvas.canvas.addEventListener('mouseup', mouseOut);\r\ncanvas.canvas.addEventListener('mousedown', selectFigure);\r\nwindow.addEventListener('keyup', cancelChange);\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/draw.js?")
      /***/ },

    /***/ './public/javascripts/drawingObjects/Canvas.js':
    /*! *****************************************************!*\
  !*** ./public/javascripts/drawingObjects/Canvas.js ***!
  \*****************************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Canvas: () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas {\r\n    constructor() {\r\n        this.objects = []; // add type\r\n        this.initCanvas();\r\n        this.initObjects();\r\n    }\r\n    initCanvas() {\r\n        this.canvas = document.querySelector('canvas');\r\n        if (this.canvas) { // should I typecas it to boolean?\r\n            this.context = this.canvas.getContext('2d');\r\n        }\r\n        this.canvas.height = window.innerHeight;\r\n        this.canvas.width = window.innerWidth;\r\n    }\r\n    initObjects() {\r\n        this.objects.forEach(object => { object.draw(this.context); });\r\n    }\r\n    clear() {\r\n        this.objects = [];\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n    clearVisual() {\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    }\r\n    rePaint() {\r\n        this.clearVisual();\r\n        this.initObjects();\r\n    }\r\n    findColliding(px, py) {\r\n        for (const object of this.objects) {\r\n            if (object.isColliding(px, py)) {\r\n                // console.log(`we are in the shape object id is ${object.id}`)\r\n                object.liftUp(); // TODO create method in figure that lifts up, and make call in canvas\r\n                return object;\r\n            }\r\n        }\r\n    }\r\n    addObject(object) {\r\n        this.objects.push(object);\r\n        console.log(this.objects);\r\n        object.draw(this.context);\r\n    }\r\n    cancelChange() {\r\n        this.objects.pop();\r\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n        this.initObjects();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/drawingObjects/Canvas.js?")
      /***/ },

    /***/ './public/javascripts/drawingObjects/Circle.js':
    /*! *****************************************************!*\
  !*** ./public/javascripts/drawingObjects/Circle.js ***!
  \*****************************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Circle: () => (/* binding */ Circle)\n/* harmony export */ });\n/* harmony import */ var _DrawingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingObject */ \"./public/javascripts/drawingObjects/DrawingObject.js\");\n\r\nclass Circle extends _DrawingObject__WEBPACK_IMPORTED_MODULE_0__.DrawingObject {\r\n    constructor() {\r\n        super();\r\n        this.points = [];\r\n        this.radius = 50;\r\n        this._isDragging = false;\r\n        this._isSelected = false;\r\n        this.id = Date.now();\r\n        this.color = 'black';\r\n    }\r\n    create(startingPoint) {\r\n        this.position = startingPoint;\r\n    }\r\n    draw(context) {\r\n        context.beginPath();\r\n        const { x: xStart, y: yStart } = this.position;\r\n        context.arc(xStart, yStart, this.radius, 0, 2 * Math.PI);\r\n        context.strokeStyle = this.color;\r\n        context.stroke();\r\n    }\r\n    isColliding(px, py) {\r\n        const { x: cx, y: cy } = this.position;\r\n        const distX = px - cx;\r\n        const distY = py - cy;\r\n        const distance = Math.sqrt((distX * distX) + (distY * distY));\r\n        // if the distance is less than the circle's\r\n        // radius the point is inside!\r\n        return distance <= this.radius;\r\n    }\r\n    move(dx, dy) {\r\n        this.color = 'Red';\r\n        this.position.x += dx;\r\n        this.position.y += dy;\r\n    }\r\n    endMovement() {\r\n        this._isDragging = false;\r\n        this.color = 'Black';\r\n    }\r\n    remove() {\r\n    }\r\n    select() {\r\n        this.color = 'Red';\r\n    }\r\n    get isDragging() {\r\n        return this._isDragging;\r\n    }\r\n    liftUp() {\r\n        this._isDragging = true;\r\n    }\r\n    layDown() {\r\n        this._isDragging = false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/drawingObjects/Circle.js?")
      /***/ },

    /***/ './public/javascripts/drawingObjects/DrawingObject.js':
    /*! ************************************************************!*\
  !*** ./public/javascripts/drawingObjects/DrawingObject.js ***!
  \************************************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DrawingObject: () => (/* binding */ DrawingObject)\n/* harmony export */ });\nclass DrawingObject {\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/drawingObjects/DrawingObject.js?')
      /***/ },

    /***/ './public/javascripts/drawingObjects/Line.js':
    /*! ***************************************************!*\
  !*** ./public/javascripts/drawingObjects/Line.js ***!
  \***************************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Line: () => (/* binding */ Line)\n/* harmony export */ });\n/* harmony import */ var _DrawingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingObject */ \"./public/javascripts/drawingObjects/DrawingObject.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./public/javascripts/helpers.js\");\n\r\n\r\nclass Line extends _DrawingObject__WEBPACK_IMPORTED_MODULE_0__.DrawingObject {\r\n    constructor() {\r\n        super();\r\n        this.points = [];\r\n        this._isDragging = false;\r\n        this.id = Date.now();\r\n        this.color = 'black';\r\n    }\r\n    create(startingPoint, endingPoint) {\r\n        this.position = startingPoint;\r\n        this.points.push(endingPoint);\r\n    }\r\n    draw(context) {\r\n        context.beginPath();\r\n        const { x: xStart, y: yStart } = this.position;\r\n        context.moveTo(xStart, yStart);\r\n        const { x: xEnd, y: yEnd } = this.points[0];\r\n        context.lineTo(xEnd, yEnd);\r\n        context.strokeStyle = this.color;\r\n        context.stroke();\r\n    }\r\n    isColliding(px, py) {\r\n        const d1 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateDistance)(px, py, this.position.x, this.position.y);\r\n        const d2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateDistance)(px, py, this.points[0].x, this.points[0].y);\r\n        console.log(px, py, this.position.x, this.position.y);\r\n        // get the length of the line\r\n        const lineLen = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.calculateDistance)(this.position.x, this.position.y, this.points[0].x, this.points[0].y);\r\n        console.log(d1, d2, lineLen);\r\n        // since floats are so minutely accurate, add\r\n        // a little buffer zone that will give collision\r\n        const buffer = 0.1; // higher # = less accurate\r\n        // if the two distances are equal to the line's\r\n        // length, the point is on the line!\r\n        // note we use the buffer here to give a range,\r\n        // rather than one #\r\n        return d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer;\r\n    }\r\n    move(dx, dy) {\r\n        this.color = 'Red';\r\n        this.position.y += dy;\r\n        this.position.x += dx;\r\n        this.points[0].x += dx;\r\n        this.points[0].y += dy;\r\n    }\r\n    endMovement() {\r\n        this._isDragging = false;\r\n        this.color = 'Black';\r\n    }\r\n    remove() {\r\n    }\r\n    get isDragging() {\r\n        return this._isDragging;\r\n    }\r\n    select() {\r\n        this.color = 'Red';\r\n    }\r\n    liftUp() {\r\n        this._isDragging = true;\r\n    }\r\n    layDown() {\r\n        this._isDragging = false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/drawingObjects/Line.js?")
      /***/ },

    /***/ './public/javascripts/drawingObjects/Rectangle.js':
    /*! ********************************************************!*\
  !*** ./public/javascripts/drawingObjects/Rectangle.js ***!
  \********************************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Rectangle: () => (/* binding */ Rectangle)\n/* harmony export */ });\n/* harmony import */ var _DrawingObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawingObject */ \"./public/javascripts/drawingObjects/DrawingObject.js\");\n\r\nclass Rectangle extends _DrawingObject__WEBPACK_IMPORTED_MODULE_0__.DrawingObject {\r\n    constructor() {\r\n        super();\r\n        this.points = [];\r\n        this.id = Date.now();\r\n        this.color = 'Black';\r\n        this._isDragging = false;\r\n    }\r\n    create(startingPoint, endingPoint) {\r\n        this.position = startingPoint;\r\n        this.points.push(endingPoint);\r\n    }\r\n    draw(context) {\r\n        const { x: startX, y: startY } = this.position;\r\n        context.beginPath();\r\n        const { x: endingX, y: endingY } = this.points[0];\r\n        const width = endingX - startX;\r\n        const height = endingY - startY;\r\n        context.rect(startX, startY, width, height);\r\n        context.strokeStyle = this.color;\r\n        context.stroke();\r\n    }\r\n    isColliding(px, py) {\r\n        const { x: rx, y: ry } = this.position;\r\n        const { x: endingX, y: endingY } = this.points[0];\r\n        return px >= rx && // right of the left edge AND\r\n            px <= endingX && // left of the right edge AND\r\n            py >= ry && // below the top AND\r\n            py <= endingY;\r\n    }\r\n    move(dx, dy) {\r\n        // console.log('mov')\r\n        // this._isDragging = true // Q: How to make this change in this class and not in the canvas module\r\n        this.color = 'Red';\r\n        this.position.y += dy;\r\n        this.position.x += dx;\r\n        this.points[0].x += dx;\r\n        this.points[0].y += dy;\r\n        // this.draw(context)\r\n    }\r\n    endMovement() {\r\n        this.color = 'Black';\r\n        this._isDragging = false;\r\n    }\r\n    remove() {\r\n    }\r\n    select() {\r\n        this.color = 'Red';\r\n    }\r\n    get isDragging() {\r\n        return this._isDragging;\r\n    }\r\n    liftUp() {\r\n        console.log('lol1');\r\n        this._isDragging = true;\r\n    }\r\n    layDown() {\r\n        this._isDragging = false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/drawingObjects/Rectangle.js?")
      /***/ },

    /***/ './public/javascripts/helpers.js':
    /*! ***************************************!*\
  !*** ./public/javascripts/helpers.js ***!
  \***************************************/
    /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateDistance: () => (/* binding */ calculateDistance)\n/* harmony export */ });\nconst calculateDistance = (x1, y1, x2, y2) => {\r\n    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);\r\n};\r\n\n\n//# sourceURL=webpack://untitled2/./public/javascripts/helpers.js?')
      /***/ }

    /******/ 	})
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	const __webpack_module_cache__ = {}
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__ (moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		const cachedModule = __webpack_module_cache__[moduleId]
    /******/ 		if (cachedModule !== undefined) {
      /******/ 			return cachedModule.exports
      /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		const module = __webpack_module_cache__[moduleId] = {
      /******/ 			// no module.id needed
      /******/ 			// no module.loaded needed
      /******/ 			exports: {}
      /******/ 		}
    /******/
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports
    /******/ 	}
  /******/
  /************************************************************************/
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = (exports, definition) => {
      /******/ 			for (const key in definition) {
        /******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/ 				}
        /******/ 			}
      /******/ 		}
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
      /******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/ 			}
      /******/ 			Object.defineProperty(exports, '__esModule', { value: true })
      /******/ 		}
    /******/ 	})()
  /******/
  /************************************************************************/
  /******/
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	const __webpack_exports__ = __webpack_require__('./public/javascripts/draw.js')
/******/
/******/ })()
