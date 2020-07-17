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
/******/ 		"redux": 0
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
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hooks/consumer.tsx":
/*!********************************!*\
  !*** ./src/hooks/consumer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider */ "./src/hooks/provider.tsx");


/**
 * @file 无状态组件
 */
var Stateless = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_provider__WEBPACK_IMPORTED_MODULE_1__["MyContext"].Consumer, null, function (_a) {
        var data = _a.data, selectChanged = _a.selectChanged;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { marginTop: '10px', marginBottom: '10px' } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { type: "text", onChange: selectChanged, style: { display: 'block' } }),
            data ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, data.name),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, data.alter_ego),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, data.first_appearance)) : null);
    });
};
/* harmony default export */ __webpack_exports__["default"] = (Stateless);


/***/ }),

/***/ "./src/hooks/container.tsx":
/*!*********************************!*\
  !*** ./src/hooks/container.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./src/hooks/provider.tsx");
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumer */ "./src/hooks/consumer.tsx");




/**
 * @file 处理数据的容器组件
 */
var Container = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Container, _super);
    function Container() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { color: 'blue' };
        _this.clickHandle = function () {
            _this.setState({ color: 'red' });
        };
        return _this;
    }
    /**
     * 处理 props → state
     */
    Container.getDerivedStateFromProps = function (props, state) {
        return null;
    };
    Container.prototype.render = function () {
        var list = this.props.list;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_provider__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_consumer__WEBPACK_IMPORTED_MODULE_3__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { paddingBottom: 10 }, onClick: this.clickHandle }, this.state.color),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("fieldset", null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("legend", null, "item list"),
                list ? list.map(function (item, i) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", { key: i }, item); }) : null)));
    };
    return Container;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Container);


/***/ }),

/***/ "./src/hooks/provider.tsx":
/*!********************************!*\
  !*** ./src/hooks/provider.tsx ***!
  \********************************/
/*! exports provided: MyContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContext", function() { return MyContext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @file new conntext api
 */
var DEFAULT_STATE = {
    list: [{
            name: 'Amethyst',
            alter_ego: 'Amy Winston',
            first_appearance: 'LEGION OF SUPER-HEROES #298 (1983)',
        },
        {
            name: 'Aquaman',
            alter_ego: 'Arthur Curry',
            first_appearance: 'MORE FUN COMICS #73 (1941)',
        },
        {
            name: 'Arsenal',
            alter_ego: 'Roy Harper',
            first_appearance: 'ADVENTURE COMICS #250 (1958)',
        },
        {
            name: 'Atom',
            alter_ego: 'Ray Palmer',
            first_appearance: 'SHOWCASE #34 (1961)',
        },
        {
            name: 'Batgirl',
            alter_ego: 'Barbara Gordon',
            first_appearance: 'BATMAN #139 (1961)',
        },
        {
            name: 'Batman',
            alter_ego: 'Bruce Wayne',
            first_appearance: 'DETECTIVE COMICS #27',
        }
    ],
    select: ''
};
var MyContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"]({ data: null, selectChanged: null });
var Provider = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Provider, _super);
    function Provider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = DEFAULT_STATE;
        _this.selectChanged = function (event) {
            _this.setState({ select: event.target.value });
        };
        return _this;
    }
    Provider.prototype.render = function () {
        var _a = this.state, list = _a.list, select = _a.select;
        var data = list.find(function (item) { return item.name === select; });
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](MyContext.Provider, { value: { data: data, selectChanged: this.selectChanged } }, this.props.children);
    };
    return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Provider);


/***/ }),

/***/ "./src/redux/actions.ts":
/*!******************************!*\
  !*** ./src/redux/actions.ts ***!
  \******************************/
/*! exports provided: fetchData, fetchDataSucced, fetchDataFailed, fetchUser, fetchUserSucced, fetchUserFailed, fetchDb, fetchDbSucced, fetchUDbFailed, testStudy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataSucced", function() { return fetchDataSucced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDataFailed", function() { return fetchDataFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserSucced", function() { return fetchUserSucced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserFailed", function() { return fetchUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDb", function() { return fetchDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDbSucced", function() { return fetchDbSucced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUDbFailed", function() { return fetchUDbFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testStudy", function() { return testStudy; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

/**
 * @file actions
 */
