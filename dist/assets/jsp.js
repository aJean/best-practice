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
/******/ 		"jsp": 0
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
/******/ 	deferredModules.push([2,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/jsplumb/app.tsx":
/*!*****************************!*\
  !*** ./src/jsplumb/app.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.less */ "./src/jsplumb/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/reducers */ "./src/jsplumb/config/reducers.ts");
/* harmony import */ var _canvas_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas.view */ "./src/jsplumb/canvas.view.tsx");
/* harmony import */ var _controls_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls.view */ "./src/jsplumb/controls.view.tsx");







/**
 * @file react 结合 jsplumb 绘制流程图
 */
/* harmony default export */ __webpack_exports__["default"] = ({
    init: function (el) {
        var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_4__["default"].jsp;
        jsp.ready(function () {
            react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], { store: _config_reducers__WEBPACK_IMPORTED_MODULE_4__["default"] },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("main", null,
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_controls_view__WEBPACK_IMPORTED_MODULE_6__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_canvas_view__WEBPACK_IMPORTED_MODULE_5__["default"], null))), el);
        });
    }
});


/***/ }),

/***/ "./src/jsplumb/canvas.view.tsx":
/*!*************************************!*\
  !*** ./src/jsplumb/canvas.view.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/reducers */ "./src/jsplumb/config/reducers.ts");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/actions */ "./src/jsplumb/config/actions.ts");
/* harmony import */ var _config_entity_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/entity.config */ "./src/jsplumb/config/entity.config.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/jsplumb.config */ "./src/jsplumb/config/jsplumb.config.ts");
/* harmony import */ var _common_minimap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/minimap */ "./src/jsplumb/common/minimap.tsx");
/* harmony import */ var _common_bounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/bounce */ "./src/jsplumb/common/bounce.tsx");









/**
 * @file 作为 provider 和 drop 容器
 */
var mapStateToProps = function (state) {
    return {
        entitys: state.entitys,
        connections: state.connections
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onAddEntity: function (data) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["addEntity"](data)); },
        onAddConnection: function (data) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["addConnection"](data)); },
        onDelConnection: function (data) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["delConnection"](data)); }
    };
};
var Num = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Num, _super);
    function Num() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Num.prototype.componentWillReceiveProps = function (nextProps) {
        console.log(nextProps);
    };
    Num.prototype.componentWillUnmount = function () {
        console.log(1);
    };
    Num.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null,
            this.props.value,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", { type: "text" }));
    };
    return Num;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
