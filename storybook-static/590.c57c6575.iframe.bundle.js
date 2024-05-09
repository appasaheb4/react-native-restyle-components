(self.webpackChunkreact_native_restyle_components=self.webpackChunkreact_native_restyle_components||[]).push([[590,143],{"./src/core-components/molecules/section-list-item/section-list-item.component.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionListItem=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_FlatList=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/FlatList/index.js")),_TouchableOpacity=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js")),_SectionList=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/SectionList/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_lodash=_interopRequireDefault(__webpack_require__("./node_modules/lodash/lodash.js")),_theme=__webpack_require__("./src/theme1/index.tsx"),_styles=_interopRequireDefault(__webpack_require__("./src/core-components/molecules/section-list-item/styles.ts")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var SectionListItem=exports.SectionListItem=function SectionListItem(_ref){var _ref$data=_ref.data,data=void 0===_ref$data?[]:_ref$data,onChange=_ref.onChange,theme=(0,_theme.useTheme)(),styles=(0,_styles.default)(theme),_useState=(0,_react.useState)([]),_useState2=(0,_slicedToArray2.default)(_useState,2),section=_useState2[0],setSection=_useState2[1];(0,_react.useEffect)((function(){console.log({data}),setSection(data)}),[data]);var screenWidth=_Dimensions.default.get("window").width-_Dimensions.default.get("window").width/4,itemSize=(screenWidth-20)/3,lastItem=_react.default.useMemo((function(){var last=section[section.length-1];return!_lodash.default.isEmpty(last)&&last}),[section]),renderSection=function renderSection(sectionItem,_ref2){var list=_ref2.list;return(0,_jsxRuntime.jsx)(_View.default,{children:(null==list?void 0:list.length)>0?(0,_jsxRuntime.jsx)(_FlatList.default,{data:list,numColumns:3,style:{marginBottom:(null==lastItem?void 0:lastItem.title)==(null==sectionItem?void 0:sectionItem.title)?40:0},contentContainerStyle:{gap:10},columnWrapperStyle:{gap:10,marginBottom:10},renderItem:function renderItem(_ref3){var item=_ref3.item;_ref3.index;return(0,_jsxRuntime.jsx)(_TouchableOpacity.default,{style:[styles.listItemWrapper,{backgroundColor:null!=item&&item.selected?theme.colors.orange:theme.colors.white,width:itemSize}],onPress:function onPress(){var list=section.map((function(o){var _o$data;if(o.title==sectionItem.title){var _o$data$,_o$data$$list,info=o;return info.data[0]=Object.assign({},info.data[0],{list:null==(_o$data$=o.data[0])||null==(_o$data$$list=_o$data$.list)?void 0:_o$data$$list.map((function(e){return e.title==item.title?Object.assign({},e,{selected:!0}):Object.assign({},e,{selected:!1})}))}),info}return Object.assign({},o,{data:null==(_o$data=o.data)?void 0:_o$data.map((function(io){var _io$list;return Object.assign({},io,{list:null==(_io$list=io.list)?void 0:_io$list.map((function(il){return Object.assign({},il,{selected:!1})}))})}))})})),selectedItem=list.map((function(item){var _item$data$,_item$data$$list,_item$data$2,_item$data$2$list;if(null!=(_item$data$=item.data[0])&&null!=(_item$data$$list=_item$data$.list)&&_item$data$$list.find((function(inItem){return inItem.selected})))return Object.assign({},item,{data:Object.assign({},item.data[0],{list:null==(_item$data$2=item.data[0])||null==(_item$data$2$list=_item$data$2.list)?void 0:_item$data$2$list.find((function(inItem){return inItem.selected}))})})}));selectedItem=_lodash.default.without(selectedItem,void 0),onChange(selectedItem[0]),setSection(list)},children:(0,_jsxRuntime.jsx)(_Text.default,{style:{textAlign:"center"},children:null==item?void 0:item.title})})},ListFooterComponent:function ListFooterComponent(){return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:(0,_jsxRuntime.jsx)(_View.default,{style:styles.bottomSeparateView})})},keyExtractor:function keyExtractor(item){return`basicListEntry-${item}`}}):(0,_jsxRuntime.jsx)(_Text.default,{style:styles.emptyText,children:"No Availability"})})};return(0,_jsxRuntime.jsx)(_View.default,{children:(0,_jsxRuntime.jsx)(_SectionList.default,{sections:section,renderItem:function renderItem(_ref4){var section=_ref4.section,item=_ref4.item;return renderSection(section,item)},renderSectionHeader:function renderSectionHeader(_ref5){var section=_ref5.section;return(0,_jsxRuntime.jsx)(_Text.default,{style:styles.title,children:section.title})},keyExtractor:function keyExtractor(item){return`time-${null==item?void 0:item.key}`}})})};try{SectionListItem.displayName="SectionListItem",SectionListItem.__docgenInfo={description:"",displayName:"SectionListItem",props:{data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: any) => void",raw:null,value:null}}}}}catch(e){}try{SectionListItem.displayName="SectionListItem",SectionListItem.__docgenInfo={description:"",displayName:"SectionListItem",props:{data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]",raw:null,value:null}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: any) => void",raw:null,value:null}}}}}catch(e){}try{SectionListItem.displayName="SectionListItem",SectionListItem.__docgenInfo={description:"",displayName:"SectionListItem",props:{data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"any[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(item: any) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/core-components/molecules/section-list-item/section-list-item.component.tsx#SectionListItem"]={docgenInfo:SectionListItem.__docgenInfo,name:"SectionListItem",path:"src/core-components/molecules/section-list-item/section-list-item.component.tsx#SectionListItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/core-components/molecules/section-list-item/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rnResponsiveStyles=__webpack_require__("./node_modules/rn-responsive-styles/lib/index.js");exports.default=function _default(_ref){var colors=_ref.colors;return(0,_rnResponsiveStyles.CreateResponsiveStyle)({title:{fontWeight:"bold",fontSize:16,color:colors.primaryText,marginVertical:6},listItemWrapper:{marginHorizontal:6,padding:14,borderRadius:10,borderColor:colors.gray8,borderWidth:.8},bottomSeparateView:{height:10,borderBottomColor:colors.gray8,borderBottomWidth:.4},emptyText:{marginVertical:20,borderBottomColor:colors.gray8,borderBottomWidth:.4,paddingBottom:20}})()}},"./src/theme1/colors.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.light=exports.dark=void 0;exports.light={primary:"#2C842E",white:"#ffffff",gray1:"#f5f5f5",gray2:"#e8e8e8",gray3:"#d8d8d8",gray4:"#bababa",gray5:"#7b7b7b",gray6:"#52575c",gray7:"#f1f1f1",gray8:"#3f3f3f80",primaryText:"#4a4a4a",green:"#2c842e",swipeBgGreen:"#3e9c40a6",inActiveGreen:"#98cb99",blue:"#0e64d8",inActiveBlue:"#82b3f4",red:"#d0021b",pink:"#ff006e",orange:"#ea6211",gold:"#ffbe0b",teal:"#1db0d6",shadowColor:"#171717",transparentPrimary:"#00000040",toastErrorColor:"#b80017",firstGradientColor:"#fcfdff",secondGradientColor:"#e5f2fe",black:"#000000",warningColor:"#f0ad4e",secondaryColor:"#686868",secondaryBlack:"#222222",gradient2:"rgb(254, 241, 247)"},exports.dark={primary:"#2C842E",white:"#ffffff",gray1:"#f5f5f5",gray2:"#e8e8e8",gray3:"#d8d8d8",gray4:"#bababa",gray5:"#7b7b7b",gray6:"#52575c",gray7:"#f1f1f1",gray8:"#3f3f3f80",primaryText:"#4a4a4a",green:"#2c842e",swipeBgGreen:"#3e9c40a6",inActiveGreen:"#98cb99",blue:"#0e64d8",inActiveBlue:"#82b3f4",red:"#d0021b",pink:"#ff006e",orange:"#ea6211",gold:"#ffbe0b",teal:"#1db0d6",shadowColor:"#171717",transparentPrimary:"#00000040",toastErrorColor:"#b80017",firstGradientColor:"#fcfdff",secondGradientColor:"#e5f2fe",black:"#000000",warningColor:"#f0ad4e",secondaryColor:"#686868",secondaryBlack:"#222222",gradient2:"rgb(254, 241, 247)"}},"./src/theme1/index.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});var _exportNames={Colors:!0,Typography:!0};exports.Typography=exports.Colors=void 0;var Colors=_interopRequireWildcard(__webpack_require__("./src/theme1/colors.tsx"));exports.Colors=Colors;var Typography=_interopRequireWildcard(__webpack_require__("./src/theme1/typography.tsx"));exports.Typography=Typography;var _theme=__webpack_require__("./src/theme1/theme.tsx");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}Object.keys(_theme).forEach((function(key){"default"!==key&&"__esModule"!==key&&(Object.prototype.hasOwnProperty.call(_exportNames,key)||key in exports&&exports[key]===_theme[key]||Object.defineProperty(exports,key,{enumerable:!0,get:function get(){return _theme[key]}}))}));try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme1/index.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theme1/index.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme1/theme.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTheme=exports.ThemeProvider=exports.ThemeContext=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_useColorScheme=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/useColorScheme/index.js")),_=__webpack_require__("./src/theme1/index.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var ThemeContext=exports.ThemeContext=(0,_react.createContext)({isDark:!1,colors:_.Colors.light,typography:_.Typography.light}),ThemeProvider=exports.ThemeProvider=function ThemeProvider(props){var isDark="dark"===(0,_useColorScheme.default)(),defaultTheme={isDark,colors:isDark?_.Colors.dark:_.Colors.light,typography:isDark?_.Typography.dark:_.Typography.light};return(0,_jsxRuntime.jsx)(ThemeContext.Provider,{value:defaultTheme,children:props.children})};exports.useTheme=function useTheme(){return(0,_react.useContext)(ThemeContext)};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}}}catch(e){}try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme1/theme.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/theme1/theme.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/theme1/typography.tsx":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.light=exports.dark=void 0;exports.light={interBold:{fontFamily:"Inter-Bold"},interMedium:{fontFamily:"Inter-Medium"},robotoBold:{fontFamily:"Roboto-Bold"},robotoMedium:{fontFamily:"Roboto-Medium"},robotoRegular:{fontFamily:"Roboto-Regular"}},exports.dark={interBold:{fontFamily:"Inter-Bold"},interMedium:{fontFamily:"Inter-Medium"},robotoBold:{fontFamily:"Roboto-Bold"},robotoMedium:{fontFamily:"Roboto-Medium"},robotoRegular:{fontFamily:"Roboto-Regular"}}},"./node_modules/rn-responsive-styles/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreakpointsProvider:()=>BreakpointsProvider,CreateResponsiveStyle:()=>createResponsiveStyle,DEVICE_SIZES:()=>DEVICE_SIZES,SSRProvider:()=>SSRProvider,maxSize:()=>maxSize,minSize:()=>minSize,useDeviceSize:()=>useDeviceSize,useSizeRender:()=>useSizeRender});var DEVICE_SIZES,react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-native-web/dist/index.js");!function(DEVICE_SIZES){DEVICE_SIZES.EXTRA_SMALL_DEVICE="extrasmall",DEVICE_SIZES.SMALL_DEVICE="small",DEVICE_SIZES.MEDIUM_DEVICE="medium",DEVICE_SIZES.LARGE_DEVICE="large",DEVICE_SIZES.EXTRA_LARGE_DEVICE="extralarge",DEVICE_SIZES.XS="extrasmall",DEVICE_SIZES.SM="small",DEVICE_SIZES.MD="medium",DEVICE_SIZES.LG="large",DEVICE_SIZES.XL="extralarge"}(DEVICE_SIZES||(DEVICE_SIZES={}));const sizeOrder=[DEVICE_SIZES.EXTRA_SMALL_DEVICE,DEVICE_SIZES.SMALL_DEVICE,DEVICE_SIZES.MEDIUM_DEVICE,DEVICE_SIZES.LARGE_DEVICE,DEVICE_SIZES.EXTRA_LARGE_DEVICE];function minSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(sizeIndex).join("+")}function maxSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(0,sizeIndex+1).join("+")}const BreakpointsContext=react.createContext([1200,992,768,540]),useBreakpoints=()=>react.useContext(BreakpointsContext);function BreakpointsProvider({children,breakpoints}){return react.createElement(BreakpointsContext.Provider,{value:breakpoints},children)}function useDeviceSize(){const breakpoints=useBreakpoints(),[dims,setDims]=(0,react.useState)((()=>dist.Dimensions.get("window"))),size=(0,react.useCallback)(function deviceSize(breakpoints){return width=>width>breakpoints[0]?DEVICE_SIZES.EXTRA_LARGE_DEVICE:width>breakpoints[1]?DEVICE_SIZES.LARGE_DEVICE:width>breakpoints[2]?DEVICE_SIZES.MEDIUM_DEVICE:width>breakpoints[3]?DEVICE_SIZES.SMALL_DEVICE:DEVICE_SIZES.EXTRA_SMALL_DEVICE}(breakpoints),[breakpoints]);return(0,react.useEffect)((()=>{const listener=dist.Dimensions.addEventListener("change",(function handleChange({window}){setDims((prev=>size(prev.width)===size(window.width)?prev:window))}));return setDims(dist.Dimensions.get("window")),()=>{listener&&listener.remove()}}),[size]),size(dims.width)}function useSizeRender(){const currSize=useDeviceSize(),currSizeIndex=sizeOrder.indexOf(currSize),isSmallerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex<sizeIndex}),[currSize]),isLargerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex>sizeIndex}),[currSize]),isSize=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex===sizeIndex}),[currSize]);return(0,react.useMemo)((()=>({isSmallerThan,isLargerThan,isSize})),[isSmallerThan,isLargerThan,isSize])}const useIsClient=()=>{const[isClient,setIsClient]=(0,react.useState)("web"!==dist.Platform.OS);return(0,react.useEffect)((()=>{setIsClient(!0)}),[]),isClient};function SSRProvider({placeholder=null,children}){return useIsClient()?react.createElement(react.Fragment,null,children):react.createElement(react.Fragment,null,placeholder)}const buildCustomStyleMap=(styles,size)=>{const styleObj={};return Object.keys(styles).filter((style=>!style.startsWith("$$"))).forEach((key=>{const styleOverrides=Object.keys(styles).filter((style=>style.match(((defaultClass,size)=>{const sanitizedClass=defaultClass.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`^\\$\\$(.*\\+)?${size}(\\+.*)?\\$\\$_${sanitizedClass}$`)})(key,size))));styleObj[key]=((styles,classNames)=>1===classNames.length?styles[classNames[0]]:classNames.map((className=>styles[className])))(styles,[key,...styleOverrides])})),styleObj};const createResponsiveStyle=function CreateResponsiveStyle(webStyles,styleOverrides){const overrides={};return styleOverrides&&Object.entries(styleOverrides).forEach((([key,value])=>{Object.entries(value).forEach((([className,value2])=>{overrides[`$$${key}$$_${className}`]=value2}))})),function useResponsiveStyle(styles){return()=>{const size=useDeviceSize();return buildCustomStyleMap(styles,size)}}(dist.StyleSheet.create(Object.assign(Object.assign({},webStyles),overrides)))}}}]);