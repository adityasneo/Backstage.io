/*! For license information please see 8aa25b00.05bf2fbf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[836906],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},947148:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(827378);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"adrs-adr003",title:"ADR003: Avoid Default Exports and Prefer Named Exports",description:"Architecture Decision Record (ADR) log on Avoid Default Exports and Prefer Named Exports"},s=void 0,l={unversionedId:"architecture-decisions/adrs-adr003",id:"architecture-decisions/adrs-adr003",title:"ADR003: Avoid Default Exports and Prefer Named Exports",description:"Architecture Decision Record (ADR) log on Avoid Default Exports and Prefer Named Exports",source:"@site/../docs/architecture-decisions/adr003-avoid-default-exports.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/adrs-adr003",permalink:"/docs/architecture-decisions/adrs-adr003",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/architecture-decisions/adr003-avoid-default-exports.md",tags:[],version:"current",frontMatter:{id:"adrs-adr003",title:"ADR003: Avoid Default Exports and Prefer Named Exports",description:"Architecture Decision Record (ADR) log on Avoid Default Exports and Prefer Named Exports"},sidebar:"docs",previous:{title:"ADR002: Default Software Catalog File Format",permalink:"/docs/architecture-decisions/adrs-adr002"},next:{title:"ADR004: Module Export Structure",permalink:"/docs/architecture-decisions/adrs-adr004"}},c={},u=[{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:u};function f(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"context"}),"Context"),(0,n.kt)("p",null,"When CommonJS was the primary authoring format, the best practice was to export\nonly one thing from a module using the ",(0,n.kt)("inlineCode",{parentName:"p"},"module.exports = ...")," format. This\naligned with the\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Unix_philosophy"}),"UNIX philosophy"),' of "Do one\nthing well". The module would be consumed\n(',(0,n.kt)("inlineCode",{parentName:"p"},"const localName = require('the-module');"),") without having to know the internal\nstructure."),(0,n.kt)("p",null,"Now, ",(0,n.kt)("inlineCode",{parentName:"p"},"ESModules"),' are the primary authoring format. They have numerous benefits,\nsuch as compile-time verification of exports, and standards-defined semantics.\nThey have a similar mechanism known as "default exports", which allows for a\nconsumer to ',(0,n.kt)("inlineCode",{parentName:"p"},"import localName from 'the-module';"),". This is implicitly the same\nas ",(0,n.kt)("inlineCode",{parentName:"p"},"import { default as localName } from 'the-module';"),"."),(0,n.kt)("p",null,"However, there are numerous reasons to avoid default exports, as documented by\nothers before:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/"}),"https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/"))),(0,n.kt)("p",null,"A summary:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"They add indirection by encouraging a developer to create local names for\nmodules, increasing cognitive load and slowing down code comprehension:\n",(0,n.kt)("inlineCode",{parentName:"li"},"import TheListThing from 'not-a-list-thing';"),"."),(0,n.kt)("li",{parentName:"ul"},"They thwart tools, such as IDEs, that can automatically rename and refactor\ncode."),(0,n.kt)("li",{parentName:"ul"},"They promote typos and mistakes, as the imported member is completely up to\nthe consuming developer to define."),(0,n.kt)("li",{parentName:"ul"},"They are ugly in CommonJS interop, as the default property must be manually\nspecified by the consumer. This is often hidden by Babel's module interop."),(0,n.kt)("li",{parentName:"ul"},"They break re-exports due to name conflicts, forcing the developer to manually\nname each.")),(0,n.kt)("p",null,"Using named exports helps prevent needing to rename symbols, which has myriad\nbenefits. A few are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'IDE tools like "Find All References" and "Go To Definition" function'),(0,n.kt)("li",{parentName:"ul"},'Manual codebase searching ("grep", etc) is easier with a unique symbol')),(0,n.kt)("h2",o({},{id:"decision"}),"Decision"),(0,n.kt)("p",null,"We will stop using default exports except when absolutely necessary (such as\n",(0,n.kt)("a",o({parentName:"p"},{href:"https://reactjs.org/docs/code-splitting.html#reactlazy"}),(0,n.kt)("inlineCode",{parentName:"a"},"React.lazy"))," modules).\nA workaround exists for those that would prefer to never use ",(0,n.kt)("inlineCode",{parentName:"p"},"default"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"const Component = React.lazy(() =>\n  import('../path/to/Component').then(m => ({ default: m.Component })),\n);\n")),(0,n.kt)("h2",o({},{id:"consequences"}),"Consequences"),(0,n.kt)("p",null,"We will actively work to remove them from our codebases, being as explicit as\npossible. Have a connected component?\n",(0,n.kt)("inlineCode",{parentName:"p"},"export const ConnectedComponent = connect(Component)"),"."),(0,n.kt)("p",null,"We will add tools, such as lint rules, to help migrate away from default\nexports."))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,s,l=o(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))r.call(i,u)&&(l[u]=i[u]);if(t){s=t(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(l[s[p]]=i[s[p]])}}return l}},541535:(e,t,r)=>{var n=r(862525),o=60103,a=60106;var i=60109,s=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),s=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var g=b.prototype=new v;g.constructor=b,n(g,y.prototype),g.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n,a={},i=null,s=null;if(null!=t)for(n in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!O.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var N=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function E(e,t,r,n,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===n?"."+C(l,0):n,Array.isArray(i)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),E(i,t,r,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=""===n?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=n+C(s=e[c],c);l+=E(s,t,r,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=E(s=s.value,t,r,u=n+C(s,c++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function D(e,t,r){if(null==e)return e;var n=[],o=0;return E(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function S(){var e=A.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,r)=>{r(541535)}}]);