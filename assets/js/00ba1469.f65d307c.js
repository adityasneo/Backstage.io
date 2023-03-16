/*! For license information please see 00ba1469.f65d307c.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[45011],{603905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var r=n(667294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(g,l(l({ref:e},p),{},{components:n})):r.createElement(g,l({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},935310:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(827378);var r=n(603905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const l={id:"catalog-client.catalogclient",title:"CatalogClient",description:"API reference for CatalogClient"},i=void 0,c={unversionedId:"reference/catalog-client.catalogclient",id:"reference/catalog-client.catalogclient",title:"CatalogClient",description:"API reference for CatalogClient",source:"@site/../docs/reference/catalog-client.catalogclient.md",sourceDirName:"reference",slug:"/reference/catalog-client.catalogclient",permalink:"/docs/reference/catalog-client.catalogclient",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/catalog-client.catalogclient.md",tags:[],version:"current",frontMatter:{id:"catalog-client.catalogclient",title:"CatalogClient",description:"API reference for CatalogClient"}},s={},p=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p};function f(t){var{components:e}=t,n=o(t,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-client"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/catalog-client"))," ",">"," ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/reference/catalog-client.catalogclient"}),(0,r.kt)("inlineCode",{parentName:"a"},"CatalogClient"))),(0,r.kt)("p",null,"A frontend and backend compatible client for communicating with the Backstage software catalog."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class CatalogClient implements CatalogApi \n")),(0,r.kt)("b",null,"Implements:")," [CatalogApi](/docs/reference/catalog-client.catalogapi)",(0,r.kt)("h2",a({},{id:"constructors"}),"Constructors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Constructor"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient._constructor_"}),"(constructor)(options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Constructs a new instance of the ",(0,r.kt)("code",null,"CatalogClient")," class")))),(0,r.kt)("h2",a({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.addlocation"}),"addLocation(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Registers a new location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentities"}),"getEntities(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Lists catalog entities.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentitiesbyrefs"}),"getEntitiesByRefs(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a batch of entities, by their entity refs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentityancestors"}),"getEntityAncestors(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets entity ancestor information, i.e. the hierarchy of parent entities whose processing resulted in a given entity appearing in the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentitybyname"}),"getEntityByName(compoundName, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentitybyref"}),"getEntityByRef(entityRef, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a single entity from the catalog by its ref (kind, namespace, name) triplet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getentityfacets"}),"getEntityFacets(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a summary of field facets of entities in the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getlocationbyid"}),"getLocationById(id, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a registered location by its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.getlocationbyref"}),"getLocationByRef(locationRef, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets a registered location by its ref.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.queryentities"}),"queryEntities(request, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Gets paginated entities from the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.refreshentity"}),"refreshEntity(entityRef, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Refreshes (marks for reprocessing) an entity in the catalog.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.removeentitybyuid"}),"removeEntityByUid(uid, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Removes a single entity from the catalog by entity UID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.removelocationbyid"}),"removeLocationById(id, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Removes a registered Location by its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"/docs/reference/catalog-client.catalogclient.validateentity"}),"validateEntity(entity, locationRef, options)")),(0,r.kt)("td",a({parentName:"tr"},{align:null})),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Validate entity and its location.")))))}f.isMDXComponent=!0},862525:t=>{var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(t,o){for(var l,i,c=a(t),s=1;s<arguments.length;s++){for(var p in l=Object(arguments[s]))n.call(l,p)&&(c[p]=l[p]);if(e){i=e(l);for(var u=0;u<i.length;u++)r.call(l,i[u])&&(c[i[u]]=l[i[u]])}}return c}},541535:(t,e,n)=>{var r=n(862525),a=60103,o=60106;var l=60109,i=60110,c=60112;var s=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),l=u("react.provider"),i=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),p=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||g}function k(){}function b(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(d(85));this.updater.enqueueSetState(this,t,e,"setState")},y.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},k.prototype=y.prototype;var h=b.prototype=new k;h.constructor=b,r(h,y.prototype),h.isPureReactComponent=!0;var N={current:null},v=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(t,e,n){var r,o={},l=null,i=null;if(null!=e)for(r in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(l=""+e.key),e)v.call(e,r)&&!O.hasOwnProperty(r)&&(o[r]=e[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),p=0;p<c;p++)s[p]=arguments[p+2];o.children=s}if(t&&t.defaultProps)for(r in c=t.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:t,key:l,ref:i,props:o,_owner:N.current}}function w(t){return"object"==typeof t&&null!==t&&t.$$typeof===a}var C=/\/+/g;function P(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function E(t,e,n,r,l){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var c=!1;if(null===t)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case a:case o:c=!0}}if(c)return l=l(c=t),t=""===r?"."+P(c,0):r,Array.isArray(l)?(n="",null!=t&&(n=t.replace(C,"$&/")+"/"),E(l,e,n,"",(function(t){return t}))):null!=l&&(w(l)&&(l=function(t,e){return{$$typeof:a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(l,n+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+t)),e.push(l)),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var s=0;s<t.length;s++){var p=r+P(i=t[s],s);c+=E(i,e,n,p,l)}else if(p=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=f&&t[f]||t["@@iterator"])?t:null}(t),"function"==typeof p)for(t=p.call(t),s=0;!(i=t.next()).done;)c+=E(i=i.value,e,n,p=r+P(i,s++),l);else if("object"===i)throw e=""+t,Error(d(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function _(t,e,n){if(null==t)return t;var r=[],a=0;return E(t,r,"","",(function(t){return e.call(n,t,a++)})),r}function S(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var R={current:null};function x(){var t=R.current;if(null===t)throw Error(d(321));return t}},827378:(t,e,n)=>{n(541535)}}]);