var fetchData = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DATA');
var fetchDataSucced = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DATA_SUCCEEDED');
var fetchDataFailed = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DATA_FAILED');
var fetchUser = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_USER');
var fetchUserSucced = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_USER_SUCCEEDED');
var fetchUserFailed = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_USER_FAILED');
var fetchDb = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DB');
var fetchDbSucced = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DB_SUCCEEDED');
var fetchUDbFailed = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('FETCH_DB_FAILED');
var testStudy = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('TEST_STUDY');


/***/ }),

/***/ "./src/redux/app.tsx":
/*!***************************!*\
  !*** ./src/redux/app.tsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./src/redux/reducer.ts");
/* harmony import */ var _error_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-catch */ "./src/redux/error-catch.tsx");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list */ "./src/redux/list.tsx");
/* harmony import */ var _pure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pure */ "./src/redux/pure.tsx");










/**
 * @file contentEditable 选取操作
 */
var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_5__["default"]({ uri: 'http://test.qy.com:4000/graphql' });
var App = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            girls: []
        };
        // shallow equal
        _this.checkHandle = function () {
            var girls = _this.state.girls;
            girls.push(1);
            _this.setState({ girls: girls });
        };
        _this.addHandle = function () {
            var sel = window.getSelection();
            try {
                var range = sel.getRangeAt(0);
                var span = document.createElement('span');
                span.contentEditable = 'false';
                span.style.cssText = 'background:red;';
                span.appendChild(document.createTextNode('helloworld'));
                sel.deleteFromDocument();
                range.insertNode(span);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            }
            catch (e) { }
        };
        _this.delHandle = function () {
            var sel = window.getSelection();
            try {
                var range = sel.getRangeAt(0);
                var end = range.endOffset;
                range.setStart(sel.focusNode, end - 1);
                range.setEnd(sel.focusNode, end);
                range.deleteContents();
                console.log(sel.focusNode);
            }
            catch (e) { }
        };
        return _this;
    }
    App.prototype.getChildContext = function () {
        return { client: client };
    };
    App.prototype.render = function () {
        var _this = this;
        var girls = this.state.girls;
        // react element
        console.log(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_catch__WEBPACK_IMPORTED_MODULE_7__["default"]));
        setTimeout(function () {
            // react instance
            console.log(_this.refs.instanceEc);
        }, 100);
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], { store: _reducer__WEBPACK_IMPORTED_MODULE_6__["default"] },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { onClick: this.checkHandle },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_pure__WEBPACK_IMPORTED_MODULE_9__["default"], { data: girls })),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { id: 'edit', style: { height: 40, border: '1px solid blue', outline: 'none' }, contentEditable: true, dangerouslySetInnerHTML: { __html: '1111122222' } }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { style: { marginTop: 20, marginBottom: 20 }, onClick: this.addHandle }, "wrap"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { style: { marginTop: 20, marginBottom: 20 }, onClick: this.delHandle }, "del"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_catch__WEBPACK_IMPORTED_MODULE_7__["default"], { ref: "instanceEc" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_list__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
    };
    App.childContextTypes = {
        client: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"]
    };
    return App;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, null), document.getElementById('app'));


/***/ }),

/***/ "./src/redux/error-catch.tsx":
/*!***********************************!*\
  !*** ./src/redux/error-catch.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var ErrorCapture = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorCapture, _super);
    function ErrorCapture() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    ErrorCapture.prototype.componentDidCatch = function (error, info) {
        console.log(info);
        this.setState({ hasError: true });
    };
    ErrorCapture.prototype.render = function () {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Something went wrong.");
        }
        return this.props.children;
    };
    return ErrorCapture;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (ErrorCapture);


/***/ }),

/***/ "./src/redux/list.tsx":
/*!****************************!*\
  !*** ./src/redux/list.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/redux/actions.ts");
/* harmony import */ var _hooks_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/container */ "./src/hooks/container.tsx");






/**
 * @file withApollo 有没有必要，是否应该自己获取 client
 */
