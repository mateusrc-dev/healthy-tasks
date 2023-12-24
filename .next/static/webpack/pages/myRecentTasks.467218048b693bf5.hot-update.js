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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyRecentTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeartPulse!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaHeartPulse!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var _styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/myRecentTasks */ \"./src/styles/pages/myRecentTasks.ts\");\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input */ \"./src/components/input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction MyRecentTasks(props) {\n    _s();\n    console.log(JSON.stringify(props.list));\n    const [dataTasksState, setDataTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const [pageSelected, setPageSelected] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth)();\n    console.log(dataTasksState);\n    function handleChangePage(page) {\n        setPageSelected(page);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        async function handleGetTasksByUserId() {\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.get(\"/tasks/getTaskById/\".concat(user.email, \"/\").concat(pageSelected));\n                setDataTasksState(response.data);\n            } catch (error) {\n                alert(\"N\\xe3o foi poss\\xedvel buscar as atividades. \".concat(error));\n                return;\n            }\n        }\n        handleGetTasksByUserId();\n    }, [\n        user,\n        pageSelected\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        function handlePages() {\n            let num = 1;\n            for(let i = 1; dataTasksState.length > i; i++){\n                if (i % 5 === 0) {\n                    num += 1;\n                }\n            }\n            return setCount(num);\n        }\n        handlePages();\n    }, [\n        dataTasksState.length\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"healthy tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaHeartPulse, {\n                        color: \"#fff\",\n                        size: \"30px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.BodyOfPublicTasks, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        pageSelected: \"myRecentTasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_5__.InputComponent, {\n                                placeholder: \"Clique para pesquisar por alguma atividade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            dataTasksState === null || dataTasksState === void 0 ? void 0 : dataTasksState.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                    descriptionOfTask: item.description,\n                                    professionalName: item.user.username,\n                                    professionalPhotoUrl: \"\".concat(_lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.defaults.baseURL, \"/files/\").concat(item.user.photoUrl),\n                                    titleOfTask: item.title,\n                                    checkTask: item.carriedOut,\n                                    taskId: item.id,\n                                    deadline: item.deadline,\n                                    isTaskPublic: item.isTaskPublic\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PaginationContainer, {\n                                children: [\n                                    Array.from(Array(count).keys()).map((day)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                            onClick: ()=>handleChangePage(day + 1),\n                                            color: pageSelected === day + 1 ? \"selectColor\" : null,\n                                            children: day + 1\n                                        }, day, false, {\n                                            fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 17\n                                        }, this);\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        color: pageSelected === 0 ? \"selectColor\" : null,\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"7\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 Todos os direitos reservados\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(MyRecentTasks, \"s7Kg259g8CNkJL4q2eVeiVnTfqQ=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth\n    ];\n});\n_c = MyRecentTasks;\nvar _c;\n$RefreshReg$(_c, \"MyRecentTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUhGQTs7Ozs7b0NBTVg7a0RBQ0EsOERBQUM3RCxzRUFBYUE7d0NBQUNxQyxPQUFPbkIsaUJBQWlCLElBQUksZ0JBQWdCO2tEQUFNOzs7Ozs7a0RBR2pFLDhEQUFDbEIsc0VBQWFBO2tEQUFDOzs7Ozs7a0RBQ2YsOERBQUNBLHNFQUFhQTtrREFBQzs7Ozs7O2tEQUNmLDhEQUFDQSxzRUFBYUE7a0RBQUM7Ozs7OztrREFDZiw4REFBQ0Esc0VBQWFBO2tEQUFDOzs7Ozs7a0RBQ2YsOERBQUNBLHNFQUFhQTtrREFBQzs7Ozs7O2tEQUNmLDhEQUFDQSxzRUFBYUE7a0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJckIsOERBQUNMLHNEQUFNQTswQkFDTCw0RUFBQ29FOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBN0Z3QnREOztRQUtMRCxnREFBT0E7OztLQUxGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbXlSZWNlbnRUYXNrcy5wYWdlLnRzeD9lMGYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhSGVhcnRQdWxzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9ob21lXCI7XHJcbmltcG9ydCB7XHJcbiAgQm9keU9mUHVibGljVGFza3MsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENvbnRlbnRDb250YWluZXIsXHJcbiAgSGVhZGVyLFxyXG4gIFBhZ2VDb250YWluZXIsXHJcbiAgUGFnaW5hdGlvbkNvbnRhaW5lcixcclxufSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL215UmVjZW50VGFza3NcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Rhc2tcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuLi9jb21wb25lbnRzL21lbnVcIjtcclxuaW1wb3J0IHsgSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9saWIvYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi9ob29rcy9hdXRoXCI7XHJcblxyXG5pbnRlcmZhY2UgVGFza1R5cGUge1xyXG4gIGNhcnJpZWRPdXQ6IGJvb2xlYW47XHJcbiAgY3JlYXRlZF9hdDogRGF0ZTtcclxuICBkZWFkbGluZTogRGF0ZTtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGZvcmNlVGFzazogbnVtYmVyIHwgbnVsbDtcclxuICBpZDogc3RyaW5nO1xyXG4gIGlzVGFza1B1YmxpYzogYm9vbGVhbjtcclxuICBwYXRpZW50RW1haWw6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxuICB1c2VyOiB7XHJcbiAgICBjb21wbGFpbnQ6IHN0cmluZyB8IG51bGw7XHJcbiAgICBjcmVhdGVkX2F0OiBEYXRlO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwaG90b1VybDogc3RyaW5nO1xyXG4gICAgcHJvZmlsZUZvcmNlOiBudW1iZXIgfCBudWxsO1xyXG4gICAgcHJvZmlsZVB1YmxpYzogYm9vbGVhbiB8IG51bGw7XHJcbiAgICBzcGVjaWFsaXphdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICAgIHN0YXRpc3RpY1B1YmxpYzogYm9vbGVhbiB8IG51bGw7XHJcbiAgICB0eXBlVXNlcjogc3RyaW5nO1xyXG4gICAgdXBkYXRlZEF0OiBEYXRlO1xyXG4gICAgdXNlcm5hbWU6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVJlY2VudFRhc2tzKHByb3BzKSB7XHJcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocHJvcHMubGlzdCkpO1xyXG4gIGNvbnN0IFtkYXRhVGFza3NTdGF0ZSwgc2V0RGF0YVRhc2tzU3RhdGVdID0gdXNlU3RhdGU8VGFza1R5cGVbXT4oW10pO1xyXG4gIGNvbnN0IFtwYWdlU2VsZWN0ZWQsIHNldFBhZ2VTZWxlY3RlZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YVRhc2tzU3RhdGUpO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VQYWdlKHBhZ2U6IG51bWJlcikge1xyXG4gICAgc2V0UGFnZVNlbGVjdGVkKHBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldFRhc2tzQnlVc2VySWQoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KFxyXG4gICAgICAgICAgYC90YXNrcy9nZXRUYXNrQnlJZC8ke3VzZXIuZW1haWx9LyR7cGFnZVNlbGVjdGVkfWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXREYXRhVGFza3NTdGF0ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBhbGVydChgTsOjbyBmb2kgcG9zc8OtdmVsIGJ1c2NhciBhcyBhdGl2aWRhZGVzLiAke2Vycm9yfWApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlR2V0VGFza3NCeVVzZXJJZCgpO1xyXG4gIH0sIFt1c2VyLCBwYWdlU2VsZWN0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBhZ2VzKCkge1xyXG4gICAgICBsZXQgbnVtID0gMTtcclxuICAgICAgZm9yIChsZXQgaSA9IDE7IGRhdGFUYXNrc1N0YXRlLmxlbmd0aCA+IGk7IGkrKykge1xyXG4gICAgICAgIGlmIChpICUgNSA9PT0gMCkge1xyXG4gICAgICAgICAgbnVtICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXRDb3VudChudW0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlUGFnZXMoKTtcclxuICB9LCBbZGF0YVRhc2tzU3RhdGUubGVuZ3RoXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT5oZWFsdGh5IHRhc2tzPC9oMT5cclxuICAgICAgICA8RmFIZWFydFB1bHNlIGNvbG9yPVwiI2ZmZlwiIHNpemU9e1wiMzBweFwifSAvPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPEJvZHlPZlB1YmxpY1Rhc2tzPlxyXG4gICAgICAgIDxNZW51IHBhZ2VTZWxlY3RlZD1cIm15UmVjZW50VGFza3NcIiAvPlxyXG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgPElucHV0Q29tcG9uZW50IHBsYWNlaG9sZGVyPVwiQ2xpcXVlIHBhcmEgcGVzcXVpc2FyIHBvciBhbGd1bWEgYXRpdmlkYWRlXCIgLz5cclxuICAgICAgICAgIHtkYXRhVGFza3NTdGF0ZT8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxUYXNrXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uT2ZUYXNrPXtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHByb2Zlc3Npb25hbE5hbWU9e2l0ZW0udXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICBwcm9mZXNzaW9uYWxQaG90b1VybD17YCR7YXBpLmRlZmF1bHRzLmJhc2VVUkx9L2ZpbGVzLyR7aXRlbS51c2VyLnBob3RvVXJsfWB9XHJcbiAgICAgICAgICAgICAgdGl0bGVPZlRhc2s9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgY2hlY2tUYXNrPXtpdGVtLmNhcnJpZWRPdXR9XHJcbiAgICAgICAgICAgICAgdGFza0lkPXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGRlYWRsaW5lPXtpdGVtLmRlYWRsaW5lfVxyXG4gICAgICAgICAgICAgIGlzVGFza1B1YmxpYz17aXRlbS5pc1Rhc2tQdWJsaWN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxQYWdpbmF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShjb3VudCkua2V5cygpKS5tYXAoKGRheSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8UGFnZUNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VQYWdlKGRheSArIDEpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2RheX1cclxuICAgICAgICAgICAgICAgICAgY29sb3I9e3BhZ2VTZWxlY3RlZCA9PT0gZGF5ICsgMSA/IFwic2VsZWN0Q29sb3JcIiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXkgKyAxfVxyXG4gICAgICAgICAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lciBjb2xvcj17cGFnZVNlbGVjdGVkID09PSAwID8gXCJzZWxlY3RDb2xvclwiIDogbnVsbH0+XHJcbiAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjI8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjM8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjQ8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjU8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjY8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQYWdlQ29udGFpbmVyPjc8L1BhZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8L1BhZ2luYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICA8L0JvZHlPZlB1YmxpY1Rhc2tzPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxwPsKpIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3M8L3A+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsaXN0OiBbMSwgMiwgMywgNF0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJGYUhlYXJ0UHVsc2UiLCJGb290ZXIiLCJCb2R5T2ZQdWJsaWNUYXNrcyIsIkNvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJIZWFkZXIiLCJQYWdlQ29udGFpbmVyIiwiUGFnaW5hdGlvbkNvbnRhaW5lciIsIlRhc2siLCJNZW51IiwiSW5wdXRDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsInVzZUF1dGgiLCJNeVJlY2VudFRhc2tzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3QiLCJkYXRhVGFza3NTdGF0ZSIsInNldERhdGFUYXNrc1N0YXRlIiwicGFnZVNlbGVjdGVkIiwic2V0UGFnZVNlbGVjdGVkIiwiY291bnQiLCJzZXRDb3VudCIsInVzZXIiLCJoYW5kbGVDaGFuZ2VQYWdlIiwicGFnZSIsImhhbmRsZUdldFRhc2tzQnlVc2VySWQiLCJyZXNwb25zZSIsImdldCIsImVtYWlsIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJoYW5kbGVQYWdlcyIsIm51bSIsImkiLCJsZW5ndGgiLCJoMSIsImNvbG9yIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaXRlbSIsImRlc2NyaXB0aW9uT2ZUYXNrIiwiZGVzY3JpcHRpb24iLCJwcm9mZXNzaW9uYWxOYW1lIiwidXNlcm5hbWUiLCJwcm9mZXNzaW9uYWxQaG90b1VybCIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInBob3RvVXJsIiwidGl0bGVPZlRhc2siLCJ0aXRsZSIsImNoZWNrVGFzayIsImNhcnJpZWRPdXQiLCJ0YXNrSWQiLCJpZCIsImRlYWRsaW5lIiwiaXNUYXNrUHVibGljIiwiQXJyYXkiLCJmcm9tIiwia2V5cyIsImRheSIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/myRecentTasks.page.tsx\n"));

/***/ })

});