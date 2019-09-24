(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~group-foo~group-indexHome~group-nothing"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "./node_modules/vant/es/action-sheet/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/action-sheet/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popup */ "./node_modules/vant/es/popup/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");








 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('action-sheet'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function ActionSheet(h, props, slots, ctx) {
  var title = props.title,
      cancelText = props.cancelText;

  function onCancel() {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'input', false);
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'cancel');
  }

  function Header() {
    if (title) {
      return h("div", {
        "class": [bem('header'), _utils_constant__WEBPACK_IMPORTED_MODULE_4__["BORDER_BOTTOM"]]
      }, [title, h(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "attrs": {
          "name": "close"
        },
        "class": bem('close'),
        "on": {
          "click": onCancel
        }
      })]);
    }
  }

  function Content() {
    if (slots.default) {
      return h("div", {
        "class": bem('content')
      }, [slots.default()]);
    }
  }

  function Option(item, index) {
    var disabled = item.disabled || item.loading;

    function onClickOption(event) {
      event.stopPropagation();

      if (item.disabled || item.loading) {
        return;
      }

      if (item.callback) {
        item.callback(item);
      }

      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'select', item, index);

      if (props.closeOnClickAction) {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'input', false);
      }
    }

    function OptionContent() {
      if (item.loading) {
        return h(_loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "attrs": {
            "size": "20px"
          }
        });
      }

      return [h("span", {
        "class": bem('name')
      }, [item.name]), item.subname && h("span", {
        "class": bem('subname')
      }, [item.subname])];
    }

    return h("div", {
      "class": [bem('item', {
        disabled: disabled
      }), item.className, _utils_constant__WEBPACK_IMPORTED_MODULE_4__["BORDER_TOP"]],
      "style": {
        color: item.color
      },
      "on": {
        "click": onClickOption
      }
    }, [OptionContent()]);
  }

  function CancelText() {
    if (cancelText) {
      return h("div", {
        "class": bem('cancel'),
        "on": {
          "click": onCancel
        }
      }, [cancelText]);
    }
  }

  return h(_popup__WEBPACK_IMPORTED_MODULE_7__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "class": bem(),
    "attrs": {
      "position": "bottom",
      "round": props.round,
      "value": props.value,
      "overlay": props.overlay,
      "duration": props.duration,
      "lazyRender": props.lazyRender,
      "lockScroll": props.lockScroll,
      "getContainer": props.getContainer,
      "closeOnClickOverlay": props.closeOnClickOverlay,
      "safeAreaInsetBottom": props.safeAreaInsetBottom
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx, true)]), [Header(), props.actions && props.actions.map(Option), Content(), CancelText()]);
}

ActionSheet.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _mixins_popup__WEBPACK_IMPORTED_MODULE_5__["PopupMixin"].props, {
  title: String,
  round: Boolean,
  actions: Array,
  duration: Number,
  cancelText: String,
  getContainer: [String, Function],
  closeOnClickAction: Boolean,
  safeAreaInsetBottom: Boolean,
  overlay: {
    type: Boolean,
    default: true
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  }
});
/* harmony default export */ __webpack_exports__["default"] = (createComponent(ActionSheet));

/***/ }),

/***/ "./node_modules/vant/es/address-edit/Detail.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/address-edit/Detail.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_validate_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate/system */ "./node_modules/vant/es/utils/validate/system.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field */ "./node_modules/vant/es/field/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('address-edit-detail'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var android = Object(_utils_validate_system__WEBPACK_IMPORTED_MODULE_2__["isAndroid"])();
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    value: String,
    error: Boolean,
    focused: Boolean,
    detailRows: Number,
    searchResult: Array,
    detailMaxlength: Number,
    showSearchResult: Boolean
  },
  methods: {
    onSelect: function onSelect(express) {
      this.$emit('select-search', express);
      this.$emit('input', ((express.address || '') + " " + (express.name || '')).trim());
    },
    onFinish: function onFinish() {
      this.$refs.field.blur();
    },
    renderFinish: function renderFinish() {
      var h = this.$createElement;
      var show = this.value && this.focused && android;

      if (show) {
        return h("div", {
          "class": bem('finish'),
          "on": {
            "click": this.onFinish
          }
        }, [t('complete')]);
      }
    },
    renderSearchResult: function renderSearchResult() {
      var _this = this;

      var h = this.$createElement;
      var searchResult = this.searchResult;
      var show = this.focused && searchResult && this.showSearchResult;

      if (show) {
        return searchResult.map(function (express) {
          return h(_cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
            "key": express.name + express.address,
            "attrs": {
              "title": express.name,
              "label": express.address,
              "icon": "location-o",
              "clickable": true
            },
            "on": {
              "click": function click() {
                _this.onSelect(express);
              }
            }
          });
        });
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "class": bem()
    }, [h(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "autosize": true,
        "rows": this.detailRows,
        "clearable": !android,
        "type": "textarea",
        "value": this.value,
        "error": this.error,
        "label": t('label'),
        "maxlength": this.detailMaxlength,
        "placeholder": t('placeholder')
      },
      "ref": "field",
      "scopedSlots": {
        icon: this.renderFinish
      },
      "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$listeners)
    }), this.renderSearchResult()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/address-edit/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/address-edit/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_validate_mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate/mobile */ "./node_modules/vant/es/utils/validate/mobile.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../area */ "./node_modules/vant/es/area/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../field */ "./node_modules/vant/es/field/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popup */ "./node_modules/vant/es/popup/index.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast */ "./node_modules/vant/es/toast/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog */ "./node_modules/vant/es/dialog/index.js");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Detail */ "./node_modules/vant/es/address-edit/Detail.js");
/* harmony import */ var _switch_cell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../switch-cell */ "./node_modules/vant/es/switch-cell/index.js");












var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('address-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultData = {
  name: '',
  tel: '',
  country: '',
  province: '',
  city: '',
  county: '',
  areaCode: '',
  postalCode: '',
  addressDetail: '',
  isDefault: false
};

function isPostal(value) {
  return /^\d{6}$/.test(value);
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    areaList: Object,
    isSaving: Boolean,
    isDeleting: Boolean,
    validator: Function,
    showDelete: Boolean,
    showPostal: Boolean,
    searchResult: Array,
    showSetDefault: Boolean,
    showSearchResult: Boolean,
    saveButtonText: String,
    deleteButtonText: String,
    showArea: {
      type: Boolean,
      default: true
    },
    showDetail: {
      type: Boolean,
      default: true
    },
    detailRows: {
      type: Number,
      default: 1
    },
    detailMaxlength: {
      type: Number,
      default: 200
    },
    addressInfo: {
      type: Object,
      default: function _default() {
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultData);
      }
    },
    telValidator: {
      type: Function,
      default: _utils_validate_mobile__WEBPACK_IMPORTED_MODULE_2__["isMobile"]
    },
    postalValidator: {
      type: Function,
      default: isPostal
    }
  },
  data: function data() {
    return {
      data: {},
      showAreaPopup: false,
      detailFocused: false,
      errorInfo: {
        tel: false,
        name: false,
        postalCode: false,
        addressDetail: false
      }
    };
  },
  computed: {
    areaListLoaded: function areaListLoaded() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObj"])(this.areaList) && Object.keys(this.areaList).length;
    },
    areaText: function areaText() {
      var _this$data = this.data,
          country = _this$data.country,
          province = _this$data.province,
          city = _this$data.city,
          county = _this$data.county,
          areaCode = _this$data.areaCode;

      if (areaCode) {
        var arr = [country, province, city, county];

        if (province && province === city) {
          arr.splice(1, 1);
        }

        return arr.filter(function (text) {
          return text;
        }).join('/');
      }

      return '';
    }
  },
  watch: {
    addressInfo: {
      handler: function handler(val) {
        this.data = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultData, {}, val);
        this.setAreaCode(val.areaCode);
      },
      deep: true,
      immediate: true
    },
    areaList: function areaList() {
      this.setAreaCode(this.data.areaCode);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
      this.detailFocused = key === 'addressDetail';
      this.$emit('focus', key);
    },
    onChangeDetail: function onChangeDetail(val) {
      this.data.addressDetail = val;
      this.$emit('change-detail', val);
    },
    onAreaConfirm: function onAreaConfirm(values) {
      this.showAreaPopup = false;
      this.assignAreaValues();
      this.$emit('change-area', values);
    },
    assignAreaValues: function assignAreaValues() {
      var area = this.$refs.area;

      if (area) {
        var detail = area.getArea();
        detail.areaCode = detail.code;
        delete detail.code;

        Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(this.data, detail);
      }
    },
    onSave: function onSave() {
      var _this = this;

      var items = ['name', 'tel', 'areaCode', 'addressDetail'];

      if (this.showPostal) {
        items.push('postalCode');
      }

      var isValid = items.every(function (item) {
        var msg = _this.getErrorMessage(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Object(_toast__WEBPACK_IMPORTED_MODULE_6__["default"])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    getErrorMessage: function getErrorMessage(key) {
      var value = String(this.data[key] || '').trim();

      if (this.validator) {
        var message = this.validator(key, value);

        if (message) {
          return message;
        }
      }

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');

        case 'areaCode':
          return value ? '' : t('areaEmpty');

        case 'addressDetail':
          return value ? '' : t('addressEmpty');

        case 'postalCode':
          return value && !this.postalValidator(value) ? t('postalEmpty') : '';
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog__WEBPACK_IMPORTED_MODULE_8__["default"].confirm({
        title: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      }).catch(function () {
        _this2.$emit('cancel-delete', _this2.data);
      });
    },
    // get values of area component
    getArea: function getArea() {
      return this.$refs.area ? this.$refs.area.getValues() : [];
    },
    // set area code to area component
    setAreaCode: function setAreaCode(code) {
      this.data.areaCode = code || '';

      if (code) {
        this.$nextTick(this.assignAreaValues);
      }
    },
    setAddressDetail: function setAddressDetail(value) {
      this.data.addressDetail = value;
    },
    onDetailBlur: function onDetailBlur() {
      var _this3 = this;

      // await for click search event
      setTimeout(function () {
        _this3.detailFocused = false;
      });
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo,
        searchResult = this.searchResult;

    var onFocus = function onFocus(name) {
      return function () {
        return _this4.onFocus(name);
      };
    }; // hide bottom field when use search && detail get focused


    var hideBottomFields = searchResult && searchResult.length && this.detailFocused;
    return h("div", {
      "class": bem()
    }, [h(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "clearable": true,
        "label": t('name'),
        "placeholder": t('namePlaceholder'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telPlaceholder'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "directives": [{
        name: "show",
        value: this.showArea
      }],
      "attrs": {
        "readonly": true,
        "label": t('area'),
        "placeholder": t('areaPlaceholder'),
        "value": this.areaText
      },
      "on": {
        "click": function click() {
          _this4.showAreaPopup = true;
        }
      }
    }), h(_Detail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "directives": [{
        name: "show",
        value: this.showDetail
      }],
      "attrs": {
        "focused": this.detailFocused,
        "value": data.addressDetail,
        "error": errorInfo.addressDetail,
        "detailRows": this.detailRows,
        "detailMaxlength": this.detailMaxlength,
        "searchResult": this.searchResult,
        "showSearchResult": this.showSearchResult
      },
      "on": {
        "focus": onFocus('addressDetail'),
        "blur": this.onDetailBlur,
        "input": this.onChangeDetail,
        "select-search": function selectSearch(event) {
          _this4.$emit('select-search', event);
        }
      }
    }), this.showPostal && h(_field__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "type": "tel",
        "maxlength": "6",
        "label": t('postal'),
        "placeholder": t('postal'),
        "error": errorInfo.postalCode
      },
      "on": {
        "focus": onFocus('postalCode')
      },
      "model": {
        value: data.postalCode,
        callback: function callback($$v) {
          data.postalCode = $$v;
        }
      }
    }), this.slots(), this.showSetDefault && h(_switch_cell__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "attrs": {
        "title": t('defaultAddress')
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('change-default', event);
        }
      },
      "model": {
        value: data.isDefault,
        callback: function callback($$v) {
          data.isDefault = $$v;
        }
      }
    }), h("div", {
      "directives": [{
        name: "show",
        value: !hideBottomFields
      }],
      "class": bem('buttons')
    }, [h(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "attrs": {
        "block": true,
        "loading": this.isSaving,
        "type": "danger",
        "text": this.saveButtonText || t('save')
      },
      "on": {
        "click": this.onSave
      }
    }), this.showDelete && h(_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "attrs": {
        "block": true,
        "loading": this.isDeleting,
        "text": this.deleteButtonText || t('delete')
      },
      "on": {
        "click": this.onDelete
      }
    })]), h(_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "attrs": {
        "position": "bottom",
        "lazyRender": false,
        "getContainer": "body"
      },
      "model": {
        value: _this4.showAreaPopup,
        callback: function callback($$v) {
          _this4.showAreaPopup = $$v;
        }
      }
    }, [h(_area__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "ref": "area",
      "attrs": {
        "loading": !this.areaListLoaded,
        "value": data.areaCode,
        "areaList": this.areaList
      },
      "on": {
        "confirm": this.onAreaConfirm,
        "cancel": function cancel() {
          _this4.showAreaPopup = false;
        }
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/address-list/Item.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/address-list/Item.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../radio */ "./node_modules/vant/es/radio/index.js");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('address-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'select');
    }

    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'click');
  }

  var renderRightIcon = function renderRightIcon() {
    return h(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "name": "edit"
      },
      "class": bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'edit');
          Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'click');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": bem('address')
    }, [data.address])];
    return switchable && !disabled ? h(_radio__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "attrs": {
        "name": data.id,
        "iconSize": 16,
        "checkedColor": _utils_constant__WEBPACK_IMPORTED_MODULE_2__["RED"]
      }
    }, [Info]) : Info;
  };

  return h(_cell__WEBPACK_IMPORTED_MODULE_5__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      disabled: disabled
    }),
    "attrs": {
      "valueClass": bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onClick
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(AddressItem));

/***/ }),

/***/ "./node_modules/vant/es/address-list/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/address-list/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../radio-group */ "./node_modules/vant/es/radio-group/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Item */ "./node_modules/vant/es/address-list/Item.js");





 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('address-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(_Item__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable
        },
        "key": item.id,
        "on": {
          "select": function select() {
            Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem()
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [slots.top && slots.top(), h(_radio_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "attrs": {
      "value": props.value
    },
    "on": {
      "input": function input(event) {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'input', event);
      }
    }
  }, [List]), props.disabledText && h("div", {
    "class": bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default && slots.default(), h(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || t('add')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(AddressList));

/***/ }),

/***/ "./node_modules/vant/es/area/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/area/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../picker */ "./node_modules/vant/es/picker/index.js");
/* harmony import */ var _picker_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../picker/shared */ "./node_modules/vant/es/picker/shared.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('area'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isOverseaCode(code) {
  return code[0] === '9';
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _picker_shared__WEBPACK_IMPORTED_MODULE_3__["pickerProps"], {
    value: String,
    areaList: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    columnsNum: {
      type: [Number, String],
      default: 3
    },
    isOverseaCode: {
      type: Function,
      default: isOverseaCode
    }
  }),
  data: function data() {
    return {
      code: this.value,
      columns: [{
        values: []
      }, {
        values: []
      }, {
        values: []
      }]
    };
  },
  computed: {
    province: function province() {
      return this.areaList.province_list || {};
    },
    city: function city() {
      return this.areaList.city_list || {};
    },
    county: function county() {
      return this.areaList.county_list || {};
    },
    displayColumns: function displayColumns() {
      return this.columns.slice(0, +this.columnsNum);
    }
  },
  watch: {
    value: function value() {
      this.code = this.value;
      this.setValues();
    },
    areaList: {
      deep: true,
      handler: 'setValues'
    },
    columnsNum: function columnsNum() {
      var _this = this;

      this.$nextTick(function () {
        _this.setValues();
      });
    }
  },
  mounted: function mounted() {
    this.setValues();
  },
  methods: {
    // get list by code
    getList: function getList(type, code) {
      var result = [];

      if (type !== 'province' && !code) {
        return result;
      }

      var list = this[type];
      result = Object.keys(list).map(function (listCode) {
        return {
          code: listCode,
          name: list[listCode]
        };
      });

      if (code) {
        // oversea code
        if (this.isOverseaCode(code) && type === 'city') {
          code = '9';
        }

        result = result.filter(function (item) {
          return item.code.indexOf(code) === 0;
        });
      }

      return result;
    },
    // get index by code
    getIndex: function getIndex(type, code) {
      var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
      var list = this.getList(type, code.slice(0, compareNum - 2)); // oversea code

      if (this.isOverseaCode(code) && type === 'province') {
        compareNum = 1;
      }

      code = code.slice(0, compareNum);

      for (var i = 0; i < list.length; i++) {
        if (list[i].code.slice(0, compareNum) === code) {
          return i;
        }
      }

      return 0;
    },
    onChange: function onChange(picker, values, index) {
      this.code = values[index].code;
      this.setValues();
      this.$emit('change', picker, picker.getValues(), index);
    },
    setValues: function setValues() {
      var code = this.code || Object.keys(this.county)[0] || '';
      var picker = this.$refs.picker;
      var province = this.getList('province');
      var city = this.getList('city', code.slice(0, 2));

      if (!picker) {
        return;
      }

      picker.setColumnValues(0, province);
      picker.setColumnValues(1, city);

      if (city.length && code.slice(2, 4) === '00' && !this.isOverseaCode(code)) {
        code = city[0].code;
      }

      picker.setColumnValues(2, this.getList('county', code.slice(0, 4)));
      picker.setIndexes([this.getIndex('province', code), this.getIndex('city', code), this.getIndex('county', code)]);
    },
    getValues: function getValues() {
      return this.$refs.picker ? this.$refs.picker.getValues().filter(function (value) {
        return !!value;
      }) : [];
    },
    getArea: function getArea() {
      var values = this.getValues();
      var area = {
        code: '',
        country: '',
        province: '',
        city: '',
        county: ''
      };

      if (!values.length) {
        return area;
      }

      var names = values.map(function (item) {
        return item.name;
      });
      area.code = values[values.length - 1].code;

      if (this.isOverseaCode(area.code)) {
        area.country = names[1] || '';
        area.province = names[2] || '';
      } else {
        area.province = names[0] || '';
        area.city = names[1] || '';
        area.county = names[2] || '';
      }

      return area;
    },
    reset: function reset(code) {
      this.code = code || '';
      this.setValues();
    }
  },
  render: function render() {
    var h = arguments[0];

    var on = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$listeners, {
      change: this.onChange
    });

    return h(_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "ref": "picker",
      "class": bem(),
      "attrs": {
        "showToolbar": true,
        "valueKey": "name",
        "title": this.title,
        "loading": this.loading,
        "columns": this.displayColumns,
        "itemHeight": this.itemHeight,
        "visibleItemCount": this.visibleItemCount,
        "cancelButtonText": this.cancelButtonText,
        "confirmButtonText": this.confirmButtonText
      },
      "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, on)
    });
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/button/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/button/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");







 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      color = props.color,
      plain = props.plain,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;
  var style = {};

  if (color) {
    style.color = plain ? color : _utils_constant__WEBPACK_IMPORTED_MODULE_4__["WHITE"];

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  function onClick(event) {
    if (!loading && !disabled) {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_5__["functionalRoute"])(ctx);
    }
  }

  function onTouchstart(event) {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'touchstart', event);
  }

  var classes = [bem([type, props.size, {
    plain: plain,
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_4__["BORDER_SURROUND"]] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "class": bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : ''
        }
      }));
    } else if (icon) {
      content.push(h(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "attrs": {
          "name": icon
        },
        "class": bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "style": style,
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx)]), [Content()]);
}

Button.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_5__["routeProps"], {
  text: String,
  icon: String,
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Button));

/***/ }),

/***/ "./node_modules/vant/es/card/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/card/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag */ "./node_modules/vant/es/tag/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./node_modules/vant/es/image/index.js");




 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(props.num);
  var showPrice = slots.price || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(props.price);
  var showOriginPrice = slots['origin-price'] || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": bem('tag')
      }, [slots.tag ? slots.tag() : h(_tag__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": bem('title')
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": bem('price')
      }, [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": bem('num')
      }, [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem()
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [h("div", {
    "class": bem('header')
  }, [Thumb(), h("div", {
    "class": bem('content', {
      centered: props.centered
    })
  }, [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Card));

/***/ }),

/***/ "./node_modules/vant/es/cell-group/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/cell-group/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('cell-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref;

  var Group = h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem(), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_TOP_BOTTOM"]] = props.border, _ref)]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [slots.default && slots.default()]);

  if (props.title || slots.title) {
    return h("div", [h("div", {
      "class": bem('title')
    }, [slots.title ? slots.title() : props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(CellGroup));

/***/ }),

/***/ "./node_modules/vant/es/cell/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/cell/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./node_modules/vant/es/cell/shared.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDef"])(title);
  var showValue = slots.default || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDef"])(value);
  var showLabel = slots.label || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDef"])(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(_icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  function onClick(event) {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["emit"])(ctx, 'click', event);
    Object(_utils_router__WEBPACK_IMPORTED_MODULE_5__["functionalRoute"])(ctx);
  }

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "class": bem(classes),
    "on": {
      "click": onClick
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["inherit"])(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _shared__WEBPACK_IMPORTED_MODULE_3__["cellProps"], {}, _utils_router__WEBPACK_IMPORTED_MODULE_5__["routeProps"]);
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Cell));

/***/ }),

/***/ "./node_modules/vant/es/cell/shared.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/cell/shared.js ***!
  \*********************************************/
/*! exports provided: cellProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellProps", function() { return cellProps; });
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};

/***/ }),

/***/ "./node_modules/vant/es/checkbox-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/checkbox-group/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('checkbox-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/checkbox/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/checkbox/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/checkbox */ "./node_modules/vant/es/mixins/checkbox.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('checkbox'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_checkbox__WEBPACK_IMPORTED_MODULE_1__["CheckboxMixin"])({
    bem: bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/circle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/circle/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/raf */ "./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('circle'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var PERIMETER = 3140;
var uid = 0;

function format(rate) {
  return Math.min(Math.max(rate, 0), 100);
}

function getPath(clockwise, viewBoxSize) {
  var sweepFlag = clockwise ? 1 : 0;
  return "M " + viewBoxSize / 2 + " " + viewBoxSize / 2 + " m 0, -500 a 500, 500 0 1, " + sweepFlag + " 0, 1000 a 500, 500 0 1, " + sweepFlag + " 0, -1000";
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    text: String,
    value: {
      type: Number,
      default: 0
    },
    speed: {
      type: Number,
      default: 0
    },
    size: {
      type: [String, Number],
      default: 100
    },
    fill: {
      type: String,
      default: 'none'
    },
    rate: {
      type: Number,
      default: 100
    },
    layerColor: {
      type: String,
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["WHITE"]
    },
    color: {
      type: [String, Object],
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["BLUE"]
    },
    strokeWidth: {
      type: Number,
      default: 40
    },
    clockwise: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    this.uid = "van-circle-gradient-" + uid++;
  },
  computed: {
    style: function style() {
      var size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(this.size);
      return {
        width: size,
        height: size
      };
    },
    path: function path() {
      return getPath(this.clockwise, this.viewBoxSize);
    },
    viewBoxSize: function viewBoxSize() {
      return 1000 + this.strokeWidth;
    },
    layerStyle: function layerStyle() {
      var offset = PERIMETER * this.value / 100;
      return {
        stroke: "" + this.color,
        strokeWidth: this.strokeWidth + 1 + "px",
        strokeDasharray: offset + "px " + PERIMETER + "px"
      };
    },
    hoverStyle: function hoverStyle() {
      return {
        fill: "" + this.fill,
        stroke: "" + this.layerColor,
        strokeWidth: this.strokeWidth + "px"
      };
    },
    gradient: function gradient() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isObj"])(this.color);
    },
    LinearGradient: function LinearGradient() {
      var _this = this;

      var h = this.$createElement;

      if (!this.gradient) {
        return;
      }

      var Stops = Object.keys(this.color).sort(function (a, b) {
        return parseFloat(a) - parseFloat(b);
      }).map(function (key, index) {
        return h("stop", {
          "key": index,
          "attrs": {
            "offset": key,
            "stop-color": _this.color[key]
          }
        });
      });
      return h("defs", [h("linearGradient", {
        "attrs": {
          "id": this.uid,
          "x1": "100%",
          "y1": "0%",
          "x2": "0%",
          "y2": "0%"
        }
      }, [Stops])]);
    }
  },
  watch: {
    rate: {
      handler: function handler() {
        this.startTime = Date.now();
        this.startRate = this.value;
        this.endRate = format(this.rate);
        this.increase = this.endRate > this.startRate;
        this.duration = Math.abs((this.startRate - this.endRate) * 1000 / this.speed);

        if (this.speed) {
          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["cancelRaf"])(this.rafId);
          this.rafId = Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["raf"])(this.animate);
        } else {
          this.$emit('input', this.endRate);
        }
      },
      immediate: true
    }
  },
  methods: {
    animate: function animate() {
      var now = Date.now();
      var progress = Math.min((now - this.startTime) / this.duration, 1);
      var rate = progress * (this.endRate - this.startRate) + this.startRate;
      this.$emit('input', format(parseFloat(rate.toFixed(1))));

      if (this.increase ? rate < this.endRate : rate > this.endRate) {
        this.rafId = Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["raf"])(this.animate);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "style": this.style
    }, [h("svg", {
      "attrs": {
        "viewBox": "0 0 " + this.viewBoxSize + " " + this.viewBoxSize
      }
    }, [this.LinearGradient, h("path", {
      "class": bem('hover'),
      "style": this.hoverStyle,
      "attrs": {
        "d": this.path
      }
    }), h("path", {
      "attrs": {
        "d": this.path,
        "stroke": this.gradient ? "url(#" + this.uid + ")" : this.color
      },
      "class": bem('layer'),
      "style": this.layerStyle
    })]), this.slots() || this.text && h("div", {
      "class": bem('text')
    }, [this.text])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/col/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vant/es/col/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('col'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    gutter: function gutter() {
      return this.$parent && Number(this.$parent.gutter) || 0;
    },
    style: function style() {
      var padding = this.gutter / 2 + "px";
      return this.gutter ? {
        paddingLeft: padding,
        paddingRight: padding
      } : {};
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var span = this.span,
        offset = this.offset;
    return h(this.tag, {
      "style": this.style,
      "class": bem((_bem = {}, _bem[span] = span, _bem["offset-" + offset] = offset, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/collapse-item/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/collapse-item/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/raf */ "./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _cell_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cell/shared */ "./node_modules/vant/es/cell/shared.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");








var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('collapse-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_6__["ChildrenMixin"])('vanCollapse')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _cell_shared__WEBPACK_IMPORTED_MODULE_5__["cellProps"], {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var _this$parent = this.parent,
          value = _this$parent.value,
          accordion = _this$parent.accordion;

      if ( true && !accordion && !Array.isArray(value)) {
        console.error('[Vant] Collapse: type of prop "value" should be Array');
        return;
      }

      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : _utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__["raf"];
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_3__["doubleRaf"])(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },
  render: function render() {
    var _this3 = this,
        _ref;

    var h = arguments[0];
    var disabled = this.disabled,
        expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded)
      },
      "class": bem('title', {
        disabled: disabled,
        expanded: expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_TOP"]] = this.index, _ref)]
    }, [Title, Content]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/collapse/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/collapse/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('collapse'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [bem(), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_TOP_BOTTOM"]] = this.border, _ref)]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/contact-card/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/contact-card/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('contact-card'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactCard(h, props, slots, ctx) {
  var type = props.type,
      editable = props.editable;

  function onClick(event) {
    if (editable) {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'click', event);
    }
  }

  return h(_cell__WEBPACK_IMPORTED_MODULE_3__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "attrs": {
      "center": true,
      "border": false,
      "isLink": editable,
      "valueClass": bem('value'),
      "icon": type === 'edit' ? 'contact' : 'add-square'
    },
    "class": bem([type]),
    "on": {
      "click": onClick
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [type === 'add' ? props.addText || t('addText') : [h("div", [t('name') + "\uFF1A" + props.name]), h("div", [t('tel') + "\uFF1A" + props.tel])]]);
}

ContactCard.props = {
  tel: String,
  name: String,
  addText: String,
  editable: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'add'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(ContactCard));

/***/ }),

/***/ "./node_modules/vant/es/contact-edit/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/contact-edit/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./node_modules/vant/es/field/index.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast */ "./node_modules/vant/es/toast/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog */ "./node_modules/vant/es/dialog/index.js");
/* harmony import */ var _utils_validate_mobile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/validate/mobile */ "./node_modules/vant/es/utils/validate/mobile.js");








var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('contact-edit'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var defaultContact = {
  tel: '',
  name: ''
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    isEdit: Boolean,
    isSaving: Boolean,
    isDeleting: Boolean,
    contactInfo: {
      type: Object,
      default: function _default() {
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultContact);
      }
    },
    telValidator: {
      type: Function,
      default: _utils_validate_mobile__WEBPACK_IMPORTED_MODULE_6__["isMobile"]
    }
  },
  data: function data() {
    return {
      data: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultContact, {}, this.contactInfo),
      errorInfo: {
        name: false,
        tel: false
      }
    };
  },
  watch: {
    contactInfo: function contactInfo(val) {
      this.data = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultContact, {}, val);
    }
  },
  methods: {
    onFocus: function onFocus(key) {
      this.errorInfo[key] = false;
    },
    getErrorMessageByKey: function getErrorMessageByKey(key) {
      var value = this.data[key].trim();

      switch (key) {
        case 'name':
          return value ? '' : t('nameEmpty');

        case 'tel':
          return this.telValidator(value) ? '' : t('telInvalid');
      }
    },
    onSave: function onSave() {
      var _this = this;

      var isValid = ['name', 'tel'].every(function (item) {
        var msg = _this.getErrorMessageByKey(item);

        if (msg) {
          _this.errorInfo[item] = true;
          Object(_toast__WEBPACK_IMPORTED_MODULE_4__["default"])(msg);
        }

        return !msg;
      });

      if (isValid && !this.isSaving) {
        this.$emit('save', this.data);
      }
    },
    onDelete: function onDelete() {
      var _this2 = this;

      _dialog__WEBPACK_IMPORTED_MODULE_5__["default"].confirm({
        message: t('confirmDelete')
      }).then(function () {
        _this2.$emit('delete', _this2.data);
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var data = this.data,
        errorInfo = this.errorInfo;

    var onFocus = function onFocus(name) {
      return function () {
        return _this3.onFocus(name);
      };
    };

    return h("div", {
      "class": bem()
    }, [h(_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "clearable": true,
        "maxlength": "30",
        "label": t('name'),
        "placeholder": t('nameEmpty'),
        "error": errorInfo.name
      },
      "on": {
        "focus": onFocus('name')
      },
      "model": {
        value: data.name,
        callback: function callback($$v) {
          data.name = $$v;
        }
      }
    }), h(_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "clearable": true,
        "type": "tel",
        "label": t('tel'),
        "placeholder": t('telEmpty'),
        "error": errorInfo.tel
      },
      "on": {
        "focus": onFocus('tel')
      },
      "model": {
        value: data.tel,
        callback: function callback($$v) {
          data.tel = $$v;
        }
      }
    }), h("div", {
      "class": bem('buttons')
    }, [h(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "block": true,
        "type": "danger",
        "text": t('save'),
        "loading": this.isSaving
      },
      "on": {
        "click": this.onSave
      }
    }), this.isEdit && h(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "block": true,
        "text": t('delete'),
        "loading": this.isDeleting
      },
      "on": {
        "click": this.onDelete
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/contact-list/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/contact-list/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radio */ "./node_modules/vant/es/radio/index.js");
/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../radio-group */ "./node_modules/vant/es/radio-group/index.js");








 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('contact-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function ContactList(h, props, slots, ctx) {
  var List = props.list && props.list.map(function (item, index) {
    function onClick() {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'input', item.id);
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'select', item, index);
    }

    function Content() {
      return h(_radio__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "attrs": {
          "name": item.id,
          "iconSize": 16,
          "checkedColor": _utils_constant__WEBPACK_IMPORTED_MODULE_2__["RED"]
        },
        "on": {
          "click": onClick
        }
      }, [h("div", {
        "class": bem('name')
      }, [item.name + "\uFF0C" + item.tel])]);
    }

    function RightIcon() {
      return h(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "attrs": {
          "name": "edit"
        },
        "class": bem('edit'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();
            Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'edit', item, index);
          }
        }
      });
    }

    return h(_cell__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "key": item.id,
      "attrs": {
        "isLink": true,
        "valueClass": bem('item-value')
      },
      "class": bem('item'),
      "scopedSlots": {
        default: Content,
        'right-icon': RightIcon
      },
      "on": {
        "click": onClick
      }
    });
  });
  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem()
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx)]), [h(_radio_group__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "attrs": {
      "value": props.value
    },
    "class": bem('group')
  }, [List]), h(_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addText || t('addText')
    },
    "class": bem('add'),
    "on": {
      "click": function click() {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'add');
      }
    }
  })]);
}