var CanvasView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CanvasView, _super);
    function CanvasView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            ready: false,
            numbers: [1, 2, 3, 5, 6]
        };
        _this.clickNums = function () {
            _this.setState({
                numbers: [1, 3, 2, 5, 6]
            });
        };
        return _this;
    }
    /**
     * 建立实体关联
     */
    CanvasView.prototype.componentDidMount = function () {
        var _this = this;
        _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp.setContainer('_canvas');
        // trick: 要在绘制之前先设置 container, 但又依赖于 react 组件生命周期触发顺序
        this.setState({ ready: true }, function () {
            _this.generateConnections();
            _this.bindConnections();
        });
    };
    /**
     * 根据 entity 类型创建实体
     */
    CanvasView.prototype.generateEntitys = function () {
        if (!this.state.ready) {
            return null;
        }
        return this.props.entitys.map(function (data) {
            var Entity = Object(_config_entity_config__WEBPACK_IMPORTED_MODULE_4__["getEntity"])(data.type);
            // make sure id is unique
            return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Entity, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ key: data.id }, data));
        });
    };
    /**
     * 建立实体关联, 使用 uuids， from --> to
     */
    CanvasView.prototype.generateConnections = function () {
        var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
        this.props.connections.forEach(function (data) {
            jsp.connect(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ uuids: [data.from, data.to] }, _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_6__["connectConfig"]));
        });
    };
    /**
     * 绑定所有建立关联事件
     */
    CanvasView.prototype.bindConnections = function () {
        var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
        var props = this.props;
        var timeid;
        // 删除指定关联, 会触发 connectionDetached
        _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onOverlayClick = function (overlay) {
            jsp.deleteConnection(overlay.component);
        };
        // 关联 mouseover
        _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onConnectionOver = function (conn) {
            clearTimeout(timeid);
            if (conn.getOverlays) {
                var overlay = conn.getOverlays()['img-overlay'];
                overlay.setVisible(true);
            }
        };
        // 关联 mouseout
        _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onConnectionOut = function (conn) {
            if (conn.getOverlays) {
                timeid = setTimeout(function () {
                    var overlay = conn.getOverlays()['img-overlay'];
                    overlay.setVisible(false);
                }, 100);
            }
        };
        // overlay mouseout
        _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onOverlayOut = function (overlay) {
            timeid = setTimeout(function () {
                overlay.setVisible(false);
            }, 100);
        };
        // 建立任意关联
        jsp.bind('connection', function (info) {
            info.connection.bind('mouseover', _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onConnectionOver);
            info.connection.bind('mouseout', _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].onConnectionOut);
            props.onAddConnection({
                from: info.sourceId,
                to: info.targetId
            });
        });
        // 统一处理 detache 关联, 包括删除实体, 点击 x
        jsp.bind('connectionDetached', function (conn) {
            props.onDelConnection({
                from: conn.sourceId,
                to: conn.targetId
            });
        });
    };
    /**
     * 确定拖放行为
     */
    CanvasView.prototype.dragoverHandle = function (data) {
        data.nativeEvent.preventDefault();
        data.nativeEvent.dataTransfer.dropEffect = 'copy';
    };
    /**
     * 放置新增实体
     */
    CanvasView.prototype.dropHandle = function (data) {
        var event = data.nativeEvent;
        var text = event.dataTransfer.getData('text');
        event.preventDefault();
        this.props.onAddEntity({
            id: Object(_config_entity_config__WEBPACK_IMPORTED_MODULE_4__["getEntityId"])(),
            type: "" + text,
            title: text + " \u5355\u5143",
            top: event.layerY,
            left: event.layerX
        });
    };
    CanvasView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { id: "_canvasWrap", className: "visual-canvas-wrap" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_minimap__WEBPACK_IMPORTED_MODULE_7__["default"], { scroll: "_canvasWrap" }),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_bounce__WEBPACK_IMPORTED_MODULE_8__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: "_canvas", className: "visual-canvas", onDrop: this.dropHandle.bind(this), onDragOver: this.dragoverHandle.bind(this) }, this.generateEntitys()),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "visual-nums" },
                this.state.numbers.map(function (value, index) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Num, { key: value, value: value }); }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this.clickNums }, "\u6539\u53D8 list"))));
    };
    return CanvasView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(CanvasView));


/***/ }),

/***/ "./src/jsplumb/common/bounce.tsx":
/*!***************************************!*\
  !*** ./src/jsplumb/common/bounce.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/actions */ "./src/jsplumb/config/actions.ts");




/**
 * @file 实体编辑效果组件
 */
var mapStateToProps = function (state) {
    return {
        ui: state.ui
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        onCloseEditor: function () { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["closeEditorUI"]()); }
    };
};
var Bounce = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Bounce, _super);
    function Bounce() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bounce.prototype.getStyle = function () {
        var open = this.props.ui.openEditor;
        var element = this.refs.element;
        if (open) {
            setTimeout(function () {
                element['style'].transform = 'translate3d(0, 0, 0)';
            }, 0);
        }
        else if (element) {
            element['style'].transform = null;
        }
        return open ? { display: 'block' } : null;
    };
    Bounce.prototype.saveHandle = function () {
        return this.props.onCloseEditor();
    };
    /**
     * 根据 entity type 切换 form
     */
    Bounce.prototype.appendForm = function () {
        return null;
    };
    Bounce.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { ref: "element", className: "visual-bounce", style: this.getStyle() },
            this.appendForm(),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", { onClick: this.saveHandle.bind(this) }, "save")));
    };
    return Bounce;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Bounce));


/***/ }),

/***/ "./src/jsplumb/common/lemma.tsx":
/*!**************************************!*\
  !*** ./src/jsplumb/common/lemma.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @file 词条组件
 */
var Lemma = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Lemma, _super);
    function Lemma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lemma.prototype.render = function () {
        var props = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "lamma" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("strong", { className: "lamma-word" }, props.word),
            props.text));
    };
    Lemma.propTypes = {
        word: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
        text: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
    };
    return Lemma;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Lemma);


/***/ }),

/***/ "./src/jsplumb/common/minimap.tsx":
/*!****************************************!*\
  !*** ./src/jsplumb/common/minimap.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @file drag zone mini map
 * 计算 map 与画布的比例, 来确定移动距离
 * 画布大小改变, map 比例也要改变
 */
