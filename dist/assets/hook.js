/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"hook": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([3,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/component/app.tsx":
/*!*******************************!*\
  !*** ./src/component/app.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _usestate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usestate */ "./src/component/usestate.tsx");
/* harmony import */ var _usereducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usereducer */ "./src/component/usereducer.tsx");
/* harmony import */ var _webcomponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webcomponent */ "./src/component/webcomponent.ts");






/**
 * @file react hooks demo
 */
function Counter() {
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](react__WEBPACK_IMPORTED_MODULE_1__["useState"](0), 2), count = _a[0], setCount = _a[1];
    // ref 可以通过引用的属性值来打破 capture 规则
    var myRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](count);
    // 捕获上一次的 state 与 props、变量，就是函数闭包的效果
    react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
        var id = setInterval(function () {
            // count 一直是 0
            setCount(count + 1);
            // 可以使用 setCount(c => c + 1)
        }, 1000);
        return function () { return clearInterval(id); };
    }, []);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h1", null, count);
}
var App = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("main", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_usestate__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_usereducer__WEBPACK_IMPORTED_MODULE_4__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", { style: { color: 'red' } }, "web component test"),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_webcomponent__WEBPACK_IMPORTED_MODULE_5__["default"], { id: 'c1', data: { name: 'wbc' } },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, "state")),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Counter, null))));
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = ({
    init: function (el) {
        react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](App, null), el);
    }
});


/***/ }),

/***/ "./src/component/transformWbc.tsx":
/*!****************************************!*\
  !*** ./src/component/transformWbc.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transformElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function transformElement(TagName) {
    return function (props) {
        var setProperties = function (instance) {
            instance.setProperty('data', { name: 'qy' });
        };
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](TagName, { ref: setProperties }, props.children);
    };
}


/***/ }),

/***/ "./src/component/usereducer.tsx":
/*!**************************************!*\
  !*** ./src/component/usereducer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @file redux
 */
var MyContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"]({ list: null, dispatch: null });
function MyReducer(state, action) {
    switch (action.type) {
        case 'add':
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state, ['new']);
        default:
            return state;
    }
}
// 吃瓜组件, 使用 createContext 会影响所有子节点
var Chigua = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Chigua, _super);
    function Chigua() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chigua.prototype.shouldComponentUpdate = function () {
        return false;
    };
    Chigua.prototype.render = function () {
        console.log('extra-chigua');
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "func-gua", style: { marginTop: 20 } }, "\u6211\u662F\u65E0\u72B6\u6001\u7684"));
    };
    return Chigua;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
function MyProvider() {
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](react__WEBPACK_IMPORTED_MODULE_1__["useReducer"](MyReducer, ['first', 'second']), 2), list = _a[0], dispatch = _a[1];
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyContext.Provider, { value: { list: list, dispatch: dispatch } },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Chigua, null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyBar, null),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyList, null)));
}
function MyList(props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](MyContext), list = _a.list, dispatch = _a.dispatch;
    function addHandle() {
        dispatch({ type: 'add' });
    }
    return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", { className: "func-reducer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", null, "\u6D4B\u8BD5 context"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: addHandle }, "add item"),
        list.map(function (text, i) { return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: i }, text)); })));
}
// 避免多次执行
var MyBar = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    console.log('bar !!!');
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "func-bar" }, "context child bar");
});


/***/ }),

/***/ "./src/component/usestate.tsx":
/*!************************************!*\
  !*** ./src/component/usestate.tsx ***!
  \************************************/
/*! exports provided: default, Inner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @file useMemo 减少 expensive function call
 *       useCallback 防止 function 生成多次
 */
function MyInput(props) {
    var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](react__WEBPACK_IMPORTED_MODULE_1__["useState"]('first'), 2), name = _a[0], setName = _a[1];
    var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](react__WEBPACK_IMPORTED_MODULE_1__["useState"](0), 2), count = _b[0], setCount = _b[1];
    var nameHandle = function (event) {
        setName(event.target.value);
    };
    // 避免 count 变化导致 makName 执行，返回的是缓存值
    // 性能优化点：这里匿名 fun 每次都会创建，但如果 name 不变，则不会执行
    var makeName = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
        console.log('parent name change');
        return name + '-bibibi';
    }, [name]);
    // 避免每次都生成新的 fun，导致 Inner 的 memo 失效
    var countHandle = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (event) {
        setCount(count + 1);
    }, [name]);
    var childFun = function () { };
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", { className: "func-state" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", null, "\u6D4B\u8BD5 useState"),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text", onChange: nameHandle }),
            " ",
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, makeName)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: countHandle }, "change count"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, count)),
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Inner, { cb: childFun }));
}
// props 不变，不会执行多次
var Inner = react__WEBPACK_IMPORTED_MODULE_1__["memo"](function (props) {
    console.log('child name change');
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "footer" },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("h2", null, props.content));
});


/***/ }),

/***/ "./src/component/webcomponent.ts":
/*!***************************************!*\
  !*** ./src/component/webcomponent.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webcomponents/webcomponentsjs/webcomponents-bundle */ "./node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js");
/* harmony import */ var _webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_webcomponentsjs_webcomponents_bundle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webcomponents_webcomponentsjs_custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webcomponents/webcomponentsjs/custom-elements-es5-adapter.js */ "./node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
/* harmony import */ var _webcomponents_webcomponentsjs_custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webcomponents_webcomponentsjs_custom_elements_es5_adapter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _transformWbc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformWbc */ "./src/component/transformWbc.tsx");




function $(domStr) {
    var node = document.createElement('div');
    node.innerHTML = domStr;
    return node.firstChild;
}
var styles = "\n  label {\n    margin-right: 10px;\n    color: green;\n  }\n}\n";
var MyTest = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyTest, _super);
    function MyTest() {
        var _this = _super.call(this) || this;
        var wrapper = $('<div class="test-wrapper"></div>');
        var shadow = _this.attachShadow({ mode: 'open' });
        wrapper.innerHTML = "<style>" + styles + "</style><label>\u6539\u53D8</label><input type=\"text\" /><div><slot></slot></div>";
        shadow.appendChild(wrapper);
        return _this;
    }
    Object.defineProperty(MyTest, "observedAttributes", {
        get: function () {
            return ['data', 'value'];
        },
        enumerable: true,
        configurable: true
    });
    MyTest.prototype.connectedCallback = function () {
        var that = this;
        this.input.addEventListener('input', function (e) {
            that.setAttribute('value', this.value);
        });
        console.log(this.data);
    };
    MyTest.prototype.attributeChangedCallback = function (name, value, newValue) {
        if (name == 'value') {
            this.shadowRoot.querySelector('label').innerHTML = newValue;
        }
        console.log(this.data);
    };
    Object.defineProperty(MyTest.prototype, "node", {
        get: function () {
            return this.shadowRoot.querySelector('.test-wrapper');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTest.prototype, "input", {
        get: function () {
            return this.shadowRoot.querySelector('input');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置对象属性
     * @param name
     * @param value
     */
    MyTest.prototype.setProperty = function (name, value) {
        console.log(name, value);
    };
    return MyTest;
}(HTMLElement));
customElements.define('my-test', MyTest);
/* harmony default export */ __webpack_exports__["default"] = (Object(_transformWbc__WEBPACK_IMPORTED_MODULE_3__["default"])('my-test'));


/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** multi ./src/component/app.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/component/app.tsx */"./src/component/app.tsx");


/***/ })

/******/ });