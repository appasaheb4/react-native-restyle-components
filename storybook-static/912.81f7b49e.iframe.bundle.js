(self.webpackChunkreact_native_restyle_components=self.webpackChunkreact_native_restyle_components||[]).push([[912],{"./node_modules/react-native-web/dist/exports/I18nManager/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default={allowRTL:function allowRTL(){},forceRTL:function forceRTL(){},getConstants:function getConstants(){return{isRTL:!1}}}},"./node_modules/react-native-web/dist/exports/Keyboard/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _dismissKeyboard=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/dismissKeyboard/index.js")),Keyboard={isVisible:function isVisible(){return!1},addListener:function addListener(){return{remove:function remove(){}}},dismiss:function dismiss(){(0,_dismissKeyboard.default)()},removeAllListeners:function removeAllListeners(){},removeListener:function removeListener(){}};exports.default=Keyboard},"./node_modules/react-native-web/dist/exports/Modal/ModalAnimation.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function getAnimationStyle(animationType,visible){return"slide"===animationType?visible?animatedSlideInStyles:animatedSlideOutStyles:"fade"===animationType?visible?animatedFadeInStyles:animatedFadeOutStyles:visible?styles.container:styles.hidden}var styles=_StyleSheet.default.create({container:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999},animatedIn:{animationDuration:"300ms",animationTimingFunction:"ease-in"},animatedOut:{pointerEvents:"none",animationDuration:"300ms",animationTimingFunction:"ease-out"},fadeIn:{opacity:1,animationKeyframes:{"0%":{opacity:0},"100%":{opacity:1}}},fadeOut:{opacity:0,animationKeyframes:{"0%":{opacity:1},"100%":{opacity:0}}},slideIn:{transform:"translateY(0%)",animationKeyframes:{"0%":{transform:"translateY(100%)"},"100%":{transform:"translateY(0%)"}}},slideOut:{transform:"translateY(100%)",animationKeyframes:{"0%":{transform:"translateY(0%)"},"100%":{transform:"translateY(100%)"}}},hidden:{opacity:0}}),animatedSlideInStyles=[styles.container,styles.animatedIn,styles.slideIn],animatedSlideOutStyles=[styles.container,styles.animatedOut,styles.slideOut],animatedFadeInStyles=[styles.container,styles.animatedIn,styles.fadeIn],animatedFadeOutStyles=[styles.container,styles.animatedOut,styles.fadeOut];exports.default=function ModalAnimation(props){var animationType=props.animationType,children=props.children,onDismiss=props.onDismiss,onShow=props.onShow,visible=props.visible,_React$useState=React.useState(!1),isRendering=_React$useState[0],setIsRendering=_React$useState[1],wasVisible=React.useRef(!1),wasRendering=React.useRef(!1),isAnimated=animationType&&"none"!==animationType,animationEndCallback=React.useCallback((function(e){e&&e.currentTarget!==e.target||(visible?onShow&&onShow():setIsRendering(!1))}),[onShow,visible]);return React.useEffect((function(){wasRendering.current&&!isRendering&&onDismiss&&onDismiss(),wasRendering.current=isRendering}),[isRendering,onDismiss]),React.useEffect((function(){visible&&setIsRendering(!0),visible===wasVisible.current||isAnimated||animationEndCallback(),wasVisible.current=visible}),[isAnimated,visible,animationEndCallback]),isRendering||visible?(0,_createElement.default)("div",{style:isRendering?getAnimationStyle(animationType,visible):styles.hidden,onAnimationEnd:animationEndCallback,children}):null}},"./node_modules/react-native-web/dist/exports/Modal/ModalContent.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["active","children","onRequestClose","transparent"],ModalContent=React.forwardRef((function(props,forwardedRef){var active=props.active,children=props.children,onRequestClose=props.onRequestClose,transparent=props.transparent,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);React.useEffect((function(){if(_canUseDom.default){var closeOnEscape=function closeOnEscape(e){active&&"Escape"===e.key&&(e.stopPropagation(),onRequestClose&&onRequestClose())};return document.addEventListener("keyup",closeOnEscape,!1),function(){return document.removeEventListener("keyup",closeOnEscape,!1)}}}),[active,onRequestClose]);var style=React.useMemo((function(){return[styles.modal,transparent?styles.modalTransparent:styles.modalOpaque]}),[transparent]);return React.createElement(_View.default,(0,_extends2.default)({},rest,{"aria-modal":!0,ref:forwardedRef,role:active?"dialog":null,style}),React.createElement(_View.default,{style:styles.container},children))})),styles=_StyleSheet.default.create({modal:{position:"fixed",top:0,right:0,bottom:0,left:0},modalTransparent:{backgroundColor:"transparent"},modalOpaque:{backgroundColor:"white"},container:{top:0,flex:1}});exports.default=ModalContent},"./node_modules/react-native-web/dist/exports/Modal/ModalFocusTrap.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_createElement=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_UIManager=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/UIManager/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var FocusBracket=function FocusBracket(){return(0,_createElement.default)("div",{role:"none",tabIndex:0,style:styles.focusBracket})};function attemptFocus(element){if(!_canUseDom.default)return!1;try{element.focus()}catch(e){}return document.activeElement===element}function focusFirstDescendant(element){for(var i=0;i<element.childNodes.length;i++){var child=element.childNodes[i];if(attemptFocus(child)||focusFirstDescendant(child))return!0}return!1}function focusLastDescendant(element){for(var i=element.childNodes.length-1;i>=0;i--){var child=element.childNodes[i];if(attemptFocus(child)||focusLastDescendant(child))return!0}return!1}exports.default=function ModalFocusTrap(_ref){var active=_ref.active,children=_ref.children,trapElementRef=React.useRef(),focusRef=React.useRef({trapFocusInProgress:!1,lastFocusedElement:null});return React.useEffect((function(){if(_canUseDom.default){var trapFocus=function trapFocus(){if(null!=trapElementRef.current&&!focusRef.current.trapFocusInProgress&&active){try{if(focusRef.current.trapFocusInProgress=!0,document.activeElement instanceof Node&&!trapElementRef.current.contains(document.activeElement)){var hasFocused=focusFirstDescendant(trapElementRef.current);focusRef.current.lastFocusedElement===document.activeElement&&(hasFocused=focusLastDescendant(trapElementRef.current)),!hasFocused&&null!=trapElementRef.current&&document.activeElement&&_UIManager.default.focus(trapElementRef.current)}}finally{focusRef.current.trapFocusInProgress=!1}focusRef.current.lastFocusedElement=document.activeElement}};return trapFocus(),document.addEventListener("focus",trapFocus,!0),function(){return document.removeEventListener("focus",trapFocus,!0)}}}),[active]),React.useEffect((function(){if(_canUseDom.default){var lastFocusedElementOutsideTrap=document.activeElement;return function(){lastFocusedElementOutsideTrap&&document.contains(lastFocusedElementOutsideTrap)&&_UIManager.default.focus(lastFocusedElementOutsideTrap)}}}),[]),React.createElement(React.Fragment,null,React.createElement(FocusBracket,null),React.createElement(_View.default,{ref:trapElementRef},children),React.createElement(FocusBracket,null))};var styles=_StyleSheet.default.create({focusBracket:{outlineStyle:"none"}})},"./node_modules/react-native-web/dist/exports/Modal/ModalPortal.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_reactDom=_interopRequireDefault(__webpack_require__("../../../../node_modules/react-dom/index.js")),_canUseDom=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/canUseDom/index.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}exports.default=function ModalPortal(props){var children=props.children,elementRef=React.useRef(null);if(_canUseDom.default&&!elementRef.current){var element=document.createElement("div");element&&document.body&&(document.body.appendChild(element),elementRef.current=element)}return React.useEffect((function(){if(_canUseDom.default)return function(){document.body&&elementRef.current&&(document.body.removeChild(elementRef.current),elementRef.current=null)}}),[]),elementRef.current&&_canUseDom.default?_reactDom.default.createPortal(children,elementRef.current):null}},"./node_modules/react-native-web/dist/exports/Modal/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js")),_objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js")),React=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_ModalPortal=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalPortal.js")),_ModalAnimation=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalAnimation.js")),_ModalContent=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalContent.js")),_ModalFocusTrap=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Modal/ModalFocusTrap.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var _excluded=["animationType","children","onDismiss","onRequestClose","onShow","transparent","visible"],uniqueModalIdentifier=0,activeModalStack=[],activeModalListeners={};function notifyActiveModalListeners(){if(0!==activeModalStack.length){var activeModalId=activeModalStack[activeModalStack.length-1];activeModalStack.forEach((function(modalId){modalId in activeModalListeners&&activeModalListeners[modalId](modalId===activeModalId)}))}}function removeActiveModal(modalId){modalId in activeModalListeners&&(activeModalListeners[modalId](!1),delete activeModalListeners[modalId]);var index=activeModalStack.indexOf(modalId);-1!==index&&(activeModalStack.splice(index,1),notifyActiveModalListeners())}var Modal=React.forwardRef((function(props,forwardedRef){var animationType=props.animationType,children=props.children,onDismiss=props.onDismiss,onRequestClose=props.onRequestClose,onShow=props.onShow,transparent=props.transparent,_props$visible=props.visible,visible=void 0===_props$visible||_props$visible,rest=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded),modalId=React.useMemo((function(){return uniqueModalIdentifier++}),[]),_React$useState=React.useState(!1),isActive=_React$useState[0],setIsActive=_React$useState[1],onDismissCallback=React.useCallback((function(){removeActiveModal(modalId),onDismiss&&onDismiss()}),[modalId,onDismiss]),onShowCallback=React.useCallback((function(){!function addActiveModal(modalId,listener){removeActiveModal(modalId),activeModalStack.push(modalId),activeModalListeners[modalId]=listener,notifyActiveModalListeners()}(modalId,setIsActive),onShow&&onShow()}),[modalId,onShow]);return React.useEffect((function(){return function(){return removeActiveModal(modalId)}}),[modalId]),React.createElement(_ModalPortal.default,null,React.createElement(_ModalAnimation.default,{animationType,onDismiss:onDismissCallback,onShow:onShowCallback,visible},React.createElement(_ModalFocusTrap.default,{active:isActive},React.createElement(_ModalContent.default,(0,_extends2.default)({},rest,{active:isActive,onRequestClose,ref:forwardedRef,transparent}),children))))}));exports.default=Modal},"./node_modules/react-native-web/dist/exports/PixelRatio/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js")),_createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js"));exports.default=function(){function PixelRatio(){(0,_classCallCheck2.default)(this,PixelRatio)}return(0,_createClass2.default)(PixelRatio,null,[{key:"get",value:function get(){return _Dimensions.default.get("window").scale}},{key:"getFontScale",value:function getFontScale(){return _Dimensions.default.get("window").fontScale||PixelRatio.get()}},{key:"getPixelSizeForLayoutSize",value:function getPixelSizeForLayoutSize(layoutSize){return Math.round(layoutSize*PixelRatio.get())}},{key:"roundToNearestPixel",value:function roundToNearestPixel(layoutSize){var ratio=PixelRatio.get();return Math.round(layoutSize*ratio)/ratio}}])}()},"./node_modules/react-native-web/dist/exports/StatusBar/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var emptyFunction=function emptyFunction(){};function StatusBar(){return null}StatusBar.setBackgroundColor=emptyFunction,StatusBar.setBarStyle=emptyFunction,StatusBar.setHidden=emptyFunction,StatusBar.setNetworkActivityIndicatorVisible=emptyFunction,StatusBar.setTranslucent=emptyFunction;exports.default=StatusBar},"./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),React=_react,_pick=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/pick/index.js")),_useMergeRefs=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/useMergeRefs/index.js")),_usePressEvents=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/modules/usePressEvents/index.js")),_warnOnce=__webpack_require__("./node_modules/react-native-web/dist/modules/warnOnce/index.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var forwardPropsList={accessibilityDisabled:!0,accessibilityLabel:!0,accessibilityLiveRegion:!0,accessibilityRole:!0,accessibilityState:!0,accessibilityValue:!0,children:!0,disabled:!0,focusable:!0,nativeID:!0,onBlur:!0,onFocus:!0,onLayout:!0,testID:!0};var MemoedTouchableWithoutFeedback=React.memo(React.forwardRef((function TouchableWithoutFeedback(props,forwardedRef){(0,_warnOnce.warnOnce)("TouchableWithoutFeedback","TouchableWithoutFeedback is deprecated. Please use Pressable.");var delayPressIn=props.delayPressIn,delayPressOut=props.delayPressOut,delayLongPress=props.delayLongPress,disabled=props.disabled,focusable=props.focusable,onLongPress=props.onLongPress,onPress=props.onPress,onPressIn=props.onPressIn,onPressOut=props.onPressOut,rejectResponderTermination=props.rejectResponderTermination,hostRef=(0,_react.useRef)(null),pressConfig=(0,_react.useMemo)((function(){return{cancelable:!rejectResponderTermination,disabled,delayLongPress,delayPressStart:delayPressIn,delayPressEnd:delayPressOut,onLongPress,onPress,onPressStart:onPressIn,onPressEnd:onPressOut}}),[disabled,delayPressIn,delayPressOut,delayLongPress,onLongPress,onPress,onPressIn,onPressOut,rejectResponderTermination]),pressEventHandlers=(0,_usePressEvents.default)(hostRef,pressConfig),element=React.Children.only(props.children),children=[element.props.children],supportedProps=function pickProps(props){return(0,_pick.default)(props,forwardPropsList)}(props);supportedProps.accessibilityDisabled=disabled,supportedProps.focusable=!disabled&&!1!==focusable,supportedProps.ref=(0,_useMergeRefs.default)(forwardedRef,hostRef,element.ref);var elementProps=Object.assign(supportedProps,pressEventHandlers);return React.cloneElement.apply(React,[element,elementProps].concat(children))})));MemoedTouchableWithoutFeedback.displayName="TouchableWithoutFeedback";exports.default=MemoedTouchableWithoutFeedback}}]);