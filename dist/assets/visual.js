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
/******/ 		"visual": 0
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

/***/ "./src/visual/app.tsx":
/*!****************************!*\
  !*** ./src/visual/app.tsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual */ "./src/visual/visual.tsx");



/**
 * @file redux-visual entry
 */
var app = dva__WEBPACK_IMPORTED_MODULE_1___default()();
app.model({
    namespace: 'visual',
    state: {
        preparing: false,
        items: [
            { factory: 'Header', name: '头部区域' },
            { factory: 'Header', name: '头部区域2' },
        ],
    },
    reducers: {
        add: function (state, action) {
            return { preparing: true, items: action.payload.items };
        },
        finish: function (state, action) {
            return { preparing: false, items: action.payload.items };
        },
        undo: function (state, action) {
            return { preparing: true, items: action.payload.items };
        }
    },
});
app.router(function () { return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_visual__WEBPACK_IMPORTED_MODULE_2__["default"], null); });
app.start('#app');


/***/ }),

/***/ "./src/visual/style.less":
/*!*******************************!*\
  !*** ./src/visual/style.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"iconfont":"_2Fk1rUCowDAxoW2UMDuO3M","iconEditor":"_1axj3DXVVzwF9cOky619pu","iconAshbin":"_3GGTlYT6lpoXHquT5LU8GF","visualMain":"qIOzMyRmC807TzBLtpAXA","visualControls":"_2JUOIueaDWhUap-lO20bQo","visualControlItem":"dZ3xDCT_3nYvC3faexH5F","visualVirtualItem":"_3ITmTHRZmCm7_6qVuWgpjx","visualDndItem":"_3nLUVZVQy4wyb5e7NxSekb","visualDndItemName":"_2FQuri9MAT0Xb-TATOZ8-7","visualControlDust":"_1iME43Cvr3h7sHm-4TEAGW","visualControlEdit":"ovaTkikVgaAONklGJDiLq","visualLayout":"_1iSdWDR-UFwhse6BmWe-mJ","visualHeader":"t0rcu6aH-sqXmSYOwJWFv","visualImage":"_2QVdocP-qygLLbdb83sXz5","visualPreview":"_3KP4nZmDbUYm9xR2LKCC1Z"};

/***/ }),

/***/ "./src/visual/visual-controls.tsx":
/*!****************************************!*\
  !*** ./src/visual/visual-controls.tsx ***!
  \****************************************/
/*! exports provided: ControlItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlItem", function() { return ControlItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @file 控件库，需要导出组件列表
 */
var Header = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var props = this.props;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualHeader }, props.text);
    };
    Header.controlName = '头部区域';
    Header.defaultProps = {
        text: 'enro header',
    };
    return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
var Image = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.render = function () {
        var img = 'https://www.freshnessmag.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_860/MTQ5MTcwMDUwNTEzNzc0MDIx/wtaps-herschel-supply-collection-00.webp';
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualImage },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", { src: img })));
    };
    Image.controlName = '图片区域';
    return Image;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/**
 * 生成预览单元，展示缩略信息，只具有 drag 功能
 */
var ControlItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ControlItem, _super);
    function ControlItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlItem.prototype.render = function () {
        var _a = this.props, name = _a.name, connectDragSource = _a.connectDragSource;
        return connectDragSource(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualControlItem }, name));
    };
    ControlItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('enro', {
            beginDrag: function (props) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props);
            },
        }, function (connect, monitor) { return ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }); })
    ], ControlItem);
    return ControlItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

/* harmony default export */ __webpack_exports__["default"] = ([Header, Image]);


/***/ }),

/***/ "./src/visual/visual-dnd.tsx":
/*!***********************************!*\
  !*** ./src/visual/visual-dnd.tsx ***!
  \***********************************/
/*! exports provided: dndInstall, getDndFactory, getRenderFactory, dndEnable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dndInstall", function() { return dndInstall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDndFactory", function() { return getDndFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderFactory", function() { return getRenderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dndEnable", function() { return dndEnable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @file dnd init
 */
