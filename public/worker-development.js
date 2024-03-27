/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./worker/index.ts":
/*!*************************!*\
  !*** ./worker/index.ts ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nself.addEventListener(\"push\", (event)=>{\n    console.log(\"push event\", event);\n    if (!event.data) {\n        return;\n    }\n    const data = JSON.parse(event === null || event === void 0 ? void 0 : event.data.text());\n    console.log(event);\n    event.waitUntil(registration.showNotification(data.title, {\n        body: data.message\n    }));\n});\nself.addEventListener(\"notificationclick\", (event)=>{\n    event.notification.close();\n    event.waitUntil(clients.matchAll({\n        type: \"window\",\n        includeUncontrolled: true\n    }).then(function(clientList) {\n        if (clientList.length > 0) {\n            let client = clientList[0];\n            for(let i = 0; i < clientList.length; i++){\n                if (clientList[i].focused) {\n                    client = clientList[i];\n                }\n            }\n            return client.focus();\n        }\n        return clients.openWindow(\"/\");\n    }));\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93b3JrZXIvaW5kZXgudHMiLCJtYXBwaW5ncyI6IkFBQWE7QUFFYkEsS0FBS0MsZ0JBQWdCLENBQUMsUUFBUSxDQUFDQztJQUM3QkMsUUFBUUMsR0FBRyxDQUFDLGNBQWNGO0lBRTFCLElBQUksQ0FBQ0EsTUFBTUcsSUFBSSxFQUFFO1FBQ2Y7SUFDRjtJQUNBLE1BQU1BLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0wsa0JBQUFBLDRCQUFBQSxNQUFPRyxJQUFJLENBQUNHLElBQUk7SUFDeENMLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWkEsTUFBTU8sU0FBUyxDQUNiQyxhQUFhQyxnQkFBZ0IsQ0FBQ04sS0FBS08sS0FBSyxFQUFFO1FBQ3hDQyxNQUFNUixLQUFLUyxPQUFPO0lBQ3BCO0FBRUo7QUFFQWQsS0FBS0MsZ0JBQWdCLENBQUMscUJBQXFCLENBQUNDO0lBQzFDQSxNQUFNYSxZQUFZLENBQUNDLEtBQUs7SUFDeEJkLE1BQU1PLFNBQVMsQ0FDYlEsUUFDR0MsUUFBUSxDQUFDO1FBQUVDLE1BQU07UUFBVUMscUJBQXFCO0lBQUssR0FDckRDLElBQUksQ0FBQyxTQUFVQyxVQUFVO1FBQ3hCLElBQUlBLFdBQVdDLE1BQU0sR0FBRyxHQUFHO1lBQ3pCLElBQUlDLFNBQVNGLFVBQVUsQ0FBQyxFQUFFO1lBQzFCLElBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJSCxXQUFXQyxNQUFNLEVBQUVFLElBQUs7Z0JBQzFDLElBQUlILFVBQVUsQ0FBQ0csRUFBRSxDQUFDQyxPQUFPLEVBQUU7b0JBQ3pCRixTQUFTRixVQUFVLENBQUNHLEVBQUU7Z0JBQ3hCO1lBQ0Y7WUFDQSxPQUFPRCxPQUFPRyxLQUFLO1FBQ3JCO1FBQ0EsT0FBT1YsUUFBUVcsVUFBVSxDQUFDO0lBQzVCO0FBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd29ya2VyL2luZGV4LnRzP2VjYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcInB1c2hcIiwgKGV2ZW50OiBQdXNoRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coXCJwdXNoIGV2ZW50XCIsIGV2ZW50KTtcbiAgXG4gIGlmICghZXZlbnQuZGF0YSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudD8uZGF0YS50ZXh0KCkpO1xuICBjb25zb2xlLmxvZyhldmVudClcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIHJlZ2lzdHJhdGlvbi5zaG93Tm90aWZpY2F0aW9uKGRhdGEudGl0bGUsIHtcbiAgICAgIGJvZHk6IGRhdGEubWVzc2FnZSxcbiAgICB9KVxuICApO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbmNsaWNrXCIsIChldmVudDogTm90aWZpY2F0aW9uRXZlbnQpID0+IHtcbiAgZXZlbnQubm90aWZpY2F0aW9uLmNsb3NlKCk7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjbGllbnRzXG4gICAgICAubWF0Y2hBbGwoeyB0eXBlOiBcIndpbmRvd1wiLCBpbmNsdWRlVW5jb250cm9sbGVkOiB0cnVlIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoY2xpZW50TGlzdCkge1xuICAgICAgICBpZiAoY2xpZW50TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGNsaWVudCA9IGNsaWVudExpc3RbMF07XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGllbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2xpZW50TGlzdFtpXS5mb2N1c2VkKSB7XG4gICAgICAgICAgICAgIGNsaWVudCA9IGNsaWVudExpc3RbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjbGllbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50cy5vcGVuV2luZG93KFwiL1wiKTtcbiAgICAgIH0pXG4gICk7XG59KTtcbiJdLCJuYW1lcyI6WyJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJ0ZXh0Iiwid2FpdFVudGlsIiwicmVnaXN0cmF0aW9uIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwiYm9keSIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb24iLCJjbG9zZSIsImNsaWVudHMiLCJtYXRjaEFsbCIsInR5cGUiLCJpbmNsdWRlVW5jb250cm9sbGVkIiwidGhlbiIsImNsaWVudExpc3QiLCJsZW5ndGgiLCJjbGllbnQiLCJpIiwiZm9jdXNlZCIsImZvY3VzIiwib3BlbldpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./worker/index.ts\n"));

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	!function() {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = function() {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: function(script) { return script; }
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	!function() {
/******/ 		__webpack_require__.ts = function(script) { return __webpack_require__.tt().createScript(script); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./worker/index.ts");
/******/ 	
/******/ })()
;