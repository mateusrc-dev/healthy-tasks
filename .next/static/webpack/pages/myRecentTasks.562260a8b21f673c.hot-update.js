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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ MyRecentTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeartPulse!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaHeartPulse!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var _styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/myRecentTasks */ \"./src/styles/pages/myRecentTasks.ts\");\n/* harmony import */ var _components_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/task */ \"./src/components/task.tsx\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input */ \"./src/components/input.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction MyRecentTasks(props) {\n    _s();\n    console.log(JSON.stringify(props.list));\n    const [dataTasksState, setDataTasksState] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth)();\n    console.log(dataTasksState);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        async function handleGetTasksByUserId() {\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.get(\"/tasks/getTaskById/\".concat(user.email));\n                setDataTasksState(response.data);\n            } catch (error) {\n                alert(\"N\\xe3o foi poss\\xedvel buscar as atividades. \".concat(error));\n                return;\n            }\n        }\n        handleGetTasksByUserId();\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"healthy tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_9__.FaHeartPulse, {\n                        color: \"#fff\",\n                        size: \"30px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.BodyOfPublicTasks, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {\n                        pageSelected: \"myRecentTasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_5__.InputComponent, {\n                                placeholder: \"Clique para pesquisar por alguma atividade\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            dataTasksState === null || dataTasksState === void 0 ? void 0 : dataTasksState.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_task__WEBPACK_IMPORTED_MODULE_3__.Task, {\n                                    descriptionOfTask: item.description,\n                                    professionalName: item.user.username,\n                                    professionalPhotoUrl: \"\".concat(_lib_axios__WEBPACK_IMPORTED_MODULE_7__.api.defaults.baseURL, \"/files/\").concat(item.user.photoUrl),\n                                    titleOfTask: item.title,\n                                    checkTask: item.carriedOut,\n                                    taskId: item.id,\n                                    deadline: item.deadline\n                                }, item.id, false, {\n                                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PaginationContainer, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        color: \"selectColor\",\n                                        children: \"1\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"3\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_myRecentTasks__WEBPACK_IMPORTED_MODULE_2__.PageContainer, {\n                                        children: \"7\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_1__.Footer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 Todos os direitos reservados\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\myRecentTasks.page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n}\n_s(MyRecentTasks, \"njv/sxgHg5bsvAH4vybJkdpRVfs=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuth\n    ];\n});\n_c = MyRecentTasks;\nvar _c;\n$RefreshReg$(_c, \"MyRecentTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbXlSZWNlbnRUYXNrcy5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ0Q7QUFRUDtBQUNHO0FBQ0E7QUFDVztBQUNUO0FBQ1Q7QUFDSzs7QUErQnpCLFNBQVNlLGNBQWNDLEtBQUs7O0lBQ3pDQyxRQUFRQyxHQUFHLENBQUNDLEtBQUtDLFNBQVMsQ0FBQ0osTUFBTUssSUFBSTtJQUNyQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFhLEVBQUU7SUFDbkUsTUFBTSxFQUFFWSxJQUFJLEVBQUUsR0FBR1Ysb0RBQU9BO0lBQ3hCRyxRQUFRQyxHQUFHLENBQUNJO0lBRVpYLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZWM7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWIsMkNBQUdBLENBQUNjLEdBQUcsQ0FBQyxzQkFBaUMsT0FBWEgsS0FBS0ksS0FBSztnQkFFL0RMLGtCQUFrQkcsU0FBU0csSUFBSTtZQUNqQyxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLE1BQU0sZ0RBQWdELE9BQU5EO2dCQUNoRDtZQUNGO1FBQ0Y7UUFDQUw7SUFDRixHQUFHO1FBQUNEO0tBQUs7SUFFVCxxQkFDRSw4REFBQ3JCLGtFQUFTQTs7MEJBQ1IsOERBQUNFLCtEQUFNQTs7a0NBQ0wsOERBQUMyQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDaEMsNkZBQVlBO3dCQUFDaUMsT0FBTTt3QkFBT0MsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ2hDLDBFQUFpQkE7O2tDQUNoQiw4REFBQ08sa0RBQUlBO3dCQUFDMEIsY0FBYTs7Ozs7O2tDQUNuQiw4REFBQy9CLHlFQUFnQkE7OzBDQUNmLDhEQUFDTSw2REFBY0E7Z0NBQUMwQixhQUFZOzs7Ozs7NEJBQzNCZCwyQkFBQUEscUNBQUFBLGVBQWdCZSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3BCLDhEQUFDOUIsa0RBQUlBO29DQUVIK0IsbUJBQW1CRCxLQUFLRSxXQUFXO29DQUNuQ0Msa0JBQWtCSCxLQUFLZCxJQUFJLENBQUNrQixRQUFRO29DQUNwQ0Msc0JBQXNCLEdBQWlDTCxPQUE5QnpCLDJDQUFHQSxDQUFDK0IsUUFBUSxDQUFDQyxPQUFPLEVBQUMsV0FBNEIsT0FBbkJQLEtBQUtkLElBQUksQ0FBQ3NCLFFBQVE7b0NBQ3pFQyxhQUFhVCxLQUFLVSxLQUFLO29DQUN2QkMsV0FBV1gsS0FBS1ksVUFBVTtvQ0FDMUJDLFFBQVFiLEtBQUtjLEVBQUU7b0NBQ2ZDLFVBQVVmLEtBQUtlLFFBQVE7bUNBUGxCZixLQUFLYyxFQUFFOzs7OzswQ0FVaEIsOERBQUM3Qyw0RUFBbUJBOztrREFDbEIsOERBQUNELHNFQUFhQTt3Q0FBQzJCLE9BQU87a0RBQWU7Ozs7OztrREFDckMsOERBQUMzQixzRUFBYUE7a0RBQUM7Ozs7OztrREFDZiw4REFBQ0Esc0VBQWFBO2tEQUFDOzs7Ozs7a0RBQ2YsOERBQUNBLHNFQUFhQTtrREFBQzs7Ozs7O2tEQUNmLDhEQUFDQSxzRUFBYUE7a0RBQUM7Ozs7OztrREFDZiw4REFBQ0Esc0VBQWFBO2tEQUFDOzs7Ozs7a0RBQ2YsOERBQUNBLHNFQUFhQTtrREFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyQiw4REFBQ0wsc0RBQU1BOzBCQUNMLDRFQUFDcUQ7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0ExRHdCdkM7O1FBR0xELGdEQUFPQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9teVJlY2VudFRhc2tzLnBhZ2UudHN4P2UwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFIZWFydFB1bHNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhNlwiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHtcclxuICBCb2R5T2ZQdWJsaWNUYXNrcyxcclxuICBDb250YWluZXIsXHJcbiAgQ29udGVudENvbnRhaW5lcixcclxuICBIZWFkZXIsXHJcbiAgUGFnZUNvbnRhaW5lcixcclxuICBQYWdpbmF0aW9uQ29udGFpbmVyLFxyXG59IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvbXlSZWNlbnRUYXNrc1wiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGFza1wiO1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVudVwiO1xyXG5pbXBvcnQgeyBJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2lucHV0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL2xpYi9heGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uL2hvb2tzL2F1dGhcIjtcclxuXHJcbmludGVyZmFjZSBUYXNrVHlwZSB7XHJcbiAgY2FycmllZE91dDogYm9vbGVhbjtcclxuICBjcmVhdGVkX2F0OiBEYXRlO1xyXG4gIGRlYWRsaW5lOiBEYXRlO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgZm9yY2VUYXNrOiBudW1iZXIgfCBudWxsO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgaXNUYXNrUHVibGljOiBib29sZWFuO1xyXG4gIHBhdGllbnRFbWFpbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBEYXRlO1xyXG4gIHVzZXI6IHtcclxuICAgIGNvbXBsYWludDogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNyZWF0ZWRfYXQ6IERhdGU7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbDtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHBob3RvVXJsOiBzdHJpbmc7XHJcbiAgICBwcm9maWxlRm9yY2U6IG51bWJlciB8IG51bGw7XHJcbiAgICBwcm9maWxlUHVibGljOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHNwZWNpYWxpemF0aW9uOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgc3RhdGlzdGljUHVibGljOiBib29sZWFuIHwgbnVsbDtcclxuICAgIHR5cGVVc2VyOiBzdHJpbmc7XHJcbiAgICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15UmVjZW50VGFza3MocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwcm9wcy5saXN0KSk7XHJcbiAgY29uc3QgW2RhdGFUYXNrc1N0YXRlLCBzZXREYXRhVGFza3NTdGF0ZV0gPSB1c2VTdGF0ZTxUYXNrVHlwZVtdPihbXSk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YVRhc2tzU3RhdGUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0VGFza3NCeVVzZXJJZCgpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC90YXNrcy9nZXRUYXNrQnlJZC8ke3VzZXIuZW1haWx9YCk7XHJcblxyXG4gICAgICAgIHNldERhdGFUYXNrc1N0YXRlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KGBOw6NvIGZvaSBwb3Nzw612ZWwgYnVzY2FyIGFzIGF0aXZpZGFkZXMuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVHZXRUYXNrc0J5VXNlcklkKCk7XHJcbiAgfSwgW3VzZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgPGgxPmhlYWx0aHkgdGFza3M8L2gxPlxyXG4gICAgICAgIDxGYUhlYXJ0UHVsc2UgY29sb3I9XCIjZmZmXCIgc2l6ZT17XCIzMHB4XCJ9IC8+XHJcbiAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Qm9keU9mUHVibGljVGFza3M+XHJcbiAgICAgICAgPE1lbnUgcGFnZVNlbGVjdGVkPVwibXlSZWNlbnRUYXNrc1wiIC8+XHJcbiAgICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICA8SW5wdXRDb21wb25lbnQgcGxhY2Vob2xkZXI9XCJDbGlxdWUgcGFyYSBwZXNxdWlzYXIgcG9yIGFsZ3VtYSBhdGl2aWRhZGVcIiAvPlxyXG4gICAgICAgICAge2RhdGFUYXNrc1N0YXRlPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFRhc2tcclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb25PZlRhc2s9e2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgcHJvZmVzc2lvbmFsTmFtZT17aXRlbS51c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIHByb2Zlc3Npb25hbFBob3RvVXJsPXtgJHthcGkuZGVmYXVsdHMuYmFzZVVSTH0vZmlsZXMvJHtpdGVtLnVzZXIucGhvdG9Vcmx9YH1cclxuICAgICAgICAgICAgICB0aXRsZU9mVGFzaz17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBjaGVja1Rhc2s9e2l0ZW0uY2FycmllZE91dH1cclxuICAgICAgICAgICAgICB0YXNrSWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgZGVhZGxpbmU9e2l0ZW0uZGVhZGxpbmV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxQYWdpbmF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lciBjb2xvcj17XCJzZWxlY3RDb2xvclwifT4xPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj4yPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj4zPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj40PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj41PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj42PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UGFnZUNvbnRhaW5lcj43PC9QYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9QYWdpbmF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgPC9Cb2R5T2ZQdWJsaWNUYXNrcz5cclxuICAgICAgPEZvb3Rlcj5cclxuICAgICAgICA8cD7CqSBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zPC9wPlxyXG4gICAgICA8L0Zvb3Rlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMjAwMCkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDogWzEsIDIsIDMsIDRdLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiRmFIZWFydFB1bHNlIiwiRm9vdGVyIiwiQm9keU9mUHVibGljVGFza3MiLCJDb250YWluZXIiLCJDb250ZW50Q29udGFpbmVyIiwiSGVhZGVyIiwiUGFnZUNvbnRhaW5lciIsIlBhZ2luYXRpb25Db250YWluZXIiLCJUYXNrIiwiTWVudSIsIklucHV0Q29tcG9uZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJ1c2VBdXRoIiwiTXlSZWNlbnRUYXNrcyIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaXN0IiwiZGF0YVRhc2tzU3RhdGUiLCJzZXREYXRhVGFza3NTdGF0ZSIsInVzZXIiLCJoYW5kbGVHZXRUYXNrc0J5VXNlcklkIiwicmVzcG9uc2UiLCJnZXQiLCJlbWFpbCIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwiaDEiLCJjb2xvciIsInNpemUiLCJwYWdlU2VsZWN0ZWQiLCJwbGFjZWhvbGRlciIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbk9mVGFzayIsImRlc2NyaXB0aW9uIiwicHJvZmVzc2lvbmFsTmFtZSIsInVzZXJuYW1lIiwicHJvZmVzc2lvbmFsUGhvdG9VcmwiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJwaG90b1VybCIsInRpdGxlT2ZUYXNrIiwidGl0bGUiLCJjaGVja1Rhc2siLCJjYXJyaWVkT3V0IiwidGFza0lkIiwiaWQiLCJkZWFkbGluZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/myRecentTasks.page.tsx\n"));

/***/ })

});