var Factory = {};
var dndInstall = function (Controls) {
    return Controls.map(function (Control) {
        var factoryName = Control.name;
        // 保存可用的 factory
        Factory[factoryName] = [dndEnable(), Control];
        return { factory: factoryName, name: Control.controlName };
    });
};
var getDndFactory = function (key) {
    return Factory[key][0];
};
var getRenderFactory = function (key) {
    return Factory[key][1];
};
/**
 * dnd 展示组件，用于 layout 模板中
 */
var dndEnable = function () {
    var Wrapper = /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Wrapper, _super);
        function Wrapper() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 删除组件
             */
            _this.onDust = function () {
                var _a = _this.props, id = _a.id, remove = _a.remove;
                remove(id);
            };
            return _this;
        }
        Wrapper.prototype.getStyle = function () {
            return { position: 'relative' };
        };
        Wrapper.prototype.render = function () {
            var props = this.props;
            var connectDropTarget = props.connectDropTarget, connectDragSource = props.connectDragSource, virtual = props.virtual;
            var className = virtual ? _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualVirtualItem : _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualDndItem;
            return connectDropTarget(connectDragSource(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: className, style: this.getStyle() },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualDndItemName }, props.name),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.iconEditor }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.iconAshbin, onClick: this.onDust }))));
        };
        return Wrapper;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
    var dndWrap = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('enro', {
        beginDrag: function (props) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props);
        },
        endDrag: function (props) {
            props.finish();
        },
    }, function (connect, monitor) { return ({
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }); })(Wrapper);
    dndWrap = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DropTarget"])('enro', {
        canDrop: function () {
            return false;
        },
        // 判断 item 虚拟位置
        hover: function (props, monitor) {
            var item = monitor.getItem();
            var targetId = props['id'];
            if (item.id == targetId || !targetId) {
                return;
            }
            props.add(item, targetId);
        },
    }, function (connect, monitor) { return ({
        connectDropTarget: connect.dropTarget(),
    }); })(dndWrap);
    return dndWrap;
};


/***/ }),

/***/ "./src/visual/visual-layout.tsx":
/*!**************************************!*\
  !*** ./src/visual/visual-layout.tsx ***!
  \**************************************/
/*! exports provided: arrayFind, setUid, getUid, DndVerticalLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUid", function() { return setUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return getUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndVerticalLayout", function() { return DndVerticalLayout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_4__);





function mapStateToProps(state) {
    return { items: state.visual.items };
}
var VerticalLayout = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VerticalLayout, _super);
    function VerticalLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 删除控件
         */
        _this.remove = function (id) {
            var _a = _this.props, items = _a.items, dispatch = _a.dispatch;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == id) {
                    items.splice(i, 1);
                    break;
                }
            }
            dispatch({ type: 'visual/finish', payload: { items: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](items) } });
        };
        /**
         * 确认操作
         */
        _this.finish = function () {
            var e_1, _a;
            var _b = _this.props, items = _b.items, dispatch = _b.dispatch;
            try {
                for (var items_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var data = items_1_1.value;
                    if (data['virtual']) {
                        delete data['virtual'];
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            dispatch({ type: 'visual/finish', payload: { items: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](items) } });
        };
        /**
         * 虚拟占位
         */
        _this.add = function (item, targetId) {
            var _a = _this.props, items = _a.items, dispatch = _a.dispatch;
            item.virtual = true;
            var fromIndex = arrayFind(items, item.id);
            var toIndex = arrayFind(items, targetId);
            fromIndex > -1 && items.splice(fromIndex, 1);
            toIndex > -1 && items.splice(toIndex, 0, item);
            dispatch({ type: 'visual/add', payload: { items: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](items) } });
        };
        /**
         * 撤销新加入的虚拟元素
         */
        _this.undo = function () {
            _this.leaveId = setTimeout(function () {
                var _a = _this.props, items = _a.items, dispatch = _a.dispatch;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.virtual) {
                        // drag is not release 会导致 uid 不连续
                        delete item.id;
                        items.splice(i, 1);
                        break;
                    }
                }
                dispatch({ type: 'visual/undo', payload: { items: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](items) } });
            }, 200);
        };
        return _this;
    }
    VerticalLayout.prototype.render = function () {
        var _this = this;
        var _a = this.props, connectDropTarget = _a.connectDropTarget, getDndFactory = _a.getDndFactory, items = _a.items;
        setUid(items);
        return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.visualLayout, onDragLeave: this.undo }, items.map(function (data) {
            var DndItem = getDndFactory(data.factory);
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DndItem, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: data.id }, data, { add: _this.add, remove: _this.remove, finish: _this.finish }));
        })));
    };
    return VerticalLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/**
 * 查找数组元素
 */