var mapData = {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    flag: false
};
function mid(min, number, max) {
    var ret = number;
    if (number < min) {
        ret = min;
    }
    if (number > max) {
        ret = max;
    }
    return ret;
}
var Minimap = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Minimap, _super);
    function Minimap(props) {
        var _this = _super.call(this, props) || this;
        _this.mouseMoveHandle = _this.mouseMoveHandle.bind(_this);
        _this.mouseUpHandle = _this.mouseUpHandle.bind(_this);
        return _this;
    }
    Minimap.prototype.componentDidMount = function () {
        var props = this.props;
        var element = this.scrollElement = document.getElementById(props.scroll);
        this.ratio = (element.scrollWidth - element.clientWidth) / (props.mapSize - props.nodeSize);
        document.addEventListener('mousemove', this.mouseMoveHandle, false);
        document.addEventListener('mouseup', this.mouseUpHandle, false);
    };
    Minimap.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.mouseMoveHandle);
        document.removeEventListener('mouseup', this.mouseUpHandle);
    };
    Minimap.prototype.createStyle = function () {
        return {
            width: this.props.mapSize,
            height: this.props.mapSize
        };
    };
    Minimap.prototype.mouseDownHandle = function (data) {
        var e = data.nativeEvent;
        mapData.x = e.clientX;
        mapData.y = e.clientY;
        mapData.flag = true;
    };
    Minimap.prototype.mouseMoveHandle = function (e) {
        if (!mapData.flag) {
            return;
        }
        var node = this.refs.element;
        var disX = e.clientX - mapData.x;
        var disY = e.clientY - mapData.y;
        var left = mid(0, mapData.left + disX, 120);
        var top = mid(0, mapData.top + disY, 120);
        node.style.left = left + 'px';
        node.style.top = top + 'px';
        if (this.scrollElement) {
            this.scrollElement.scrollLeft = left * this.ratio;
        }
    };
    Minimap.prototype.mouseUpHandle = function (e) {
        var node = this.refs.element;
        mapData.flag = false;
        mapData.left = parseInt(node.style.left);
        mapData.top = parseInt(node.style.top);
    };
    Minimap.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "visual-minimap", style: this.createStyle() },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { ref: "element", className: "visual-minimap-slider", onMouseDown: this.mouseDownHandle, onMouseUp: this.mouseUpHandle })));
    };
    Minimap.propTypes = {
        top: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
        left: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
        scroll: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
    };
    Minimap.defaultProps = {
        mapSize: 150,
        nodeSize: 30,
        limit: 120
    };
    return Minimap;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Minimap);


/***/ }),

/***/ "./src/jsplumb/common/option.tsx":
/*!***************************************!*\
  !*** ./src/jsplumb/common/option.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_endpoint_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/endpoint.hoc */ "./src/jsplumb/hoc/endpoint.hoc.tsx");



var Option = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Option, _super);
    function Option() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Option.prototype.render = function () {
        var props = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "react-option" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "react-entity-option-icon" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: props.icon })),
            props.text));
    };
    Option.defaultProps = {
        icon: './imgs/option-icon.png'
    };
    return Option;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_endpoint_hoc__WEBPACK_IMPORTED_MODULE_2__["default"])(Option));


/***/ }),

/***/ "./src/jsplumb/common/topbar.tsx":
/*!***************************************!*\
  !*** ./src/jsplumb/common/topbar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/actions */ "./src/jsplumb/config/actions.ts");




/**
 * @file 实体顶部工具栏
 */
var mapDispatchToProps = function (dispatch) {
    return {
        onDelEntity: function (id) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["delEntity"](id)); },
        onOpenEditor: function (data) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_3__["openEditorUI"](data)); }
    };
};
var Topbar = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Topbar, _super);
    function Topbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Topbar.prototype.clickHandle = function () {
        this.props.onDelEntity(this.props.id);
    };
    /**
     * 需要传输一个描述性的 data, 使编辑器 form 和画布组件保持同步
     */
    Topbar.prototype.editHandle = function () {
        this.props.onOpenEditor(this.props.id);
    };
    Topbar.prototype.render = function () {
        var props = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: "react-entity-topbar" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "react-entity-topbar-icon react-entity-topbar-sign" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: props.icon })),
            props.title,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "react-entity-topbar-icon react-entity-topbar-edit", onClick: this.editHandle.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: props.edit })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", { className: "react-entity-topbar-icon react-entity-topbar-close", onClick: this.clickHandle.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", { src: props.close }))));
    };
    Topbar.defaultProps = {
        id: null,
        icon: './imgs/topbar-icon.png',
        edit: './imgs/topbar-icon-edit.png',
        close: './imgs/topbar-icon-close.png'
    };
    return Topbar;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(Topbar));


/***/ }),

