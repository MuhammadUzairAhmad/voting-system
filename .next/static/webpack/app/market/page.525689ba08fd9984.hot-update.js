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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// Helper function to calculate time remaining\nconst calculateTimeRemaining = (targetDate)=>{\n    const now = new Date();\n    const timeRemaining = targetDate.getTime() - now.getTime();\n    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));\n    const hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n    const minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));\n    const seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);\n    return {\n        days,\n        hours,\n        minutes,\n        seconds\n    };\n};\nconst CountdownTimer = ()=>{\n    _s();\n    const targetDate = new Date(\"2024-12-31T00:00:00\"); // Set the target date for the countdown\n    const [timeRemaining, setTimeRemaining] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(calculateTimeRemaining(targetDate));\n    // Update the countdown every second\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const timer = setInterval({\n                \"CountdownTimer.useEffect.timer\": ()=>{\n                    setTimeRemaining(calculateTimeRemaining(targetDate));\n                }\n            }[\"CountdownTimer.useEffect.timer\"], 1000);\n            // Clean up interval on unmount\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(timer)\n            })[\"CountdownTimer.useEffect\"];\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        targetDate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full h-screen bg-gradient-to-b from-mostlyBlackBlue to-veryDarkBlue flex flex-col justify-center items-center font-redHatText\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-[80px] flex justify-center items-center gap-[40px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col-reverse justify-center items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mt-[30px] text-2xl text-grayishBlue font-bold\",\n                            children: \"DAYS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"translate-y-[46px]\",\n                                        children: timeRemaining.days\n                                    }, void 0, false, {\n                                        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col-reverse justify-center items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mt-[30px] text-2xl text-grayishBlue font-bold\",\n                            children: \"HOURS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"translate-y-[46px]\",\n                                        children: timeRemaining.hours\n                                    }, void 0, false, {\n                                        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col-reverse justify-center items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mt-[30px] text-2xl text-grayishBlue font-bold\",\n                            children: \"MINUTES\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"translate-y-[46px]\",\n                                        children: timeRemaining.minutes\n                                    }, void 0, false, {\n                                        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col-reverse justify-center items-center space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mt-[30px] text-2xl text-grayishBlue font-bold\",\n                            children: \"SECONDS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-[180px] h-[90px] bg-slightlyDarkerDesBlue overflow-hidden rounded-tl-xl rounded-tr-xl flex justify-center items-end text-8xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"translate-y-[46px]\",\n                                        children: timeRemaining.seconds\n                                    }, void 0, false, {\n                                        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"3Q0OOUuQ8eBw89FcVWZISj+YbBQ=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBVW5ELDhDQUE4QztBQUM5QyxNQUFNRyx5QkFBeUIsQ0FBQ0M7SUFDOUIsTUFBTUMsTUFBTSxJQUFJQztJQUNoQixNQUFNQyxnQkFBZ0JILFdBQVdJLE9BQU8sS0FBS0gsSUFBSUcsT0FBTztJQUV4RCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNKLGdCQUFpQixRQUFPLEtBQUssS0FBSyxFQUFDO0lBQzNELE1BQU1LLFFBQVFGLEtBQUtDLEtBQUssQ0FBQyxnQkFBa0IsUUFBTyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxFQUFDO0lBQ2pGLE1BQU1FLFVBQVVILEtBQUtDLEtBQUssQ0FBQyxnQkFBa0IsUUFBTyxLQUFLLEVBQUMsSUFBTyxRQUFPLEVBQUM7SUFDekUsTUFBTUcsVUFBVUosS0FBS0MsS0FBSyxDQUFDLGdCQUFrQixRQUFPLEVBQUMsSUFBTTtJQUUzRCxPQUFPO1FBQUVGO1FBQU1HO1FBQU9DO1FBQVNDO0lBQVE7QUFDekM7QUFFQSxNQUFNQyxpQkFBMkI7O0lBQy9CLE1BQU1YLGFBQWEsSUFBSUUsS0FBSyx3QkFBd0Isd0NBQXdDO0lBQzVGLE1BQU0sQ0FBQ0MsZUFBZVMsaUJBQWlCLEdBQUdkLCtDQUFRQSxDQUFnQkMsdUJBQXVCQztJQUV6RixvQ0FBb0M7SUFDcENILGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1nQixRQUFRQztrREFBWTtvQkFDeEJGLGlCQUFpQmIsdUJBQXVCQztnQkFDMUM7aURBQUc7WUFFSCwrQkFBK0I7WUFDL0I7NENBQU8sSUFBTWUsY0FBY0Y7O1FBQzdCO21DQUFHO1FBQUNiO0tBQVc7SUFFZixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBR2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFnRDs7Ozs7O3NDQUM5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUtGLFdBQVU7a0RBQXNCZCxjQUFjRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2hFLDhEQUFDVztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFnRDs7Ozs7O3NDQUM5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUtGLFdBQVU7a0RBQXNCZCxjQUFjSyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT2pFLDhEQUFDUTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFnRDs7Ozs7O3NDQUM5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUtGLFdBQVU7a0RBQXNCZCxjQUFjTSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT25FLDhEQUFDTztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFnRDs7Ozs7O3NDQUM5RCw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUtGLFdBQVU7a0RBQXNCZCxjQUFjTyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEzRTtHQXJFTUM7S0FBQUE7QUF1RU4saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYWxhdGlmL0Rlc2t0b3Avd29yay92b3Rpbmctc3lzdGVtL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVmaW5lIGEgdHlwZSBmb3IgdGhlIHRpbWUgcmVtYWluaW5nIG9iamVjdFxuaW50ZXJmYWNlIFRpbWVSZW1haW5pbmcge1xuICBkYXlzOiBudW1iZXI7XG4gIGhvdXJzOiBudW1iZXI7XG4gIG1pbnV0ZXM6IG51bWJlcjtcbiAgc2Vjb25kczogbnVtYmVyO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRpbWUgcmVtYWluaW5nXG5jb25zdCBjYWxjdWxhdGVUaW1lUmVtYWluaW5nID0gKHRhcmdldERhdGU6IERhdGUpOiBUaW1lUmVtYWluaW5nID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZVJlbWFpbmluZyA9IHRhcmdldERhdGUuZ2V0VGltZSgpIC0gbm93LmdldFRpbWUoKTtcblxuICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcih0aW1lUmVtYWluaW5nIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lUmVtYWluaW5nICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZVJlbWFpbmluZyAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZVJlbWFpbmluZyAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gIHJldHVybiB7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH07XG59O1xuXG5jb25zdCBDb3VudGRvd25UaW1lcjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShcIjIwMjQtMTItMzFUMDA6MDA6MDBcIik7IC8vIFNldCB0aGUgdGFyZ2V0IGRhdGUgZm9yIHRoZSBjb3VudGRvd25cbiAgY29uc3QgW3RpbWVSZW1haW5pbmcsIHNldFRpbWVSZW1haW5pbmddID0gdXNlU3RhdGU8VGltZVJlbWFpbmluZz4oY2FsY3VsYXRlVGltZVJlbWFpbmluZyh0YXJnZXREYXRlKSk7XG5cbiAgLy8gVXBkYXRlIHRoZSBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lUmVtYWluaW5nKGNhbGN1bGF0ZVRpbWVSZW1haW5pbmcodGFyZ2V0RGF0ZSkpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgLy8gQ2xlYW4gdXAgaW50ZXJ2YWwgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgfSwgW3RhcmdldERhdGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1tb3N0bHlCbGFja0JsdWUgdG8tdmVyeURhcmtCbHVlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvbnQtcmVkSGF0VGV4dFwiPlxuICAgICAgXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzgwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC1bNDBweF1cIj5cbiAgICAgICAgey8qIERheXMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LVszMHB4XSB0ZXh0LTJ4bCB0ZXh0LWdyYXlpc2hCbHVlIGZvbnQtYm9sZFwiPkRBWVM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNvZnRSZWQgc3BhY2UteS1bMXB4XSByb3VuZGVkLXhsIGNvbnRhaW5lci1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxODBweF0gaC1bOTBweF0gYmctc2xpZ2h0bHlEYXJrZXJEZXNCbHVlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXRsLXhsIHJvdW5kZWQtdHIteGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgdGV4dC04eGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteS1bNDZweF1cIj57dGltZVJlbWFpbmluZy5kYXlzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEhvdXJzICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wtcmV2ZXJzZSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteS0xMFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC1bMzBweF0gdGV4dC0yeGwgdGV4dC1ncmF5aXNoQmx1ZSBmb250LWJvbGRcIj5IT1VSUzwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHRleHQtc29mdFJlZCBzcGFjZS15LVsxcHhdIHJvdW5kZWQteGwgY29udGFpbmVyLXNoYWRvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctWzE4MHB4XSBoLVs5MHB4XSBiZy1zbGlnaHRseURhcmtlckRlc0JsdWUgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtdGwteGwgcm91bmRlZC10ci14bCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCB0ZXh0LTh4bFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyYW5zbGF0ZS15LVs0NnB4XVwiPnt0aW1lUmVtYWluaW5nLmhvdXJzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1pbnV0ZXMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LVszMHB4XSB0ZXh0LTJ4bCB0ZXh0LWdyYXlpc2hCbHVlIGZvbnQtYm9sZFwiPk1JTlVURVM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNvZnRSZWQgc3BhY2UteS1bMXB4XSByb3VuZGVkLXhsIGNvbnRhaW5lci1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxODBweF0gaC1bOTBweF0gYmctc2xpZ2h0bHlEYXJrZXJEZXNCbHVlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXRsLXhsIHJvdW5kZWQtdHIteGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgdGV4dC04eGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteS1bNDZweF1cIj57dGltZVJlbWFpbmluZy5taW51dGVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIFNlY29uZHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS15LTEwXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LVszMHB4XSB0ZXh0LTJ4bCB0ZXh0LWdyYXlpc2hCbHVlIGZvbnQtYm9sZFwiPlNFQ09ORFM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LXNvZnRSZWQgc3BhY2UteS1bMXB4XSByb3VuZGVkLXhsIGNvbnRhaW5lci1zaGFkb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LVsxODBweF0gaC1bOTBweF0gYmctc2xpZ2h0bHlEYXJrZXJEZXNCbHVlIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXRsLXhsIHJvdW5kZWQtdHIteGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1lbmQgdGV4dC04eGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2xhdGUteS1bNDZweF1cIj57dGltZVJlbWFpbmluZy5zZWNvbmRzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjYWxjdWxhdGVUaW1lUmVtYWluaW5nIiwidGFyZ2V0RGF0ZSIsIm5vdyIsIkRhdGUiLCJ0aW1lUmVtYWluaW5nIiwiZ2V0VGltZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiQ291bnRkb3duVGltZXIiLCJzZXRUaW1lUmVtYWluaW5nIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});