"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var C_Users_sophi_crowdfunder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sophi_crowdfunder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sophi_crowdfunder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar items = [\n    {\n        header: \"\",\n        description: \"\"\n    }, \n];\nvar CampaignsDisplay = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(CampaignsDisplay, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(CampaignsDisplay);\n    function CampaignsDisplay() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, CampaignsDisplay);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(CampaignsDisplay, [\n        {\n            key: \"displayCampaigns\",\n            value: function displayCampaigns() {\n                var _this = this;\n                var items = this.props.campaigns.map(function(address) {\n                    return {\n                        header: address,\n                        description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: \"View Campaign\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 22\n                        }, _this),\n                        fluid: true\n                    };\n                });\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 12\n                }, this);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: \"Open Campaigns\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                floated: \"right\",\n                                content: \"Create Campaign\",\n                                icon: \"add circle\",\n                                primary: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this),\n                            this.displayCampaigns()\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sophi\\\\crowdfunder\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps() {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(C_Users_sophi_crowdfunder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var campaigns;\n                    return C_Users_sophi_crowdfunder_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.getDeployedContracts().call();\n                            case 2:\n                                campaigns = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    campaigns: campaigns\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return CampaignsDisplay;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignsDisplay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBQXlDO0FBQ0M7QUFDQTtBQUNPO0FBQ1A7QUFFMUMsSUFBTU0sS0FBSyxHQUFHO0lBQ1o7UUFDRUMsTUFBTSxFQUFFLEVBQUU7UUFDVkMsV0FBVyxFQUFFLEVBQUU7S0FDaEI7Q0FDRjtBQUVELG9CQUFzQixpQkFtQ3JCOzs7O2FBbkNLQyxnQkFBZ0I7Ozs7OztZQU1wQkMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixHQUFHOztnQkFDakIsSUFBTUosS0FBSyxHQUFHLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxPQUFPLEVBQUs7b0JBQ2xELE9BQU87d0JBQ0xQLE1BQU0sRUFBRU8sT0FBTzt3QkFDZk4sV0FBVyxnQkFBRSw4REFBQ08sR0FBQztzQ0FBQyxlQUFhOzs7OztpQ0FBSTt3QkFDakNDLEtBQUssRUFBRSxJQUFJO3FCQUNaLENBQUM7aUJBQ0gsQ0FBQztnQkFDRixxQkFBTyw4REFBQ1osMERBQVU7b0JBQUNFLEtBQUssRUFBRUEsS0FBSzs7Ozs7d0JBQUksQ0FBQzthQUNyQzs7O1lBRURZLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLHFCQUNFLDhEQUFDYiwwREFBTTs4QkFDTCw0RUFBQ2MsS0FBRzs7MENBQ0YsOERBQUNDLElBQUU7MENBQUMsZ0JBQWM7Ozs7O29DQUFLOzBDQUN2Qiw4REFBQ2pCLHNEQUFNO2dDQUNMa0IsT0FBTyxFQUFDLE9BQU87Z0NBQ2ZDLE9BQU8sRUFBQyxpQkFBaUI7Z0NBQ3pCQyxJQUFJLEVBQUMsWUFBWTtnQ0FDakJDLE9BQU87Ozs7O29DQUNQOzRCQUNELElBQUksQ0FBQ2QsZ0JBQWdCLEVBQUU7Ozs7Ozs0QkFDcEI7Ozs7O3dCQUNDLENBQ1Q7YUFDSDs7OztZQS9CWWUsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsU0FBYUEsZUFBZTt1QkFBNUIsNk9BQStCO3dCQUN2QmIsU0FBUzs7Ozs7dUNBQVNWLHNGQUFvQyxFQUFFLENBQUMwQixJQUFJLEVBQUU7O2dDQUEvRGhCLFNBQVMsWUFBc0Q7NkRBQzlEO29DQUFFQSxTQUFTLEVBQUVBLFNBQVM7aUNBQUU7Ozs7OztpQkFDaEM7YUFBQTs7OztDQTZCRixDQWpDOEJYLDRDQUFTLENBaUN2QztBQUVELCtEQUFlUSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcclxuaW1wb3J0IFwic2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0XCI7XHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICBoZWFkZXI6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY2xhc3MgQ2FtcGFpZ25zRGlzcGxheSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbnRyYWN0cygpLmNhbGwoKTtcclxuICAgIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5Q2FtcGFpZ25zKCkge1xyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoKGFkZHJlc3MpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxyXG4gICAgICAgIGZsdWlkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxyXG4gICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7dGhpcy5kaXNwbGF5Q2FtcGFpZ25zKCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduc0Rpc3BsYXk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZhY3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiTGF5b3V0IiwiaXRlbXMiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsIkNhbXBhaWduc0Rpc3BsYXkiLCJkaXNwbGF5Q2FtcGFpZ25zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJhZGRyZXNzIiwiYSIsImZsdWlkIiwiR3JvdXAiLCJyZW5kZXIiLCJkaXYiLCJoMyIsImZsb2F0ZWQiLCJjb250ZW50IiwiaWNvbiIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDb250cmFjdHMiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});