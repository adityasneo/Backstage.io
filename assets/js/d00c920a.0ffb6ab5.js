/*! For license information please see d00c920a.0ffb6ab5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[586382],{603905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},278701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times"},c=void 0,s={unversionedId:"architecture-decisions/adrs-adr012",id:"architecture-decisions/adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times",source:"@site/../docs/architecture-decisions/adr012-use-luxon-locale-and-date-presets.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr012",permalink:"/docs/architecture-decisions/adrs-adr012",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr012-use-luxon-locale-and-date-presets.md",tags:[],version:"current",frontMatter:{id:"adrs-adr012",title:"ADR012: Use Luxon.toLocaleString and date/time presets",description:"Architecture Decision Record (ADR) for using Luxon's toLocaleString method and date/time presets for displaying dates and times"},sidebar:"docs",previous:{title:"ADR011: Plugin Package Structure",permalink:"/docs/architecture-decisions/adrs-adr011"},next:{title:"ADR013: Proper use of HTTP fetching libraries",permalink:"/docs/architecture-decisions/adrs-adr013"}},u={},l=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:l};function p(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"context"}),"Context"),(0,n.kt)("p",null,"User's locales will have their own style of reading dates. It's counter\nintuitive to not have dates formatted in their familiar formats, it can cause\nusers to have to think harder about what the date is and could even lead to\ninterpreting dates incorrectly (e.g. 05/03/2021, this could be March 5th or May\n3rd, depending on where the user is). At the moment, plugins are defining dates\nand times using custom formats and the ",(0,n.kt)("inlineCode",{parentName:"p"},"toFormat")," method, which leads to\ninconsistent and unfamiliar formats."),(0,n.kt)("h2",o({},{id:"decision"}),"Decision"),(0,n.kt)("p",null,"To keep the UI consistent and familiar to users, irrespective of their location,\nwe have decided that we use ",(0,n.kt)("inlineCode",{parentName:"p"},"toLocaleString")," and Luxon's\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/moment/luxon/blob/master/docs/formatting.md#presets"}),"extensive list"),"\nof Date and Time presets."),(0,n.kt)("p",null,"Here is an example:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"const date = new luxon.DateTime();\n\n/* Avoid this: */\ndate.toFormat('yyyy LLL dd'); // 2014 Aug 06\ndate.toFormat('yyyy LLL dd hh:mm'); // 2014 Aug 06 12:01\n\n/* Do this instead: */\ndate.toLocaleString(luxon.DateTime.DATE_MED); // US: Oct 14, 1983 | FR: 14 oct. 1983\ndate.toLocaleString(luxon.DateTime.DATETIME_MED); // US: Oct 14, 1983, 9:30 | FR: 14 oct. 1983 9:30\n")),(0,n.kt)("h2",o({},{id:"consequences"}),"Consequences"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We will need to audit the current places Date/Times are being displayed in the\nUI and update them to follow this ADR."),(0,n.kt)("li",{parentName:"ul"},"We will need to keep in mind for reviewing PRs going forward to follow this\nADR, or find/create a linting rule to automate this in the review process.")))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,s=o(e),u=1;u<arguments.length;u++){for(var l in i=Object(arguments[u]))r.call(i,l)&&(s[l]=i[l]);if(t){c=t(i);for(var d=0;d<c.length;d++)n.call(i,c[d])&&(s[c[d]]=i[c[d]])}}return s}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,c=60110,s=60112;var u=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),a=d("react.portal"),d("react.fragment"),d("react.strict_mode"),d("react.profiler"),i=d("react.provider"),c=d("react.context"),s=d("react.forward_ref"),d("react.suspense"),u=d("react.memo"),l=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=h.prototype;var b=v.prototype=new g;b.constructor=v,n(b,h.prototype),b.isPureReactComponent=!0;var O={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,a={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!j.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(1===s)a.children=r;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];a.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===a[n]&&(a[n]=s[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:O.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function D(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case a:s=!0}}if(s)return i=i(s=e),e=""===n?"."+D(s,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),P(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+D(c=e[u],u);s+=P(c,t,r,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)s+=P(c=c.value,t,r,l=n+D(c,u++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function _(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function A(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function E(){var e=L.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,r)=>{r(541535)}}]);