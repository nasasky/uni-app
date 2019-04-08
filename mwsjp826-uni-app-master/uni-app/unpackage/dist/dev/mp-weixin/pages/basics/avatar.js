(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/basics/avatar"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!F:/My/BusinessApp/pages/basics/avatar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =
























































































{
  data: function data() {
    return {
      ColorList: this.ColorList,
      avatar: [
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
      'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'] };



  } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=template&id=1720c604&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!F:/My/BusinessApp/pages/basics/avatar.vue?vue&type=template&id=1720c604& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            mpcomid: "36ecb74a-0"
          }
        },
        [
          _c("block", { slot: "backText" }, [_vm._v("返回")]),
          _c("block", { slot: "content" }, [_vm._v("头像")])
        ],
        1
      ),
      _vm._m(0),
      _vm._m(1),
      _vm._m(2),
      _vm._m(3),
      _vm._m(4),
      _vm._m(5),
      _vm._m(6),
      _vm._m(7),
      _vm._m(8),
      _c(
        "view",
        { staticClass: "padding-sm" },
        _vm._l(_vm.ColorList, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "cu-avatar round lg margin-xs",
              class: "bg-" + item.name
            },
            [
              _c("text", { staticClass: "avatar-text" }, [
                _vm._v(_vm._s(item.name))
              ])
            ]
          )
        })
      ),
      _vm._m(9),
      _c("view", { staticClass: "padding" }, [
        _c(
          "view",
          { staticClass: "cu-avatar-group" },
          _vm._l(_vm.avatar, function(item, index) {
            return _c("view", {
              key: index,
              staticClass: "cu-avatar round lg",
              style: [{ backgroundImage: "url(" + _vm.avatar[index] + ")" }]
            })
          })
        )
      ]),
      _vm._m(10),
      _c(
        "view",
        { staticClass: "padding" },
        _vm._l(_vm.avatar, function(item, index) {
          return _c(
            "view",
            {
              key: index,
              staticClass: "cu-avatar round lg margin-left",
              style: [{ backgroundImage: "url(" + _vm.avatar[index] + ")" }]
            },
            [
              _c("view", {
                staticClass: "cu-tag badge",
                class:
                  index % 2 == 0 ? "icon-female bg-pink" : "icon-male bg-blue"
              })
            ]
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("头像形状")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "padding" }, [
      _c("view", {
        staticClass: "cu-avatar round",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"
        }
      }),
      _c("view", {
        staticClass: "cu-avatar radius margin-left",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "cu-bar bg-white margin-top" }, [
      _c("view", { staticClass: "action" }, [
        _c("text", { staticClass: "icon-title text-blue" }),
        _vm._v("头像尺寸")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "padding" }, [
      _c("view", {
        staticClass: "cu-avatar sm round margin-left",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"
        }
      }),
      _c("view", {
        staticClass: "cu-avatar round margin-left",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg)"
        }
      }),
      _c("view", {
        staticClass: "cu-avatar lg round margin-left",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg)"
        }
      }),
      _c("view", {
        staticClass: "cu-avatar xl round margin-left",
        staticStyle: {
          "background-image":
            "url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg)"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "padding" }, [
      _c("view", { staticClass: "cu-avatar sm round margin-left bg-red" }, [
        _vm._v("A")
      ]),
      _c("view", { staticClass: "cu-avatar round margin-left bg-red" }, [
        _vm._v("B")
      ]),
      _c("view", { staticClass: "cu-avatar lg round margin-left bg-red" }, [
        _vm._v("C")
      ]),
      _c("view", { staticClass: "cu-avatar xl round margin-left bg-red" }, [
        _vm._v("D")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "padding" }, [
      _c("view", { staticClass: "cu-avatar sm round margin-left bg-red" }, [
        _vm._v("蔚")
      ]),
      _c("view", { staticClass: "cu-avatar round margin-left bg-red" }, [
        _vm._v("蓝")
      ]),
      _c("view", { staticClass: "cu-avatar lg round margin-left bg-red" }, [
        _c("text", [_vm._v("wl")])
      ]),
      _c("view", { staticClass: "cu-avatar xl round margin-left bg-red" }, [
        _c("text", { staticClass: "avatar-text" }, [_vm._v("网络")])
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
        _vm._v("内嵌文字(图标)")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "padding" }, [
      _c("view", { staticClass: "cu-avatar radius" }, [
        _c("text", { staticClass: "icon-people" })
      ]),
      _c("view", { staticClass: "cu-avatar radius margin-left" }, [
        _c("text", [_vm._v("港")])
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
        _vm._v("头像颜色")
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
        _vm._v("头像组")
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
        _vm._v("头像标签")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "F:\\My\\BusinessApp\\main.js?{\"page\":\"pages%2Fbasics%2Favatar\"}":
/*!********************************************************************!*\
  !*** F:/My/BusinessApp/main.js?{"page":"pages%2Fbasics%2Favatar"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "F:\\My\\BusinessApp\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./pages/basics/avatar.vue */ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_avatar.default));

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue":
/*!*************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/avatar.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.vue?vue&type=template&id=1720c604& */ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=template&id=1720c604&");
/* harmony import */ var _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar.vue?vue&type=script&lang=js& */ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/My/BusinessApp/pages/basics/avatar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/avatar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HbuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=template&id=1720c604&":
/*!********************************************************************************!*\
  !*** F:/My/BusinessApp/pages/basics/avatar.vue?vue&type=template&id=1720c604& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./avatar.vue?vue&type=template&id=1720c604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\My\\BusinessApp\\pages\\basics\\avatar.vue?vue&type=template&id=1720c604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HbuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HbuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_avatar_vue_vue_type_template_id_1720c604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["F:\\My\\BusinessApp\\main.js?{\"page\":\"pages%2Fbasics%2Favatar\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/basics/avatar.js.map