/***/ "./src/jsplumb/config/actions.ts":
/*!***************************************!*\
  !*** ./src/jsplumb/config/actions.ts ***!
  \***************************************/
/*! exports provided: addEntity, delEntity, addConnection, delConnection, openEditorUI, closeEditorUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntity", function() { return addEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delEntity", function() { return delEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addConnection", function() { return addConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delConnection", function() { return delConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openEditorUI", function() { return openEditorUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeEditorUI", function() { return closeEditorUI; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "./node_modules/redux-actions/es/index.js");

/**
 * @file actions
 */
var addEntity = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_ENTITY');
var delEntity = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DEL_ENTITY');
var addConnection = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('ADD_CONNECTION');
var delConnection = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('DEL_CONNECTION');
var openEditorUI = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('OPEN_EDITOR_UI');
var closeEditorUI = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('CLOSE_EDITOR_UI');


/***/ }),

/***/ "./src/jsplumb/config/entity.config.ts":
/*!*********************************************!*\
  !*** ./src/jsplumb/config/entity.config.ts ***!
  \*********************************************/
/*! exports provided: EntityType, getEntity, getEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityType", function() { return EntityType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityId", function() { return getEntityId; });
/* harmony import */ var _entity_ask_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/ask.entity */ "./src/jsplumb/entity/ask.entity.tsx");
/* harmony import */ var _entity_msg_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entity/msg.entity */ "./src/jsplumb/entity/msg.entity.tsx");


/**
 * @file 实体类型
 */
var EntityType;
(function (EntityType) {
    EntityType["tigger"] = "ENTITY-TRIGGER";
    EntityType["ask"] = "ENTITY-ASK";
    EntityType["message"] = "ENTITY-MESSAGE";
    EntityType["chat"] = "ENTITY-CHAT";
    EntityType["hidden"] = "ENTITY-HIDDEN";
})(EntityType || (EntityType = {}));
function getEntity(type) {
    switch (type) {
        case 'ENTITY-TRIGGER':
            return _entity_msg_entity__WEBPACK_IMPORTED_MODULE_1__["default"];
        case 'ENTITY-MESSAGE':
            return _entity_msg_entity__WEBPACK_IMPORTED_MODULE_1__["default"];
        case 'ENTITY-ASK':
            return _entity_ask_entity__WEBPACK_IMPORTED_MODULE_0__["default"];
        case 'ENTITY-CHAT':
            return _entity_ask_entity__WEBPACK_IMPORTED_MODULE_0__["default"];
        case 'ENTITY-HIDDEN':
            return _entity_ask_entity__WEBPACK_IMPORTED_MODULE_0__["default"];
        default:
            return _entity_msg_entity__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
}
// TODO: 生成为画布实体唯一id
var uid = 0;
function getEntityId() {
    return "entity_id_" + uid++;
}


/***/ }),

/***/ "./src/jsplumb/config/jsplumb.config.ts":
/*!**********************************************!*\
  !*** ./src/jsplumb/config/jsplumb.config.ts ***!
  \**********************************************/
/*! exports provided: connectorStyle, hoverStyle, overlays, sourceConfig, targetConfig, connectConfig, initConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectorStyle", function() { return connectorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverStyle", function() { return hoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlays", function() { return overlays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceConfig", function() { return sourceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetConfig", function() { return targetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectConfig", function() { return connectConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initConfig", function() { return initConfig; });
/**
 * @file 画布相关配置
 */
// reducer 中才会实现
var NOOP = function (overlay, originalEvent) { };
var connectorStyle = {
    strokeWidth: 4,
    stroke: '#687c8a'
};
var hoverStyle = {
    stroke: '#1f77f3'
};
// bind click overlay event
var overlays = [
    [
        'Custom', { create: function (component) {
                var img = document.createElement('img');
                img.src = './imgs/delete.png';
                return img;
            },
            id: 'img-overlay',
            visible: false,
            events: {
                click: NOOP,
                mouseout: NOOP
            }
        }
    ],
    ['Arrow', { location: 1, width: 8, length: 6 }]
];
// 端点
var sourceConfig = {
    isSource: true
};
var targetConfig = {
    isTarget: true
};
// 关联
var connectConfig = {
    events: {
        mouseover: NOOP,
        mouseout: NOOP
    }
};
// 初始化 jsp 实例配置
var initConfig = {
    Endpoint: 'Dot',
    EndpointStyle: {
        strokeWidth: 3,
        stroke: '#8e9ca8',
        fill: 'transparent',
        radius: 6,
        lineWidth: 2
    },
    EndpointHoverStyle: hoverStyle,
    Connector: ['Flowchart', {
            stub: [40, 60],
            gap: 5,
            cornerRadius: 5,
            alwaysRespectStubs: true
        }],
    PaintStyle: connectorStyle,
    ConnectionOverlays: overlays,
    HoverPaintStyle: hoverStyle,
    MaxConnections: 1,
    ConnectionsDetachable: false
};


