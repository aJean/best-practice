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

/***/ "./node_modules/rc-picker/node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!*************************************************************************!*\
  !*** ./node_modules/rc-picker/node_modules/moment/locale sync ^\.\/.*$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/rc-picker/node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/rc-picker/node_modules/moment/locale/af.js",
	"./ar": "./node_modules/rc-picker/node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/rc-picker/node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/rc-picker/node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/rc-picker/node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/rc-picker/node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/rc-picker/node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/rc-picker/node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/rc-picker/node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/rc-picker/node_modules/moment/locale/ar.js",
	"./az": "./node_modules/rc-picker/node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/rc-picker/node_modules/moment/locale/az.js",
	"./be": "./node_modules/rc-picker/node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/rc-picker/node_modules/moment/locale/be.js",
	"./bg": "./node_modules/rc-picker/node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/rc-picker/node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/rc-picker/node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/rc-picker/node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/rc-picker/node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/rc-picker/node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/rc-picker/node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/rc-picker/node_modules/moment/locale/bo.js",
	"./br": "./node_modules/rc-picker/node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/rc-picker/node_modules/moment/locale/br.js",
	"./bs": "./node_modules/rc-picker/node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/rc-picker/node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/rc-picker/node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/rc-picker/node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/rc-picker/node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/rc-picker/node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/rc-picker/node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/rc-picker/node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/rc-picker/node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/rc-picker/node_modules/moment/locale/cy.js",
	"./da": "./node_modules/rc-picker/node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/rc-picker/node_modules/moment/locale/da.js",
	"./de": "./node_modules/rc-picker/node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/rc-picker/node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/rc-picker/node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/rc-picker/node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/rc-picker/node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/rc-picker/node_modules/moment/locale/de.js",
	"./dv": "./node_modules/rc-picker/node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/rc-picker/node_modules/moment/locale/dv.js",
	"./el": "./node_modules/rc-picker/node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/rc-picker/node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/rc-picker/node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/rc-picker/node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/rc-picker/node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/rc-picker/node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/rc-picker/node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/rc-picker/node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/rc-picker/node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/rc-picker/node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/rc-picker/node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/rc-picker/node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/rc-picker/node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/rc-picker/node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/rc-picker/node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/rc-picker/node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/rc-picker/node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/rc-picker/node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/rc-picker/node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/rc-picker/node_modules/moment/locale/eo.js",
	"./es": "./node_modules/rc-picker/node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/rc-picker/node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/rc-picker/node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/rc-picker/node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/rc-picker/node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/rc-picker/node_modules/moment/locale/es.js",
	"./et": "./node_modules/rc-picker/node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/rc-picker/node_modules/moment/locale/et.js",
	"./eu": "./node_modules/rc-picker/node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/rc-picker/node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/rc-picker/node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/rc-picker/node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/rc-picker/node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/rc-picker/node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/rc-picker/node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/rc-picker/node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/rc-picker/node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/rc-picker/node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/rc-picker/node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/rc-picker/node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/rc-picker/node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/rc-picker/node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/rc-picker/node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/rc-picker/node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/rc-picker/node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/rc-picker/node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/rc-picker/node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/rc-picker/node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/rc-picker/node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/rc-picker/node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/rc-picker/node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/rc-picker/node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/rc-picker/node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/rc-picker/node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/rc-picker/node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/rc-picker/node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/rc-picker/node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/rc-picker/node_modules/moment/locale/gu.js",
	"./he": "./node_modules/rc-picker/node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/rc-picker/node_modules/moment/locale/he.js",
	"./hi": "./node_modules/rc-picker/node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/rc-picker/node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/rc-picker/node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/rc-picker/node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/rc-picker/node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/rc-picker/node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/rc-picker/node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/rc-picker/node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/rc-picker/node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/rc-picker/node_modules/moment/locale/id.js",
	"./is": "./node_modules/rc-picker/node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/rc-picker/node_modules/moment/locale/is.js",
	"./it": "./node_modules/rc-picker/node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/rc-picker/node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/rc-picker/node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/rc-picker/node_modules/moment/locale/it.js",
	"./ja": "./node_modules/rc-picker/node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/rc-picker/node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/rc-picker/node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/rc-picker/node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/rc-picker/node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/rc-picker/node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/rc-picker/node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/rc-picker/node_modules/moment/locale/kk.js",
	"./km": "./node_modules/rc-picker/node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/rc-picker/node_modules/moment/locale/km.js",
	"./kn": "./node_modules/rc-picker/node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/rc-picker/node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/rc-picker/node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/rc-picker/node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/rc-picker/node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/rc-picker/node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/rc-picker/node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/rc-picker/node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/rc-picker/node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/rc-picker/node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/rc-picker/node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/rc-picker/node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/rc-picker/node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/rc-picker/node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/rc-picker/node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/rc-picker/node_modules/moment/locale/lv.js",
	"./me": "./node_modules/rc-picker/node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/rc-picker/node_modules/moment/locale/me.js",
	"./mi": "./node_modules/rc-picker/node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/rc-picker/node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/rc-picker/node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/rc-picker/node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/rc-picker/node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/rc-picker/node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/rc-picker/node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/rc-picker/node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/rc-picker/node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/rc-picker/node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/rc-picker/node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/rc-picker/node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/rc-picker/node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/rc-picker/node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/rc-picker/node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/rc-picker/node_modules/moment/locale/mt.js",
	"./my": "./node_modules/rc-picker/node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/rc-picker/node_modules/moment/locale/my.js",
	"./nb": "./node_modules/rc-picker/node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/rc-picker/node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/rc-picker/node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/rc-picker/node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/rc-picker/node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/rc-picker/node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/rc-picker/node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/rc-picker/node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/rc-picker/node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/rc-picker/node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/rc-picker/node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/rc-picker/node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/rc-picker/node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/rc-picker/node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/rc-picker/node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/rc-picker/node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/rc-picker/node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/rc-picker/node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/rc-picker/node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/rc-picker/node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/rc-picker/node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/rc-picker/node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/rc-picker/node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/rc-picker/node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/rc-picker/node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/rc-picker/node_modules/moment/locale/sd.js",
	"./se": "./node_modules/rc-picker/node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/rc-picker/node_modules/moment/locale/se.js",
	"./si": "./node_modules/rc-picker/node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/rc-picker/node_modules/moment/locale/si.js",
	"./sk": "./node_modules/rc-picker/node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/rc-picker/node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/rc-picker/node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/rc-picker/node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/rc-picker/node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/rc-picker/node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/rc-picker/node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/rc-picker/node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/rc-picker/node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/rc-picker/node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/rc-picker/node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/rc-picker/node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/rc-picker/node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/rc-picker/node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/rc-picker/node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/rc-picker/node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/rc-picker/node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/rc-picker/node_modules/moment/locale/ta.js",
	"./te": "./node_modules/rc-picker/node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/rc-picker/node_modules/moment/locale/te.js",
	"./tet": "./node_modules/rc-picker/node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/rc-picker/node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/rc-picker/node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/rc-picker/node_modules/moment/locale/tg.js",
	"./th": "./node_modules/rc-picker/node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/rc-picker/node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/rc-picker/node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/rc-picker/node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/rc-picker/node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/rc-picker/node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/rc-picker/node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/rc-picker/node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/rc-picker/node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/rc-picker/node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/rc-picker/node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/rc-picker/node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/rc-picker/node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/rc-picker/node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/rc-picker/node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/rc-picker/node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/rc-picker/node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/rc-picker/node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/rc-picker/node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/rc-picker/node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/rc-picker/node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/rc-picker/node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/rc-picker/node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/rc-picker/node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/rc-picker/node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/rc-picker/node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/rc-picker/node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/rc-picker/node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/rc-picker/node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/rc-picker/node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/rc-picker/node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/rc-picker/node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/rc-picker/node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/rc-picker/node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/rc-picker/node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/rc-picker/node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/rc-picker/node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/rc-picker/node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/rc-picker/node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

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
        // preview scu
        preparing: false,
        // edit item
        edit: null,
        items: [
            { factory: 'Header', name: '头部区域', props: { text: '头部区域1' } },
            { factory: 'Header', name: '头部区域', props: { text: '头部区域2' } },
        ],
    },
    reducers: {
        add: function (state, action) {
            return { preparing: true, items: action.payload.items, edit: state.edit };
        },
        finish: function (state, action) {
            return { preparing: false, items: action.payload.items, edit: state.edit };
        },
        undo: function (state, action) {
            return { preparing: true, items: action.payload.items, edit: state.edit };
        },
        edit: function (state, action) {
            return { preparing: state.preparing, items: state.items, edit: action.payload.item };
        },
        update: function (state, action) {
            return { preparing: state.preparing, items: action.payload.items, edit: state.edit };
        },
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
module.exports = {"iconfont":"_2Fk1rUCowDAxoW2UMDuO3M","iconEditor":"_1axj3DXVVzwF9cOky619pu","iconAshbin":"_3GGTlYT6lpoXHquT5LU8GF","visualMain":"qIOzMyRmC807TzBLtpAXA","visualControls":"_2JUOIueaDWhUap-lO20bQo","visualControlItem":"dZ3xDCT_3nYvC3faexH5F","visualVirtualItem":"_3ITmTHRZmCm7_6qVuWgpjx","visualDndItem":"_3nLUVZVQy4wyb5e7NxSekb","visualDndItemName":"_2FQuri9MAT0Xb-TATOZ8-7","visualControlDust":"_1iME43Cvr3h7sHm-4TEAGW","visualLayout":"_1iSdWDR-UFwhse6BmWe-mJ","visualHeader":"t0rcu6aH-sqXmSYOwJWFv","visualImage":"_2QVdocP-qygLLbdb83sXz5","visualPreview":"_3KP4nZmDbUYm9xR2LKCC1Z","visualPreviewItem":"J7XSYV7tpTqbO4e2M1_J6","visualControlEdit":"ovaTkikVgaAONklGJDiLq","visualEditor":"_30bSOrw7cNcevh9tmFsQpr"};

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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Header, _super);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Image, _super);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ControlItem, _super);
    function ControlItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControlItem.prototype.render = function () {
        var _a = this.props, name = _a.name, connectDragSource = _a.connectDragSource;
        return connectDragSource(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.visualControlItem }, name));
    };
    ControlItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('enro', {
            beginDrag: function (props) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props);
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
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Wrapper, _super);
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
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: _style_less__WEBPACK_IMPORTED_MODULE_3___default.a.iconAshbin, onClick: this.onDust }))));
        };
        return Wrapper;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent));
    var dndWrap = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragSource"])('enro', {
        beginDrag: function (props) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props);
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

