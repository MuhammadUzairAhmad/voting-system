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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst convertUnixToDate = (endDateInSeconds)=>{\n    const date = new Date(endDateInSeconds * 1000); // Convert to milliseconds\n    const formattedDate = date.toLocaleDateString(); // e.g., \"12/31/2024\"\n    const formattedTime = date.toLocaleTimeString(); // e.g., \"5:30:00 PM\"\n    return \"\".concat(formattedDate, \" \").concat(formattedTime);\n};\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds } = param;\n    _s();\n    const endDateReadable = convertUnixToDate(endDateInSeconds);\n    console.log(\"End Date: 121212\", endDateReadable);\n    const convertedEndDate = new Date(endDateInSeconds * 1000);\n    console.log(\"convertedEndDate.getTime()\", convertedEndDate.toString());\n    const date = new Date(endDateInSeconds * 1000); // Multiply by 1000 to get back milliseconds\n    console.log(\"End Date: yes\", date === null || date === void 0 ? void 0 : date.toISOString());\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDateFormatted, setEndDateFormatted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const formatEndDate = {\n                \"CountdownTimer.useEffect.formatEndDate\": ()=>{\n                    // Convert the Unix timestamp to a readable date string\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const year = selectedEndDate.getFullYear();\n                    const month = String(selectedEndDate.getMonth() + 1).padStart(2, \"0\");\n                    const day = String(selectedEndDate.getDate()).padStart(2, \"0\");\n                    const hours = String(selectedEndDate.getHours()).padStart(2, \"0\");\n                    const minutes = String(selectedEndDate.getMinutes()).padStart(2, \"0\");\n                    const seconds = String(selectedEndDate.getSeconds()).padStart(2, \"0\");\n                    const formattedDate = \"\".concat(year, \"/\").concat(month, \"/\").concat(day, \" \").concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n                    setEndDateFormatted(formattedDate);\n                }\n            }[\"CountdownTimer.useEffect.formatEndDate\"];\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    // Convert Unix timestamp (in seconds) to Date object (in milliseconds)\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    // Calculate the time difference\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    let countdownStr = \"\";\n                    // Format the countdown string based on the time units\n                    if (years > 0) {\n                        countdownStr += \"\".concat(years, \" Year\").concat(years > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (months > 0 || years > 0) {\n                        countdownStr += \"\".concat(months, \" Month\").concat(months > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (days > 0 || months > 0 || years > 0) {\n                        countdownStr += \"\".concat(days, \" Day\").concat(days > 1 ? \"s\" : \"\", \", \");\n                    }\n                    countdownStr += \"\".concat(hours, \" Hour\").concat(hours > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(minutes, \" Minute\").concat(minutes > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(seconds, \" Second\").concat(seconds > 1 ? \"s\" : \"\");\n                    setCountdown(countdownStr);\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            // Format the end date and calculate countdown\n            formatEndDate();\n            calculateCountdown();\n            // Update countdown every second\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"End Date: \",\n                    endDateFormatted\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Countdown: \",\n                    countdown\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"sBFjVcl1fkgITufZvUGWmnjaamk=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLG9CQUFvQixDQUFDQztJQUN6QixNQUFNQyxPQUFPLElBQUlDLEtBQUtGLG1CQUFtQixPQUFPLDBCQUEwQjtJQUMxRSxNQUFNRyxnQkFBZ0JGLEtBQUtHLGtCQUFrQixJQUFJLHFCQUFxQjtJQUN0RSxNQUFNQyxnQkFBZ0JKLEtBQUtLLGtCQUFrQixJQUFJLHFCQUFxQjtJQUV0RSxPQUFPLEdBQW9CRCxPQUFqQkYsZUFBYyxLQUFpQixPQUFkRTtBQUM3QjtBQUVBLE1BQU1FLGlCQUFpQjtRQUFDLEVBQUVQLGdCQUFnQixFQUFnQzs7SUFDeEUsTUFBTVEsa0JBQWtCVCxrQkFBa0JDO0lBQzFDUyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRjtJQUdoQyxNQUFNRyxtQkFBbUIsSUFBSVQsS0FBS0YsbUJBQW1CO0lBQ3ZEUyxRQUFRQyxHQUFHLENBQUMsOEJBQTZCQyxpQkFBaUJDLFFBQVE7SUFFaEUsTUFBTVgsT0FBTyxJQUFJQyxLQUFLRixtQkFBbUIsT0FBTyw0Q0FBNEM7SUFDNUZTLFFBQVFDLEdBQUcsQ0FBQyxpQkFBZ0JULGlCQUFBQSwyQkFBQUEsS0FBTVksV0FBVztJQUU3QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2pCLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ2tCLGtCQUFrQkMsb0JBQW9CLEdBQUduQiwrQ0FBUUEsQ0FBUztJQUVqRUQsZ0RBQVNBO29DQUFDO1lBQ1IsTUFBTXFCOzBEQUFnQjtvQkFDcEIsdURBQXVEO29CQUN2RCxNQUFNQyxrQkFBa0IsSUFBSWpCLEtBQUtGLG1CQUFtQjtvQkFDcEQsTUFBTW9CLE9BQU9ELGdCQUFnQkUsV0FBVztvQkFDeEMsTUFBTUMsUUFBUUMsT0FBT0osZ0JBQWdCSyxRQUFRLEtBQUssR0FBR0MsUUFBUSxDQUFDLEdB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QytDOzswQkFDQyw4REFBQ0M7O29CQUFHO29CQUFXaEM7Ozs7Ozs7MEJBQ2YsOERBQUNpQzs7b0JBQUc7b0JBQVluQzs7Ozs7Ozs7Ozs7OztBQUd0QjtHQTlGTVA7S0FBQUE7QUErRk4saUVBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2FtYWxhdGlmL0Rlc2t0b3Avd29yay92b3Rpbmctc3lzdGVtL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgY29udmVydFVuaXhUb0RhdGUgPSAoZW5kRGF0ZUluU2Vjb25kczogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7IC8vIENvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpOyAvLyBlLmcuLCBcIjEyLzMxLzIwMjRcIlxuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTsgLy8gZS5nLiwgXCI1OjMwOjAwIFBNXCJcblxuICByZXR1cm4gYCR7Zm9ybWF0dGVkRGF0ZX0gJHtmb3JtYXR0ZWRUaW1lfWA7XG59O1xuXG5jb25zdCBDb3VudGRvd25UaW1lciA9ICh7IGVuZERhdGVJblNlY29uZHMgfTogeyBlbmREYXRlSW5TZWNvbmRzOiBudW1iZXIgfSkgPT4ge1xuICBjb25zdCBlbmREYXRlUmVhZGFibGUgPSBjb252ZXJ0VW5peFRvRGF0ZShlbmREYXRlSW5TZWNvbmRzKTtcbiAgY29uc29sZS5sb2coXCJFbmQgRGF0ZTogMTIxMjEyXCIsIGVuZERhdGVSZWFkYWJsZSk7XG5cblxuICBjb25zdCBjb252ZXJ0ZWRFbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApO1xuY29uc29sZS5sb2coXCJjb252ZXJ0ZWRFbmREYXRlLmdldFRpbWUoKVwiLGNvbnZlcnRlZEVuZERhdGUudG9TdHJpbmcoKSlcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApOyAvLyBNdWx0aXBseSBieSAxMDAwIHRvIGdldCBiYWNrIG1pbGxpc2Vjb25kc1xuICBjb25zb2xlLmxvZyhcIkVuZCBEYXRlOiB5ZXNcIixkYXRlPy50b0lTT1N0cmluZygpKTtcblxuICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2VuZERhdGVGb3JtYXR0ZWQsIHNldEVuZERhdGVGb3JtYXR0ZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdEVuZERhdGUgPSAoKSA9PiB7XG4gICAgICAvLyBDb252ZXJ0IHRoZSBVbml4IHRpbWVzdGFtcCB0byBhIHJlYWRhYmxlIGRhdGUgc3RyaW5nXG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7XG4gICAgICBjb25zdCB5ZWFyID0gc2VsZWN0ZWRFbmREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBtb250aCA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBob3VycyA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3QgbWludXRlcyA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcblxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGAke3llYXJ9LyR7bW9udGh9LyR7ZGF5fSAke2hvdXJzfToke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xuICAgICAgc2V0RW5kRGF0ZUZvcm1hdHRlZChmb3JtYXR0ZWREYXRlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2FsY3VsYXRlQ291bnRkb3duID0gKCkgPT4ge1xuICAgICAgLy8gQ29udmVydCBVbml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcykgdG8gRGF0ZSBvYmplY3QgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVJblNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0aW1lIGRpZmZlcmVuY2VcbiAgICAgIGNvbnN0IHRpbWVEaWZmZXJlbmNlID0gc2VsZWN0ZWRFbmREYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRUaW1lLmdldFRpbWUoKTtcblxuICAgICAgaWYgKHRpbWVEaWZmZXJlbmNlIDw9IDApIHtcbiAgICAgICAgc2V0Q291bnRkb3duKFwiUG9sbCBoYXMgZW5kZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIHllYXJzLCBtb250aHMsIGRheXMsIGhvdXJzLCBtaW51dGVzLCBhbmQgc2Vjb25kc1xuICAgICAgY29uc3QgeWVhcnMgPSBNYXRoLmZsb29yKHRpbWVEaWZmZXJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpKTtcbiAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSkgL1xuICAgICAgICAgICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzApXG4gICAgICApO1xuICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzApKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcbiAgICAgICk7XG4gICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXG4gICAgICBsZXQgY291bnRkb3duU3RyID0gXCJcIjtcblxuICAgICAgLy8gRm9ybWF0IHRoZSBjb3VudGRvd24gc3RyaW5nIGJhc2VkIG9uIHRoZSB0aW1lIHVuaXRzXG4gICAgICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgICAgIGNvdW50ZG93blN0ciArPSBgJHt5ZWFyc30gWWVhciR7eWVhcnMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIH1cbiAgICAgIGlmIChtb250aHMgPiAwIHx8IHllYXJzID4gMCkge1xuICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7bW9udGhzfSBNb250aCR7bW9udGhzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICB9XG4gICAgICBpZiAoZGF5cyA+IDAgfHwgbW9udGhzID4gMCB8fCB5ZWFycyA+IDApIHtcbiAgICAgICAgY291bnRkb3duU3RyICs9IGAke2RheXN9IERheSR7ZGF5cyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgfVxuICAgICAgY291bnRkb3duU3RyICs9IGAke2hvdXJzfSBIb3VyJHtob3VycyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgY291bnRkb3duU3RyICs9IGAke21pbnV0ZXN9IE1pbnV0ZSR7bWludXRlcyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgY291bnRkb3duU3RyICs9IGAke3NlY29uZHN9IFNlY29uZCR7c2Vjb25kcyA+IDEgPyBcInNcIiA6IFwiXCJ9YDtcblxuICAgICAgc2V0Q291bnRkb3duKGNvdW50ZG93blN0cik7XG4gICAgfTtcblxuICAgIC8vIEZvcm1hdCB0aGUgZW5kIGRhdGUgYW5kIGNhbGN1bGF0ZSBjb3VudGRvd25cbiAgICBmb3JtYXRFbmREYXRlKCk7XG4gICAgY2FsY3VsYXRlQ291bnRkb3duKCk7XG5cbiAgICAvLyBVcGRhdGUgY291bnRkb3duIGV2ZXJ5IHNlY29uZFxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsY3VsYXRlQ291bnRkb3duLCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gQ2xlYW4gdXAgdGhlIGludGVydmFsIHdoZW4gY29tcG9uZW50IHVubW91bnRzXG4gIH0sIFtlbmREYXRlSW5TZWNvbmRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPkVuZCBEYXRlOiB7ZW5kRGF0ZUZvcm1hdHRlZH08L2gyPlxuICAgICAgPGgzPkNvdW50ZG93bjoge2NvdW50ZG93bn08L2gzPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93blRpbWVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb252ZXJ0VW5peFRvRGF0ZSIsImVuZERhdGVJblNlY29uZHMiLCJkYXRlIiwiRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJmb3JtYXR0ZWRUaW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiQ291bnRkb3duVGltZXIiLCJlbmREYXRlUmVhZGFibGUiLCJjb25zb2xlIiwibG9nIiwiY29udmVydGVkRW5kRGF0ZSIsInRvU3RyaW5nIiwidG9JU09TdHJpbmciLCJjb3VudGRvd24iLCJzZXRDb3VudGRvd24iLCJlbmREYXRlRm9ybWF0dGVkIiwic2V0RW5kRGF0ZUZvcm1hdHRlZCIsImZvcm1hdEVuZERhdGUiLCJzZWxlY3RlZEVuZERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsIlN0cmluZyIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJkYXkiLCJnZXREYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJjYWxjdWxhdGVDb3VudGRvd24iLCJjdXJyZW50VGltZSIsInRpbWVEaWZmZXJlbmNlIiwiZ2V0VGltZSIsInllYXJzIiwiTWF0aCIsImZsb29yIiwibW9udGhzIiwiZGF5cyIsImNvdW50ZG93blN0ciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwiaDIiLCJoMyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});