ContactList.props = {
  value: null,
  list: Array,
  addText: String
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(ContactList));

/***/ }),

/***/ "./node_modules/vant/es/count-down/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/count-down/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/raf */ "./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/vant/es/count-down/utils.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('count-down'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    millisecond: Boolean,
    time: {
      type: Number,
      default: 0
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      remain: 0
    };
  },
  computed: {
    timeData: function timeData() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseTimeData"])(this.remain);
    },
    formattedTime: function formattedTime() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["parseFormat"])(this.format, this.timeData);
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  methods: {
    start: function start() {
      if (this.counting) {
        return;
      }

      this.counting = true;
      this.endTime = Date.now() + this.remain;
      this.tick();
    },
    pause: function pause() {
      this.counting = false;
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["cancelRaf"])(this.rafId);
    },
    reset: function reset() {
      this.pause();
      this.remain = this.time;

      if (this.autoStart) {
        this.start();
      }
    },
    tick: function tick() {
      if (this.millisecond) {
        this.microTick();
      } else {
        this.macroTick();
      }
    },
    microTick: function microTick() {
      var _this = this;

      this.rafId = Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["raf"])(function () {
        _this.setRemain(_this.getRemain());

        if (_this.remain !== 0) {
          _this.microTick();
        }
      });
    },
    macroTick: function macroTick() {
      var _this2 = this;

      this.rafId = Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_1__["raf"])(function () {
        var remain = _this2.getRemain();

        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isSameSecond"])(remain, _this2.remain) || remain === 0) {
          _this2.setRemain(remain);
        }

        if (_this2.remain !== 0) {
          _this2.macroTick();
        }
      });
    },
    getRemain: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    },
    setRemain: function setRemain(remain) {
      this.remain = remain;

      if (remain === 0) {
        this.pause();
        this.$emit('finish');
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots('default', this.timeData) || this.formattedTime]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/count-down/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/count-down/utils.js ***!
  \**************************************************/
/*! exports provided: parseTimeData, parseFormat, isSameSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTimeData", function() { return parseTimeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseFormat", function() { return parseFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameSecond", function() { return isSameSecond; });
/* harmony import */ var _utils_format_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/format/string */ "./node_modules/vant/es/utils/format/string.js");

var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
  var days = Math.floor(time / DAY);
  var hours = Math.floor(time % DAY / HOUR);
  var minutes = Math.floor(time % HOUR / MINUTE);
  var seconds = Math.floor(time % MINUTE / SECOND);
  var milliseconds = Math.floor(time % SECOND);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: milliseconds
  };
}
function parseFormat(format, timeData) {
  var days = timeData.days;
  var hours = timeData.hours,
      minutes = timeData.minutes,
      seconds = timeData.seconds,
      milliseconds = timeData.milliseconds;

  if (format.indexOf('DD') === -1) {
    hours += days * 24;
  } else {
    format = format.replace('DD', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_0__["padZero"])(days));
  }

  if (format.indexOf('HH') === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace('HH', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_0__["padZero"])(hours));
  }

  if (format.indexOf('mm') === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace('mm', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_0__["padZero"])(minutes));
  }

  if (format.indexOf('ss') === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace('ss', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_0__["padZero"])(seconds));
  }

  return format.replace('SSS', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_0__["padZero"])(milliseconds, 3));
}
function isSameSecond(time1, time2) {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}

/***/ }),

/***/ "./node_modules/vant/es/coupon-cell/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/coupon-cell/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('coupon-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function formatValue(props) {
  var coupons = props.coupons,
      chosenCoupon = props.chosenCoupon,
      currency = props.currency;
  var coupon = coupons[chosenCoupon];

  if (coupon) {
    var value = coupon.denominations || coupon.value;
    return "-" + currency + (value / 100).toFixed(2);
  }

  return coupons.length === 0 ? t('tips') : t('count', coupons.length);
}

function CouponCell(h, props, slots, ctx) {
  var valueClass = props.coupons[props.chosenCoupon] ? 'van-coupon-cell--selected' : '';
  var value = formatValue(props);
  return h(_cell__WEBPACK_IMPORTED_MODULE_3__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem(),
    "attrs": {
      "value": value,
      "title": props.title || t('title'),
      "border": props.border,
      "isLink": props.editable,
      "valueClass": valueClass
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]));
}

CouponCell.model = {
  prop: 'chosenCoupon'
};
CouponCell.props = {
  title: String,
  coupons: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  currency: {
    type: String,
    default: '¥'
  },
  border: {
    type: Boolean,
    default: true
  },
  editable: {
    type: Boolean,
    default: true
  },
  chosenCoupon: {
    type: Number,
    default: -1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(CouponCell));

/***/ }),

/***/ "./node_modules/vant/es/coupon-list/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/coupon-list/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tab */ "./node_modules/vant/es/tab/index.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs */ "./node_modules/vant/es/tabs/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../field */ "./node_modules/vant/es/field/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../coupon */ "./node_modules/vant/es/coupon/index.js");







var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('coupon-list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png';
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  model: {
    prop: 'code'
  },
  props: {
    code: String,
    closeButtonText: String,
    inputPlaceholder: String,
    enabledTitle: String,
    disabledTitle: String,
    exchangeButtonText: String,
    exchangeButtonLoading: Boolean,
    exchangeButtonDisabled: Boolean,
    exchangeMinLength: {
      type: Number,
      default: 1
    },
    chosenCoupon: {
      type: Number,
      default: -1
    },
    coupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabledCoupons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    displayedCouponIndex: {
      type: Number,
      default: -1
    },
    showExchangeBar: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    currency: {
      type: String,
      default: '¥'
    },
    emptyImage: {
      type: String,
      default: EMPTY_IMAGE
    }
  },
  data: function data() {
    return {
      tab: 0,
      winHeight: window.innerHeight,
      currentCode: this.code || ''
    };
  },
  computed: {
    buttonDisabled: function buttonDisabled() {
      return !this.exchangeButtonLoading && (this.exchangeButtonDisabled || !this.currentCode || this.currentCode.length < this.exchangeMinLength);
    },
    listStyle: function listStyle() {
      return {
        height: this.winHeight - (this.showExchangeBar ? 140 : 94) + 'px'
      };
    }
  },
  watch: {
    code: function code(_code) {
      this.currentCode = _code;
    },
    currentCode: function currentCode(code) {
      this.$emit('input', code);
    },
    displayedCouponIndex: 'scrollToShowCoupon'
  },
  mounted: function mounted() {
    this.scrollToShowCoupon(this.displayedCouponIndex);
  },
  methods: {
    onClickExchangeButton: function onClickExchangeButton() {
      this.$emit('exchange', this.currentCode); // auto clear currentCode when not use vModel

      if (!this.code) {
        this.currentCode = '';
      }
    },
    // scroll to show specific coupon
    scrollToShowCoupon: function scrollToShowCoupon(index) {
      var _this = this;

      if (index === -1) {
        return;
      }

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            card = _this$$refs.card,
            list = _this$$refs.list;
        /* istanbul ignore next */

        if (list && card && card[index]) {
          list.scrollTop = card[index].$el.offsetTop - 100;
        }
      });
    },
    renderEmpty: function renderEmpty() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('empty')
      }, [h("img", {
        "attrs": {
          "src": this.emptyImage
        }
      }), h("p", [t('empty')])]);
    },
    renderExchangeButton: function renderExchangeButton() {
      var h = this.$createElement;
      return h(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "attrs": {
          "size": "small",
          "type": "danger",
          "text": this.exchangeButtonText || t('exchange'),
          "loading": this.exchangeButtonLoading,
          "disabled": this.buttonDisabled
        },
        "class": bem('exchange'),
        "on": {
          "click": this.onClickExchangeButton
        }
      });
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var coupons = this.coupons,
        disabledCoupons = this.disabledCoupons;
    var title = (this.enabledTitle || t('enable')) + " (" + coupons.length + ")";
    var disabledTitle = (this.disabledTitle || t('disabled')) + " (" + disabledCoupons.length + ")";
    var ExchangeBar = this.showExchangeBar && h(_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "clearable": true,
        "border": false,
        "placeholder": this.inputPlaceholder || t('placeholder'),
        "maxlength": "20"
      },
      "class": bem('field'),
      "scopedSlots": {
        button: this.renderExchangeButton
      },
      "model": {
        value: _this2.currentCode,
        callback: function callback($$v) {
          _this2.currentCode = $$v;
        }
      }
    });

    var onChange = function onChange(index) {
      return function () {
        return _this2.$emit('change', index);
      };
    };

    var CouponTab = h(_tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "attrs": {
        "title": title
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [coupons.map(function (coupon, index) {
      return h(_coupon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "ref": "card",
        "key": coupon.id,
        "attrs": {
          "coupon": coupon,
          "currency": _this2.currency,
          "chosen": index === _this2.chosenCoupon
        },
        "nativeOn": {
          "click": onChange(index)
        }
      });
    }), !coupons.length && this.renderEmpty()])]);
    var DisabledCouponTab = h(_tab__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "attrs": {
        "title": disabledTitle
      }
    }, [h("div", {
      "class": bem('list'),
      "style": this.listStyle
    }, [disabledCoupons.map(function (coupon) {
      return h(_coupon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "attrs": {
          "disabled": true,
          "coupon": coupon,
          "currency": _this2.currency
        },
        "key": coupon.id
      });
    }), !disabledCoupons.length && this.renderEmpty()])]);
    return h("div", {
      "class": bem()
    }, [ExchangeBar, h(_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "class": bem('tab'),
      "attrs": {
        "line-width": 120
      },
      "model": {
        value: _this2.tab,
        callback: function callback($$v) {
          _this2.tab = $$v;
        }
      }
    }, [CouponTab, DisabledCouponTab]), h(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "directives": [{
        name: "show",
        value: this.showCloseButton
      }],
      "attrs": {
        "size": "large",
        "text": this.closeButtonText || t('close')
      },
      "class": bem('close'),
      "on": {
        "click": onChange(-1)
      }
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/coupon/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/coupon/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_format_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkbox */ "./node_modules/vant/es/checkbox/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('coupon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function getDate(timeStamp) {
  var date = new Date(timeStamp * 1000);
  return date.getFullYear() + "." + Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(date.getMonth() + 1) + "." + Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(date.getDate());
}

function formatDiscount(discount) {
  return (discount / 10).toFixed(discount % 10 === 0 ? 0 : 1);
}

function formatAmount(amount) {
  return (amount / 100).toFixed(amount % 100 === 0 ? 0 : amount % 10 === 0 ? 1 : 2);
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    coupon: Object,
    chosen: Boolean,
    disabled: Boolean,
    currency: {
      type: String,
      default: '¥'
    }
  },
  computed: {
    validPeriod: function validPeriod() {
      var _this$coupon = this.coupon,
          startAt = _this$coupon.startAt,
          endAt = _this$coupon.endAt;
      return t('valid') + "\uFF1A" + getDate(startAt) + " - " + getDate(endAt);
    },
    faceAmount: function faceAmount() {
      var coupon = this.coupon;

      if (coupon.valueDesc) {
        return coupon.valueDesc + "<span>" + (coupon.unitDesc || '') + "</span>";
      }

      if (coupon.denominations) {
        return "<span>" + this.currency + "</span> " + formatAmount(this.coupon.denominations);
      }

      if (coupon.discount) {
        return t('discount', formatDiscount(this.coupon.discount));
      }

      return '';
    },
    conditionMessage: function conditionMessage() {
      var condition = formatAmount(this.coupon.originCondition);
      return condition === '0' ? t('unlimited') : t('condition', condition);
    }
  },
  render: function render() {
    var h = arguments[0];
    var coupon = this.coupon,
        disabled = this.disabled;
    var description = disabled && coupon.reason || coupon.description;
    return h("div", {
      "class": bem({
        disabled: disabled
      })
    }, [h("div", {
      "class": bem('content')
    }, [h("div", {
      "class": bem('head')
    }, [h("h2", {
      "class": bem('amount'),
      "domProps": {
        "innerHTML": this.faceAmount
      }
    }), h("p", [this.coupon.condition || this.conditionMessage])]), h("div", {
      "class": bem('body')
    }, [h("h2", {
      "class": bem('name')
    }, [coupon.name]), h("p", [this.validPeriod]), this.chosen && h(_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "value": true,
        "checked-color": _utils_constant__WEBPACK_IMPORTED_MODULE_1__["RED"]
      },
      "class": bem('corner')
    })])]), description && h("p", {
      "class": bem('description')
    }, [description])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/DatePicker.js":
/*!************************************************************!*\
  !*** ./node_modules/vant/es/datetime-picker/DatePicker.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_validate_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate/date */ "./node_modules/vant/es/utils/validate/date.js");
/* harmony import */ var _utils_format_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/vant/es/datetime-picker/utils.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./node_modules/vant/es/datetime-picker/shared.js");






var currentYear = new Date().getFullYear();

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('date-picker'),
    createComponent = _createNamespace[0];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_shared__WEBPACK_IMPORTED_MODULE_5__["TimePickerMixin"]],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _shared__WEBPACK_IMPORTED_MODULE_5__["sharedProps"], {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: _utils_validate_date__WEBPACK_IMPORTED_MODULE_2__["isDate"]
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: _utils_validate_date__WEBPACK_IMPORTED_MODULE_2__["isDate"]
    }
  }),
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!Object(_utils_validate_date__WEBPACK_IMPORTED_MODULE_2__["isDate"])(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getMonthEndDay"])(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var values = picker.getValues();
      var year = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTrueValue"])(values[0]);
      var month = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTrueValue"])(values[1]);
      var maxDate = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getMonthEndDay"])(year, month);
      var date = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTrueValue"])(values[2]);

      if (this.type === 'year-month') {
        date = 1;
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTrueValue"])(values[3]);
        minute = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTrueValue"])(values[4]);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_3__["padZero"])(value.getMonth() + 1)), formatter('day', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_3__["padZero"])(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_3__["padZero"])(value.getHours())), formatter('minute', Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_3__["padZero"])(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/TimePicker.js":
/*!************************************************************!*\
  !*** ./node_modules/vant/es/datetime-picker/TimePicker.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_format_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./node_modules/vant/es/datetime-picker/shared.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('time-picker'),
    createComponent = _createNamespace[0];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_shared__WEBPACK_IMPORTED_MODULE_4__["TimePickerMixin"]],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _shared__WEBPACK_IMPORTED_MODULE_4__["sharedProps"], {
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour]
      }, {
        type: 'minute',
        range: [this.minMinute, this.maxMinute]
      }];
    }
  },
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(this.minHour) + ":" + Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(hour, this.minHour, this.maxHour));
      minute = Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var indexes = picker.getIndexes();
      var hour = this.originColumns[0].values[indexes[0]];
      var minute = this.originColumns[1].values[indexes[1]];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = value.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/datetime-picker/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimePicker */ "./node_modules/vant/es/datetime-picker/TimePicker.js");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DatePicker */ "./node_modules/vant/es/datetime-picker/DatePicker.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('datetime-picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _TimePicker__WEBPACK_IMPORTED_MODULE_2__["default"].props, {}, _DatePicker__WEBPACK_IMPORTED_MODULE_3__["default"].props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? _TimePicker__WEBPACK_IMPORTED_MODULE_2__["default"] : _DatePicker__WEBPACK_IMPORTED_MODULE_3__["default"];
    return h(Component, {
      "class": bem(),
      "props": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$props),
      "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$listeners)
    });
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/shared.js":
/*!********************************************************!*\
  !*** ./node_modules/vant/es/datetime-picker/shared.js ***!
  \********************************************************/
/*! exports provided: sharedProps, TimePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedProps", function() { return sharedProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerMixin", function() { return TimePickerMixin; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/vant/es/datetime-picker/utils.js");
/* harmony import */ var _utils_format_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _picker_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../picker/shared */ "./node_modules/vant/es/picker/shared.js");
/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../picker */ "./node_modules/vant/es/picker/index.js");





var sharedProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _picker_shared__WEBPACK_IMPORTED_MODULE_3__["pickerProps"], {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["times"])(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(_utils_format_string__WEBPACK_IMPORTED_MODULE_2__["padZero"])(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(_picker_shared__WEBPACK_IMPORTED_MODULE_3__["pickerProps"]).forEach(function (key) {
      props[key] = _this3[key];
    });
    return h(_picker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props)
    });
  }
};

/***/ }),

/***/ "./node_modules/vant/es/datetime-picker/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/datetime-picker/utils.js ***!
  \*******************************************************/
/*! exports provided: times, getTrueValue, getMonthEndDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return times; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTrueValue", function() { return getTrueValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEndDay", function() { return getMonthEndDay; });
/* harmony import */ var _utils_validate_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/validate/number */ "./node_modules/vant/es/utils/validate/number.js");

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return;
  }

  while (Object(_utils_validate_number__WEBPACK_IMPORTED_MODULE_0__["isNaN"])(parseInt(value, 10))) {
    value = value.slice(1);
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

/***/ }),

/***/ "./node_modules/vant/es/dialog/Dialog.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/dialog/Dialog.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _mixins_close_on_popstate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/close-on-popstate */ "./node_modules/vant/es/mixins/close-on-popstate.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('dialog'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_popup__WEBPACK_IMPORTED_MODULE_2__["PopupMixin"], _mixins_close_on_popstate__WEBPACK_IMPORTED_MODULE_3__["CloseOnPopstateMixin"]],
  props: {
    title: String,
    message: String,
    className: null,
    callback: Function,
    beforeClose: Function,
    messageAlign: String,
    cancelButtonText: String,
    cancelButtonColor: String,
    confirmButtonText: String,
    confirmButtonColor: String,
    showCancelButton: Boolean,
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      loading: {
        confirm: false,
        cancel: false
      }
    };
  },
  methods: {
    onClickOverlay: function onClickOverlay() {
      this.handleAction('overlay');
    },
    handleAction: function handleAction(action) {
      var _this = this;

      this.$emit(action);

      if (this.beforeClose) {
        this.loading[action] = true;
        this.beforeClose(action, function (state) {
          if (state !== false && _this.loading[action]) {
            _this.onClose(action);
          }

          _this.loading.confirm = false;
          _this.loading.cancel = false;
        });
      } else {
        this.onClose(action);
      }
    },
    onClose: function onClose(action) {
      this.close();

      if (this.callback) {
        this.callback(action);
      }
    }
  },
  render: function render() {
    var _bem,
        _this2 = this,
        _ref;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var message = this.message,
        messageAlign = this.messageAlign;
    var messageSlot = this.slots();
    var title = this.slots('title') || this.title;
    var Title = title && h("div", {
      "class": bem('header', {
        isolated: !message && !messageSlot
      })
    }, [title]);
    var Content = (messageSlot || message) && h("div", {
      "class": bem('content')
    }, [messageSlot || h("div", {
      "domProps": {
        "innerHTML": message
      },
      "class": bem('message', (_bem = {
        'has-title': title
      }, _bem[messageAlign] = messageAlign, _bem))
    })]);
    var hasButtons = this.showCancelButton && this.showConfirmButton;
    var ButtonGroup = h("div", {
      "class": [_utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER_TOP"], bem('footer', {
        buttons: hasButtons
      })]
    }, [this.showCancelButton && h(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "size": "large",
        "loading": this.loading.cancel,
        "text": this.cancelButtonText || t('cancel')
      },
      "class": bem('cancel'),
      "style": {
        color: this.cancelButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('cancel');
        }
      }
    }), this.showConfirmButton && h(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "size": "large",
        "loading": this.loading.confirm,
        "text": this.confirmButtonText || t('confirm')
      },
      "class": [bem('confirm'), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER_LEFT"]] = hasButtons, _ref)],
      "style": {
        color: this.confirmButtonColor
      },
      "on": {
        "click": function click() {
          _this2.handleAction('confirm');
        }
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-dialog-bounce"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "attrs": {
        "role": "dialog",
        "aria-labelledby": this.title || message
      },
      "class": [bem(), this.className]
    }, [Title, Content, ButtonGroup])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/dialog/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/dialog/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./node_modules/vant/es/dialog/Dialog.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");




var instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  instance = new (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend(_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]))({
    el: document.createElement('div'),
    // avoid missing animation when first rendered
    propsData: {
      lazyRender: false
    }
  });
  instance.$on('input', function (value) {
    instance.value = value;
  });
}

function Dialog(options) {
  /* istanbul ignore if */
  if (_utils__WEBPACK_IMPORTED_MODULE_3__["isServer"]) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    if (!instance || !isInDocument(instance.$el)) {
      initInstance();
    }

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Dialog.currentOptions, options, {
      resolve: resolve,
      reject: reject
    });
  });
}

Dialog.defaultOptions = {
  value: true,
  title: '',
  message: '',
  overlay: true,
  className: '',
  lockScroll: true,
  beforeClose: null,
  messageAlign: '',
  getContainer: 'body',
  cancelButtonText: '',
  cancelButtonColor: null,
  confirmButtonText: '',
  confirmButtonColor: null,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnPopstate: false,
  closeOnClickOverlay: false,
  callback: function callback(action) {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  if (instance) {
    instance.value = false;
  }
};

Dialog.setDefaultOptions = function (options) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();

Dialog.install = function () {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

Dialog.Component = _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"];
vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$dialog = Dialog;
/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./node_modules/vant/es/divider/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/divider/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('divider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Divider(h, props, slots, ctx) {
  var _bem;

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "attrs": {
      "role": "separator"
    },
    "style": {
      borderColor: props.borderColor
    },
    "class": bem((_bem = {
      dashed: props.dashed,
      hairline: props.hairline
    }, _bem["content-" + props.contentPosition] = slots.default, _bem))
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [slots.default && slots.default()]);
}

Divider.props = {
  dashed: Boolean,
  hairline: {
    type: Boolean,
    default: true
  },
  contentPosition: {
    type: String,
    default: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Divider));

/***/ }),

