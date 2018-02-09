webpackJsonp([3],{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _roundedButton = __webpack_require__(321);

var _roundedButton2 = _interopRequireDefault(_roundedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENT
var RoundedButton = function (_Component) {
  _inherits(RoundedButton, _Component);

  function RoundedButton() {
    _classCallCheck(this, RoundedButton);

    return _possibleConstructorReturn(this, (RoundedButton.__proto__ || Object.getPrototypeOf(RoundedButton)).apply(this, arguments));
  }

  _createClass(RoundedButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          onClick = _props.onClick,
          className = _props.className,
          children = _props.children;


      if (to) return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: to, onClick: onClick, className: _roundedButton2.default.container + ' ' + (className || '') },
        children
      );

      return _react2.default.createElement(
        'button',
        { className: _roundedButton2.default.container + ' ' + (className || ''), onClick: onClick },
        children
      );
    }
  }]);

  return RoundedButton;
}(_react.Component);

exports.default = RoundedButton;

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"rounded-button--container--1JF5cQzQ"};

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

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _card = __webpack_require__(365);

var _card2 = _interopRequireDefault(_card);

var _RoundedButton = __webpack_require__(320);

var _RoundedButton2 = _interopRequireDefault(_RoundedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//COMPONENT
var ProductOriginCard = function (_Component) {
  _inherits(ProductOriginCard, _Component);

  function ProductOriginCard() {
    _classCallCheck(this, ProductOriginCard);

    return _possibleConstructorReturn(this, (ProductOriginCard.__proto__ || Object.getPrototypeOf(ProductOriginCard)).apply(this, arguments));
  }

  _createClass(ProductOriginCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          img = _props.img,
          title = _props.title,
          stock = _props.stock,
          price = _props.price,
          link = _props.link;

      return _react2.default.createElement(
        'div',
        { className: _card2.default.container },
        _react2.default.createElement(
          'div',
          { className: _card2.default.image },
          _react2.default.createElement('img', { src: img, alt: 'CardImage' })
        ),
        _react2.default.createElement(
          'div',
          { className: _card2.default.content },
          _react2.default.createElement(
            'div',
            { className: _card2.default.top },
            _react2.default.createElement(
              'span',
              { className: _card2.default.title },
              title
            ),
            _react2.default.createElement(
              'span',
              { className: _card2.default.price },
              'Rp ' + price + ',- / 100 gram'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: _card2.default.stock },
            stock / 1000.0 + ' kg'
          ),
          _react2.default.createElement(
            _RoundedButton2.default,
            { to: link, className: _card2.default.title },
            'BUY'
          )
        )
      );
    }
  }]);

  return ProductOriginCard;
}(_react.Component);

exports.default = ProductOriginCard;

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"card--container--3EOoR8ZT","image":"card--image--qd7mXQ5s","content":"card--content--3jEfxHYf","top":"card--top--9--xXFqm","title":"card--title--3ujTYmCN","price":"card--price--3Gzr9AfE","stock":"card--stock--3bRsLSh3"};

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _dropdown = __webpack_require__(359);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _dropdownTehme = __webpack_require__(368);

var _dropdownTehme2 = _interopRequireDefault(_dropdownTehme);

var _PopupBar = __webpack_require__(330);

var _PopupBar2 = _interopRequireDefault(_PopupBar);

var _Card = __webpack_require__(364);

var _Card2 = _interopRequireDefault(_Card);

var _Products = __webpack_require__(369);

var _Products2 = _interopRequireDefault(_Products);

var _Details = __webpack_require__(371);

var _Details2 = _interopRequireDefault(_Details);

var _store = __webpack_require__(123);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

var _config = __webpack_require__(122);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//STORE


//CONFIG


var categories = [{ value: 'all', label: 'Semua Cateogry' }];

var filters = [{ value: 'termurah', label: 'Termurah' }, { value: 'termahal', label: 'Termahal' }, { value: 'terlama', label: 'Terlama' }, { value: 'terbaru', label: 'Terbaru' }];

var imgs = ['aceh-gayo.jpg', 'karlos.jpg', 'kopi-sidomukti.jpg'];

//COMPONENT

var ProductsRouter = function (_Component) {
  _inherits(ProductsRouter, _Component);

  function ProductsRouter() {
    _classCallCheck(this, ProductsRouter);

    return _possibleConstructorReturn(this, (ProductsRouter.__proto__ || Object.getPrototypeOf(ProductsRouter)).apply(this, arguments));
  }

  _createClass(ProductsRouter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _store2.default.dispatch(actions.showPopup());
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _store2.default.dispatch(actions.hidePopup());
    }
  }, {
    key: 'render',
    value: function render() {
      var match = this.props.match;

      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/products/:product_origin_id/:product_id', exact: true, component: _Details2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/products/:product_origin_id', exact: true, component: _Products2.default })
      );
    }
  }]);

  return ProductsRouter;
}(_react.Component);

exports.default = ProductsRouter;

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"dropdown-tehme--value--YCkX9a-c","values":"dropdown-tehme--values--1Mjn_Z5U"};

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _dropdown = __webpack_require__(359);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _products = __webpack_require__(370);

var _products2 = _interopRequireDefault(_products);

var _dropdownTehme = __webpack_require__(368);

var _dropdownTehme2 = _interopRequireDefault(_dropdownTehme);

var _PopupBar = __webpack_require__(330);

var _PopupBar2 = _interopRequireDefault(_PopupBar);

var _Card = __webpack_require__(364);

var _Card2 = _interopRequireDefault(_Card);

var _store = __webpack_require__(123);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

var _config = __webpack_require__(122);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//STORE


//CONFIG


var categories = [{ value: 'all', label: 'Semua Cateogry' }];

var filters = [{ value: 'termurah', label: 'Termurah' }, { value: 'termahal', label: 'Termahal' }, { value: 'terlama', label: 'Terlama' }, { value: 'terbaru', label: 'Terbaru' }];

var imgs = ['aceh-gayo.jpg', 'karlos.jpg', 'kopi-sidomukti.jpg'];

//COMPONENT