/***/ }),

/***/ "./src/jsplumb/config/option.config.ts":
/*!*********************************************!*\
  !*** ./src/jsplumb/config/option.config.ts ***!
  \*********************************************/
/*! exports provided: getOptionId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionId", function() { return getOptionId; });
/**
 * @file 端点配置
 */
var uid = 0;
function getOptionId() {
    return "point_id_" + uid++;
}


/***/ }),

/***/ "./src/jsplumb/config/reducers.ts":
/*!****************************************!*\
  !*** ./src/jsplumb/config/reducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var jsplumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsplumb */ "./node_modules/jsplumb/dist/js/jsplumb.js");
/* harmony import */ var jsplumb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsplumb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jsplumb_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsplumb.config */ "./src/jsplumb/config/jsplumb.config.ts");




/**
 * @file store
 * 负责数据 state 管理
 * 保留全局属性 jsp instance & containment
 */
var initEntitys = [{
        id: 'e1',
        type: 'ENTITY-MESSAGE',
        title: '消息单元',
        top: 200,
        left: 120,
        options: [{ id: 'p1', text: '今天星期几' }, { id: 'p2', text: '明天又是星期几' }]
    }, {
        id: 'e2',
        type: 'ENTITY-MESSAGE',
        title: '消息单元',
        top: 200,
        left: 600,
        options: [{ id: 'p3', text: '哦哦哦，假期呢' }, { id: 'p4', text: '说好的下雨呢' }]
    }, {
        id: 'e3',
        type: 'ENTITY-ASK',
        title: '提问单元',
        top: 450,
        left: 300,
        options: [{ id: 'p5', text: '我就试试' }]
    }, {
        id: 'e4',
        type: 'ENTITY-ASK',
        title: '提问单元',
        top: 450,
        left: 700,
        options: [{ id: 'p6', text: 'ccccccc' }]
    }];
var initConnections = [{ from: 'p1', to: 'e2' }, { from: 'p3', to: 'e3' }, { from: 'p5', to: 'e4' }];
var initUI = {
    openEditor: false
};
/**
 * 画布实体控制
 */
function entitysReducer(state, action) {
    if (state === void 0) { state = initEntitys; }
    var newState;
    switch (action.type) {
        case 'ADD_ENTITY':
            return state.concat([action.payload]);
        case 'DEL_ENTITY':
            var id_1 = action.payload;
            newState = state.filter(function (data) { return data.id != id_1; });
            return newState;
        default:
            return state;
    }
}
/**
 * 实体关联控制
 */
function connectionsReducer(state, action) {
    if (state === void 0) { state = initConnections; }
    var newState;
    var id;
    switch (action.type) {
        case 'ADD_CONNECTION':
            newState = state.concat([action.payload]);
            return newState;
        case 'DEL_CONNECTION':
            var item_1 = action.payload;
            newState = state.filter(function (data) { return data.from != item_1.from && data.to != item_1.to; });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}
/**
 * ui 交互相关
 */
function uiReducer(state, action) {
    if (state === void 0) { state = initUI; }
    var newState;
    switch (action.type) {
        case 'OPEN_EDITOR_UI':
            newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { openEditor: true });
            return newState;
        case 'CLOSE_EDITOR_UI':
            newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { openEditor: false });
            return newState;
        default:
            return state;
    }
}
var reducers = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    entitys: entitysReducer,
    connections: connectionsReducer,
    ui: uiReducer
});
// @TODO: 优化以下事件绑定
_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["initConfig"].ConnectionOverlays[0][1]['events'].click = function (overlay, originalEvent) {
    store.onOverlayClick(overlay, originalEvent);
};
_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["initConfig"].ConnectionOverlays[0][1]['events'].mouseout = function (overlay, originalEvent) {
    store.onOverlayOut(overlay, originalEvent);
};
_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["connectConfig"].events.mouseover = function (conn, originalEvent) {
    store.onConnectionOver(conn, originalEvent);
};
_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["connectConfig"].events.mouseout = function (conn, originalEvent) {
    store.onConnectionOut(conn, originalEvent);
};
// trick 携带两个全局属性
var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducers);
store.jsp = jsplumb__WEBPACK_IMPORTED_MODULE_2__["jsPlumb"].getInstance(_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["initConfig"]);
;
store.containment = '_canvas';
/* harmony default export */ __webpack_exports__["default"] = (store);


