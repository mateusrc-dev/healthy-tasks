"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favoriteTasks",{

/***/ "./src/pages/favoriteTasks.page.tsx":
/*!******************************************!*\
  !*** ./src/pages/favoriteTasks.page.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FavoriteTasks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=FaHeartPulse!=!react-icons/fa6 */ \"__barrel_optimize__?names=FaHeartPulse!=!./node_modules/react-icons/fa6/index.esm.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ \"./src/components/menu.tsx\");\n/* harmony import */ var _styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/favoriteTasks */ \"./src/styles/pages/favoriteTasks.ts\");\n/* harmony import */ var _styles_pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/home */ \"./src/styles/pages/home.ts\");\n/* harmony import */ var _components_favoriteTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/favoriteTask */ \"./src/components/favoriteTask.tsx\");\n/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/auth */ \"./src/hooks/auth.tsx\");\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction FavoriteTasks() {\n    _s();\n    const [dataFavoritesTasks, setDataFavoritesTasks] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);\n    const { user } = (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth)();\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        async function handleGetTasks() {\n            try {\n                const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.get(\"/favoritesTasks/getManyFavoriteTasks/\".concat(user.id));\n                setDataFavoritesTasks(response.data);\n            } catch (error) {\n                alert(\"N\\xe3o foi poss\\xedvel buscar as atividades favoritas. \".concat(error));\n                return;\n            }\n        }\n        handleGetTasks();\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__.Header, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"healthy tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaHeartPulse_react_icons_fa6__WEBPACK_IMPORTED_MODULE_8__.FaHeartPulse, {\n                        color: \"#fff\",\n                        size: \"30px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__.BodyFavoritesTasks, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menu__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n                        pageSelected: \"favoriteTasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__.ContentContainer, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                style: {\n                                    color: \"#0b0cca\",\n                                    fontStyle: \"italic\",\n                                    fontWeight: 700,\n                                    fontSize: \"25px\"\n                                },\n                                children: \"Atividades favoritas\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_favoriteTasks__WEBPACK_IMPORTED_MODULE_2__.FavoriteTasksContainer, {\n                                children: dataFavoritesTasks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_favoriteTask__WEBPACK_IMPORTED_MODULE_4__.FavoriteTask, {\n                                        description: item.task.description,\n                                        professionalName: item.task.user.username,\n                                        title: item.task.title,\n                                        professionalPhoto: \"\".concat(_lib_axios__WEBPACK_IMPORTED_MODULE_6__.api.defaults.baseURL, \"/files/\").concat(item.task.user.photoUrl),\n                                        professionalSpecialization: item.task.user.specialization\n                                    }, item.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_pages_home__WEBPACK_IMPORTED_MODULE_3__.Footer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 Todos os direitos reservados\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer NITRO\\\\Desktop\\\\Rocketseat - ReactJs\\\\Ignite Rocketseat - projeto pessoal\\\\healthy-tasks\\\\src\\\\pages\\\\favoriteTasks.page.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(FavoriteTasks, \"WiWeojSWSDSvqEnzTLuKns+AkyM=\", false, function() {\n    return [\n        _hooks_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth\n    ];\n});\n_c = FavoriteTasks;\nvar _c;\n$RefreshReg$(_c, \"FavoriteTasks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZmF2b3JpdGVUYXNrcy5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNMO0FBT0g7QUFDTztBQUNZO0FBQ2xCO0FBQ0w7QUFDUztBQWU3QixTQUFTYTs7SUFDdEIsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHSCwrQ0FBUUEsQ0FFMUQsRUFBRTtJQUNKLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUdQLG9EQUFPQTtJQUV4QkUsZ0RBQVNBLENBQUM7UUFDUixlQUFlTTtZQUNiLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNUiwyQ0FBR0EsQ0FBQ1MsR0FBRyxDQUM1Qix3Q0FBZ0QsT0FBUkgsS0FBS0ksRUFBRTtnQkFHakRMLHNCQUFzQkcsU0FBU0csSUFBSTtZQUNyQyxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLE1BQU0sMERBQTBELE9BQU5EO2dCQUMxRDtZQUNGO1FBQ0Y7UUFFQUw7SUFDRixHQUFHO1FBQUNEO0tBQUs7SUFDVCxxQkFDRSw4REFBQ2Isa0VBQVNBOzswQkFDUiw4REFBQ0csK0RBQU1BOztrQ0FDTCw4REFBQ2tCO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUN4Qiw2RkFBWUE7d0JBQUN5QixPQUFNO3dCQUFPQyxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDeEIsMkVBQWtCQTs7a0NBQ2pCLDhEQUFDRCxrREFBSUE7d0JBQUMwQixjQUFjOzs7Ozs7a0NBQ3BCLDhEQUFDdkIseUVBQWdCQTs7MENBQ2YsOERBQUN3QjtnQ0FDQ0MsT0FBTztvQ0FDTEosT0FBTztvQ0FDUEssV0FBVztvQ0FDWEMsWUFBWTtvQ0FDWkMsVUFBVTtnQ0FDWjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDM0IsK0VBQXNCQTswQ0FDcEJTLG1CQUFtQm1CLEdBQUcsQ0FBQyxDQUFDQyxxQkFDdkIsOERBQUMxQixrRUFBWUE7d0NBRVgyQixhQUFhRCxLQUFLRSxJQUFJLENBQUNELFdBQVc7d0NBQ2xDRSxrQkFBa0JILEtBQUtFLElBQUksQ0FBQ3BCLElBQUksQ0FBQ3NCLFFBQVE7d0NBQ3pDQyxPQUFPTCxLQUFLRSxJQUFJLENBQUNHLEtBQUs7d0NBQ3RCQyxtQkFBbUIsR0FBaUNOLE9BQTlCeEIsMkNBQUdBLENBQUMrQixRQUFRLENBQUNDLE9BQU8sRUFBQyxXQUFpQyxPQUF4QlIsS0FBS0UsSUFBSSxDQUFDcEIsSUFBSSxDQUFDMkIsUUFBUTt3Q0FDM0VDLDRCQUE0QlYsS0FBS0UsSUFBSSxDQUFDcEIsSUFBSSxDQUFDNkIsY0FBYzt1Q0FMcERYLEtBQUtkLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBV3RCLDhEQUFDYixzREFBTUE7MEJBQ0wsNEVBQUN1Qzs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtHQTVEd0JqQzs7UUFJTEosZ0RBQU9BOzs7S0FKRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zhdm9yaXRlVGFza3MucGFnZS50c3g/Mzc5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUhlYXJ0UHVsc2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmE2XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCB7XHJcbiAgQm9keUZhdm9yaXRlc1Rhc2tzLFxyXG4gIENvbnRhaW5lcixcclxuICBDb250ZW50Q29udGFpbmVyLFxyXG4gIEZhdm9yaXRlVGFza3NDb250YWluZXIsXHJcbiAgSGVhZGVyLFxyXG59IGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvZmF2b3JpdGVUYXNrc1wiO1xyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgRmF2b3JpdGVUYXNrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmF2b3JpdGVUYXNrXCI7XHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vaG9va3MvYXV0aFwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vbGliL2F4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBEYXRhRmF2b3JpdGVzVGFza3Mge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdGFzazoge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgIHNwZWNpYWxpemF0aW9uOiBzdHJpbmc7XHJcbiAgICAgIHBob3RvVXJsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdm9yaXRlVGFza3MoKSB7XHJcbiAgY29uc3QgW2RhdGFGYXZvcml0ZXNUYXNrcywgc2V0RGF0YUZhdm9yaXRlc1Rhc2tzXSA9IHVzZVN0YXRlPFxyXG4gICAgRGF0YUZhdm9yaXRlc1Rhc2tzW11cclxuICA+KFtdKTtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldFRhc2tzKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcclxuICAgICAgICAgIGAvZmF2b3JpdGVzVGFza3MvZ2V0TWFueUZhdm9yaXRlVGFza3MvJHt1c2VyLmlkfWBcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXREYXRhRmF2b3JpdGVzVGFza3MocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgYWxlcnQoYE7Do28gZm9pIHBvc3PDrXZlbCBidXNjYXIgYXMgYXRpdmlkYWRlcyBmYXZvcml0YXMuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlR2V0VGFza3MoKTtcclxuICB9LCBbdXNlcl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGVyPlxyXG4gICAgICAgIDxoMT5oZWFsdGh5IHRhc2tzPC9oMT5cclxuICAgICAgICA8RmFIZWFydFB1bHNlIGNvbG9yPVwiI2ZmZlwiIHNpemU9e1wiMzBweFwifSAvPlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPEJvZHlGYXZvcml0ZXNUYXNrcz5cclxuICAgICAgICA8TWVudSBwYWdlU2VsZWN0ZWQ9e1wiZmF2b3JpdGVUYXNrc1wifSAvPlxyXG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzBiMGNjYVwiLFxyXG4gICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBdGl2aWRhZGVzIGZhdm9yaXRhc1xyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxGYXZvcml0ZVRhc2tzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB7ZGF0YUZhdm9yaXRlc1Rhc2tzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGYXZvcml0ZVRhc2tcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLnRhc2suZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBwcm9mZXNzaW9uYWxOYW1lPXtpdGVtLnRhc2sudXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRhc2sudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBwcm9mZXNzaW9uYWxQaG90bz17YCR7YXBpLmRlZmF1bHRzLmJhc2VVUkx9L2ZpbGVzLyR7aXRlbS50YXNrLnVzZXIucGhvdG9Vcmx9YH1cclxuICAgICAgICAgICAgICAgIHByb2Zlc3Npb25hbFNwZWNpYWxpemF0aW9uPXtpdGVtLnRhc2sudXNlci5zcGVjaWFsaXphdGlvbn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmF2b3JpdGVUYXNrc0NvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbnRlbnRDb250YWluZXI+XHJcbiAgICAgIDwvQm9keUZhdm9yaXRlc1Rhc2tzPlxyXG4gICAgICA8Rm9vdGVyPlxyXG4gICAgICAgIDxwPsKpIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3M8L3A+XHJcbiAgICAgIDwvRm9vdGVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRmFIZWFydFB1bHNlIiwiTWVudSIsIkJvZHlGYXZvcml0ZXNUYXNrcyIsIkNvbnRhaW5lciIsIkNvbnRlbnRDb250YWluZXIiLCJGYXZvcml0ZVRhc2tzQ29udGFpbmVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiRmF2b3JpdGVUYXNrIiwidXNlQXV0aCIsImFwaSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmF2b3JpdGVUYXNrcyIsImRhdGFGYXZvcml0ZXNUYXNrcyIsInNldERhdGFGYXZvcml0ZXNUYXNrcyIsInVzZXIiLCJoYW5kbGVHZXRUYXNrcyIsInJlc3BvbnNlIiwiZ2V0IiwiaWQiLCJkYXRhIiwiZXJyb3IiLCJhbGVydCIsImgxIiwiY29sb3IiLCJzaXplIiwicGFnZVNlbGVjdGVkIiwiaDMiLCJzdHlsZSIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbiIsInRhc2siLCJwcm9mZXNzaW9uYWxOYW1lIiwidXNlcm5hbWUiLCJ0aXRsZSIsInByb2Zlc3Npb25hbFBob3RvIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicGhvdG9VcmwiLCJwcm9mZXNzaW9uYWxTcGVjaWFsaXphdGlvbiIsInNwZWNpYWxpemF0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/favoriteTasks.page.tsx\n"));

/***/ })

});