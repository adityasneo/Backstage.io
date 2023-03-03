/*! For license information please see 27d5900c.ffbcaaf5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[43951],{603905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var a=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=u(r),g=n,m=s["".concat(p,".").concat(g)]||s[g]||l[g]||i;return r?a.createElement(m,o(o({ref:t},f),{},{components:r})):a.createElement(m,o({ref:t},f))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},716525:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>f});r(827378);var a=r(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const o={id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"},c=void 0,p={unversionedId:"reference/integration-react.scmauth.createdefaultapifactory",id:"reference/integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()",source:"@site/../docs/reference/integration-react.scmauth.createdefaultapifactory.md",sourceDirName:"reference",slug:"/reference/integration-react.scmauth.createdefaultapifactory",permalink:"/docs/reference/integration-react.scmauth.createdefaultapifactory",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/integration-react.scmauth.createdefaultapifactory.md",tags:[],version:"current",frontMatter:{id:"integration-react.scmauth.createdefaultapifactory",title:"ScmAuth.createDefaultApiFactory()",description:"API reference for ScmAuth.createDefaultApiFactory()"}},u={},f=[],s={toc:f};function l(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",n({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/integration-react"}),(0,a.kt)("inlineCode",{parentName:"a"},"@backstage/integration-react"))," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/integration-react.scmauth"}),(0,a.kt)("inlineCode",{parentName:"a"},"ScmAuth"))," ",">"," ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/integration-react.scmauth.createdefaultapifactory"}),(0,a.kt)("inlineCode",{parentName:"a"},"createDefaultApiFactory"))),(0,a.kt)("p",null,"Creates an API factory that enables auth for each of the default SCM providers."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),'static createDefaultApiFactory(): import("@backstage/core-plugin-api").ApiFactory<ScmAuthApi, ScmAuthApi, {\n        github: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        gitlab: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        azure: OAuthApi & import("@backstage/core-plugin-api").OpenIdConnectApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n        bitbucket: OAuthApi & import("@backstage/core-plugin-api").ProfileInfoApi & import("@backstage/core-plugin-api").BackstageIdentityApi & import("@backstage/core-plugin-api").SessionApi;\n    }>;\n')),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,'import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.apifactory"}),"ApiFactory"),"<",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/integration-react.scmauthapi"}),"ScmAuthApi"),", ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/integration-react.scmauthapi"}),"ScmAuthApi"),", { github: ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.oauthapi"}),"OAuthApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.profileinfoapi"}),"ProfileInfoApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.backstageidentityapi"}),"BackstageIdentityApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.sessionapi"}),"SessionApi"),"; gitlab: ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.oauthapi"}),"OAuthApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.profileinfoapi"}),"ProfileInfoApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.backstageidentityapi"}),"BackstageIdentityApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.sessionapi"}),"SessionApi"),"; azure: ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.oauthapi"}),"OAuthApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.openidconnectapi"}),"OpenIdConnectApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.profileinfoapi"}),"ProfileInfoApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.backstageidentityapi"}),"BackstageIdentityApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.sessionapi"}),"SessionApi"),"; bitbucket: ",(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.oauthapi"}),"OAuthApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.profileinfoapi"}),"ProfileInfoApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.backstageidentityapi"}),"BackstageIdentityApi")," ","&",' import("@backstage/core-plugin-api").',(0,a.kt)("a",n({parentName:"p"},{href:"/docs/reference/core-plugin-api.sessionapi"}),"SessionApi"),"; }",">"))}l.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,i){for(var o,c,p=n(e),u=1;u<arguments.length;u++){for(var f in o=Object(arguments[u]))r.call(o,f)&&(p[f]=o[f]);if(t){c=t(o);for(var s=0;s<c.length;s++)a.call(o,c[s])&&(p[c[s]]=o[c[s]])}}return p}},541535:(e,t,r)=>{var a=r(862525),n=60103,i=60106;var o=60109,c=60110,p=60112;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),i=s("react.portal"),s("react.fragment"),s("react.strict_mode"),s("react.profiler"),o=s("react.provider"),c=s("react.context"),p=s("react.forward_ref"),s("react.suspense"),u=s("react.memo"),f=s("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function d(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}d.prototype.isReactComponent={},d.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=d.prototype;var k=b.prototype=new h;k.constructor=b,a(k,d.prototype),k.isPureReactComponent=!0;var A={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var a,i={},o=null,c=null;if(null!=t)for(a in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,a)&&!O.hasOwnProperty(a)&&(i[a]=t[a]);var p=arguments.length-2;if(1===p)i.children=r;else if(1<p){for(var u=Array(p),f=0;f<p;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===i[a]&&(i[a]=p[a]);return{$$typeof:n,type:e,key:o,ref:c,props:i,_owner:A.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var w=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,r,a,o){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var p=!1;if(null===e)p=!0;else switch(c){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case n:case i:p=!0}}if(p)return o=o(p=e),e=""===a?"."+P(p,0):a,Array.isArray(o)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),N(o,t,r,"",(function(e){return e}))):null!=o&&(S(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;if(p=0,a=""===a?".":a+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=a+P(c=e[u],u);p+=N(c,t,r,f,o)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)p+=N(c=c.value,t,r,f=a+P(c,u++),o);else if("object"===c)throw t=""+e,Error(g(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function I(e,t,r){if(null==e)return e;var a=[],n=0;return N(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function E(){var e=C.current;if(null===e)throw Error(g(321));return e}},827378:(e,t,r)=>{r(541535)}}]);