/***/ }),

/***/ "./src/jsplumb/controls.view.tsx":
/*!***************************************!*\
  !*** ./src/jsplumb/controls.view.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_entity_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/entity.config */ "./src/jsplumb/config/entity.config.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _config_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/actions */ "./src/jsplumb/config/actions.ts");





/**
 * @file 实体选择面板
 */
var mapDispatchToProps = function (dispatch) {
    return {
        onAddControl: function (data) { return dispatch(_config_actions__WEBPACK_IMPORTED_MODULE_4__["addEntity"](data)); }
    };
};
var ControlsView = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ControlsView, _super);
    function ControlsView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            index: 0
        };
        _this.clickHandle = _this.clickHandle.bind(_this);
        return _this;
    }
    ControlsView.prototype.dragHandle = function (data) {
        var event = data.nativeEvent;
        var type = event.target.getAttribute('data-type');
        event.dataTransfer.setData("text/plain", type);
    };
    /**
     * 点击添加实体, redux action
     */
    ControlsView.prototype.clickHandle = function (data) {
        var _this = this;
        var event = data.nativeEvent;
        var type = event.target.getAttribute('data-type');
        setTimeout(function () {
            _this.setState({
                index: 1
            });
            console.log(_this.state.index);
        }, 0);
        return;
        this.props.onAddControl({
            type: type,
            title: type + " \u5355\u5143",
            top: 500,
            left: 500
        });
    };
    ControlsView.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "react-controls" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { draggable: true, onDragStart: this.dragHandle, onClick: this.clickHandle, "data-type": _config_entity_config__WEBPACK_IMPORTED_MODULE_2__["EntityType"].tigger },
                "\u89E6\u53D1\u5668",
                this.state.index),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { draggable: true, onDragStart: this.dragHandle, onClick: this.clickHandle, "data-type": _config_entity_config__WEBPACK_IMPORTED_MODULE_2__["EntityType"].ask }, "\u95EE\u7B54\u5355\u5143"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { draggable: true, onDragStart: this.dragHandle, onClick: this.clickHandle, "data-type": _config_entity_config__WEBPACK_IMPORTED_MODULE_2__["EntityType"].message }, "\u6D88\u606F\u5355\u5143"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { draggable: true, onDragStart: this.dragHandle, onClick: this.clickHandle, "data-type": _config_entity_config__WEBPACK_IMPORTED_MODULE_2__["EntityType"].chat }, "\u5BF9\u8BDD\u5355\u5143"),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { draggable: true, onDragStart: this.dragHandle, onClick: this.clickHandle, "data-type": _config_entity_config__WEBPACK_IMPORTED_MODULE_2__["EntityType"].hidden }, "\u9690\u85CF\u5355\u5143")));
    };
    return ControlsView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(ControlsView));


/***/ }),

/***/ "./src/jsplumb/entity/ask.entity.tsx":
/*!*******************************************!*\
  !*** ./src/jsplumb/entity/ask.entity.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_drag_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/drag.hoc */ "./src/jsplumb/hoc/drag.hoc.tsx");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity */ "./src/jsplumb/entity/entity.tsx");
/* harmony import */ var _common_topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/topbar */ "./src/jsplumb/common/topbar.tsx");





/**
 * @file 问题单元
 */
var AskEntity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AskEntity, _super);
    function AskEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AskEntity.prototype.render = function () {
        var props = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "react-entity" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_topbar__WEBPACK_IMPORTED_MODULE_4__["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)),
            this.generateOptions()));
    };
    return AskEntity;
}(_entity__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_drag_hoc__WEBPACK_IMPORTED_MODULE_2__["default"])(AskEntity));


/***/ }),

/***/ "./src/jsplumb/entity/entity.tsx":
/*!***************************************!*\
  !*** ./src/jsplumb/entity/entity.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/option */ "./src/jsplumb/common/option.tsx");



/**
 * @file 实体公共类
 */
var Entity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Entity.prototype.generateOptions = function () {
        var options = this.props.options;
        return options ? this.props.options.map(function (data) { return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_option__WEBPACK_IMPORTED_MODULE_2__["default"], { id: data.id, key: data.id, text: data.text }); }) : null;
    };
    Entity.prototype.render = function () {
        return null;
    };
    return Entity;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Entity);
