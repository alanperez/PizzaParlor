<<<<<<< HEAD
!function(n){function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var t=window.webpackJsonp;window.webpackJsonp=function(r,a,i){for(var u,c,f,l=0,s=[];l<r.length;l++)c=r[l],o[c]&&s.push(o[c][0]),o[c]=0;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&(n[u]=a[u]);for(t&&t(r,a,i);s.length;)s.shift()();if(i)for(l=0;l<i.length;l++)f=e(e.s=i[l]);return f};var r={},o={1:0};e.e=function(n){function t(){u.onerror=u.onload=null,clearTimeout(c);var e=o[n];0!==e&&(e&&e[1](new Error("Loading chunk "+n+" failed.")),o[n]=void 0)}var r=o[n];if(0===r)return new Promise(function(n){n()});if(r)return r[2];var a=new Promise(function(e,t){r=o[n]=[e,t]});r[2]=a;var i=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,e.nc&&u.setAttribute("nonce",e.nc),u.src=e.p+""+n+".js";var c=setTimeout(t,12e4);return u.onerror=u.onload=t,i.appendChild(u),a},e.m=n,e.c=r,e.i=function(n){return n},e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:r})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e.oe=function(n){throw console.error(n),n},e(e.s=13)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(12);t.d(e,"h",function(){return r.a});var o=t(11);t.d(e,"app",function(){return o.a})},,,,,,,,,,,function(n,e,t){"use strict";function r(n){function e(n,t,r){Object.keys(t||[]).map(function(o){var u=t[o],c=r?r+"."+o:o;"function"==typeof u?n[o]=function(n){i("action",{name:c,data:n});var e=i("resolve",u(v,w,n));return"function"==typeof e?e(a):a(e)}:e(n[o]||(n[o]={}),u,c)})}function t(n){for(h=p(x,h,m,m=i("render",y)(v,w),g=!g);n=o.pop();)n()}function r(){y&&!g&&requestAnimationFrame(t,g=!g)}function a(n){return"function"==typeof n?a(n(v)):(n&&(n=i("update",u(v,n)))&&r(v=n),v)}function i(n,e){return(b[n]||[]).map(function(n){var t=n(v,w,e);null!=t&&(e=t)}),e}function u(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t}function c(n){if(n&&(n=n.data))return n.key}function f(n,e){if("string"==typeof n)var t=document.createTextNode(n);else{var t=(e=e||"svg"===n.tag)?document.createElementNS("http://www.w3.org/2000/svg",n.tag):document.createElement(n.tag);n.data&&n.data.oncreate&&o.push(function(){n.data.oncreate(t)});for(var r in n.data)l(t,r,n.data[r]);for(var r=0;r<n.children.length;)t.appendChild(f(n.children[r++],e))}return t}function l(n,e,t,r){if("key"===e);else if("style"===e)for(var o in u(r,t=t||{}))n.style[o]=t[o]||"";else{try{n[e]=t}catch(n){}"function"!=typeof t&&(t?n.setAttribute(e,t):n.removeAttribute(e))}}function s(n,e,t){for(var r in u(e,t)){var a=t[r],i="value"===r||"checked"===r?n[r]:e[r];a!==i&&l(n,r,a,i)}t&&t.onupdate&&o.push(function(){t.onupdate(n,e)})}function d(n,e,t){t&&t.onremove?t.onremove(e):n.removeChild(e)}function p(n,e,t,r,o,a){if(null==t)e=n.insertBefore(f(r,o),e);else if(null!=r.tag&&r.tag===t.tag){s(e,t.data,r.data),o=o||"svg"===r.tag;for(var i=r.children.length,u=t.children.length,l={},v=[],h={},m=0;m<u;m++){var g=v[m]=e.childNodes[m],y=t.children[m],w=c(y);null!=w&&(l[w]=[g,y])}for(var m=0,b=0;b<i;){var g=v[m],y=t.children[m],k=r.children[b],w=c(y);if(h[w])m++;else{var x=c(k),j=l[x]||[];null==x?(null==w&&(p(e,g,y,k,o),b++),m++):(w===x?(p(e,j[0],j[1],k,o),m++):j[0]?(e.insertBefore(j[0],g),p(e,j[0],j[1],k,o)):p(e,g,null,k,o),b++,h[x]=k)}}for(;m<u;){var y=t.children[m],w=c(y);null==w&&d(e,v[m],y.data),m++}for(var m in l){var j=l[m],O=j[1];h[O.data.key]||d(e,j[0],O.data)}}else e&&r!==e.nodeValue&&("string"==typeof r&&"string"==typeof t?e.nodeValue=r:(e=n.insertBefore(f(r,o),a=e),d(n,a,t.data)));return e}var v,h,m,g,y=n.view,w={},b={},k=n.mixins||[],x=n.root||document.body;return k.concat(n).map(function(n){n="function"==typeof n?n(i):n,Object.keys(n.events||[]).map(function(e){b[e]=(b[e]||[]).concat(n.events[e])}),v=u(v,n.state),e(w,n.actions)}),r((m=i("load",h=x.children[0]))===h&&(m=h=null)),i}e.a=r;var o=[]},function(n,e,t){"use strict";function r(n,e){var t,r=[];for(o=arguments.length;o-- >2;)a.push(arguments[o]);for(;a.length;)if(Array.isArray(t=a.pop()))for(o=t.length;o--;)a.push(t[o]);else null!=t&&!0!==t&&!1!==t&&("number"==typeof t&&(t+=""),r.push(t));return"string"==typeof n?{tag:n,data:e||{},children:r}:n(e,r)}e.a=r;var o,a=[]},function(n,e,t){n.exports=t(0)}]);
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });




/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = app;
var globalInvokeLaterStack = []

function app(props) {
  var appState
  var appView = props.view
  var appActions = {}
  var appEvents = {}
  var appMixins = props.mixins || []
  var appRoot = props.root || document.body
  var element
  var oldNode
  var renderLock

  appMixins.concat(props).map(function(mixin) {
    mixin = typeof mixin === "function" ? mixin(emit) : mixin

    Object.keys(mixin.events || []).map(function(key) {
      appEvents[key] = (appEvents[key] || []).concat(mixin.events[key])
    })

    appState = merge(appState, mixin.state)
    initialize(appActions, mixin.actions)
  })

  requestRender(
    (oldNode = emit("load", (element = appRoot.children[0]))) === element &&
      (oldNode = element = null)
  )

  return emit

  function initialize(actions, withActions, lastName) {
    Object.keys(withActions || []).map(function(key) {
      var action = withActions[key]
      var name = lastName ? lastName + "." + key : key

      if (typeof action === "function") {
        actions[key] = function(data) {
          emit("action", { name: name, data: data })

          var result = emit("resolve", action(appState, appActions, data))

          return typeof result === "function" ? result(update) : update(result)
        }
      } else {
        initialize(actions[key] || (actions[key] = {}), action, name)
      }
    })
  }

  function render(cb) {
    element = patch(
      appRoot,
      element,
      oldNode,
      (oldNode = emit("render", appView)(appState, appActions)),
      (renderLock = !renderLock)
    )
    while ((cb = globalInvokeLaterStack.pop())) cb()
  }

  function requestRender() {
    if (appView && !renderLock) {
      requestAnimationFrame(render, (renderLock = !renderLock))
    }
  }

  function update(withState) {
    if (typeof withState === "function") {
      return update(withState(appState))
    }
    if (withState && (withState = emit("update", merge(appState, withState)))) {
      requestRender((appState = withState))
    }
    return appState
  }

  function emit(name, data) {
    return (
      (appEvents[name] || []).map(function(cb) {
        var result = cb(appState, appActions, data)
        if (result != null) {
          data = result
        }
      }),
      data
    )
  }

  function merge(a, b) {
    var obj = {}

    for (var i in a) {
      obj[i] = a[i]
    }

    for (var i in b) {
      obj[i] = b[i]
    }

    return obj
  }

  function getKey(node) {
    if (node && (node = node.data)) {
      return node.key
    }
  }

  function createElement(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)
    } else {
      var element = (isSVG = isSVG || node.tag === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.tag)
        : document.createElement(node.tag)

      if (node.data && node.data.oncreate) {
        globalInvokeLaterStack.push(function() {
          node.data.oncreate(element)
        })
      }

      for (var i in node.data) {
        setData(element, i, node.data[i])
      }

      for (var i = 0; i < node.children.length; ) {
        element.appendChild(createElement(node.children[i++], isSVG))
      }
    }

    return element
  }

  function setData(element, name, value, oldValue) {
    if (name === "key") {
    } else if (name === "style") {
      for (var i in merge(oldValue, (value = value || {}))) {
        element.style[i] = value[i] || ""
      }
    } else {
      try {
        element[name] = value
      } catch (_) {}

      if (typeof value !== "function") {
        if (value) {
          element.setAttribute(name, value)
        } else {
          element.removeAttribute(name)
        }
      }
    }
  }

  function updateElement(element, oldData, data) {
    for (var i in merge(oldData, data)) {
      var value = data[i]
      var oldValue = i === "value" || i === "checked" ? element[i] : oldData[i]

      if (value !== oldValue) {
        setData(element, i, value, oldValue)
      }
    }

    if (data && data.onupdate) {
      globalInvokeLaterStack.push(function() {
        data.onupdate(element, oldData)
      })
    }
  }

  function removeElement(parent, element, data) {
    if (data && data.onremove) {
      data.onremove(element)
    } else {
      parent.removeChild(element)
    }
  }

  function patch(parent, element, oldNode, node, isSVG, nextSibling) {
    if (oldNode == null) {
      element = parent.insertBefore(createElement(node, isSVG), element)
    } else if (node.tag != null && node.tag === oldNode.tag) {
      updateElement(element, oldNode.data, node.data)

      isSVG = isSVG || node.tag === "svg"

      var len = node.children.length
      var oldLen = oldNode.children.length
      var oldKeyed = {}
      var oldElements = []
      var keyed = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = (oldElements[i] = element.childNodes[i])
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)

        if (null != oldKey) {
          oldKeyed[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKey(oldChild)
        if (keyed[oldKey]) {
          i++
          continue
        }

        var newKey = getKey(newChild)

        var keyedNode = oldKeyed[newKey] || []

        if (null == newKey) {
          if (null == oldKey) {
            patch(element, oldElement, oldChild, newChild, isSVG)
            j++
          }
          i++
        } else {
          if (oldKey === newKey) {
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
            i++
          } else if (keyedNode[0]) {
            element.insertBefore(keyedNode[0], oldElement)
            patch(element, keyedNode[0], keyedNode[1], newChild, isSVG)
          } else {
            patch(element, oldElement, null, newChild, isSVG)
          }

          j++
          keyed[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKey(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild.data)
        }
        i++
      }

      for (var i in oldKeyed) {
        var keyedNode = oldKeyed[i]
        var reusableNode = keyedNode[1]
        if (!keyed[reusableNode.data.key]) {
          removeElement(element, keyedNode[0], reusableNode.data)
        }
      }
    } else if (element && node !== element.nodeValue) {
      if (typeof node === "string" && typeof oldNode === "string") {
        element.nodeValue = node
      } else {
        element = parent.insertBefore(
          createElement(node, isSVG),
          (nextSibling = element)
        )
        removeElement(parent, nextSibling, oldNode.data)
      }
    }

    return element
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;
var i
var stack = []

function h(tag, data) {
  var node
  var children = []

  for (i = arguments.length; i-- > 2; ) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray((node = stack.pop()))) {
      for (i = node.length; i--; ) {
        stack.push(node[i])
      }
    } else if (node != null && node !== true && node !== false) {
      if (typeof node === "number") {
        node = node + ""
      }
      children.push(node)
    }
  }

  return typeof tag === "string"
    ? {
        tag: tag,
        data: data || {},
        children: children
      }
    : tag(data, children)
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
>>>>>>> 65037d08bc0f7073754c2b10f4d8ee76a61db8f4
