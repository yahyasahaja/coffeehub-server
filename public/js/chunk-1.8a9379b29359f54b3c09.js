webpackJsonp([1],{

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _dropdown = __webpack_require__(359);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(328);

var _index2 = _interopRequireDefault(_index);

var _dropdownTehme = __webpack_require__(329);

var _dropdownTehme2 = _interopRequireDefault(_dropdownTehme);

var _PopupBar = __webpack_require__(330);

var _PopupBar2 = _interopRequireDefault(_PopupBar);

var _store = __webpack_require__(123);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

var _config = __webpack_require__(122);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//STORE


//CONFIG


var categories = [{ value: 'all', label: 'Semua Cateogry' }];

var filters = [{ value: 'termurah', label: 'Termurah' }, { value: 'termahal', label: 'Termahal' }, { value: 'terlama', label: 'Terlama' }, { value: 'terbaru', label: 'Terbaru' }];

//COMPONENT

var Promo = function (_Component) {
  _inherits(Promo, _Component);

  function Promo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Promo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Promo.__proto__ || Object.getPrototypeOf(Promo)).call.apply(_ref, [this].concat(args))), _this), _this.state = { filter: 'terbaru', category: 'terbaru', categories: categories }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Promo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _store2.default.dispatch(actions.showPopup());
      this.searchBar.focus();
      _axios2.default.post(_config.END_POINT_URL, {
        query: '\n        query allProducts {\n          allCategories {\n            name\n          }\n        }\n      '
      }).then(function (res) {
        var categories = res.data.data.allCategories.map(function (_ref2, i) {
          var name = _ref2.name;
          return { value: name, label: name };
        });

        categories.unshift({ value: 'all', label: 'Semua Cateogry' });
        console.log('RESULT:', res.data.data, 'cat', categories);
        _this2.setState({ categories: categories });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _store2.default.dispatch(actions.hidePopup());
    }
  }, {
    key: 'handleChange',
    value: function handleChange(name, value) {
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'renderBar',
    value: function renderBar() {
      //if (window.navigator.userAgent.indexOf("Mac") == -1) 
      return [_react2.default.createElement(_dropdown2.default, {
        auto: true, allowBlank: false, theme: _dropdownTehme2.default,
        onChange: this.handleChange.bind(this, 'filter'),
        source: filters,
        value: this.state.filter,
        className: _index2.default.dropdown,
        label: 'Filter'
      }), _react2.default.createElement(_dropdown2.default, {
        auto: true, allowBlank: false, theme: _dropdownTehme2.default,
        onChange: this.handleChange.bind(this, 'category'),
        source: this.state.categories,
        value: this.state.category,
        className: _index2.default.dropdown,
        label: 'Category'
      })];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _PopupBar2.default,
        _extends({
          title: 'Search' }, this.props, {
          anim: _PopupBar.ANIMATE_HORIZONTAL,
          component: _react2.default.createElement(
            'div',
            { className: _index2.default.search },
            _react2.default.createElement('input', { type: 'text', placeholder: 'Meu belanja apa hari ini?',
              ref: function ref(el) {
                return _this3.searchBar = el;
              }
            })
          ),
          anotherComponents: [_react2.default.createElement(
            'div',
            { className: _index2.default.bar },
            this.renderBar()
          )]
        }),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Disukai Example'
        )
      );
    }
  }]);

  return Promo;
}(_react.Component);

exports.default = Promo;

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"index--container--d1eP364_","search":"index--search--21lGSDIu","bar":"index--bar--3JyTP0bY","dropdown":"index--dropdown--ln-XVQeH","appear":"index--appear--lGYy35yV","hide":"index--hide--1LYiyCqI"};

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"dropdown-tehme--value--SyJfY4a1","values":"dropdown-tehme--values--3ohZGNYm"};

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANIMATE_VERTICAL = exports.ANIMATE_HORIZONTAL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _popupBar = __webpack_require__(331);

