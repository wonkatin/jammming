(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{VP2z:function(e,t,o){"use strict";o.r(t);var r=o("mNz5"),n=o.n(r),i=o("4qC0"),p=o.n(i),s=o("17x9"),a=o.n(s),c=o("q1tI"),l=o.n(c),f=o("TSYQ"),u=o.n(f),y=o("zHpA"),b=o("Yu66"),d=o.n(b);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function CodeBlock(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CodeBlock),_possibleConstructorReturn(this,_getPrototypeOf(CodeBlock).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(CodeBlock,l.a.PureComponent),function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(CodeBlock,[{key:"getMode",value:function getMode(){return this.props.language?Object(y.d)(this.props.language):this.props.filename&&!this.props.filename.match(/\.min\./)?Object(y.c)(this.props.filename):"text/plain"}},{key:"render",value:function render(){var e;if(!p()(this.props.children))throw new Error("CodeBlock needs a text node child; got ".concat(this.props.children));var t=this.getMode(),o=[];y.a.runMode(this.props.children,t,function(e,t){t?o.push(l.a.createElement("span",{key:n()("codeFragment"),className:"cm-".concat(t)},e)):o.push(e)});var r=this.props,i=r.overflowVisible,s=_objectWithoutProperties(r,["overflowVisible"]),a=u()((_defineProperty(e={},d.a.CodeBlock,!0),_defineProperty(e,d.a.wrap,this.props.wrap),_defineProperty(e,y.e.defaults,!0),_defineProperty(e,y.e.cc,!0),_defineProperty(e,y.e.snippet,!0),_defineProperty(e,d.a.overflowVisible,i),e),this.props.className);return l.a.createElement("span",_extends({},s,{className:a}),l.a.createElement("div",{className:"CodeMirror"},o))}}]),CodeBlock}();_.propTypes={wrap:a.a.bool,language:a.a.string,filename:a.a.string,className:a.a.string,overflowVisible:a.a.bool,children:a.a.string},_.defaultProps={wrap:!0},t.default=_},Yu66:function(e,t,o){e.exports={CodeBlock:"CodeBlock__3-kebd7REMI5aXkez6K-B",overflowVisible:"overflowVisible__15MjV9KciSIgVDKrtXAi8J",wrap:"wrap__yxnEyEmMpigk6-3_Wvbzo"}}}]);
//# sourceMappingURL=platform-components-CodeBlock.b41b9b65c4595ed8b80f.chunk.js.map