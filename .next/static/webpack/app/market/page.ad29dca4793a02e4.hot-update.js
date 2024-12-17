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

/***/ "(app-pages-browser)/./src/helperFile/helperFunction.js":
/*!******************************************!*\
  !*** ./src/helperFile/helperFunction.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contractAddress: () => (/* binding */ contractAddress),\n/* harmony export */   readContractHelper: () => (/* binding */ readContractHelper),\n/* harmony export */   tokenAddress: () => (/* binding */ tokenAddress),\n/* harmony export */   writeContractHelper: () => (/* binding */ writeContractHelper),\n/* harmony export */   zeroAddress: () => (/* binding */ zeroAddress)\n/* harmony export */ });\n/* harmony import */ var _contractAbis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contractAbis */ \"(app-pages-browser)/./src/helperFile/contractAbis.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./src/config/index.tsx\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/simulateContract.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/writeContract.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/waitForTransactionReceipt.js\");\n/* harmony import */ var _wagmi_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wagmi/core */ \"(app-pages-browser)/./node_modules/@wagmi/core/dist/esm/actions/readContract.js\");\n\n\n\n\n\n\n// export const decimalPoint = 18;\nconst tokenAddress = \"0xEb211892B15f3Fb6D69a1f2e9E6ca1DdD6365715\";\nconst contractAddress = \"0x50FB25e536baCd112d15719148F88e4893cD49bB\";\nconst zeroAddress = \"0x0000000000000000000000000000000000000000\";\nconst writeContractHelper = async (functionName, args)=>{\n    try {\n        const { request } = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_2__.simulateContract)(_config__WEBPACK_IMPORTED_MODULE_1__.config, {\n            abi: _contractAbis__WEBPACK_IMPORTED_MODULE_0__.abi,\n            address: contractAddress,\n            functionName: functionName,\n            args: args\n        });\n        const hash = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_3__.writeContract)(_config__WEBPACK_IMPORTED_MODULE_1__.config, request);\n        const transactionReceipt = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_4__.waitForTransactionReceipt)(_config__WEBPACK_IMPORTED_MODULE_1__.config, {\n            hash: hash\n        });\n        return transactionReceipt;\n    } catch (error) {\n        console.error(\"Error in writeContractHelper:\", error);\n        throw error;\n    }\n};\nconst readContractHelper = async (functionName, args)=>{\n    try {\n        if (args) {\n            const result = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_5__.readContract)(_config__WEBPACK_IMPORTED_MODULE_1__.config, {\n                abi: _contractAbis__WEBPACK_IMPORTED_MODULE_0__.abi,\n                address: contractAddress,\n                functionName: functionName,\n                args\n            });\n            return result;\n        } else {\n            const result = await (0,_wagmi_core__WEBPACK_IMPORTED_MODULE_5__.readContract)(_config__WEBPACK_IMPORTED_MODULE_1__.config, {\n                abi: _contractAbis__WEBPACK_IMPORTED_MODULE_0__.abi,\n                address: contractAddress,\n                functionName: functionName,\n                args\n            });\n            return result;\n        }\n    } catch (error) {\n        console.error(\"Error in readContractHelper:\", error);\n        throw error;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9oZWxwZXJGaWxlL2hlbHBlckZ1bmN0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ047QUFDUztBQUNZO0FBQ2I7QUFPYjtBQUVyQixrQ0FBa0M7QUFDMUIsTUFBTVUsZUFBZSw2Q0FBNkM7QUFDbkUsTUFBTUMsa0JBQWtCLDZDQUE2QztBQUNwRSxNQUFNQyxjQUFjLDZDQUE2QztBQUVsRSxNQUFNQyxzQkFBc0IsT0FBT0MsY0FBY0M7SUFDdEQsSUFBSTtRQUNGLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTVYsNkRBQWdCQSxDQUFDRCwyQ0FBTUEsRUFBRTtZQUNqREQsS0FBS0EsOENBQUdBO1lBQ1JhLFNBQVNOO1lBQ1RHLGNBQWNBO1lBQ2RDLE1BQU1BO1FBQ1I7UUFDQSxNQUFNRyxPQUFPLE1BQU1YLDBEQUFhQSxDQUFDRiwyQ0FBTUEsRUFBRVc7UUFDekMsTUFBTUcscUJBQXFCLE1BQU1YLHNFQUF5QkEsQ0FBQ0gsMkNBQU1BLEVBQUU7WUFDakVhLE1BQU1BO1FBRVI7UUFDQSxPQUFPQztJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxNQUFNQTtJQUNSO0FBQ0YsRUFBRTtBQUVLLE1BQU1FLHFCQUFxQixPQUFPUixjQUFhQztJQUNwRCxJQUFJO1FBQ0YsSUFBR0EsTUFBSztZQUNOLE1BQU1RLFNBQVMsTUFBTWQseURBQVlBLENBQUNKLDJDQUFNQSxFQUFFO2dCQUN4Q0QsR0FBR0EsZ0RBQUFBO2dCQUNIYSxTQUFTTjtnQkFDVEcsY0FBY0E7Z0JBQ2RDO1lBQ0Y7WUFDQSxPQUFPUTtRQUNULE9BQU87WUFDTCxNQUFNQSxTQUFTLE1BQU1kLHlEQUFZQSxDQUFDSiwyQ0FBTUEsRUFBRTtnQkFDeENELEdBQUdBLGdEQUFBQTtnQkFDSGEsU0FBU047Z0JBQ1RHLGNBQWNBO2dCQUNkQztZQUNGO1lBQ0EsT0FBT1E7UUFDVDtJQUNGLEVBQUUsT0FBT0gsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxNQUFNQTtJQUNSO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiL1VzZXJzL3VzYW1hbGF0aWYvRGVza3RvcC93b3JrL3ZvdGluZy1zeXN0ZW0vc3JjL2hlbHBlckZpbGUvaGVscGVyRnVuY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tIFwidmllbVwiO1xuaW1wb3J0IHsgZXJjMjBBYmksIGFiaSB9IGZyb20gXCIuL2NvbnRyYWN0QWJpc1wiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIkAvY29uZmlnXCI7XG5cbmltcG9ydCB7XG4gIHNpbXVsYXRlQ29udHJhY3QsXG4gIHdyaXRlQ29udHJhY3QsXG4gIHdhaXRGb3JUcmFuc2FjdGlvblJlY2VpcHQsXG4gIHJlYWRDb250cmFjdCxcbn0gZnJvbSBcIkB3YWdtaS9jb3JlXCI7XG5cbi8vIGV4cG9ydCBjb25zdCBkZWNpbWFsUG9pbnQgPSAxODtcbiBleHBvcnQgY29uc3QgdG9rZW5BZGRyZXNzID0gXCIweEViMjExODkyQjE1ZjNGYjZENjlhMWYyZTlFNmNhMURkRDYzNjU3MTVcIjtcbmV4cG9ydCBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4NTBGQjI1ZTUzNmJhQ2QxMTJkMTU3MTkxNDhGODhlNDg5M2NENDliQlwiO1xuIGV4cG9ydCBjb25zdCB6ZXJvQWRkcmVzcyA9IFwiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwXCI7XG5cbmV4cG9ydCBjb25zdCB3cml0ZUNvbnRyYWN0SGVscGVyID0gYXN5bmMgKGZ1bmN0aW9uTmFtZSwgYXJncykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgcmVxdWVzdCB9ID0gYXdhaXQgc2ltdWxhdGVDb250cmFjdChjb25maWcsIHtcbiAgICAgIGFiaTogYWJpLFxuICAgICAgYWRkcmVzczogY29udHJhY3RBZGRyZXNzLFxuICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgICBhcmdzOiBhcmdzLFxuICAgIH0pO1xuICAgIGNvbnN0IGhhc2ggPSBhd2FpdCB3cml0ZUNvbnRyYWN0KGNvbmZpZywgcmVxdWVzdCk7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25SZWNlaXB0ID0gYXdhaXQgd2FpdEZvclRyYW5zYWN0aW9uUmVjZWlwdChjb25maWcsIHtcbiAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAvLyBjb25maXJtYXRpb25zOiAyLFxuICAgIH0pO1xuICAgIHJldHVybiB0cmFuc2FjdGlvblJlY2VpcHQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIHdyaXRlQ29udHJhY3RIZWxwZXI6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlYWRDb250cmFjdEhlbHBlciA9IGFzeW5jIChmdW5jdGlvbk5hbWUsYXJncykgPT4ge1xuICB0cnkge1xuICAgIGlmKGFyZ3Mpe1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZENvbnRyYWN0KGNvbmZpZywge1xuICAgICAgICBhYmksXG4gICAgICAgIGFkZHJlc3M6IGNvbnRyYWN0QWRkcmVzcyxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBmdW5jdGlvbk5hbWUsXG4gICAgICAgIGFyZ3NcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWFkQ29udHJhY3QoY29uZmlnLCB7XG4gICAgICAgIGFiaSxcbiAgICAgICAgYWRkcmVzczogY29udHJhY3RBZGRyZXNzLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgYXJnc1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gcmVhZENvbnRyYWN0SGVscGVyOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiYXhpb3MiLCJmb3JtYXRFdGhlciIsImVyYzIwQWJpIiwiYWJpIiwiY29uZmlnIiwic2ltdWxhdGVDb250cmFjdCIsIndyaXRlQ29udHJhY3QiLCJ3YWl0Rm9yVHJhbnNhY3Rpb25SZWNlaXB0IiwicmVhZENvbnRyYWN0IiwidG9rZW5BZGRyZXNzIiwiY29udHJhY3RBZGRyZXNzIiwiemVyb0FkZHJlc3MiLCJ3cml0ZUNvbnRyYWN0SGVscGVyIiwiZnVuY3Rpb25OYW1lIiwiYXJncyIsInJlcXVlc3QiLCJhZGRyZXNzIiwiaGFzaCIsInRyYW5zYWN0aW9uUmVjZWlwdCIsImVycm9yIiwiY29uc29sZSIsInJlYWRDb250cmFjdEhlbHBlciIsInJlc3VsdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/helperFile/helperFunction.js\n"));

/***/ })

});