var _popupBar2 = _interopRequireDefault(_popupBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//INNER_CONFIG
var ANIMATE_HORIZONTAL = exports.ANIMATE_HORIZONTAL = 'animateHorizontal';
var ANIMATE_VERTICAL = exports.ANIMATE_VERTICAL = 'animateVertical';

//COMPONENT

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.onBack = function () {
      var _this$props$history = _this.props.history,
          length = _this$props$history.length,
          goBack = _this$props$history.goBack,
          push = _this$props$history.push;


      if (length == 1) {
        push('/home');
      } else goBack();
    }, _this.checkScroll = function () {
      var hide = _this.props.hide;

      var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

      var anim = void 0;

      if (hide) {
        _this.current = scrollTop;
        var shouldAppear = _this.state.shouldAppear;


        if (scrollTop < 100 && !shouldAppear) _this.setState({ shouldAppear: true });else if (_this.current - _this.before > 3 && shouldAppear) {
          //scrolling down
          _this.setState({ shouldAppear: false });
        } else if (_this.current - _this.before < -10 && !shouldAppear) {
          _this.setState({ shouldAppear: true });
        }

        _this.before = _this.current;
      }
    }, _this.before = 0, _this.current = 0, _this.state = {
      anim: '',
      shouldAppear: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', this.checkScroll);
      window.addEventListener('gesturechange', this.checkScroll);
      window.scrollTo(0, 0);

      if (this.props.anim) {
        var anim = this.props.anim;

        setTimeout(function () {
          return _this2.setState({
            anim: anim === ANIMATE_HORIZONTAL ? _popupBar2.default['animate-horizontal'] : _popupBar2.default['animate-vertical']
          });
        }, 100);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.checkScroll);
      window.removeEventListener('gesturechange', this.checkScroll);
    }
  }, {
    key: 'renderTopComponent',
    value: function renderTopComponent() {
      var _props = this.props,
          cart = _props.cart,
          component = _props.component,
          backLink = _props.backLink,
          onBack = _props.onBack,
          rightComponent = _props.rightComponent,
          icons = _props.icons,
          anim = _props.anim,
          anotherComponents = _props.anotherComponents;


      if (component) return component;
      return [_react2.default.createElement(
        'div',
        { className: _popupBar2.default.title },
        _react2.default.createElement(
          'span',
          null,
          this.props.title
        )
      ), function () {
        if (rightComponent) return _react2.default.createElement('rightComponent', null);
        if (cart || icons) return _react2.default.createElement(
          'div',
          { className: _popupBar2.default.right },
          function () {
            if (cart) return _react2.default.createElement(_reactRouterDom.Link, { to: '/cart', className: 'mdi mdi-cart ' + _popupBar2.default.cart });
            if (icons) return icons.map(function (data, i) {
              _react2.default.createElement(_reactRouterDom.Link, {
                to: data.to, className: 'mdi mdi-' + data.icon + ' ' + _popupBar2.default.cart,
                onClick: data.onClick
              });
            });
          }()
        );
      }()];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          cart = _props2.cart,
          component = _props2.component,
          backLink = _props2.backLink,
          onBack = _props2.onBack,
          rightComponent = _props2.rightComponent,
          icons = _props2.icons,
          anim = _props2.anim,
          anotherComponents = _props2.anotherComponents;
      var shouldAppear = this.state.shouldAppear;

      var style = void 0,
          contentStyle = void 0,
          animClassName = void 0;
      if (!anim) style = {
        opacity: 1
      };

      if (this.bar) contentStyle = {
        paddingTop: this.bar.offsetHeight
      };

      if (shouldAppear) animClassName = _popupBar2.default.appear;else animClassName = _popupBar2.default.hide;

      return _react2.default.createElement(
        'div',
        { style: style, className: _popupBar2.default.container + ' ' + this.state.anim },
        _react2.default.createElement(
          'div',
          {
            className: _popupBar2.default.bar + ' ' + animClassName,
            ref: function ref(el) {
              return _this3.bar = el;
            }
          },
          _react2.default.createElement(
            'div',
            { className: _popupBar2.default['bar-wrapper'] },
            _react2.default.createElement(_reactRouterDom.Link, {
              to: backLink || '/home',
              className: 'mdi mdi-arrow-left ' + _popupBar2.default.back,
              onClick: onBack || this.onBack
            }),
            this.renderTopComponent()
          ),
          anotherComponents
        ),
        _react2.default.createElement(
          'div',
          { className: _popupBar2.default.content, style: contentStyle },
          this.props.children
        )
      );
    }
  }]);

  return Popup;
}(_react.Component);

exports.default = Popup;

/***/ }),