var Products = function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Products.__proto__ || Object.getPrototypeOf(Products)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      products: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Products, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var id = this.props.match.params.product_origin_id;
      _axios2.default.get('/json/list-product.json').then(function (res) {
        var products = [];
        for (var i in res.data) {
          if (res.data[i].place === id) {
            res.data[i].img = '/img/product/' + imgs[Math.floor(Math.random() * imgs.length)];
            products.push(res.data[i]);
          }
        }_this2.setState({ products: products });
      });
    }
  }, {
    key: 'renderCard',
    value: function renderCard() {
      var products = this.state.products;

      var id = this.props.match.params.product_origin_id;

      if (!products) return;
      return products.map(function (data, i) {
        return _react2.default.createElement(_Card2.default, {
          title: data.name, stock: data.stock * 1000,
          price: Math.floor(Math.random() * 10000 + 15000),
          img: data.img, link: '/products/' + id + '/' + data.key
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var match = this.props.match;

      return _react2.default.createElement(
        _PopupBar2.default,
        _extends({
          title: match.params.product_origin_id }, this.props, {
          anim: _PopupBar.ANIMATE_HORIZONTAL
        }),
        this.renderCard()
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = Products;

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"products--container--1xUzIEP9","search":"products--search--2C2Lthd1","bar":"products--bar--11-EaMEd","dropdown":"products--dropdown--nOTbmCuJ","appear":"products--appear--1mIBhVAR","hide":"products--hide--2q-wl7uv"};

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _dropdown = __webpack_require__(359);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _slider = __webpack_require__(380);

var _slider2 = _interopRequireDefault(_slider);

var _details = __webpack_require__(372);

var _details2 = _interopRequireDefault(_details);

var _dropdownTehme = __webpack_require__(368);

var _dropdownTehme2 = _interopRequireDefault(_dropdownTehme);

var _RoundedButton = __webpack_require__(320);

var _RoundedButton2 = _interopRequireDefault(_RoundedButton);

var _PopupBar = __webpack_require__(330);

var _PopupBar2 = _interopRequireDefault(_PopupBar);

var _Card = __webpack_require__(364);

var _Card2 = _interopRequireDefault(_Card);

var _store = __webpack_require__(123);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

var _config = __webpack_require__(122);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//STORE


//CONFIG


var categories = [{ value: 'all', label: 'Semua Cateogry' }];

var filters = [{ value: 'termurah', label: 'Termurah' }, { value: 'termahal', label: 'Termahal' }, { value: 'terlama', label: 'Terlama' }, { value: 'terbaru', label: 'Terbaru' }];

var imgs = ['aceh-gayo.jpg', 'karlos.jpg', 'kopi-sidomukti.jpg'];

//COMPONENT

var Products = function (_Component) {
  _inherits(Products, _Component);

  function Products() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Products);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Products.__proto__ || Object.getPrototypeOf(Products)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (slider, value) {
      var newState = {};
      newState[slider] = value;
      _this.setState(newState);
    }, _this.state = {
      product: null,
      stock: 100
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Products, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      this.price = Math.floor(Math.random() * 10000 + 15000);
      var id = this.props.match.params.product_id;
      _axios2.default.get('/json/list-product.json').then(function (res) {
        for (var i in res.data) {
          if (res.data[i].key == id) {
            res.data[i].img = '/img/product/' + imgs[Math.floor(Math.random() * imgs.length)];
            _this2.setState({ product: res.data[i] });
            return;
          }
        }
      });
    }
  }, {
    key: 'renderProduct',
    value: function renderProduct() {
      var product = this.state.product;
      var match = this.props.match;


      if (!product) return;
      return _react2.default.createElement(
        'div',
        { className: _details2.default.container },
        _react2.default.createElement(
          'div',
          { className: _details2.default.image },
          _react2.default.createElement('img', { src: product.img, alt: 'Product Image' })
        ),
        _react2.default.createElement(
          'div',
          { className: _details2.default.content },
          _react2.default.createElement(
            'h1',
            { title: _details2.default.title },
            product.name
          ),
          _react2.default.createElement(
            'p',
            { title: _details2.default.stock },
            'Stock tersisa: ',
            product.stock
          ),
          _react2.default.createElement(
            'p',
            { className: _details2.default.description },
            product.description
          ),
          _react2.default.createElement(
            'p',
            { className: _details2.default['my-stock'] },
            _react2.default.createElement(
              'span',
              null,
              'Stock: '
            )
          ),
          _react2.default.createElement(_slider2.default, {
            pinned: true, snaps: true, min: 100, max: 500, step: 50,
            editable: true, value: this.state.stock,
            onChange: this.handleChange.bind(this, 'stock')
          }),
          _react2.default.createElement(
            'p',
            null,
            'Total: '
          ),
          _react2.default.createElement(
            'p',
            { className: _details2.default.total },
            'Rp ',
            Math.floor(this.price / 100.0 * this.state.stock),
            ',-'
          ),
          _react2.default.createElement(
            _RoundedButton2.default,
            { to: '/finish', className: _details2.default.title },
            'BUY'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var match = this.props.match;

      return _react2.default.createElement(
        _PopupBar2.default,
        _extends({
          title: match.params.product_origin_id }, this.props, {
          anim: _PopupBar.ANIMATE_HORIZONTAL
        }),
        this.renderProduct()
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = Products;

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"details--container--2Fry1EEL","image":"details--image--3ErESC0Y","content":"details--content--2-vk50EQ","total":"details--total--9xYjMkVu"};

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry1 = __webpack_require__(338);
var _curry2 = __webpack_require__(346);
var _isPlaceholder = __webpack_require__(339);

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
};

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

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

var _classnames2 = __webpack_require__(333);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _prefixer = __webpack_require__(349);

var _prefixer2 = _interopRequireDefault(_prefixer);

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

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'calculateRatio',
    value: function calculateRatio(value) {
      if (value < this.props.min) return 0;
      if (value > this.props.max) return 1;
      return (value - this.props.min) / (this.props.max - this.props.min);
    }
  }, {
    key: 'circularStyle',
    value: function circularStyle() {
      return this.props.mode !== 'indeterminate' ? {
        strokeDasharray: 2 * Math.PI * 25 * this.calculateRatio(this.props.value) + ', 400'
      } : undefined;
    }
  }, {
    key: 'linearStyle',
    value: function linearStyle() {
      if (this.props.mode !== 'indeterminate') {
        return {
          buffer: (0, _prefixer2.default)({
            transform: 'scaleX(' + this.calculateRatio(this.props.buffer) + ')'
          }),
          value: (0, _prefixer2.default)({
            transform: 'scaleX(' + this.calculateRatio(this.props.value) + ')'
          })
        };
      }
      return {};
    }
  }, {
    key: 'renderCircular',
    value: function renderCircular() {
      return _react2.default.createElement('svg', { className: this.props.theme.circle, viewBox: '0 0 60 60' }, _react2.default.createElement('circle', {
        className: this.props.theme.path,
        style: this.circularStyle(),
        cx: '30',
        cy: '30',
        r: '25'
      }));
    }
  }, {
    key: 'renderLinear',
    value: function renderLinear() {
      var _linearStyle = this.linearStyle(),
          buffer = _linearStyle.buffer,
          value = _linearStyle.value;

      return _react2.default.createElement('div', null, _react2.default.createElement('span', {
        'data-ref': 'buffer',
        className: this.props.theme.buffer,
        style: buffer
      }), _react2.default.createElement('span', {
        'data-ref': 'value',
        className: this.props.theme.value,
        style: value
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          max = _props.max,
          min = _props.min,
          mode = _props.mode,
          multicolor = _props.multicolor,
          type = _props.type,
          theme = _props.theme,
          value = _props.value;

      var _className = (0, _classnames3.default)(theme[type], (_classnames = {}, _defineProperty(_classnames, theme[mode], mode), _defineProperty(_classnames, theme.multicolor, multicolor), _classnames), className);

      return _react2.default.createElement('div', {
        disabled: disabled,
        'data-react-toolbox': 'progress-bar',
        'aria-valuenow': value,
        'aria-valuemin': min,
        'aria-valuemax': max,
        className: _className
      }, type === 'circular' ? this.renderCircular() : this.renderLinear());
    }
  }]);

  return ProgressBar;
}(_react.Component);

ProgressBar.propTypes = {
  buffer: _propTypes2.default.number,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  multicolor: _propTypes2.default.bool,
  theme: _propTypes2.default.shape({
    buffer: _propTypes2.default.string,
    circle: _propTypes2.default.string,
    circular: _propTypes2.default.string,
    indeterminate: _propTypes2.default.string,
    linear: _propTypes2.default.string,
    multicolor: _propTypes2.default.string,
    path: _propTypes2.default.string,
    value: _propTypes2.default.string
  }),
  type: _propTypes2.default.oneOf(['linear', 'circular']),
  value: _propTypes2.default.number
};
ProgressBar.defaultProps = {
  buffer: 0,
  className: '',
  max: 100,
  min: 0,
  mode: 'indeterminate',
  multicolor: false,
  type: 'linear',
  value: 0
};
exports.default = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR)(ProgressBar);
exports.ProgressBar = ProgressBar;

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry3 = __webpack_require__(373);
var _reduce = __webpack_require__(391);

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isArray = __webpack_require__(377);

/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function () {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return _isArray(obj) || typeof obj[methodname] !== 'function' ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = undefined;

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _progress_bar = __webpack_require__(381);

var _input = __webpack_require__(361);

var _Slider = __webpack_require__(383);

var _theme = __webpack_require__(399);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ThemedSlider = (0, _reactCssThemr.themr)(_identifiers.SLIDER, _theme2.default)((0, _Slider.sliderFactory)(_progress_bar.ProgressBar, _input.Input));
exports.default = ThemedSlider;
exports.Slider = ThemedSlider;

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _reactCssThemr = __webpack_require__(241);

var _identifiers = __webpack_require__(332);

var _ProgressBar = __webpack_require__(374);

var _theme = __webpack_require__(382);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ThemedProgressBar = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR, _theme2.default)(_ProgressBar.ProgressBar);

exports.default = ThemedProgressBar;
exports.ProgressBar = ThemedProgressBar;

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"linear":"theme--linear--3vxHjMhw","indeterminate":"theme--indeterminate--1gPzbph6","value":"theme--value--I0PhYlH9","linear-indeterminate-bar":"theme--linear-indeterminate-bar--1cU21gZl","buffer":"theme--buffer--SzbNdq_Y","circular":"theme--circular--2j3vClem","circle":"theme--circle--DlWjMNGL","circular-indeterminate-bar-rotate":"theme--circular-indeterminate-bar-rotate--zfZzhh9V","path":"theme--path--1xZSUV8H","circular-indeterminate-bar-dash":"theme--circular-indeterminate-bar-dash--3DSlUtxX","multicolor":"theme--multicolor--3XHT86Kz","colors":"theme--colors--Z_PDtLx7"};

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.sliderFactory = undefined;

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

var _classnames2 = __webpack_require__(333);

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactStyleProptype = __webpack_require__(384);

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _reactCssThemr = __webpack_require__(241);

var _utils = __webpack_require__(386);

var _identifiers = __webpack_require__(332);

var _events = __webpack_require__(341);

var _events2 = _interopRequireDefault(_events);

var _ProgressBar = __webpack_require__(374);

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _Input = __webpack_require__(358);

var _Input2 = _interopRequireDefault(_Input);

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

var factory = function factory(ProgressBar, Input) {
  var Slider = function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Slider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        inputFocused: false,
        inputValue: null,
        sliderLength: 0,
        sliderStart: 0
      }, _this.handleInputFocus = function () {
        _this.setState({
          inputFocused: true,
          inputValue: _this.valueForInput(_this.props.value)
        });
      }, _this.handleInputChange = function (value) {
        _this.setState({ inputValue: value });
      }, _this.handleInputBlur = function (event) {
        var value = _this.state.inputValue || 0;
        _this.setState({ inputFocused: false, inputValue: null }, function () {
          _this.props.onChange(_this.trimValue(value), event);
        });
      }, _this.handleKeyDown = function (event) {
        if ([13, 27].indexOf(event.keyCode) !== -1) _this.getInput().blur();
        if (event.keyCode === 38) _this.addToValue(_this.props.step);
        if (event.keyCode === 40) _this.addToValue(-_this.props.step);
      }, _this.handleMouseDown = function (event) {
        if (_this.state.inputFocused) _this.getInput().blur();
        _events2.default.addEventsToDocument(_this.getMouseEventMap());
        _this.start(_events2.default.getMousePosition(event));
        _events2.default.pauseEvent(event);
      }, _this.handleMouseMove = function (event) {
        _events2.default.pauseEvent(event);
        _this.move(_events2.default.getMousePosition(event));
      }, _this.handleMouseUp = function () {
        _this.end(_this.getMouseEventMap());
      }, _this.handleResize = function (event, callback) {
        var _ReactDOM$findDOMNode = _reactDom2.default.findDOMNode(_this.progressbarNode).getBoundingClientRect(),
            left = _ReactDOM$findDOMNode.left,
            right = _ReactDOM$findDOMNode.right;

        var cb = callback || function () {};
        _this.setState({ sliderStart: left, sliderLength: right - left }, cb);
      }, _this.handleSliderBlur = function () {
        _events2.default.removeEventsFromDocument(_this.getKeyboardEvents());
      }, _this.handleSliderFocus = function () {
        _events2.default.addEventsToDocument(_this.getKeyboardEvents());
      }, _this.handleTouchEnd = function () {
        _this.end(_this.getTouchEventMap());
      }, _this.handleTouchMove = function (event) {
        _this.move(_events2.default.getTouchPosition(event));
      }, _this.handleTouchStart = function (event) {
        if (_this.state.inputFocused) _this.getInput().blur();
        _this.start(_events2.default.getTouchPosition(event));
        _events2.default.addEventsToDocument(_this.getTouchEventMap());
        _events2.default.pauseEvent(event);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Slider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.state.inputFocused && this.props.value !== nextProps.value) {
          this.setState({ inputValue: this.valueForInput(nextProps.value) });
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return this.state.inputFocused || !nextState.inputFocused;
      }
    }, {
      key: 'componentWillUpdate',
      value: function componentWillUpdate(nextProps, nextState) {
        if (nextState.pressed !== this.state.pressed) {
          if (nextState.pressed) {
            this.props.onDragStart();
          } else {
            this.props.onDragStop();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        _events2.default.removeEventsFromDocument(this.getMouseEventMap());
        _events2.default.removeEventsFromDocument(this.getTouchEventMap());
        _events2.default.removeEventsFromDocument(this.getKeyboardEvents());
      }
    }, {
      key: 'getInput',
      value: function getInput() {
        return this.inputNode;
      }
    }, {
      key: 'getKeyboardEvents',
      value: function getKeyboardEvents() {
        return {
          keydown: this.handleKeyDown
        };
      }
    }, {
      key: 'getMouseEventMap',
      value: function getMouseEventMap() {
        return {
          mousemove: this.handleMouseMove,
          mouseup: this.handleMouseUp
        };
      }
    }, {
      key: 'getTouchEventMap',
      value: function getTouchEventMap() {
        return {
          touchmove: this.handleTouchMove,
          touchend: this.handleTouchEnd
        };
      }
    }, {
      key: 'addToValue',
      value: function addToValue(increment) {
        var value = this.state.inputFocused ? parseFloat(this.state.inputValue) : this.props.value;
        value = this.trimValue(value + increment);
        if (value !== this.props.value) this.props.onChange(value);
      }
    }, {
      key: 'end',
      value: function end(revents) {
        _events2.default.removeEventsFromDocument(revents);
        this.setState({ pressed: false });
      }
    }, {
      key: 'knobOffset',
      value: function knobOffset() {
        var _props = this.props,
            max = _props.max,
            min = _props.min,
            value = _props.value;

        return 100 * ((value - min) / (max - min));
      }
    }, {
      key: 'move',
      value: function move(position) {
        var newValue = this.positionToValue(position);
        if (newValue !== this.props.value) this.props.onChange(newValue);
      }
    }, {
      key: 'positionToValue',
      value: function positionToValue(position) {
        var _state = this.state,
            start = _state.sliderStart,
            length = _state.sliderLength;
        var _props2 = this.props,
            max = _props2.max,
            min = _props2.min,
            step = _props2.step;

        var pos = (position.x - start) / length * (max - min);
        return this.trimValue(Math.round(pos / step) * step + min);
      }
    }, {
      key: 'start',
      value: function start(position) {
        var _this2 = this;

        this.handleResize(null, function () {
          _this2.setState({ pressed: true });
          _this2.props.onChange(_this2.positionToValue(position));
        });
      }
    }, {
      key: 'stepDecimals',
      value: function stepDecimals() {
        return (this.props.step.toString().split('.')[1] || []).length;
      }
    }, {
      key: 'trimValue',
      value: function trimValue(value) {
        if (value < this.props.min) return this.props.min;
        if (value > this.props.max) return this.props.max;
        return (0, _utils.round)(value, this.stepDecimals());
      }
    }, {
      key: 'valueForInput',
      value: function valueForInput(value) {
        var decimals = this.stepDecimals();
        return decimals > 0 ? value.toFixed(decimals) : value.toString();
      }
    }, {
      key: 'renderSnaps',
      value: function renderSnaps() {
        var _this3 = this;

        if (!this.props.snaps) return undefined;
        return _react2.default.createElement('div', { className: this.props.theme.snaps }, (0, _utils.range)(0, (this.props.max - this.props.min) / this.props.step).map(function (i) {
          return _react2.default.createElement('div', { key: 'span-' + i, className: _this3.props.theme.snap });
        }));
      }
    }, {
      key: 'renderInput',
      value: function renderInput() {
        var _this4 = this;

        if (!this.props.editable) return undefined;
        return _react2.default.createElement(Input, {
          className: this.props.theme.input,
          disabled: this.props.disabled,
          innerRef: function innerRef(node) {
            _this4.inputNode = node;
          },
          onBlur: this.handleInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.handleInputFocus,
          value: this.state.inputFocused ? this.state.inputValue : this.valueForInput(this.props.value)
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _classnames,
            _this5 = this;

        var theme = this.props.theme;

        var knobStyles = { left: this.knobOffset() + '%' };
        var className = (0, _classnames3.default)(theme.slider, (_classnames = {}, _defineProperty(_classnames, theme.editable, this.props.editable), _defineProperty(_classnames, theme.disabled, this.props.disabled), _defineProperty(_classnames, theme.pinned, this.props.pinned), _defineProperty(_classnames, theme.pressed, this.state.pressed), _defineProperty(_classnames, theme.ring, this.props.value === this.props.min), _classnames), this.props.className);

        return _react2.default.createElement('div', {
          className: className,
          disabled: this.props.disabled,
          'data-react-toolbox': 'slider',
          onBlur: this.handleSliderBlur,
          onFocus: this.handleSliderFocus,
          style: this.props.style,
          tabIndex: '0'
        }, _react2.default.createElement('div', {
          ref: function ref(node) {
            _this5.sliderNode = node;
          },
          className: theme.container,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart
        }, _react2.default.createElement('div', {
          ref: function ref(node) {
            _this5.knobNode = node;
          },
          className: theme.knob,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          style: knobStyles
        }, _react2.default.createElement('div', {
          className: theme.innerknob,
          'data-value': parseInt(this.props.value, 10)
        })), _react2.default.createElement('div', { className: theme.progress }, _react2.default.createElement(ProgressBar, {
          disabled: this.props.disabled,
          ref: function ref(node) {
            _this5.progressbarNode = node;
          },
          className: theme.innerprogress,
          max: this.props.max,
          min: this.props.min,
          mode: 'determinate',
          value: this.props.value,
          buffer: this.props.buffer
        }), this.renderSnaps())), this.renderInput());
      }
    }]);

    return Slider;
  }(_react.Component);

  Slider.propTypes = {
    buffer: _propTypes2.default.number,
    className: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    editable: _propTypes2.default.bool,
    max: _propTypes2.default.number,
    min: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDragStop: _propTypes2.default.func,
    pinned: _propTypes2.default.bool,
    snaps: _propTypes2.default.bool,
    step: _propTypes2.default.number,
    style: _reactStyleProptype2.default,
    theme: _propTypes2.default.shape({
      container: _propTypes2.default.string,
      editable: _propTypes2.default.string,
      innerknob: _propTypes2.default.string,
      innerprogress: _propTypes2.default.string,
      input: _propTypes2.default.string,
      knob: _propTypes2.default.string,
      pinned: _propTypes2.default.string,
      pressed: _propTypes2.default.string,
      progress: _propTypes2.default.string,
      ring: _propTypes2.default.string,
      slider: _propTypes2.default.string,
      snap: _propTypes2.default.string,
      snaps: _propTypes2.default.string
    }),
    value: _propTypes2.default.number
  };
  Slider.defaultProps = {
    buffer: 0,
    className: '',
    editable: false,
    max: 100,
    min: 0,
    onDragStart: function onDragStart() {},
    onDragStop: function onDragStop() {},
    pinned: false,
    snaps: false,
    step: 0.01,
    value: 0
  };

  return Slider;
};

var Slider = factory(_ProgressBar2.default, _Input2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.SLIDER)(Slider);
exports.sliderFactory = factory;
exports.Slider = Slider;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var properties = __webpack_require__(385);
var PropTypes = __webpack_require__(6);

module.exports = function (props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function (styleKey) {
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function (props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = PropTypes.oneOfType([PropTypes.arrayOf(module.exports), module.exports]);

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// GENERATED DO NOT EDIT
module.exports = ["alignContent", "MozAlignContent", "WebkitAlignContent", "MSAlignContent", "OAlignContent", "alignItems", "MozAlignItems", "WebkitAlignItems", "MSAlignItems", "OAlignItems", "alignSelf", "MozAlignSelf", "WebkitAlignSelf", "MSAlignSelf", "OAlignSelf", "all", "MozAll", "WebkitAll", "MSAll", "OAll", "animation", "MozAnimation", "WebkitAnimation", "MSAnimation", "OAnimation", "animationDelay", "MozAnimationDelay", "WebkitAnimationDelay", "MSAnimationDelay", "OAnimationDelay", "animationDirection", "MozAnimationDirection", "WebkitAnimationDirection", "MSAnimationDirection", "OAnimationDirection", "animationDuration", "MozAnimationDuration", "WebkitAnimationDuration", "MSAnimationDuration", "OAnimationDuration", "animationFillMode", "MozAnimationFillMode", "WebkitAnimationFillMode", "MSAnimationFillMode", "OAnimationFillMode", "animationIterationCount", "MozAnimationIterationCount", "WebkitAnimationIterationCount", "MSAnimationIterationCount", "OAnimationIterationCount", "animationName", "MozAnimationName", "WebkitAnimationName", "MSAnimationName", "OAnimationName", "animationPlayState", "MozAnimationPlayState", "WebkitAnimationPlayState", "MSAnimationPlayState", "OAnimationPlayState", "animationTimingFunction", "MozAnimationTimingFunction", "WebkitAnimationTimingFunction", "MSAnimationTimingFunction", "OAnimationTimingFunction", "backfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "MSBackfaceVisibility", "OBackfaceVisibility", "background", "MozBackground", "WebkitBackground", "MSBackground", "OBackground", "backgroundAttachment", "MozBackgroundAttachment", "WebkitBackgroundAttachment", "MSBackgroundAttachment", "OBackgroundAttachment", "backgroundBlendMode", "MozBackgroundBlendMode", "WebkitBackgroundBlendMode", "MSBackgroundBlendMode", "OBackgroundBlendMode", "backgroundClip", "MozBackgroundClip", "WebkitBackgroundClip", "MSBackgroundClip", "OBackgroundClip", "backgroundColor", "MozBackgroundColor", "WebkitBackgroundColor", "MSBackgroundColor", "OBackgroundColor", "backgroundImage", "MozBackgroundImage", "WebkitBackgroundImage", "MSBackgroundImage", "OBackgroundImage", "backgroundOrigin", "MozBackgroundOrigin", "WebkitBackgroundOrigin", "MSBackgroundOrigin", "OBackgroundOrigin", "backgroundPosition", "MozBackgroundPosition", "WebkitBackgroundPosition", "MSBackgroundPosition", "OBackgroundPosition", "backgroundRepeat", "MozBackgroundRepeat", "WebkitBackgroundRepeat", "MSBackgroundRepeat", "OBackgroundRepeat", "backgroundSize", "MozBackgroundSize", "WebkitBackgroundSize", "MSBackgroundSize", "OBackgroundSize", "blockSize", "MozBlockSize", "WebkitBlockSize", "MSBlockSize", "OBlockSize", "border", "MozBorder", "WebkitBorder", "MSBorder", "OBorder", "borderBlockEnd", "MozBorderBlockEnd", "WebkitBorderBlockEnd", "MSBorderBlockEnd", "OBorderBlockEnd", "borderBlockEndColor", "MozBorderBlockEndColor", "WebkitBorderBlockEndColor", "MSBorderBlockEndColor", "OBorderBlockEndColor", "borderBlockEndStyle", "MozBorderBlockEndStyle", "WebkitBorderBlockEndStyle", "MSBorderBlockEndStyle", "OBorderBlockEndStyle", "borderBlockEndWidth", "MozBorderBlockEndWidth", "WebkitBorderBlockEndWidth", "MSBorderBlockEndWidth", "OBorderBlockEndWidth", "borderBlockStart", "MozBorderBlockStart", "WebkitBorderBlockStart", "MSBorderBlockStart", "OBorderBlockStart", "borderBlockStartColor", "MozBorderBlockStartColor", "WebkitBorderBlockStartColor", "MSBorderBlockStartColor", "OBorderBlockStartColor", "borderBlockStartStyle", "MozBorderBlockStartStyle", "WebkitBorderBlockStartStyle", "MSBorderBlockStartStyle", "OBorderBlockStartStyle", "borderBlockStartWidth", "MozBorderBlockStartWidth", "WebkitBorderBlockStartWidth", "MSBorderBlockStartWidth", "OBorderBlockStartWidth", "borderBottom", "MozBorderBottom", "WebkitBorderBottom", "MSBorderBottom", "OBorderBottom", "borderBottomColor", "MozBorderBottomColor", "WebkitBorderBottomColor", "MSBorderBottomColor", "OBorderBottomColor", "borderBottomLeftRadius", "MozBorderBottomLeftRadius", "WebkitBorderBottomLeftRadius", "MSBorderBottomLeftRadius", "OBorderBottomLeftRadius", "borderBottomRightRadius", "MozBorderBottomRightRadius", "WebkitBorderBottomRightRadius", "MSBorderBottomRightRadius", "OBorderBottomRightRadius", "borderBottomStyle", "MozBorderBottomStyle", "WebkitBorderBottomStyle", "MSBorderBottomStyle", "OBorderBottomStyle", "borderBottomWidth", "MozBorderBottomWidth", "WebkitBorderBottomWidth", "MSBorderBottomWidth", "OBorderBottomWidth", "borderCollapse", "MozBorderCollapse", "WebkitBorderCollapse", "MSBorderCollapse", "OBorderCollapse", "borderColor", "MozBorderColor", "WebkitBorderColor", "MSBorderColor", "OBorderColor", "borderImage", "MozBorderImage", "WebkitBorderImage", "MSBorderImage", "OBorderImage", "borderImageOutset", "MozBorderImageOutset", "WebkitBorderImageOutset", "MSBorderImageOutset", "OBorderImageOutset", "borderImageRepeat", "MozBorderImageRepeat", "WebkitBorderImageRepeat", "MSBorderImageRepeat", "OBorderImageRepeat", "borderImageSlice", "MozBorderImageSlice", "WebkitBorderImageSlice", "MSBorderImageSlice", "OBorderImageSlice", "borderImageSource", "MozBorderImageSource", "WebkitBorderImageSource", "MSBorderImageSource", "OBorderImageSource", "borderImageWidth", "MozBorderImageWidth", "WebkitBorderImageWidth", "MSBorderImageWidth", "OBorderImageWidth", "borderInlineEnd", "MozBorderInlineEnd", "WebkitBorderInlineEnd", "MSBorderInlineEnd", "OBorderInlineEnd", "borderInlineEndColor", "MozBorderInlineEndColor", "WebkitBorderInlineEndColor", "MSBorderInlineEndColor", "OBorderInlineEndColor", "borderInlineEndStyle", "MozBorderInlineEndStyle", "WebkitBorderInlineEndStyle", "MSBorderInlineEndStyle", "OBorderInlineEndStyle", "borderInlineEndWidth", "MozBorderInlineEndWidth", "WebkitBorderInlineEndWidth", "MSBorderInlineEndWidth", "OBorderInlineEndWidth", "borderInlineStart", "MozBorderInlineStart", "WebkitBorderInlineStart", "MSBorderInlineStart", "OBorderInlineStart", "borderInlineStartColor", "MozBorderInlineStartColor", "WebkitBorderInlineStartColor", "MSBorderInlineStartColor", "OBorderInlineStartColor", "borderInlineStartStyle", "MozBorderInlineStartStyle", "WebkitBorderInlineStartStyle", "MSBorderInlineStartStyle", "OBorderInlineStartStyle", "borderInlineStartWidth", "MozBorderInlineStartWidth", "WebkitBorderInlineStartWidth", "MSBorderInlineStartWidth", "OBorderInlineStartWidth", "borderLeft", "MozBorderLeft", "WebkitBorderLeft", "MSBorderLeft", "OBorderLeft", "borderLeftColor", "MozBorderLeftColor", "WebkitBorderLeftColor", "MSBorderLeftColor", "OBorderLeftColor", "borderLeftStyle", "MozBorderLeftStyle", "WebkitBorderLeftStyle", "MSBorderLeftStyle", "OBorderLeftStyle", "borderLeftWidth", "MozBorderLeftWidth", "WebkitBorderLeftWidth", "MSBorderLeftWidth", "OBorderLeftWidth", "borderRadius", "MozBorderRadius", "WebkitBorderRadius", "MSBorderRadius", "OBorderRadius", "borderRight", "MozBorderRight", "WebkitBorderRight", "MSBorderRight", "OBorderRight", "borderRightColor", "MozBorderRightColor", "WebkitBorderRightColor", "MSBorderRightColor", "OBorderRightColor", "borderRightStyle", "MozBorderRightStyle", "WebkitBorderRightStyle", "MSBorderRightStyle", "OBorderRightStyle", "borderRightWidth", "MozBorderRightWidth", "WebkitBorderRightWidth", "MSBorderRightWidth", "OBorderRightWidth", "borderSpacing", "MozBorderSpacing", "WebkitBorderSpacing", "MSBorderSpacing", "OBorderSpacing", "borderStyle", "MozBorderStyle", "WebkitBorderStyle", "MSBorderStyle", "OBorderStyle", "borderTop", "MozBorderTop", "WebkitBorderTop", "MSBorderTop", "OBorderTop", "borderTopColor", "MozBorderTopColor", "WebkitBorderTopColor", "MSBorderTopColor", "OBorderTopColor", "borderTopLeftRadius", "MozBorderTopLeftRadius", "WebkitBorderTopLeftRadius", "MSBorderTopLeftRadius", "OBorderTopLeftRadius", "borderTopRightRadius", "MozBorderTopRightRadius", "WebkitBorderTopRightRadius", "MSBorderTopRightRadius", "OBorderTopRightRadius", "borderTopStyle", "MozBorderTopStyle", "WebkitBorderTopStyle", "MSBorderTopStyle", "OBorderTopStyle", "borderTopWidth", "MozBorderTopWidth", "WebkitBorderTopWidth", "MSBorderTopWidth", "OBorderTopWidth", "borderWidth", "MozBorderWidth", "WebkitBorderWidth", "MSBorderWidth", "OBorderWidth", "bottom", "MozBottom", "WebkitBottom", "MSBottom", "OBottom", "boxDecorationBreak", "MozBoxDecorationBreak", "WebkitBoxDecorationBreak", "MSBoxDecorationBreak", "OBoxDecorationBreak", "boxShadow", "MozBoxShadow", "WebkitBoxShadow", "MSBoxShadow", "OBoxShadow", "boxSizing", "MozBoxSizing", "WebkitBoxSizing", "MSBoxSizing", "OBoxSizing", "breakAfter", "MozBreakAfter", "WebkitBreakAfter", "MSBreakAfter", "OBreakAfter", "breakBefore", "MozBreakBefore", "WebkitBreakBefore", "MSBreakBefore", "OBreakBefore", "breakInside", "MozBreakInside", "WebkitBreakInside", "MSBreakInside", "OBreakInside", "captionSide", "MozCaptionSide", "WebkitCaptionSide", "MSCaptionSide", "OCaptionSide", "caretColor", "MozCaretColor", "WebkitCaretColor", "MSCaretColor", "OCaretColor", "ch", "MozCh", "WebkitCh", "MSCh", "OCh", "clear", "MozClear", "WebkitClear", "MSClear", "OClear", "clip", "MozClip", "WebkitClip", "MSClip", "OClip", "clipPath", "MozClipPath", "WebkitClipPath", "MSClipPath", "OClipPath", "cm", "MozCm", "WebkitCm", "MSCm", "OCm", "color", "MozColor", "WebkitColor", "MSColor", "OColor", "columnCount", "MozColumnCount", "WebkitColumnCount", "MSColumnCount", "OColumnCount", "columnFill", "MozColumnFill", "WebkitColumnFill", "MSColumnFill", "OColumnFill", "columnGap", "MozColumnGap", "WebkitColumnGap", "MSColumnGap", "OColumnGap", "columnRule", "MozColumnRule", "WebkitColumnRule", "MSColumnRule", "OColumnRule", "columnRuleColor", "MozColumnRuleColor", "WebkitColumnRuleColor", "MSColumnRuleColor", "OColumnRuleColor", "columnRuleStyle", "MozColumnRuleStyle", "WebkitColumnRuleStyle", "MSColumnRuleStyle", "OColumnRuleStyle", "columnRuleWidth", "MozColumnRuleWidth", "WebkitColumnRuleWidth", "MSColumnRuleWidth", "OColumnRuleWidth", "columnSpan", "MozColumnSpan", "WebkitColumnSpan", "MSColumnSpan", "OColumnSpan", "columnWidth", "MozColumnWidth", "WebkitColumnWidth", "MSColumnWidth", "OColumnWidth", "columns", "MozColumns", "WebkitColumns", "MSColumns", "OColumns", "content", "MozContent", "WebkitContent", "MSContent", "OContent", "counterIncrement", "MozCounterIncrement", "WebkitCounterIncrement", "MSCounterIncrement", "OCounterIncrement", "counterReset", "MozCounterReset", "WebkitCounterReset", "MSCounterReset", "OCounterReset", "cursor", "MozCursor", "WebkitCursor", "MSCursor", "OCursor", "deg", "MozDeg", "WebkitDeg", "MSDeg", "ODeg", "direction", "MozDirection", "WebkitDirection", "MSDirection", "ODirection", "display", "MozDisplay", "WebkitDisplay", "MSDisplay", "ODisplay", "dpcm", "MozDpcm", "WebkitDpcm", "MSDpcm", "ODpcm", "dpi", "MozDpi", "WebkitDpi", "MSDpi", "ODpi", "dppx", "MozDppx", "WebkitDppx", "MSDppx", "ODppx", "em", "MozEm", "WebkitEm", "MSEm", "OEm", "emptyCells", "MozEmptyCells", "WebkitEmptyCells", "MSEmptyCells", "OEmptyCells", "ex", "MozEx", "WebkitEx", "MSEx", "OEx", "filter", "MozFilter", "WebkitFilter", "MSFilter", "OFilter", "flexBasis", "MozFlexBasis", "WebkitFlexBasis", "MSFlexBasis", "OFlexBasis", "flexDirection", "MozFlexDirection", "WebkitFlexDirection", "MSFlexDirection", "OFlexDirection", "flexFlow", "MozFlexFlow", "WebkitFlexFlow", "MSFlexFlow", "OFlexFlow", "flexGrow", "MozFlexGrow", "WebkitFlexGrow", "MSFlexGrow", "OFlexGrow", "flexShrink", "MozFlexShrink", "WebkitFlexShrink", "MSFlexShrink", "OFlexShrink", "flexWrap", "MozFlexWrap", "WebkitFlexWrap", "MSFlexWrap", "OFlexWrap", "float", "MozFloat", "WebkitFloat", "MSFloat", "OFloat", "font", "MozFont", "WebkitFont", "MSFont", "OFont", "fontFamily", "MozFontFamily", "WebkitFontFamily", "MSFontFamily", "OFontFamily", "fontFeatureSettings", "MozFontFeatureSettings", "WebkitFontFeatureSettings", "MSFontFeatureSettings", "OFontFeatureSettings", "fontKerning", "MozFontKerning", "WebkitFontKerning", "MSFontKerning", "OFontKerning", "fontLanguageOverride", "MozFontLanguageOverride", "WebkitFontLanguageOverride", "MSFontLanguageOverride", "OFontLanguageOverride", "fontSize", "MozFontSize", "WebkitFontSize", "MSFontSize", "OFontSize", "fontSizeAdjust", "MozFontSizeAdjust", "WebkitFontSizeAdjust", "MSFontSizeAdjust", "OFontSizeAdjust", "fontStretch", "MozFontStretch", "WebkitFontStretch", "MSFontStretch", "OFontStretch", "fontStyle", "MozFontStyle", "WebkitFontStyle", "MSFontStyle", "OFontStyle", "fontSynthesis", "MozFontSynthesis", "WebkitFontSynthesis", "MSFontSynthesis", "OFontSynthesis", "fontVariant", "MozFontVariant", "WebkitFontVariant", "MSFontVariant", "OFontVariant", "fontVariantAlternates", "MozFontVariantAlternates", "WebkitFontVariantAlternates", "MSFontVariantAlternates", "OFontVariantAlternates", "fontVariantCaps", "MozFontVariantCaps", "WebkitFontVariantCaps", "MSFontVariantCaps", "OFontVariantCaps", "fontVariantEastAsian", "MozFontVariantEastAsian", "WebkitFontVariantEastAsian", "MSFontVariantEastAsian", "OFontVariantEastAsian", "fontVariantLigatures", "MozFontVariantLigatures", "WebkitFontVariantLigatures", "MSFontVariantLigatures", "OFontVariantLigatures", "fontVariantNumeric", "MozFontVariantNumeric", "WebkitFontVariantNumeric", "MSFontVariantNumeric", "OFontVariantNumeric", "fontVariantPosition", "MozFontVariantPosition", "WebkitFontVariantPosition", "MSFontVariantPosition", "OFontVariantPosition", "fontWeight", "MozFontWeight", "WebkitFontWeight", "MSFontWeight", "OFontWeight", "fr", "MozFr", "WebkitFr", "MSFr", "OFr", "grad", "MozGrad", "WebkitGrad", "MSGrad", "OGrad", "grid", "MozGrid", "WebkitGrid", "MSGrid", "OGrid", "gridArea", "MozGridArea", "WebkitGridArea", "MSGridArea", "OGridArea", "gridAutoColumns", "MozGridAutoColumns", "WebkitGridAutoColumns", "MSGridAutoColumns", "OGridAutoColumns", "gridAutoFlow", "MozGridAutoFlow", "WebkitGridAutoFlow", "MSGridAutoFlow", "OGridAutoFlow", "gridAutoRows", "MozGridAutoRows", "WebkitGridAutoRows", "MSGridAutoRows", "OGridAutoRows", "gridColumn", "MozGridColumn", "WebkitGridColumn", "MSGridColumn", "OGridColumn", "gridColumnEnd", "MozGridColumnEnd", "WebkitGridColumnEnd", "MSGridColumnEnd", "OGridColumnEnd", "gridColumnGap", "MozGridColumnGap", "WebkitGridColumnGap", "MSGridColumnGap", "OGridColumnGap", "gridColumnStart", "MozGridColumnStart", "WebkitGridColumnStart", "MSGridColumnStart", "OGridColumnStart", "gridGap", "MozGridGap", "WebkitGridGap", "MSGridGap", "OGridGap", "gridRow", "MozGridRow", "WebkitGridRow", "MSGridRow", "OGridRow", "gridRowEnd", "MozGridRowEnd", "WebkitGridRowEnd", "MSGridRowEnd", "OGridRowEnd", "gridRowGap", "MozGridRowGap", "WebkitGridRowGap", "MSGridRowGap", "OGridRowGap", "gridRowStart", "MozGridRowStart", "WebkitGridRowStart", "MSGridRowStart", "OGridRowStart", "gridTemplate", "MozGridTemplate", "WebkitGridTemplate", "MSGridTemplate", "OGridTemplate", "gridTemplateAreas", "MozGridTemplateAreas", "WebkitGridTemplateAreas", "MSGridTemplateAreas", "OGridTemplateAreas", "gridTemplateColumns", "MozGridTemplateColumns", "WebkitGridTemplateColumns", "MSGridTemplateColumns", "OGridTemplateColumns", "gridTemplateRows", "MozGridTemplateRows", "WebkitGridTemplateRows", "MSGridTemplateRows", "OGridTemplateRows", "height", "MozHeight", "WebkitHeight", "MSHeight", "OHeight", "hyphens", "MozHyphens", "WebkitHyphens", "MSHyphens", "OHyphens", "hz", "MozHz", "WebkitHz", "MSHz", "OHz", "imageOrientation", "MozImageOrientation", "WebkitImageOrientation", "MSImageOrientation", "OImageOrientation", "imageRendering", "MozImageRendering", "WebkitImageRendering", "MSImageRendering", "OImageRendering", "imageResolution", "MozImageResolution", "WebkitImageResolution", "MSImageResolution", "OImageResolution", "imeMode", "MozImeMode", "WebkitImeMode", "MSImeMode", "OImeMode", "in", "MozIn", "WebkitIn", "MSIn", "OIn", "inherit", "MozInherit", "WebkitInherit", "MSInherit", "OInherit", "initial", "MozInitial", "WebkitInitial", "MSInitial", "OInitial", "inlineSize", "MozInlineSize", "WebkitInlineSize", "MSInlineSize", "OInlineSize", "isolation", "MozIsolation", "WebkitIsolation", "MSIsolation", "OIsolation", "justifyContent", "MozJustifyContent", "WebkitJustifyContent", "MSJustifyContent", "OJustifyContent", "khz", "MozKhz", "WebkitKhz", "MSKhz", "OKhz", "left", "MozLeft", "WebkitLeft", "MSLeft", "OLeft", "letterSpacing", "MozLetterSpacing", "WebkitLetterSpacing", "MSLetterSpacing", "OLetterSpacing", "lineBreak", "MozLineBreak", "WebkitLineBreak", "MSLineBreak", "OLineBreak", "lineHeight", "MozLineHeight", "WebkitLineHeight", "MSLineHeight", "OLineHeight", "listStyle", "MozListStyle", "WebkitListStyle", "MSListStyle", "OListStyle", "listStyleImage", "MozListStyleImage", "WebkitListStyleImage", "MSListStyleImage", "OListStyleImage", "listStylePosition", "MozListStylePosition", "WebkitListStylePosition", "MSListStylePosition", "OListStylePosition", "listStyleType", "MozListStyleType", "WebkitListStyleType", "MSListStyleType", "OListStyleType", "margin", "MozMargin", "WebkitMargin", "MSMargin", "OMargin", "marginBlockEnd", "MozMarginBlockEnd", "WebkitMarginBlockEnd", "MSMarginBlockEnd", "OMarginBlockEnd", "marginBlockStart", "MozMarginBlockStart", "WebkitMarginBlockStart", "MSMarginBlockStart", "OMarginBlockStart", "marginBottom", "MozMarginBottom", "WebkitMarginBottom", "MSMarginBottom", "OMarginBottom", "marginInlineEnd", "MozMarginInlineEnd", "WebkitMarginInlineEnd", "MSMarginInlineEnd", "OMarginInlineEnd", "marginInlineStart", "MozMarginInlineStart", "WebkitMarginInlineStart", "MSMarginInlineStart", "OMarginInlineStart", "marginLeft", "MozMarginLeft", "WebkitMarginLeft", "MSMarginLeft", "OMarginLeft", "marginRight", "MozMarginRight", "WebkitMarginRight", "MSMarginRight", "OMarginRight", "marginTop", "MozMarginTop", "WebkitMarginTop", "MSMarginTop", "OMarginTop", "mask", "MozMask", "WebkitMask", "MSMask", "OMask", "maskClip", "MozMaskClip", "WebkitMaskClip", "MSMaskClip", "OMaskClip", "maskComposite", "MozMaskComposite", "WebkitMaskComposite", "MSMaskComposite", "OMaskComposite", "maskImage", "MozMaskImage", "WebkitMaskImage", "MSMaskImage", "OMaskImage", "maskMode", "MozMaskMode", "WebkitMaskMode", "MSMaskMode", "OMaskMode", "maskOrigin", "MozMaskOrigin", "WebkitMaskOrigin", "MSMaskOrigin", "OMaskOrigin", "maskPosition", "MozMaskPosition", "WebkitMaskPosition", "MSMaskPosition", "OMaskPosition", "maskRepeat", "MozMaskRepeat", "WebkitMaskRepeat", "MSMaskRepeat", "OMaskRepeat", "maskSize", "MozMaskSize", "WebkitMaskSize", "MSMaskSize", "OMaskSize", "maskType", "MozMaskType", "WebkitMaskType", "MSMaskType", "OMaskType", "maxHeight", "MozMaxHeight", "WebkitMaxHeight", "MSMaxHeight", "OMaxHeight", "maxWidth", "MozMaxWidth", "WebkitMaxWidth", "MSMaxWidth", "OMaxWidth", "minBlockSize", "MozMinBlockSize", "WebkitMinBlockSize", "MSMinBlockSize", "OMinBlockSize", "minHeight", "MozMinHeight", "WebkitMinHeight", "MSMinHeight", "OMinHeight", "minInlineSize", "MozMinInlineSize", "WebkitMinInlineSize", "MSMinInlineSize", "OMinInlineSize", "minWidth", "MozMinWidth", "WebkitMinWidth", "MSMinWidth", "OMinWidth", "mixBlendMode", "MozMixBlendMode", "WebkitMixBlendMode", "MSMixBlendMode", "OMixBlendMode", "mm", "MozMm", "WebkitMm", "MSMm", "OMm", "ms", "MozMs", "WebkitMs", "MSMs", "OMs", "objectFit", "MozObjectFit", "WebkitObjectFit", "MSObjectFit", "OObjectFit", "objectPosition", "MozObjectPosition", "WebkitObjectPosition", "MSObjectPosition", "OObjectPosition", "offsetBlockEnd", "MozOffsetBlockEnd", "WebkitOffsetBlockEnd", "MSOffsetBlockEnd", "OOffsetBlockEnd", "offsetBlockStart", "MozOffsetBlockStart", "WebkitOffsetBlockStart", "MSOffsetBlockStart", "OOffsetBlockStart", "offsetInlineEnd", "MozOffsetInlineEnd", "WebkitOffsetInlineEnd", "MSOffsetInlineEnd", "OOffsetInlineEnd", "offsetInlineStart", "MozOffsetInlineStart", "WebkitOffsetInlineStart", "MSOffsetInlineStart", "OOffsetInlineStart", "opacity", "MozOpacity", "WebkitOpacity", "MSOpacity", "OOpacity", "order", "MozOrder", "WebkitOrder", "MSOrder", "OOrder", "orphans", "MozOrphans", "WebkitOrphans", "MSOrphans", "OOrphans", "outline", "MozOutline", "WebkitOutline", "MSOutline", "OOutline", "outlineColor", "MozOutlineColor", "WebkitOutlineColor", "MSOutlineColor", "OOutlineColor", "outlineOffset", "MozOutlineOffset", "WebkitOutlineOffset", "MSOutlineOffset", "OOutlineOffset", "outlineStyle", "MozOutlineStyle", "WebkitOutlineStyle", "MSOutlineStyle", "OOutlineStyle", "outlineWidth", "MozOutlineWidth", "WebkitOutlineWidth", "MSOutlineWidth", "OOutlineWidth", "overflow", "MozOverflow", "WebkitOverflow", "MSOverflow", "OOverflow", "overflowWrap", "MozOverflowWrap", "WebkitOverflowWrap", "MSOverflowWrap", "OOverflowWrap", "overflowX", "MozOverflowX", "WebkitOverflowX", "MSOverflowX", "OOverflowX", "overflowY", "MozOverflowY", "WebkitOverflowY", "MSOverflowY", "OOverflowY", "padding", "MozPadding", "WebkitPadding", "MSPadding", "OPadding", "paddingBlockEnd", "MozPaddingBlockEnd", "WebkitPaddingBlockEnd", "MSPaddingBlockEnd", "OPaddingBlockEnd", "paddingBlockStart", "MozPaddingBlockStart", "WebkitPaddingBlockStart", "MSPaddingBlockStart", "OPaddingBlockStart", "paddingBottom", "MozPaddingBottom", "WebkitPaddingBottom", "MSPaddingBottom", "OPaddingBottom", "paddingInlineEnd", "MozPaddingInlineEnd", "WebkitPaddingInlineEnd", "MSPaddingInlineEnd", "OPaddingInlineEnd", "paddingInlineStart", "MozPaddingInlineStart", "WebkitPaddingInlineStart", "MSPaddingInlineStart", "OPaddingInlineStart", "paddingLeft", "MozPaddingLeft", "WebkitPaddingLeft", "MSPaddingLeft", "OPaddingLeft", "paddingRight", "MozPaddingRight", "WebkitPaddingRight", "MSPaddingRight", "OPaddingRight", "paddingTop", "MozPaddingTop", "WebkitPaddingTop", "MSPaddingTop", "OPaddingTop", "pageBreakAfter", "MozPageBreakAfter", "WebkitPageBreakAfter", "MSPageBreakAfter", "OPageBreakAfter", "pageBreakBefore", "MozPageBreakBefore", "WebkitPageBreakBefore", "MSPageBreakBefore", "OPageBreakBefore", "pageBreakInside", "MozPageBreakInside", "WebkitPageBreakInside", "MSPageBreakInside", "OPageBreakInside", "pc", "MozPc", "WebkitPc", "MSPc", "OPc", "perspective", "MozPerspective", "WebkitPerspective", "MSPerspective", "OPerspective", "perspectiveOrigin", "MozPerspectiveOrigin", "WebkitPerspectiveOrigin", "MSPerspectiveOrigin", "OPerspectiveOrigin", "pointerEvents", "MozPointerEvents", "WebkitPointerEvents", "MSPointerEvents", "OPointerEvents", "position", "MozPosition", "WebkitPosition", "MSPosition", "OPosition", "pt", "MozPt", "WebkitPt", "MSPt", "OPt", "px", "MozPx", "WebkitPx", "MSPx", "OPx", "q", "MozQ", "WebkitQ", "MSQ", "OQ", "quotes", "MozQuotes", "WebkitQuotes", "MSQuotes", "OQuotes", "rad", "MozRad", "WebkitRad", "MSRad", "ORad", "rem", "MozRem", "WebkitRem", "MSRem", "ORem", "resize", "MozResize", "WebkitResize", "MSResize", "OResize", "revert", "MozRevert", "WebkitRevert", "MSRevert", "ORevert", "right", "MozRight", "WebkitRight", "MSRight", "ORight", "rubyAlign", "MozRubyAlign", "WebkitRubyAlign", "MSRubyAlign", "ORubyAlign", "rubyMerge", "MozRubyMerge", "WebkitRubyMerge", "MSRubyMerge", "ORubyMerge", "rubyPosition", "MozRubyPosition", "WebkitRubyPosition", "MSRubyPosition", "ORubyPosition", "s", "MozS", "WebkitS", "MSS", "OS", "scrollBehavior", "MozScrollBehavior", "WebkitScrollBehavior", "MSScrollBehavior", "OScrollBehavior", "scrollSnapCoordinate", "MozScrollSnapCoordinate", "WebkitScrollSnapCoordinate", "MSScrollSnapCoordinate", "OScrollSnapCoordinate", "scrollSnapDestination", "MozScrollSnapDestination", "WebkitScrollSnapDestination", "MSScrollSnapDestination", "OScrollSnapDestination", "scrollSnapType", "MozScrollSnapType", "WebkitScrollSnapType", "MSScrollSnapType", "OScrollSnapType", "shapeImageThreshold", "MozShapeImageThreshold", "WebkitShapeImageThreshold", "MSShapeImageThreshold", "OShapeImageThreshold", "shapeMargin", "MozShapeMargin", "WebkitShapeMargin", "MSShapeMargin", "OShapeMargin", "shapeOutside", "MozShapeOutside", "WebkitShapeOutside", "MSShapeOutside", "OShapeOutside", "tabSize", "MozTabSize", "WebkitTabSize", "MSTabSize", "OTabSize", "tableLayout", "MozTableLayout", "WebkitTableLayout", "MSTableLayout", "OTableLayout", "textAlign", "MozTextAlign", "WebkitTextAlign", "MSTextAlign", "OTextAlign", "textAlignLast", "MozTextAlignLast", "WebkitTextAlignLast", "MSTextAlignLast", "OTextAlignLast", "textCombineUpright", "MozTextCombineUpright", "WebkitTextCombineUpright", "MSTextCombineUpright", "OTextCombineUpright", "textDecoration", "MozTextDecoration", "WebkitTextDecoration", "MSTextDecoration", "OTextDecoration", "textDecorationColor", "MozTextDecorationColor", "WebkitTextDecorationColor", "MSTextDecorationColor", "OTextDecorationColor", "textDecorationLine", "MozTextDecorationLine", "WebkitTextDecorationLine", "MSTextDecorationLine", "OTextDecorationLine", "textDecorationStyle", "MozTextDecorationStyle", "WebkitTextDecorationStyle", "MSTextDecorationStyle", "OTextDecorationStyle", "textEmphasis", "MozTextEmphasis", "WebkitTextEmphasis", "MSTextEmphasis", "OTextEmphasis", "textEmphasisColor", "MozTextEmphasisColor", "WebkitTextEmphasisColor", "MSTextEmphasisColor", "OTextEmphasisColor", "textEmphasisPosition", "MozTextEmphasisPosition", "WebkitTextEmphasisPosition", "MSTextEmphasisPosition", "OTextEmphasisPosition", "textEmphasisStyle", "MozTextEmphasisStyle", "WebkitTextEmphasisStyle", "MSTextEmphasisStyle", "OTextEmphasisStyle", "textIndent", "MozTextIndent", "WebkitTextIndent", "MSTextIndent", "OTextIndent", "textOrientation", "MozTextOrientation", "WebkitTextOrientation", "MSTextOrientation", "OTextOrientation", "textOverflow", "MozTextOverflow", "WebkitTextOverflow", "MSTextOverflow", "OTextOverflow", "textRendering", "MozTextRendering", "WebkitTextRendering", "MSTextRendering", "OTextRendering", "textShadow", "MozTextShadow", "WebkitTextShadow", "MSTextShadow", "OTextShadow", "textTransform", "MozTextTransform", "WebkitTextTransform", "MSTextTransform", "OTextTransform", "textUnderlinePosition", "MozTextUnderlinePosition", "WebkitTextUnderlinePosition", "MSTextUnderlinePosition", "OTextUnderlinePosition", "top", "MozTop", "WebkitTop", "MSTop", "OTop", "touchAction", "MozTouchAction", "WebkitTouchAction", "MSTouchAction", "OTouchAction", "transform", "MozTransform", "WebkitTransform", "msTransform", "OTransform", "transformBox", "MozTransformBox", "WebkitTransformBox", "MSTransformBox", "OTransformBox", "transformOrigin", "MozTransformOrigin", "WebkitTransformOrigin", "MSTransformOrigin", "OTransformOrigin", "transformStyle", "MozTransformStyle", "WebkitTransformStyle", "MSTransformStyle", "OTransformStyle", "transition", "MozTransition", "WebkitTransition", "MSTransition", "OTransition", "transitionDelay", "MozTransitionDelay", "WebkitTransitionDelay", "MSTransitionDelay", "OTransitionDelay", "transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "MSTransitionDuration", "OTransitionDuration", "transitionProperty", "MozTransitionProperty", "WebkitTransitionProperty", "MSTransitionProperty", "OTransitionProperty", "transitionTimingFunction", "MozTransitionTimingFunction", "WebkitTransitionTimingFunction", "MSTransitionTimingFunction", "OTransitionTimingFunction", "turn", "MozTurn", "WebkitTurn", "MSTurn", "OTurn", "unicodeBidi", "MozUnicodeBidi", "WebkitUnicodeBidi", "MSUnicodeBidi", "OUnicodeBidi", "unset", "MozUnset", "WebkitUnset", "MSUnset", "OUnset", "verticalAlign", "MozVerticalAlign", "WebkitVerticalAlign", "MSVerticalAlign", "OVerticalAlign", "vh", "MozVh", "WebkitVh", "MSVh", "OVh", "visibility", "MozVisibility", "WebkitVisibility", "MSVisibility", "OVisibility", "vmax", "MozVmax", "WebkitVmax", "MSVmax", "OVmax", "vmin", "MozVmin", "WebkitVmin", "MSVmin", "OVmin", "vw", "MozVw", "WebkitVw", "MSVw", "OVw", "whiteSpace", "MozWhiteSpace", "WebkitWhiteSpace", "MSWhiteSpace", "OWhiteSpace", "widows", "MozWidows", "WebkitWidows", "MSWidows", "OWidows", "width", "MozWidth", "WebkitWidth", "MSWidth", "OWidth", "willChange", "MozWillChange", "WebkitWillChange", "MSWillChange", "OWillChange", "wordBreak", "MozWordBreak", "WebkitWordBreak", "MSWordBreak", "OWordBreak", "wordSpacing", "MozWordSpacing", "WebkitWordSpacing", "MSWordSpacing", "OWordSpacing", "wordWrap", "MozWordWrap", "WebkitWordWrap", "MSWordWrap", "OWordWrap", "writingMode", "MozWritingMode", "WebkitWritingMode", "MSWritingMode", "OWritingMode", "zIndex", "MozZIndex", "WebkitZIndex", "MSZIndex", "OZIndex", "fontSize", "MozFontSize", "WebkitFontSize", "MSFontSize", "OFontSize", "flex", "MozFlex", "WebkitFlex", "MSFlex", "OFlex", "fr", "MozFr", "WebkitFr", "MSFr", "OFr", "overflowScrolling", "MozOverflowScrolling", "WebkitOverflowScrolling", "MSOverflowScrolling", "OOverflowScrolling", "userSelect", "MozUserSelect", "WebkitUserSelect", "MSUserSelect", "OUserSelect"];

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnimationModule = exports.removeNamespace = exports.transformKeys = exports.prepareValueForInput = exports.inputTypeForPrototype = exports.cloneObject = exports.getViewport = exports.round = exports.range = exports.angle360FromPositions = exports.angleFromPositions = undefined;

var _assoc = __webpack_require__(387);

var _assoc2 = _interopRequireDefault(_assoc);

var _compose = __webpack_require__(388);

var _compose2 = _interopRequireDefault(_compose);

var _keys = __webpack_require__(347);

var _keys2 = _interopRequireDefault(_keys);

var _reduce = __webpack_require__(376);

var _reduce2 = _interopRequireDefault(_reduce);

var _pickBy = __webpack_require__(398);

var _pickBy2 = _interopRequireDefault(_pickBy);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var angleFromPositions = exports.angleFromPositions = function angleFromPositions(cx, cy, ex, ey) {
  var theta = Math.atan2(ey - cy, ex - cx) + Math.PI / 2;
  return theta * 180 / Math.PI;
};

var angle360FromPositions = exports.angle360FromPositions = function angle360FromPositions(cx, cy, ex, ey) {
  var angle = angleFromPositions(cx, cy, ex, ey);
  return angle < 0 ? 360 + angle : angle;
};

var range = exports.range = function range() {
  var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var _start = 0,
      _stop = start;

  if (stop !== null) {
    _start = start;
    _stop = stop;
  }
  var length = Math.max(Math.ceil((_stop - _start) / step), 0);
  var _range = Array(length);

  for (var idx = 0; idx < length; idx += 1, _start += step) {
    _range[idx] = _start;
  }

  return _range;
};

var round = exports.round = function round(number, decimals) {
  if (!isNaN(parseFloat(number)) && isFinite(number)) {
    var decimalPower = Math.pow(10, decimals);
    return Math.round(parseFloat(number) * decimalPower) / decimalPower;
  }
  return NaN;
};

var getViewport = exports.getViewport = function getViewport() {
  return {
    height: window.innerHeight || document.documentElement.offsetHeight,
    width: window.innerWidth || document.documentElement.offsetWidth
  };
};

var cloneObject = exports.cloneObject = function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
};

var inputTypeForPrototype = exports.inputTypeForPrototype = function inputTypeForPrototype(prototype) {
  if (prototype === Date) return 'date';
  if (prototype === Number) return 'number';
  if (prototype === Boolean) return 'checkbox';
  return 'text';
};

var prepareValueForInput = exports.prepareValueForInput = function prepareValueForInput(value, type) {
  if (type === 'date') return new Date(value).toISOString().slice(0, 10);
  if (type === 'checkbox') {
    return value ? 'on' : '';
  }
  return value;
};

var transformKeys = exports.transformKeys = function transformKeys(fn) {
  return function (obj) {
    var addTransformedKey = function addTransformedKey(result, key) {
      return (0, _assoc2.default)(fn(key), obj[key], result);
    };
    return (0, _reduce2.default)(addTransformedKey, {}, (0, _keys2.default)(obj));
  };
};

var removeNamespace = exports.removeNamespace = function removeNamespace(namespace) {
  return function (key) {
    var capitalized = key.substr(namespace.length);
    return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
  };
};

var getAnimationModule = exports.getAnimationModule = function getAnimationModule(animation, theme) {
  return (0, _compose2.default)(transformKeys(removeNamespace(animation)), (0, _pickBy2.default)(function (v, k) {
    return k.startsWith(animation);
  }))(theme);
};

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry3 = __webpack_require__(373);

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pipe = __webpack_require__(389);
var reverse = __webpack_require__(397);

/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arity = __webpack_require__(375);
var _pipe = __webpack_require__(390);
var reduce = __webpack_require__(376);
var tail = __webpack_require__(395);

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)));
};

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function _pipe(f, g) {
  return function () {
    return g.call(this, f.apply(this, arguments));
  };
};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xwrap = __webpack_require__(392);
var bind = __webpack_require__(393);
var isArrayLike = __webpack_require__(394);

module.exports = function () {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}();

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) {
    return new XWrap(fn);
  };
}();

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _arity = __webpack_require__(375);
var _curry2 = __webpack_require__(346);

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _curry1 = __webpack_require__(338);
var _isArray = __webpack_require__(377);
var _isString = __webpack_require__(378);

/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkForMethod = __webpack_require__(379);
var _curry1 = __webpack_require__(338);
var slice = __webpack_require__(396);

/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _checkForMethod = __webpack_require__(379);
var _curry3 = __webpack_require__(373);

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry1 = __webpack_require__(338);
var _isString = __webpack_require__(378);

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _curry2 = __webpack_require__(346);

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"theme--container--_-dLkP4g","knob":"theme--knob--kq8OmGI7","innerknob":"theme--innerknob--8VjZ5C_s","snaps":"theme--snaps--2x5j_dyP","snap":"theme--snap--12aGJvL0","input":"theme--input--2JHGyGio","progress":"theme--progress--2R4jWL42","innerprogress":"theme--innerprogress--3p0mR4j_","slider":"theme--slider--3-BtZCXw","editable":"theme--editable--hkAL6qIc","pinned":"theme--pinned--28Oo06sa","pressed":"theme--pressed--292qKxjV","ring":"theme--ring--2Oh5LEDl"};

/***/ })

});