/***/ "./src/visual/visual-editor.tsx":
/*!**************************************!*\
  !*** ./src/visual/visual-editor.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dva */ "./node_modules/dva/index.js");
/* harmony import */ var dva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @file 组件编辑
 */
var layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
};
function mapStateToProps(state) {
    return { edit: state.visual.edit, items: state.visual.items };
}
var Editor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Editor, _super);
    function Editor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 更新组件 props
         */
        _this.finishHandle = function (values) {
            var _a = _this.props, items = _a.items, dispatch = _a.dispatch;
            var id = values.id;
            var item = items.find(function (data) { return data.id == id; });
            if (item) {
                delete values.id;
                Object.assign(item.props, values);
                dispatch({ type: 'visual/update', payload: { items: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items) } });
            }
        };
        return _this;
    }
    Editor.prototype.safeValue = function (data, key) {
        return data ? data[key] : '';
    };
    /**
     * 生成编辑表单
     */
    Editor.prototype.safeForm = function (data) {
        if (!data || !data.props) {
            return null;
        }
        var props = data.props;
        var id = data.id;
        var items = Object.keys(props).map(function (key, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { key: i, name: key, label: key, initialValue: props[key] },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], null))); });
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: id, name: 'editor' }, layout, { onFinish: this.finishHandle }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, { name: 'id', label: 'id', initialValue: id },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], { disabled: true })),
            items,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], { type: 'primary', htmlType: 'submit' }, "\u786E\u8BA4\u4FEE\u6539")));
    };
    Editor.prototype.render = function () {
        var edit = this.props.edit;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], { className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.visualEditor, title: 'editor control' },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null,
                    "\u63A7\u4EF6\u540D\uFF1A",
                    this.safeValue(edit, 'name')),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, null)),
            this.safeForm(edit)));
    };
    return Editor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));
