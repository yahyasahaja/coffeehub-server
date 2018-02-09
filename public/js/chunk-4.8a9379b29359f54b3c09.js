webpackJsonp([4],{

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(327);

var _index2 = _interopRequireDefault(_index);

var _TopBar = __webpack_require__(314);

var _TopBar2 = _interopRequireDefault(_TopBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENTS


//COMPONENT
var PageNotFound = function (_Component) {
  _inherits(PageNotFound, _Component);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _TopBar2.default,
        {
          fly: {
            title: { cart: true },
            mode: _TopBar.ABSOLUTE
          }
        },
        _react2.default.createElement(
          'h2',
          null,
          '404 NOT FOUND'
        )
      );
    }
  }]);

  return PageNotFound;
}(_react.Component);

exports.default = PageNotFound;

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopBar = exports.ABSOLUTE = exports.APPEAR = exports.HIDE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _topBar = __webpack_require__(315);

var _topBar2 = _interopRequireDefault(_topBar);

var _TitleBar = __webpack_require__(316);

var _TitleBar2 = _interopRequireDefault(_TitleBar);

var _SearchBar = __webpack_require__(318);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 TOP BAR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 by Yahya Sahaja
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 created on February 3, 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 for Hash.Blanja
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 USAGE 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 props.relative = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   title: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     cart: Boolean, //default true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   search: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     cart: Boolean, //default true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 props.fly = {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   title: {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     cart: Boolean, //default true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   search: { //default null
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     cart: Boolean, //default true,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   mode: ENUM('hide', 'appear', 'absolute') //default 'appear'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

//MODULES


//STYLES


//COMPONENTS


var HIDE = exports.HIDE = 'hide';
var APPEAR = exports.APPEAR = 'appear';
var ABSOLUTE = exports.ABSOLUTE = 'absolute';

//COMPONENT

var TopBar = exports.TopBar = function (_Component) {
  _inherits(TopBar, _Component);

  function TopBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TopBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call.apply(_ref, [this].concat(args))), _this), _this.checkScroll = function () {
      var _this$props = _this.props,
          fly = _this$props.fly,
          relative = _this$props.relative;

      if (!fly) return;
      var search = fly.search,
          title = fly.title,
          mode = fly.mode;

      var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

      var anim = void 0;

      if (mode === APPEAR && _this.relativeContainer) {
        var minimalPosition = _this.relativeContainer.offsetHeight;
        var shouldAppear = _this.state.shouldAppear;


        if (scrollTop < 5) {
          _this.setState({
            forceHide: true
          });
        } else if (scrollTop > minimalPosition && !shouldAppear) {
          _this.setState({
            shouldAppear: true,
            forceHide: false
          });
        } else if (scrollTop < minimalPosition && shouldAppear) {
          _this.setState({
            shouldAppear: false,
            forceHide: false
          });
        }
      } else if (mode === HIDE) {
        _this.current = scrollTop;
        var _shouldAppear = _this.state.shouldAppear;


        if (scrollTop < 100 && !_shouldAppear) _this.setState({ shouldAppear: true });else if (_this.current - _this.before > 3 && _shouldAppear) {
          //scrolling down
          _this.setState({ shouldAppear: false });
        } else if (_this.current - _this.before < -10 && !_shouldAppear) {
          _this.setState({ shouldAppear: true });
        }

        _this.before = _this.current;
      }
    }, _this.before = 0, _this.current = 0, _this.state = {
      shouldAppear: false,
      forceHide: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TopBar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isSelectedCurrent = nextProps.isSelected;
      var isSelectedBefore = this.props.isSelected;

      if (isSelectedCurrent != isSelectedBefore) {
        this.addScrollListener(isSelectedCurrent);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.before = this.current = document.documentElement.scrollTop;
      window.scrollTo(0, 0);
      this.addScrollListener(this.props.isSelected);
      this.checkScroll();
    }
  }, {
    key: 'addScrollListener',
    value: function addScrollListener(isSelected) {
      if (isSelected) {
        window.addEventListener('scroll', this.checkScroll);
        window.addEventListener('gesturechange', this.checkScroll);
      } else {
        window.removeEventListener('scroll', this.checkScroll);
        window.removeEventListener('gesturechange', this.checkScroll);
      }
    }
  }, {
    key: 'renderRelativeTopBar',
    value: function renderRelativeTopBar() {
      var _this2 = this;

      var _props = this.props,
          relative = _props.relative,
          component = _props.component;

      if (!relative) return;
      var search = relative.search,
          title = relative.title;


      return _react2.default.createElement(
        'div',
        {
          className: _topBar2.default.relative,
          ref: function ref(el) {
            return _this2.relativeContainer = el;
          }
        },
        function () {
          if (component) return component;else return [title && _react2.default.createElement(_TitleBar2.default, { cart: title.cart }), search && _react2.default.createElement(_SearchBar2.default, { cart: search.cart })];
        }()
      );
    }
  }, {
    key: 'renderFlyTopBar',
    value: function renderFlyTopBar() {
      var _props2 = this.props,
          fly = _props2.fly,
          relative = _props2.relative,
          component = _props2.component;

      if (!fly) return;
      var search = fly.search,
          title = fly.title,
          mode = fly.mode;
      var _state = this.state,
          shouldAppear = _state.shouldAppear,
          forceHide = _state.forceHide;

      var style = void 0;
      if (forceHide && mode === APPEAR) style = {
        opacity: forceHide ? 0 : 1,
        transition: '0s'
      };

      var animClassName = void 0;

      if (mode === APPEAR) {
        if (shouldAppear) animClassName = _topBar2.default.appear;else animClassName = _topBar2.default.hide;
      } else if (mode === HIDE) {
        if (shouldAppear) animClassName = _topBar2.default.appear;else animClassName = _topBar2.default.hide;
      }

      return _react2.default.createElement(
        'div',
        {
          className: _topBar2.default.fly + ' ' + animClassName,
          style: style
        },
        function () {
          if (component) return component;else return [title && _react2.default.createElement(_TitleBar2.default, { cart: title.cart }), search && _react2.default.createElement(_SearchBar2.default, { cart: search.cart })];
        }()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          relative = _props3.relative,
          fly = _props3.fly;

      var style = {};

      if (fly && !relative) {
        style.paddingTop = 65;
      }

      return _react2.default.createElement(
        'div',
        { className: _topBar2.default.container },
        this.renderFlyTopBar(),
        _react2.default.createElement(
          'div',
          { className: _topBar2.default.content, style: style },
          this.renderRelativeTopBar(),
          _react2.default.createElement(
            'div',
            { className: _topBar2.default.wrapper },
            this.props.children
          )
        )
      );
    }
  }]);

  return TopBar;
}(_react.Component);