var mapStateToProps = function (state) {
    return { list: state.list, user: state.user, study: state.study };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onAddList: function () { return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchData"]({ url: true })); },
        onAddUser: function () { return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUser"]({ user: true })); },
        onAddDb: function () { return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchDb"]({ server: false })); },
        onTestStudy: function (data) { return dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["testStudy"](data)); }
    };
};
// hooks + redux
var Btnf = function (props) {
    var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
    var clickHandle = function () {
        dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchData"]({ url: true }));
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: clickHandle }, "\u6D4B\u8BD5 hook item");
};
var List = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.componentDidMount = function () {
        var onTestStudy = this.props.onTestStudy;
        // 同不执行的 setState 是合并
        onTestStudy({ topic: 1 });
        onTestStudy({ user: 'qy' });
    };
    List.prototype.render = function () {
        var _a = this.props, user = _a.user, study = _a.study;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_hooks_container__WEBPACK_IMPORTED_MODULE_5__["default"], { list: this.props.list }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null,
                user,
                JSON.stringify(study)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Btnf, null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: this.props.onAddUser }, "\u6DFB\u52A0 user"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { onClick: this.props.onAddDb }, "\u6D4B\u8BD5 db")));
    };
    return List;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["compose"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"], Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(List));


/***/ }),

/***/ "./src/redux/pure.tsx":
/*!****************************!*\
  !*** ./src/redux/pure.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * @file 测试 pure render
 */
var PureComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PureComponent, _super);
    function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureComponent.prototype.render = function () {
        // console.log('child render')
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "\u6709\u6CA1\u6709\u6211\u90FD\u65E0\u6240\u8C13");
    };
    return PureComponent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
/* harmony default export */ __webpack_exports__["default"] = (PureComponent);


/***/ }),

/***/ "./src/redux/reducer.ts":
/*!******************************!*\
  !*** ./src/redux/reducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./src/redux/sagas.ts");




/**
 * @file reducers
 */
function listReducer(state, action) {
    if (state === void 0) { state = ['hehe']; }
    switch (action.type) {
        case 'ADD_LIST':
            return state.concat([action.text]);
        case 'FETCH_DATA_SUCCEEDED':
            return state.concat([action.payload]);
        default:
            return state;
    }
}
function typeReducer(state, action) {
    if (state === void 0) { state = 'TYPEone night'; }
    switch (action.type) {
        case 'CHANGE_TYPE':
            return action.type;
        default:
            return state;
    }
}
function userReducer(state, action) {
    if (state === void 0) { state = 'kenzoss'; }
    switch (action.type) {
        case 'FETCH_USER_SUCCEEDED':
            return action.payload;
        // 数据库查询成功
        case 'FETCH_DB_SUCCEEDED':
            return action.payload;
        default:
            return state;
    }
}
function studyReducer(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case 'TEST_STUDY':
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, action.payload);
        default:
            return state;
    }
}
var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    list: listReducer,
    type: typeReducer,
    user: userReducer,
    study: studyReducer
});
var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware));
// listen action
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/redux/sagas.ts":
/*!****************************!*\
  !*** ./src/redux/sagas.ts ***!
  \****************************/
/*! exports provided: watchFetchData, watchUserData, watchDb, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchFetchData", function() { return watchFetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchUserData", function() { return watchUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchDb", function() { return watchDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/redux/actions.ts");



/**
 * @file async effects
 */
function fetchData(action) {
    var data, error_1;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(get, action.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchDataSucced"](data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_1 = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchDataFailed"](error_1))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function fetchUser(action) {
    var data, error_2;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(get, action.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserSucced"](data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_2 = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUserFailed"](error_2))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function fetchDb(action) {
    var data, error_3;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 5]);
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(query, action.payload)];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchDbSucced"](data))];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3:
                error_3 = _a.sent();
                return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUDbFailed"](error_3))];
            case 4:
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}
function watchFetchData() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])('FETCH_DATA', fetchData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchUserData() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])('FETCH_USER', fetchUser)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function watchDb() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])('FETCH_DB', fetchDb)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
function get(data) {
    return data.url ? Promise.resolve(Date.now() + 'redux') : Promise.resolve('ajean');
}
function query(data) {
    return fetch('http://test.jd.com:4000/test').then(function (r) { return r.json(); });
}
function rootSaga() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([
                    watchFetchData(),
                    watchUserData(),
                    watchDb()
                ])];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/redux/app.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/redux/app.tsx */"./src/redux/app.tsx");


/***/ })

/******/ });