/***/ "./node_modules/vant/es/dropdown-item/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/dropdown-item/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../popup */ "./node_modules/vant/es/popup/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('dropdown-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_4__["ChildrenMixin"])('vanDropdownMenu')],
  props: {
    value: null,
    title: String,
    disabled: Boolean,
    titleClass: String,
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      transition: true,
      showPopup: false,
      showWrapper: false
    };
  },
  computed: {
    displayTitle: function displayTitle() {
      var _this = this;

      if (this.title) {
        return this.title;
      }

      var match = this.options.filter(function (option) {
        return option.value === _this.value;
      });
      return match.length ? match[0].text : '';
    }
  },
  methods: {
    toggle: function toggle(show, options) {
      if (show === void 0) {
        show = !this.showPopup;
      }

      if (options === void 0) {
        options = {};
      }

      if (show === this.showPopup) {
        return;
      }

      this.transition = !options.immediate;
      this.showPopup = show;

      if (show) {
        this.parent.updateOffset();
        this.showWrapper = true;
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    var createEmitter = function createEmitter(eventName) {
      return function () {
        return _this2.$emit(eventName);
      };
    };

    this.onOpen = createEmitter('open');
    this.onClose = createEmitter('close');
    this.onOpened = createEmitter('opened');
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var _this$parent = this.parent,
        zIndex = _this$parent.zIndex,
        offset = _this$parent.offset,
        overlay = _this$parent.overlay,
        duration = _this$parent.duration,
        direction = _this$parent.direction,
        activeColor = _this$parent.activeColor,
        closeOnClickOverlay = _this$parent.closeOnClickOverlay;
    var Options = this.options.map(function (option) {
      var active = option.value === _this3.value;
      return h(_cell__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "attrs": {
          "clickable": true,
          "icon": option.icon,
          "title": option.text
        },
        "key": option.value,
        "class": bem('option', {
          active: active
        }),
        "style": {
          color: active ? activeColor : ''
        },
        "on": {
          "click": function click() {
            _this3.showPopup = false;

            if (option.value !== _this3.value) {
              _this3.$emit('input', option.value);

              _this3.$emit('change', option.value);
            }
          }
        }
      }, [active && h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "class": bem('icon'),
        "attrs": {
          "color": activeColor,
          "name": "success"
        }
      })]);
    });
    var style = {
      zIndex: zIndex
    };

    if (direction === 'down') {
      style.top = offset + "px";
    } else {
      style.bottom = offset + "px";
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: this.showWrapper
      }],
      "style": style,
      "class": bem([direction])
    }, [h(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "overlay": overlay,
        "position": direction === 'down' ? 'top' : 'bottom',
        "duration": this.transition ? duration : 0,
        "closeOnClickOverlay": closeOnClickOverlay,
        "overlayStyle": {
          position: 'absolute'
        }
      },
      "class": bem('content'),
      "on": {
        "open": this.onOpen,
        "close": this.onClose,
        "opened": this.onOpened,
        "closed": function closed() {
          _this3.showWrapper = false;

          _this3.$emit('closed');
        }
      },
      "model": {
        value: _this3.showPopup,
        callback: function callback($$v) {
          _this3.showPopup = $$v;
        }
      }
    }, [Options, this.slots('default')])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/dropdown-menu/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/dropdown-menu/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _mixins_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/click-outside */ "./node_modules/vant/es/mixins/click-outside.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('dropdown-menu'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ParentMixin"])('vanDropdownMenu'), Object(_mixins_click_outside__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideMixin"])({
    event: 'click',
    method: 'onClickOutside'
  })],
  props: {
    activeColor: String,
    overlay: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 10
    },
    duration: {
      type: Number,
      default: 0.2
    },
    direction: {
      type: String,
      default: 'down'
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      offset: 0
    };
  },
  methods: {
    updateOffset: function updateOffset() {
      var menu = this.$refs.menu;
      var rect = menu.getBoundingClientRect();

      if (this.direction === 'down') {
        this.offset = rect.bottom;
      } else {
        this.offset = window.innerHeight - rect.top;
      }
    },
    toggleItem: function toggleItem(active) {
      this.children.forEach(function (item, index) {
        if (index === active) {
          item.toggle();
        } else if (item.showPopup) {
          item.toggle(false, {
            immediate: true
          });
        }
      });
    },
    onClickOutside: function onClickOutside() {
      this.children.forEach(function (item) {
        item.toggle(false);
      });
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var Titles = this.children.map(function (item, index) {
      return h("div", {
        "attrs": {
          "role": "button",
          "tabindex": item.disabled ? -1 : 0
        },
        "class": bem('item', {
          disabled: item.disabled
        }),
        "on": {
          "click": function click() {
            if (!item.disabled) {
              _this.toggleItem(index);
            }
          }
        }
      }, [h("span", {
        "class": [bem('title', {
          active: item.showPopup,
          down: item.showPopup === (_this.direction === 'down')
        }), item.titleClass],
        "style": {
          color: item.showPopup ? _this.activeColor : ''
        }
      }, [h("div", {
        "class": "van-ellipsis"
      }, [item.displayTitle])])]);
    });
    return h("div", {
      "ref": "menu",
      "class": [bem(), _utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER_TOP_BOTTOM"]]
    }, [Titles, this.slots('default')]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/field/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/field/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _cell_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell/shared */ "./node_modules/vant/es/cell/shared.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _utils_dom_reset_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dom/reset-scroll */ "./node_modules/vant/es/utils/dom/reset-scroll.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");










var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["createNamespace"])('field'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  inheritAttrs: false,
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _cell_shared__WEBPACK_IMPORTED_MODULE_4__["cellProps"], {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isDef"])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_7__["addUnit"])(labelWidth)
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isDef"])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      Object(_utils_dom_reset_scroll__WEBPACK_IMPORTED_MODULE_6__["resetScroll"])();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__["preventDefault"])(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__["preventDefault"])(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isObj"])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{}, inputProps]));
      }

      return h("input", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(_cell__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('body')
    }, [this.renderInput(), this.showClear && h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "name": "clear"
      },
      "class": bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/goods-action-button/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vant/es/goods-action-button/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('goods-action-button'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_3__["ChildrenMixin"])('vanGoodsAction')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_2__["routeProps"], {
    type: String,
    text: String,
    color: String,
    loading: Boolean,
    disabled: Boolean
  }),
  computed: {
    isFirst: function isFirst() {
      var prev = this.parent && this.parent.children[this.index - 1];
      return !prev || prev.$options.name !== this.$options.name;
    },
    isLast: function isLast() {
      var next = this.parent && this.parent.children[this.index + 1];
      return !next || next.$options.name !== this.$options.name;
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_2__["route"])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h(_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "class": bem([{
        first: this.isFirst,
        last: this.isLast
      }, this.type]),
      "attrs": {
        "square": true,
        "size": "large",
        "type": this.type,
        "color": this.color,
        "loading": this.loading,
        "disabled": this.disabled
      },
      "on": {
        "click": this.onClick
      }
    }, [this.slots() || this.text]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/goods-action-icon/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vant/es/goods-action-icon/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('goods-action-icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_3__["ChildrenMixin"])('vanGoodsAction')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_2__["routeProps"], {
    text: String,
    icon: String,
    info: [Number, String],
    iconClass: null
  }),
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_2__["route"])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem(),
      "on": {
        "click": this.onClick
      }
    }, [this.slots('icon') ? h("div", {
      "class": bem('icon')
    }, [this.slots('icon')]) : h(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "class": [bem('icon'), this.iconClass],
      "attrs": {
        "tag": "div",
        "info": this.info,
        "name": this.icon
      }
    }), this.slots() || this.text]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/goods-action/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/goods-action/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('goods-action'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanGoodsAction')],
  props: {
    safeAreaInsetBottom: Boolean
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/grid-item/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/grid-item/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");







var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('grid-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_3__["ChildrenMixin"])('vanGrid')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_4__["routeProps"], {
    dot: Boolean,
    text: String,
    icon: String,
    info: [Number, String]
  }),
  computed: {
    style: function style() {
      var _this$parent = this.parent,
          square = _this$parent.square,
          gutter = _this$parent.gutter,
          columnNum = _this$parent.columnNum;
      var percent = 100 / columnNum + "%";
      var style = {
        flexBasis: percent
      };

      if (square) {
        style.paddingTop = percent;
      } else if (gutter) {
        var gutterValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(gutter);
        style.paddingRight = gutterValue;

        if (this.index >= columnNum) {
          style.marginTop = gutterValue;
        }
      }

      return style;
    },
    contentStyle: function contentStyle() {
      var _this$parent2 = this.parent,
          square = _this$parent2.square,
          gutter = _this$parent2.gutter;

      if (square && gutter) {
        var gutterValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(gutter);
        return {
          right: gutterValue,
          bottom: gutterValue,
          height: 'auto'
        };
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_4__["route"])(this.$router, this);
    },
    renderContent: function renderContent() {
      var h = this.$createElement;
      var slot = this.slots();

      if (slot) {
        return slot;
      }

      return [this.slots('icon') || this.icon && h(_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "attrs": {
          "name": this.icon,
          "dot": this.dot,
          "info": this.info
        },
        "class": bem('icon')
      }), this.slots('text') || this.text && h("span", {
        "class": bem('text')
      }, [this.text])];
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var _this$parent3 = this.parent,
        center = _this$parent3.center,
        border = _this$parent3.border,
        square = _this$parent3.square,
        gutter = _this$parent3.gutter,
        clickable = _this$parent3.clickable;
    return h("div", {
      "class": [bem({
        square: square
      })],
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "style": this.contentStyle,
      "class": [bem('content', {
        center: center,
        square: square,
        clickable: clickable,
        surround: border && gutter
      }), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER"]] = border, _ref)]
    }, [this.renderContent()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/grid/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/grid/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('grid'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanGrid')],
  props: {
    square: Boolean,
    gutter: [Number, String],
    clickable: Boolean,
    columnNum: {
      type: Number,
      default: 4
    },
    center: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    style: function style() {
      var gutter = this.gutter;

      if (gutter) {
        return {
          paddingLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(gutter)
        };
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": this.style,
      "class": [bem(), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_TOP"]] = this.border && !this.gutter, _ref)]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/icon/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/icon/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info */ "./node_modules/vant/es/info/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./node_modules/vant/es/image/index.js");




 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('icon'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(props.size)
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [slots.default && slots.default(), imageIcon && h(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "class": bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false
    }
  }), h(_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "attrs": {
      "dot": props.dot,
      "info": props.info
    }
  })]);
}

Icon.props = {
  dot: Boolean,
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Icon));

/***/ }),

/***/ "./node_modules/vant/es/image-preview/ImagePreview.js":
/*!************************************************************!*\
  !*** ./node_modules/vant/es/image-preview/ImagePreview.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _mixins_close_on_popstate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/close-on-popstate */ "./node_modules/vant/es/mixins/close-on-popstate.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image */ "./node_modules/vant/es/image/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");
/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../swipe */ "./node_modules/vant/es/swipe/index.js");
/* harmony import */ var _swipe_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../swipe-item */ "./node_modules/vant/es/swipe-item/index.js");











var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('image-preview'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_popup__WEBPACK_IMPORTED_MODULE_3__["PopupMixin"], _mixins_touch__WEBPACK_IMPORTED_MODULE_4__["TouchMixin"], _mixins_close_on_popstate__WEBPACK_IMPORTED_MODULE_5__["CloseOnPopstateMixin"]],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: bem('overlay')
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transitionDuration: this.zooming || this.moving ? '0s' : '.3s'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.setActive(this.startPosition);
    },
    startPosition: function startPosition(active) {
      this.setActive(active);
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.$emit('close', {
              index: index,
              url: _this.images[index]
            });

            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_1__["range"])(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_1__["range"])(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_1__["range"])(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(event, true);
        }
      }
    },
    setActive: function setActive(active) {
      this.resetScale();

      if (active !== this.active) {
        this.active = active;
        this.$emit('change', active);
      }
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    },
    genIndex: function genIndex() {
      var h = this.$createElement;

      if (this.showIndex) {
        return h("div", {
          "class": bem('index')
        }, [this.slots('index') || this.active + 1 + "/" + this.images.length]);
      }
    },
    genImages: function genImages() {
      var _this2 = this;

      var h = this.$createElement;
      var imageSlots = {
        loading: function loading() {
          return h(_loading__WEBPACK_IMPORTED_MODULE_7__["default"], {
            "attrs": {
              "type": "spinner"
            }
          });
        }
      };
      return h(_swipe__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "ref": "swipe",
        "attrs": {
          "loop": this.loop,
          "duration": this.swipeDuration,
          "indicatorColor": "white",
          "initialSwipe": this.startPosition,
          "showIndicators": this.showIndicators
        },
        "on": {
          "change": this.setActive
        }
      }, [this.images.map(function (image, index) {
        return h(_swipe_item__WEBPACK_IMPORTED_MODULE_9__["default"], [h(_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
          "attrs": {
            "src": image,
            "fit": "contain",
            "lazyLoad": _this2.lazyLoad
          },
          "class": bem('image'),
          "scopedSlots": imageSlots,
          "style": index === _this2.active ? _this2.imageStyle : null,
          "nativeOn": {
            "touchstart": _this2.onImageTouchStart,
            "touchmove": _this2.onImageTouchMove,
            "touchend": _this2.onImageTouchEnd,
            "touchcancel": _this2.onImageTouchEnd
          }
        })]);
      })]);
    }
  },
  render: function render() {
    var h = arguments[0];

    if (!this.value) {
      return;
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"],
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [this.genImages(), this.genIndex()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/image-preview/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/image-preview/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _ImagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagePreview */ "./node_modules/vant/es/image-preview/ImagePreview.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");




var instance;
var defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var initInstance = function initInstance() {
  instance = new (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend(_ImagePreview__WEBPACK_IMPORTED_MODULE_2__["default"]))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (_utils__WEBPACK_IMPORTED_MODULE_3__["isServer"]) {
    return;
  }

  if (!instance) {
    initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

ImagePreview.install = function () {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(_ImagePreview__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (ImagePreview);

/***/ }),

/***/ "./node_modules/vant/es/image/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/image/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    radius: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.width)) {
        style.width = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.width);
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.height)) {
        style.height = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.height);
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.radius)) {
        style.overflow = 'hidden';
        style.borderRadius = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.radius);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "attrs": {
            "name": "photo-o",
            "size": "22"
          }
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "attrs": {
            "name": "warning-o",
            "size": "22"
          }
        })]);
      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.renderImage(), this.renderPlaceholder()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index-anchor/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/index-anchor/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('index-anchor'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ChildrenMixin"])('vanIndexBar', {
    indexKey: 'childrenIndex'
  })],
  props: {
    index: [Number, String]
  },
  data: function data() {
    return {
      top: 0,
      active: false,
      position: 'static'
    };
  },
  computed: {
    sticky: function sticky() {
      return this.active && this.parent.sticky;
    },
    anchorStyle: function anchorStyle() {
      if (this.sticky) {
        return {
          position: this.position,
          zIndex: "" + this.parent.zIndex,
          transform: "translate3d(0, " + this.top + "px, 0)",
          color: this.parent.highlightColor
        };
      }
    }
  },
  mounted: function mounted() {
    this.height = this.$el.offsetHeight;
  },
  methods: {
    scrollIntoView: function scrollIntoView() {
      this.$el.scrollIntoView();
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var sticky = this.sticky;
    return h("div", {
      "style": {
        height: sticky ? this.height + "px" : null
      }
    }, [h("div", {
      "style": this.anchorStyle,
      "class": [bem({
        sticky: sticky
      }), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_BOTTOM"]] = sticky, _ref)]
    }, [this.slots('default') || this.index])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index-bar/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/index-bar/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");








var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('index-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_1__["TouchMixin"], Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ParentMixin"])('vanIndexBar'), Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__["BindEventMixin"])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["getScrollEventTarget"])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll);
  })],
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    },
    highlightColor: {
      type: String,
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_4__["GREEN"]
    },
    stickyOffsetTop: {
      type: Number,
      default: 0
    },
    indexList: {
      type: Array,
      default: function _default() {
        var indexList = [];
        var charCodeOfA = 'A'.charCodeAt(0);

        for (var i = 0; i < 26; i++) {
          indexList.push(String.fromCharCode(charCodeOfA + i));
        }

        return indexList;
      }
    }
  },
  data: function data() {
    return {
      activeAnchorIndex: null
    };
  },
  computed: {
    highlightStyle: function highlightStyle() {
      var highlightColor = this.highlightColor;

      if (highlightColor) {
        /* istanbul ignore else */
        return {
          color: highlightColor
        };
      }
    }
  },
  watch: {
    indexList: function indexList() {
      this.$nextTick(this.onScroll);
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      var scrollTop = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["getScrollTop"])(this.scroller);
      var scrollerRect = this.getScrollerRect();
      var rects = this.children.map(function (item) {
        return {
          height: item.height,
          top: _this.getElementTop(item.$el, scrollerRect)
        };
      });
      var active = this.getActiveAnchorIndex(scrollTop, rects);
      this.activeAnchorIndex = this.indexList[active];

      if (this.sticky) {
        var activeItemTop = 0;
        var isReachEdge = false;

        if (active !== -1) {
          activeItemTop = rects[active].top - scrollTop;
          isReachEdge = activeItemTop <= 0;
        }

        this.children.forEach(function (item, index) {
          if (index === active) {
            item.active = true;
            item.position = isReachEdge ? 'fixed' : 'relative';
            item.top = isReachEdge ? _this.stickyOffsetTop + scrollerRect.top : 0;
          } else if (index === active - 1) {
            item.active = !isReachEdge;
            item.position = 'relative';
            item.top = item.$el.parentElement.offsetHeight - item.height;
          } else {
            item.active = false;
            item.position = 'static';
          }
        });
      }
    },
    getScrollerRect: function getScrollerRect() {
      var scroller = this.scroller;
      var scrollerRect = {
        top: 0,
        left: 0
      };

      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      }

      return scrollerRect;
    },
    getElementTop: function getElementTop(ele, scrollerRect) {
      var scroller = this.scroller;

      if (scroller === window || scroller === document.body) {
        return Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["getElementTop"])(ele);
      }

      var eleRect = ele.getBoundingClientRect();
      return eleRect.top - scrollerRect.top + Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["getScrollTop"])(scroller);
    },
    getActiveAnchorIndex: function getActiveAnchorIndex(scrollTop, rects) {
      for (var i = this.children.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;

        if (scrollTop + prevHeight + this.stickyOffsetTop >= rects[i].top) {
          return i;
        }
      }

      return -1;
    },
    onClick: function onClick(event) {
      this.scrollToElement(event.target);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction === 'vertical') {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_5__["preventDefault"])(event);
        var _event$touches$ = event.touches[0],
            clientX = _event$touches$.clientX,
            clientY = _event$touches$.clientY;
        var target = document.elementFromPoint(clientX, clientY);

        if (target) {
          var index = target.dataset.index;
          /* istanbul ignore else */

          if (this.touchActiveIndex !== index) {
            this.touchActiveIndex = index;
            this.scrollToElement(target);
          }
        }
      }
    },
    scrollToElement: function scrollToElement(element) {
      var index = element.dataset.index;

      if (!index) {
        return;
      }

      var match = this.children.filter(function (item) {
        return String(item.index) === index;
      });

      if (match[0]) {
        match[0].scrollIntoView();

        if (this.stickyOffsetTop) {
          Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["setRootScrollTop"])(Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_6__["getRootScrollTop"])() - this.stickyOffsetTop);
        }

        this.$emit('select', match[0].index);
      }
    },
    onTouchEnd: function onTouchEnd() {
      this.active = null;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var Indexes = this.indexList.map(function (index) {
      var active = index === _this2.activeAnchorIndex;
      return h("span", {
        "class": bem('index', {
          active: active
        }),
        "style": active ? _this2.highlightStyle : null,
        "attrs": {
          "data-index": index
        }
      }, [index]);
    });
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('sidebar'),
      "style": {
        zIndex: this.zIndex + 1
      },
      "on": {
        "click": this.onClick,
        "touchstart": this.touchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [Indexes]), this.slots('default')]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/index.js":
/*!***************************************!*\
  !*** ./node_modules/vant/es/index.js ***!
  \***************************************/
/*! exports provided: install, version, ActionSheet, AddressEdit, AddressList, Area, Button, Card, Cell, CellGroup, Checkbox, CheckboxGroup, Circle, Col, Collapse, CollapseItem, ContactCard, ContactEdit, ContactList, CountDown, Coupon, CouponCell, CouponList, DatetimePicker, Dialog, Divider, DropdownItem, DropdownMenu, Field, GoodsAction, GoodsActionButton, GoodsActionIcon, Grid, GridItem, Icon, Image, ImagePreview, IndexAnchor, IndexBar, Info, Lazyload, List, Loading, Locale, NavBar, NoticeBar, Notify, NumberKeyboard, Overlay, Pagination, Panel, PasswordInput, Picker, Popup, Progress, PullRefresh, Radio, RadioGroup, Rate, Row, Search, Sidebar, SidebarItem, Skeleton, Sku, Slider, Step, Stepper, Steps, Sticky, SubmitBar, Swipe, SwipeCell, SwipeItem, Switch, SwitchCell, Tab, Tabbar, TabbarItem, Tabs, Tag, Toast, TreeSelect, Uploader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _action_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-sheet */ "./node_modules/vant/es/action-sheet/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheet", function() { return _action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _address_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-edit */ "./node_modules/vant/es/address-edit/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressEdit", function() { return _address_edit__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _address_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address-list */ "./node_modules/vant/es/address-list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddressList", function() { return _address_list__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./area */ "./node_modules/vant/es/area/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return _area__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button */ "./node_modules/vant/es/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card */ "./node_modules/vant/es/card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell */ "./node_modules/vant/es/cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return _cell__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _cell_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell-group */ "./node_modules/vant/es/cell-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CellGroup", function() { return _cell_group__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox */ "./node_modules/vant/es/checkbox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _checkbox__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _checkbox_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox-group */ "./node_modules/vant/es/checkbox-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _checkbox_group__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./circle */ "./node_modules/vant/es/circle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _circle__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./col */ "./node_modules/vant/es/col/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collapse */ "./node_modules/vant/es/collapse/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _collapse__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _collapse_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./collapse-item */ "./node_modules/vant/es/collapse-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseItem", function() { return _collapse_item__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _contact_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-card */ "./node_modules/vant/es/contact-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactCard", function() { return _contact_card__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _contact_edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-edit */ "./node_modules/vant/es/contact-edit/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactEdit", function() { return _contact_edit__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _contact_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-list */ "./node_modules/vant/es/contact-list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactList", function() { return _contact_list__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _count_down__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./count-down */ "./node_modules/vant/es/count-down/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CountDown", function() { return _count_down__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _coupon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./coupon */ "./node_modules/vant/es/coupon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return _coupon__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _coupon_cell__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./coupon-cell */ "./node_modules/vant/es/coupon-cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponCell", function() { return _coupon_cell__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _coupon_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./coupon-list */ "./node_modules/vant/es/coupon-list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CouponList", function() { return _coupon_list__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _datetime_picker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./datetime-picker */ "./node_modules/vant/es/datetime-picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatetimePicker", function() { return _datetime_picker__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialog */ "./node_modules/vant/es/dialog/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _dialog__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./divider */ "./node_modules/vant/es/divider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _divider__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dropdown-item */ "./node_modules/vant/es/dropdown-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return _dropdown_item__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _dropdown_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dropdown-menu */ "./node_modules/vant/es/dropdown-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return _dropdown_menu__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./field */ "./node_modules/vant/es/field/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return _field__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _goods_action__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./goods-action */ "./node_modules/vant/es/goods-action/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsAction", function() { return _goods_action__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _goods_action_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./goods-action-button */ "./node_modules/vant/es/goods-action-button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsActionButton", function() { return _goods_action_button__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _goods_action_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./goods-action-icon */ "./node_modules/vant/es/goods-action-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoodsActionIcon", function() { return _goods_action_icon__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./grid */ "./node_modules/vant/es/grid/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _grid__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./grid-item */ "./node_modules/vant/es/grid-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridItem", function() { return _grid_item__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./icon */ "./node_modules/vant/es/icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./image */ "./node_modules/vant/es/image/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./image-preview */ "./node_modules/vant/es/image-preview/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return _image_preview__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _index_anchor__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./index-anchor */ "./node_modules/vant/es/index-anchor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexAnchor", function() { return _index_anchor__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _index_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./index-bar */ "./node_modules/vant/es/index-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexBar", function() { return _index_bar__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./info */ "./node_modules/vant/es/info/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _info__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lazyload */ "./node_modules/vant/es/lazyload/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazyload", function() { return _lazyload__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./list */ "./node_modules/vant/es/list/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _list__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loading */ "./node_modules/vant/es/loading/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return _loading__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./locale */ "./node_modules/vant/es/locale/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return _locale__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nav-bar */ "./node_modules/vant/es/nav-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _nav_bar__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _notice_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./notice-bar */ "./node_modules/vant/es/notice-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeBar", function() { return _notice_bar__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./notify */ "./node_modules/vant/es/notify/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notify", function() { return _notify__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _number_keyboard__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./number-keyboard */ "./node_modules/vant/es/number-keyboard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberKeyboard", function() { return _number_keyboard__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./overlay */ "./node_modules/vant/es/overlay/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return _overlay__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pagination */ "./node_modules/vant/es/pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _pagination__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./panel */ "./node_modules/vant/es/panel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return _panel__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _password_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./password-input */ "./node_modules/vant/es/password-input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordInput", function() { return _password_input__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _picker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./picker */ "./node_modules/vant/es/picker/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Picker", function() { return _picker__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./popup */ "./node_modules/vant/es/popup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _popup__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./progress */ "./node_modules/vant/es/progress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return _progress__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _pull_refresh__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pull-refresh */ "./node_modules/vant/es/pull-refresh/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PullRefresh", function() { return _pull_refresh__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./radio */ "./node_modules/vant/es/radio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _radio__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _radio_group__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./radio-group */ "./node_modules/vant/es/radio-group/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _radio_group__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _rate__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./rate */ "./node_modules/vant/es/rate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return _rate__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./row */ "./node_modules/vant/es/row/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_57__["default"]; });

/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./search */ "./node_modules/vant/es/search/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _search__WEBPACK_IMPORTED_MODULE_58__["default"]; });

/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./sidebar */ "./node_modules/vant/es/sidebar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return _sidebar__WEBPACK_IMPORTED_MODULE_59__["default"]; });

/* harmony import */ var _sidebar_item__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./sidebar-item */ "./node_modules/vant/es/sidebar-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarItem", function() { return _sidebar_item__WEBPACK_IMPORTED_MODULE_60__["default"]; });

/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./skeleton */ "./node_modules/vant/es/skeleton/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return _skeleton__WEBPACK_IMPORTED_MODULE_61__["default"]; });

/* harmony import */ var _sku__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./sku */ "./node_modules/vant/es/sku/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sku", function() { return _sku__WEBPACK_IMPORTED_MODULE_62__["default"]; });

/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./slider */ "./node_modules/vant/es/slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _slider__WEBPACK_IMPORTED_MODULE_63__["default"]; });

/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./step */ "./node_modules/vant/es/step/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return _step__WEBPACK_IMPORTED_MODULE_64__["default"]; });

/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./stepper */ "./node_modules/vant/es/stepper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stepper", function() { return _stepper__WEBPACK_IMPORTED_MODULE_65__["default"]; });

/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./steps */ "./node_modules/vant/es/steps/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return _steps__WEBPACK_IMPORTED_MODULE_66__["default"]; });

/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./sticky */ "./node_modules/vant/es/sticky/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sticky", function() { return _sticky__WEBPACK_IMPORTED_MODULE_67__["default"]; });

/* harmony import */ var _submit_bar__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./submit-bar */ "./node_modules/vant/es/submit-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitBar", function() { return _submit_bar__WEBPACK_IMPORTED_MODULE_68__["default"]; });

/* harmony import */ var _swipe__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./swipe */ "./node_modules/vant/es/swipe/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swipe", function() { return _swipe__WEBPACK_IMPORTED_MODULE_69__["default"]; });

/* harmony import */ var _swipe_cell__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./swipe-cell */ "./node_modules/vant/es/swipe-cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeCell", function() { return _swipe_cell__WEBPACK_IMPORTED_MODULE_70__["default"]; });

/* harmony import */ var _swipe_item__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./swipe-item */ "./node_modules/vant/es/swipe-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwipeItem", function() { return _swipe_item__WEBPACK_IMPORTED_MODULE_71__["default"]; });

/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./switch */ "./node_modules/vant/es/switch/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _switch__WEBPACK_IMPORTED_MODULE_72__["default"]; });

/* harmony import */ var _switch_cell__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./switch-cell */ "./node_modules/vant/es/switch-cell/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchCell", function() { return _switch_cell__WEBPACK_IMPORTED_MODULE_73__["default"]; });

/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./tab */ "./node_modules/vant/es/tab/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return _tab__WEBPACK_IMPORTED_MODULE_74__["default"]; });

/* harmony import */ var _tabbar__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./tabbar */ "./node_modules/vant/es/tabbar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabbar", function() { return _tabbar__WEBPACK_IMPORTED_MODULE_75__["default"]; });

/* harmony import */ var _tabbar_item__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./tabbar-item */ "./node_modules/vant/es/tabbar-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabbarItem", function() { return _tabbar_item__WEBPACK_IMPORTED_MODULE_76__["default"]; });

/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./tabs */ "./node_modules/vant/es/tabs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _tabs__WEBPACK_IMPORTED_MODULE_77__["default"]; });

/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./tag */ "./node_modules/vant/es/tag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return _tag__WEBPACK_IMPORTED_MODULE_78__["default"]; });

/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./toast */ "./node_modules/vant/es/toast/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _toast__WEBPACK_IMPORTED_MODULE_79__["default"]; });

/* harmony import */ var _tree_select__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./tree-select */ "./node_modules/vant/es/tree-select/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return _tree_select__WEBPACK_IMPORTED_MODULE_80__["default"]; });

/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./uploader */ "./node_modules/vant/es/uploader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uploader", function() { return _uploader__WEBPACK_IMPORTED_MODULE_81__["default"]; });

// This file is auto gererated by build/build-entry.js


















































































var version = '2.2.1';
var components = [_action_sheet__WEBPACK_IMPORTED_MODULE_0__["default"], _address_edit__WEBPACK_IMPORTED_MODULE_1__["default"], _address_list__WEBPACK_IMPORTED_MODULE_2__["default"], _area__WEBPACK_IMPORTED_MODULE_3__["default"], _button__WEBPACK_IMPORTED_MODULE_4__["default"], _card__WEBPACK_IMPORTED_MODULE_5__["default"], _cell__WEBPACK_IMPORTED_MODULE_6__["default"], _cell_group__WEBPACK_IMPORTED_MODULE_7__["default"], _checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], _checkbox_group__WEBPACK_IMPORTED_MODULE_9__["default"], _circle__WEBPACK_IMPORTED_MODULE_10__["default"], _col__WEBPACK_IMPORTED_MODULE_11__["default"], _collapse__WEBPACK_IMPORTED_MODULE_12__["default"], _collapse_item__WEBPACK_IMPORTED_MODULE_13__["default"], _contact_card__WEBPACK_IMPORTED_MODULE_14__["default"], _contact_edit__WEBPACK_IMPORTED_MODULE_15__["default"], _contact_list__WEBPACK_IMPORTED_MODULE_16__["default"], _count_down__WEBPACK_IMPORTED_MODULE_17__["default"], _coupon__WEBPACK_IMPORTED_MODULE_18__["default"], _coupon_cell__WEBPACK_IMPORTED_MODULE_19__["default"], _coupon_list__WEBPACK_IMPORTED_MODULE_20__["default"], _datetime_picker__WEBPACK_IMPORTED_MODULE_21__["default"], _dialog__WEBPACK_IMPORTED_MODULE_22__["default"], _divider__WEBPACK_IMPORTED_MODULE_23__["default"], _dropdown_item__WEBPACK_IMPORTED_MODULE_24__["default"], _dropdown_menu__WEBPACK_IMPORTED_MODULE_25__["default"], _field__WEBPACK_IMPORTED_MODULE_26__["default"], _goods_action__WEBPACK_IMPORTED_MODULE_27__["default"], _goods_action_button__WEBPACK_IMPORTED_MODULE_28__["default"], _goods_action_icon__WEBPACK_IMPORTED_MODULE_29__["default"], _grid__WEBPACK_IMPORTED_MODULE_30__["default"], _grid_item__WEBPACK_IMPORTED_MODULE_31__["default"], _icon__WEBPACK_IMPORTED_MODULE_32__["default"], _image__WEBPACK_IMPORTED_MODULE_33__["default"], _image_preview__WEBPACK_IMPORTED_MODULE_34__["default"], _index_anchor__WEBPACK_IMPORTED_MODULE_35__["default"], _index_bar__WEBPACK_IMPORTED_MODULE_36__["default"], _info__WEBPACK_IMPORTED_MODULE_37__["default"], _list__WEBPACK_IMPORTED_MODULE_39__["default"], _loading__WEBPACK_IMPORTED_MODULE_40__["default"], _nav_bar__WEBPACK_IMPORTED_MODULE_42__["default"], _notice_bar__WEBPACK_IMPORTED_MODULE_43__["default"], _notify__WEBPACK_IMPORTED_MODULE_44__["default"], _number_keyboard__WEBPACK_IMPORTED_MODULE_45__["default"], _overlay__WEBPACK_IMPORTED_MODULE_46__["default"], _pagination__WEBPACK_IMPORTED_MODULE_47__["default"], _panel__WEBPACK_IMPORTED_MODULE_48__["default"], _password_input__WEBPACK_IMPORTED_MODULE_49__["default"], _picker__WEBPACK_IMPORTED_MODULE_50__["default"], _popup__WEBPACK_IMPORTED_MODULE_51__["default"], _progress__WEBPACK_IMPORTED_MODULE_52__["default"], _pull_refresh__WEBPACK_IMPORTED_MODULE_53__["default"], _radio__WEBPACK_IMPORTED_MODULE_54__["default"], _radio_group__WEBPACK_IMPORTED_MODULE_55__["default"], _rate__WEBPACK_IMPORTED_MODULE_56__["default"], _row__WEBPACK_IMPORTED_MODULE_57__["default"], _search__WEBPACK_IMPORTED_MODULE_58__["default"], _sidebar__WEBPACK_IMPORTED_MODULE_59__["default"], _sidebar_item__WEBPACK_IMPORTED_MODULE_60__["default"], _skeleton__WEBPACK_IMPORTED_MODULE_61__["default"], _sku__WEBPACK_IMPORTED_MODULE_62__["default"], _slider__WEBPACK_IMPORTED_MODULE_63__["default"], _step__WEBPACK_IMPORTED_MODULE_64__["default"], _stepper__WEBPACK_IMPORTED_MODULE_65__["default"], _steps__WEBPACK_IMPORTED_MODULE_66__["default"], _sticky__WEBPACK_IMPORTED_MODULE_67__["default"], _submit_bar__WEBPACK_IMPORTED_MODULE_68__["default"], _swipe__WEBPACK_IMPORTED_MODULE_69__["default"], _swipe_cell__WEBPACK_IMPORTED_MODULE_70__["default"], _swipe_item__WEBPACK_IMPORTED_MODULE_71__["default"], _switch__WEBPACK_IMPORTED_MODULE_72__["default"], _switch_cell__WEBPACK_IMPORTED_MODULE_73__["default"], _tab__WEBPACK_IMPORTED_MODULE_74__["default"], _tabbar__WEBPACK_IMPORTED_MODULE_75__["default"], _tabbar_item__WEBPACK_IMPORTED_MODULE_76__["default"], _tabs__WEBPACK_IMPORTED_MODULE_77__["default"], _tag__WEBPACK_IMPORTED_MODULE_78__["default"], _toast__WEBPACK_IMPORTED_MODULE_79__["default"], _tree_select__WEBPACK_IMPORTED_MODULE_80__["default"], _uploader__WEBPACK_IMPORTED_MODULE_81__["default"]];

var install = function install(Vue) {
  components.forEach(function (Component) {
    Vue.use(Component);
  });
};
/* istanbul ignore if */


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ __webpack_exports__["default"] = ({
  install: install,
  version: version
});

/***/ }),

/***/ "./node_modules/vant/es/info/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/info/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  var dot = props.dot,
      info = props.info;
  var showInfo = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(info) && info !== '';

  if (!dot && !showInfo) {
    return;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      dot: dot
    })
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [dot ? '' : props.info]);
}

Info.props = {
  dot: Boolean,
  info: [Number, String]
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Info));

/***/ }),

/***/ "./node_modules/vant/es/lazyload/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-lazyload */ "./node_modules/vue-lazyload/vue-lazyload.js");
/* harmony import */ var vue_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_lazyload__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (vue_lazyload__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/vant/es/list/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/list/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/style */ "./node_modules/vant/es/utils/dom/style.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('list'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_2__["BindEventMixin"])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_3__["getScrollEventTarget"])(this.$el);
    }

    bind(this.scroller, 'scroll', this.check);
  })],
  model: {
    prop: 'loading'
  },
  props: {
    error: Boolean,
    loading: Boolean,
    finished: Boolean,
    errorText: String,
    loadingText: String,
    finishedText: String,
    immediateCheck: {
      type: Boolean,
      default: true
    },
    offset: {
      type: Number,
      default: 300
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  mounted: function mounted() {
    if (this.immediateCheck) {
      this.check();
    }
  },
  watch: {
    loading: 'check',
    finished: 'check'
  },
  methods: {
    check: function check() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.loading || _this.finished || _this.error) {
          return;
        }

        var el = _this.$el,
            scroller = _this.scroller,
            offset = _this.offset,
            direction = _this.direction;
        var scrollerRect;

        if (scroller.getBoundingClientRect) {
          scrollerRect = scroller.getBoundingClientRect();
        } else {
          scrollerRect = {
            top: 0,
            bottom: scroller.innerHeight
          };
        }

        var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
        /* istanbul ignore next */

        if (!scrollerHeight || Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_1__["isHidden"])(el)) {
          return false;
        }

        var isReachEdge = false;

        var placeholderRect = _this.$refs.placeholder.getBoundingClientRect();

        if (direction === 'up') {
          isReachEdge = placeholderRect.top - scrollerRect.top <= offset;
        } else {
          isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
        }

        if (isReachEdge) {
          _this.$emit('input', true);

          _this.$emit('load');
        }
      });
    },
    clickErrorText: function clickErrorText() {
      this.$emit('update:error', false);
      this.check();
    }
  },
  render: function render() {
    var h = arguments[0];
    var Placeholder = h("div", {
      "ref": "placeholder",
      "class": bem('placeholder')
    });
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "feed",
        "aria-busy": this.loading
      }
    }, [this.direction === 'down' ? this.slots() : Placeholder, this.loading && h("div", {
      "class": bem('loading'),
      "key": "loading"
    }, [this.slots('loading') || h(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "size": "16"
      }
    }, [this.loadingText || t('loading')])]), this.finished && this.finishedText && h("div", {
      "class": bem('finished-text')
    }, [this.finishedText]), this.error && this.errorText && h("div", {
      "on": {
        "click": this.clickErrorText
      },
      "class": bem('error-text')
    }, [this.errorText]), this.direction === 'up' ? this.slots() : Placeholder]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/loading/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/loading/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(props.textSize)
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: _utils_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Loading));

/***/ }),

/***/ "./node_modules/vant/es/locale/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/locale/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_deep_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deep-assign */ "./node_modules/vant/es/utils/deep-assign.js");
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/zh-CN */ "./node_modules/vant/es/locale/lang/zh-CN.js");



var proto = vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype;
var defineReactive = vue__WEBPACK_IMPORTED_MODULE_0__["default"].util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': _lang_zh_CN__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(_utils_deep_assign__WEBPACK_IMPORTED_MODULE_1__["deepAssign"])(proto.$vantMessages, messages);
  }
});

/***/ }),

/***/ "./node_modules/vant/es/locale/lang/zh-CN.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/locale/lang/zh-CN.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/bind-event.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/mixins/bind-event.js ***!
  \***************************************************/
/*! exports provided: BindEventMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindEventMixin", function() { return BindEventMixin; });
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__["on"], true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, _utils_dom_event__WEBPACK_IMPORTED_MODULE_0__["off"], false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/checkbox.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/mixins/checkbox.js ***!
  \*************************************************/
/*! exports provided: CheckboxMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxMixin", function() { return CheckboxMixin; });
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/**
 * Common part of Checkbox & Radio
 */



var CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [Object(_relation__WEBPACK_IMPORTED_MODULE_1__["ChildrenMixin"])(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      }
    },
    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.isDisabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      }
    },
    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(_icon__WEBPACK_IMPORTED_MODULE_0__["default"], {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }])
      }, [slots()]);
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addUnit"])(this.iconSize)
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/click-outside.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/mixins/click-outside.js ***!
  \******************************************************/
/*! exports provided: ClickOutsideMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideMixin", function() { return ClickOutsideMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/**
 * Listen to click outside event
 */


var ClickOutsideMixin = function ClickOutsideMixin(config) {
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    props: {
      closeOnClickOutside: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      var _this = this;

      var clickOutsideHandler = function clickOutsideHandler(event) {
        if (_this.closeOnClickOutside && !_this.$el.contains(event.target)) {
          _this[config.method]();
        }
      };

      return {
        clickOutsideHandler: clickOutsideHandler
      };
    },
    mounted: function mounted() {
      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"])(document, config.event, this.clickOutsideHandler);
    },
    beforeDestroy: function beforeDestroy() {
      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["off"])(document, config.event, this.clickOutsideHandler);
    }
  });
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/close-on-popstate.js":
/*!**********************************************************!*\
  !*** ./node_modules/vant/es/mixins/close-on-popstate.js ***!
  \**********************************************************/
/*! exports provided: CloseOnPopstateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseOnPopstateMixin", function() { return CloseOnPopstateMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _bind_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bind-event */ "./node_modules/vant/es/mixins/bind-event.js");



var CloseOnPopstateMixin = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  mixins: [Object(_bind_event__WEBPACK_IMPORTED_MODULE_2__["BindEventMixin"])(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["on"] : _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["off"];
        action(window, 'popstate', this.close);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/context.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/mixins/popup/context.js ***!
  \******************************************************/
/*! exports provided: context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/mixins/popup/index.js ***!
  \****************************************************/
/*! exports provided: PopupMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMixin", function() { return PopupMixin; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/vant/es/mixins/popup/context.js");
/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portal */ "./node_modules/vant/es/mixins/portal.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay */ "./node_modules/vant/es/mixins/popup/overlay.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");






var PopupMixin = {
  mixins: [_touch__WEBPACK_IMPORTED_MODULE_1__["TouchMixin"], Object(_portal__WEBPACK_IMPORTED_MODULE_2__["PortalMixin"])({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        Object(_overlay__WEBPACK_IMPORTED_MODULE_4__["updateOverlay"])();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: 'renderOverlay'
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        _context__WEBPACK_IMPORTED_MODULE_0__["context"].zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["on"])(document, 'touchstart', this.touchStart);
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["on"])(document, 'touchmove', this.onTouchMove);

        if (!_context__WEBPACK_IMPORTED_MODULE_0__["context"].lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        _context__WEBPACK_IMPORTED_MODULE_0__["context"].lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        _context__WEBPACK_IMPORTED_MODULE_0__["context"].lockCount--;
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["off"])(document, 'touchstart', this.touchStart);
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["off"])(document, 'touchmove', this.onTouchMove);

        if (!_context__WEBPACK_IMPORTED_MODULE_0__["context"].lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      Object(_overlay__WEBPACK_IMPORTED_MODULE_4__["closeOverlay"])(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_5__["getScrollEventTarget"])(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["preventDefault"])(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.$isServer || !this.value) {
        return;
      }

      this.$nextTick(function () {
        _this.updateZIndex(_this.overlay ? 1 : 0);

        if (_this.overlay) {
          Object(_overlay__WEBPACK_IMPORTED_MODULE_4__["openOverlay"])(_this, {
            zIndex: _context__WEBPACK_IMPORTED_MODULE_0__["context"].zIndex++,
            duration: _this.duration,
            className: _this.overlayClass,
            customStyle: _this.overlayStyle
          });
        } else {
          Object(_overlay__WEBPACK_IMPORTED_MODULE_4__["closeOverlay"])(_this);
        }
      });
    },
    updateZIndex: function updateZIndex(value) {
      if (value === void 0) {
        value = 0;
      }

      this.$el.style.zIndex = ++_context__WEBPACK_IMPORTED_MODULE_0__["context"].zIndex + value;
    }
  }
};

/***/ }),

/***/ "./node_modules/vant/es/mixins/popup/overlay.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/mixins/popup/overlay.js ***!
  \******************************************************/
/*! exports provided: updateOverlay, openOverlay, closeOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOverlay", function() { return updateOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openOverlay", function() { return openOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeOverlay", function() { return closeOverlay; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../overlay */ "./node_modules/vant/es/overlay/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/vant/es/mixins/popup/context.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functional */ "./node_modules/vant/es/utils/functional.js");




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (_context__WEBPACK_IMPORTED_MODULE_2__["context"].top) {
    var vm = _context__WEBPACK_IMPORTED_MODULE_2__["context"].top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay) {
    overlay = Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["mount"])(_overlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (_context__WEBPACK_IMPORTED_MODULE_2__["context"].top) {
    var _context$top = _context__WEBPACK_IMPORTED_MODULE_2__["context"].top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay.$el, el);
    } else {
      document.body.appendChild(overlay.$el);
    }

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!_context__WEBPACK_IMPORTED_MODULE_2__["context"].stack.some(function (item) {
    return item.vm === vm;
  })) {
    _context__WEBPACK_IMPORTED_MODULE_2__["context"].stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = _context__WEBPACK_IMPORTED_MODULE_2__["context"].stack;

  if (stack.length) {
    if (_context__WEBPACK_IMPORTED_MODULE_2__["context"].top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      _context__WEBPACK_IMPORTED_MODULE_2__["context"].stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/portal.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/mixins/portal.js ***!
  \***********************************************/
/*! exports provided: PortalMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalMixin", function() { return PortalMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var afterPortal = _ref.afterPortal;
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/relation.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/mixins/relation.js ***!
  \*************************************************/
/*! exports provided: ChildrenMixin, ParentMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenMixin", function() { return ChildrenMixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentMixin", function() { return ParentMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}

/***/ }),

/***/ "./node_modules/vant/es/mixins/slots.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/mixins/slots.js ***!
  \**********************************************/
/*! exports provided: SlotsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotsMixin", function() { return SlotsMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/mixins/touch.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/mixins/touch.js ***!
  \**********************************************/
/*! exports provided: TouchMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchMixin", function() { return TouchMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/nav-bar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/nav-bar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");




 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('nav-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_BOTTOM"]] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [h("div", {
    "class": bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "class": bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || _utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(NavBar));

/***/ }),

/***/ "./node_modules/vant/es/notice-bar/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/notice-bar/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('notice-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    text: String,
    mode: String,
    color: String,
    leftIcon: String,
    wrapable: Boolean,
    background: String,
    delay: {
      type: [Number, String],
      default: 1
    },
    scrollable: {
      type: Boolean,
      default: true
    },
    speed: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      wrapWidth: 0,
      firstRound: true,
      duration: 0,
      offsetWidth: 0,
      showNoticeBar: true,
      animationClass: ''
    };
  },
  watch: {
    text: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          var _this$$refs = _this.$refs,
              wrap = _this$$refs.wrap,
              content = _this$$refs.content;

          if (!wrap || !content) {
            return;
          }

          var wrapWidth = wrap.getBoundingClientRect().width;
          var offsetWidth = content.getBoundingClientRect().width;

          if (_this.scrollable && offsetWidth > wrapWidth) {
            _this.wrapWidth = wrapWidth;
            _this.offsetWidth = offsetWidth;
            _this.duration = offsetWidth / _this.speed;
            _this.animationClass = bem('play');
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    onClickIcon: function onClickIcon(event) {
      if (this.mode === 'closeable') {
        this.showNoticeBar = false;
        this.$emit('close', event);
      }
    },
    onAnimationEnd: function onAnimationEnd() {
      var _this2 = this;

      this.firstRound = false;
      this.$nextTick(function () {
        _this2.duration = (_this2.offsetWidth + _this2.wrapWidth) / _this2.speed;
        _this2.animationClass = bem('play--infinite');
      });
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var slots = this.slots,
        mode = this.mode,
        leftIcon = this.leftIcon,
        onClickIcon = this.onClickIcon;
    var barStyle = {
      color: this.color,
      background: this.background
    };
    var contentStyle = {
      paddingLeft: this.firstRound ? 0 : this.wrapWidth + 'px',
      animationDelay: (this.firstRound ? this.delay : 0) + 's',
      animationDuration: this.duration + 's'
    };

    function LeftIcon() {
      var slot = slots('left-icon');

      if (slot) {
        return slot;
      }

      if (leftIcon) {
        return h(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          "class": bem('left-icon'),
          "attrs": {
            "name": leftIcon
          }
        });
      }
    }

    function RightIcon() {
      var slot = slots('right-icon');

      if (slot) {
        return slot;
      }

      var iconName = mode === 'closeable' ? 'cross' : mode === 'link' ? 'arrow' : '';

      if (iconName) {
        return h(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          "class": bem('right-icon'),
          "attrs": {
            "name": iconName
          },
          "on": {
            "click": onClickIcon
          }
        });
      }
    }

    return h("div", {
      "attrs": {
        "role": "alert"
      },
      "directives": [{
        name: "show",
        value: this.showNoticeBar
      }],
      "class": bem({
        wrapable: this.wrapable
      }),
      "style": barStyle,
      "on": {
        "click": function click(event) {
          _this3.$emit('click', event);
        }
      }
    }, [LeftIcon(), h("div", {
      "ref": "wrap",
      "class": bem('wrap'),
      "attrs": {
        "role": "marquee"
      }
    }, [h("div", {
      "ref": "content",
      "class": [bem('content'), this.animationClass, {
        'van-ellipsis': !this.scrollable && !this.wrapable
      }],
      "style": contentStyle,
      "on": {
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [this.slots() || this.text])]), RightIcon()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/notify/Notify.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/notify/Notify.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popup */ "./node_modules/vant/es/popup/index.js");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('notify'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Notify(h, props, slots, ctx) {
  var style = {
    color: props.color,
    background: props.background
  };
  return h(_popup__WEBPACK_IMPORTED_MODULE_6__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "attrs": {
      "value": props.value,
      "position": "top",
      "overlay": false,
      "lockScroll": false
    },
    "style": style,
    "class": [bem([props.type]), props.className]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["inherit"])(ctx, true)]), [props.message]);
}

Notify.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _mixins_popup__WEBPACK_IMPORTED_MODULE_5__["PopupMixin"].props, {
  background: String,
  className: null,
  message: [Number, String],
  getContainer: [String, Function],
  type: {
    type: String,
    default: 'danger'
  },
  color: {
    type: String,
    default: _utils_constant__WEBPACK_IMPORTED_MODULE_3__["WHITE"]
  },
  duration: {
    type: Number,
    default: 3000
  }
});
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Notify));

/***/ }),

/***/ "./node_modules/vant/es/notify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/notify/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notify */ "./node_modules/vant/es/notify/Notify.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");






var timer;
var instance;

function parseOptions(message) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isObj"])(message) ? message : {
    message: message
  };
}

function Notify(options) {
  /* istanbul ignore if */
  if (_utils__WEBPACK_IMPORTED_MODULE_4__["isServer"]) {
    return;
  }

  if (!instance) {
    instance = Object(_utils_functional__WEBPACK_IMPORTED_MODULE_5__["mount"])(_Notify__WEBPACK_IMPORTED_MODULE_2__["default"], {
      on: {
        click: function click(event) {
          if (instance.onClick) {
            instance.onClick(event);
          }
        },
        close: function close() {
          if (instance.onClose) {
            instance.onClose();
          }
        },
        opened: function opened() {
          if (instance.onOpened) {
            instance.onOpened();
          }
        }
      }
    });
  }

  options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Notify.currentOptions, {}, parseOptions(options));

  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, options);

  clearTimeout(timer);

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration);
  }

  return instance;
}

function defaultOptions() {
  return {
    type: 'danger',
    value: true,
    message: '',
    color: _utils_constant__WEBPACK_IMPORTED_MODULE_3__["WHITE"],
    background: undefined,
    duration: 3000,
    className: '',
    onClose: null,
    onClick: null,
    onOpened: null
  };
}

Notify.clear = function () {
  if (instance) {
    instance.value = false;
  }
};

Notify.currentOptions = defaultOptions();

Notify.setDefaultOptions = function (options) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(Notify.currentOptions, options);
};

Notify.resetDefaultOptions = function () {
  Notify.currentOptions = defaultOptions();
};

Notify.install = function () {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(_Notify__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$notify = Notify;
/* harmony default export */ __webpack_exports__["default"] = (Notify);

/***/ }),

/***/ "./node_modules/vant/es/number-keyboard/Key.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/number-keyboard/Key.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('key'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_1__["TouchMixin"]],
  props: {
    type: String,
    text: [Number, String],
    theme: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    className: function className() {
      var classNames = this.theme.slice(0);

      if (this.active) {
        classNames.push('active');
      }

      if (this.type) {
        classNames.push(this.type);
      }

      return bem(classNames);
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);
      this.active = true;
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);

      if (this.direction) {
        this.active = false;
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (this.active) {
        this.active = false;
        this.$emit('press', this.text, this.type);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("i", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": [_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER"], this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('default') || this.text]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/number-keyboard/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/number-keyboard/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Key */ "./node_modules/vant/es/number-keyboard/Key.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('number-keyboard'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var CLOSE_KEY_THEME = ['blue', 'big'];
var DELETE_KEY_THEME = ['delete', 'big', 'gray'];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__["BindEventMixin"])(function (bind) {
    if (this.hideOnClickOutside) {
      bind(document.body, 'touchstart', this.onBlur);
    }
  })],
  model: {
    event: 'update:value'
  },
  props: {
    show: Boolean,
    title: String,
    closeButtonText: String,
    deleteButtonText: String,
    safeAreaInsetBottom: Boolean,
    theme: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: ''
    },
    extraKey: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String],
      default: Number.MAX_VALUE
    },
    zIndex: {
      type: Number,
      default: 100
    },
    transition: {
      type: Boolean,
      default: true
    },
    showDeleteKey: {
      type: Boolean,
      default: true
    },
    hideOnClickOutside: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show: function show() {
      if (!this.transition) {
        this.$emit(this.show ? 'show' : 'hide');
      }
    }
  },
  computed: {
    keys: function keys() {
      var keys = [];

      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }

      switch (this.theme) {
        case 'default':
          keys.push({
            text: this.extraKey,
            theme: ['gray']
          }, {
            text: 0
          }, {
            text: this.deleteText,
            theme: ['gray'],
            type: 'delete'
          });
          break;

        case 'custom':
          keys.push({
            text: 0,
            theme: ['middle']
          }, {
            text: this.extraKey
          });
          break;
      }

      return keys;
    },
    deleteText: function deleteText() {
      return this.deleteButtonText || t('delete');
    }
  },
  methods: {
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    onClose: function onClose() {
      this.$emit('close');
      this.onBlur();
    },
    onAnimationEnd: function onAnimationEnd() {
      this.$emit(this.show ? 'show' : 'hide');
    },
    onPress: function onPress(text, type) {
      if (text === '') {
        return;
      }

      var value = this.value;

      if (type === 'delete') {
        this.$emit('delete');
        this.$emit('update:value', value.slice(0, value.length - 1));
      } else if (type === 'close') {
        this.onClose();
      } else if (value.length < this.maxlength) {
        this.$emit('input', text);
        this.$emit('update:value', value + text);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var title = this.title,
        theme = this.theme,
        onPress = this.onPress,
        closeButtonText = this.closeButtonText;
    var titleLeftSlot = this.slots('title-left');
    var showTitleClose = closeButtonText && theme === 'default';
    var showTitle = title || showTitleClose || titleLeftSlot;
    var Title = showTitle && h("div", {
      "class": [bem('title'), _utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_TOP"]]
    }, [titleLeftSlot && h("span", {
      "class": bem('title-left')
    }, [titleLeftSlot]), title && h("span", [title]), showTitleClose && h("span", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('close'),
      "on": {
        "click": this.onClose
      }
    }, [closeButtonText])]);
    var Keys = this.keys.map(function (key) {
      return h(_Key__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "key": key.text,
        "attrs": {
          "text": key.text,
          "type": key.type,
          "theme": key.theme
        },
        "on": {
          "press": onPress
        }
      }, [key.type === 'delete' && _this.slots('delete')]);
    });
    var Sidebar = theme === 'custom' && h("div", {
      "class": bem('sidebar')
    }, [h(_Key__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "text": this.deleteText,
        "type": "delete",
        "theme": DELETE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    }, [this.slots('delete')]), h(_Key__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "text": closeButtonText,
        "type": "close",
        "theme": CLOSE_KEY_THEME
      },
      "on": {
        "press": onPress
      }
    })]);
    return h("transition", {
      "attrs": {
        "name": this.transition ? 'van-slide-up' : ''
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "style": {
        zIndex: this.zIndex
      },
      "class": bem([theme, {
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      }]),
      "on": {
        "touchstart": _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["stopPropagation"],
        "animationend": this.onAnimationEnd,
        "webkitAnimationEnd": this.onAnimationEnd
      }
    }, [Title, h("div", {
      "class": bem('body')
    }, [Keys, Sidebar])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/overlay/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/overlay/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");




 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_4__["preventDefault"])(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDef"])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx, true)]))]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: null,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Overlay));

/***/ }),

/***/ "./node_modules/vant/es/pagination/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/pagination/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('pagination'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function makePage(number, text, active) {
  return {
    number: number,
    text: text,
    active: active
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    prevText: String,
    nextText: String,
    forceEllipses: Boolean,
    value: {
      type: Number,
      default: 0
    },
    pageCount: {
      type: Number,
      default: 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'multi'
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    showPageSize: {
      type: Number,
      default: 5
    }
  },
  computed: {
    count: function count() {
      var count = this.pageCount || Math.ceil(this.totalItems / this.itemsPerPage);
      return Math.max(1, count);
    },
    pages: function pages() {
      var pages = [];
      var pageCount = this.count;

      if (this.mode !== 'multi') {
        return pages;
      } // Default page limits


      var startPage = 1;
      var endPage = pageCount;
      var isMaxSized = this.showPageSize !== undefined && this.showPageSize < pageCount; // recompute if showPageSize

      if (isMaxSized) {
        // Current page is displayed in the middle of the visible ones
        startPage = Math.max(this.value - Math.floor(this.showPageSize / 2), 1);
        endPage = startPage + this.showPageSize - 1; // Adjust if limit is exceeded

        if (endPage > pageCount) {
          endPage = pageCount;
          startPage = endPage - this.showPageSize + 1;
        }
      } // Add page number links


      for (var number = startPage; number <= endPage; number++) {
        var page = makePage(number, number, number === this.value);
        pages.push(page);
      } // Add links to move between page sets


      if (isMaxSized && this.showPageSize > 0 && this.forceEllipses) {
        if (startPage > 1) {
          var previousPageSet = makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }

        if (endPage < pageCount) {
          var nextPageSet = makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
      }

      return pages;
    }
  },
  watch: {
    value: {
      handler: function handler(page) {
        this.select(page || this.value);
      },
      immediate: true
    }
  },
  methods: {
    select: function select(page, emitChange) {
      page = Math.min(this.count, Math.max(1, page));

      if (this.value !== page) {
        this.$emit('input', page);

        if (emitChange) {
          this.$emit('change', page);
        }
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var value = this.value;
    var simple = this.mode !== 'multi';

    var onSelect = function onSelect(value) {
      return function () {
        _this.select(value, true);
      };
    };

    return h("ul", {
      "class": bem({
        simple: simple
      })
    }, [h("li", {
      "class": [bem('item', {
        disabled: value === 1
      }), bem('prev'), _utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER"]],
      "on": {
        "click": onSelect(value - 1)
      }
    }, [this.prevText || t('prev')]), this.pages.map(function (page) {
      return h("li", {
        "class": [bem('item', {
          active: page.active
        }), bem('page'), _utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER"]],
        "on": {
          "click": onSelect(page.number)
        }
      }, [page.text]);
    }), simple && h("li", {
      "class": bem('page-desc')
    }, [this.slots('pageDesc') || value + "/" + this.count]), h("li", {
      "class": [bem('item', {
        disabled: value === this.count
      }), bem('next'), _utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER"]],
      "on": {
        "click": onSelect(value + 1)
      }
    }, [this.nextText || t('next')])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/panel/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/panel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _cell_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cell-group */ "./node_modules/vant/es/cell-group/index.js");





 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('panel'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(_cell__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": bem('header-value')
      },
      "class": bem('header')
    }), h("div", {
      "class": bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [bem('footer'), _utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_TOP"]]
    }, [slots.footer()])];
  };

  return h(_cell_group__WEBPACK_IMPORTED_MODULE_5__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem(),
    "scopedSlots": {
      default: Content
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Panel));

/***/ }),

/***/ "./node_modules/vant/es/password-input/index.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/password-input/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('password-input'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function PasswordInput(h, props, slots, ctx) {
  var _ref;

  var info = props.errorInfo || props.info;
  var Points = [];

  for (var i = 0; i < props.length; i++) {
    var _class;

    var _char = props.value[i];
    var showBorder = i !== 0 && !props.gutter;
    var showCursor = props.focused && i === props.value.length;
    var style = void 0;

    if (i !== 0 && props.gutter) {
      style = {
        marginLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(props.gutter)
      };
    }

    Points.push(h("li", {
      "class": (_class = {}, _class[_utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_LEFT"]] = showBorder, _class),
      "style": style
    }, [props.mask ? h("i", {
      "style": {
        visibility: _char ? 'visible' : 'hidden'
      }
    }) : _char, showCursor && h("div", {
      "class": bem('cursor')
    })]));
  }

  return h("div", {
    "class": bem()
  }, [h("ul", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem('security'), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_SURROUND"]] = !props.gutter, _ref)],
    "on": {
      "touchstart": function touchstart(event) {
        event.stopPropagation();
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'focus', event);
      }
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [Points]), info && h("div", {
    "class": bem(props.errorInfo ? 'error-info' : 'info')
  }, [info])]);
}

PasswordInput.props = {
  info: String,
  gutter: [Number, String],
  focused: Boolean,
  errorInfo: String,
  mask: {
    type: Boolean,
    default: true
  },
  value: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: 6
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(PasswordInput));

/***/ }),

/***/ "./node_modules/vant/es/picker/PickerColumn.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/picker/PickerColumn.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_deep_clone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deep-clone */ "./node_modules/vant/es/utils/deep-clone.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");






var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('picker-column'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isObj"])(option) && option.disabled;
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_5__["TouchMixin"]],
  props: {
    valueKey: String,
    allowHtml: Boolean,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: Object(_utils_deep_clone__WEBPACK_IMPORTED_MODULE_1__["deepClone"])(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    },
    baseOffset: function baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.offset = Math.min(0, translateY - this.baseOffset);
        this.startOffset = this.offset;
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_4__["preventDefault"])(event, true);
      }

      this.offset = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      var index = this.getIndexByOffset(this.offset);
      this.moving = false;
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      if (this.moving) {
        return;
      }

      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isObj"])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_3__["range"])(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    },
    genOptions: function genOptions() {
      var _this2 = this;

      var h = this.$createElement;
      var optionStyle = {
        height: this.itemHeight + "px"
      };
      return this.options.map(function (option, index) {
        var text = _this2.getOptionText(option);

        var data = {
          style: optionStyle,
          class: ['van-ellipsis', bem('item', {
            disabled: isOptionDisabled(option),
            selected: index === _this2.currentIndex
          })],
          on: {
            click: function click() {
              _this2.onClickItem(index);
            }
          }
        };

        if (_this2.allowHtml) {
          data.domProps = {
            innerHTML: text
          };
        }

        return h("li", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{}, data]), [_this2.allowHtml ? '' : text]);
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + this.baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: this.itemHeight + "px"
    };
    return h("div", {
      "class": [bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.genOptions()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/picker/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/picker/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _utils_deep_clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deep-clone */ "./node_modules/vant/es/utils/deep-clone.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./node_modules/vant/es/picker/shared.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");
/* harmony import */ var _PickerColumn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PickerColumn */ "./node_modules/vant/es/picker/PickerColumn.js");









var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('picker'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _shared__WEBPACK_IMPORTED_MODULE_4__["pickerProps"], {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: 'setColumns'
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, Object(_utils_deep_clone__WEBPACK_IMPORTED_MODULE_3__["deepClone"])(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": [_utils_constant__WEBPACK_IMPORTED_MODULE_5__["BORDER_TOP_BOTTOM"], bem('toolbar')]
    }, [this.slots() || [h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', bem('title')]
    }, [this.title]), h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": bem()
    }, [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(_loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      "class": bem('loading'),
      "attrs": {
        "color": _utils_constant__WEBPACK_IMPORTED_MODULE_5__["BLUE"]
      }
    }) : h(), h("div", {
      "class": bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"]
      }
    }, [columns.map(function (item, index) {
      return h(_PickerColumn__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "attrs": {
          "valueKey": _this4.valueKey,
          "allowHtml": _this4.allowHtml,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": [_utils_constant__WEBPACK_IMPORTED_MODULE_5__["BORDER_UNSET_TOP_BOTTOM"], bem('frame')],
      "style": frameStyle
    })]), this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/picker/shared.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/picker/shared.js ***!
  \***********************************************/
/*! exports provided: pickerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickerProps", function() { return pickerProps; });
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  allowHtml: {
    type: Boolean,
    default: true
  },
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};

/***/ }),

/***/ "./node_modules/vant/es/popup/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/popup/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('popup'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_popup__WEBPACK_IMPORTED_MODULE_1__["PopupMixin"]],
  props: {
    round: Boolean,
    duration: Number,
    closeable: Boolean,
    transition: String,
    safeAreaInsetBottom: Boolean,
    closeIcon: {
      type: String,
      default: 'cross'
    },
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": bem((_bem = {
        round: round
      }, _bem[position] = position, _bem['safe-area-inset-bottom'] = this.safeAreaInsetBottom, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots(), this.closeable && h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "name": this.closeIcon
      },
      "class": bem('close-icon'),
      "on": {
        "click": this.close
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/progress/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/progress/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('progress'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    inactive: Boolean,
    pivotText: String,
    pivotColor: String,
    strokeWidth: [String, Number],
    percentage: {
      type: Number,
      required: true,
      validator: function validator(value) {
        return value >= 0 && value <= 100;
      }
    },
    showPivot: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["BLUE"]
    },
    textColor: {
      type: String,
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["WHITE"]
    }
  },
  data: function data() {
    return {
      pivotWidth: 0,
      progressWidth: 0
    };
  },
  mounted: function mounted() {
    this.setWidth();
  },
  watch: {
    showPivot: 'setWidth',
    pivotText: 'setWidth'
  },
  methods: {
    setWidth: function setWidth() {
      var _this = this;

      this.$nextTick(function () {
        _this.progressWidth = _this.$el.offsetWidth;
        _this.pivotWidth = _this.$refs.pivot ? _this.$refs.pivot.offsetWidth : 0;
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    var pivotText = this.pivotText,
        percentage = this.percentage;
    var text = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(pivotText) ? pivotText : percentage + '%';
    var showPivot = this.showPivot && text;
    var background = this.inactive ? '#cacaca' : this.color;
    var pivotStyle = {
      color: this.textColor,
      left: (this.progressWidth - this.pivotWidth) * percentage / 100 + "px",
      background: this.pivotColor || background
    };
    var portionStyle = {
      background: background,
      width: this.progressWidth * percentage / 100 + 'px'
    };
    var wrapperStyle;

    if (this.strokeWidth) {
      wrapperStyle = {
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(this.strokeWidth)
      };
    }

    return h("div", {
      "class": bem(),
      "style": wrapperStyle
    }, [h("span", {
      "class": bem('portion'),
      "style": portionStyle
    }, [showPivot && h("span", {
      "ref": "pivot",
      "style": pivotStyle,
      "class": bem('pivot')
    }, [text])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/pull-refresh/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/pull-refresh/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('pull-refresh'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

var TEXT_STATUS = ['pulling', 'loosing', 'success'];
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_2__["TouchMixin"]],
  props: {
    disabled: Boolean,
    successText: String,
    pullingText: String,
    loosingText: String,
    loadingText: String,
    value: {
      type: Boolean,
      required: true
    },
    successDuration: {
      type: Number,
      default: 500
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 50
    }
  },
  data: function data() {
    return {
      status: 'normal',
      distance: 0,
      duration: 0
    };
  },
  computed: {
    untouchable: function untouchable() {
      return this.status === 'loading' || this.status === 'success' || this.disabled;
    }
  },
  watch: {
    value: function value(loading) {
      var _this = this;

      this.duration = this.animationDuration;

      if (!loading && this.successText) {
        this.status = 'success';
        setTimeout(function () {
          _this.setStatus(0);
        }, this.successDuration);
      } else {
        this.setStatus(loading ? this.headHeight : 0, loading);
      }
    }
  },
  mounted: function mounted() {
    this.scrollEl = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_3__["getScrollEventTarget"])(this.$el);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (!this.untouchable && this.getCeiling()) {
        this.duration = 0;
        this.touchStart(event);
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (this.untouchable) {
        return;
      }

      this.touchMove(event);

      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0;
        this.startY = event.touches[0].clientY;
        this.deltaY = 0;
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.setStatus(this.ease(this.deltaY));
          Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["preventDefault"])(event);
        }
      }
    },
    onTouchEnd: function onTouchEnd() {
      var _this2 = this;

      if (!this.untouchable && this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;

        if (this.status === 'loosing') {
          this.setStatus(this.headHeight, true);
          this.$emit('input', true); // ensure value change can be watched

          this.$nextTick(function () {
            _this2.$emit('refresh');
          });
        } else {
          this.setStatus(0);
        }
      }
    },
    getCeiling: function getCeiling() {
      this.ceiling = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_3__["getScrollTop"])(this.scrollEl) === 0;
      return this.ceiling;
    },
    ease: function ease(distance) {
      var headHeight = this.headHeight;
      return Math.round(distance < headHeight ? distance : distance < headHeight * 2 ? headHeight + (distance - headHeight) / 2 : headHeight * 1.5 + (distance - headHeight * 2) / 4);
    },
    setStatus: function setStatus(distance, isLoading) {
      this.distance = distance;
      var status = isLoading ? 'loading' : distance === 0 ? 'normal' : distance < this.headHeight ? 'pulling' : 'loosing';

      if (status !== this.status) {
        this.status = status;
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var status = this.status,
        distance = this.distance;
    var text = this[status + "Text"] || t(status);
    var style = {
      transitionDuration: this.duration + "ms",
      transform: this.distance ? "translate3d(0," + this.distance + "px, 0)" : ''
    };
    var Status = this.slots(status, {
      distance: distance
    }) || [TEXT_STATUS.indexOf(status) !== -1 && h("div", {
      "class": bem('text')
    }, [text]), status === 'loading' && h(_loading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "size": "16"
      }
    }, [text])];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('track'),
      "style": style,
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("div", {
      "class": bem('head')
    }, [Status]), this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/radio-group/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/radio-group/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('radio-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanRadio')],
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/radio/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/radio/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/checkbox */ "./node_modules/vant/es/mixins/checkbox.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('radio'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_checkbox__WEBPACK_IMPORTED_MODULE_1__["CheckboxMixin"])({
    bem: bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/rate/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/rate/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('rate'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getRateStatus(value, index, allowHalf) {
  if (value >= index) {
    return 'full';
  }

  if (value + 0.5 >= index && allowHalf) {
    return 'half';
  }

  return 'void';
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_2__["TouchMixin"]],
  props: {
    size: [Number, String],
    gutter: [Number, String],
    readonly: Boolean,
    disabled: Boolean,
    allowHalf: Boolean,
    value: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: 'star'
    },
    voidIcon: {
      type: String,
      default: 'star-o'
    },
    color: {
      type: String,
      default: '#ffd21e'
    },
    voidColor: {
      type: String,
      default: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      default: '#bdbdbd'
    },
    count: {
      type: Number,
      default: 5
    },
    touchable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    list: function list() {
      var list = [];

      for (var i = 1; i <= this.count; i++) {
        list.push(getRateStatus(this.value, i, this.allowHalf));
      }

      return list;
    },
    sizeWithUnit: function sizeWithUnit() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(this.size);
    },
    gutterWithUnit: function gutterWithUnit() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(this.gutter);
    }
  },
  methods: {
    select: function select(index) {
      if (!this.disabled && !this.readonly && index !== this.value) {
        this.$emit('input', index);
        this.$emit('change', index);
      }
    },
    onTouchStart: function onTouchStart(event) {
      var _this = this;

      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchStart(event);
      var rects = this.$refs.items.map(function (item) {
        return item.getBoundingClientRect();
      });
      var ranges = [];
      rects.forEach(function (rect, index) {
        if (_this.allowHalf) {
          ranges.push({
            score: index + 0.5,
            left: rect.left
          }, {
            score: index + 1,
            left: rect.left + rect.width / 2
          });
        } else {
          ranges.push({
            score: index + 1,
            left: rect.left
          });
        }
      });
      this.ranges = ranges;
    },
    onTouchMove: function onTouchMove(event) {
      if (this.readonly || this.disabled || !this.touchable) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["preventDefault"])(event);
        var clientX = event.touches[0].clientX;
        this.select(this.getScoreByPosition(clientX));
      }
    },
    getScoreByPosition: function getScoreByPosition(x) {
      for (var i = this.ranges.length - 1; i > 0; i--) {
        if (x > this.ranges[i].left) {
          return this.ranges[i].score;
        }
      }

      return this.allowHalf ? 0.5 : 1;
    },
    renderStar: function renderStar(status, index) {
      var _this2 = this;

      var h = this.$createElement;
      var icon = this.icon,
          color = this.color,
          count = this.count,
          voidIcon = this.voidIcon,
          disabled = this.disabled,
          voidColor = this.voidColor,
          disabledColor = this.disabledColor;
      var score = index + 1;
      var isFull = status === 'full';
      var isVoid = status === 'void';
      var style;

      if (this.gutterWithUnit && score !== count) {
        style = {
          paddingRight: this.gutterWithUnit
        };
      }

      return h("div", {
        "ref": "items",
        "refInFor": true,
        "key": index,
        "attrs": {
          "role": "radio",
          "tabindex": "0",
          "aria-setsize": count,
          "aria-posinset": score,
          "aria-checked": String(!isVoid)
        },
        "style": style,
        "class": bem('item')
      }, [h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isFull ? icon : voidIcon,
          "data-score": score,
          "color": disabled ? disabledColor : isFull ? color : voidColor
        },
        "class": bem('icon'),
        "on": {
          "click": function click() {
            _this2.select(score);
          }
        }
      }), this.allowHalf && h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "size": this.sizeWithUnit,
          "name": isVoid ? voidIcon : icon,
          "data-score": score - 0.5,
          "color": disabled ? disabledColor : isVoid ? voidColor : color
        },
        "class": bem('icon', 'half'),
        "on": {
          "click": function click() {
            _this2.select(score - 0.5);
          }
        }
      })]);
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem(),
      "attrs": {
        "tabindex": "0",
        "role": "radiogroup"
      },
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove
      }
    }, [this.list.map(function (status, index) {
      return _this3.renderStar(status, index);
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/row/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vant/es/row/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");


var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.$emit('click', event);
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var align = this.align,
        justify = this.justify;
    var flex = this.type === 'flex';
    var margin = "-" + Number(this.gutter) / 2 + "px";
    var style = this.gutter ? {
      marginLeft: margin,
      marginRight: margin
    } : {};
    return h(this.tag, {
      "style": style,
      "class": bem((_bem = {
        flex: flex
      }, _bem["align-" + align] = flex && align, _bem["justify-" + justify] = flex && justify, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/search/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/search/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../field */ "./node_modules/vant/es/field/index.js");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('search'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'input', '');
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'cancel');
    }

    return h("div", {
      "class": bem('action')
    }, [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel
      }
    }, [t('cancel')])]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, ctx.listeners, {
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_4__["preventDefault"])(event);
          Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'search', props.value);
        }

        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["emit"])(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx);
  delete inheritData.attrs;
  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": bem('content', props.shape)
  }, [Label(), h(_field__WEBPACK_IMPORTED_MODULE_5__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Search));

/***/ }),

/***/ "./node_modules/vant/es/sidebar-item/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/sidebar-item/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../info */ "./node_modules/vant/es/info/index.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sidebar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ChildrenMixin"])('vanSidebar')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_3__["routeProps"], {
    dot: Boolean,
    info: [Number, String],
    title: String,
    disabled: Boolean
  }),
  computed: {
    select: function select() {
      return this.index === +this.parent.activeKey;
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      this.$emit('click', this.index);
      this.parent.$emit('input', this.index);
      this.parent.$emit('change', this.index);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_3__["route"])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("a", {
      "class": bem({
        select: this.select,
        disabled: this.disabled
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('text')
    }, [this.title, h(_info__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      },
      "class": bem('info')
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sidebar/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/sidebar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('sidebar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanSidebar')],
  model: {
    prop: 'activeKey'
  },
  props: {
    activeKey: {
      type: [Number, String],
      default: 0
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/skeleton/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/skeleton/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('skeleton'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var DEFAULT_ROW_WIDTH = '100%';
var DEFAULT_LAST_ROW_WIDTH = '60%';

function Skeleton(h, props, slots, ctx) {
  if (!props.loading) {
    return slots.default && slots.default();
  }

  function Title() {
    if (props.title) {
      return h("h3", {
        "class": bem('title'),
        "style": {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(props.titleWidth)
        }
      });
    }
  }

  function Rows() {
    var Rows = [];
    var rowWidth = props.rowWidth;

    function getRowWidth(index) {
      if (rowWidth === DEFAULT_ROW_WIDTH && index === props.row - 1) {
        return DEFAULT_LAST_ROW_WIDTH;
      }

      if (Array.isArray(rowWidth)) {
        return rowWidth[index];
      }

      return rowWidth;
    }

    for (var i = 0; i < props.row; i++) {
      Rows.push(h("div", {
        "class": bem('row'),
        "style": {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(getRowWidth(i))
        }
      }));
    }

    return Rows;
  }

  function Avatar() {
    if (props.avatar) {
      var size = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(props.avatarSize);
      return h("div", {
        "class": bem('avatar', props.avatarShape),
        "style": {
          width: size,
          height: size
        }
      });
    }
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      animate: props.animate
    })
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [Avatar(), h("div", {
    "class": bem('content')
  }, [Title(), Rows()])]);
}

Skeleton.props = {
  title: Boolean,
  avatar: Boolean,
  row: {
    type: Number,
    default: 0
  },
  loading: {
    type: Boolean,
    default: true
  },
  animate: {
    type: Boolean,
    default: true
  },
  avatarSize: {
    type: String,
    default: '32px'
  },
  avatarShape: {
    type: String,
    default: 'round'
  },
  titleWidth: {
    type: [Number, String],
    default: '40%'
  },
  rowWidth: {
    type: [Number, String, Array],
    default: DEFAULT_ROW_WIDTH
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Skeleton));

/***/ }),

/***/ "./node_modules/vant/es/sku/Sku.js":
/*!*****************************************!*\
  !*** ./node_modules/vant/es/sku/Sku.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup */ "./node_modules/vant/es/popup/index.js");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toast */ "./node_modules/vant/es/toast/index.js");
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-preview */ "./node_modules/vant/es/image-preview/index.js");
/* harmony import */ var _components_SkuHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SkuHeader */ "./node_modules/vant/es/sku/components/SkuHeader.js");
/* harmony import */ var _components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SkuHeaderItem */ "./node_modules/vant/es/sku/components/SkuHeaderItem.js");
/* harmony import */ var _components_SkuRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SkuRow */ "./node_modules/vant/es/sku/components/SkuRow.js");
/* harmony import */ var _components_SkuRowItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SkuRowItem */ "./node_modules/vant/es/sku/components/SkuRowItem.js");
/* harmony import */ var _components_SkuStepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SkuStepper */ "./node_modules/vant/es/sku/components/SkuStepper.js");
/* harmony import */ var _components_SkuMessages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/SkuMessages */ "./node_modules/vant/es/sku/components/SkuMessages.js");
/* harmony import */ var _components_SkuActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/SkuActions */ "./node_modules/vant/es/sku/components/SkuActions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_skuHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/skuHelper */ "./node_modules/vant/es/sku/utils/skuHelper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./node_modules/vant/es/sku/constants.js");















var namespace = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["createNamespace"])('sku');
var createComponent = namespace[0],
    bem = namespace[1],
    t = namespace[2];
var QUOTA_LIMIT = _constants__WEBPACK_IMPORTED_MODULE_14__["LIMIT_TYPE"].QUOTA_LIMIT;
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    sku: Object,
    priceTag: String,
    goods: Object,
    value: Boolean,
    buyText: String,
    goodsId: [Number, String],
    hideStock: Boolean,
    addCartText: String,
    stepperTitle: String,
    getContainer: Function,
    hideQuotaText: Boolean,
    hideSelectedText: Boolean,
    resetStepperOnHide: Boolean,
    customSkuValidator: Function,
    closeOnClickOverlay: Boolean,
    disableStepperInput: Boolean,
    safeAreaInsetBottom: Boolean,
    resetSelectedSkuOnHide: Boolean,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    },
    initialSku: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    stockThreshold: {
      type: Number,
      default: 50
    },
    showSoldoutSku: {
      type: Boolean,
      default: true
    },
    showAddCartBtn: {
      type: Boolean,
      default: true
    },
    bodyOffsetTop: {
      type: Number,
      default: 200
    },
    messageConfig: {
      type: Object,
      default: function _default() {
        return {
          placeholderMap: {},
          uploadImg: function uploadImg() {
            return Promise.resolve();
          },
          uploadMaxSize: 5
        };
      }
    },
    customStepperConfig: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      selectedSku: {},
      selectedNum: 1,
      show: this.value
    };
  },
  watch: {
    show: function show(val) {
      this.$emit('input', val);

      if (!val) {
        this.$emit('sku-close', {
          selectedSkuValues: this.selectedSkuValues,
          selectedNum: this.selectedNum,
          selectedSkuComb: this.selectedSkuComb
        });

        if (this.resetStepperOnHide) {
          this.resetStepper();
        }

        if (this.resetSelectedSkuOnHide) {
          this.resetSelectedSku(this.skuTree);
        }
      }
    },
    value: function value(val) {
      this.show = val;
    },
    skuTree: 'resetSelectedSku',
    initialSku: function initialSku() {
      this.resetStepper();
      this.resetSelectedSku(this.skuTree);
    }
  },
  computed: {
    skuGroupClass: function skuGroupClass() {
      return ['van-sku-group-container', {
        'van-sku-group-container--hide-soldout': !this.showSoldoutSku
      }];
    },
    bodyStyle: function bodyStyle() {
      if (this.$isServer) {
        return;
      } // header高度82px, sku actions高度50px，如果改动了样式自己传下bodyOffsetTop调整下


      var maxHeight = window.innerHeight - this.bodyOffsetTop;
      return {
        maxHeight: maxHeight + 'px'
      };
    },
    isSkuCombSelected: function isSkuCombSelected() {
      return Object(_utils_skuHelper__WEBPACK_IMPORTED_MODULE_13__["isAllSelected"])(this.sku.tree, this.selectedSku);
    },
    isSkuEmpty: function isSkuEmpty() {
      return Object.keys(this.sku).length === 0;
    },
    hasSku: function hasSku() {
      return !this.sku.none_sku;
    },
    selectedSkuComb: function selectedSkuComb() {
      if (!this.hasSku) {
        return {
          id: this.sku.collection_id,
          price: Math.round(this.sku.price * 100),
          stock_num: this.sku.stock_num
        };
      }

      if (this.isSkuCombSelected) {
        return Object(_utils_skuHelper__WEBPACK_IMPORTED_MODULE_13__["getSkuComb"])(this.sku.list, this.selectedSku);
      }

      return null;
    },
    selectedSkuValues: function selectedSkuValues() {
      return Object(_utils_skuHelper__WEBPACK_IMPORTED_MODULE_13__["getSelectedSkuValues"])(this.skuTree, this.selectedSku);
    },
    price: function price() {
      if (this.selectedSkuComb) {
        return (this.selectedSkuComb.price / 100).toFixed(2);
      } // sku.price是一个格式化好的价格区间


      return this.sku.price;
    },
    originPrice: function originPrice() {
      if (this.selectedSkuComb && this.selectedSkuComb.origin_price) {
        return (this.selectedSkuComb.origin_price / 100).toFixed(2);
      }

      return this.sku.origin_price;
    },
    skuTree: function skuTree() {
      return this.sku.tree || [];
    },
    imageList: function imageList() {
      var imageList = [this.goods.picture];

      if (this.skuTree.length > 0) {
        this.skuTree.forEach(function (treeItem) {
          if (!treeItem.v) {
            return;
          }

          treeItem.v.forEach(function (vItem) {
            var img = vItem.imgUrl || vItem.img_url;

            if (img) {
              imageList.push(img);
            }
          });
        });
      }

      return imageList;
    },
    stock: function stock() {
      var stockNum = this.customStepperConfig.stockNum;

      if (stockNum !== undefined) {
        return stockNum;
      }

      if (this.selectedSkuComb) {
        return this.selectedSkuComb.stock_num;
      }

      return this.sku.stock_num;
    },
    stockText: function stockText() {
      var h = this.$createElement;
      var stockFormatter = this.customStepperConfig.stockFormatter;
      if (stockFormatter) return stockFormatter(this.stock);
      return [t('stock') + " ", h("span", {
        "class": bem('stock-num', {
          highlight: this.stock < this.stockThreshold
        })
      }, [this.stock]), " " + t('stockUnit')];
    },
    quotaText: function quotaText() {
      var _this$customStepperCo = this.customStepperConfig,
          quotaText = _this$customStepperCo.quotaText,
          hideQuotaText = _this$customStepperCo.hideQuotaText;
      if (hideQuotaText) return '';
      var text = '';

      if (quotaText) {
        text = quotaText;
      } else if (this.quota > 0) {
        text = t('quotaLimit', this.quota);
      }

      return text;
    },
    selectedText: function selectedText() {
      var _this = this;

      if (this.selectedSkuComb) {
        return t('selected') + " " + this.selectedSkuValues.map(function (item) {
          return item.name;
        }).join('；');
      }

      var unselected = this.skuTree.filter(function (item) {
        return _this.selectedSku[item.k_s] === _constants__WEBPACK_IMPORTED_MODULE_14__["UNSELECTED_SKU_VALUE_ID"];
      }).map(function (item) {
        return item.k;
      }).join('；');
      return t('select') + " " + unselected;
    }
  },
  created: function created() {
    var skuEventBus = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.skuEventBus = skuEventBus;
    skuEventBus.$on('sku:select', this.onSelect);
    skuEventBus.$on('sku:numChange', this.onNumChange);
    skuEventBus.$on('sku:previewImage', this.onPreviewImage);
    skuEventBus.$on('sku:overLimit', this.onOverLimit);
    skuEventBus.$on('sku:addCart', this.onAddCart);
    skuEventBus.$on('sku:buy', this.onBuy);
    this.resetStepper();
    this.resetSelectedSku(this.skuTree); // 组件初始化后的钩子，抛出skuEventBus

    this.$emit('after-sku-create', skuEventBus);
  },
  methods: {
    resetStepper: function resetStepper() {
      var skuStepper = this.$refs.skuStepper;
      var selectedNum = this.initialSku.selectedNum;
      var num = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isDef"])(selectedNum) ? selectedNum : 1;

      if (skuStepper) {
        skuStepper.setCurrentNum(num);
      } else {
        this.selectedNum = num;
      }
    },
    resetSelectedSku: function resetSelectedSku(skuTree) {
      var _this2 = this;

      this.selectedSku = {}; // 重置 selectedSku

      skuTree.forEach(function (item) {
        _this2.selectedSku[item.k_s] = _this2.initialSku[item.k_s] || _constants__WEBPACK_IMPORTED_MODULE_14__["UNSELECTED_SKU_VALUE_ID"];
      }); // 只有一个 sku 规格值时默认选中

      skuTree.forEach(function (item) {
        var key = item.k_s;
        var valueId = item.v[0].id;

        if (item.v.length === 1 && Object(_utils_skuHelper__WEBPACK_IMPORTED_MODULE_13__["isSkuChoosable"])(_this2.sku.list, _this2.selectedSku, {
          key: key,
          valueId: valueId
        })) {
          _this2.selectedSku[key] = valueId;
        }
      });
    },
    getSkuMessages: function getSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getMessages() : {};
    },
    getSkuCartMessages: function getSkuCartMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.getCartMessages() : {};
    },
    validateSkuMessages: function validateSkuMessages() {
      return this.$refs.skuMessages ? this.$refs.skuMessages.validateMessages() : '';
    },
    validateSku: function validateSku() {
      if (this.selectedNum === 0) {
        return t('unavailable');
      }

      if (this.isSkuCombSelected) {
        return this.validateSkuMessages();
      } // 自定义sku校验


      if (this.customSkuValidator) {
        var err = this.customSkuValidator(this);
        if (err) return err;
      }

      return t('selectSku');
    },
    onSelect: function onSelect(skuValue) {
      var _extends2, _extends3;

      // 点击已选中的sku时则取消选中
      this.selectedSku = this.selectedSku[skuValue.skuKeyStr] === skuValue.id ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.selectedSku, (_extends2 = {}, _extends2[skuValue.skuKeyStr] = _constants__WEBPACK_IMPORTED_MODULE_14__["UNSELECTED_SKU_VALUE_ID"], _extends2)) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.selectedSku, (_extends3 = {}, _extends3[skuValue.skuKeyStr] = skuValue.id, _extends3));
      this.$emit('sku-selected', {
        skuValue: skuValue,
        selectedSku: this.selectedSku,
        selectedSkuComb: this.selectedSkuComb
      });
    },
    onNumChange: function onNumChange(num) {
      this.selectedNum = num;
    },
    onPreviewImage: function onPreviewImage(indexImage) {
      var _this3 = this;

      var index = this.imageList.findIndex(function (image) {
        return image === indexImage;
      });
      var params = {
        index: index,
        imageList: this.imageList,
        indexImage: indexImage
      };
      this.$emit('open-preview', params);
      Object(_image_preview__WEBPACK_IMPORTED_MODULE_4__["default"])({
        images: this.imageList,
        startPosition: index,
        closeOnPopstate: true,
        onClose: function onClose() {
          _this3.$emit('close-preview', params);
        }
      });
    },
    onOverLimit: function onOverLimit(data) {
      var action = data.action,
          limitType = data.limitType,
          quota = data.quota,
          quotaUsed = data.quotaUsed;
      var handleOverLimit = this.customStepperConfig.handleOverLimit;

      if (handleOverLimit) {
        handleOverLimit(data);
        return;
      }

      if (action === 'minus') {
        Object(_toast__WEBPACK_IMPORTED_MODULE_3__["default"])(t('minusTip'));
      } else if (action === 'plus') {
        if (limitType === QUOTA_LIMIT) {
          var msg = t('quotaLimit', quota);
          if (quotaUsed > 0) msg += "\uFF0C" + t('quotaCount', quotaUsed);
          Object(_toast__WEBPACK_IMPORTED_MODULE_3__["default"])(msg);
        } else {
          Object(_toast__WEBPACK_IMPORTED_MODULE_3__["default"])(t('soldout'));
        }
      }
    },
    onAddCart: function onAddCart() {
      this.onBuyOrAddCart('add-cart');
    },
    onBuy: function onBuy() {
      this.onBuyOrAddCart('buy-clicked');
    },
    onBuyOrAddCart: function onBuyOrAddCart(type) {
      var error = this.validateSku();

      if (error) {
        Object(_toast__WEBPACK_IMPORTED_MODULE_3__["default"])(error);
      } else {
        this.$emit(type, this.getSkuData());
      }
    },
    getSkuData: function getSkuData() {
      return {
        goodsId: this.goodsId,
        selectedNum: this.selectedNum,
        selectedSkuComb: this.selectedSkuComb,
        messages: this.getSkuMessages(),
        cartMessages: this.getSkuCartMessages()
      };
    }
  },
  render: function render() {
    var _this4 = this;

    var h = arguments[0];

    if (this.isSkuEmpty) {
      return;
    }

    var sku = this.sku,
        goods = this.goods,
        price = this.price,
        originPrice = this.originPrice,
        skuEventBus = this.skuEventBus,
        selectedSku = this.selectedSku,
        selectedNum = this.selectedNum,
        stepperTitle = this.stepperTitle,
        hideQuotaText = this.hideQuotaText,
        selectedSkuComb = this.selectedSkuComb;
    var slotsProps = {
      price: price,
      originPrice: originPrice,
      selectedNum: selectedNum,
      skuEventBus: skuEventBus,
      selectedSku: selectedSku,
      selectedSkuComb: selectedSkuComb
    };

    var slots = function slots(name) {
      return _this4.slots(name, slotsProps);
    };

    var Header = slots('sku-header') || h(_components_SkuHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "attrs": {
        "sku": sku,
        "goods": goods,
        "skuEventBus": skuEventBus,
        "selectedSku": selectedSku
      }
    }, [slots('sku-header-price') || h("div", {
      "class": "van-sku__goods-price"
    }, [h("span", {
      "class": "van-sku__price-symbol"
    }, ["\uFFE5"]), h("span", {
      "class": "van-sku__price-num"
    }, [price]), this.priceTag && h("span", {
      "class": "van-sku__price-tag"
    }, [this.priceTag])]), slots('sku-header-origin-price') || originPrice && h(_components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_6__["default"], [t('originPrice'), " \uFFE5", originPrice]), !this.hideStock && h(_components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_6__["default"], [h("span", {
      "class": "van-sku__stock"
    }, [this.stockText]), !hideQuotaText && this.quotaText && h("span", {
      "class": "van-sku__quota"
    }, ["(", this.quotaText, ")"])]), this.hasSku && !this.hideSelectedText && h(_components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_6__["default"], [this.selectedText]), slots('sku-header-extra')]);
    var Group = slots('sku-group') || this.hasSku && h("div", {
      "class": this.skuGroupClass
    }, [this.skuTree.map(function (skuTreeItem) {
      return h(_components_SkuRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "attrs": {
          "skuRow": skuTreeItem
        }
      }, [skuTreeItem.v.map(function (skuValue) {
        return h(_components_SkuRowItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          "attrs": {
            "skuList": sku.list,
            "skuValue": skuValue,
            "selectedSku": selectedSku,
            "skuEventBus": skuEventBus,
            "skuKeyStr": skuTreeItem.k_s
          }
        });
      })]);
    })]);
    var Stepper = slots('sku-stepper') || h(_components_SkuStepper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "ref": "skuStepper",
      "attrs": {
        "stock": this.stock,
        "quota": this.quota,
        "quotaUsed": this.quotaUsed,
        "skuEventBus": skuEventBus,
        "selectedNum": selectedNum,
        "selectedSku": selectedSku,
        "stepperTitle": stepperTitle,
        "skuStockNum": sku.stock_num,
        "disableStepperInput": this.disableStepperInput,
        "customStepperConfig": this.customStepperConfig
      },
      "on": {
        "change": function change(event) {
          _this4.$emit('stepper-change', event);
        }
      }
    });
    var Messages = slots('sku-messages') || h(_components_SkuMessages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "ref": "skuMessages",
      "attrs": {
        "goodsId": this.goodsId,
        "messageConfig": this.messageConfig,
        "messages": sku.messages
      }
    });
    var Actions = slots('sku-actions') || h(_components_SkuActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
      "attrs": {
        "buyText": this.buyText,
        "skuEventBus": skuEventBus,
        "addCartText": this.addCartText,
        "showAddCartBtn": this.showAddCartBtn
      }
    });
    return h(_popup__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "round": true,
        "closeable": true,
        "position": "bottom",
        "getContainer": this.getContainer,
        "closeOnClickOverlay": this.closeOnClickOverlay,
        "safeAreaInsetBottom": this.safeAreaInsetBottom
      },
      "class": "van-sku-container",
      "model": {
        value: _this4.show,
        callback: function callback($$v) {
          _this4.show = $$v;
        }
      }
    }, [Header, h("div", {
      "class": "van-sku-body",
      "style": this.bodyStyle
    }, [slots('sku-body-top'), Group, slots('extra-sku-group'), Stepper, Messages]), Actions]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuActions.js":
/*!***********************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuActions.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button */ "./node_modules/vant/es/button/index.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sku-actions'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SkuActions(h, props, slots, ctx) {
  var createEmitter = function createEmitter(name) {
    return function () {
      props.skuEventBus.$emit(name);
    };
  };

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem()
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [props.showAddCartBtn && h(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "attrs": {
      "size": "large",
      "type": "warning",
      "text": props.addCartText || t('addCart')
    },
    "on": {
      "click": createEmitter('sku:addCart')
    }
  }), h(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "attrs": {
      "size": "large",
      "type": "danger",
      "text": props.buyText || t('buy')
    },
    "on": {
      "click": createEmitter('sku:buy')
    }
  })]);
}

SkuActions.props = {
  buyText: String,
  addCartText: String,
  skuEventBus: Object,
  showAddCartBtn: Boolean
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(SkuActions));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuHeader.js":
/*!**********************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuHeader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constant */ "./node_modules/vant/es/utils/constant.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sku-header'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function getSkuImg(sku, selectedSku) {
  var img;
  sku.tree.some(function (item) {
    var id = selectedSku[item.k_s];

    if (id && item.v) {
      var matchedSku = item.v.filter(function (skuValue) {
        return skuValue.id === id;
      })[0] || {};
      img = matchedSku.imgUrl || matchedSku.img_url;
      return img;
    }

    return false;
  });
  return img;
}

function SkuHeader(h, props, slots, ctx) {
  var sku = props.sku,
      goods = props.goods,
      skuEventBus = props.skuEventBus,
      selectedSku = props.selectedSku;
  var goodsImg = getSkuImg(sku, selectedSku) || goods.picture;

  var previewImage = function previewImage() {
    skuEventBus.$emit('sku:previewImage', goodsImg);
  };

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem(), _utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_BOTTOM"]]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [h("div", {
    "class": bem('img-wrap'),
    "on": {
      "click": previewImage
    }
  }, [h("img", {
    "attrs": {
      "src": goodsImg
    }
  })]), h("div", {
    "class": bem('goods-info')
  }, [slots.default && slots.default()])]);
}

SkuHeader.props = {
  sku: Object,
  goods: Object,
  skuEventBus: Object,
  selectedSku: Object
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(SkuHeader));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuHeaderItem.js":
/*!**************************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuHeaderItem.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functional */ "./node_modules/vant/es/utils/functional.js");


 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sku-header-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuHeader(h, props, slots, ctx) {
  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem()
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [slots.default && slots.default()]);
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent(SkuHeader));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuImgUploader.js":
/*!***************************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuImgUploader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loading */ "./node_modules/vant/es/loading/index.js");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../uploader */ "./node_modules/vant/es/uploader/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('sku-img-uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    value: String,
    uploadImg: Function,
    maxSize: {
      type: Number,
      default: 6
    }
  },
  data: function data() {
    return {
      // 正在上传的图片 base64
      paddingImg: '',
      uploadFail: false
    };
  },
  methods: {
    afterReadFile: function afterReadFile(file) {
      var _this = this;

      // 上传文件
      this.paddingImg = file.content;
      this.uploadFail = false;
      this.uploadImg(file.file, file.content).then(function (img) {
        _this.$emit('input', img);

        _this.$nextTick(function () {
          _this.paddingImg = '';
        });
      }).catch(function () {
        _this.uploadFail = true;
      });
    },
    onOversize: function onOversize() {
      this.$toast(t('oversize', this.maxSize));
    },
    renderUploader: function renderUploader(content, disabled) {
      if (disabled === void 0) {
        disabled = false;
      }

      var h = this.$createElement;
      return h(_uploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "class": bem('uploader'),
        "attrs": {
          "disabled": disabled,
          "afterRead": this.afterReadFile,
          "maxSize": this.maxSize * 1024 * 1024
        },
        "on": {
          "oversize": this.onOversize
        }
      }, [h("div", {
        "class": bem('img')
      }, [content])]);
    },
    renderMask: function renderMask() {
      var h = this.$createElement;
      return h("div", {
        "class": bem('mask')
      }, [this.uploadFail ? [h(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "attrs": {
          "name": "warning-o",
          "size": "20px"
        }
      }), h("div", {
        "class": bem('warn-text'),
        "domProps": {
          "innerHTML": t('fail')
        }
      })] : h(_loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "attrs": {
          "type": "spinner",
          "size": "20px",
          "color": "white"
        }
      })]);
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [this.value && this.renderUploader([h("img", {
      "attrs": {
        "src": this.value
      }
    }), h(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "attrs": {
        "name": "clear"
      },
      "class": bem('delete'),
      "on": {
        "click": function click() {
          _this2.$emit('input', '');
        }
      }
    })], true), this.paddingImg && this.renderUploader([h("img", {
      "attrs": {
        "src": this.paddingImg
      }
    }), this.renderMask()], !this.uploadFail), !this.value && !this.paddingImg && this.renderUploader(h("div", {
      "class": bem('trigger')
    }, [h(_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "attrs": {
        "name": "photograph",
        "size": "22px"
      }
    })]))]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuMessages.js":
/*!************************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuMessages.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _cell_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cell-group */ "./node_modules/vant/es/cell-group/index.js");
/* harmony import */ var _field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../field */ "./node_modules/vant/es/field/index.js");
/* harmony import */ var _utils_validate_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validate/email */ "./node_modules/vant/es/utils/validate/email.js");
/* harmony import */ var _utils_validate_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/validate/number */ "./node_modules/vant/es/utils/validate/number.js");
/* harmony import */ var _SkuImgUploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SkuImgUploader */ "./node_modules/vant/es/sku/components/SkuImgUploader.js");








var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('sku-messages'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    messages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    messageConfig: Object,
    goodsId: [Number, String]
  },
  data: function data() {
    return {
      messageValues: this.resetMessageValues(this.messages)
    };
  },
  watch: {
    messages: function messages(val) {
      this.messageValues = this.resetMessageValues(val);
    }
  },
  methods: {
    resetMessageValues: function resetMessageValues(messages) {
      return (messages || []).map(function () {
        return {
          value: ''
        };
      });
    },
    getType: function getType(message) {
      if (+message.multiple === 1) {
        return 'textarea';
      }

      if (message.type === 'id_no') {
        return 'text';
      }

      return message.datetime > 0 ? 'datetime-local' : message.type;
    },
    getMessages: function getMessages() {
      var _this = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;

        if (_this.messages[index].datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages["message_" + index] = value;
      });
      return messages;
    },
    getCartMessages: function getCartMessages() {
      var _this2 = this;

      var messages = {};
      this.messageValues.forEach(function (item, index) {
        var value = item.value;
        var message = _this2.messages[index];

        if (message.datetime > 0) {
          value = value.replace(/T/g, ' ');
        }

        messages[message.name] = value;
      });
      return messages;
    },
    getPlaceholder: function getPlaceholder(message) {
      var type = +message.multiple === 1 ? 'textarea' : message.type;
      var map = this.messageConfig.placeholderMap || {};
      return message.placeholder || map[type] || t("placeholder." + type);
    },
    validateMessages: function validateMessages() {
      var values = this.messageValues;

      for (var i = 0; i < values.length; i++) {
        var value = values[i].value;
        var message = this.messages[i];

        if (value === '') {
          // 必填字段的校验
          if (String(message.required) === '1') {
            var textType = t(message.type === 'image' ? 'upload' : 'fill');
            return textType + message.name;
          }
        } else {
          if (message.type === 'tel' && !Object(_utils_validate_number__WEBPACK_IMPORTED_MODULE_5__["isNumber"])(value)) {
            return t('invalid.tel');
          }

          if (message.type === 'mobile' && !/^\d{6,20}$/.test(value)) {
            return t('invalid.mobile');
          }

          if (message.type === 'email' && !Object(_utils_validate_email__WEBPACK_IMPORTED_MODULE_4__["isEmail"])(value)) {
            return t('invalid.email');
          }

          if (message.type === 'id_no' && (value.length < 15 || value.length > 18)) {
            return t('invalid.id_no');
          }
        }
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    return h(_cell_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "class": bem(),
      "attrs": {
        "border": this.messages.length > 0
      }
    }, [this.messages.map(function (message, index) {
      return message.type === 'image' ? h(_cell__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "class": bem('image-cell'),
        "attrs": {
          "value-class": bem('image-cell-value'),
          "label": t('imageLabel'),
          "title": message.name,
          "required": String(message.required) === '1'
        },
        "key": _this3.goodsId + "-" + index
      }, [h(_SkuImgUploader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "attrs": {
          "uploadImg": _this3.messageConfig.uploadImg,
          "maxSize": _this3.messageConfig.uploadMaxSize
        },
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      })]) : h(_field__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "maxlength": "200",
          "label": message.name,
          "required": String(message.required) === '1',
          "placeholder": _this3.getPlaceholder(message),
          "type": _this3.getType(message)
        },
        "key": _this3.goodsId + "-" + index,
        "model": {
          value: _this3.messageValues[index].value,
          callback: function callback($$v) {
            _this3.messageValues[index].value = $$v;
          }
        }
      });
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuRow.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuRow.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constant */ "./node_modules/vant/es/utils/constant.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sku-row'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SkuRow(h, props, slots, ctx) {
  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem(), _utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_BOTTOM"]]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [h("div", {
    "class": bem('title')
  }, [props.skuRow.k]), slots.default && slots.default()]);
}

SkuRow.props = {
  skuRow: Object
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(SkuRow));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuRowItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuRowItem.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_skuHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/skuHelper */ "./node_modules/vant/es/sku/utils/skuHelper.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('sku-row-item'),
    createComponent = _createNamespace[0];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    skuValue: Object,
    skuKeyStr: String,
    skuEventBus: Object,
    selectedSku: Object,
    skuList: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    choosable: function choosable() {
      return Object(_utils_skuHelper__WEBPACK_IMPORTED_MODULE_2__["isSkuChoosable"])(this.skuList, this.selectedSku, {
        key: this.skuKeyStr,
        valueId: this.skuValue.id
      });
    }
  },
  methods: {
    onSelect: function onSelect() {
      if (this.choosable) {
        this.skuEventBus.$emit('sku:select', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.skuValue, {
          skuKeyStr: this.skuKeyStr
        }));
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    var choosed = this.skuValue.id === this.selectedSku[this.skuKeyStr];
    var imgUrl = this.skuValue.imgUrl || this.skuValue.img_url;
    return h("span", {
      "class": ['van-sku-row__item', {
        'van-sku-row__item--active': choosed,
        'van-sku-row__item--disabled': !this.choosable
      }],
      "on": {
        "click": this.onSelect
      }
    }, [imgUrl && h("img", {
      "class": "van-sku-row__item-img",
      "attrs": {
        "src": imgUrl
      }
    }), h("span", {
      "class": "van-sku-row__item-name"
    }, [this.skuValue.name])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/components/SkuStepper.js":
/*!***********************************************************!*\
  !*** ./node_modules/vant/es/sku/components/SkuStepper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../stepper */ "./node_modules/vant/es/stepper/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/vant/es/sku/constants.js");



var namespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('sku-stepper');
var createComponent = namespace[0];
var t = namespace[2];
var QUOTA_LIMIT = _constants__WEBPACK_IMPORTED_MODULE_2__["LIMIT_TYPE"].QUOTA_LIMIT,
    STOCK_LIMIT = _constants__WEBPACK_IMPORTED_MODULE_2__["LIMIT_TYPE"].STOCK_LIMIT;
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    stock: Number,
    skuEventBus: Object,
    skuStockNum: Number,
    selectedNum: Number,
    stepperTitle: String,
    disableStepperInput: Boolean,
    customStepperConfig: Object,
    quota: {
      type: Number,
      default: 0
    },
    quotaUsed: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      currentNum: this.selectedNum,
      // 购买限制类型: 限购/库存
      limitType: STOCK_LIMIT
    };
  },
  watch: {
    currentNum: function currentNum(num) {
      this.skuEventBus.$emit('sku:numChange', num);
    },
    stepperLimit: function stepperLimit(limit) {
      if (limit < this.currentNum) {
        this.currentNum = limit;
      }
    }
  },
  computed: {
    stepperLimit: function stepperLimit() {
      var quotaLimit = this.quota - this.quotaUsed;
      var limit; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

      if (this.quota > 0 && quotaLimit <= this.stock) {
        // 修正负的limit
        limit = quotaLimit < 0 ? 0 : quotaLimit;
        this.limitType = QUOTA_LIMIT;
      } else {
        limit = this.stock;
        this.limitType = STOCK_LIMIT;
      }

      return limit;
    }
  },
  methods: {
    setCurrentNum: function setCurrentNum(num) {
      this.currentNum = num;
    },
    onOverLimit: function onOverLimit(action) {
      this.skuEventBus.$emit('sku:overLimit', {
        action: action,
        limitType: this.limitType,
        quota: this.quota,
        quotaUsed: this.quotaUsed
      });
    },
    onChange: function onChange(currentValue) {
      var handleStepperChange = this.customStepperConfig.handleStepperChange;
      handleStepperChange && handleStepperChange(currentValue);
      this.$emit('change', currentValue);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    return h("div", {
      "class": "van-sku-stepper-stock"
    }, [h("div", {
      "class": "van-sku-stepper-container"
    }, [h("div", {
      "class": "van-sku__stepper-title"
    }, [this.stepperTitle || t('num')]), h(_stepper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "class": "van-sku__stepper",
      "attrs": {
        "max": this.stepperLimit,
        "disableInput": this.disableStepperInput
      },
      "on": {
        "overlimit": this.onOverLimit,
        "change": this.onChange
      },
      "model": {
        value: _this.currentNum,
        callback: function callback($$v) {
          _this.currentNum = $$v;
        }
      }
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sku/constants.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/sku/constants.js ***!
  \***********************************************/
/*! exports provided: LIMIT_TYPE, UNSELECTED_SKU_VALUE_ID, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIMIT_TYPE", function() { return LIMIT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTED_SKU_VALUE_ID", function() { return UNSELECTED_SKU_VALUE_ID; });
var LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
var UNSELECTED_SKU_VALUE_ID = '';
/* harmony default export */ __webpack_exports__["default"] = ({
  LIMIT_TYPE: LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID: UNSELECTED_SKU_VALUE_ID
});

/***/ }),

/***/ "./node_modules/vant/es/sku/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vant/es/sku/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./node_modules/vant/es/sku/lang.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale */ "./node_modules/vant/es/locale/index.js");
/* harmony import */ var _Sku__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sku */ "./node_modules/vant/es/sku/Sku.js");
/* harmony import */ var _components_SkuActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SkuActions */ "./node_modules/vant/es/sku/components/SkuActions.js");
/* harmony import */ var _components_SkuHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SkuHeader */ "./node_modules/vant/es/sku/components/SkuHeader.js");
/* harmony import */ var _components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SkuHeaderItem */ "./node_modules/vant/es/sku/components/SkuHeaderItem.js");
/* harmony import */ var _components_SkuMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/SkuMessages */ "./node_modules/vant/es/sku/components/SkuMessages.js");
/* harmony import */ var _components_SkuStepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SkuStepper */ "./node_modules/vant/es/sku/components/SkuStepper.js");
/* harmony import */ var _components_SkuRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SkuRow */ "./node_modules/vant/es/sku/components/SkuRow.js");
/* harmony import */ var _components_SkuRowItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SkuRowItem */ "./node_modules/vant/es/sku/components/SkuRowItem.js");
/* harmony import */ var _utils_skuHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/skuHelper */ "./node_modules/vant/es/sku/utils/skuHelper.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/vant/es/sku/constants.js");












_locale__WEBPACK_IMPORTED_MODULE_1__["default"].add(_lang__WEBPACK_IMPORTED_MODULE_0__["default"]);
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuActions = _components_SkuActions__WEBPACK_IMPORTED_MODULE_3__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuHeader = _components_SkuHeader__WEBPACK_IMPORTED_MODULE_4__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuHeaderItem = _components_SkuHeaderItem__WEBPACK_IMPORTED_MODULE_5__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuMessages = _components_SkuMessages__WEBPACK_IMPORTED_MODULE_6__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuStepper = _components_SkuStepper__WEBPACK_IMPORTED_MODULE_7__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuRow = _components_SkuRow__WEBPACK_IMPORTED_MODULE_8__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].SkuRowItem = _components_SkuRowItem__WEBPACK_IMPORTED_MODULE_9__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].skuHelper = _utils_skuHelper__WEBPACK_IMPORTED_MODULE_10__["default"];
_Sku__WEBPACK_IMPORTED_MODULE_2__["default"].skuConstants = _constants__WEBPACK_IMPORTED_MODULE_11__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Sku__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./node_modules/vant/es/sku/lang.js":
/*!******************************************!*\
  !*** ./node_modules/vant/es/sku/lang.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sku only provide zh-CN lang by default
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  'zh-CN': {
    vanSku: {
      select: '选择',
      selected: '已选',
      selectSku: '请先选择商品规格',
      soldout: '库存不足',
      originPrice: '原价',
      minusTip: '至少选择一件',
      unavailable: '商品已经无法购买啦',
      stock: '剩余',
      stockUnit: '件',
      quotaLimit: function quotaLimit(quota) {
        return "\u6BCF\u4EBA\u9650\u8D2D" + quota + "\u4EF6";
      },
      quotaCount: function quotaCount(count) {
        return "\u4F60\u5DF2\u8D2D\u4E70" + count + "\u4EF6";
      }
    },
    vanSkuActions: {
      buy: '立即购买',
      addCart: '加入购物车'
    },
    vanSkuImgUploader: {
      oversize: function oversize(maxSize) {
        return "\u6700\u5927\u53EF\u4E0A\u4F20\u56FE\u7247\u4E3A" + maxSize + "MB\uFF0C\u8BF7\u5C1D\u8BD5\u538B\u7F29\u56FE\u7247\u5C3A\u5BF8";
      },
      fail: '上传失败<br />重新上传'
    },
    vanSkuStepper: {
      num: '购买数量'
    },
    vanSkuMessages: {
      fill: '请填写',
      upload: '请上传',
      imageLabel: '仅限一张',
      invalid: {
        tel: '请填写正确的数字格式留言',
        mobile: '手机号长度为6-20位数字',
        email: '请填写正确的邮箱',
        id_no: '请填写正确的身份证号码'
      },
      placeholder: {
        id_no: '输入身份证号码',
        text: '输入文本',
        tel: '输入数字',
        email: '输入邮箱',
        date: '点击选择日期',
        time: '点击选择时间',
        textarea: '点击填写段落文本',
        mobile: '输入手机号码'
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vant/es/sku/utils/skuHelper.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/sku/utils/skuHelper.js ***!
  \*****************************************************/
/*! exports provided: normalizeSkuTree, isAllSelected, getSkuComb, getSelectedSkuValues, isSkuChoosable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSkuTree", function() { return normalizeSkuTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllSelected", function() { return isAllSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkuComb", function() { return getSkuComb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedSkuValues", function() { return getSelectedSkuValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSkuChoosable", function() { return isSkuChoosable; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/vant/es/sku/constants.js");


/*
  normalize sku tree

  [
    {
      count: 2,
      k: "品种", // 规格名称 skuKeyName
      k_id: "1200", // skuKeyId
      k_s: "s1" // skuKeyStr
      v: [ // skuValues
        { // skuValue
          id: "1201", // skuValueId
          name: "萌" // 具体的规格值 skuValueName
        }, {
          id: "973",
          name: "帅"
        }
      ]
    },
    ...
  ]
                |
                v
  {
    s1: [{
      id: "1201",
      name: "萌"
    }, {
      id: "973",
      name: "帅"
    }],
    ...
  }
 */

var normalizeSkuTree = function normalizeSkuTree(skuTree) {
  var normalizedTree = {};
  skuTree.forEach(function (treeItem) {
    normalizedTree[treeItem.k_s] = treeItem.v;
  });
  return normalizedTree;
}; // 判断是否所有的sku都已经选中

var isAllSelected = function isAllSelected(skuTree, selectedSku) {
  // 筛选selectedSku对象中key值不为空的值
  var selected = Object.keys(selectedSku).filter(function (skuKeyStr) {
    return selectedSku[skuKeyStr] !== _constants__WEBPACK_IMPORTED_MODULE_1__["UNSELECTED_SKU_VALUE_ID"];
  });
  return skuTree.length === selected.length;
}; // 根据已选择的 sku 获取 skuComb

var getSkuComb = function getSkuComb(skuList, selectedSku) {
  var skuComb = skuList.filter(function (item) {
    return Object.keys(selectedSku).every(function (skuKeyStr) {
      return String(item[skuKeyStr]) === String(selectedSku[skuKeyStr]);
    });
  });
  return skuComb[0];
}; // 获取已选择的sku名称

var getSelectedSkuValues = function getSelectedSkuValues(skuTree, selectedSku) {
  var normalizedTree = normalizeSkuTree(skuTree);
  return Object.keys(selectedSku).reduce(function (selectedValues, skuKeyStr) {
    var skuValues = normalizedTree[skuKeyStr];
    var skuValueId = selectedSku[skuKeyStr];

    if (skuValueId !== _constants__WEBPACK_IMPORTED_MODULE_1__["UNSELECTED_SKU_VALUE_ID"]) {
      var skuValue = skuValues.filter(function (value) {
        return value.id === skuValueId;
      })[0];
      skuValue && selectedValues.push(skuValue);
    }

    return selectedValues;
  }, []);
}; // 判断sku是否可选

var isSkuChoosable = function isSkuChoosable(skuList, selectedSku, skuToChoose) {
  var _extends2;

  var key = skuToChoose.key,
      valueId = skuToChoose.valueId; // 先假设sku已选中，拼入已选中sku对象中

  var matchedSku = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, selectedSku, (_extends2 = {}, _extends2[key] = valueId, _extends2)); // 再判断剩余sku是否全部不可选，若不可选则当前sku不可选中


  var skusToCheck = Object.keys(matchedSku).filter(function (skuKey) {
    return matchedSku[skuKey] !== _constants__WEBPACK_IMPORTED_MODULE_1__["UNSELECTED_SKU_VALUE_ID"];
  });
  var filteredSku = skuList.filter(function (sku) {
    return skusToCheck.every(function (skuKey) {
      return String(matchedSku[skuKey]) === String(sku[skuKey]);
    });
  });
  var stock = filteredSku.reduce(function (total, sku) {
    total += sku.stock_num;
    return total;
  }, 0);
  return stock > 0;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  normalizeSkuTree: normalizeSkuTree,
  getSkuComb: getSkuComb,
  getSelectedSkuValues: getSelectedSkuValues,
  isAllSelected: isAllSelected,
  isSkuChoosable: isSkuChoosable
});

/***/ }),

/***/ "./node_modules/vant/es/slider/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/slider/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('slider'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_1__["TouchMixin"]],
  props: {
    disabled: Boolean,
    vertical: Boolean,
    activeColor: String,
    inactiveColor: String,
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    barHeight: {
      type: [Number, String],
      default: 2
    }
  },
  computed: {
    range: function range() {
      return this.max - this.min;
    }
  },
  created: function created() {
    // format initial value
    this.updateValue(this.value);
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      if (this.disabled) {
        return;
      }

      this.touchStart(event);
      this.startValue = this.format(this.value);
      this.dragStatus = 'start';
    },
    onTouchMove: function onTouchMove(event) {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'start') {
        this.$emit('drag-start');
      }

      Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(event, true);
      this.touchMove(event);
      this.dragStatus = 'draging';
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? this.deltaY : this.deltaX;
      var total = this.vertical ? rect.height : rect.width;
      var diff = delta / total * this.range;
      this.newValue = this.startValue + diff;
      this.updateValue(this.newValue);
    },
    onTouchEnd: function onTouchEnd() {
      if (this.disabled) {
        return;
      }

      if (this.dragStatus === 'draging') {
        this.updateValue(this.newValue, true);
        this.$emit('drag-end');
      }

      this.dragStatus = '';
    },
    onClick: function onClick(event) {
      event.stopPropagation();
      if (this.disabled) return;
      var rect = this.$el.getBoundingClientRect();
      var delta = this.vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = this.vertical ? rect.height : rect.width;
      var value = delta / total * this.range + this.min;
      this.startValue = this.value;
      this.updateValue(value, true);
    },
    updateValue: function updateValue(value, end) {
      value = this.format(value);

      if (value !== this.value) {
        this.$emit('input', value);
      }

      if (end && value !== this.startValue) {
        this.$emit('change', value);
      }
    },
    format: function format(value) {
      return Math.round(Math.max(this.min, Math.min(value, this.max)) / this.step) * this.step;
    }
  },
  render: function render() {
    var _barStyle;

    var h = arguments[0];
    var vertical = this.vertical;
    var style = {
      background: this.inactiveColor
    };
    var mainAxis = vertical ? 'height' : 'width';
    var crossAxis = vertical ? 'width' : 'height';
    var barStyle = (_barStyle = {}, _barStyle[mainAxis] = (this.value - this.min) * 100 / this.range + "%", _barStyle[crossAxis] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(this.barHeight), _barStyle.background = this.activeColor, _barStyle);
    return h("div", {
      "style": style,
      "class": bem({
        disabled: this.disabled,
        vertical: vertical
      }),
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('bar'),
      "style": barStyle
    }, [h("div", {
      "attrs": {
        "role": "slider",
        "tabindex": this.disabled ? -1 : 0,
        "aria-valuemin": this.min,
        "aria-valuenow": this.value,
        "aria-valuemax": this.max,
        "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
      },
      "class": bem('button-wrapper'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots('button') || h("div", {
      "class": bem('button')
    })])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/step/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/step/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('step'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ChildrenMixin"])('vanSteps')],
  computed: {
    status: function status() {
      if (this.index < this.parent.active) {
        return 'finish';
      }

      if (this.index === this.parent.active) {
        return 'process';
      }
    }
  },
  methods: {
    genCircle: function genCircle() {
      var h = this.$createElement;
      var _this$parent = this.parent,
          activeIcon = _this$parent.activeIcon,
          activeColor = _this$parent.activeColor,
          inactiveIcon = _this$parent.inactiveIcon;

      if (this.status === 'process') {
        return this.slots('active-icon') || h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          "class": bem('icon'),
          "attrs": {
            "name": activeIcon,
            "color": activeColor
          }
        });
      }

      var inactiveIconSlot = this.slots('inactive-icon');

      if (inactiveIcon || inactiveIconSlot) {
        return inactiveIconSlot || h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          "class": bem('icon'),
          "attrs": {
            "name": inactiveIcon
          }
        });
      }

      return h("i", {
        "class": bem('circle')
      });
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    var status = this.status;
    var _this$parent2 = this.parent,
        activeColor = _this$parent2.activeColor,
        direction = _this$parent2.direction;
    var titleStyle = status === 'process' && {
      color: activeColor
    };
    return h("div", {
      "class": [_utils_constant__WEBPACK_IMPORTED_MODULE_1__["BORDER"], bem([direction, (_ref = {}, _ref[status] = status, _ref)])]
    }, [h("div", {
      "class": bem('title'),
      "style": titleStyle
    }, [this.slots()]), h("div", {
      "class": bem('circle-container')
    }, [this.genCircle()]), h("div", {
      "class": bem('line')
    })]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/stepper/index.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/stepper/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_reset_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/reset-scroll */ "./node_modules/vant/es/utils/dom/reset-scroll.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('stepper'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;

function equal(value1, value2) {
  return String(value1) === String(value2);
}

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    decimalLength: Number,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var defaultValue = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.value) ? this.value : this.defaultValue;
    var value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      if (this.buttonSize) {
        var size = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.buttonSize);
        return {
          width: size,
          height: size
        };
      }
    }
  },
  watch: {
    value: function value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    filter: function filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '');

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }

      return value;
    },
    format: function format(value) {
      value = this.filter(value); // format range

      value = value === '' ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min); // format decimal

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },
    onInput: function onInput(event) {
      var value = event.target.value; // allow input to be empty

      if (value === '') {
        return;
      }

      var formatted = this.filter(value);

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },
    emitChange: function emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = value;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = +this.currentValue + diff; // avoid float number

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(this.decimalLength)) {
        value = Math.round(value * 100) / 100;
      }

      value = this.format(value);
      this.emitChange(value);
      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      var value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);
      Object(_utils_dom_reset_scroll__WEBPACK_IMPORTED_MODULE_2__["resetScroll"])();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_3__["preventDefault"])(event);
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": bem()
    }, [h("button", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      "directives": [{
        name: "show",
        value: this.showMinus
      }],
      "style": this.buttonStyle,
      "class": bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      "directives": [{
        name: "show",
        value: this.showPlus
      }],
      "style": this.buttonStyle,
      "class": bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/steps/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/steps/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('steps'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ParentMixin"])('vanSteps')],
  props: {
    inactiveIcon: String,
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    activeColor: {
      type: String,
      default: _utils_constant__WEBPACK_IMPORTED_MODULE_1__["GREEN"]
    },
    activeIcon: {
      type: String,
      default: 'checked'
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem([this.direction])
    }, [h("div", {
      "class": bem('items')
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/sticky/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/sticky/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('sticky'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_1__["BindEventMixin"])(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__["getScrollEventTarget"])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__["getScrollTop"])(window);
      var topToPageTop = Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_2__["getElementTop"])(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/submit-bar/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/submit-bar/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./node_modules/vant/es/button/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");




 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('submit-bar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1],
    t = _createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": bem('text')
      }, [h("span", [props.label || t('label')]), h("span", {
        "class": bem('price')
      }, [priceText]), props.suffixLabel && h("span", {
        "class": bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": bem('tip')
      }, [tipIcon && h(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "class": bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": bem('bar')
  }, [slots.default && slots.default(), Text(), h(_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": bem('button'),
    "on": {
      "click": function click() {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(SubmitBar));

/***/ }),

/***/ "./node_modules/vant/es/swipe-cell/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/swipe-cell/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/vant/es/utils/format/number.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _mixins_click_outside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/click-outside */ "./node_modules/vant/es/mixins/click-outside.js");






var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('swipe-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var THRESHOLD = 0.15;
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_3__["TouchMixin"], Object(_mixins_click_outside__WEBPACK_IMPORTED_MODULE_4__["ClickOutsideMixin"])({
    event: 'touchstart',
    method: 'onClick'
  })],
  props: {
    onClose: Function,
    disabled: Boolean,
    leftWidth: Number,
    rightWidth: Number,
    stopPropagation: Boolean,
    name: {
      type: [Number, String],
      default: ''
    }
  },
  data: function data() {
    return {
      offset: 0,
      dragging: false
    };
  },
  computed: {
    computedLeftWidth: function computedLeftWidth() {
      return this.leftWidth || this.getWidthByRef('left');
    },
    computedRightWidth: function computedRightWidth() {
      return this.rightWidth || this.getWidthByRef('right');
    }
  },
  methods: {
    getWidthByRef: function getWidthByRef(ref) {
      if (this.$refs[ref]) {
        var rect = this.$refs[ref].getBoundingClientRect();
        return rect.width;
      }

      return 0;
    },
    open: function open(position) {
      var offset = position === 'left' ? this.computedLeftWidth : -this.computedRightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.offset = 0;
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.offset = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_1__["range"])(offset, -this.computedRightWidth, this.computedLeftWidth);

      if (this.offset) {
        this.swiping = true;
      } else {
        this.opened = false;
      }
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var offset = this.offset,
          computedLeftWidth = this.computedLeftWidth,
          computedRightWidth = this.computedRightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction === 'right' && -offset > computedRightWidth * threshold && computedRightWidth > 0) {
        this.open('right'); // left
      } else if (direction === 'left' && offset > computedLeftWidth * threshold && computedLeftWidth > 0) {
        this.open('left'); // reset
      } else {
        this.swipeMove(0);
      }
    },
    startDrag: function startDrag(event) {
      if (this.disabled) {
        return;
      }

      this.dragging = true;
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    onDrag: function onDrag(event) {
      if (this.disabled) {
        return;
      }

      this.touchMove(event);

      if (this.direction === 'horizontal') {
        var shouldPrevent = !this.opened || this.deltaX * this.startOffset < 0;

        if (shouldPrevent) {
          Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_2__["preventDefault"])(event, this.stopPropagation);
        }

        this.swipeMove(this.deltaX + this.startOffset);
      }
    },
    endDrag: function endDrag() {
      if (this.disabled) {
        return;
      }

      this.dragging = false;

      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? 'left' : 'right');
      }
    },
    onClick: function onClick(position) {
      if (position === void 0) {
        position = 'outside';
      }

      this.$emit('click', position);

      if (!this.offset) {
        return;
      }

      if (this.onClose) {
        this.onClose(position, this, {
          name: this.name
        });
      } else {
        this.swipeMove(0);
      }
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];

    var onClick = function onClick(position, stop) {
      return function (event) {
        if (stop) {
          event.stopPropagation();
        }

        _this.onClick(position);
      };
    };

    var wrapperStyle = {
      transform: "translate3d(" + this.offset + "px, 0, 0)",
      transitionDuration: this.dragging ? '0s' : '.6s'
    };
    return h("div", {
      "class": bem(),
      "on": {
        "click": onClick('cell'),
        "touchstart": this.startDrag,
        "touchmove": this.onDrag,
        "touchend": this.endDrag,
        "touchcancel": this.endDrag
      }
    }, [h("div", {
      "class": bem('wrapper'),
      "style": wrapperStyle,
      "on": {
        "transitionend": function transitionend() {
          _this.swiping = false;
        }
      }
    }, [this.slots('left') && h("div", {
      "ref": "left",
      "class": bem('left'),
      "on": {
        "click": onClick('left', true)
      }
    }, [this.slots('left')]), this.slots(), this.slots('right') && h("div", {
      "ref": "right",
      "class": bem('right'),
      "on": {
        "click": onClick('right', true)
      }
    }, [this.slots('right')])])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/swipe-item/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/swipe-item/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");



var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('swipe-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": bem(),
      "style": style,
      "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$listeners)
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/swipe/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/swipe/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom/event */ "./node_modules/vant/es/utils/dom/event.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom/raf */ "./node_modules/vant/es/utils/dom/raf.js");
/* harmony import */ var _utils_format_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/format/number */ "./node_modules/vant/es/utils/format/number.js");







var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('swipe'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_2__["TouchMixin"], Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_3__["BindEventMixin"])(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        Object(_utils_dom_event__WEBPACK_IMPORTED_MODULE_1__["preventDefault"])(event, true);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_5__["range"])(active + pace, -1, count);
        }

        return Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_5__["range"])(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = Object(_utils_format_number__WEBPACK_IMPORTED_MODULE_5__["range"])(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_4__["doubleRaf"])(function () {
        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_4__["doubleRaf"])(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_4__["doubleRaf"])(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), this.renderIndicator()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/switch-cell/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/switch-cell/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell */ "./node_modules/vant/es/cell/index.js");
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../switch */ "./node_modules/vant/es/switch/index.js");
/* harmony import */ var _switch_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../switch/shared */ "./node_modules/vant/es/switch/shared.js");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createNamespace"])('switch-cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function SwitchCell(h, props, slots, ctx) {
  return h(_cell__WEBPACK_IMPORTED_MODULE_4__["default"], _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "attrs": {
      "center": true,
      "size": props.cellSize,
      "title": props.title,
      "border": props.border
    },
    "class": bem([props.cellSize])
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_3__["inherit"])(ctx)]), [h(_switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "props": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props),
    "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ctx.listeners)
  })]);
}

SwitchCell.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _switch_shared__WEBPACK_IMPORTED_MODULE_6__["switchProps"], {
  title: String,
  cellSize: String,
  border: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: '24px'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (createComponent(SwitchCell));

/***/ }),

/***/ "./node_modules/vant/es/switch/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/switch/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./node_modules/vant/es/switch/shared.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");





 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('switch'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Switch(h, props, slots, ctx) {
  var size = props.size,
      value = props.value,
      loading = props.loading,
      disabled = props.disabled,
      activeColor = props.activeColor,
      activeValue = props.activeValue,
      inactiveColor = props.inactiveColor,
      inactiveValue = props.inactiveValue;
  var checked = value === activeValue;
  var switchStyle = {
    fontSize: size,
    backgroundColor: checked ? activeColor : inactiveColor
  };
  var loadingColor = checked ? activeColor || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["BLUE"] : inactiveColor || _utils_constant__WEBPACK_IMPORTED_MODULE_2__["GRAY_DARK"];

  function onClick() {
    if (!disabled && !loading) {
      var newValue = checked ? inactiveValue : activeValue;
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["emit"])(ctx, 'input', newValue);
      Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["emit"])(ctx, 'change', newValue);
    }
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem({
      on: checked,
      disabled: disabled
    }),
    "attrs": {
      "role": "switch",
      "aria-checked": String(checked)
    },
    "style": switchStyle,
    "on": {
      "click": onClick
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__["inherit"])(ctx)]), [h("div", {
    "class": bem('node')
  }, [loading && h(_loading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "class": bem('loading'),
    "attrs": {
      "color": loadingColor
    }
  })])]);
}

Switch.props = _shared__WEBPACK_IMPORTED_MODULE_3__["switchProps"];
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Switch));

/***/ }),

/***/ "./node_modules/vant/es/switch/shared.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/switch/shared.js ***!
  \***********************************************/
/*! exports provided: switchProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchProps", function() { return switchProps; });
/**
 * Common Switch Props
 */
var switchProps = {
  value: null,
  loading: Boolean,
  disabled: Boolean,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: null,
    default: true
  },
  inactiveValue: {
    type: null,
    default: false
  },
  size: {
    type: String,
    default: '30px'
  }
};

/***/ }),

/***/ "./node_modules/vant/es/tab/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vant/es/tab/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('tab'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_2__["ChildrenMixin"])('vanTabs')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_3__["routeProps"], {
    name: [Number, String],
    title: String,
    disabled: Boolean
  }),
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
        isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title"
      }, [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": bem('pane')
    }, [Content]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabbar-item/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/tabbar-item/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info */ "./node_modules/vant/es/info/index.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");







var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('tabbar-item'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_5__["ChildrenMixin"])('vanTabbar')],
  props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils_router__WEBPACK_IMPORTED_MODULE_4__["routeProps"], {
    dot: Boolean,
    icon: String,
    name: [Number, String],
    info: [Number, String]
  }),
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    routeActive: function routeActive() {
      var to = this.to,
          $route = this.$route;

      if (to && $route) {
        var config = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isObj"])(to) ? to : {
          path: to
        };
        var pathMatched = config.path === $route.path;
        var nameMatched = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isDef"])(config.name) && config.name === $route.name;
        return pathMatched || nameMatched;
      }
    }
  },
  methods: {
    onClick: function onClick(event) {
      this.parent.onChange(this.name || this.index);
      this.$emit('click', event);
      Object(_utils_router__WEBPACK_IMPORTED_MODULE_4__["route"])(this.$router, this);
    }
  },
  render: function render() {
    var h = arguments[0];
    var icon = this.icon,
        slots = this.slots;
    var active = this.parent.route ? this.routeActive : this.active;
    var color = this.parent[active ? 'activeColor' : 'inactiveColor'];
    return h("div", {
      "class": bem({
        active: active
      }),
      "style": {
        color: color
      },
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": bem('icon')
    }, [slots('icon', {
      active: active
    }) || icon && h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "attrs": {
        "name": icon
      }
    }), h(_info__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "attrs": {
        "dot": this.dot,
        "info": this.info
      }
    })]), h("div", {
      "class": bem('text')
    }, [slots('default', {
      active: active
    })])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabbar/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/tabbar/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('tabbar'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_1__["ParentMixin"])('vanTabbar')],
  props: {
    route: Boolean,
    activeColor: String,
    inactiveColor: String,
    safeAreaInsetBottom: Boolean,
    value: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 1
    }
  },
  watch: {
    value: 'setActiveItem',
    children: 'setActiveItem'
  },
  methods: {
    setActiveItem: function setActiveItem() {
      var _this = this;

      this.children.forEach(function (item, index) {
        item.active = (item.name || index) === _this.value;
      });
    },
    onChange: function onChange(active) {
      if (active !== this.value) {
        this.$emit('input', active);
        this.$emit('change', active);
      }
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "style": {
        zIndex: this.zIndex
      },
      "class": [(_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_2__["BORDER_TOP_BOTTOM"]] = this.border, _ref), bem({
        fixed: this.fixed,
        'safe-area-inset-bottom': this.safeAreaInsetBottom
      })]
    }, [this.slots()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/Content.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/tabs/Content.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/touch */ "./node_modules/vant/es/mixins/touch.js");




var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_touch__WEBPACK_IMPORTED_MODULE_2__["TouchMixin"]],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem('content', {
        animated: this.animated
      }),
      "on": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.listeners)
    }, [this.renderChildren()]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/Title.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/tabs/Title.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");

var bem = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('tab')[1];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis
      }
    }, [this.title])]);
  }
});

/***/ }),

/***/ "./node_modules/vant/es/tabs/index.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/tabs/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/vant/es/tabs/utils.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/router */ "./node_modules/vant/es/utils/router.js");
/* harmony import */ var _utils_dom_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom/style */ "./node_modules/vant/es/utils/dom/style.js");
/* harmony import */ var _mixins_relation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/relation */ "./node_modules/vant/es/mixins/relation.js");
/* harmony import */ var _mixins_bind_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/bind-event */ "./node_modules/vant/es/mixins/bind-event.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");
/* harmony import */ var _utils_dom_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dom/scroll */ "./node_modules/vant/es/utils/dom/scroll.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Title */ "./node_modules/vant/es/tabs/Title.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Content */ "./node_modules/vant/es/tabs/Content.js");
/* harmony import */ var _sticky__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sticky */ "./node_modules/vant/es/sticky/index.js");












var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('tabs'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [Object(_mixins_relation__WEBPACK_IMPORTED_MODULE_4__["ParentMixin"])('vanTabs'), Object(_mixins_bind_event__WEBPACK_IMPORTED_MODULE_5__["BindEventMixin"])(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      var _this = this;

      this.setCurrentIndexByName(this.currentName || this.active);
      this.setLine();
      this.$nextTick(function () {
        _this.scrollIntoView(true);
      });
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_7__["setRootScrollTop"])(Math.ceil(Object(_utils_dom_scroll__WEBPACK_IMPORTED_MODULE_7__["getElementTop"])(this.$el) - this.offsetTop));
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.inited = true;

        _this2.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this3 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this3.$refs.titles;

        if (!titles || !titles[_this3.currentIndex] || _this3.type !== 'line' || Object(_utils_dom_style__WEBPACK_IMPORTED_MODULE_3__["isHidden"])(_this3.$el)) {
          return;
        }

        var title = titles[_this3.currentIndex].$el;
        var lineWidth = _this3.lineWidth,
            lineHeight = _this3.lineHeight;
        var width = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(width),
          backgroundColor: _this3.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this3.duration + "s";
        }

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(lineHeight)) {
          var height = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addUnit"])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this3.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["scrollLeftTo"])(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },
  render: function render() {
    var _this5 = this,
        _ref;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this5.color,
          "isActive": index === _this5.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this5.titleActiveColor,
          "inactiveColor": _this5.titleInactiveColor,
          "swipeThreshold": _this5.swipeThreshold
        },
        "on": {
          "click": function click() {
            _this5.onClick(index);

            Object(_utils_router__WEBPACK_IMPORTED_MODULE_2__["route"])(item.$router, item);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_6__["BORDER_TOP_BOTTOM"]] = type === 'line' && this.border, _ref)]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": bem([type])
    }, [this.sticky ? h(_sticky__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onScroll
      }
    }, [Wrap]) : Wrap, h(_Content__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/tabs/utils.js":
/*!********************************************!*\
  !*** ./node_modules/vant/es/tabs/utils.js ***!
  \********************************************/
/*! exports provided: scrollLeftTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeftTo", function() { return scrollLeftTo; });
/* harmony import */ var _utils_dom_raf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/raf */ "./node_modules/vant/es/utils/dom/raf.js");

function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      Object(_utils_dom_raf__WEBPACK_IMPORTED_MODULE_0__["raf"])(animate);
    }
  }

  animate();
}

/***/ }),

/***/ "./node_modules/vant/es/tag/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vant/es/tag/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/constant */ "./node_modules/vant/es/utils/constant.js");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('tag'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "style": style,
    "class": [bem([classes, type]), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_3__["BORDER_SURROUND"]] = plain, _ref)]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(Tag));

/***/ }),

/***/ "./node_modules/vant/es/toast/Toast.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/toast/Toast.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _mixins_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/popup */ "./node_modules/vant/es/mixins/popup/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loading */ "./node_modules/vant/es/loading/index.js");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createNamespace"])('toast'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  mixins: [_mixins_popup__WEBPACK_IMPORTED_MODULE_1__["PopupMixin"]],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    closeOnClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable'
  },
  methods: {
    onClick: function onClick() {
      if (this.closeOnClick) {
        this.close();
      }
    },
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type,
        icon = this.icon,
        message = this.message,
        iconPrefix = this.iconPrefix,
        loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
          "class": bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType
          }
        });
      }
    }

    function Message() {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isDef"])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": bem('text')
      }, [message]);
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([this.position, {
        text: !hasIcon && type !== 'loading'
      }]), this.className],
      "on": {
        "click": this.onClick
      }
    }, [ToastIcon(), Message()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/toast/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/toast/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast */ "./node_modules/vant/es/toast/Toast.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");




var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null,
  closeOnClick: false
};
var queue = [];
var multiple = false;

var currentOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultOptions);

function parseOptions(message) {
  if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isObj"])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (_utils__WEBPACK_IMPORTED_MODULE_3__["isServer"]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (vue__WEBPACK_IMPORTED_MODULE_1__["default"].extend(_Toast__WEBPACK_IMPORTED_MODULE_2__["default"]))({
      el: document.createElement('div')
    });
    toast.$on('input', function (value) {
      toast.value = value;
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !_utils__WEBPACK_IMPORTED_MODULE_3__["isServer"]) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  });

  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = function (options) {
  Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultOptions);
};

Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

Toast.install = function () {
  vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(_Toast__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

vue__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.$toast = Toast;
/* harmony default export */ __webpack_exports__["default"] = (Toast);

/***/ }),

/***/ "./node_modules/vant/es/tree-select/index.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/tree-select/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/babel-helper-vue-jsx-merge-props */ "./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functional */ "./node_modules/vant/es/utils/functional.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar */ "./node_modules/vant/es/sidebar/index.js");
/* harmony import */ var _sidebar_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar-item */ "./node_modules/vant/es/sidebar-item/index.js");





 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('tree-select'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function TreeSelect(h, props, slots, ctx) {
  var height = props.height,
      items = props.items,
      mainActiveIndex = props.mainActiveIndex,
      activeId = props.activeId;
  var selectedItem = items[mainActiveIndex] || {};
  var subItems = selectedItem.children || [];
  var isMultiple = Array.isArray(activeId);

  function isActiveItem(id) {
    return isMultiple ? activeId.indexOf(id) !== -1 : activeId === id;
  }

  var Navs = items.map(function (item) {
    return h(_sidebar_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "attrs": {
        "dot": item.dot,
        "info": item.info,
        "title": item.text,
        "disabled": item.disabled
      },
      "class": bem('nav-item')
    });
  });

  function Content() {
    if (slots.content) {
      return slots.content();
    }

    return subItems.map(function (item) {
      return h("div", {
        "key": item.id,
        "class": ['van-ellipsis', bem('item', {
          active: isActiveItem(item.id),
          disabled: item.disabled
        })],
        "on": {
          "click": function click() {
            if (!item.disabled) {
              var newActiveId = item.id;

              if (isMultiple) {
                newActiveId = activeId.slice();
                var index = newActiveId.indexOf(item.id);

                if (index !== -1) {
                  newActiveId.splice(index, 1);
                } else if (newActiveId.length < props.max) {
                  newActiveId.push(item.id);
                }
              }

              Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'click-item', item);
              Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'update:active-id', newActiveId); // compatible for old usage, should be removed in next major version

              Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'itemclick', item);
            }
          }
        }
      }, [item.text, isActiveItem(item.id) && h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "name": "checked",
          "size": "16px"
        },
        "class": bem('selected')
      })]);
    });
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem(),
    "style": {
      height: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(height)
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["inherit"])(ctx)]), [h(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "class": bem('nav'),
    "attrs": {
      "activeKey": mainActiveIndex
    },
    "on": {
      "change": function change(index) {
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'click-nav', index);
        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'update:main-active-index', index); // compatible for old usage, should be removed in next major version

        Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__["emit"])(ctx, 'navclick', index);
      }
    }
  }, [Navs]), h("div", {
    "class": bem('content')
  }, [Content()])]);
}

TreeSelect.props = {
  max: {
    type: Number,
    default: Infinity
  },
  items: {
    type: Array,
    default: function _default() {
      return [];
    }
  },
  height: {
    type: [Number, String],
    default: 300
  },
  activeId: {
    type: [Number, String, Array],
    default: 0
  },
  mainActiveIndex: {
    type: Number,
    default: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (createComponent(TreeSelect));

/***/ }),

/***/ "./node_modules/vant/es/uploader/index.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/uploader/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/vant/es/uploader/utils.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "./node_modules/vant/es/icon/index.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image */ "./node_modules/vant/es/image/index.js");
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-preview */ "./node_modules/vant/es/image-preview/index.js");







var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createNamespace"])('uploader'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["default"] = (createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    beforeDelete: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    previewFullImage: {
      type: Boolean,
      default: true
    },
    imageFit: {
      type: String,
      default: 'cover'
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    detail: function detail() {
      return {
        name: this.name
      };
    },
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["addUnit"])(this.previewSize);
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isOversize"])(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["readFile"])(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            return {
              file: file,
              content: contents[index]
            };
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["readFile"])(files, this.resultType).then(function (content) {
          _this2.onAfterRead({
            file: files,
            content: content
          }, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toArray"])(files)));

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },
    onDelete: function onDelete(file, index) {
      var _this3 = this;

      if (this.beforeDelete) {
        var response = this.beforeDelete(file, this.detail);

        if (!response) {
          return;
        }

        if (response.then) {
          response.then(function () {
            _this3.deleteFile(file, index);
          }).catch(_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]);
          return;
        }
      }

      this.deleteFile(file, index);
    },
    deleteFile: function deleteFile(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file);
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var _this4 = this;

      if (!this.previewFullImage) {
        return;
      }

      var imageFiles = this.fileList.filter(function (item) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isImageFile"])(item);
      }).map(function (item) {
        return item.content || item.url;
      });
      Object(_image_preview__WEBPACK_IMPORTED_MODULE_5__["default"])({
        images: imageFiles,
        closeOnPopstate: true,
        startPosition: imageFiles.indexOf(item.content || item.url),
        onClose: function onClose() {
          _this4.$emit('close-preview');
        }
      });
    },
    onClickPreview: function onClickPreview(file) {
      this.$emit('click-preview', file, this.detail);
    },
    renderPreviewItem: function renderPreviewItem(item, index) {
      var _this5 = this;

      var h = this.$createElement;
      var DeleteIcon = h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "name": "delete"
        },
        "class": bem('preview-delete'),
        "on": {
          "click": function click(event) {
            event.stopPropagation();

            _this5.onDelete(item, index);
          }
        }
      });
      var Preview = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isImageFile"])(item) ? h(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "attrs": {
          "fit": this.imageFit,
          "src": item.content || item.url,
          "width": this.previewSize,
          "height": this.previewSize
        },
        "class": bem('preview-image'),
        "on": {
          "click": function click() {
            _this5.onPreviewImage(item);
          }
        }
      }) : h("div", {
        "class": bem('file'),
        "style": {
          width: this.previewSizeWithUnit,
          height: this.previewSizeWithUnit
        }
      }, [h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "class": bem('file-icon'),
        "attrs": {
          "name": "description"
        }
      }), h("div", {
        "class": [bem('file-name'), 'van-ellipsis']
      }, [item.file ? item.file.name : item.url])]);
      return h("div", {
        "class": bem('preview'),
        "on": {
          "click": function click() {
            _this5.onClickPreview(item);
          }
        }
      }, [Preview, DeleteIcon]);
    },
    renderPreviewList: function renderPreviewList() {
      if (this.previewImage) {
        return this.fileList.map(this.renderPreviewItem);
      }
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": bem('upload'),
        "style": style
      }, [h(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "attrs": {
          "name": "plus"
        },
        "class": bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem()
    }, [h("div", {
      "class": bem('wrapper')
    }, [this.renderPreviewList(), this.renderUpload()])]);
  }
}));

/***/ }),

/***/ "./node_modules/vant/es/uploader/utils.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/uploader/utils.js ***!
  \************************************************/
/*! exports provided: toArray, readFile, isOversize, isImageUrl, isImageFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOversize", function() { return isOversize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageUrl", function() { return isImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImageFile", function() { return isImageFile; });
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function readFile(file, resultType) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/constant.js":
/*!************************************************!*\
  !*** ./node_modules/vant/es/utils/constant.js ***!
  \************************************************/
/*! exports provided: RED, BLUE, GREEN, WHITE, GRAY, GRAY_DARK, BORDER, BORDER_TOP, BORDER_LEFT, BORDER_RIGHT, BORDER_BOTTOM, BORDER_SURROUND, BORDER_TOP_BOTTOM, BORDER_UNSET_TOP_BOTTOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUE", function() { return BLUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GREEN", function() { return GREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAY", function() { return GRAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAY_DARK", function() { return GRAY_DARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER", function() { return BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_TOP", function() { return BORDER_TOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_LEFT", function() { return BORDER_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_RIGHT", function() { return BORDER_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_BOTTOM", function() { return BORDER_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_SURROUND", function() { return BORDER_SURROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_TOP_BOTTOM", function() { return BORDER_TOP_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_UNSET_TOP_BOTTOM", function() { return BORDER_UNSET_TOP_BOTTOM; });
// color
var RED = '#ee0a24';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff';
var GRAY = '#c9c9c9';
var GRAY_DARK = '#969799'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_RIGHT = BORDER + "--right";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";
var BORDER_UNSET_TOP_BOTTOM = BORDER + "-unset--top-bottom";

/***/ }),

/***/ "./node_modules/vant/es/utils/create/bem.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/utils/create/bem.js ***!
  \**************************************************/
/*! exports provided: createBEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBEM", function() { return createBEM; });
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/component.js":
/*!********************************************************!*\
  !*** ./node_modules/vant/es/utils/create/component.js ***!
  \********************************************************/
/*! exports provided: unifySlots, createComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unifySlots", function() { return unifySlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale */ "./node_modules/vant/es/locale/index.js");
/* harmony import */ var _format_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _mixins_slots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/slots */ "./node_modules/vant/es/mixins/slots.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(_format_string__WEBPACK_IMPORTED_MODULE_1__["camelize"])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(_mixins_slots__WEBPACK_IMPORTED_MODULE_2__["SlotsMixin"]);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/i18n.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/utils/create/i18n.js ***!
  \***************************************************/
/*! exports provided: createI18N */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createI18N", function() { return createI18N; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _format_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/string */ "./node_modules/vant/es/utils/format/string.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../locale */ "./node_modules/vant/es/locale/index.js");



function createI18N(name) {
  var prefix = Object(_format_string__WEBPACK_IMPORTED_MODULE_1__["camelize"])(name) + '.';
  return function (path) {
    var message = Object(___WEBPACK_IMPORTED_MODULE_0__["get"])(_locale__WEBPACK_IMPORTED_MODULE_2__["default"].messages(), prefix + path) || Object(___WEBPACK_IMPORTED_MODULE_0__["get"])(_locale__WEBPACK_IMPORTED_MODULE_2__["default"].messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}

/***/ }),

/***/ "./node_modules/vant/es/utils/create/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vant/es/utils/create/index.js ***!
  \****************************************************/
/*! exports provided: createNamespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespace", function() { return createNamespace; });
/* harmony import */ var _bem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bem */ "./node_modules/vant/es/utils/create/bem.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./node_modules/vant/es/utils/create/component.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./node_modules/vant/es/utils/create/i18n.js");



function createNamespace(name) {
  name = 'van-' + name;
  return [Object(_component__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(name), Object(_bem__WEBPACK_IMPORTED_MODULE_0__["createBEM"])(name), Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["createI18N"])(name)];
}

/***/ }),

/***/ "./node_modules/vant/es/utils/deep-assign.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/utils/deep-assign.js ***!
  \***************************************************/
/*! exports provided: deepAssign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepAssign", function() { return deepAssign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./node_modules/vant/es/utils/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__["isDef"])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__["isObj"])(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/deep-clone.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/utils/deep-clone.js ***!
  \**************************************************/
/*! exports provided: deepClone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepClone", function() { return deepClone; });
/* harmony import */ var _deep_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deep-assign */ "./node_modules/vant/es/utils/deep-assign.js");

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(_deep_assign__WEBPACK_IMPORTED_MODULE_0__["deepAssign"])({}, obj);
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/event.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/utils/dom/event.js ***!
  \*************************************************/
/*! exports provided: supportsPassive, on, off, stopPropagation, preventDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return supportsPassive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/vant/es/utils/index.js");

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;

if (!___WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!___WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!___WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/raf.js":
/*!***********************************************!*\
  !*** ./node_modules/vant/es/utils/dom/raf.js ***!
  \***********************************************/
/*! exports provided: raf, doubleRaf, cancelRaf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleRaf", function() { return doubleRaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRaf", function() { return cancelRaf; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/vant/es/utils/index.js");
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = ___WEBPACK_IMPORTED_MODULE_0__["isServer"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/reset-scroll.js":
/*!********************************************************!*\
  !*** ./node_modules/vant/es/utils/dom/reset-scroll.js ***!
  \********************************************************/
/*! exports provided: resetScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetScroll", function() { return resetScroll; });
/* harmony import */ var _validate_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate/system */ "./node_modules/vant/es/utils/validate/system.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./node_modules/vant/es/utils/dom/scroll.js");
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var isIOS = Object(_validate_system__WEBPACK_IMPORTED_MODULE_0__["isIOS"])();
/* istanbul ignore next */

function resetScroll() {
  if (isIOS) {
    Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["setRootScrollTop"])(Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["getRootScrollTop"])());
  }
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/scroll.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/utils/dom/scroll.js ***!
  \**************************************************/
/*! exports provided: getScrollEventTarget, getScrollTop, setScrollTop, getRootScrollTop, setRootScrollTop, getElementTop, getVisibleHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollEventTarget", function() { return getScrollEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollTop", function() { return getScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollTop", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootScrollTop", function() { return getRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRootScrollTop", function() { return setRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementTop", function() { return getElementTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleHeight", function() { return getVisibleHeight; });
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/dom/style.js":
/*!*************************************************!*\
  !*** ./node_modules/vant/es/utils/dom/style.js ***!
  \*************************************************/
/*! exports provided: isHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHidden", function() { return isHidden; });
function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/number.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/utils/format/number.js ***!
  \*****************************************************/
/*! exports provided: range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/string.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/utils/format/string.js ***!
  \*****************************************************/
/*! exports provided: camelize, padZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padZero", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/format/unit.js":
/*!***************************************************!*\
  !*** ./node_modules/vant/es/utils/format/unit.js ***!
  \***************************************************/
/*! exports provided: addUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnit", function() { return addUnit; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/vant/es/utils/index.js");
/* harmony import */ var _validate_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate/number */ "./node_modules/vant/es/utils/validate/number.js");


function addUnit(value) {
  if (!Object(___WEBPACK_IMPORTED_MODULE_0__["isDef"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validate_number__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(value) ? value + "px" : value;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/functional.js":
/*!**************************************************!*\
  !*** ./node_modules/vant/es/utils/functional.js ***!
  \**************************************************/
/*! exports provided: inherit, emit, mount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vant/es/utils/index.js ***!
  \*********************************************/
/*! exports provided: createNamespace, addUnit, isServer, noop, isDef, isObj, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDef", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/vant/es/utils/create/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createNamespace", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["createNamespace"]; });

/* harmony import */ var _format_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format/unit */ "./node_modules/vant/es/utils/format/unit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUnit", function() { return _format_unit__WEBPACK_IMPORTED_MODULE_2__["addUnit"]; });




var isServer = vue__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/router.js":
/*!**********************************************!*\
  !*** ./node_modules/vant/es/utils/router.js ***!
  \**********************************************/
/*! exports provided: route, functionalRoute, routeProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionalRoute", function() { return functionalRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeProps", function() { return routeProps; });
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    var promise = router[replace ? 'replace' : 'push'](to);
    /* istanbul ignore else */

    if (promise && promise.catch) {
      promise.catch(function (err) {
        /* istanbul ignore if */
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    }
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/date.js":
/*!*****************************************************!*\
  !*** ./node_modules/vant/es/utils/validate/date.js ***!
  \*****************************************************/
/*! exports provided: isDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/vant/es/utils/validate/number.js");

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Object(_number__WEBPACK_IMPORTED_MODULE_0__["isNaN"])(date.getTime());
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/email.js":
/*!******************************************************!*\
  !*** ./node_modules/vant/es/utils/validate/email.js ***!
  \******************************************************/
/*! exports provided: isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return isEmail; });
/* eslint-disable */
function isEmail(value) {
  var reg = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  return reg.test(value);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/mobile.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/utils/validate/mobile.js ***!
  \*******************************************************/
/*! exports provided: isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/number.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/utils/validate/number.js ***!
  \*******************************************************/
/*! exports provided: isNumber, isNaN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return isNaN; });
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}

/***/ }),

/***/ "./node_modules/vant/es/utils/validate/system.js":
/*!*******************************************************!*\
  !*** ./node_modules/vant/es/utils/validate/system.js ***!
  \*******************************************************/
/*! exports provided: isAndroid, isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./node_modules/vant/es/utils/index.js");

function isAndroid() {
  /* istanbul ignore next */
  return ___WEBPACK_IMPORTED_MODULE_0__["isServer"] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return ___WEBPACK_IMPORTED_MODULE_0__["isServer"] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}

/***/ }),

/***/ "./node_modules/vue-lazyload/vue-lazyload.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-lazyload/vue-lazyload.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Vue-Lazyload.js v1.2.3
 * (c) 2018 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";function e(e){return e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){e=e||{};var t=arguments.length,i=0;if(1===t)return e;for(;++i<t;){var o=arguments[i];g(e)&&(e=o),r(o)&&n(e,o)}return e}function n(e,n){m(e,n);for(var o in n)if("__proto__"!==o&&i(n,o)){var a=n[o];r(a)?("undefined"===L(e[o])&&"function"===L(a)&&(e[o]=a),e[o]=t(e[o]||{},a)):e[o]=a}return e}function r(e){return"object"===L(e)||"function"===L(e)}function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){if(e.length){var n=e.indexOf(t);return n>-1?e.splice(n,1):void 0}}function a(e,t){for(var n=!1,r=0,i=e.length;r<i;r++)if(t(e[r])){n=!0;break}return n}function s(e,t){if("IMG"===e.tagName&&e.getAttribute("data-srcset")){var n=e.getAttribute("data-srcset"),r=[],i=e.parentNode,o=i.offsetWidth*t,a=void 0,s=void 0,u=void 0;n=n.trim().split(","),n.map(function(e){e=e.trim(),a=e.lastIndexOf(" "),-1===a?(s=e,u=999998):(s=e.substr(0,a),u=parseInt(e.substr(a+1,e.length-a-2),10)),r.push([u,s])}),r.sort(function(e,t){if(e[0]<t[0])return-1;if(e[0]>t[0])return 1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0});for(var l="",d=void 0,c=r.length,h=0;h<c;h++)if(d=r[h],d[0]>=o){l=d[1];break}return l}}function u(e,t){for(var n=void 0,r=0,i=e.length;r<i;r++)if(t(e[r])){n=e[r];break}return n}function l(){if(!k)return!1;var e=!0,t=document;try{var n=t.createElement("object");n.type="image/webp",n.style.visibility="hidden",n.innerHTML="!",t.body.appendChild(n),e=!n.offsetWidth,t.body.removeChild(n)}catch(t){e=!1}return e}function d(e,t){var n=null,r=0;return function(){if(!n){var i=Date.now()-r,o=this,a=arguments,s=function(){r=Date.now(),n=!1,e.apply(o,a)};i>=t?s():n=setTimeout(s,t)}}}function c(e){return null!==e&&"object"===(void 0===e?"undefined":p(e))}function h(e){if(!(e instanceof Object))return[];if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function f(e){for(var t=e.length,n=[],r=0;r<t;r++)n.push(e[r]);return n}function v(){}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},y=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=function(e){return null==e||"function"!=typeof e&&"object"!==(void 0===e?"undefined":p(e))},m=function(e,t){if(null===e||void 0===e)throw new TypeError("expected first argument to be an object.");if(void 0===t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var n=Object.prototype.propertyIsEnumerable,r=Object(e),i=arguments.length,o=0;++o<i;)for(var a=Object(arguments[o]),s=Object.getOwnPropertySymbols(a),u=0;u<s.length;u++){var l=s[u];n.call(a,l)&&(r[l]=a[l])}return r},w=Object.prototype.toString,L=function(t){var n=void 0===t?"undefined":p(t);return"undefined"===n?"undefined":null===t?"null":!0===t||!1===t||t instanceof Boolean?"boolean":"string"===n||t instanceof String?"string":"number"===n||t instanceof Number?"number":"function"===n||t instanceof Function?void 0!==t.constructor.name&&"Generator"===t.constructor.name.slice(0,9)?"generatorfunction":"function":void 0!==Array.isArray&&Array.isArray(t)?"array":t instanceof RegExp?"regexp":t instanceof Date?"date":(n=w.call(t),"[object RegExp]"===n?"regexp":"[object Date]"===n?"date":"[object Arguments]"===n?"arguments":"[object Error]"===n?"error":"[object Promise]"===n?"promise":e(t)?"buffer":"[object Set]"===n?"set":"[object WeakSet]"===n?"weakset":"[object Map]"===n?"map":"[object WeakMap]"===n?"weakmap":"[object Symbol]"===n?"symbol":"[object Map Iterator]"===n?"mapiterator":"[object Set Iterator]"===n?"setiterator":"[object String Iterator]"===n?"stringiterator":"[object Array Iterator]"===n?"arrayiterator":"[object Int8Array]"===n?"int8array":"[object Uint8Array]"===n?"uint8array":"[object Uint8ClampedArray]"===n?"uint8clampedarray":"[object Int16Array]"===n?"int16array":"[object Uint16Array]"===n?"uint16array":"[object Int32Array]"===n?"int32array":"[object Uint32Array]"===n?"uint32array":"[object Float32Array]"===n?"float32array":"[object Float64Array]"===n?"float64array":"object")},_=t,k="undefined"!=typeof window,E=k&&"IntersectionObserver"in window,A={event:"event",observer:"observer"},j=function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if(k)return"function"==typeof window.CustomEvent?window.CustomEvent:(e.prototype=window.Event.prototype,e)}(),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return k?window.devicePixelRatio||e:e},T=function(){if(k){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}}(),O={on:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];T?e.addEventListener(t,n,{capture:r,passive:!0}):e.addEventListener(t,n,r)},off:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener(t,n,r)}},I=function(e,t,n){var r=new Image;r.src=e.src,r.onload=function(){t({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src})},r.onerror=function(e){n(e)}},x=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},S=function(e){return x(e,"overflow")+x(e,"overflow-y")+x(e,"overflow-x")},$=function(e){if(k){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(S(t)))return t;t=t.parentNode}return window}},H={},Q=function(){function e(t){var n=t.el,r=t.src,i=t.error,o=t.loading,a=t.bindType,s=t.$parent,u=t.options,l=t.elRenderer;b(this,e),this.el=n,this.src=r,this.error=i,this.loading=o,this.bindType=a,this.attempt=0,this.naturalHeight=0,this.naturalWidth=0,this.options=u,this.rect=null,this.$parent=s,this.elRenderer=l,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}return y(e,[{key:"initState",value:function(){this.el.dataset.src=this.src,this.state={error:!1,loaded:!1,rendered:!1}}},{key:"record",value:function(e){this.performanceData[e]=Date.now()}},{key:"update",value:function(e){var t=e.src,n=e.loading,r=e.error,i=this.src;this.src=t,this.loading=n,this.error=r,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}},{key:"getRect",value:function(){this.rect=this.el.getBoundingClientRect()}},{key:"checkInView",value:function(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}},{key:"filter",value:function(){var e=this;h(this.options.filter).map(function(t){e.options.filter[t](e,e.options)})}},{key:"renderLoading",value:function(e){var t=this;I({src:this.loading},function(n){t.render("loading",!1),e()},function(){e(),t.options.silent||console.warn("VueLazyload log: load failed with loading image("+t.loading+")")})}},{key:"load",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log("VueLazyload log: "+this.src+" tried too more than "+this.options.attempt+" times"),void t()):this.state.loaded||H[this.src]?(this.state.loaded=!0,t(),this.render("loaded",!0)):void this.renderLoading(function(){e.attempt++,e.record("loadStart"),I({src:e.src},function(n){e.naturalHeight=n.naturalHeight,e.naturalWidth=n.naturalWidth,e.state.loaded=!0,e.state.error=!1,e.record("loadEnd"),e.render("loaded",!1),H[e.src]=1,t()},function(t){!e.options.silent&&console.error(t),e.state.error=!0,e.state.loaded=!1,e.render("error",!1)})})}},{key:"render",value:function(e,t){this.elRenderer(this,e,t)}},{key:"performance",value:function(){var e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}},{key:"destroy",value:function(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}]),e}(),C="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],W={rootMargin:"0px",threshold:0},D=function(e){return function(){function t(e){var n=e.preLoad,r=e.error,i=e.throttleWait,o=e.preLoadTop,a=e.dispatchEvent,s=e.loading,u=e.attempt,c=e.silent,h=void 0===c||c,f=e.scale,v=e.listenEvents,p=(e.hasbind,e.filter),y=e.adapter,g=e.observer,m=e.observerOptions;b(this,t),this.version="1.2.3",this.mode=A.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:h,dispatchEvent:!!a,throttleWait:i||200,preLoad:n||1.3,preLoadTop:o||0,error:r||C,loading:s||C,attempt:u||3,scale:f||z(f),ListenEvents:v||R,hasbind:!1,supportWebp:l(),filter:p||{},adapter:y||{},observer:!!g,observerOptions:m||W},this._initEvent(),this.lazyLoadHandler=d(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?A.observer:A.event)}return y(t,[{key:"config",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_(this.options,e)}},{key:"performance",value:function(){var e=[];return this.ListenerQueue.map(function(t){e.push(t.performance())}),e}},{key:"addLazyBox",value:function(e){this.ListenerQueue.push(e),k&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}},{key:"add",value:function(t,n,r){var i=this;if(a(this.ListenerQueue,function(e){return e.el===t}))return this.update(t,n),e.nextTick(this.lazyLoadHandler);var o=this._valueFormatter(n.value),u=o.src,l=o.loading,d=o.error;e.nextTick(function(){u=s(t,i.options.scale)||u,i._observer&&i._observer.observe(t);var o=Object.keys(n.modifiers)[0],a=void 0;o&&(a=r.context.$refs[o],a=a?a.$el||a:document.getElementById(o)),a||(a=$(t));var c=new Q({bindType:n.arg,$parent:a,el:t,loading:l,error:d,src:u,elRenderer:i._elRenderer.bind(i),options:i.options});i.ListenerQueue.push(c),k&&(i._addListenerTarget(window),i._addListenerTarget(a)),i.lazyLoadHandler(),e.nextTick(function(){return i.lazyLoadHandler()})})}},{key:"update",value:function(t,n){var r=this,i=this._valueFormatter(n.value),o=i.src,a=i.loading,l=i.error;o=s(t,this.options.scale)||o;var d=u(this.ListenerQueue,function(e){return e.el===t});d&&d.update({src:o,loading:a,error:l}),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),this.lazyLoadHandler(),e.nextTick(function(){return r.lazyLoadHandler()})}},{key:"remove",value:function(e){if(e){this._observer&&this._observer.unobserve(e);var t=u(this.ListenerQueue,function(t){return t.el===e});t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),o(this.ListenerQueue,t)&&t.destroy())}}},{key:"removeComponent",value:function(e){e&&(o(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}},{key:"setMode",value:function(e){var t=this;E||e!==A.observer||(e=A.event),this.mode=e,e===A.event?(this._observer&&(this.ListenerQueue.forEach(function(e){t._observer.unobserve(e.el)}),this._observer=null),this.TargetQueue.forEach(function(e){t._initListen(e.el,!0)})):(this.TargetQueue.forEach(function(e){t._initListen(e.el,!1)}),this._initIntersectionObserver())}},{key:"_addListenerTarget",value:function(e){if(e){var t=u(this.TargetQueue,function(t){return t.el===e});return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===A.event&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}}},{key:"_removeListenerTarget",value:function(e){var t=this;this.TargetQueue.forEach(function(n,r){n.el===e&&(--n.childrenCount||(t._initListen(n.el,!1),t.TargetQueue.splice(r,1),n=null))})}},{key:"_initListen",value:function(e,t){var n=this;this.options.ListenEvents.forEach(function(r){return O[t?"on":"off"](e,r,n.lazyLoadHandler)})}},{key:"_initEvent",value:function(){var e=this;this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=function(t,n){e.Event.listeners[t].push(n)},this.$once=function(t,n){function r(){i.$off(t,r),n.apply(i,arguments)}var i=e;e.$on(t,r)},this.$off=function(t,n){if(!n)return void(e.Event.listeners[t]=[]);o(e.Event.listeners[t],n)},this.$emit=function(t,n,r){e.Event.listeners[t].forEach(function(e){return e(n,r)})}}},{key:"_lazyLoadHandler",value:function(){var e=this,t=!1;this.ListenerQueue.forEach(function(n,r){n.state.loaded||(t=n.checkInView())&&n.load(function(){!n.error&&n.loaded&&e.ListenerQueue.splice(r,1)})})}},{key:"_initIntersectionObserver",value:function(){var e=this;E&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(function(t){e._observer.observe(t.el)}))}},{key:"_observerHandler",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&n.ListenerQueue.forEach(function(t){if(t.el===e.target){if(t.state.loaded)return n._observer.unobserve(t.el);t.load()}})})}},{key:"_elRenderer",value:function(e,t,n){if(e.el){var r=e.el,i=e.bindType,o=void 0;switch(t){case"loading":o=e.loading;break;case"error":o=e.error;break;default:o=e.src}if(i?r.style[i]='url("'+o+'")':r.getAttribute("src")!==o&&r.setAttribute("src",o),r.setAttribute("lazy",t),this.$emit(t,e,n),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){var a=new j(t,{detail:e});r.dispatchEvent(a)}}}},{key:"_valueFormatter",value:function(e){var t=e,n=this.options.loading,r=this.options.error;return c(e)&&(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),t=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:t,loading:n,error:r}}}]),t}()},B=function(e){return{props:{tag:{type:String,default:"div"}},render:function(e){return!1===this.show?e(this.tag):e(this.tag,null,this.$slots.default)},data:function(){return{el:null,state:{loaded:!1},rect:{},show:!1}},mounted:function(){this.el=this.$el,e.addLazyBox(this),e.lazyLoadHandler()},beforeDestroy:function(){e.removeComponent(this)},methods:{getRect:function(){this.rect=this.$el.getBoundingClientRect()},checkInView:function(){return this.getRect(),k&&this.rect.top<window.innerHeight*e.options.preLoad&&this.rect.bottom>0&&this.rect.left<window.innerWidth*e.options.preLoad&&this.rect.right>0},load:function(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)}}}},V=function(){function e(t){var n=t.lazy;b(this,e),this.lazy=n,n.lazyContainerMananger=this,this._queue=[]}return y(e,[{key:"bind",value:function(e,t,n){var r=new N({el:e,binding:t,vnode:n,lazy:this.lazy});this._queue.push(r)}},{key:"update",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&r.update({el:e,binding:t,vnode:n})}},{key:"unbind",value:function(e,t,n){var r=u(this._queue,function(t){return t.el===e});r&&(r.clear(),o(this._queue,r))}}]),e}(),M={selector:"img"},N=function(){function e(t){var n=t.el,r=t.binding,i=t.vnode,o=t.lazy;b(this,e),this.el=null,this.vnode=i,this.binding=r,this.options={},this.lazy=o,this._queue=[],this.update({el:n,binding:r})}return y(e,[{key:"update",value:function(e){var t=this,n=e.el,r=e.binding;this.el=n,this.options=_({},M,r.value),this.getImgs().forEach(function(e){t.lazy.add(e,_({},t.binding,{value:{src:e.dataset.src,error:e.dataset.error,loading:e.dataset.loading}}),t.vnode)})}},{key:"getImgs",value:function(){return f(this.el.querySelectorAll(this.options.selector))}},{key:"clear",value:function(){var e=this;this.getImgs().forEach(function(t){return e.lazy.remove(t)}),this.vnode=null,this.binding=null,this.lazy=null}}]),e}();return{install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=D(e),r=new n(t),i=new V({lazy:r}),o="2"===e.version.split(".")[0];e.prototype.$Lazyload=r,t.lazyComponent&&e.component("lazy-component",B(r)),o?(e.directive("lazy",{bind:r.add.bind(r),update:r.update.bind(r),componentUpdated:r.lazyLoadHandler.bind(r),unbind:r.remove.bind(r)}),e.directive("lazy-container",{bind:i.bind.bind(i),update:i.update.bind(i),unbind:i.unbind.bind(i)})):(e.directive("lazy",{bind:r.lazyLoadHandler.bind(r),update:function(e,t){_(this.vm.$refs,this.vm.$els),r.add(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){r.remove(this.el)}}),e.directive("lazy-container",{update:function(e,t){i.update(this.el,{modifiers:this.modifiers||{},arg:this.arg,value:e,oldValue:t},{context:this.vm})},unbind:function(){i.unbind(this.el)}}))}}});


/***/ })

}]);