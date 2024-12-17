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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds } = param;\n    _s();\n    const date = new Date(endDateInSeconds * 1000); // Multiply by 1000 to get back milliseconds\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDateFormatted, setEndDateFormatted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const formatEndDate = {\n                \"CountdownTimer.useEffect.formatEndDate\": ()=>{\n                    // Convert the Unix timestamp to a readable date string\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const year = selectedEndDate.getFullYear();\n                    const month = String(selectedEndDate.getMonth() + 1).padStart(2, \"0\");\n                    const day = String(selectedEndDate.getDate()).padStart(2, \"0\");\n                    const hours = String(selectedEndDate.getHours()).padStart(2, \"0\");\n                    const minutes = String(selectedEndDate.getMinutes()).padStart(2, \"0\");\n                    const seconds = String(selectedEndDate.getSeconds()).padStart(2, \"0\");\n                    const formattedDate = \"\".concat(year, \"/\").concat(month, \"/\").concat(day, \" \").concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n                    setEndDateFormatted(formattedDate);\n                }\n            }[\"CountdownTimer.useEffect.formatEndDate\"];\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    let countdownStr = \"\";\n                    // Format the countdown string based on the time units\n                    if (years > 0) {\n                        countdownStr += \"\".concat(years, \" Year\").concat(years > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (months > 0 || years > 0) {\n                        countdownStr += \"\".concat(months, \" Month\").concat(months > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (days > 0 || months > 0 || years > 0) {\n                        countdownStr += \"\".concat(days, \" Day\").concat(days > 1 ? \"s\" : \"\", \", \");\n                    }\n                    countdownStr += \"\".concat(hours, \" Hour\").concat(hours > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(minutes, \" Minute\").concat(minutes > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(seconds, \" Second\").concat(seconds > 1 ? \"s\" : \"\");\n                    setCountdown(countdownStr);\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            formatEndDate();\n            calculateCountdown();\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: [\n                \"Countdown: \",\n                countdown\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"sBFjVcl1fkgITufZvUGWmnjaamk=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBR25ELE1BQU1HLGlCQUFpQjtRQUFDLEVBQUVDLGdCQUFnQixFQUFnQzs7SUFFeEUsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRixtQkFBbUIsT0FBTyw0Q0FBNEM7SUFFNUYsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQVM7SUFFakVELGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1VOzBEQUFnQjtvQkFDcEIsdURBQXVEO29CQUN2RCxNQUFNQyxrQkFBa0IsSUFBSU4sS0FBS0YsbUJBQW1CO29CQUNwRCxNQUFNUyxPQUFPRCxnQkFBZ0JFLFdBQVc7b0JBQ3hDLE1BQU1DLFFBQVFDLE9BQU9KLGdCQUFnQkssUUFBUSxLQUFLLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO29CQUNqRSxNQUFNQyxNQUFNSCxPQUFPSixnQkFBZ0JRLE9BQU8sSUFBSUYsUUFBUSxDQUFDLEdBQUc7b0JBQzFELE1BQU1HLFFBQVFMLE9BQU9KLGdCQUFnQlUsUUFBUSxJQUFJSixRQUFRLENBQUMsR0FBRztvQkFDN0QsTUFBTUssVUFBVVAsT0FBT0osZ0JBQWdCWSxVQUFVLElBQUlOLFFBQVEsQ0FBQyxHQUFHO29CQUNqRSxNQUFNTyxVQUFVVCxPQUFPSixnQkFBZ0JjLFVBQVUsSUFBSVIsUUFBUSxDQUFDLEdBQUc7b0JBRWpFLE1BQU1TLGdCQUFnQixHQUFXWixPQUFSRixNQUFLLEtBQVlNLE9BQVRKLE9BQU0sS0FBVU0sT0FBUEYsS0FBSSxLQUFZSSxPQUFURixPQUFNLEtBQWNJLE9BQVhGLFNBQVEsS0FBVyxPQUFSRTtvQkFDckVmLG9CQUFvQmlCO2dCQUN0Qjs7WUFFQSxNQUFNQzsrREFBcUI7b0JBQ3pCLE1BQU1oQixrQkFBa0IsSUFBSU4sS0FBS0YsbUJBQW1CO29CQUNwRCxNQUFNeUIsY0FBYyxJQUFJdkI7b0JBRXhCLE1BQU13QixpQkFBaUJsQixnQkFBZ0JtQixPQUFPLEtBQUtGLFlBQVlFLE9BQU87b0JBRXRFLElBQUlELGtCQUFrQixHQUFHO3dCQUN2QnRCLGFBQWE7d0JBQ2I7b0JBQ0Y7b0JBRUEsNkRBQTZEO29CQUM3RCxNQUFNd0IsUUFBUUMsS0FBS0MsS0FBSyxDQUFDSixpQkFBa0IsUUFBTyxLQUFLLEtBQUssS0FBSyxHQUFFO29CQUNuRSxNQUFNSyxTQUFTRixLQUFLQyxLQUFLLENBQ3ZCLGlCQUFtQixRQUFPLEtBQUssS0FBSyxLQUFLLEdBQUUsSUFDeEMsUUFBTyxLQUFLLEtBQUssS0FBSyxFQUFDO29CQUU1QixNQUFNRSxPQUFPSCxLQUFLQyxLQUFLLENBQ3JCLGlCQUFtQixRQUFPLEtBQUssS0FBSyxLQUFLLEVBQUMsSUFBTyxRQUFPLEtBQUssS0FBSyxFQUFDO29CQUVyRSxNQUFNYixRQUFRWSxLQUFLQyxLQUFLLENBQ3RCLGlCQUFtQixRQUFPLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEVBQUM7b0JBRTNELE1BQU1YLFVBQVVVLEtBQUtDLEtBQUssQ0FDeEIsaUJBQW1CLFFBQU8sS0FBSyxFQUFDLElBQU8sUUFBTyxFQUFDO29CQUVqRCxNQUFNVCxVQUFVUSxLQUFLQyxLQUFLLENBQUMsaUJBQW1CLFFBQU8sRUFBQyxJQUFNO29CQUU1RCxJQUFJRyxlQUFlO29CQUVuQixzREFBc0Q7b0JBQ3RELElBQUlMLFFBQVEsR0FBRzt3QkFDYkssZ0JBQWdCLEdBQWdCTCxPQUFiQSxPQUFNLFNBQTRCLE9BQXJCQSxRQUFRLElBQUksTUFBTSxJQUFHO29CQUN2RDtvQkFDQSxJQUFJRyxTQUFTLEtBQUtILFFBQVEsR0FBRzt3QkFDM0JLLGdCQUFnQixHQUFrQkYsT0FBZkEsUUFBTyxVQUE4QixPQUF0QkEsU0FBUyxJQUFJLE1BQU0sSUFBRztvQkFDMUQ7b0JBQ0EsSUFBSUMsT0FBTyxLQUFLRCxTQUFTLEtBQUtILFFBQVEsR0FBRzt3QkFDdkNLLGdCQUFnQixHQUFjRCxPQUFYQSxNQUFLLFFBQTBCLE9BQXBCQSxPQUFPLElBQUksTUFBTSxJQUFHO29CQUNwRDtvQkFDQUMsZ0JBQWdCLEdBQWdCaEIsT0FBYkEsT0FBTSxTQUE0QixPQUFyQkEsUUFBUSxJQUFJLE1BQU0sSUFBRztvQkFDckRnQixnQkFBZ0IsR0FBb0JkLE9BQWpCQSxTQUFRLFdBQWdDLE9BQXZCQSxVQUFVLElBQUksTUFBTSxJQUFHO29CQUMzRGMsZ0JBQWdCLEdBQW9CWixPQUFqQkEsU0FBUSxXQUFnQyxPQUF2QkEsVUFBVSxJQUFJLE1BQU07b0JBRXhEakIsYUFBYTZCO2dCQUNmOztZQUVBMUI7WUFDQWlCO1lBRUEsTUFBTVUsV0FBV0MsWUFBWVgsb0JBQW9CO1lBRWpEOzRDQUFPLElBQU1ZLGNBQWNGOzRDQUFXLGdEQUFnRDtRQUN4RjttQ0FBRztRQUFDbEM7S0FBaUI7SUFFckIscUJBQ0UsOERBQUNxQztrQkFDQyw0RUFBQ0M7O2dCQUFHO2dCQUFZbkM7Ozs7Ozs7Ozs7OztBQUd0QjtHQWxGTUo7S0FBQUE7QUFtRk4saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYWxhdGlmL0Rlc2t0b3Avd29yay92b3Rpbmctc3lzdGVtL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBDb3VudGRvd25UaW1lciA9ICh7IGVuZERhdGVJblNlY29uZHMgfTogeyBlbmREYXRlSW5TZWNvbmRzOiBudW1iZXIgfSkgPT4ge1xuIFxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApOyAvLyBNdWx0aXBseSBieSAxMDAwIHRvIGdldCBiYWNrIG1pbGxpc2Vjb25kc1xuIFxuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2VuZERhdGVGb3JtYXR0ZWQsIHNldEVuZERhdGVGb3JtYXR0ZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdEVuZERhdGUgPSAoKSA9PiB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBVbml4IHRpbWVzdGFtcCB0byBhIHJlYWRhYmxlIGRhdGUgc3RyaW5nXG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7XG4gICAgICBjb25zdCB5ZWFyID0gc2VsZWN0ZWRFbmREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBob3VycyA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LyR7bW9udGh9LyR7ZGF5fSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgICAgc2V0RW5kRGF0ZUZvcm1hdHRlZChmb3JtYXR0ZWREYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsY3VsYXRlQ291bnRkb3duID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApO1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICBjb25zdCB0aW1lRGlmZmVyZW5jZSA9IHNlbGVjdGVkRW5kRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50VGltZS5nZXRUaW1lKCk7XG5cbiAgICAgIGlmICh0aW1lRGlmZmVyZW5jZSA8PSAwKSB7XG4gICAgICAgIHNldENvdW50ZG93bihcIlBvbGwgaGFzIGVuZGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB5ZWFycywgbW9udGhzLCBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgIGNvbnN0IHllYXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSk7XG4gICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSkpIC9cbiAgICAgICAgICAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNClcbiAgICAgICk7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICk7XG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgbGV0IGNvdW50ZG93blN0ciA9IFwiXCI7XG5cbiAgICAgIC8vIEZvcm1hdCB0aGUgY291bnRkb3duIHN0cmluZyBiYXNlZCBvbiB0aGUgdGltZSB1bml0c1xuICAgICAgaWYgKHllYXJzID4gMCkge1xuICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7eWVhcnN9IFllYXIke3llYXJzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICB9XG4gICAgICBpZiAobW9udGhzID4gMCB8fCB5ZWFycyA+IDApIHtcbiAgICAgICAgY291bnRkb3duU3RyICs9IGAke21vbnRoc30gTW9udGgke21vbnRocyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgfVxuICAgICAgaWYgKGRheXMgPiAwIHx8IG1vbnRocyA+IDAgfHwgeWVhcnMgPiAwKSB7XG4gICAgICAgIGNvdW50ZG93blN0ciArPSBgJHtkYXlzfSBEYXkke2RheXMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIH1cbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHtob3Vyc30gSG91ciR7aG91cnMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHttaW51dGVzfSBNaW51dGUke21pbnV0ZXMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHtzZWNvbmRzfSBTZWNvbmQke3NlY29uZHMgPiAxID8gXCJzXCIgOiBcIlwifWA7XG5cbiAgICAgIHNldENvdW50ZG93bihjb3VudGRvd25TdHIpO1xuICAgIH07XG5cbiAgICBmb3JtYXRFbmREYXRlKCk7XG4gICAgY2FsY3VsYXRlQ291bnRkb3duKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNhbGN1bGF0ZUNvdW50ZG93biwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIENsZWFuIHVwIHRoZSBpbnRlcnZhbCB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xuICB9LCBbZW5kRGF0ZUluU2Vjb25kc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5Db3VudGRvd246IHtjb3VudGRvd259PC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291bnRkb3duVGltZXIiLCJlbmREYXRlSW5TZWNvbmRzIiwiZGF0ZSIsIkRhdGUiLCJjb3VudGRvd24iLCJzZXRDb3VudGRvd24iLCJlbmREYXRlRm9ybWF0dGVkIiwic2V0RW5kRGF0ZUZvcm1hdHRlZCIsImZvcm1hdEVuZERhdGUiLCJzZWxlY3RlZEVuZERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsIlN0cmluZyIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJkYXkiLCJnZXREYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJmb3JtYXR0ZWREYXRlIiwiY2FsY3VsYXRlQ291bnRkb3duIiwiY3VycmVudFRpbWUiLCJ0aW1lRGlmZmVyZW5jZSIsImdldFRpbWUiLCJ5ZWFycyIsIk1hdGgiLCJmbG9vciIsIm1vbnRocyIsImRheXMiLCJjb3VudGRvd25TdHIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImgzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});