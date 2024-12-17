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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst convertUnixToDate = (endDateInSeconds)=>{\n    const date = new Date(endDateInSeconds * 1000); // Convert to milliseconds\n    const formattedDate = date.toLocaleDateString(); // e.g., \"12/31/2024\"\n    const formattedTime = date.toLocaleTimeString(); // e.g., \"5:30:00 PM\"\n    return \"\".concat(formattedDate, \" \").concat(formattedTime);\n};\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds } = param;\n    _s();\n    const endDateReadable = convertUnixToDate(endDateInSeconds);\n    console.log(\"End Date: 121212\", endDateReadable);\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDateFormatted, setEndDateFormatted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const formatEndDate = {\n                \"CountdownTimer.useEffect.formatEndDate\": ()=>{\n                    // Convert the Unix timestamp to a readable date string\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const year = selectedEndDate.getFullYear();\n                    const month = String(selectedEndDate.getMonth() + 1).padStart(2, \"0\");\n                    const day = String(selectedEndDate.getDate()).padStart(2, \"0\");\n                    const hours = String(selectedEndDate.getHours()).padStart(2, \"0\");\n                    const minutes = String(selectedEndDate.getMinutes()).padStart(2, \"0\");\n                    const seconds = String(selectedEndDate.getSeconds()).padStart(2, \"0\");\n                    const formattedDate = \"\".concat(year, \"/\").concat(month, \"/\").concat(day, \" \").concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n                    setEndDateFormatted(formattedDate);\n                }\n            }[\"CountdownTimer.useEffect.formatEndDate\"];\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    // Convert Unix timestamp (in seconds) to Date object (in milliseconds)\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    // Calculate the time difference\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    let countdownStr = \"\";\n                    // Format the countdown string based on the time units\n                    if (years > 0) {\n                        countdownStr += \"\".concat(years, \" Year\").concat(years > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (months > 0 || years > 0) {\n                        countdownStr += \"\".concat(months, \" Month\").concat(months > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (days > 0 || months > 0 || years > 0) {\n                        countdownStr += \"\".concat(days, \" Day\").concat(days > 1 ? \"s\" : \"\", \", \");\n                    }\n                    countdownStr += \"\".concat(hours, \" Hour\").concat(hours > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(minutes, \" Minute\").concat(minutes > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(seconds, \" Second\").concat(seconds > 1 ? \"s\" : \"\");\n                    setCountdown(countdownStr);\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            // Format the end date and calculate countdown\n            formatEndDate();\n            calculateCountdown();\n            // Update countdown every second\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"End Date: \",\n                    endDateFormatted\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Countdown: \",\n                    countdown\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 95,\n        columnNumber: 7\n    }, undefined);\n};\n_s(CountdownTimer, \"sBFjVcl1fkgITufZvUGWmnjaamk=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBR25ELE1BQU1HLG9CQUFvQixDQUFDQztJQUN2QixNQUFNQyxPQUFPLElBQUlDLEtBQUtGLG1CQUFtQixPQUFPLDBCQUEwQjtJQUMxRSxNQUFNRyxnQkFBZ0JGLEtBQUtHLGtCQUFrQixJQUFJLHFCQUFxQjtJQUN0RSxNQUFNQyxnQkFBZ0JKLEtBQUtLLGtCQUFrQixJQUFJLHFCQUFxQjtJQUV0RSxPQUFPLEdBQW9CRCxPQUFqQkYsZUFBYyxLQUFpQixPQUFkRTtBQUM3QjtBQUdGLE1BQU1FLGlCQUFpQjtRQUFDLEVBQUVQLGdCQUFnQixFQUFnQzs7SUFDdEUsTUFBTVEsa0JBQWtCVCxrQkFBa0JDO0lBQzFDUyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CRjtJQUVoQyxNQUFNLENBQUNHLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQVM7SUFDbkQsTUFBTSxDQUFDZSxrQkFBa0JDLG9CQUFvQixHQUFHaEIsK0NBQVFBLENBQVM7SUFFakVELGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1rQjswREFBZ0I7b0JBQ3BCLHVEQUF1RDtvQkFDdkQsTUFBTUMsa0JBQWtCLElBQUlkLEtBQUtGLG1CQUFtQjtvQkFDcEQsTUFBTWlCLE9BQU9ELGdCQUFnQkUsV0FBVztvQkFDeEMsTUFBTUMsUUFBUUMsT0FBT0osZ0JBQWdCSyxRQUFRLEtBQUssR0FBR0MsUUFBUSxDQUFDLEdBQUc7b0JBQ2pFLE1BQU1DLE1BQU1ILE9BQU9KLGdCQUFnQlEsT0FBTyxJQUFJRixRQUFRLENBQUMsR0FBRztvQkFDMUQsTUFBTUcsUUFBUUwsT0FBT0osZ0JBQWdCVSxRQUFRLElBQUlKLFFBQVEsQ0FBQyxHQUFHO29CQUM3RCxNQUFNSyxVQUFVUCxPQUFPSixnQkFBZ0JZLFVBQVUsSUFBSU4sUUFBUSxDQUFDLEdBQUc7b0JBQ2pFLE1B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bmVudHMvY29tcG9uZW50L0NvdW50ZG93blRpbWVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmNvbnN0IGNvbnZlcnRVbml4VG9EYXRlID0gKGVuZERhdGVJblNlY29uZHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7IC8vIENvbnZlcnQgdG8gbWlsbGlzZWNvbmRzXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7IC8vIGUuZy4sIFwiMTIvMzEvMjAyNFwiXG4gICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCk7IC8vIGUuZy4sIFwiNTozMDowMCBQTVwiXG4gIFxuICAgIHJldHVybiBgJHtmb3JtYXR0ZWREYXRlfSAke2Zvcm1hdHRlZFRpbWV9YDtcbiAgfTtcbiAgXG5cbmNvbnN0IENvdW50ZG93blRpbWVyID0gKHsgZW5kRGF0ZUluU2Vjb25kcyB9OiB7IGVuZERhdGVJblNlY29uZHM6IG51bWJlciB9KSA9PiB7XG4gICAgY29uc3QgZW5kRGF0ZVJlYWRhYmxlID0gY29udmVydFVuaXhUb0RhdGUoZW5kRGF0ZUluU2Vjb25kcyk7XG4gICAgY29uc29sZS5sb2coXCJFbmQgRGF0ZTogMTIxMjEyXCIsIGVuZERhdGVSZWFkYWJsZSk7XG5cbiAgICBjb25zdCBbY291bnRkb3duLCBzZXRDb3VudGRvd25dID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgICBjb25zdCBbZW5kRGF0ZUZvcm1hdHRlZCwgc2V0RW5kRGF0ZUZvcm1hdHRlZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0RW5kRGF0ZSA9ICgpID0+IHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgVW5peCB0aW1lc3RhbXAgdG8gYSByZWFkYWJsZSBkYXRlIHN0cmluZ1xuICAgICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBzZWxlY3RlZEVuZERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IGRheSA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKHNlbGVjdGVkRW5kRGF0ZS5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS8ke21vbnRofS8ke2RheX0gJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICAgICAgc2V0RW5kRGF0ZUZvcm1hdHRlZChmb3JtYXR0ZWREYXRlKTtcbiAgICAgIH07XG4gIFxuICAgICAgY29uc3QgY2FsY3VsYXRlQ291bnRkb3duID0gKCkgPT4ge1xuICAgICAgICAvLyBDb252ZXJ0IFVuaXggdGltZXN0YW1wIChpbiBzZWNvbmRzKSB0byBEYXRlIG9iamVjdCAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlXG4gICAgICAgIGNvbnN0IHRpbWVEaWZmZXJlbmNlID0gc2VsZWN0ZWRFbmREYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRUaW1lLmdldFRpbWUoKTtcbiAgXG4gICAgICAgIGlmICh0aW1lRGlmZmVyZW5jZSA8PSAwKSB7XG4gICAgICAgICAgc2V0Q291bnRkb3duKFwiUG9sbCBoYXMgZW5kZWRcIik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBDYWxjdWxhdGUgeWVhcnMsIG1vbnRocywgZGF5cywgaG91cnMsIG1pbnV0ZXMsIGFuZCBzZWNvbmRzXG4gICAgICAgIGNvbnN0IHllYXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSk7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpKSAvXG4gICAgICAgICAgICAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkYXlzID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVEaWZmZXJlbmNlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gIFxuICAgICAgICBsZXQgY291bnRkb3duU3RyID0gXCJcIjtcbiAgXG4gICAgICAgIC8vIEZvcm1hdCB0aGUgY291bnRkb3duIHN0cmluZyBiYXNlZCBvbiB0aGUgdGltZSB1bml0c1xuICAgICAgICBpZiAoeWVhcnMgPiAwKSB7XG4gICAgICAgICAgY291bnRkb3duU3RyICs9IGAke3llYXJzfSBZZWFyJHt5ZWFycyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb250aHMgPiAwIHx8IHllYXJzID4gMCkge1xuICAgICAgICAgIGNvdW50ZG93blN0ciArPSBgJHttb250aHN9IE1vbnRoJHttb250aHMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5cyA+IDAgfHwgbW9udGhzID4gMCB8fCB5ZWFycyA+IDApIHtcbiAgICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7ZGF5c30gRGF5JHtkYXlzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICAgIH1cbiAgICAgICAgY291bnRkb3duU3RyICs9IGAke2hvdXJzfSBIb3VyJHtob3VycyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7bWludXRlc30gTWludXRlJHttaW51dGVzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICAgIGNvdW50ZG93blN0ciArPSBgJHtzZWNvbmRzfSBTZWNvbmQke3NlY29uZHMgPiAxID8gXCJzXCIgOiBcIlwifWA7XG4gIFxuICAgICAgICBzZXRDb3VudGRvd24oY291bnRkb3duU3RyKTtcbiAgICAgIH07XG4gIFxuICAgICAgLy8gRm9ybWF0IHRoZSBlbmQgZGF0ZSBhbmQgY2FsY3VsYXRlIGNvdW50ZG93blxuICAgICAgZm9ybWF0RW5kRGF0ZSgpO1xuICAgICAgY2FsY3VsYXRlQ291bnRkb3duKCk7XG4gIFxuICAgICAgLy8gVXBkYXRlIGNvdW50ZG93biBldmVyeSBzZWNvbmRcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsY3VsYXRlQ291bnRkb3duLCAxMDAwKTtcbiAgXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIENsZWFuIHVwIHRoZSBpbnRlcnZhbCB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xuICAgIH0sIFtlbmREYXRlSW5TZWNvbmRzXSk7XG4gIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+RW5kIERhdGU6IHtlbmREYXRlRm9ybWF0dGVkfTwvaDI+XG4gICAgICAgIDxoMz5Db3VudGRvd246IHtjb3VudGRvd259PC9oMz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udmVydFVuaXhUb0RhdGUiLCJlbmREYXRlSW5TZWNvbmRzIiwiZGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZm9ybWF0dGVkVGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsIkNvdW50ZG93blRpbWVyIiwiZW5kRGF0ZVJlYWRhYmxlIiwiY29uc29sZSIsImxvZyIsImNvdW50ZG93biIsInNldENvdW50ZG93biIsImVuZERhdGVGb3JtYXR0ZWQiLCJzZXRFbmREYXRlRm9ybWF0dGVkIiwiZm9ybWF0RW5kRGF0ZSIsInNlbGVjdGVkRW5kRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImNhbGN1bGF0ZUNvdW50ZG93biIsImN1cnJlbnRUaW1lIiwidGltZURpZmZlcmVuY2UiLCJnZXRUaW1lIiwieWVhcnMiLCJNYXRoIiwiZmxvb3IiLCJtb250aHMiLCJkYXlzIiwiY291bnRkb3duU3RyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJoMiIsImgzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});