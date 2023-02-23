/*! For license information please see 11c234d0.a153c14c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[726477],{603905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=n.createContext({}),s=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(f.Provider,{value:r},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,f=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(t),y=o,d=l["".concat(f,".").concat(y)]||l[y]||p[y]||c;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=y;var i={};for(var f in r)hasOwnProperty.call(r,f)&&(i[f]=r[f]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},721645:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>f,toc:()=>u});t(827378);var n=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"},i=void 0,f={unversionedId:"reference/config-loader.configschema",id:"reference/config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema",source:"@site/../docs/reference/config-loader.configschema.md",sourceDirName:"reference",slug:"/reference/config-loader.configschema",permalink:"/docs/reference/config-loader.configschema",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config-loader.configschema.md",tags:[],version:"current",frontMatter:{id:"config-loader.configschema",title:"ConfigSchema",description:"API reference for ConfigSchema"}},s={},u=[],l={toc:u};function p(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/config-loader"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/config-loader"))," ",">"," ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/reference/config-loader.configschema"}),(0,n.kt)("inlineCode",{parentName:"a"},"ConfigSchema"))),(0,n.kt)("p",null,"A loaded configuration schema that is ready to process configuration data."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"type ConfigSchema = {\n    process(appConfigs: AppConfig[], options?: ConfigSchemaProcessingOptions): AppConfig[];\n    serialize(): JsonObject;\n};\n")),(0,n.kt)("b",null,"References:")," [AppConfig](/docs/reference/config.appconfig), [ConfigSchemaProcessingOptions](/docs/reference/config-loader.configschemaprocessingoptions), [JsonObject](/docs/reference/types.jsonobject)")}p.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,c){for(var a,i,f=o(e),s=1;s<arguments.length;s++){for(var u in a=Object(arguments[s]))t.call(a,u)&&(f[u]=a[u]);if(r){i=r(a);for(var l=0;l<i.length;l++)n.call(a,i[l])&&(f[i[l]]=a[i[l]])}}return f}},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;var a=60109,i=60110,f=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),a=l("react.provider"),i=l("react.context"),f=l("react.forward_ref"),l("react.suspense"),s=l("react.memo"),u=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}function h(){}function b(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var v=b.prototype=new h;v.constructor=b,n(v,m.prototype),v.isPureReactComponent=!0;var O={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var f=arguments.length-2;if(1===f)c.children=t;else if(1<f){for(var s=Array(f),u=0;u<f;u++)s[u]=arguments[u+2];c.children=s}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===c[n]&&(c[n]=f[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:O.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function _(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case c:f=!0}}if(f)return a=a(f=e),e=""===n?"."+C(f,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(P,"$&/")+"/"),_(a,r,t,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||f&&f.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),r.push(a)),1;if(f=0,n=""===n?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=n+C(i=e[s],s);f+=_(i,r,t,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(i=e.next()).done;)f+=_(i=i.value,r,t,u=n+C(i,s++),a);else if("object"===i)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return f}function E(e,r,t){if(null==e)return e;var n=[],o=0;return _(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function N(){var e=A.current;if(null===e)throw Error(y(321));return e}},827378:(e,r,t)=>{t(541535)}}]);