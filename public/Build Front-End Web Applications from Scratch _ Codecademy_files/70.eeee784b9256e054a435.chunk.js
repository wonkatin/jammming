(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{I3Uf:function(e,t,r){e.exports={registrationContainer:"registrationContainer__2QEroVip0rj6VbrALiBz8V",screenReaderOnly:"screenReaderOnly__1DEYZ8Nk3P95bk8hyfMxBS",submitButton:"submitButton__34k4InI5TII_ayjcKIwCLO",tos:"tos__2irFvmVYzLt-zbObC3_2D8",recaptchaError:"recaptchaError__1Bv_glx_hCOObzHUb3cF9b",formGroup:"formGroup__2f7GlHvZXKIMvaIzaJuPIp",padBottomIfNotEmpty:"padBottomIfNotEmpty__1nV3QG5IEzhRlwpmTjvFiE"}},NosH:function(e,t,r){"use strict";var n=r("Z0cm"),a=r.n(n),o=r("mwIZ"),i=r.n(o),s=r("DzJC"),c=r.n(s),l=r("q1tI"),u=r.n(l),p=r("17x9"),d=r.n(p),f=r("24Ii"),m=r.n(f),y=r("qVvP"),b=r("xk4V"),_=r.n(b),h=r("USFT"),v=r("TSYQ"),g=r.n(v),E=r("xerY"),S=r("E9dL"),O=r("Gtit"),P=r("DPuV"),w=r("jdWZ"),j=r("JDpR"),I=r("PAGU"),R=r("wz8U"),C=r("I3Uf"),V=r.n(C);function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _toConsumableArray(e){return function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){_defineProperty(e,t,r[t])})}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=[{name:"username",label:Object(h.b)("views.users.registration.username_label"),autocomplete:"username",autofocus:!0,type:"text"},{name:"email",label:Object(h.b)("views.users.registration.email_label"),type:"email",autocomplete:"email",invalidMessage:"Please use a valid email address"},{name:"password",label:Object(h.b)("views.users.registration.password_label"),type:"password",autocomplete:"new-password",invalidMessage:"must have at least 4 characters",pattern:".{4,128}"}],k=function getInputConfig(){return F},x="/register/validate",T="/register",z=function extractValidationErrors(e){var t=i()(e,"body.errors");return t&&Object.values(t).filter(function(e){return e})?Object.entries(t).reduce(function(e,t){var r=_slicedToArray(t,2),n=r[0],o=r[1];return _objectSpread({},e,_defineProperty({},n,a()(o)?o[0]:o))},{}):null},A=function(e){function RegistrationForm(){var e,t;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RegistrationForm);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(RegistrationForm)).call.apply(e,[this].concat(n)))).idPrefix="sign_up_form_",t.state={disabled:!1,recaptchaInstanceId:_()(),validationErrors:{}},t.onRecapChange=function(e){t.submitForm(e)},t.onRecapExpire=function(){t.resetRecaptcha()},t.submitForm=function(e){m.a.post(T).send(_objectSpread({},t.serialize(),{"g-recaptcha-response":e})).use(y.b).accept("json").then(function(e){var r=e.body.redirectTo;Object(w.a)("user_sign_up"),t.setState({disabled:!1}),window.location.assign(Object(O.d)(r||Object(P.p)()))}).catch(function(e){var r=z(e.response);t.setState({disabled:!1}),r&&t.setValidationErrorState(r),t.resetRecaptcha()})},t.onSubmitInitialize=function(e){return e.preventDefault(),t.isValid()?(t.setState({disabled:!0}),m.a.post(x).send(t.serialize()).use(y.b).accept("json").then(function(){t.captcha.execute()}).catch(function(e){var r=z(e.response);r&&t.setValidationErrorState(r),t.setState({disabled:!1})})):null},t.genericClientSideValidityHandler=function(e,r){var n,a=r.target.validity.valueMissing,o=r.target.validity.valid;a?n="can't be blank":o||(n=k().find(function(t){return t.name===e}).invalidMessage),t.setValidationErrorState(_defineProperty({},e,n))},t.genericServerSideValidityHandler=c()(function(e,r){r.target.value?m.a.post(x).send({user:_defineProperty({},e,r.target.value)}).use(y.b).accept("json").then(function(){t.setValidationErrorState(_defineProperty({},e,void 0))}).catch(function(r){var n=z(r.response);n[e]?t.setValidationErrorState(_defineProperty({},e,n[e])):t.setValidationErrorState(_defineProperty({},e,void 0))}):t.setValidationErrorState(_defineProperty({},e,"can't be blank"))},250),t.validateField=function(e,r){"password"===e?t.genericClientSideValidityHandler(r.target.name,r):t.genericServerSideValidityHandler(r.target.name,r)},t.onFieldBlur=function(e){e.persist(),t.validateField(e.target.name,e)},t.onFieldKeyUp=function(e){e.persist();var r=e.target.name;t.state.validationErrors[r]&&t.validateField(e.target.name,e)},t.setFormRef=function(e){t.form=e},t.setCaptchaRef=function(e){t.captcha=e},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(RegistrationForm,l["Component"]),function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(RegistrationForm,[{key:"setValidationErrorState",value:function setValidationErrorState(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.setState(function(r){return _objectSpread({validationErrors:_objectSpread({},r.validationErrors,e)},t)})}},{key:"isValid",value:function isValid(){return!Object.values(this.state.validationErrors).filter(function(e){return e}).length}},{key:"serialize",value:function serialize(){return _toConsumableArray(this.form.elements).filter(function(e){return e.name}).reduce(function(e,t){var r=t.dataset.resource;return _objectSpread({},e,r?_defineProperty({},r,_objectSpread({},e[r],_defineProperty({},t.name,t.value))):_defineProperty({},t.name,t.value))},{})}},{key:"resetRecaptcha",value:function resetRecaptcha(){this.setState({recaptchaInstanceId:_()(),disabled:!1})}},{key:"render",value:function render(){var e=this,t=R.a.get("authenticity_token"),r=this.props,n=r.redirectUrl,a=r.locationType,o=r.currentPage,i="location/EXERCISE"===a,s=this.state.disabled,c=n&&Object(O.d)(n),l=g()("recaptcha-wrapper",V.a.padBottomIfNotEmpty);return u.a.createElement("div",{className:V.a.registrationContainer},u.a.createElement("form",{onSubmit:this.onSubmitInitialize,noValidate:!0,ref:this.setFormRef},u.a.createElement("legend",{className:V.a.screenReaderOnly},"Sign up"),u.a.createElement("input",{name:"authenticity_token",type:"hidden",value:t}),u.a.createElement("input",{name:"signing_up_from_exercise",type:"hidden",value:i}),u.a.createElement("input",{name:"referring_page",type:"hidden",value:o}),u.a.createElement("input",{name:"redirect",type:"hidden",value:c}),k().map(function(t){return u.a.createElement(E.c,{key:"".concat(e.idPrefix).concat(t.name),htmlFor:"".concat(e.idPrefix).concat(t.name),label:t.label,className:V.a.formGroup,description:e.state.validationErrors[t.name]},u.a.createElement(E.e,{htmlFor:"".concat(e.idPrefix).concat(t.name),name:t.name,type:t.type,autoComplete:t.autocomplete,onBlur:e.onFieldBlur,onKeyUp:e.onFieldKeyUp,required:!0,error:!!e.state.validationErrors[t.name],pattern:t.pattern,"data-resource":"user",autoFocus:t.autofocus}))}),u.a.createElement("div",{className:l},this.state.validationErrors.recaptcha&&u.a.createElement("div",{className:V.a.recaptchaError,"data-testid":"recaptcha-error"},this.state.validationErrors.recaptcha),u.a.createElement(j.a,{key:this.state.recaptchaInstanceId,publicKey:R.a.get("recaptcha_key"),size:"invisible",ref:this.setCaptchaRef,onChange:this.onRecapChange,onExpire:this.onRecapExpire})),u.a.createElement(S.a,{size:"large",theme:"brand-purple",round:!0,type:"submit",className:V.a.submitButton,disabled:s,id:"".concat(this.idPrefix,"submit")},Object(h.b)("views.users.registration.create_account_cta")),u.a.createElement("p",{className:V.a.tos,dangerouslySetInnerHTML:{__html:"".concat(Object(h.b)("views.users.sessions.recaptcha_link")," ").concat(Object(h.b)("views.users.sessions.tos_link"))}})),u.a.createElement(I.a,{signUp:!0,urlParams:{redirect:c}}))}}]),RegistrationForm}();A.propTypes={redirectUrl:d.a.string,locationType:d.a.string,currentPage:d.a.string},t.a=A}}]);
//# sourceMappingURL=70.eeee784b9256e054a435.chunk.js.map