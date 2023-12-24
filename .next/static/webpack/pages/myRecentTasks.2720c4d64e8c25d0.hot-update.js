"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/myRecentTasks",{

/***/ "./src/pages/myRecentTasks.page.tsx":
/*!******************************************!*\
  !*** ./src/pages/myRecentTasks.page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyRecentTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeartPulse!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaHeartPulse!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var _styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/myRecentTasks */ \"./src/styles/pages/myRecentTasks.ts\");\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input */ \"./src/components/input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction MyRecentTasks(props) {\n    _s();\n    console.log(JSON.stringify(props.list));\n    const [dataTasksState, setDataTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const [pageSelected, setPageSelected] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth)();\n    console.log(dataTasksState);\n    function handleChangePage(page) {\n        setPageSelected(page);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        async function handleGetTasksByUserId() {\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.get(\"/tasks/getTaskById/\".concat(user.email, \"/\").concat(pageSelected));\n                setDataTasksState(response.data);\n            } catch (error) {\n                alert(\"N\\xe3o foi poss\\xedvel buscar as atividades. \".concat(error));\n                return;\n            }\n        }\n        handleGetTasksByUserId();\n    }, [\n        user,\n        pageSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        function handlePages() {\n            let num = 1;\n            for(let i = 1; dataTasksState.length > i; i++){\n                if (i % 5 === 0) {\n                    num += 1;\n                }\n            }\n            return setCount(num);\n        }\n        handlePages();\n    }, [\n        dataTasksState.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"healthy tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaHeartPulse, {\n                        color: \"#fff\",\n                        size: \"30px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.BodyOfPublicTasks, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        pageSelected: \"myRecentTasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_5__.InputComponent, {\n                                placeholder: \"Clique para pesquisar por alguma atividade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            dataTasksState === null || dataTasksState === void 0 ? void 0 : dataTasksState.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                    descriptionOfTask: item.description,\n                                    professionalName: item.user.username,\n                                    professionalPhotoUrl: \"\".concat(_lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.defaults.baseURL, \"/files/\").concat(item.user.photoUrl),\n                                    titleOfTask: item.title,\n                                    checkTask: item.carriedOut,\n                                    taskId: item.id,\n                                    deadline: item.deadline,\n                                    isTaskPublic: item.isTaskPublic\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PaginationContainer, {\n                                children: Array.from(Array(count).keys()).map((day)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        onClick: ()=>handleChangePage(day + 1),\n                                        color: pageSelected === day + 1 ? \"selectColor\" : null,\n                                        children: day + 1\n                                    }, day, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 Todos os direitos reservados\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(MyRecentTasks, \"s7Kg259g8CNkJL4q2eVeiVnTfqQ=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth\n    ];\n});\n_c = MyRecentTasks;\nvar _c;\n$RefreshReg$(_c, \"MyRecentTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEZBOzs7OztnQ0FNWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlOLDhEQUFDbEUsc0RBQU1BOzBCQUNMLDRFQUFDb0U7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0FwRndCdEQ7O1FBS0xELGdEQUFPQTs7O0tBTEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9teVJlY2VudFRhc2tzLnBhZ2UudHN4P2UwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFIZWFydFB1bHNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBCb2R5T2ZQdWJsaWNUYXNrcyxcclxuICBDb250YWluZXIsXHJcbiAgQ29udGVudENvbnRhaW5lcixcclxuICBIZWFkZXIsXHJcbiAgUGFnZUNvbnRhaW5lcixcclxuICBQYWdpbmF0aW9uQ29udGFpbmVyLFxyXG59IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvbXlSZWNlbnRUYXNrc1wiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFza1wiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2xpYi9heGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL2F1dGhcIjtcclxuXHJcbmludGVyZmFjZSBUYXNrVHlwZSB7XHJcbiAgY2FycmllZE91dDogYm9vbGVhbjtcclxuICBjcmVhdGVkX2F0OiBEYXRlO1xyXG4gIGRlYWRsaW5lOiBEYXRlO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZm9yY2VUYXNrOiBudW1iZXIgfCBudWxsO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaXNUYXNrUHVibGljOiBib29sZWFuO1xyXG4gIHBhdGllbnRFbWFpbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBEYXRlO1xyXG4gIHVzZXI6IHtcclxuICAgIGNvbXBsYWludDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNyZWF0ZWRfYXQ6IERhdGU7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHBob3RvVXJsOiBzdHJpbmc7XHJcbiAgICBwcm9maWxlRm9yY2U6IG51bWJlciB8IG51bGw7XHJcbiAgICBwcm9maWxlUHVibGljOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHNwZWNpYWxpemF0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc3RhdGlzdGljUHVibGljOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHR5cGVVc2VyOiBzdHJpbmc7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UmVjZW50VGFza3MocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9wcy5saXN0KSk7XHJcbiAgY29uc3QgW2RhdGFUYXNrc1N0YXRlLCBzZXREYXRhVGFza3NTdGF0ZV0gPSB1c2VTdGF0ZTxUYXNrVHlwZVtdPihbXSk7XHJcbiAgY29uc3QgW3BhZ2VTZWxlY3RlZCwgc2V0UGFnZVNlbGVjdGVkXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhkYXRhVGFza3NTdGF0ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBzZXRQYWdlU2VsZWN0ZWQocGFnZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0VGFza3NCeVVzZXJJZCgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgL3Rhc2tzL2dldFRhc2tCeUlkLyR7dXNlci5lbWFpbH0vJHtwYWdlU2VsZWN0ZWR9YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldERhdGFUYXNrc1N0YXRlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGBOw6NvIGZvaSBwb3Nzw612ZWwgYnVzY2FyIGFzIGF0aXZpZGFkZXMuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVHZXRUYXNrc0J5VXNlcklkKCk7XHJcbiAgfSwgW3VzZXIsIHBhZ2VTZWxlY3RlZF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGFnZXMoKSB7XHJcbiAgICAgIGxldCBudW0gPSAxO1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgZGF0YVRhc2tzU3RhdGUubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgJSA1ID09PSAwKSB7XHJcbiAgICAgICAgICBudW0gKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNldENvdW50KG51bSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVQYWdlcygpO1xyXG4gIH0sIFtkYXRhVGFza3NTdGF0ZS5sZW5ndGhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPmhlYWx0aHkgdGFza3M8L2gxPlxyXG4gICAgICAgIDxGYUhlYXJ0UHVsc2UgY29sb3I9XCIjZmZmXCIgc2l6ZT17XCIzMHB4XCJ9IC8+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Qm9keU9mUHVibGljVGFza3M+XHJcbiAgICAgICAgPE1lbnUgcGFnZVNlbGVjdGVkPVwibXlSZWNlbnRUYXNrc1wiIC8+XHJcbiAgICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICA8SW5wdXRDb21wb25lbnQgcGxhY2Vob2xkZXI9XCJDbGlxdWUgcGFyYSBwZXNxdWlzYXIgcG9yIGFsZ3VtYSBhdGl2aWRhZGVcIiAvPlxyXG4gICAgICAgICAge2RhdGFUYXNrc1N0YXRlPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFRhc2tcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25PZlRhc2s9e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgcHJvZmVzc2lvbmFsTmFtZT17aXRlbS51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIHByb2Zlc3Npb25hbFBob3RvVXJsPXtgJHthcGkuZGVmYXVsdHMuYmFzZVVSTH0vZmlsZXMvJHtpdGVtLnVzZXIucGhvdG9Vcmx9YH1cclxuICAgICAgICAgICAgICB0aXRsZU9mVGFzaz17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBjaGVja1Rhc2s9e2l0ZW0uY2FycmllZE91dH1cclxuICAgICAgICAgICAgICB0YXNrSWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgZGVhZGxpbmU9e2l0ZW0uZGVhZGxpbmV9XHJcbiAgICAgICAgICAgICAgaXNUYXNrUHVibGljPXtpdGVtLmlzVGFza1B1YmxpY31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPFBhZ2luYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KGNvdW50KS5rZXlzKCkpLm1hcCgoZGF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVBhZ2UoZGF5ICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17ZGF5fVxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj17cGFnZVNlbGVjdGVkID09PSBkYXkgKyAxID8gXCJzZWxlY3RDb2xvclwiIDogbnVsbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2RheSArIDF9XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICA8L0JvZHlPZlB1YmxpY1Rhc2tzPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxwPsKpIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3M8L3A+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsaXN0OiBbMSwgMiwgMywgNF0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGYUhlYXJ0UHVsc2UiLCJGb290ZXIiLCJCb2R5T2ZQdWJsaWNUYXNrcyIsIkNvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJIZWFkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnaW5hdGlvbkNvbnRhaW5lciIsIlRhc2siLCJNZW51IiwiSW5wdXRDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsInVzZUF1dGgiLCJNeVJlY2VudFRhc2tzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3QiLCJkYXRhVGFza3NTdGF0ZSIsInNldERhdGFUYXNrc1N0YXRlIiwicGFnZVNlbGVjdGVkIiwic2V0UGFnZVNlbGVjdGVkIiwiY291bnQiLCJzZXRDb3VudCIsInVzZXIiLCJoYW5kbGVDaGFuZ2VQYWdlIiwicGFnZSIsImhhbmRsZUdldFRhc2tzQnlVc2VySWQiLCJyZXNwb25zZSIsImdldCIsImVtYWlsIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJoYW5kbGVQYWdlcyIsIm51bSIsImkiLCJsZW5ndGgiLCJoMSIsImNvbG9yIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaXRlbSIsImRlc2NyaXB0aW9uT2ZUYXNrIiwiZGVzY3JpcHRpb24iLCJwcm9mZXNzaW9uYWxOYW1lIiwidXNlcm5hbWUiLCJwcm9mZXNzaW9uYWxQaG90b1VybCIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInBob3RvVXJsIiwidGl0bGVPZlRhc2siLCJ0aXRsZSIsImNoZWNrVGFzayIsImNhcnJpZWRPdXQiLCJ0YXNrSWQiLCJpZCIsImRlYWRsaW5lIiwiaXNUYXNrUHVibGljIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsImRheSIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/myRecentTasks.page.tsx\n"));

/***/ })

});