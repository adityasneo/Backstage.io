/*! For license information please see dba8941a.79dd2953.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[637584],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},235051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>s});r(827378);var n=r(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c={id:"plugin-app-backend.routeroptions.staticfallbackhandler",title:"RouterOptions.staticFallbackHandler",description:"API reference for RouterOptions.staticFallbackHandler"},i=void 0,l={unversionedId:"reference/plugin-app-backend.routeroptions.staticfallbackhandler",id:"reference/plugin-app-backend.routeroptions.staticfallbackhandler",title:"RouterOptions.staticFallbackHandler",description:"API reference for RouterOptions.staticFallbackHandler",source:"@site/../docs/reference/plugin-app-backend.routeroptions.staticfallbackhandler.md",sourceDirName:"reference",slug:"/reference/plugin-app-backend.routeroptions.staticfallbackhandler",permalink:"/docs/reference/plugin-app-backend.routeroptions.staticfallbackhandler",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-app-backend.routeroptions.staticfallbackhandler.md",tags:[],version:"current",frontMatter:{id:"plugin-app-backend.routeroptions.staticfallbackhandler",title:"RouterOptions.staticFallbackHandler",description:"API reference for RouterOptions.staticFallbackHandler"}},p={},s=[],u={toc:s};function f(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-app-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-app-backend"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-app-backend.routeroptions"}),(0,n.kt)("inlineCode",{parentName:"a"},"RouterOptions"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-app-backend.routeroptions.staticfallbackhandler"}),(0,n.kt)("inlineCode",{parentName:"a"},"staticFallbackHandler"))),(0,n.kt)("p",null,"A request handler to handle requests for static content that are not present in the app bundle."),(0,n.kt)("p",null,"This can be used to avoid issues with clients on older deployment versions trying to access lazy loaded content that is no longer present. Typically the requests would fall back to a long-term object store where all recently deployed versions of the app are present."),(0,n.kt)("p",null,"Another option is to provide a ",(0,n.kt)("inlineCode",{parentName:"p"},"database")," that will take care of storing the static assets instead."),(0,n.kt)("p",null,"If both ",(0,n.kt)("inlineCode",{parentName:"p"},"database")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"staticFallbackHandler")," are provided, the ",(0,n.kt)("inlineCode",{parentName:"p"},"database")," will attempt to serve static assets first, and if they are not found, the ",(0,n.kt)("inlineCode",{parentName:"p"},"staticFallbackHandler")," will be called."),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"staticFallbackHandler?: express.Handler;\n")))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var c,i,l=a(e),p=1;p<arguments.length;p++){for(var s in c=Object(arguments[p]))r.call(c,s)&&(l[s]=c[s]);if(t){i=t(c);for(var u=0;u<i.length;u++)n.call(c,i[u])&&(l[i[u]]=c[i[u]])}}return l}},541535:(e,t,r)=>{var n=r(862525),a=60103,o=60106;var c=60109,i=60110,l=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),c=u("react.provider"),i=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}function m(){}function k(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||b}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var g=k.prototype=new m;g.constructor=k,n(g,h.prototype),g.isPureReactComponent=!0;var v={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,n)&&!j.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var p=Array(l),s=0;s<l;s++)p[s]=arguments[s+2];o.children=p}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:v.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,n,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return c=c(l=e),e=""===n?"."+S(l,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(_,"$&/")+"/"),C(c,t,r,"",(function(e){return e}))):null!=c&&(P(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(_,"$&/")+"/")+e)),t.push(c)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=n+S(i=e[p],p);l+=C(i,t,r,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(i=e.next()).done;)l+=C(i=i.value,t,r,s=n+S(i,p++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,r){if(null==e)return e;var n=[],a=0;return C(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function F(){var e=E.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);