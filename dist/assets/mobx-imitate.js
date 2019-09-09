(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["r"] = factory();
	else
		root["r"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mobx-imitate/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/mobx-imitate/app.ts":
/*!*********************************!*\
  !*** ./src/mobx-imitate/app.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(/*! ./lib */ "./src/mobx-imitate/lib.ts");
var Store = /** @class */ (function () {
    function Store() {
        this.list = ['hello'];
    }
    __decorate([
        lib_1.observable(),
        __metadata("design:type", Object)
    ], Store.prototype, "list", void 0);
    return Store;
}());
exports.default = {
    init: function (el) {
        var contentNode = el.querySelector('.content');
        var button = el.querySelector('button');
        var store = new Store();
        lib_1.autoRun(function () {
            contentNode.innerHTML = store.list.join(' 2019 haha !');
        });
        button.addEventListener('click', function () {
            store.list = ['today', 'tomorrow'];
        });
    }
};


/***/ }),

/***/ "./src/mobx-imitate/lib.ts":
/*!*********************************!*\
  !*** ./src/mobx-imitate/lib.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @file mobx 实现
 */
Object.defineProperty(exports, "__esModule", { value: true });
var dependMap = {};
var runtime = {
    handle: Function
};
var dependManager = {
    bind: function (key, handle) {
        var binds = dependMap[key];
        if (!binds) {
            binds = dependMap[key] = [];
        }
        if (binds.indexOf(handle) === -1) {
            binds.push(handle);
        }
    },
    findKey: function (key) {
        return dependMap[key];
    },
    trigger: function (key) {
        var binds = this.findKey(key);
        if (binds) {
            binds.forEach(function (handle) {
                handle();
            });
        }
    },
    beginStrategy: function (handle) {
        runtime.handle = handle;
    },
    endStrategy: function () {
        runtime.handle = null;
    }
};
function observable() {
    return function (target, key, des) {
        var value = target[key];
        return {
            /** 绑定 key -> fn 映射 */
            get: function () {
                if (runtime.handle) {
                    dependManager.bind(key, runtime.handle);
                }
                return value;
            },
            set: function (newValue) {
                value = newValue;
                dependManager.trigger(key);
            }
        };
    };
}
exports.observable = observable;
function autoRun(fn) {
    dependManager.beginStrategy(fn);
    fn();
    dependManager.endStrategy();
}
exports.autoRun = autoRun;


/***/ })

/******/ })["default"];
});