var arrayFind = function (array, id) {
    if (id == 'end') {
        return array.length;
    }
    for (var index = 0; index < array.length; index++) {
        if (array[index].id == id) {
            return index;
        }
    }
    return -1;
};
var setUid = function (array) {
    var uid = 1;
    array.forEach(function (data) { return (data.id = uid++); });
    setUid['uid'] = uid;
};
var getUid = function () { return setUid['uid']++; };
var WrapLayout = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DropTarget"])('enro', {
    drop: function (props, monitor, container) {
        if (!container) {
            return;
        }
        var item = monitor.getItem();
        container.finish(item);
    },
    // 只处理从外部拖入的控件
    hover: function (props, monitor, container) {
        if (!container) {
            return;
        }
        // 还在容器内部 dont undo
        clearTimeout(container.leaveId);
        var item = monitor.getItem();
        // 一定要有 id !
        if (!item.id) {
            item.id = getUid();
            container.add(item, 'end');
        }
    },
}, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}); })(VerticalLayout);
WrapLayout = Object(dva__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(WrapLayout);
var DndVerticalLayout = WrapLayout;


/***/ }),

/***/ "./src/visual/visual-parser.tsx":
/*!**************************************!*\
  !*** ./src/visual/visual-parser.tsx ***!
  \**************************************/
/*! exports provided: toJsx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJsx", function() { return toJsx; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visual_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-dnd */ "./src/visual/visual-dnd.tsx");



/**
 * @file 解析器
 */
var toJsx = function (ast, data) {
    return ast.map(function (exp) {
        var Tag = Object(_visual_dnd__WEBPACK_IMPORTED_MODULE_2__["getRenderFactory"])(exp.factory);
        var props = exp.props || {};
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: exp.id }, props));
    });
};


/***/ }),

/***/ "./src/visual/visual-preview.tsx":
/*!***************************************!*\
  !*** ./src/visual/visual-preview.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visual_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-parser */ "./src/visual/visual-parser.tsx");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @file 预览区域
 */
function mapStateToProps(state) {
    return { preparing: state.visual.preparing, items: state.visual.items };
}
var Preview = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Preview, _super);
    function Preview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preview.prototype.shouldComponentUpdate = function (props) {
        return !props.preparing;
    };
    Preview.prototype.render = function () {
        var items = this.props.items;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.visualPreview }, Object(_visual_parser__WEBPACK_IMPORTED_MODULE_2__["toJsx"])(items));
    };
    return Preview;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Preview));


/***/ }),

/***/ "./src/visual/visual.tsx":
/*!*******************************!*\
  !*** ./src/visual/visual.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var _visual_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visual-controls */ "./src/visual/visual-controls.tsx");
/* harmony import */ var _visual_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual-layout */ "./src/visual/visual-layout.tsx");
/* harmony import */ var _visual_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visual-dnd */ "./src/visual/visual-dnd.tsx");
/* harmony import */ var _visual_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-preview */ "./src/visual/visual-preview.tsx");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_8__);









/**
 * @file 招生活动可视化
 *       兼容旧的数据
 */
var Visual = function () {
    var controlList = Object(_visual_dnd__WEBPACK_IMPORTED_MODULE_6__["dndInstall"])(_visual_controls__WEBPACK_IMPORTED_MODULE_4__["default"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DndProvider"], { backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["default"] },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_8___default.a.visualMain },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_8___default.a.visualControls },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "\u63A7\u4EF6\u9009\u62E9"),
                controlList.map(function (data, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_controls__WEBPACK_IMPORTED_MODULE_4__["ControlItem"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: i }, data))); })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_layout__WEBPACK_IMPORTED_MODULE_5__["DndVerticalLayout"], { getDndFactory: _visual_dnd__WEBPACK_IMPORTED_MODULE_6__["getDndFactory"] }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_preview__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (Visual);


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/visual/app.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/visual/app.tsx */"./src/visual/app.tsx");


/***/ }),

/***/ 2:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });