(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[4873],{"../node_modules/lodash/_unescapeHtmlChar.js":(module,__unused_webpack_exports,__webpack_require__)=>{var unescapeHtmlChar=__webpack_require__("../node_modules/lodash/_basePropertyOf.js")({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});module.exports=unescapeHtmlChar},"../node_modules/lodash/unescape.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("../node_modules/lodash/toString.js"),unescapeHtmlChar=__webpack_require__("../node_modules/lodash/_unescapeHtmlChar.js"),reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g,reHasEscapedHtml=RegExp(reEscapedHtml.source);module.exports=function unescape(string){return(string=toString(string))&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string}},"../plugins/stack-overflow/src/search/StackOverflowSearchResultListItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StackOverflowSearchResultListItem:()=>StackOverflowSearchResultListItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lodash_unescape=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("../node_modules/lodash/unescape.js")),unescape_default=__webpack_require__.n(lodash_unescape),src=__webpack_require__("../packages/core-components/src/index.ts"),ListItem=__webpack_require__("../node_modules/@material-ui/core/esm/ListItem/ListItem.js"),ListItemIcon=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemIcon/ListItemIcon.js"),Box=__webpack_require__("../node_modules/@material-ui/core/esm/Box/Box.js"),ListItemText=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js"),Chip=__webpack_require__("../node_modules/@material-ui/core/esm/Chip/Chip.js"),Divider=__webpack_require__("../node_modules/@material-ui/core/esm/Divider/Divider.js");const StackOverflowSearchResultListItem=props=>{const{location,title,text,answers,tags}=props.result;return(0,jsx_runtime.jsxs)(src.rU,{to:location,children:[(0,jsx_runtime.jsxs)(ListItem.Z,{alignItems:"center",children:[props.icon&&(0,jsx_runtime.jsx)(ListItemIcon.Z,{children:props.icon}),(0,jsx_runtime.jsxs)(Box.Z,{flexWrap:"wrap",children:[(0,jsx_runtime.jsx)(ListItemText.Z,{primaryTypographyProps:{variant:"h6"},primary:unescape_default()(title),secondary:`Author: ${text}`}),(0,jsx_runtime.jsx)(Chip.Z,{label:`Answer(s): ${answers}`,size:"small"}),tags&&tags.map((tag=>(0,jsx_runtime.jsx)(Chip.Z,{label:`Tag: ${tag}`,size:"small"},tag)))]})]}),(0,jsx_runtime.jsx)(Divider.Z,{})]})};try{StackOverflowSearchResultListItem.displayName="StackOverflowSearchResultListItem",StackOverflowSearchResultListItem.__docgenInfo={description:"",displayName:"StackOverflowSearchResultListItem",props:{result:{defaultValue:null,description:"",name:"result",required:!0,type:{name:"any"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"React.ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/stack-overflow/src/search/StackOverflowSearchResultListItem/StackOverflowSearchResultListItem.tsx#StackOverflowSearchResultListItem"]={docgenInfo:StackOverflowSearchResultListItem.__docgenInfo,name:"StackOverflowSearchResultListItem",path:"../plugins/stack-overflow/src/search/StackOverflowSearchResultListItem/StackOverflowSearchResultListItem.tsx#StackOverflowSearchResultListItem"})}catch(__react_docgen_typescript_loader_error){}}}]);