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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CountdownTimer = (param)=>{\n    let { endDateInSeconds } = param;\n    _s();\n    const date = new Date(endDateInSeconds * 1000); // Multiply by 1000 to get back milliseconds\n    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [endDateFormatted, setEndDateFormatted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"CountdownTimer.useEffect\": ()=>{\n            const formatEndDate = {\n                \"CountdownTimer.useEffect.formatEndDate\": ()=>{\n                    // Convert the Unix timestamp to a readable date string\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const year = selectedEndDate.getFullYear();\n                    const month = String(selectedEndDate.getMonth() + 1).padStart(2, \"0\");\n                    const day = String(selectedEndDate.getDate()).padStart(2, \"0\");\n                    const hours = String(selectedEndDate.getHours()).padStart(2, \"0\");\n                    const minutes = String(selectedEndDate.getMinutes()).padStart(2, \"0\");\n                    const seconds = String(selectedEndDate.getSeconds()).padStart(2, \"0\");\n                    const formattedDate = \"\".concat(year, \"/\").concat(month, \"/\").concat(day, \" \").concat(hours, \":\").concat(minutes, \":\").concat(seconds);\n                    setEndDateFormatted(formattedDate);\n                }\n            }[\"CountdownTimer.useEffect.formatEndDate\"];\n            const calculateCountdown = {\n                \"CountdownTimer.useEffect.calculateCountdown\": ()=>{\n                    // Convert Unix timestamp (in seconds) to Date object (in milliseconds)\n                    const selectedEndDate = new Date(endDateInSeconds * 1000);\n                    const currentTime = new Date();\n                    // Calculate the time difference\n                    const timeDifference = selectedEndDate.getTime() - currentTime.getTime();\n                    if (timeDifference <= 0) {\n                        setCountdown(\"Poll has ended\");\n                        return;\n                    }\n                    // Calculate years, months, days, hours, minutes, and seconds\n                    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));\n                    const months = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30));\n                    const days = Math.floor(timeDifference % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24));\n                    const hours = Math.floor(timeDifference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n                    const minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));\n                    const seconds = Math.floor(timeDifference % (1000 * 60) / 1000);\n                    let countdownStr = \"\";\n                    // Format the countdown string based on the time units\n                    if (years > 0) {\n                        countdownStr += \"\".concat(years, \" Year\").concat(years > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (months > 0 || years > 0) {\n                        countdownStr += \"\".concat(months, \" Month\").concat(months > 1 ? \"s\" : \"\", \", \");\n                    }\n                    if (days > 0 || months > 0 || years > 0) {\n                        countdownStr += \"\".concat(days, \" Day\").concat(days > 1 ? \"s\" : \"\", \", \");\n                    }\n                    countdownStr += \"\".concat(hours, \" Hour\").concat(hours > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(minutes, \" Minute\").concat(minutes > 1 ? \"s\" : \"\", \", \");\n                    countdownStr += \"\".concat(seconds, \" Second\").concat(seconds > 1 ? \"s\" : \"\");\n                    setCountdown(countdownStr);\n                }\n            }[\"CountdownTimer.useEffect.calculateCountdown\"];\n            formatEndDate();\n            calculateCountdown();\n            const interval = setInterval(calculateCountdown, 1000);\n            return ({\n                \"CountdownTimer.useEffect\": ()=>clearInterval(interval)\n            })[\"CountdownTimer.useEffect\"]; // Clean up the interval when component unmounts\n        }\n    }[\"CountdownTimer.useEffect\"], [\n        endDateInSeconds\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: [\n                \"Countdown: \",\n                countdown\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/usamalatif/Desktop/work/voting-system/src/components/component/CountdownTimer.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"sBFjVcl1fkgITufZvUGWmnjaamk=\");\n_c = CountdownTimer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC9Db3VudGRvd25UaW1lci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1EO0FBR25ELE1BQU1HLGlCQUFpQjtRQUFDLEVBQUVDLGdCQUFnQixFQUFnQzs7SUFFeEUsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRixtQkFBbUIsT0FBTyw0Q0FBNEM7SUFFNUYsTUFBTSxDQUFDRyxXQUFXQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFTO0lBQ25ELE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQVM7SUFFakVELGdEQUFTQTtvQ0FBQztZQUNSLE1BQU1VOzBEQUFnQjtvQkFDcEIsdURBQXVEO29CQUN2RCxNQUFNQyxrQkFBa0IsSUFBSU4sS0FBS0YsbUJBQW1CO29CQUNwRCxNQUFNUyxPQUFPRCxnQkFBZ0JFLFdBQVc7b0JBQ3hDLE1BQU1DLFFBQVFDLE9BQU9KLGdCQUFnQkssUUFBUSxLQUFLLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO29CQUNqRSxNQUFNQyxNQUFNSCxPQUFPSixnQkFBZ0JRLE9BQU8sSUFBSUYsUUFBUSxDQUFDLEdBQUc7b0JBQzFELE1BQU1HLFFBQVFMLE9BQU9KLGdCQUFnQlUsUUFBUSxJQUFJSixRQUFRLENBQUMsR0FBRztvQkFDN0QsTUFBTUssVUFBVVAsT0FBT0osZ0JBQWdCWSxVQUFVLElBQUlOLFFBQVEsQ0FBQyxHQUFHO29CQUNqRSxNQUFNTyxVQUFVVCxPQUFPSixnQkFBZ0JjLFVBQVUsSUFBSVIsUUFBUSxDQUFDLEdBQUc7b0JBRWpFLE1BQU1TLGdCQUFnQixHQUFXWixPQUFSRixNQUFLLEtBQVlNLE9BQVRKLE9BQU0sS0FBVU0sT0FBUEYsS0FBSSxLQUFZSSxPQUFURixPQUFNLEtBQWNJLE9BQVhGLFNBQVEsS0FBVyxPQUFSRTtvQkFDckVmLG9CQUFvQmlCO2dCQUN0Qjs7WUFFQSxNQUFNQzsrREFBcUI7b0JBQ3pCLHVFQUF1RTtvQkFDdkUsTUFBTWhCLGtCQUFrQixJQUFJTixLQUFLRixtQkFBbUI7b0JBQ3BELE1BQU15QixjQUFjLElBQUl2QjtvQkFFeEIsZ0NBQWdDO29CQUNoQyxNQUFNd0IsaUJBQWlCbEIsZ0JBQWdCbUIsT0FBTyxLQUFLRixZQUFZRSxPQUFPO29CQUV0RSxJQUFJRCxrQkFBa0IsR0FBRzt3QkFDdkJ0QixhQUFhO3dCQUNiO29CQUNGO29CQUVBLDZEQUE2RDtvQkFDN0QsTUFBTXdCLFFBQVFDLEtBQUtDLEtBQUssQ0FBQ0osaUJBQWtCLFFBQU8sS0FBSyxLQUFLLEtBQUssR0FBRTtvQkFDbkUsTUFBTUssU0FBU0YsS0FBS0MsS0FBSyxDQUN2QixpQkFBbUIsUUFBTyxLQUFLLEtBQUssS0FBSyxHQUFFLElBQ3hDLFFBQU8sS0FBSyxLQUFLLEtBQUssRUFBQztvQkFFNUIsTUFBTUUsT0FBT0gsS0FBS0MsS0FBSyxDQUNyQixpQkFBbUIsUUFBTyxLQUFLLEtBQUssS0FBSyxFQUFDLElBQU8sUUFBTyxLQUFLLEtBQUssRUFBQztvQkFFckUsTUFBTWIsUUFBUVksS0FBS0MsS0FBSyxDQUN0QixpQkFBbUIsUUFBTyxLQUFLLEtBQUssRUFBQyxJQUFPLFFBQU8sS0FBSyxFQUFDO29CQUUzRCxNQUFNWCxVQUFVVSxLQUFLQyxLQUFLLENBQ3hCLGlCQUFtQixRQUFPLEtBQUssRUFBQyxJQUFPLFFBQU8sRUFBQztvQkFFakQsTUFBTVQsVUFBVVEsS0FBS0MsS0FBSyxDQUFDLGlCQUFtQixRQUFPLEVBQUMsSUFBTTtvQkFFNUQsSUFBSUcsZUFBZTtvQkFFbkIsc0RBQXNEO29CQUN0RCxJQUFJTCxRQUFRLEdBQUc7d0JBQ2JLLGdCQUFnQixHQUFnQkwsT0FBYkEsT0FBTSxTQUE0QixPQUFyQkEsUUFBUSxJQUFJLE1BQU0sSUFBRztvQkFDdkQ7b0JBQ0EsSUFBSUcsU0FBUyxLQUFLSCxRQUFRLEdBQUc7d0JBQzNCSyxnQkFBZ0IsR0FBa0JGLE9BQWZBLFFBQU8sVUFBOEIsT0FBdEJBLFNBQVMsSUFBSSxNQUFNLElBQUc7b0JBQzFEO29CQUNBLElBQUlDLE9BQU8sS0FBS0QsU0FBUyxLQUFLSCxRQUFRLEdBQUc7d0JBQ3ZDSyxnQkFBZ0IsR0FBY0QsT0FBWEEsTUFBSyxRQUEwQixPQUFwQkEsT0FBTyxJQUFJLE1BQU0sSUFBRztvQkFDcEQ7b0JBQ0FDLGdCQUFnQixHQUFnQmhCLE9BQWJBLE9BQU0sU0FBNEIsT0FBckJBLFFBQVEsSUFBSSxNQUFNLElBQUc7b0JBQ3JEZ0IsZ0JBQWdCLEdBQW9CZCxPQUFqQkEsU0FBUSxXQUFnQyxPQUF2QkEsVUFBVSxJQUFJLE1BQU0sSUFBRztvQkFDM0RjLGdCQUFnQixHQUFvQlosT0FBakJBLFNBQVEsV0FBZ0MsT0FBdkJBLFVBQVUsSUFBSSxNQUFNO29CQUV4RGpCLGFBQWE2QjtnQkFDZjs7WUFFQTFCO1lBQ0FpQjtZQUVBLE1BQU1VLFdBQVdDLFlBQVlYLG9CQUFvQjtZQUVqRDs0Q0FBTyxJQUFNWSxjQUFjRjs0Q0FBVyxnREFBZ0Q7UUFDeEY7bUNBQUc7UUFBQ2xDO0tBQWlCO0lBRXJCLHFCQUNFLDhEQUFDcUM7a0JBQ0MsNEVBQUNDOztnQkFBRztnQkFBWW5DOzs7Ozs7Ozs7Ozs7QUFHdEI7R0FwRk1KO0tBQUFBO0FBcUZOLGlFQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdXNhbWFsYXRpZi9EZXNrdG9wL3dvcmsvdm90aW5nLXN5c3RlbS9zcmMvY29tcG9uZW50cy9jb21wb25lbnQvQ291bnRkb3duVGltZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuY29uc3QgQ291bnRkb3duVGltZXIgPSAoeyBlbmREYXRlSW5TZWNvbmRzIH06IHsgZW5kRGF0ZUluU2Vjb25kczogbnVtYmVyIH0pID0+IHtcbiBcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVJblNlY29uZHMgKiAxMDAwKTsgLy8gTXVsdGlwbHkgYnkgMTAwMCB0byBnZXQgYmFjayBtaWxsaXNlY29uZHNcbiBcbiAgY29uc3QgW2NvdW50ZG93biwgc2V0Q291bnRkb3duXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtlbmREYXRlRm9ybWF0dGVkLCBzZXRFbmREYXRlRm9ybWF0dGVkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmb3JtYXRFbmREYXRlID0gKCkgPT4ge1xuICAgICAgLy8gQ29udmVydCB0aGUgVW5peCB0aW1lc3RhbXAgdG8gYSByZWFkYWJsZSBkYXRlIHN0cmluZ1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbmREYXRlID0gbmV3IERhdGUoZW5kRGF0ZUluU2Vjb25kcyAqIDEwMDApO1xuICAgICAgY29uc3QgeWVhciA9IHNlbGVjdGVkRW5kRGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgY29uc3QgbW9udGggPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgICBjb25zdCBkYXkgPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3QgaG91cnMgPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoc2VsZWN0ZWRFbmREYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgICAgY29uc3Qgc2Vjb25kcyA9IFN0cmluZyhzZWxlY3RlZEVuZERhdGUuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLCBcIjBcIik7XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHt5ZWFyfS8ke21vbnRofS8ke2RheX0gJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICAgIHNldEVuZERhdGVGb3JtYXR0ZWQoZm9ybWF0dGVkRGF0ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNhbGN1bGF0ZUNvdW50ZG93biA9ICgpID0+IHtcbiAgICAgIC8vIENvbnZlcnQgVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpIHRvIERhdGUgb2JqZWN0IChpbiBtaWxsaXNlY29uZHMpXG4gICAgICBjb25zdCBzZWxlY3RlZEVuZERhdGUgPSBuZXcgRGF0ZShlbmREYXRlSW5TZWNvbmRzICogMTAwMCk7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgdGltZSBkaWZmZXJlbmNlXG4gICAgICBjb25zdCB0aW1lRGlmZmVyZW5jZSA9IHNlbGVjdGVkRW5kRGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50VGltZS5nZXRUaW1lKCk7XG5cbiAgICAgIGlmICh0aW1lRGlmZmVyZW5jZSA8PSAwKSB7XG4gICAgICAgIHNldENvdW50ZG93bihcIlBvbGwgaGFzIGVuZGVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIENhbGN1bGF0ZSB5ZWFycywgbW9udGhzLCBkYXlzLCBob3VycywgbWludXRlcywgYW5kIHNlY29uZHNcbiAgICAgIGNvbnN0IHllYXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZmVyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSk7XG4gICAgICBjb25zdCBtb250aHMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDM2NSkpIC9cbiAgICAgICAgICAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRheXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNClcbiAgICAgICk7XG4gICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXG4gICAgICApO1xuICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICh0aW1lRGlmZmVyZW5jZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MClcbiAgICAgICk7XG4gICAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodGltZURpZmZlcmVuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgbGV0IGNvdW50ZG93blN0ciA9IFwiXCI7XG5cbiAgICAgIC8vIEZvcm1hdCB0aGUgY291bnRkb3duIHN0cmluZyBiYXNlZCBvbiB0aGUgdGltZSB1bml0c1xuICAgICAgaWYgKHllYXJzID4gMCkge1xuICAgICAgICBjb3VudGRvd25TdHIgKz0gYCR7eWVhcnN9IFllYXIke3llYXJzID4gMSA/IFwic1wiIDogXCJcIn0sIGA7XG4gICAgICB9XG4gICAgICBpZiAobW9udGhzID4gMCB8fCB5ZWFycyA+IDApIHtcbiAgICAgICAgY291bnRkb3duU3RyICs9IGAke21vbnRoc30gTW9udGgke21vbnRocyA+IDEgPyBcInNcIiA6IFwiXCJ9LCBgO1xuICAgICAgfVxuICAgICAgaWYgKGRheXMgPiAwIHx8IG1vbnRocyA+IDAgfHwgeWVhcnMgPiAwKSB7XG4gICAgICAgIGNvdW50ZG93blN0ciArPSBgJHtkYXlzfSBEYXkke2RheXMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIH1cbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHtob3Vyc30gSG91ciR7aG91cnMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHttaW51dGVzfSBNaW51dGUke21pbnV0ZXMgPiAxID8gXCJzXCIgOiBcIlwifSwgYDtcbiAgICAgIGNvdW50ZG93blN0ciArPSBgJHtzZWNvbmRzfSBTZWNvbmQke3NlY29uZHMgPiAxID8gXCJzXCIgOiBcIlwifWA7XG5cbiAgICAgIHNldENvdW50ZG93bihjb3VudGRvd25TdHIpO1xuICAgIH07XG5cbiAgICBmb3JtYXRFbmREYXRlKCk7XG4gICAgY2FsY3VsYXRlQ291bnRkb3duKCk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNhbGN1bGF0ZUNvdW50ZG93biwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIENsZWFuIHVwIHRoZSBpbnRlcnZhbCB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xuICB9LCBbZW5kRGF0ZUluU2Vjb25kc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5Db3VudGRvd246IHtjb3VudGRvd259PC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ291bnRkb3duVGltZXIiLCJlbmREYXRlSW5TZWNvbmRzIiwiZGF0ZSIsIkRhdGUiLCJjb3VudGRvd24iLCJzZXRDb3VudGRvd24iLCJlbmREYXRlRm9ybWF0dGVkIiwic2V0RW5kRGF0ZUZvcm1hdHRlZCIsImZvcm1hdEVuZERhdGUiLCJzZWxlY3RlZEVuZERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsIlN0cmluZyIsImdldE1vbnRoIiwicGFkU3RhcnQiLCJkYXkiLCJnZXREYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJmb3JtYXR0ZWREYXRlIiwiY2FsY3VsYXRlQ291bnRkb3duIiwiY3VycmVudFRpbWUiLCJ0aW1lRGlmZmVyZW5jZSIsImdldFRpbWUiLCJ5ZWFycyIsIk1hdGgiLCJmbG9vciIsIm1vbnRocyIsImRheXMiLCJjb3VudGRvd25TdHIiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImgzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/component/CountdownTimer.tsx\n"));

/***/ })

});