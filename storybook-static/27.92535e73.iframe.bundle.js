/*! For license information please see 27.92535e73.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_native_restyle_components=self.webpackChunkreact_native_restyle_components||[]).push([[27,391],{"./src/core-components/atoms/buttons/buttons.component.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;var _Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_theme=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./src/theme1/index.tsx")),_styles=_interopRequireDefault(__webpack_require__("./src/core-components/atoms/buttons/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=exports.Button=function Button(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,titleStyle=_ref.titleStyle,buttonStyle=_ref.buttonStyle,_ref$isDisabled=_ref.isDisabled,isDisabled=void 0!==_ref$isDisabled&&_ref$isDisabled,_onPress=_ref.onPress,theme=(0,_theme.useTheme)(),styles=(0,_styles.default)(theme);return(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{activeOpacity:isDisabled?1:.7,onPress:function onPress(){return!isDisabled&&_onPress()},disabled:isDisabled,style:[styles.buttonStyle,function buttonStyling(){return Object.assign({},buttonStyle,{opacity:isDisabled?.7:1})}()],children:(0,_jsxRuntime.jsx)(_Text.default,{style:[styles.titleStyle,titleStyle],children:title})})};try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string",raw:null,value:null}},titleStyle:{defaultValue:null,description:"",name:"titleStyle",required:!1,type:{name:"any",raw:null,value:null}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"any",raw:null,value:null}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean",raw:null,value:null}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void",raw:null,value:null}}}}}catch(e){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string",raw:null,value:null}},titleStyle:{defaultValue:null,description:"",name:"titleStyle",required:!1,type:{name:"any",raw:null,value:null}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"any",raw:null,value:null}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean",raw:null,value:null}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void",raw:null,value:null}}}}}catch(e){}try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},titleStyle:{defaultValue:null,description:"",name:"titleStyle",required:!1,type:{name:"any"}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"any"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onPress:{defaultValue:null,description:"",name:"onPress",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/atoms/buttons/buttons.component.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/core-components/atoms/buttons/buttons.component.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/atoms/buttons/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rnResponsiveStyles=__webpack_require__("./node_modules/rn-responsive-styles/lib/index.js");exports.default=function _default(_ref){var colors=_ref.colors;return(0,_rnResponsiveStyles.CreateResponsiveStyle)({buttonStyle:{padding:10,alignItems:"center",justifyContent:"center",height:40,borderRadius:20,backgroundColor:colors.white,shadowColor:colors.black,shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:3.84,elevation:5},titleStyle:{marginHorizontal:40}})()}},"./src/theme1/colors.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.light=exports.dark=void 0;exports.light={primary:"#2C842E",white:"#ffffff",gray1:"#f5f5f5",gray2:"#e8e8e8",gray3:"#d8d8d8",gray4:"#bababa",gray5:"#7b7b7b",gray6:"#52575c",gray7:"#f1f1f1",gray8:"#3f3f3f80",primaryText:"#4a4a4a",green:"#2c842e",swipeBgGreen:"#3e9c40a6",inActiveGreen:"#98cb99",blue:"#0e64d8",inActiveBlue:"#82b3f4",red:"#d0021b",pink:"#ff006e",orange:"#ea6211",gold:"#ffbe0b",teal:"#1db0d6",shadowColor:"#171717",transparentPrimary:"#00000040",toastErrorColor:"#b80017",firstGradientColor:"#fcfdff",secondGradientColor:"#e5f2fe",black:"#000000",warningColor:"#f0ad4e",secondaryColor:"#686868",secondaryBlack:"#222222",gradient2:"rgb(254, 241, 247)"},exports.dark={primary:"#2C842E",white:"#ffffff",gray1:"#f5f5f5",gray2:"#e8e8e8",gray3:"#d8d8d8",gray4:"#bababa",gray5:"#7b7b7b",gray6:"#52575c",gray7:"#f1f1f1",gray8:"#3f3f3f80",primaryText:"#4a4a4a",green:"#2c842e",swipeBgGreen:"#3e9c40a6",inActiveGreen:"#98cb99",blue:"#0e64d8",inActiveBlue:"#82b3f4",red:"#d0021b",pink:"#ff006e",orange:"#ea6211",gold:"#ffbe0b",teal:"#1db0d6",shadowColor:"#171717",transparentPrimary:"#00000040",toastErrorColor:"#b80017",firstGradientColor:"#fcfdff",secondGradientColor:"#e5f2fe",black:"#000000",warningColor:"#f0ad4e",secondaryColor:"#686868",secondaryBlack:"#222222",gradient2:"rgb(254, 241, 247)"}},"./src/theme1/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _exportNames={Colors:!0,Typography:!0};exports.Typography=exports.Colors=void 0;var Colors=_interopRequireWildcard(__webpack_require__("./src/theme1/colors.tsx"));exports.Colors=Colors;var Typography=_interopRequireWildcard(__webpack_require__("./src/theme1/typography.tsx"));exports.Typography=Typography;var _theme=__webpack_require__("./src/theme1/theme.tsx");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}Object.keys(_theme).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||key in exports&&exports[key]===_theme[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _theme[key]}}))}));try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme1/index.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theme1/index.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme1/theme.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTheme=exports.ThemeProvider=exports.ThemeContext=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_useColorScheme=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/useColorScheme/index.js")),_=__webpack_require__("./src/theme1/index.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ThemeContext=exports.ThemeContext=(0,_react.createContext)({isDark:!1,colors:_.Colors.light,typography:_.Typography.light}),ThemeProvider=exports.ThemeProvider=function ThemeProvider(props){var isDark="dark"===(0,_useColorScheme.default)(),defaultTheme={isDark,colors:isDark?_.Colors.dark:_.Colors.light,typography:isDark?_.Typography.dark:_.Typography.light};return(0,_jsxRuntime.jsx)(ThemeContext.Provider,{value:defaultTheme,children:props.children})};exports.useTheme=function useTheme(){return(0,_react.useContext)(ThemeContext)};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme1/theme.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theme1/theme.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme1/typography.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.light=exports.dark=void 0;exports.light={interBold:{fontFamily:"Inter-Bold"},interMedium:{fontFamily:"Inter-Medium"},robotoBold:{fontFamily:"Roboto-Bold"},robotoMedium:{fontFamily:"Roboto-Medium"},robotoRegular:{fontFamily:"Roboto-Regular"}},exports.dark={interBold:{fontFamily:"Inter-Bold"},interMedium:{fontFamily:"Inter-Medium"},robotoBold:{fontFamily:"Roboto-Bold"},robotoMedium:{fontFamily:"Roboto-Medium"},robotoRegular:{fontFamily:"Roboto-Regular"}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/rn-responsive-styles/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreakpointsProvider:()=>BreakpointsProvider,CreateResponsiveStyle:()=>createResponsiveStyle,DEVICE_SIZES:()=>DEVICE_SIZES,SSRProvider:()=>SSRProvider,maxSize:()=>maxSize,minSize:()=>minSize,useDeviceSize:()=>useDeviceSize,useSizeRender:()=>useSizeRender});var DEVICE_SIZES,react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-native-web/dist/index.js");!function(DEVICE_SIZES){DEVICE_SIZES.EXTRA_SMALL_DEVICE="extrasmall",DEVICE_SIZES.SMALL_DEVICE="small",DEVICE_SIZES.MEDIUM_DEVICE="medium",DEVICE_SIZES.LARGE_DEVICE="large",DEVICE_SIZES.EXTRA_LARGE_DEVICE="extralarge",DEVICE_SIZES.XS="extrasmall",DEVICE_SIZES.SM="small",DEVICE_SIZES.MD="medium",DEVICE_SIZES.LG="large",DEVICE_SIZES.XL="extralarge"}(DEVICE_SIZES||(DEVICE_SIZES={}));const sizeOrder=[DEVICE_SIZES.EXTRA_SMALL_DEVICE,DEVICE_SIZES.SMALL_DEVICE,DEVICE_SIZES.MEDIUM_DEVICE,DEVICE_SIZES.LARGE_DEVICE,DEVICE_SIZES.EXTRA_LARGE_DEVICE];function minSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(sizeIndex).join("+")}function maxSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(0,sizeIndex+1).join("+")}const BreakpointsContext=react.createContext([1200,992,768,540]),useBreakpoints=()=>react.useContext(BreakpointsContext);function BreakpointsProvider({children,breakpoints}){return react.createElement(BreakpointsContext.Provider,{value:breakpoints},children)}function useDeviceSize(){const breakpoints=useBreakpoints(),[dims,setDims]=(0,react.useState)((()=>dist.Dimensions.get("window"))),size=(0,react.useCallback)(function deviceSize(breakpoints){return width=>width>breakpoints[0]?DEVICE_SIZES.EXTRA_LARGE_DEVICE:width>breakpoints[1]?DEVICE_SIZES.LARGE_DEVICE:width>breakpoints[2]?DEVICE_SIZES.MEDIUM_DEVICE:width>breakpoints[3]?DEVICE_SIZES.SMALL_DEVICE:DEVICE_SIZES.EXTRA_SMALL_DEVICE}(breakpoints),[breakpoints]);return(0,react.useEffect)((()=>{const listener=dist.Dimensions.addEventListener("change",(function handleChange({window}){setDims((prev=>size(prev.width)===size(window.width)?prev:window))}));return setDims(dist.Dimensions.get("window")),()=>{listener&&listener.remove()}}),[size]),size(dims.width)}function useSizeRender(){const currSize=useDeviceSize(),currSizeIndex=sizeOrder.indexOf(currSize),isSmallerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex<sizeIndex}),[currSize]),isLargerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex>sizeIndex}),[currSize]),isSize=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex===sizeIndex}),[currSize]);return(0,react.useMemo)((()=>({isSmallerThan,isLargerThan,isSize})),[isSmallerThan,isLargerThan,isSize])}const useIsClient=()=>{const[isClient,setIsClient]=(0,react.useState)("web"!==dist.Platform.OS);return(0,react.useEffect)((()=>{setIsClient(!0)}),[]),isClient};function SSRProvider({placeholder=null,children}){return useIsClient()?react.createElement(react.Fragment,null,children):react.createElement(react.Fragment,null,placeholder)}const buildCustomStyleMap=(styles,size)=>{const styleObj={};return Object.keys(styles).filter((style=>!style.startsWith("$$"))).forEach((key=>{const styleOverrides=Object.keys(styles).filter((style=>style.match(((defaultClass,size)=>{const sanitizedClass=defaultClass.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`^\\$\\$(.*\\+)?${size}(\\+.*)?\\$\\$_${sanitizedClass}$`)})(key,size))));styleObj[key]=((styles,classNames)=>1===classNames.length?styles[classNames[0]]:classNames.map((className=>styles[className])))(styles,[key,...styleOverrides])})),styleObj};const createResponsiveStyle=function CreateResponsiveStyle(webStyles,styleOverrides){const overrides={};return styleOverrides&&Object.entries(styleOverrides).forEach((([key,value])=>{Object.entries(value).forEach((([className,value2])=>{overrides[`$$${key}$$_${className}`]=value2}))})),function useResponsiveStyle(styles){return()=>{const size=useDeviceSize();return buildCustomStyleMap(styles,size)}}(dist.StyleSheet.create(Object.assign(Object.assign({},webStyles),overrides)))}}}]);