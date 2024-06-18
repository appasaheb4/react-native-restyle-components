(self.webpackChunkreact_native_restyle_components=self.webpackChunkreact_native_restyle_components||[]).push([[143],{"./src/core-components/molecules/section-list-item/styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _rnResponsiveStyles=__webpack_require__("./node_modules/rn-responsive-styles/lib/index.js"),_Platform=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Platform/index.js"));exports.default=function _default(_ref){var colors=_ref.colors;return(0,_rnResponsiveStyles.CreateResponsiveStyle)({title:{fontWeight:"ios"==_Platform.default.OS?"200":"500",fontSize:18,color:colors.primaryText,fontFamily:"Roboto"},listItemWrapper:{textAlign:"center",paddingVertical:14,borderRadius:10,borderColor:colors.gray8,borderWidth:.8},bottomSeparateView:{height:10,borderBottomColor:colors.gray8,borderBottomWidth:.4},emptyText:{marginVertical:20,borderBottomColor:colors.gray8,borderBottomWidth:.4,paddingBottom:20}})()}},"./node_modules/rn-responsive-styles/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BreakpointsProvider:()=>BreakpointsProvider,CreateResponsiveStyle:()=>createResponsiveStyle,DEVICE_SIZES:()=>DEVICE_SIZES,SSRProvider:()=>SSRProvider,maxSize:()=>maxSize,minSize:()=>minSize,useDeviceSize:()=>useDeviceSize,useSizeRender:()=>useSizeRender});var DEVICE_SIZES,react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/react-native-web/dist/index.js");!function(DEVICE_SIZES){DEVICE_SIZES.EXTRA_SMALL_DEVICE="extrasmall",DEVICE_SIZES.SMALL_DEVICE="small",DEVICE_SIZES.MEDIUM_DEVICE="medium",DEVICE_SIZES.LARGE_DEVICE="large",DEVICE_SIZES.EXTRA_LARGE_DEVICE="extralarge",DEVICE_SIZES.XS="extrasmall",DEVICE_SIZES.SM="small",DEVICE_SIZES.MD="medium",DEVICE_SIZES.LG="large",DEVICE_SIZES.XL="extralarge"}(DEVICE_SIZES||(DEVICE_SIZES={}));const sizeOrder=[DEVICE_SIZES.EXTRA_SMALL_DEVICE,DEVICE_SIZES.SMALL_DEVICE,DEVICE_SIZES.MEDIUM_DEVICE,DEVICE_SIZES.LARGE_DEVICE,DEVICE_SIZES.EXTRA_LARGE_DEVICE];function minSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(sizeIndex).join("+")}function maxSize(size){const sizeIndex=sizeOrder.indexOf(size);return sizeOrder.slice(0,sizeIndex+1).join("+")}const BreakpointsContext=react.createContext([1200,992,768,540]),useBreakpoints=()=>react.useContext(BreakpointsContext);function BreakpointsProvider({children,breakpoints}){return react.createElement(BreakpointsContext.Provider,{value:breakpoints},children)}function useDeviceSize(){const breakpoints=useBreakpoints(),[dims,setDims]=(0,react.useState)((()=>dist.Dimensions.get("window"))),size=(0,react.useCallback)(function deviceSize(breakpoints){return width=>width>breakpoints[0]?DEVICE_SIZES.EXTRA_LARGE_DEVICE:width>breakpoints[1]?DEVICE_SIZES.LARGE_DEVICE:width>breakpoints[2]?DEVICE_SIZES.MEDIUM_DEVICE:width>breakpoints[3]?DEVICE_SIZES.SMALL_DEVICE:DEVICE_SIZES.EXTRA_SMALL_DEVICE}(breakpoints),[breakpoints]);return(0,react.useEffect)((()=>{const listener=dist.Dimensions.addEventListener("change",(function handleChange({window}){setDims((prev=>size(prev.width)===size(window.width)?prev:window))}));return setDims(dist.Dimensions.get("window")),()=>{listener&&listener.remove()}}),[size]),size(dims.width)}function useSizeRender(){const currSize=useDeviceSize(),currSizeIndex=sizeOrder.indexOf(currSize),isSmallerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex<sizeIndex}),[currSize]),isLargerThan=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex>sizeIndex}),[currSize]),isSize=(0,react.useCallback)((size=>{const sizeIndex=sizeOrder.indexOf(size);return currSizeIndex===sizeIndex}),[currSize]);return(0,react.useMemo)((()=>({isSmallerThan,isLargerThan,isSize})),[isSmallerThan,isLargerThan,isSize])}const useIsClient=()=>{const[isClient,setIsClient]=(0,react.useState)("web"!==dist.Platform.OS);return(0,react.useEffect)((()=>{setIsClient(!0)}),[]),isClient};function SSRProvider({placeholder=null,children}){return useIsClient()?react.createElement(react.Fragment,null,children):react.createElement(react.Fragment,null,placeholder)}const buildCustomStyleMap=(styles,size)=>{const styleObj={};return Object.keys(styles).filter((style=>!style.startsWith("$$"))).forEach((key=>{const styleOverrides=Object.keys(styles).filter((style=>style.match(((defaultClass,size)=>{const sanitizedClass=defaultClass.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return new RegExp(`^\\$\\$(.*\\+)?${size}(\\+.*)?\\$\\$_${sanitizedClass}$`)})(key,size))));styleObj[key]=((styles,classNames)=>1===classNames.length?styles[classNames[0]]:classNames.map((className=>styles[className])))(styles,[key,...styleOverrides])})),styleObj};const createResponsiveStyle=function CreateResponsiveStyle(webStyles,styleOverrides){const overrides={};return styleOverrides&&Object.entries(styleOverrides).forEach((([key,value])=>{Object.entries(value).forEach((([className,value2])=>{overrides[`$$${key}$$_${className}`]=value2}))})),function useResponsiveStyle(styles){return()=>{const size=useDeviceSize();return buildCustomStyleMap(styles,size)}}(dist.StyleSheet.create(Object.assign(Object.assign({},webStyles),overrides)))}}}]);