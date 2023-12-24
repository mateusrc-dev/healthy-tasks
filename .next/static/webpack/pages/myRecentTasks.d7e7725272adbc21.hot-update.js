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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyRecentTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeartPulse!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaHeartPulse!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var _styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/myRecentTasks */ \"./src/styles/pages/myRecentTasks.ts\");\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input */ \"./src/components/input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction MyRecentTasks(props) {\n    _s();\n    console.log(JSON.stringify(props.list));\n    const [dataTasksState, setDataTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const [pageSelected, setPageSelected] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth)();\n    console.log(dataTasksState);\n    function handleChangePage(page) {\n        setPageSelected(page);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        async function handleGetTasksByUserId() {\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.get(\"/tasks/getTaskById/\".concat(user.email, \"/\").concat(pageSelected));\n                setDataTasksState(response.data);\n            } catch (error) {\n                alert(\"N\\xe3o foi poss\\xedvel buscar as atividades. \".concat(error));\n                return;\n            }\n        }\n        handleGetTasksByUserId();\n    }, [\n        user,\n        pageSelected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"healthy tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaHeartPulse, {\n                        color: \"#fff\",\n                        size: \"30px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.BodyOfPublicTasks, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        pageSelected: \"myRecentTasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_5__.InputComponent, {\n                                placeholder: \"Clique para pesquisar por alguma atividade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            dataTasksState === null || dataTasksState === void 0 ? void 0 : dataTasksState.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                    descriptionOfTask: item.description,\n                                    professionalName: item.user.username,\n                                    professionalPhotoUrl: \"\".concat(_lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.defaults.baseURL, \"/files/\").concat(item.user.photoUrl),\n                                    titleOfTask: item.title,\n                                    checkTask: item.carriedOut,\n                                    taskId: item.id,\n                                    deadline: item.deadline,\n                                    isTaskPublic: item.isTaskPublic\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PaginationContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        color: pageSelected === 1 ? \"selectColor\" : null,\n                                        children: \"1\"\n                                    }, \"key -> \".concat(index), false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"7\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 Todos os direitos reservados\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(MyRecentTasks, \"5tW/DFFx3Un5W70He9lMkTHrtZA=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth\n    ];\n});\n_c = MyRecentTasks;\nvar _c;\n$RefreshReg$(_c, \"MyRecentTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbXlSZWNlbnRUYXNrcy5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0Q7QUFRUDtBQUNHO0FBQ0E7QUFDVztBQUNUO0FBQ1Q7QUFDSzs7QUErQnpCLFNBQVNlLGNBQWNDLEtBQUs7O0lBQ3pDQyxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ0osTUFBTUssSUFBSTtJQUNyQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFhLEVBQUU7SUFDbkUsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQVM7SUFDekQsTUFBTSxFQUFFYyxJQUFJLEVBQUUsR0FBR1osb0RBQU9BO0lBQ3hCRyxRQUFRQyxHQUFHLENBQUNJO0lBRVosU0FBU0ssaUJBQWlCQyxJQUFZO1FBQ3BDSCxnQkFBZ0JHO0lBQ2xCO0lBRUFqQixnREFBU0EsQ0FBQztRQUNSLGVBQWVrQjtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNakIsMkNBQUdBLENBQUNrQixHQUFHLENBQzVCLHNCQUFvQ1AsT0FBZEUsS0FBS00sS0FBSyxFQUFDLEtBQWdCLE9BQWJSO2dCQUd0Q0Qsa0JBQWtCTyxTQUFTRyxJQUFJO1lBQ2pDLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsTUFBTSxnREFBZ0QsT0FBTkQ7Z0JBQ2hEO1lBQ0Y7UUFDRjtRQUNBTDtJQUNGLEdBQUc7UUFBQ0g7UUFBTUY7S0FBYTtJQUV2QixxQkFDRSw4REFBQ3JCLGtFQUFTQTs7MEJBQ1IsOERBQUNFLCtEQUFNQTs7a0NBQ0wsOERBQUMrQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDcEMsNkZBQVlBO3dCQUFDcUMsT0FBTTt3QkFBT0MsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ3BDLDBFQUFpQkE7O2tDQUNoQiw4REFBQ08sa0RBQUlBO3dCQUFDZSxjQUFhOzs7Ozs7a0NBQ25CLDhEQUFDcEIseUVBQWdCQTs7MENBQ2YsOERBQUNNLDZEQUFjQTtnQ0FBQzZCLGFBQVk7Ozs7Ozs0QkFDM0JqQiwyQkFBQUEscUNBQUFBLGVBQWdCa0IsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ2pDLGtEQUFJQTtvQ0FFSGtDLG1CQUFtQkQsS0FBS0UsV0FBVztvQ0FDbkNDLGtCQUFrQkgsS0FBS2YsSUFBSSxDQUFDbUIsUUFBUTtvQ0FDcENDLHNCQUFzQixHQUFpQ0wsT0FBOUI1QiwyQ0FBR0EsQ0FBQ2tDLFFBQVEsQ0FBQ0MsT0FBTyxFQUFDLFdBQTRCLE9BQW5CUCxLQUFLZixJQUFJLENBQUN1QixRQUFRO29DQUN6RUMsYUFBYVQsS0FBS1UsS0FBSztvQ0FDdkJDLFdBQVdYLEtBQUtZLFVBQVU7b0NBQzFCQyxRQUFRYixLQUFLYyxFQUFFO29DQUNmQyxVQUFVZixLQUFLZSxRQUFRO29DQUN2QkMsY0FBY2hCLEtBQUtnQixZQUFZO21DQVIxQmhCLEtBQUtjLEVBQUU7Ozs7OzBDQVdoQiw4REFBQ2hELDRFQUFtQkE7O2tEQUNsQiw4REFBQ0Qsc0VBQWFBO3dDQUVaK0IsT0FBT2IsaUJBQWlCLElBQUksZ0JBQWdCO2tEQUM3Qzt1Q0FGTSxVQUFnQixPQUFOa0M7Ozs7O2tEQU1qQiw4REFBQ3BELHNFQUFhQTtrREFBQzs7Ozs7O2tEQUNmLDhEQUFDQSxzRUFBYUE7a0RBQUM7Ozs7OztrREFDZiw4REFBQ0Esc0VBQWFBO2tEQUFDOzs7Ozs7a0RBQ2YsOERBQUNBLHNFQUFhQTtrREFBQzs7Ozs7O2tEQUNmLDhEQUFDQSxzRUFBYUE7a0RBQUM7Ozs7OztrREFDZiw4REFBQ0Esc0VBQWFBO2tEQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXJCLDhEQUFDTCxzREFBTUE7MEJBQ0wsNEVBQUMwRDs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQXhFd0I1Qzs7UUFJTEQsZ0RBQU9BOzs7S0FKRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL215UmVjZW50VGFza3MucGFnZS50c3g/ZTBmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUhlYXJ0UHVsc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvaG9tZVwiO1xyXG5pbXBvcnQge1xyXG4gIEJvZHlPZlB1YmxpY1Rhc2tzLFxyXG4gIENvbnRhaW5lcixcclxuICBDb250ZW50Q29udGFpbmVyLFxyXG4gIEhlYWRlcixcclxuICBQYWdlQ29udGFpbmVyLFxyXG4gIFBhZ2luYXRpb25Db250YWluZXIsXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9teVJlY2VudFRhc2tzXCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90YXNrXCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vbGliL2F4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvYXV0aFwiO1xyXG5cclxuaW50ZXJmYWNlIFRhc2tUeXBlIHtcclxuICBjYXJyaWVkT3V0OiBib29sZWFuO1xyXG4gIGNyZWF0ZWRfYXQ6IERhdGU7XHJcbiAgZGVhZGxpbmU6IERhdGU7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBmb3JjZVRhc2s6IG51bWJlciB8IG51bGw7XHJcbiAgaWQ6IHN0cmluZztcclxuICBpc1Rhc2tQdWJsaWM6IGJvb2xlYW47XHJcbiAgcGF0aWVudEVtYWlsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgdXNlcjoge1xyXG4gICAgY29tcGxhaW50OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY3JlYXRlZF9hdDogRGF0ZTtcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgcGhvdG9Vcmw6IHN0cmluZztcclxuICAgIHByb2ZpbGVGb3JjZTogbnVtYmVyIHwgbnVsbDtcclxuICAgIHByb2ZpbGVQdWJsaWM6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgc3BlY2lhbGl6YXRpb246IHN0cmluZyB8IG51bGw7XHJcbiAgICBzdGF0aXN0aWNQdWJsaWM6IGJvb2xlYW4gfCBudWxsO1xyXG4gICAgdHlwZVVzZXI6IHN0cmluZztcclxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcclxuICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlSZWNlbnRUYXNrcyhwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHByb3BzLmxpc3QpKTtcclxuICBjb25zdCBbZGF0YVRhc2tzU3RhdGUsIHNldERhdGFUYXNrc1N0YXRlXSA9IHVzZVN0YXRlPFRhc2tUeXBlW10+KFtdKTtcclxuICBjb25zdCBbcGFnZVNlbGVjdGVkLCBzZXRQYWdlU2VsZWN0ZWRdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zb2xlLmxvZyhkYXRhVGFza3NTdGF0ZSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVBhZ2UocGFnZTogbnVtYmVyKSB7XHJcbiAgICBzZXRQYWdlU2VsZWN0ZWQocGFnZSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0VGFza3NCeVVzZXJJZCgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoXHJcbiAgICAgICAgICBgL3Rhc2tzL2dldFRhc2tCeUlkLyR7dXNlci5lbWFpbH0vJHtwYWdlU2VsZWN0ZWR9YFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldERhdGFUYXNrc1N0YXRlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGBOw6NvIGZvaSBwb3Nzw612ZWwgYnVzY2FyIGFzIGF0aXZpZGFkZXMuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVHZXRUYXNrc0J5VXNlcklkKCk7XHJcbiAgfSwgW3VzZXIsIHBhZ2VTZWxlY3RlZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRlcj5cclxuICAgICAgICA8aDE+aGVhbHRoeSB0YXNrczwvaDE+XHJcbiAgICAgICAgPEZhSGVhcnRQdWxzZSBjb2xvcj1cIiNmZmZcIiBzaXplPXtcIjMwcHhcIn0gLz5cclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxCb2R5T2ZQdWJsaWNUYXNrcz5cclxuICAgICAgICA8TWVudSBwYWdlU2VsZWN0ZWQ9XCJteVJlY2VudFRhc2tzXCIgLz5cclxuICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbnB1dENvbXBvbmVudCBwbGFjZWhvbGRlcj1cIkNsaXF1ZSBwYXJhIHBlc3F1aXNhciBwb3IgYWxndW1hIGF0aXZpZGFkZVwiIC8+XHJcbiAgICAgICAgICB7ZGF0YVRhc2tzU3RhdGU/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8VGFza1xyXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbk9mVGFzaz17aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICBwcm9mZXNzaW9uYWxOYW1lPXtpdGVtLnVzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgcHJvZmVzc2lvbmFsUGhvdG9Vcmw9e2Ake2FwaS5kZWZhdWx0cy5iYXNlVVJMfS9maWxlcy8ke2l0ZW0udXNlci5waG90b1VybH1gfVxyXG4gICAgICAgICAgICAgIHRpdGxlT2ZUYXNrPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNoZWNrVGFzaz17aXRlbS5jYXJyaWVkT3V0fVxyXG4gICAgICAgICAgICAgIHRhc2tJZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICBkZWFkbGluZT17aXRlbS5kZWFkbGluZX1cclxuICAgICAgICAgICAgICBpc1Rhc2tQdWJsaWM9e2l0ZW0uaXNUYXNrUHVibGljfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8UGFnaW5hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFBhZ2VDb250YWluZXJcclxuICAgICAgICAgICAgICBrZXk9e2BrZXkgLT4gJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtwYWdlU2VsZWN0ZWQgPT09IDEgPyBcInNlbGVjdENvbG9yXCIgOiBudWxsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICA8L1BhZ2VDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj4yPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj4zPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj40PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj41PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj42PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj43PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgPC9Cb2R5T2ZQdWJsaWNUYXNrcz5cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICA8cD7CqSBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zPC9wPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDogWzEsIDIsIDMsIDRdLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiRmFIZWFydFB1bHNlIiwiRm9vdGVyIiwiQm9keU9mUHVibGljVGFza3MiLCJDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwiSGVhZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2luYXRpb25Db250YWluZXIiLCJUYXNrIiwiTWVudSIsIklucHV0Q29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJ1c2VBdXRoIiwiTXlSZWNlbnRUYXNrcyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaXN0IiwiZGF0YVRhc2tzU3RhdGUiLCJzZXREYXRhVGFza3NTdGF0ZSIsInBhZ2VTZWxlY3RlZCIsInNldFBhZ2VTZWxlY3RlZCIsInVzZXIiLCJoYW5kbGVDaGFuZ2VQYWdlIiwicGFnZSIsImhhbmRsZUdldFRhc2tzQnlVc2VySWQiLCJyZXNwb25zZSIsImdldCIsImVtYWlsIiwiZGF0YSIsImVycm9yIiwiYWxlcnQiLCJoMSIsImNvbG9yIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaXRlbSIsImRlc2NyaXB0aW9uT2ZUYXNrIiwiZGVzY3JpcHRpb24iLCJwcm9mZXNzaW9uYWxOYW1lIiwidXNlcm5hbWUiLCJwcm9mZXNzaW9uYWxQaG90b1VybCIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInBob3RvVXJsIiwidGl0bGVPZlRhc2siLCJ0aXRsZSIsImNoZWNrVGFzayIsImNhcnJpZWRPdXQiLCJ0YXNrSWQiLCJpZCIsImRlYWRsaW5lIiwiaXNUYXNrUHVibGljIiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/myRecentTasks.page.tsx\n"));

/***/ })

});