function getUser() {
    return;
}
function testUser() {
    return getUser();
}
testUser().result.name;


/***/ }),

/***/ "./src/jsplumb/entity/msg.entity.tsx":
/*!*******************************************!*\
  !*** ./src/jsplumb/entity/msg.entity.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_drag_hoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hoc/drag.hoc */ "./src/jsplumb/hoc/drag.hoc.tsx");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity */ "./src/jsplumb/entity/entity.tsx");
/* harmony import */ var _common_lemma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/lemma */ "./src/jsplumb/common/lemma.tsx");
/* harmony import */ var _common_topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/topbar */ "./src/jsplumb/common/topbar.tsx");






/**
 * @file 消息对话单元
 */
var MsgEntity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MsgEntity, _super);
    function MsgEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MsgEntity.prototype.render = function () {
        var props = this.props;
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("section", { className: "react-entity" },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_topbar__WEBPACK_IMPORTED_MODULE_5__["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props)),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_common_lemma__WEBPACK_IMPORTED_MODULE_4__["default"], { word: "\u5458\u5DE5\u7C7B\u578B", text: "\u4F60\u60F3\u8BF7\u4EC0\u4E48\u6837\u7684\u5047?" }),
            this.generateOptions()));
    };
    return MsgEntity;
}(_entity__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(_hoc_drag_hoc__WEBPACK_IMPORTED_MODULE_2__["default"])(MsgEntity));


/***/ }),

/***/ "./src/jsplumb/hoc/drag.hoc.tsx":
/*!**************************************!*\
  !*** ./src/jsplumb/hoc/drag.hoc.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeDragComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/reducers */ "./src/jsplumb/config/reducers.ts");
/* harmony import */ var _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/jsplumb.config */ "./src/jsplumb/config/jsplumb.config.ts");




/**
 * @file 赋予组件拖动能力
 * 要保证 endpoint svg uuid 与 组件 id 一致
 */
function makeDragComponent(WrappedComponent) {
    return /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Draggable, _super);
        function Draggable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Draggable.prototype.componentDidMount = function () {
            var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
            var node = this.refs.element;
            jsp.draggable(node, { containment: _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].containment });
            jsp.addEndpoint(node, { anchor: 'Left', uuid: this.props.id }, _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["targetConfig"]);
        };
        Draggable.prototype.componentWillUnmount = function () {
            var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
            var node = this.refs.element;
            node && jsp.removeAllEndpoints(node);
        };
        Draggable.prototype.handleClick = function () {
            var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
            var node = this.refs.element;
            jsp.select({ target: this.props.id }).each(function (connection) {
                connection.setPaintStyle({ stroke: "red", strokeWidth: 4, });
                jsp.revalidate(node);
            });
            console.log('repaint');
            jsp.repaintEverything();
        };
        Draggable.prototype.render = function () {
            var props = this.props;
            var style = { left: props.left, top: props.top };
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: props.id, ref: "element", className: "react-entity-wrap", style: style, onClick: this.handleClick.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props))));
        };
        return Draggable;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
}


/***/ }),

/***/ "./src/jsplumb/hoc/endpoint.hoc.tsx":
/*!******************************************!*\
  !*** ./src/jsplumb/hoc/endpoint.hoc.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return makeComponentEndpoint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/reducers */ "./src/jsplumb/config/reducers.ts");
/* harmony import */ var _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/jsplumb.config */ "./src/jsplumb/config/jsplumb.config.ts");
/* harmony import */ var _config_option_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/option.config */ "./src/jsplumb/config/option.config.ts");





/**
 * @file 赋予组件端点能力
 * 要保证 endpoint svg uuid 与 组件 id 一致
 * id 应该是创建 relation 时生成
 */
function makeComponentEndpoint(WrappedComponent) {
    return /** @class */ (function (_super) {
        tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Endpoint, _super);
        function Endpoint() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Endpoint.prototype.componentDidMount = function () {
            var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
            var node = this.refs.element;
            jsp.addEndpoint(node, {
                anchor: 'Right',
                uuid: this.id
            }, _config_jsplumb_config__WEBPACK_IMPORTED_MODULE_3__["sourceConfig"]);
        };
        Endpoint.prototype.componentWillUnmount = function () {
            // 只有删除 entity 才会删除 endpoint
        };
        Endpoint.prototype.findEp = function () {
            var jsp = _config_reducers__WEBPACK_IMPORTED_MODULE_2__["default"].jsp;
            var node = this.refs.element;
            return jsp.getEndpoints(node)[0];
        };
        Endpoint.prototype.onMouseOver = function () {
            this.findEp().fire('mouseover');
            this.refs.element['style'].background = '#e7f3ff';
        };
        Endpoint.prototype.onMouseOut = function () {
            this.findEp().fire('mouseout');
            this.refs.element['style'].background = 'none';
        };
        Endpoint.prototype.render = function () {
            var props = this.props;
            var id = this.id = props.id || Object(_config_option_config__WEBPACK_IMPORTED_MODULE_4__["getOptionId"])();
            return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { id: id, ref: "element", className: "react-endpoint", onMouseOver: this.onMouseOver.bind(this), onMouseOut: this.onMouseOut.bind(this) },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](WrappedComponent, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, props))));
        };
        return Endpoint;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
}


