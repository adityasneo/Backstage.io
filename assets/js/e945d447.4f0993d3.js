/*! For license information please see e945d447.4f0993d3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[82388],{603905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(667294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,h=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(h,i(i({ref:r},s),{},{components:t})):n.createElement(h,i({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},116640:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});t(827378);var n=t(603905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"plugin-auth-backend.oauthenvironmenthandler.refresh",title:"OAuthEnvironmentHandler.refresh()",description:"API reference for OAuthEnvironmentHandler.refresh()"},u=void 0,l={unversionedId:"reference/plugin-auth-backend.oauthenvironmenthandler.refresh",id:"reference/plugin-auth-backend.oauthenvironmenthandler.refresh",title:"OAuthEnvironmentHandler.refresh()",description:"API reference for OAuthEnvironmentHandler.refresh()",source:"@site/../docs/reference/plugin-auth-backend.oauthenvironmenthandler.refresh.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.oauthenvironmenthandler.refresh",permalink:"/docs/reference/plugin-auth-backend.oauthenvironmenthandler.refresh",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.oauthenvironmenthandler.refresh.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.oauthenvironmenthandler.refresh",title:"OAuthEnvironmentHandler.refresh()",description:"API reference for OAuthEnvironmentHandler.refresh()"}},c={},s=[{value:"Parameters",id:"parameters",level:2}],p={toc:s};function f(e){var{components:r}=e,t=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-auth-backend"}),(0,n.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-auth-backend"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-auth-backend.oauthenvironmenthandler"}),(0,n.kt)("inlineCode",{parentName:"a"},"OAuthEnvironmentHandler"))," ",">"," ",(0,n.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-auth-backend.oauthenvironmenthandler.refresh"}),(0,n.kt)("inlineCode",{parentName:"a"},"refresh"))),(0,n.kt)("b",null,"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"refresh(req: express.Request, res: express.Response): Promise<void>;\n")),(0,n.kt)("h2",a({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Parameter"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"req"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"express.Request"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"res"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"express.Response"),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("b",null,"Returns:"),(0,n.kt)("p",null,"Promise","<","void",">"))}f.isMDXComponent=!0},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,u,l=a(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))t.call(i,s)&&(l[s]=i[s]);if(r){u=r(i);for(var p=0;p<u.length;p++)n.call(i,u[p])&&(l[u[p]]=i[u[p]])}}return l}},541535:(e,r,t)=>{var n=t(862525),a=60103,o=60106;var i=60109,u=60110,l=60112;var c=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),u=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}function b(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var g=v.prototype=new b;g.constructor=v,n(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},i=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(i=""+r.key),r)O.call(r,n)&&!j.hasOwnProperty(n)&&(o[n]=r[n]);var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:k.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function _(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function E(e,r,t,n,i){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var l=!1;if(null===e)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===n?"."+_(l,0):n,Array.isArray(i)?(t="",null!=e&&(t=e.replace(N,"$&/")+"/"),E(i,r,t,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),r.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var s=n+_(u=e[c],c);l+=E(u,r,t,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),c=0;!(u=e.next()).done;)l+=E(u=u.value,r,t,s=n+_(u,c++),i);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return l}function S(e,r,t){if(null==e)return e;var n=[],a=0;return E(e,n,"","",(function(e){return r.call(t,e,a++)})),n}function x(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(d(321));return e}},827378:(e,r,t)=>{t(541535)}}]);