/* harmony default export */ __webpack_exports__["default"] = (Object(dva__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Editor));


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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(VerticalLayout, _super);
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
            dispatch({ type: 'visual/finish', payload: { items: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items) } });
        };
        /**
         * 确认操作
         */
        _this.finish = function () {
            var e_1, _a;
            var _b = _this.props, items = _b.items, dispatch = _b.dispatch;
            try {
                for (var items_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
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
            dispatch({ type: 'visual/finish', payload: { items: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items) } });
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
            dispatch({ type: 'visual/add', payload: { items: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items) } });
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
                dispatch({ type: 'visual/undo', payload: { items: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(items) } });
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
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DndItem, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: data.id }, data, { add: _this.add, remove: _this.remove, finish: _this.finish }));
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
/*! exports provided: toJson, toJsx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return toJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJsx", function() { return toJsx; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _visual_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-dnd */ "./src/visual/visual-dnd.tsx");



/**
 * @file 解析器
 */
var toJson = function (ast, data) {
    return ast.map(function (exp) {
        var Tag = Object(_visual_dnd__WEBPACK_IMPORTED_MODULE_2__["getRenderFactory"])(exp.factory);
        var props = exp.props || {};
        return { id: exp.id, Tag: Tag, props: props };
    });
};
var toJsx = function (ast, data) {
    return ast.map(function (exp) {
        var Tag = Object(_visual_dnd__WEBPACK_IMPORTED_MODULE_2__["getRenderFactory"])(exp.factory);
        var props = exp.props || {};
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: exp.id }, props));
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Preview, _super);
    function Preview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.editHandle = function (event) {
            var _a = _this.props, dispatch = _a.dispatch, items = _a.items;
            var id = event.target.getAttribute('data-id');
            var item = items.find(function (data) { return data.id == id; });
            item && dispatch({ type: 'visual/edit', payload: { item: item } });
        };
        return _this;
    }
    Preview.prototype.shouldComponentUpdate = function (props) {
        return !props.preparing;
    };
    Preview.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.visualPreview }, Object(_visual_parser__WEBPACK_IMPORTED_MODULE_2__["toJson"])(items).map(function (_a) {
            var Tag = _a.Tag, id = _a.id, props = _a.props;
            return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: id, className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.visualPreviewItem },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tag, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: _style_less__WEBPACK_IMPORTED_MODULE_4___default.a.iconEditor, onClick: _this.editHandle, "data-id": id })));
        })));
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
/* harmony import */ var _visual_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visual-editor */ "./src/visual/visual-editor.tsx");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.less */ "./src/visual/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.min.css */ "./node_modules/antd/dist/antd.min.css");
/* harmony import */ var antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_min_css__WEBPACK_IMPORTED_MODULE_10__);











/**
 * @file 招生活动可视化
 *       兼容旧的数据
 */
var Visual = function () {
    var controlList = Object(_visual_dnd__WEBPACK_IMPORTED_MODULE_6__["dndInstall"])(_visual_controls__WEBPACK_IMPORTED_MODULE_4__["default"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DndProvider"], { backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["default"] },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_9___default.a.visualMain },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _style_less__WEBPACK_IMPORTED_MODULE_9___default.a.visualControls },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "select control"),
                controlList.map(function (data, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_controls__WEBPACK_IMPORTED_MODULE_4__["ControlItem"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: i }, data))); })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_layout__WEBPACK_IMPORTED_MODULE_5__["DndVerticalLayout"], { getDndFactory: _visual_dnd__WEBPACK_IMPORTED_MODULE_6__["getDndFactory"] }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_preview__WEBPACK_IMPORTED_MODULE_7__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_visual_editor__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
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

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });