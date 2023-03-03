/*! For license information please see 2601c7f4.6cddd6c0.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[484490],{603905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(t),f=o,y=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},779901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});t(827378);var r=t(603905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"},s=void 0,u={unversionedId:"reference/plugin-auth-backend.providers",id:"reference/plugin-auth-backend.providers",title:"providers",description:"API reference for providers",source:"@site/../docs/reference/plugin-auth-backend.providers.md",sourceDirName:"reference",slug:"/reference/plugin-auth-backend.providers",permalink:"/docs/reference/plugin-auth-backend.providers",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-auth-backend.providers.md",tags:[],version:"current",frontMatter:{id:"plugin-auth-backend.providers",title:"providers",description:"API reference for providers"}},l={},p=[],c={toc:p};function d(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-auth-backend"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/plugin-auth-backend"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/plugin-auth-backend.providers"}),(0,r.kt)("inlineCode",{parentName:"a"},"providers"))),(0,r.kt)("p",null,"All built-in auth provider integrations."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),'providers: Readonly<{\n    atlassian: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    auth0: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    awsAlb: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./aws-alb").AwsAlbResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./aws-alb").AwsAlbResult>;\n            };\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    bitbucket: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            usernameMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n            userIdMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    bitbucketServer: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./bitbucketServer").BitbucketServerOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<import("./bitbucketServer").BitbucketServerOAuthResult>;\n        }>;\n    }>;\n    cfAccess: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("./cloudflare-access").CloudflareAccessResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./cloudflare-access").CloudflareAccessResult>;\n            };\n            cache?: import("@backstage/backend-plugin-api").CacheService | undefined;\n        }) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n        }>;\n    }>;\n    gcpIap: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("./gcp-iap").GcpIapResult> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./gcp-iap").GcpIapResult>;\n            };\n        }) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    github: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./github").GithubOAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./github").GithubOAuthResult>;\n            } | undefined;\n            stateEncoder?: import("./types").StateEncoder | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            usernameMatchingUserEntityName: () => import("./types").SignInResolver<import("./github").GithubOAuthResult>;\n        }>;\n    }>;\n    gitlab: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    google: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    microsoft: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    oauth2: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oauth2Proxy: Readonly<{\n        create: (options: {\n            authHandler?: import("./types").AuthHandler<import("./oauth2-proxy").OAuth2ProxyResult<unknown>> | undefined;\n            signIn: {\n                resolver: import("./types").SignInResolver<import("./oauth2-proxy").OAuth2ProxyResult<unknown>>;\n            };\n        }) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    oidc: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./oidc").OidcAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./oidc").OidcAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    okta: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            emailLocalPartMatchingUserEntityName: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityProfileEmail: () => import("./types").SignInResolver<unknown>;\n            emailMatchingUserEntityAnnotation(): import("./types").SignInResolver<import("..").OAuthResult>;\n        }>;\n    }>;\n    onelogin: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("..").OAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("..").OAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: never;\n    }>;\n    saml: Readonly<{\n        create: (options?: {\n            authHandler?: import("./types").AuthHandler<import("./saml").SamlAuthResult> | undefined;\n            signIn?: {\n                resolver: import("./types").SignInResolver<import("./saml").SamlAuthResult>;\n            } | undefined;\n        } | undefined) => AuthProviderFactory;\n        resolvers: Readonly<{\n            nameIdMatchingUserEntityName(): import("./types").SignInResolver<import("./saml").SamlAuthResult>;\n        }>;\n    }>;\n}>\n')))}d.isMDXComponent=!0},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,u=o(e),l=1;l<arguments.length;l++){for(var p in a=Object(arguments[l]))t.call(a,p)&&(u[p]=a[p]);if(n){s=n(a);for(var c=0;c<s.length;c++)r.call(a,s[c])&&(u[s[c]]=a[s[c]])}}return u}},541535:(e,n,t)=>{var r=t(862525),o=60103,i=60106;var a=60109,s=60110,u=60112;var l=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),i=c("react.portal"),c("react.fragment"),c("react.strict_mode"),c("react.profiler"),a=c("react.provider"),s=c("react.context"),u=c("react.forward_ref"),c("react.suspense"),l=c("react.memo"),p=c("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}function v(){}function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,n,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=g.prototype=new v;b.constructor=g,r(b,h.prototype),b.isPureReactComponent=!0;var R={current:null},A=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,i={},a=null,s=null;if(null!=n)for(r in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(a=""+n.key),n)A.call(n,r)&&!O.hasOwnProperty(r)&&(i[r]=n[r]);var u=arguments.length-2;if(1===u)i.children=t;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];i.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:R.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var I=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,t,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return a=a(u=e),e=""===r?"."+w(u,0):r,Array.isArray(a)?(t="",null!=e&&(t=e.replace(I,"$&/")+"/"),P(a,n,t,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(I,"$&/")+"/")+e)),n.push(a)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var p=r+w(s=e[l],l);u+=P(s,n,t,p,a)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(s=e.next()).done;)u+=P(s=s.value,n,t,p=r+w(s,l++),a);else if("object"===s)throw n=""+e,Error(f(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function j(e,n,t){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var H={current:null};function _(){var e=H.current;if(null===e)throw Error(f(321));return e}},827378:(e,n,t)=>{t(541535)}}]);