/***/ 331:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"popup-bar--container--eWwnWx77","bar":"popup-bar--bar--J6LJvlaC","bar-wrapper":"popup-bar--bar-wrapper--19yTTJZE","back":"popup-bar--back--2zFRejvw","title":"popup-bar--title--3x2yrkaf","right":"popup-bar--right--2s6zdCkL","cart":"popup-bar--cart--3TnSsP3z","content":"popup-bar--content--3bYh7svf","appear":"popup-bar--appear--1FRdTxin","hide":"popup-bar--hide--3dAftrv2","animate-vertical":"popup-bar--animate-vertical--1KCVkvfA","verticalAnimation":"popup-bar--verticalAnimation--1IErT4LO","animate-horizontal":"popup-bar--animate-horizontal--2U1Bky47","horizontalAnimation":"popup-bar--horizontalAnimation--39p0PsuI"};

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.inputFactory = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames4 = __webpack_require__(333);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _FontIcon = __webpack_require__(334);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var factory = function factory(FontIcon) {
  var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Input);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Input.__proto__ || Object.getPrototypeOf(Input)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
        var _this$props = _this.props,
            onChange = _this$props.onChange,
            multiline = _this$props.multiline,
            maxLength = _this$props.maxLength;

        var valueFromEvent = event.target.value;

        // Trim value to maxLength if that exists (only on multiline inputs).
        // Note that this is still required even tho we have the onKeyPress filter
        // because the user could paste smt in the textarea.
        var haveToTrim = multiline && maxLength && event.target.value.length > maxLength;
        var value = haveToTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;

        // propagate to to store and therefore to the input
        if (onChange) onChange(value, event);
      }, _this.handleAutoresize = function () {
        var element = _this.inputNode;
        var rows = _this.props.rows;

        if (typeof rows === 'number' && !isNaN(rows)) {
          element.style.height = null;
        } else {
          // compute the height difference between inner height and outer height
          var style = getComputedStyle(element, null);
          var heightOffset = style.boxSizing === 'content-box' ? -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)) : parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);

          // resize the input to its content size
          element.style.height = 'auto';
          element.style.height = element.scrollHeight + heightOffset + 'px';
        }
      }, _this.handleKeyPress = function (event) {
        // prevent insertion of more characters if we're a multiline input
        // and maxLength exists
        var _this$props2 = _this.props,
            multiline = _this$props2.multiline,
            maxLength = _this$props2.maxLength,
            onKeyPress = _this$props2.onKeyPress;

        if (multiline && maxLength) {
          // check if smt is selected, in which case the newly added charcter would
          // replace the selected characters, so the length of value doesn't actually
          // increase.
          var isReplacing = event.target.selectionEnd - event.target.selectionStart;
          var value = event.target.value;

          if (!isReplacing && value.length === maxLength) {
            event.preventDefault();
            event.stopPropagation();
            return undefined;
          }
        }

        if (onKeyPress) onKeyPress(event);
        return undefined;
      }, _this.valuePresent = function (value) {
        return value !== null && value !== undefined && value !== '' && !(typeof value === 'number' && isNaN(value));
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Input, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
          this.handleAutoresize();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.multiline && nextProps.multiline) {
          window.addEventListener('resize', this.handleAutoresize);
        } else if (this.props.multiline && !nextProps.multiline) {
          window.removeEventListener('resize', this.handleAutoresize);
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // resize the textarea, if nessesary
        if (this.props.multiline) this.handleAutoresize();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.multiline) window.removeEventListener('resize', this.handleAutoresize);
      }
    }, {
      key: 'blur',
      value: function blur() {
        this.inputNode.blur();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this.inputNode.focus();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames2,
            _this2 = this;

        var _props = this.props,
            children = _props.children,
            defaultValue = _props.defaultValue,
            disabled = _props.disabled,
            error = _props.error,
            floating = _props.floating,
            hint = _props.hint,
            icon = _props.icon,
            name = _props.name,
            labelText = _props.label,
            maxLength = _props.maxLength,
            multiline = _props.multiline,
            required = _props.required,
            theme = _props.theme,
            type = _props.type,
            value = _props.value,
            onKeyPress = _props.onKeyPress,
            _props$rows = _props.rows,
            rows = _props$rows === undefined ? 1 : _props$rows,
            others = _objectWithoutProperties(_props, ['children', 'defaultValue', 'disabled', 'error', 'floating', 'hint', 'icon', 'name', 'label', 'maxLength', 'multiline', 'required', 'theme', 'type', 'value', 'onKeyPress', 'rows']);

        var length = maxLength && value ? value.length : 0;
        var labelClassName = (0, _classnames5.default)(theme.label, _defineProperty({}, theme.fixed, !floating));

        var className = (0, _classnames5.default)(theme.input, (_classnames2 = {}, _defineProperty(_classnames2, theme.disabled, disabled), _defineProperty(_classnames2, theme.errored, error), _defineProperty(_classnames2, theme.hidden, type === 'hidden'), _defineProperty(_classnames2, theme.withIcon, icon), _classnames2), this.props.className);

        var valuePresent = this.valuePresent(value) || this.valuePresent(defaultValue);

        var inputElementProps = _extends({}, others, {
          className: (0, _classnames5.default)(theme.inputElement, _defineProperty({}, theme.filled, valuePresent)),
          onChange: this.handleChange,
          ref: function ref(node) {
            _this2.inputNode = node;
          },
          role: 'input',
          name: name,
          defaultValue: defaultValue,
          disabled: disabled,
          required: required,
          type: type,
          value: value
        });
        if (!multiline) {
          inputElementProps.maxLength = maxLength;
          inputElementProps.onKeyPress = onKeyPress;
        } else {
          inputElementProps.rows = rows;
          inputElementProps.onKeyPress = this.handleKeyPress;
        }

        return _react2.default.createElement('div', { 'data-react-toolbox': 'input', className: className }, _react2.default.createElement(multiline ? 'textarea' : 'input', inputElementProps), icon ? _react2.default.createElement(FontIcon, { className: theme.icon, value: icon }) : null, _react2.default.createElement('span', { className: theme.bar }), labelText ? _react2.default.createElement('label', { className: labelClassName }, labelText, required ? _react2.default.createElement('span', { className: theme.required }, ' * ') : null) : null, hint ? _react2.default.createElement('span', { hidden: labelText, className: theme.hint }, hint) : null, error ? _react2.default.createElement('span', { className: theme.error }, error) : null, maxLength ? _react2.default.createElement('span', { className: theme.counter }, length, '/', maxLength) : null, children);
      }
    }]);

    return Input;
  }(_react2.default.Component);

  Input.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    floating: _propTypes2.default.bool,
    hint: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
    maxLength: _propTypes2.default.number,
    multiline: _propTypes2.default.bool,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    onKeyPress: _propTypes2.default.func,
    required: _propTypes2.default.bool,
    rows: _propTypes2.default.number,
    theme: _propTypes2.default.shape({
      bar: _propTypes2.default.string,
      counter: _propTypes2.default.string,
      disabled: _propTypes2.default.string,
      error: _propTypes2.default.string,
      errored: _propTypes2.default.string,
      hidden: _propTypes2.default.string,
      hint: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      input: _propTypes2.default.string,
      inputElement: _propTypes2.default.string,
      required: _propTypes2.default.string,
      withIcon: _propTypes2.default.string
    }),
    type: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.object, _propTypes2.default.string])
  };
  Input.defaultProps = {
    className: '',
    hint: '',
    disabled: false,
    floating: true,
    multiline: false,
    required: false,
    type: 'text'
  };

  return Input;
};