/***/ }),

/***/ "./src/jsplumb/style.less":
/*!********************************!*\
  !*** ./src/jsplumb/style.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  zoom: 100%;\n}\n.react-controls {\n  position: absolute;\n  top: 20px;\n  left: 10px;\n}\n.react-controls div {\n  width: 80px;\n  height: 50px;\n  border: 1px solid #f73475;\n  margin-bottom: 20px;\n  line-height: 50px;\n  text-align: center;\n  background: #65a9e0;\n}\n.visual-nums {\n  position: absolute;\n  top: 800px;\n  left: 200px;\n  padding: 20px;\n  border: 1px solid #1f77f3;\n  z-index: 100;\n}\n.visual-nums input {\n  margin-left: 20px;\n  margin-top: 20px;\n}\n.visual-canvas-wrap {\n  position: relative;\n  height: 100vh;\n  margin-left: 100px;\n  overflow: auto;\n}\n.visual-canvas-wrap .visual-canvas {\n  position: relative;\n  width: 200vh;\n  height: 100vh;\n  background: #e1e1e1;\n  -webkit-user-select: none;\n}\n.react-entity-wrap {\n  position: absolute;\n  width: 256px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px 0 rgba(66, 91, 109, 0.4);\n  overflow: hidden;\n}\n.react-entity {\n  position: relative;\n}\n.lamma {\n  padding: 10px 0 10px 30px;\n  font-size: 14px;\n  font-weight: bold;\n}\n.lamma .lamma-word {\n  margin-right: 3px;\n  color: #1f77f3;\n}\n.react-entity-topbar {\n  position: relative;\n  height: 48px;\n  padding-left: 40px;\n  line-height: 48px;\n  font-size: 14px;\n}\n.react-entity-topbar .react-entity-topbar-icon {\n  display: flex;\n  position: absolute;\n  top: 15px;\n  width: 16px;\n  height: 16px;\n  font-size: 0;\n  overflow: hidden;\n}\n.react-entity-topbar .react-entity-topbar-icon:hover {\n  cursor: pointer;\n}\n.react-entity-topbar .react-entity-topbar-icon.react-entity-topbar-sign {\n  left: 10px;\n}\n.react-entity-topbar .react-entity-topbar-icon.react-entity-topbar-edit {\n  right: 40px;\n}\n.react-entity-topbar .react-entity-topbar-icon.react-entity-topbar-close {\n  right: 10px;\n}\n.react-entity-topbar .react-entity-topbar-icon img {\n  width: 100%;\n  height: 100%;\n}\n.react-option {\n  position: relative;\n  margin: 0;\n  height: 32px;\n  padding-left: 60px;\n  line-height: 32px;\n  font-weight: bold;\n}\n.react-option .react-entity-option-icon {\n  display: flex;\n  position: absolute;\n  top: 8px;\n  left: 30px;\n  width: 16px;\n  height: 16px;\n  font-size: 0;\n  overflow: hidden;\n}\n.react-option .react-entity-option-icon img {\n  width: 100%;\n  height: 100%;\n}\n.react-option .react-option-light {\n  color: #1f77f3;\n}\n.visual-minimap {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  border: 1px solid #000;\n  background: rgba(85, 195, 238, 0.6);\n  z-index: 999;\n}\n.visual-minimap .visual-minimap-slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  background: #999;\n  cursor: pointer;\n}\n.visual-bounce {\n  display: none;\n  position: fixed;\n  width: 200px;\n  height: 100vh;\n  top: 0;\n  right: 0;\n  transition: transform 500ms ease-out;\n  transform: translate3d(200px, 0, 0);\n  background: #000;\n  z-index: 999;\n}\n", ""]);


/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** multi ./src/jsplumb/app.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/jsplumb/app.tsx */"./src/jsplumb/app.tsx");


/***/ })

/******/ });