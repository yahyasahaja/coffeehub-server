webpackJsonp([5],{334:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=r(369),s=(n(f),r(342)),p=n(s),d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return c.default.createElement(p.default,{fly:{title:{cart:!0},mode:s.HIDE},isSelected:this.props.isSelected},c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"),c.default.createElement("h1",null,"Disukai Example"))}}]),t}(u.Component);t.default=d},342:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.TopBar=t.ABSOLUTE=t.APPEAR=t.HIDE=void 0;var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=r(73),s=(n(f),r(343)),p=n(s),d=r(344),h=n(d),m=r(346),b=n(m),y=t.HIDE="hide",E=t.APPEAR="appear",v=(t.ABSOLUTE="absolute",t.TopBar=function(e){function t(){var e,r,n,l;a(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.checkScroll=function(){var e=n.props,t=e.fly;e.relative;if(t){var r=(t.search,t.title,t.mode),a=Math.max(document.documentElement.scrollTop,document.body.scrollTop);if(r===E&&n.relativeContainer){var o=n.relativeContainer.offsetHeight,l=n.state.shouldAppear;a<5?n.setState({forceHide:!0}):a>o&&!l?n.setState({shouldAppear:!0,forceHide:!1}):a<o&&l&&n.setState({shouldAppear:!1,forceHide:!1})}else if(r===y){n.current=a;var i=n.state.shouldAppear;a<100&&!i?n.setState({shouldAppear:!0}):n.current-n.before>3&&i?n.setState({shouldAppear:!1}):n.current-n.before<-10&&!i&&n.setState({shouldAppear:!0}),n.before=n.current}}},n.before=0,n.current=0,n.state={shouldAppear:!1,forceHide:!1},l=r,o(n,l)}return l(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.isSelected;t!=this.props.isSelected&&this.addScrollListener(t)}},{key:"componentDidMount",value:function(){this.before=this.current=document.documentElement.scrollTop,window.scrollTo(0,0),this.addScrollListener(this.props.isSelected),this.checkScroll()}},{key:"addScrollListener",value:function(e){e?(window.addEventListener("scroll",this.checkScroll),window.addEventListener("gesturechange",this.checkScroll)):(window.removeEventListener("scroll",this.checkScroll),window.removeEventListener("gesturechange",this.checkScroll))}},{key:"renderRelativeTopBar",value:function(){var e=this,t=this.props,r=t.relative,n=t.component;if(r){var a=r.search,o=r.title;return c.default.createElement("div",{className:p.default.relative,ref:function(t){return e.relativeContainer=t}},function(){return n||[o&&c.default.createElement(h.default,{cart:o.cart}),a&&c.default.createElement(b.default,{cart:a.cart})]}())}}},{key:"renderFlyTopBar",value:function(){var e=this.props,t=e.fly,r=(e.relative,e.component);if(t){var n=t.search,a=t.title,o=t.mode,l=this.state,i=l.shouldAppear,u=l.forceHide,f=void 0;u&&o===E&&(f={opacity:u?0:1,transition:"0s"});var s=void 0;return o===E?s=i?p.default.appear:p.default.hide:o===y&&(s=i?p.default.appear:p.default.hide),c.default.createElement("div",{className:p.default.fly+" "+s,style:f},function(){return r||[a&&c.default.createElement(h.default,{cart:a.cart}),n&&c.default.createElement(b.default,{cart:n.cart})]}())}}},{key:"render",value:function(){var e=this.props,t=e.relative,r=e.fly,n={};return r&&!t&&(n.paddingTop=65),c.default.createElement("div",{className:p.default.container},this.renderFlyTopBar(),c.default.createElement("div",{className:p.default.content,style:n},this.renderRelativeTopBar(),c.default.createElement("div",{className:p.default.wrapper},this.props.children)))}}]),t}(u.Component));t.default=v},343:function(e,t){e.exports={container:"top-bar--container--1OAjDD97",fly:"top-bar--fly--1JxNG-Y6",content:"top-bar--content--1BnBTejQ",relative:"top-bar--relative--3wDXDyDT",wrapper:"top-bar--wrapper--1k3IoLEu",appear:"top-bar--appear--2PSscB69",hide:"top-bar--hide--2tKLvYPz"}},344:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=r(25),s=r(345),p=n(s),d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.cart;return c.default.createElement("div",{className:p.default.container},c.default.createElement("div",{className:p.default.title},c.default.createElement("span",null,"CoffeeHub")),e&&c.default.createElement(f.Link,{to:"/cart",className:"mdi mdi-cart "+p.default.icon}))}}]),t}(u.Component);t.default=d},345:function(e,t){e.exports={container:"title-bar--container--xl7VP5XT",title:"title-bar--title--3jahhR_7",icon:"title-bar--icon--3Hfbb9B4"}},346:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),f=r(25),s=r(347),p=n(s),d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props.cart;return c.default.createElement("div",{className:p.default.container},c.default.createElement(f.Link,{className:p.default.search,to:"/search"},c.default.createElement("span",{className:"mdi mdi-magnify "+p.default.icon}),c.default.createElement("span",{className:p.default.placeholder},"Mau belanja apa hari ini?")),e&&c.default.createElement(f.Link,{to:"/cart",className:"mdi mdi-cart "+p.default.icon}))}}]),t}(u.Component);t.default=d},347:function(e,t){e.exports={container:"search-bar--container--2TlmOGdA",search:"search-bar--search--144fsz9m",icon:"search-bar--icon--1BWmW0qm"}},369:function(e,t){e.exports={container:"index--container---7aTo5KM",content:"index--content--WXYCmU3S"}}});