var Input = factory(_FontIcon2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.INPUT)(Input);
exports.inputFactory = factory;
exports.Input = Input;

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = undefined;

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _Dropdown = __webpack_require__(360);

var _input = __webpack_require__(361);

var _theme = __webpack_require__(363);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Dropdown = (0, _Dropdown.dropdownFactory)(_input.Input);
var ThemedDropdown = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN, _theme2.default)(Dropdown);

exports.default = ThemedDropdown;
exports.Dropdown = ThemedDropdown;

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = exports.dropdownFactory = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(139);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames4 = __webpack_require__(333);

var _classnames5 = _interopRequireDefault(_classnames4);

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _Input = __webpack_require__(358);

var _Input2 = _interopRequireDefault(_Input);

var _events = __webpack_require__(341);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /* eslint-disable */

var factory = function factory(Input) {
  var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Dropdown);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false,
        up: false
      }, _this.getDocumentEvents = function () {
        return {
          click: _this.handleDocumentClick,
          touchend: _this.handleDocumentClick
        };
      }, _this.getSelectedItem = function () {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.props.source[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (item[_this.props.valueKey] === _this.props.value) return item;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return !_this.props.allowBlank ? _this.props.source[0] : undefined;
      }, _this.handleSelect = function (item, event) {
        if (_this.props.onBlur) _this.props.onBlur(event);
        if (!_this.props.disabled && _this.props.onChange) {
          if (_this.props.name) event.target.name = _this.props.name;
          _this.props.onChange(item, event);
          _this.close();
        }
      }, _this.handleClick = function (event) {
        _this.open(event);
        _events2.default.pauseEvent(event);
        if (_this.props.onClick) _this.props.onClick(event);
      }, _this.handleDocumentClick = function (event) {
        if (_this.state.active && !_events2.default.targetIsDescendant(event, _reactDom2.default.findDOMNode(_this))) {
          _this.setState({ active: false });
        }
      }, _this.close = function () {
        if (_this.state.active) {
          _this.setState({ active: false });
        }
      }, _this.open = function (event) {
        if (_this.state.active) return;
        var client = event.target.getBoundingClientRect();
        var screenHeight = window.innerHeight || document.documentElement.offsetHeight;
        var up = _this.props.auto ? client.top > screenHeight / 2 + client.height : false;
        if (_this.inputNode) _this.inputNode.blur();
        _this.setState({ active: true, up: up });
      }, _this.handleFocus = function (event) {
        event.stopPropagation();
        if (!_this.props.disabled) _this.open(event);
        if (_this.props.onFocus) _this.props.onFocus(event);
      }, _this.handleBlur = function (event) {
        event.stopPropagation();
        if (_this.state.active) _this.close();
        if (_this.props.onBlur) _this.props.onBlur(event);
      }, _this.renderValue = function (item, idx) {
        var _classnames;

        var _this$props = _this.props,
            labelKey = _this$props.labelKey,
            theme = _this$props.theme,
            valueKey = _this$props.valueKey;

        var className = (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, theme.selected, item[valueKey] === _this.props.value), _defineProperty(_classnames, theme.disabled, item.disabled), _classnames));
        return _react2.default.createElement('li', {
          key: idx,
          className: className,
          onClick: !item.disabled && _this.handleSelect.bind(_this, item[valueKey])
        }, _this.props.template ? _this.props.template(item) : item[labelKey]);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (!this.state.active && nextState.active) {
          _events2.default.addEventsToDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.active && !this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.active) {
          _events2.default.removeEventsFromDocument(this.getDocumentEvents());
        }
      }
    }, {
      key: 'renderTemplateValue',
      value: function renderTemplateValue(selected) {
        var _classnames2;

        var theme = this.props.theme;

        var className = (0, _classnames5.default)(theme.field, (_classnames2 = {}, _defineProperty(_classnames2, theme.errored, this.props.error), _defineProperty(_classnames2, theme.disabled, this.props.disabled), _defineProperty(_classnames2, theme.required, this.props.required), _classnames2));

        return _react2.default.createElement('div', { className: className, onClick: this.handleClick }, _react2.default.createElement('div', { className: theme.templateValue + ' ' + theme.value }, this.props.template(selected)), this.props.label ? _react2.default.createElement('label', { className: theme.label }, this.props.label, this.props.required ? _react2.default.createElement('span', { className: theme.required }, ' * ') : null) : null, this.props.error ? _react2.default.createElement('span', { className: theme.error }, this.props.error) : null);
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames3,
            _this2 = this;

        var _props = this.props,
            allowBlank = _props.allowBlank,
            auto = _props.auto,
            labelKey = _props.labelKey,
            required = _props.required,
            onChange = _props.onChange,
            onFocus = _props.onFocus,
            onBlur = _props.onBlur,
            source = _props.source,
            template = _props.template,
            theme = _props.theme,
            valueKey = _props.valueKey,
            others = _objectWithoutProperties(_props, ['allowBlank', 'auto', 'labelKey', 'required', 'onChange', 'onFocus', 'onBlur', 'source', 'template', 'theme', 'valueKey']);

        var selected = this.getSelectedItem();
        var className = (0, _classnames5.default)(theme.dropdown, (_classnames3 = {}, _defineProperty(_classnames3, theme.up, this.state.up), _defineProperty(_classnames3, theme.active, this.state.active), _defineProperty(_classnames3, theme.disabled, this.props.disabled), _defineProperty(_classnames3, theme.required, this.props.required), _classnames3), this.props.className);

        return _react2.default.createElement('div', {
          className: className,
          'data-react-toolbox': 'dropdown',
          onBlur: this.handleBlur,
          onFocus: this.handleFocus
        }, _react2.default.createElement(Input, _extends({}, others, {
          tabIndex: '0',
          className: theme.value,
          onClick: this.handleClick,
          required: this.props.required,
          readOnly: true,
          innerRef: function innerRef(node) {
            _this2.inputNode = node;
          },
          type: template && selected ? 'hidden' : null,
          theme: theme,
          themeNamespace: 'input',
          value: selected && selected[labelKey] ? selected[labelKey] : ''
        })), template && selected ? this.renderTemplateValue(selected) : null, _react2.default.createElement('ul', { className: theme.values }, source.map(this.renderValue)));
      }
    }]);

    return Dropdown;
  }(_react.Component);

  Dropdown.propTypes = {
    allowBlank: _propTypes2.default.bool,
    auto: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.string,
    label: _propTypes2.default.string,
    labelKey: _propTypes2.default.string,
    name: _propTypes2.default.string,
    onBlur: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    onFocus: _propTypes2.default.func,
    required: _propTypes2.default.bool,
    source: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])).isRequired,
    template: _propTypes2.default.func,
    theme: _propTypes2.default.shape({
      active: _propTypes2.default.string,
      disabled: _propTypes2.default.string,
      dropdown: _propTypes2.default.string,
      error: _propTypes2.default.string,
      errored: _propTypes2.default.string,
      field: _propTypes2.default.string,
      label: _propTypes2.default.string,
      required: _propTypes2.default.string,
      selected: _propTypes2.default.string,
      templateValue: _propTypes2.default.string,
      up: _propTypes2.default.string,
      value: _propTypes2.default.string,
      values: _propTypes2.default.string
    }),
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    valueKey: _propTypes2.default.string
  };
  Dropdown.defaultProps = {
    auto: true,
    className: '',
    allowBlank: true,
    disabled: false,
    labelKey: 'label',
    required: false,
    valueKey: 'value'
  };

  return Dropdown;
};

