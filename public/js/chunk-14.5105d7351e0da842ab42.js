webpackJsonp([14],{

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

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(401);

var _index2 = _interopRequireDefault(_index);

var _PopupBar = __webpack_require__(330);

var _PopupBar2 = _interopRequireDefault(_PopupBar);

var _RoundedButton = __webpack_require__(320);

var _RoundedButton2 = _interopRequireDefault(_RoundedButton);

var _store = __webpack_require__(123);

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__(37);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//STORE


//COMPONENT
var Finish = function (_Component) {
  _inherits(Finish, _Component);

  function Finish() {
    _classCallCheck(this, Finish);

    return _possibleConstructorReturn(this, (Finish.__proto__ || Object.getPrototypeOf(Finish)).apply(this, arguments));
  }

  _createClass(Finish, [{
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
      return _react2.default.createElement(
        _PopupBar2.default,
        _extends({
          title: 'Order' }, this.props, {
          anim: _PopupBar.ANIMATE_HORIZONTAL
        }),
        _react2.default.createElement(
          'div',
          { className: _index2.default.container },
          _react2.default.createElement(
            'div',
            { className: _index2.default.icon },
            _react2.default.createElement('span', { className: 'mdi mdi-send' })
          ),
          _react2.default.createElement(
            _RoundedButton2.default,
            null,
            'Sudah Sampai'
          )
        )
      );
    }
  }]);

  return Finish;
}(_react.Component);

exports.default = Finish;

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"index--container--E0m8XOwr","icon":"index--icon--2Am8as_c"};

/***/ })

});