/*! For license information please see 7d22fe3a.561121b1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[817974],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},500839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"plugin-events-node",title:"@backstage/plugin-events-node",description:"API Reference for @backstage/plugin-events-node"},l=void 0,s={unversionedId:"reference/plugin-events-node",id:"reference/plugin-events-node",title:"@backstage/plugin-events-node",description:"API Reference for @backstage/plugin-events-node",source:"@site/../docs/reference/plugin-events-node.md",sourceDirName:"reference",slug:"/reference/plugin-events-node",permalink:"/docs/reference/plugin-events-node",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-events-node.md",tags:[],version:"current",frontMatter:{id:"plugin-events-node",title:"@backstage/plugin-events-node",description:"API Reference for @backstage/plugin-events-node"}},c={},u=[{value:"Classes",id:"classes",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2}],p={toc:u};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/plugin-events-node"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-events-node"))),(0,r.kt)("p",null,"The events-node module for ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/plugin-events-backend"),"."),(0,r.kt)("h2",a({},{id:"classes"}),"Classes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Class"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.eventrouter"}),"EventRouter")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Subscribes to a topic and - depending on a set of conditions - republishes the event to another topic.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.subtopiceventrouter"}),"SubTopicEventRouter")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Subscribes to the provided (generic) topic and publishes the events under the more concrete sub-topic depending on the implemented logic for determining it. Implementing classes might use information from ",(0,r.kt)("code",null,"metadata")," and/or properties within the payload.")))),(0,r.kt)("h2",a({},{id:"interfaces"}),"Interfaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Interface"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.eventbroker"}),"EventBroker")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Allows a decoupled and asynchronous communication between components. Components can publish events for a given topic and others can subscribe for future events for topics they are interested in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.eventparams"}),"EventParams")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.eventpublisher"}),"EventPublisher")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Publishes events to be consumed by subscribers for their topic. The events can come from different (external) sources like emitted themselves, received via HTTP endpoint (i.e. webhook) or from event brokers, queues, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.eventsubscriber"}),"EventSubscriber")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Handles received events. This may include triggering refreshes of catalog entities or other actions to react on events.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.httppostingressoptions"}),"HttpPostIngressOptions")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.requestdetails"}),"RequestDetails")),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.requestrejectiondetails"}),"RequestRejectionDetails")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Details for how to respond to the rejection of the received HTTP request transmitting an event payload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.requestvalidationcontext"}),"RequestValidationContext")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Passed context for the validation at which rejections can be expressed.")))),(0,r.kt)("h2",a({},{id:"type-aliases"}),"Type Aliases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Type Alias"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/plugin-events-node.requestvalidator"}),"RequestValidator")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("p",null,"Validator used to check the received HTTP request transmitting an event payload."),(0,r.kt)("p",null,"E.g., it can be used for signature verification like for GitHub webhook events (",(0,r.kt)("a",a({parentName:"td"},{href:"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks%5C#secret"}),"https://docs.github.com/en/developers/webhooks-and-events/webhooks/creating-webhooks\\#secret"),") or other kinds of checks."))))))}f.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,l,s=a(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(s[u]=i[u]);if(t){l=t(i);for(var p=0;p<l.length;p++)r.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},541535:(e,t,n)=>{var r=n(862525),a=60103,o=60106;var i=60109,l=60110,s=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),l=p("react.context"),s=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}function g(){}function h(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var y=h.prototype=new g;y.constructor=h,r(y,v.prototype),y.isPureReactComponent=!0;var k={current:null},N=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)N.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,r,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case o:s=!0}}if(s)return i=i(s=e),e=""===r?"."+S(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),_(i,t,n,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+S(l=e[c],c);s+=_(l,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=_(l=l.value,t,n,u=r+S(l,c++),i);else if("object"===l)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function E(e,t,n){if(null==e)return e;var r=[],a=0;return _(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function C(){var e=x.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);