var Dropdown = factory(_Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.DROPDOWN)(Dropdown);
exports.dropdownFactory = factory;
exports.Dropdown = Dropdown;

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _Input = __webpack_require__(358);

var _FontIcon = __webpack_require__(334);

var _theme = __webpack_require__(362);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Input = (0, _Input.inputFactory)(_FontIcon.FontIcon);
var ThemedInput = (0, _reactCssThemr.themr)(_identifiers.INPUT, _theme2.default)(Input);

exports.default = ThemedInput;
exports.Input = ThemedInput;

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"theme--input--lFVgCRUv","withIcon":"theme--withIcon--1nKdfKQS","icon":"theme--icon--3ga1VgFU","inputElement":"theme--inputElement--4bZUjKgR","bar":"theme--bar--3FySSgVc","label":"theme--label--34120enx","fixed":"theme--fixed--GRQEPWhO","required":"theme--required--2G0aY7fW","hint":"theme--hint--bMyi_KpU","filled":"theme--filled--34NWnkxH","error":"theme--error--2k5JzPbP","counter":"theme--counter--1oTuTz6L","disabled":"theme--disabled--3ZfJqMVQ","errored":"theme--errored--2s74EnZU","hidden":"theme--hidden--2gAMv_46"};

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropdown":"theme--dropdown--ZzBNKnTT","active":"theme--active--1DQ-ExT9","values":"theme--values--2767wUaO","label":"theme--label--2KjGMsLK","value":"theme--value--6c1D5IdA","up":"theme--up--1OA-G-h3","disabled":"theme--disabled--1skVHCxT","field":"theme--field--d5bruC04","errored":"theme--errored--3dZUG1ic","templateValue":"theme--templateValue--6dCtTHHH","required":"theme--required--1j4LXFpQ","error":"theme--error--fySw3hC9","selected":"theme--selected--3uiEoo7m"};

/***/ })

});