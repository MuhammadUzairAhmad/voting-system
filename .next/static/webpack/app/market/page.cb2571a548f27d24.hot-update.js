"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/market/page",{

/***/ "(app-pages-browser)/./src/components/component/CountdownTimer.tsx":
/*!*****************************************************!*\
  !*** ./src/components/component/CountdownTimer.tsx ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds, onCountdownEnd } = param;\n    var _countdown_split_, _countdown_split_1, _countdown_split_2;\n    _s();\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        onCountdownEnd(); // Notify parent when countdown ends\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    setCountdown(\"\".concat(years, \"y \").concat(months, \"m \").concat(days, \"d \").concat(hours, \"h \").concat(minutes, \"m \").concat(seconds, \"s\"));\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            calculateCountdown();\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds,\n        onCountdownEnd\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-4\",\n        children: countdown !== \"Poll has ended\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-lg font-bold\",\n                            children: countdown === null || countdown === void 0 ? void 0 : (_countdown_split_ = countdown.split(\" \")[3]) === null || _countdown_split_ === void 0 ? void 0 : _countdown_split_.split(\"h\")[0]\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-light-text dark:text\",\n                            children: \"Hours\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-lg font-bold\",\n                            children: countdown === null || countdown === void 0 ? void 0 : (_countdown_split_1 = countdown.split(\" \")[4]) === null || _countdown_split_1 === void 0 ? void 0 : _countdown_split_1.split(\"m\")[0]\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-light-text dark:text\",\n                            children: \"Minutes\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center w-20 py-1 bg-light-background2 dark:bg-dark-background2 rounded-lg shadow-lg\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-lg font-bold\",\n                            children: countdown === null || countdown === void 0 ? void 0 : (_countdown_split_2 = countdown.split(\" \")[5]) === null || _countdown_split_2 === void 0 ? void 0 : _countdown_split_2.split(\"s\")[0]\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm text-light-text dark:text\",\n                            children: \"Seconds\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-xl font-bold text-red-500\",\n            children: \"Poll has ended\"\n        }, void 0, false, {\n            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n            lineNumber: 72,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"YZ9VIIBniY3MrwVjIrsyVnEaX1I=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLGlCQUFpQjtRQUFDLEVBQUVDLGdCQUFnQixFQUFFQyxjQUFjLEVBQTREO1FBbUR2R0MsbUJBTUFBLG9CQU1BQTs7SUE5RGIsTUFBTSxDQUFDQSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFTO0lBRW5ERCxnREFBU0E7b0NBQUM7WUFDUixNQUFNTzsrREFBcUI7b0JBQ3pCLE1BQU1DLGtCQUFrQixJQUFJQyxLQUFLTixtQkFBbUI7b0JBQ3BELE1BQU1PLGNBQWMsSUFBSUQ7b0JBRXhCLE1BQU1FLGlCQUFpQkgsZ0JBQWdCSSxPQUFPLEtBQUtGLFlBQVlFLE9BQU87b0JBRXRFLElBQUlELGtCQUFrQixHQUFHO3dCQUN2QkwsYUFBYTt3QkFDYkYsa0JBQWtCLG9DQUFvQzt3QkFDdEQ7b0JBQ0Y7b0JBRUEsNkRBQTZEO29CQUM3RCxNQUFNUyxRQUFRQyxLQUFLQyxLQUFLLENBQUNKLGlCQUFrQixRQUFPLEtBQUssS0FBSyxLQUFLLEdBQUU7b0JBQ25FLE1BQU1LLFNBQVNGLEtBQUtDLEtBQUssQ0FDdkIsaUJBQW1CLFFBQU8sS0FBSyxLQUFLLEtBQUssR0FBRSxJQUN4QyxRQUFPLEtBQUssS0FBSyxLQUFLLEVBQUM7b0JBRTVCLE1BQU1FLE9BQU9ILEtBQUtDLEtBQUssQ0FDckIsaUJBQW1CLFFBQU8sS0FBSyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxLQUFLLEVBQUM7b0JBRXJFLE1BQU1HLFFBQVFKLEtBQUtDLEtBQUssQ0FDdEIsaUJBQW1CLFFBQU8sS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssRUFBQztvQkFFM0QsTUFBTUksVUFBVUwsS0FBS0MsS0FBSyxDQUN4QixpQkFBbUIsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7b0JBRWpELE1BQU1LLFVBQVVOLEtBQUtDLEtBQUssQ0FBQyxpQkFBbUIsUUFBTyxFQUFDLElBQU07b0JBRTVEVCxhQUNFLEdBQWFVLE9BQVZILE9BQU0sTUFBZUksT0FBWEQsUUFBTyxNQUFhRSxPQUFURCxNQUFLLE1BQWNFLE9BQVZELE9BQU0sTUFBZ0JFLE9BQVpELFNBQVEsTUFBWSxPQUFSQyxTQUFRO2dCQUVuRTs7WUFFQWI7WUFFQSxNQUFNYyxXQUFXQyxZQUFZZixvQkFBb0I7WUFFakQ7NENBQU8sSUFBTWdCLGNBQWNGOzRDQUFXLGdEQUFnRDtRQUN4RjttQ0FBRztRQUFDbEI7UUFBa0JDO0tBQWU7SUFFckMscUJBQ0UsOERBQUNvQjtRQUFJQyxXQUFVO2tCQUNacEIsY0FBYyxpQ0FDYjs7OEJBQ0UsOERBQUNtQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFLRCxXQUFVO3NDQUNicEIsc0JBQUFBLGlDQUFBQSxvQkFBQUEsVUFBV3NCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUF4QnRCLHdDQUFBQSxrQkFBMEJzQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7Ozs7OztzQ0FFMUMsOERBQUNIOzRCQUFJQyxXQUFVO3NDQUFvQzs7Ozs7Ozs7Ozs7OzhCQUVyRCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBS0QsV0FBVTtzQ0FDYnBCLHNCQUFBQSxpQ0FBQUEscUJBQUFBLFVBQVdzQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsY0FBeEJ0Qix5Q0FBQUEsbUJBQTBCc0IsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFOzs7Ozs7c0NBRTFDLDhEQUFDSDs0QkFBSUMsV0FBVTtzQ0FBb0M7Ozs7Ozs7Ozs7Ozs4QkFFckQsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUtELFdBQVU7c0NBQ2JwQixzQkFBQUEsaUNBQUFBLHFCQUFBQSxVQUFXc0IsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQXhCdEIseUNBQUFBLG1CQUEwQnNCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs7Ozs7O3NDQUUxQyw4REFBQ0g7NEJBQUlDLFdBQVU7c0NBQW9DOzs7Ozs7Ozs7Ozs7O3lDQUl2RCw4REFBQ0Q7WUFBSUMsV0FBVTtzQkFBaUM7Ozs7Ozs7Ozs7O0FBSXhEO0dBekVNdkI7S0FBQUE7QUEyRU4saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYWxhdGlmL0Rlc2t0b3Avd29yay92b3Rpbmctc3lzdGVtL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ291bnRkb3duVGltZXIgPSAoeyBlbmREYXRlSW5TZWNvbmRzLCBvbkNvdW50ZG93bkVuZCB9OiB7IGVuZERhdGVJblNlY29uZHM6IG51bWJlciwgb25Db3VudGRvd25FbmQ6ICgpID0+IHZvaWQgfSkgPT4ge1xuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbGN1bGF0ZUNvdW50ZG93biA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVJblNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgY29uc3QgdGltZURpZmZlcmVuY2UgPSBzZWxlY3RlZEVuZERhdGUuZ2V0VGltZSgpIC0gY3VycmVudFRpbWUuZ2V0VGltZSgpO1xuXG4gICAgICBpZiAodGltZURpZmZlcmVuY2UgPD0gMCkge1xuICAgICAgICBzZXRDb3VudGRvd24oXCJQb2xsIGhhcyBlbmRlZFwiKTtcbiAgICAgICAgb25Db3VudGRvd25FbmQoKTsgLy8gTm90aWZ5IHBhcmVudCB3aGVuIGNvdW50ZG93biBlbmRzXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIHllYXJzLCBtb250aHMsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kc1xuICAgICAgY29uc3QgeWVhcnMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpKTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSkgL1xuICAgICAgICAgICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzApXG4gICAgICApO1xuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzApKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICBzZXRDb3VudGRvd24oXG4gICAgICAgIGAke3llYXJzfXkgJHttb250aHN9bSAke2RheXN9ZCAke2hvdXJzfWggJHttaW51dGVzfW0gJHtzZWNvbmRzfXNgXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjYWxjdWxhdGVDb3VudGRvd24oKTtcblxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsY3VsYXRlQ291bnRkb3duLCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gQ2xlYW4gdXAgdGhlIGludGVydmFsIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gIH0sIFtlbmREYXRlSW5TZWNvbmRzLCBvbkNvdW50ZG93bkVuZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAge2NvdW50ZG93biAhPT0gXCJQb2xsIGhhcyBlbmRlZFwiID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy0yMCBweS0xIGJnLWxpZ2h0LWJhY2tncm91bmQyIGRhcms6YmctZGFyay1iYWNrZ3JvdW5kMiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2NvdW50ZG93bj8uc3BsaXQoXCIgXCIpWzNdPy5zcGxpdChcImhcIilbMF19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1saWdodC10ZXh0IGRhcms6dGV4dFwiPkhvdXJzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB3LTIwIHB5LTEgYmctbGlnaHQtYmFja2dyb3VuZDIgZGFyazpiZy1kYXJrLWJhY2tncm91bmQyIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICB7Y291bnRkb3duPy5zcGxpdChcIiBcIilbNF0/LnNwbGl0KFwibVwiKVswXX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWxpZ2h0LXRleHQgZGFyazp0ZXh0XCI+TWludXRlczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdy0yMCBweS0xIGJnLWxpZ2h0LWJhY2tncm91bmQyIGRhcms6YmctZGFyay1iYWNrZ3JvdW5kMiByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAge2NvdW50ZG93bj8uc3BsaXQoXCIgXCIpWzVdPy5zcGxpdChcInNcIilbMF19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1saWdodC10ZXh0IGRhcms6dGV4dFwiPlNlY29uZHM8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtcmVkLTUwMFwiPlBvbGwgaGFzIGVuZGVkPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvdW50ZG93blRpbWVyIiwiZW5kRGF0ZUluU2Vjb25kcyIsIm9uQ291bnRkb3duRW5kIiwiY291bnRkb3duIiwic2V0Q291bnRkb3duIiwiY2FsY3VsYXRlQ291bnRkb3duIiwic2VsZWN0ZWRFbmREYXRlIiwiRGF0ZSIsImN1cnJlbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJnZXRUaW1lIiwieWVhcnMiLCJNYXRoIiwiZmxvb3IiLCJtb250aHMiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInNwbGl0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});