exports.default = TopBar;

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"top-bar--container--1OAjDD97","fly":"top-bar--fly--1JxNG-Y6","content":"top-bar--content--1BnBTejQ","relative":"top-bar--relative--3wDXDyDT","wrapper":"top-bar--wrapper--1k3IoLEu","appear":"top-bar--appear--2PSscB69","hide":"top-bar--hide--2tKLvYPz"};

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _titleBar = __webpack_require__(317);

var _titleBar2 = _interopRequireDefault(_titleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENT
var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var cart = this.props.cart;

      return _react2.default.createElement(
        'div',
        { className: _titleBar2.default.container },
        _react2.default.createElement(
          'div',
          { className: _titleBar2.default.title },
          _react2.default.createElement(
            'span',
            null,
            'CoffeeHub'
          )
        ),
        cart && _react2.default.createElement(_reactRouterDom.Link, { to: '/cart', className: 'mdi mdi-cart ' + _titleBar2.default.icon })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"title-bar--container--xl7VP5XT","title":"title-bar--title--3jahhR_7","icon":"title-bar--icon--3Hfbb9B4"};

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(22);

var _searchBar = __webpack_require__(319);

var _searchBar2 = _interopRequireDefault(_searchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //MODULES


//STYLES


//COMPONENT
var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var cart = this.props.cart;

      return _react2.default.createElement(
        'div',
        { className: _searchBar2.default.container },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: _searchBar2.default.search, to: '/search' },
          _react2.default.createElement('span', { className: 'mdi mdi-magnify ' + _searchBar2.default.icon }),
          _react2.default.createElement(
            'span',
            { className: _searchBar2.default.placeholder },
            'Mau belanja apa hari ini?'
          )
        ),
        cart && _react2.default.createElement(_reactRouterDom.Link, { to: '/cart', className: 'mdi mdi-cart ' + _searchBar2.default.icon })
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"search-bar--container--2TlmOGdA","search":"search-bar--search--144fsz9m","icon":"search-bar--icon--1BWmW0qm"};

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"index--container--3b24MeRL"};

/***/ })

});