(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/basics/background"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/My/BusinessApp/pages/basics/background.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =






























































































































{
  data: function data() {
    return {
      ColorList: this.ColorList };

  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=template&id=6b12e5d9&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/My/BusinessApp/pages/basics/background.vue?vue&type=template&id=6b12e5d9& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c(
        "cu-custom",
        {
          attrs: {
            bgColor: "bg-gradual-blue",
            isBack: true,
            mpcomid: "7ed82ac2-0"
          }
        },
        [
          _c("block", { slot: "backText" }, [_vm._v("返回")]),
          _c("block", { slot: "content" }, [_vm._v("背景")])
        ],
        1
      ),
      _vm._m(0),
      _c(
        "view",
        { staticClass: "grid col-3 padding-sm" },
        _vm._l(_vm.ColorList, function(item, index) {
          return _c("view", { key: index, staticClass: "padding-sm" }, [
            _c(
              "view",
              {
                staticClass: "padding radius text-center shadow-blur",
                class: "bg-" + item.name
              },
              [
                _c("view", { staticClass: "text-lg" }, [
                  _vm._v(_vm._s(item.title))
                ]),
                _c("view", { staticClass: "margin-top-sm text-Abc" }, [
                  _vm._v(_vm._s(item.name))
                ])
              ]
            )
          ])
        })
      ),
      _vm._m(1),
      _c(
        "view",
        { staticClass: "grid col-3 bg-white padding-sm" },
        _vm._l(_vm.ColorList, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "padding-sm",
              attrs: { "v:if": "index<12" }
            },
            [
              _c(
                "view",
                {
                  staticClass: "padding radius text-center light",
                  class: "bg-" + item.name
                },
                [
                  _c("view", { staticClass: "text-lg" }, [
                    _vm._v(_vm._s(item.title))
                  ]),
                  _c("view", { staticClass: "margin-top-sm text-Abc" }, [
                    _vm._v(_vm._s(item.name))
                  ])
                ]
              )
            ]
          )
        })
      ),
      _vm._m(2),
      _vm._m(3),
      _vm._m(4),
      _vm._m(5),
      _vm._m(6),
      _c(
        "view",
        {
          staticClass: "bg-video bg-mask flex align-center",
          staticStyle: { height: "422rpx" }
        },
        [
          _c("video", {
            attrs: {
              src:
                "https://yz.lol.qq.com/v1/assets/videos/aatrox-splashvideo.webm",
              autoplay: "",
              loop: "",
              muted: "",
              "show-play-btn": false,
              controls: false,
              objectFit: "cover"
            }
          }),
          _c(
            "cover-view",
            {
              staticClass: "padding-xl text-white ",
              attrs: { mpcomid: "7ed82ac2-3" }
            },
            [
              _c(
                "cover-view",
                {
                  staticClass: "padding-xs  text-xxl text-bold",
                  attrs: { mpcomid: "7ed82ac2-1" }
                },
                [_vm._v("暗裔剑魔")]
              ),
              _c(
                "cover-view",
                { staticClass: "padding-xs", attrs: { mpcomid: "7ed82ac2-2" } },
                [_vm._v("我必须连同希望一起毁坏……")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._m(7),
      _vm._m(8)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white solid-bottom" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("深色背景")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white solid-bottom" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("淡色背景")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      { staticClass: "cu-bar bg-white solid-bottom margin-top" },
      [
        _c("view", { staticClass: "action" }, [
          _c("text", { staticClass: "icon-title text-blue" }),
          _vm._v("渐变背景")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "grid col-2 padding-sm" }, [
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass: "bg-gradual-red padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("魅红")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#f43f3b - #ec008c")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass:
              "bg-gradual-orange padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("鎏金")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#ff9700 - #ed1c24")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass:
              "bg-gradual-green padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("翠柳")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#39b54a - #8dc63f")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass:
              "bg-gradual-blue padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("靛青")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#0081ff - #1cbbb4")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass:
              "bg-gradual-purple padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("惑紫")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#9000ff - #5e00ff")
            ])
          ]
        )
      ]),
      _c("view", { staticClass: "padding-sm" }, [
        _c(
          "view",
          {
            staticClass:
              "bg-gradual-pink padding radius text-center shadow-blur"
          },
          [
            _c("view", { staticClass: "text-lg" }, [_vm._v("霞彩")]),
            _c("view", { staticClass: "margin-top-sm text-Abc" }, [
              _vm._v("#ec008c - #6739b6")
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("图片背景")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "bg-img bg-mask flex align-center",
        staticStyle: {
          "background-image":
            "url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg')",
          height: "414rpx"
        }
      },
      [
        _c("view", { staticClass: "padding-xl text-white" }, [
          _c("view", { staticClass: "padding-xs text-xxl text-bold" }, [
            _vm._v("钢铁之翼")
          ]),
          _c("view", { staticClass: "padding-xs text-lg" }, [
            _vm._v("Only the guilty need fear me.")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("视频背景")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("透明背景(文字层)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "grid col-2" }, [
      _c(
        "view",
        {
          staticClass: "bg-img padding-bottom-xl",
          staticStyle: {
            "background-image":
              "url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg')",
            height: "207rpx"
          }
        },
        [
          _c("view", { staticClass: "bg-shadeTop padding padding-bottom-xl" }, [
            _vm._v("上面开始")
          ])
        ]
      ),
      _c(
        "view",
        {
          staticClass: "bg-img padding-top-xl flex align-end",
          staticStyle: {
            "background-image":
              "url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg')",
            height: "207rpx"
          }
        },
        [
          _c(
            "view",
            { staticClass: "bg-shadeBottom padding padding-top-xl flex-sub" },
            [_vm._v("下面开始")]
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "F:\\My\\BusinessApp\\main.js?{\"page\":\"pages%2Fbasics%2Fbackground\"}":
/*!************************************************************************!*\
  !*** F:/My/BusinessApp/main.js?{"page":"pages%2Fbasics%2Fbackground"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\My\\BusinessApp\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _background = _interopRequireDefault(__webpack_require__(/*! ./pages/basics/background.vue */ "F:\\My\\BusinessApp\\pages\\basics\\background.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_background.default));

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\background.vue":
/*!*****************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/background.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.vue?vue&type=template&id=6b12e5d9& */ "F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=template&id=6b12e5d9&");
/* harmony import */ var _background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background.vue?vue&type=script&lang=js& */ "F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/My/BusinessApp/pages/basics/background.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/background.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./background.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=template&id=6b12e5d9&":
/*!************************************************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/background.vue?vue&type=template&id=6b12e5d9& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./background.vue?vue&type=template&id=6b12e5d9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\background.vue?vue&type=template&id=6b12e5d9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_background_vue_vue_type_template_id_6b12e5d9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\My\\BusinessApp\\main.js?{\"page\":\"pages%2Fbasics%2Fbackground\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/basics/background.js.map