(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{QxKA:function(e,t,n){e.exports=n.p+"8668aacafba1349a7e683ea5c73fbb10.svg"},Ua0Z:function(e,t,n){"use strict";var o=n("TP7S"),a=n.n(o),r=n("q1tI"),i=n.n(r),l=n("rIqd"),s=n("X1lt"),c=n("G9Ht"),f=n.n(c),p=n("USFT"),u=n("jdWZ"),b=n("mEpg"),y=n.n(b),g=n("QxKA"),h=n.n(g);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}var _=function(e){function MobileWarningWall(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,MobileWarningWall);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(MobileWarningWall)).call.apply(e,[this].concat(o)))).state={},t.onChange=function(){var e=!t.state.neverAgain;t.setState({neverAgain:e}),e?window.localStorage.setItem("dontShowMobileWarning",!0):window.localStorage.removeItem("dontShowMobileWarning")},t.onConfirm=function(){t.setState({hasSeenMobileWarning:!0})},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(MobileWarningWall,r["Component"]),function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(MobileWarningWall,[{key:"componentDidMount",value:function componentDidMount(){this.isMobile()&&!this.dontShowMobileWarning()&&Object(u.b)("visit","mobile_warning_wall"),this.setState({hasSeenMobileWarning:this.dontShowMobileWarning(),neverAgain:this.dontShowMobileWarning()})}},{key:"dontShowMobileWarning",value:function dontShowMobileWarning(){return Boolean(window.localStorage.getItem("dontShowMobileWarning"))}},{key:"isMobile",value:function isMobile(){return f.a.any}},{key:"render",value:function render(){return this.isMobile()?a()(this.state.hasSeenMobileWarning)?null:i.a.createElement(s.a,{isOpen:!this.state.hasSeenMobileWarning,overlayType:"screen",viewportLocked:!0},i.a.createElement("div",{className:y.a.container},i.a.createElement("div",{className:y.a.content},i.a.createElement("img",{alt:Object(p.b)("views.mobile.desktop_alt_text"),className:y.a.desktop,src:h.a}),i.a.createElement("h3",{className:y.a.heading},Object(p.b)("views.mobile.desktop_warning")),i.a.createElement("p",{className:y.a.copy},Object(p.b)("views.mobile.desktop_warning_copy")),i.a.createElement(l.a,{className:y.a.confirm,theme:"secondary",size:"large",onClick:this.onConfirm},"Got it")),i.a.createElement("div",{className:y.a.seenAlready,onClick:this.onChange},i.a.createElement("input",{className:y.a.radio,type:"radio",id:"never-again",checked:this.state.neverAgain,onChange:this.onChange}),i.a.createElement("label",{htmlFor:"never-again"},Object(p.b)("views.mobile.dont_show_again"))))):null}}]),MobileWarningWall}();t.a=_},mEpg:function(e,t,n){e.exports={container:"container__3ob3fB-nROC9zycL11oWfn",radio:"radio__3W4vPBGBhuuQqfUqu-AswZ",desktop:"desktop__2as-Ju7nnR5EKI044m3Om",copy:"copy__3hBopOAfL4ry3rNvI5iO9e",content:"content__3IEv2mIrrOtVtXIjR8VhgR",heading:"heading__6BvolOFvW3UWRoYmJ8-CL",confirm:"confirm__1bLZ0fSu6fsdSpApx74RCd",seenAlready:"seenAlready__2W6ynDlWtg2kDUN8o5bgcu"}}}]);
//# sourceMappingURL=97.f95bdd9b0c7557518abc.chunk.js.map