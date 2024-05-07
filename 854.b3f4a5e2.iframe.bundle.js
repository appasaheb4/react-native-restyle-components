/*! For license information please see 854.b3f4a5e2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_native_restyle_components=self.webpackChunkreact_native_restyle_components||[]).push([[854],{"./node_modules/@babel/runtime/helpers/arrayWithHoles.js":module=>{module.exports=function _arrayWithHoles(arr){if(Array.isArray(arr))return arr},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":module=>{module.exports=function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/nonIterableRest.js":module=>{module.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/slicedToArray.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),iterableToArrayLimit=__webpack_require__("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/nonIterableRest.js");module.exports=function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest()},module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/react-native-web/dist/exports/TextInput/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),forwardedProps=_interopRequireWildcard(__webpack_require__("./node_modules/react-native-web/dist/modules/forwardedProps/index.js")),_pick=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/pick/index.js")),_useElementLayout=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useElementLayout/index.js")),_useLayoutEffect=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js")),_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePlatformMethods=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js")),_useResponderEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useResponderEvents/index.js")),_useLocale=__webpack_require__("./node_modules/react-native-web/dist/modules/useLocale/index.js"),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_TextInputState=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/TextInputState/index.js")),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var setSelection=function setSelection(node,selection){if(function isSelectionStale(node,selection){var selectionEnd=node.selectionEnd,selectionStart=node.selectionStart,start=selection.start,end=selection.end;return start!==selectionStart||end!==selectionEnd}(node,selection)){var start=selection.start,end=selection.end;try{node.setSelectionRange(start,end||start)}catch(e){}}},forwardPropsList=Object.assign({},forwardedProps.defaultProps,forwardedProps.accessibilityProps,forwardedProps.clickProps,forwardedProps.focusProps,forwardedProps.keyboardProps,forwardedProps.mouseProps,forwardedProps.touchProps,forwardedProps.styleProps,{autoCapitalize:!0,autoComplete:!0,autoCorrect:!0,autoFocus:!0,defaultValue:!0,disabled:!0,lang:!0,maxLength:!0,onChange:!0,onScroll:!0,placeholder:!0,pointerEvents:!0,readOnly:!0,rows:!0,spellCheck:!0,value:!0,type:!0});var focusTimeout=null,TextInput=React.forwardRef((function(props,forwardedRef){var type,_inputMode,_props$autoCapitalize=props.autoCapitalize,autoCapitalize=void 0===_props$autoCapitalize?"sentences":_props$autoCapitalize,autoComplete=props.autoComplete,autoCompleteType=props.autoCompleteType,_props$autoCorrect=props.autoCorrect,autoCorrect=void 0===_props$autoCorrect||_props$autoCorrect,blurOnSubmit=props.blurOnSubmit,caretHidden=props.caretHidden,clearTextOnFocus=props.clearTextOnFocus,dir=props.dir,editable=props.editable,enterKeyHint=props.enterKeyHint,inputMode=props.inputMode,keyboardType=props.keyboardType,_props$multiline=props.multiline,multiline=void 0!==_props$multiline&&_props$multiline,numberOfLines=props.numberOfLines,onBlur=props.onBlur,onChange=props.onChange,onChangeText=props.onChangeText,onContentSizeChange=props.onContentSizeChange,onFocus=props.onFocus,onKeyPress=props.onKeyPress,onLayout=props.onLayout,onMoveShouldSetResponder=props.onMoveShouldSetResponder,onMoveShouldSetResponderCapture=props.onMoveShouldSetResponderCapture,onResponderEnd=props.onResponderEnd,onResponderGrant=props.onResponderGrant,onResponderMove=props.onResponderMove,onResponderReject=props.onResponderReject,onResponderRelease=props.onResponderRelease,onResponderStart=props.onResponderStart,onResponderTerminate=props.onResponderTerminate,onResponderTerminationRequest=props.onResponderTerminationRequest,onScrollShouldSetResponder=props.onScrollShouldSetResponder,onScrollShouldSetResponderCapture=props.onScrollShouldSetResponderCapture,onSelectionChange=props.onSelectionChange,onSelectionChangeShouldSetResponder=props.onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture=props.onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder=props.onStartShouldSetResponder,onStartShouldSetResponderCapture=props.onStartShouldSetResponderCapture,onSubmitEditing=props.onSubmitEditing,placeholderTextColor=props.placeholderTextColor,_props$readOnly=props.readOnly,readOnly=void 0!==_props$readOnly&&_props$readOnly,returnKeyType=props.returnKeyType,rows=props.rows,_props$secureTextEntr=props.secureTextEntry,secureTextEntry=void 0!==_props$secureTextEntr&&_props$secureTextEntr,selection=props.selection,selectTextOnFocus=props.selectTextOnFocus,spellCheck=props.spellCheck;if(null!=inputMode)_inputMode=inputMode,type="email"===inputMode?"email":"tel"===inputMode?"tel":"search"===inputMode?"search":"url"===inputMode?"url":"text";else if(null!=keyboardType)switch((0,_warnOnce.warnOnce)("keyboardType","keyboardType is deprecated. Use inputMode."),keyboardType){case"email-address":type="email";break;case"number-pad":case"numeric":_inputMode="numeric";break;case"decimal-pad":_inputMode="decimal";break;case"phone-pad":type="tel";break;case"search":case"web-search":type="search";break;case"url":type="url";break;default:type="text"}secureTextEntry&&(type="password");var dimensions=React.useRef({height:null,width:null}),hostRef=React.useRef(null),prevSelection=React.useRef(null),prevSecureTextEntry=React.useRef(!1);React.useEffect((function(){hostRef.current&&prevSelection.current&&setSelection(hostRef.current,prevSelection.current),prevSecureTextEntry.current=secureTextEntry}),[secureTextEntry]);var handleContentSizeChange=React.useCallback((function(hostNode){if(multiline&&onContentSizeChange&&null!=hostNode){var newHeight=hostNode.scrollHeight,newWidth=hostNode.scrollWidth;newHeight===dimensions.current.height&&newWidth===dimensions.current.width||(dimensions.current.height=newHeight,dimensions.current.width=newWidth,onContentSizeChange({nativeEvent:{contentSize:{height:dimensions.current.height,width:dimensions.current.width}}}))}}),[multiline,onContentSizeChange]),imperativeRef=React.useMemo((function(){return function(hostNode){null!=hostNode&&(hostNode.clear=function(){null!=hostNode&&(hostNode.value="")},hostNode.isFocused=function(){return null!=hostNode&&_TextInputState.default.currentlyFocusedField()===hostNode},handleContentSizeChange(hostNode))}}),[handleContentSizeChange]);(0,_useLayoutEffect.default)((function(){var node=hostRef.current;null!=node&&null!=selection&&setSelection(node,selection),document.activeElement===node&&(_TextInputState.default._currentlyFocusedNode=node)}),[hostRef,selection]);var component=multiline?"textarea":"input";(0,_useElementLayout.default)(hostRef,onLayout),(0,_useResponderEvents.default)(hostRef,{onMoveShouldSetResponder,onMoveShouldSetResponderCapture,onResponderEnd,onResponderGrant,onResponderMove,onResponderReject,onResponderRelease,onResponderStart,onResponderTerminate,onResponderTerminationRequest,onScrollShouldSetResponder,onScrollShouldSetResponderCapture,onSelectionChangeShouldSetResponder,onSelectionChangeShouldSetResponderCapture,onStartShouldSetResponder,onStartShouldSetResponderCapture});var contextDirection=(0,_useLocale.useLocaleContext)().direction,supportedProps=function pickProps(props){return(0,_pick.default)(props,forwardPropsList)}(props);supportedProps.autoCapitalize=autoCapitalize,supportedProps.autoComplete=autoComplete||autoCompleteType||"on",supportedProps.autoCorrect=autoCorrect?"on":"off",supportedProps.dir=void 0!==dir?dir:"auto",null!=returnKeyType&&(0,_warnOnce.warnOnce)("returnKeyType","returnKeyType is deprecated. Use enterKeyHint."),supportedProps.enterKeyHint=enterKeyHint||returnKeyType,supportedProps.inputMode=_inputMode,supportedProps.onBlur=function handleBlur(e){_TextInputState.default._currentlyFocusedNode=null,onBlur&&(e.nativeEvent.text=e.target.value,onBlur(e))},supportedProps.onChange=function handleChange(e){var hostNode=e.target,text=hostNode.value;e.nativeEvent.text=text,handleContentSizeChange(hostNode),onChange&&onChange(e),onChangeText&&onChangeText(text)},supportedProps.onFocus=function handleFocus(e){var hostNode=e.target;onFocus&&(e.nativeEvent.text=hostNode.value,onFocus(e)),null!=hostNode&&(_TextInputState.default._currentlyFocusedNode=hostNode,clearTextOnFocus&&(hostNode.value=""),selectTextOnFocus&&(null!=focusTimeout&&clearTimeout(focusTimeout),focusTimeout=setTimeout((function(){null!=hostNode&&hostNode.select()}),0)))},supportedProps.onKeyDown=function handleKeyDown(e){var hostNode=e.target;e.stopPropagation();var shouldBlurOnSubmit=null==blurOnSubmit?!multiline:blurOnSubmit,nativeEvent=e.nativeEvent,isComposing=function isEventComposing(nativeEvent){return nativeEvent.isComposing||229===nativeEvent.keyCode}(nativeEvent);onKeyPress&&onKeyPress(e),"Enter"!==e.key||e.shiftKey||isComposing||e.isDefaultPrevented()||(!blurOnSubmit&&multiline||!onSubmitEditing||(e.preventDefault(),nativeEvent.text=e.target.value,onSubmitEditing(e)),shouldBlurOnSubmit&&null!=hostNode&&setTimeout((function(){return hostNode.blur()}),0))},supportedProps.onSelect=function handleSelectionChange(e){try{var _e$target=e.target,_selection={start:_e$target.selectionStart,end:_e$target.selectionEnd};onSelectionChange&&(e.nativeEvent.selection=_selection,e.nativeEvent.text=e.target.value,onSelectionChange(e)),prevSecureTextEntry.current===secureTextEntry&&(prevSelection.current=_selection)}catch(e){}},null!=editable&&(0,_warnOnce.warnOnce)("editable","editable is deprecated. Use readOnly."),supportedProps.readOnly=!0===readOnly||!1===editable,null!=numberOfLines&&(0,_warnOnce.warnOnce)("numberOfLines","TextInput numberOfLines is deprecated. Use rows."),supportedProps.rows=multiline?null!=rows?rows:numberOfLines:1,supportedProps.spellCheck=null!=spellCheck?spellCheck:autoCorrect,supportedProps.style=[{"--placeholderTextColor":placeholderTextColor},styles.textinput$raw,styles.placeholder,props.style,caretHidden&&styles.caretHidden],supportedProps.type=multiline?void 0:type;var platformMethodsRef=(0,_usePlatformMethods.default)(supportedProps),setRef=(0,_useMergeRefs.default)(hostRef,platformMethodsRef,imperativeRef,forwardedRef);supportedProps.ref=setRef;var langDirection=null!=props.lang?(0,_useLocale.getLocaleDirection)(props.lang):null,writingDirection=props.dir||langDirection||contextDirection;return(0,_createElement.default)(component,supportedProps,{writingDirection})}));TextInput.displayName="TextInput",TextInput.State=_TextInputState.default;var styles=_StyleSheet.default.create({textinput$raw:{MozAppearance:"textfield",WebkitAppearance:"none",backgroundColor:"transparent",border:"0 solid black",borderRadius:0,boxSizing:"border-box",font:"14px System",margin:0,padding:0,resize:"none"},placeholder:{placeholderTextColor:"var(--placeholderTextColor)"},caretHidden:{caretColor:"transparent"}});exports.default=TextInput},"./node_modules/react-native-web/dist/modules/TextInputState/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _UIManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/UIManager/index.js")),TextInputState={_currentlyFocusedNode:null,currentlyFocusedField:function currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput:function focusTextInput(textFieldNode){null!==textFieldNode&&(this._currentlyFocusedNode=textFieldNode,document.activeElement!==textFieldNode&&_UIManager.default.focus(textFieldNode))},blurTextInput:function blurTextInput(textFieldNode){null!==textFieldNode&&(this._currentlyFocusedNode=null,document.activeElement===textFieldNode&&_UIManager.default.blur(textFieldNode))}};exports.default=TextInputState},"./src/core-components/molecules/otp-verify/otp-verify.component.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.OtpVerify=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_TextInput=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TextInput/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var OtpVerify=exports.OtpVerify=function OtpVerify(_ref){var onVerify=_ref.onVerify,_useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2.default)(_useState,2),otp=_useState2[0],setOtp=_useState2[1],_useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2.default)(_useState3,2),otpIndex=_useState4[0],setOtpIndex=_useState4[1],otpTextInput=(0,_react.useRef)([]);(0,_react.useEffect)((function(){otpTextInput.current[0].focus()}),[]);var inputs=Array(4).fill(0);return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsx)(_View.default,{style:{flexDirection:"row",justifyContent:"space-between",alignSelf:"center",marginVertical:10},children:null==inputs?void 0:inputs.map((function(i,j){return(0,_jsxRuntime.jsx)(_TextInput.default,{style:{width:48,height:48,borderRadius:24,backgroundColor:otpIndex.length>j?"#3F4957":"#000000",textAlign:"center",color:"white",fontSize:20,paddingBottom:0,marginHorizontal:4},keyboardType:"numeric",onChangeText:function onChangeText(v){return function focusNext(index,value){index<otpTextInput.current.length-1&&value&&otpTextInput.current[index+1].focus(),index===otpTextInput.current.length-1&&(otpTextInput.current[index].blur(),onVerify(otp.concat(value).join(""))),""!==value&&setOtpIndex(otpIndex.concat(index)),otp[index]=value,setOtp(otp)}(j,v)},onKeyPress:function onKeyPress(e){return function focusPrevious(key,index){"Backspace"===key&&0!==index&&(otpTextInput.current[index-1].focus(),otpIndex.splice(otpIndex.length-1,1),setOtpIndex(otpIndex))}(e.nativeEvent.key,j)},ref:function ref(r){otpTextInput.current[j]=r}},j.toString())}))})})};try{OtpVerify.displayName="OtpVerify",OtpVerify.__docgenInfo={description:"",displayName:"OtpVerify",props:{onVerify:{defaultValue:null,description:"",name:"onVerify",required:!0,type:{name:"(otp: string) => void",raw:null,value:null}}}}}catch(e){}try{OtpVerify.displayName="OtpVerify",OtpVerify.__docgenInfo={description:"",displayName:"OtpVerify",props:{onVerify:{defaultValue:null,description:"",name:"onVerify",required:!0,type:{name:"(otp: string) => void",raw:null,value:null}}}}}catch(e){}try{OtpVerify.displayName="OtpVerify",OtpVerify.__docgenInfo={description:"",displayName:"OtpVerify",props:{onVerify:{defaultValue:null,description:"",name:"onVerify",required:!0,type:{name:"(otp: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/molecules/otp-verify/otp-verify.component.tsx#OtpVerify"]={docgenInfo:OtpVerify.__docgenInfo,name:"OtpVerify",path:"src/core-components/molecules/otp-verify/otp-verify.component.tsx#OtpVerify"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);