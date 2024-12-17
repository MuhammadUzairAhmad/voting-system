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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst convertUnixToDate = (endDateInSeconds)=>{\n    const date = new Date(endDateInSeconds * 1000); // Convert to milliseconds\n    const formattedDate = date.toLocaleDateString(); // e.g., \"12/31/2024\"\n    const formattedTime = date.toLocaleTimeString(); // e.g., \"5:30:00 PM\"\n    return \"\".concat(formattedDate, \" \").concat(formattedTime);\n};\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds } = param;\n    _s();\n    const endDateReadable = convertUnixToDate(endDateInSeconds);\n    console.log(\"End Date: 121212\", endDateReadable);\n    const date = new Date(endDateInSeconds * 1000); // Multiply by 1000 to get back milliseconds\n    console.log(date.toISOString());\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDateFormatted, setEndDateFormatted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const formatEndDate = {\n                \"CountdownTimer.useEffect.formatEndDate\": ()=>{\n                    // Convert the Unix timestamp to a readable date string\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const year = selectedEndDate.getFullYear();\n                    const month = String(selectedEndDate.getMonth() + 1).padStart(2, \"0\");\n                    const day = String(selectedEndDate.getDate()).padStart(2, \"0\");\n                    const hours = String(selectedEndDate.getHours()).padStart(2, \"0\");\n                    const minutes = String(selectedEndDate.getMinutes()).padStart(2, \"0\");\n                    const seconds = String(selectedEndDate.getSeconds()).padStart(2, \"0\");\n                    const formattedDate = \"\".concat(year, \"/\").concat(month, \"/\").concat(day, \" \").concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n                    setEndDateFormatted(formattedDate);\n                }\n            }[\"CountdownTimer.useEffect.formatEndDate\"];\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    // Convert Unix timestamp (in seconds) to Date object (in milliseconds)\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    // Calculate the time difference\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    let countdownStr = \"\";\n                    // Format the countdown string based on the time units\n                    if (years > 0) {\n                        countdownStr += \"\".concat(years, \" Year\").concat(years > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (months > 0 || years > 0) {\n                        countdownStr += \"\".concat(months, \" Month\").concat(months > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (days > 0 || months > 0 || years > 0) {\n                        countdownStr += \"\".concat(days, \" Day\").concat(days > 1 ? \"s\" : \"\", \", \");\n                    }\n                    countdownStr += \"\".concat(hours, \" Hour\").concat(hours > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(minutes, \" Minute\").concat(minutes > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(seconds, \" Second\").concat(seconds > 1 ? \"s\" : \"\");\n                    setCountdown(countdownStr);\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            // Format the end date and calculate countdown\n            formatEndDate();\n            calculateCountdown();\n            // Update countdown every second\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"End Date: \",\n                    endDateFormatted\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Countdown: \",\n                    countdown\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"sBFjVcl1fkgITufZvUGWmnjaamk=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1HLG9CQUFvQixDQUFDQztJQUN6QixNQUFNQyxPQUFPLElBQUlDLEtBQUtGLG1CQUFtQixPQUFPLDBCQUEwQjtJQUMxRSxNQUFNRyxnQkFBZ0JGLEtBQUtHLGtCQUFrQixJQUFJLHFCQUFxQjtJQUN0RSxNQUFNQyxnQkFBZ0JKLEtBQUtLLGtCQUFrQixJQUFJLHFCQUFxQjtJQUV0RSxPQUFPLEdBQW9CRCxPQUFqQkYsZUFBYyxLQUFpQixPQUFkRTtBQUM3QjtBQUVBLE1BQU1FLGlCQUFpQjtRQUFDLEVBQUVQLGdCQUFnQixFQUFnQzs7SUFDeEUsTUFBTVEsa0JBQWtCVCxrQkFBa0JDO0lBQzFDUyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRjtJQUVoQyxNQUFNUCxPQUFPLElBQUlDLEtBQUtGLG1CQUFtQixPQUFPLDRDQUE0QztJQUM1RlMsUUFBUUMsR0FBRyxDQUFDVCxLQUFLVSxXQUFXO0lBRTVCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBUztJQUNuRCxNQUFNLENBQUNnQixrQkFBa0JDLG9CQUFvQixHQUFHakIsK0NBQVFBLENBQVM7SUFFakVELGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1tQjswREFBZ0I7b0JBQ3BCLHVEQUF1RDtvQkFDdkQsTUFBTUMsa0JBQWtCLElBQUlmLEtBQUtGLG1CQUFtQjtvQkFDcEQsTUFBTWtCLE9BQU9ELGdCQUFnQkUsV0FBVztvQkFDeEMsTUFBTUMsUUFBUUMsT0FBT0osZ0JBQWdCSyxRQUFRLEtBQUssR0FBR0MsUUFBUSxDQUFDLEdBQUc7b0JBQ2pFLE1BQU1DLE1BQU1ILE9BQU9KLGdCQUFnQlEsT0FBTyxJQUFJRixRQUFRLENBQUMsR0FBRztvQkFDMUQsTUFBTUcsUUFBUUwsT0FBT0osZ0JBQWdCVSxRQUFRLElBQUlK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RUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3VzYW1hbGF0aWYvRGVza3RvcC93b3JrL3ZvdGluZy1zeXN0ZW0vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50L0NvdW50ZG93blRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBjb252ZXJ0VW5peFRvRGF0ZSA9IChlbmREYXRlSW5TZWNvbmRzOiBudW1iZXIpID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVJblNlY29uZHMgKiAxMDAwKTsgLy8gQ29udmVydCB0byBtaWxsaXNlY29uZHNcbiAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7IC8vIGUuZy4sIFwiMTIvMzEvMjAyNFwiXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpOyAvLyBlLmcuLCBcIjU6MzA6MDAgUE1cIlxuXG4gIHJldHVybiBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcbn07XG5cbmNvbnN0IENvdW50ZG93blRpbWVyID0gKHsgZW5kRGF0ZUluU2Vjb25kcyB9OiB7IGVuZERhdGVJblNlY29uZHM6IG51bWJlciB9KSA9PiB7XG4gIGNvbnN0IGVuZERhdGVSZWFkYWJsZSA9IGNvbnZlcnRVbml4VG9EYXRlKGVuZERhdGVJblNlY29uZHMpO1xuICBjb25zb2xlLmxvZyhcIkVuZCBEYXRlOiAxMjEyMTJcIiwgZW5kRGF0ZVJlYWRhYmxlKTtcblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApOyAvLyBNdWx0aXBseSBieSAxMDAwIHRvIGdldCBiYWNrIG1pbGxpc2Vjb25kc1xuICBjb25zb2xlLmxvZyhkYXRlLnRvSVNPU3RyaW5nKCkpO1xuXG4gIGNvbnN0IFtjb3VudGRvd24sIHNldENvdW50ZG93bl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZW5kRGF0ZUZvcm1hdHRlZCwgc2V0RW5kRGF0ZUZvcm1hdHRlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0RW5kRGF0ZSA9ICgpID0+IHtcbiAgICAgIC8vIENvbnZlcnQgdGhlIFVuaXggdGltZXN0YW1wIHRvIGEgcmVhZGFibGUgZGF0ZSBzdHJpbmdcbiAgICAgIGNvbnN0IHNlbGVjdGVkRW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVJblNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHllYXIgPSBzZWxlY3RlZEVuZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3QgZGF5ID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBtaW51dGVzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldFNlY29uZHMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7eWVhcn0vJHttb250aH0vJHtkYXl9ICR7aG91cnN9OiR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgICBzZXRFbmREYXRlRm9ybWF0dGVkKGZvcm1hdHRlZERhdGUpO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxjdWxhdGVDb3VudGRvd24gPSAoKSA9PiB7XG4gICAgICAvLyBDb252ZXJ0IFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKSB0byBEYXRlIG9iamVjdCAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApO1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIHRpbWUgZGlmZmVyZW5jZVxuICAgICAgY29uc3QgdGltZURpZmZlcmVuY2UgPSBzZWxlY3RlZEVuZERhdGUuZ2V0VGltZSgpIC0gY3VycmVudFRpbWUuZ2V0VGltZSgpO1xuXG4gICAgICBpZiAodGltZURpZmZlcmVuY2UgPD0gMCkge1xuICAgICAgICBzZXRDb3VudGRvd24oXCJQb2xsIGhhcyBlbmRlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGUgeWVhcnMsIG1vbnRocywgZGF5cywgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzXG4gICAgICBjb25zdCB5ZWFycyA9IE1hdGguZmxvb3IodGltZURpZmZlcmVuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSkpO1xuICAgICAgY29uc3QgbW9udGhzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpKSAvXG4gICAgICAgICAgKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMClcbiAgICAgICk7XG4gICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihcbiAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpXG4gICAgICApO1xuICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXG4gICAgICApO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cbiAgICAgIGxldCBjb3VudGRvd25TdHIgPSBcIlwiO1xuXG4gICAgICAvLyBGb3JtYXQgdGhlIGNvdW50ZG93biBzdHJpbmcgYmFzZWQgb24gdGhlIHRpbWUgdW5pdHNcbiAgICAgIGlmICh5ZWFycyA+IDApIHtcbiAgICAgICAgY291bnRkb3duU3RyICs9IGAke3llYXJzfSBZZWFyJHt5ZWFycyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgfVxuICAgICAgaWYgKG1vbnRocyA+IDAgfHwgeWVhcnMgPiAwKSB7XG4gICAgICAgIGNvdW50ZG93blN0ciArPSBgJHttb250aHN9IE1vbnRoJHttb250aHMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIH1cbiAgICAgIGlmIChkYXlzID4gMCB8fCBtb250aHMgPiAwIHx8IHllYXJzID4gMCkge1xuICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7ZGF5c30gRGF5JHtkYXlzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICB9XG4gICAgICBjb3VudGRvd25TdHIgKz0gYCR7aG91cnN9IEhvdXIke2hvdXJzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICBjb3VudGRvd25TdHIgKz0gYCR7bWludXRlc30gTWludXRlJHttaW51dGVzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICBjb3VudGRvd25TdHIgKz0gYCR7c2Vjb25kc30gU2Vjb25kJHtzZWNvbmRzID4gMSA/IFwic1wiIDogXCJcIn1gO1xuXG4gICAgICBzZXRDb3VudGRvd24oY291bnRkb3duU3RyKTtcbiAgICB9O1xuXG4gICAgLy8gRm9ybWF0IHRoZSBlbmQgZGF0ZSBhbmQgY2FsY3VsYXRlIGNvdW50ZG93blxuICAgIGZvcm1hdEVuZERhdGUoKTtcbiAgICBjYWxjdWxhdGVDb3VudGRvd24oKTtcblxuICAgIC8vIFVwZGF0ZSBjb3VudGRvd24gZXZlcnkgc2Vjb25kXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxjdWxhdGVDb3VudGRvd24sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBDbGVhbiB1cCB0aGUgaW50ZXJ2YWwgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcbiAgfSwgW2VuZERhdGVJblNlY29uZHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+RW5kIERhdGU6IHtlbmREYXRlRm9ybWF0dGVkfTwvaDI+XG4gICAgICA8aDM+Q291bnRkb3duOiB7Y291bnRkb3dufTwvaDM+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duVGltZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnZlcnRVbml4VG9EYXRlIiwiZW5kRGF0ZUluU2Vjb25kcyIsImRhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImZvcm1hdHRlZFRpbWUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJDb3VudGRvd25UaW1lciIsImVuZERhdGVSZWFkYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJ0b0lTT1N0cmluZyIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsImVuZERhdGVGb3JtYXR0ZWQiLCJzZXRFbmREYXRlRm9ybWF0dGVkIiwiZm9ybWF0RW5kRGF0ZSIsInNlbGVjdGVkRW5kRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImNhbGN1bGF0ZUNvdW50ZG93biIsImN1cnJlbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJnZXRUaW1lIiwieWVhcnMiLCJNYXRoIiwiZmxvb3IiLCJtb250aHMiLCJkYXlzIiwiY291bnRkb3duU3RyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJoMiIsImgzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});