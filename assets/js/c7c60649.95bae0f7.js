/*! For license information please see c7c60649.95bae0f7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[19806],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},888606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});n(827378);var r=n(603905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const p={id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},s=void 0,c={unversionedId:"api/deprecations",id:"api/deprecations",title:"Deprecations",description:"A list of active and past deprecations",source:"@site/../docs/api/deprecations.md",sourceDirName:"api",slug:"/api/deprecations",permalink:"/docs/api/deprecations",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/api/deprecations.md",tags:[],version:"current",frontMatter:{id:"deprecations",title:"Deprecations",description:"A list of active and past deprecations"},sidebar:"docs",previous:{title:"Package Index",permalink:"/docs/reference/"},next:{title:"Future developer journey",permalink:"/docs/tutorials/journey"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"App Theme",id:"app-theme",level:3},{value:"Generic Auth API Refs",id:"generic-auth-api-refs",level:3}],f={toc:u};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This page contains extended documentation for some of the deprecations in\nvarious parts of Backstage. It is not an exhaustive list as most deprecation\nonly come in the form of a changelog notice and a console warning. The\ndeprecations listed here are the ones that need a bit more guidance than what\nfits in a console message."),(0,r.kt)("h3",{id:"app-theme"},"App Theme"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Released 2021-11-12 in @backstage/core-plugin-api v0.1.13")),(0,r.kt)("p",null,"In order to provide more flexibility in what types of themes can be used and how\nthey are applied, the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppTheme")," type is being\ndeprecated and replaced by a ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," property instead. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider"),"\nproperty is a React component that will be mounted at the root of the app\nwhenever that theme is active. This also removes the tight connection to MUI and\nopens up for other type of themes, and removes the hardcoded usage of\n",(0,r.kt)("inlineCode",{parentName:"p"},"<CssBaseline>"),"."),(0,r.kt)("p",null,"To migrate an existing theme, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," property and move it over to a\nnew ",(0,r.kt)("inlineCode",{parentName:"p"},"Provider")," component, using ",(0,r.kt)("inlineCode",{parentName:"p"},"ThemeProvider")," from MUI to provide the new\ntheme, along with ",(0,r.kt)("inlineCode",{parentName:"p"},"<CssBaseline>"),". For example a theme that currently looks like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  theme: darkTheme,\n};\n")),(0,r.kt)("p",null,"Would be migrated to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const darkTheme = {\n  id: 'dark',\n  title: 'Dark Theme',\n  variant: 'dark',\n  icon: <DarkIcon />,\n  Provider: ({ children }) => (\n    <ThemeProvider theme={darkTheme}>\n      <CssBaseline>{children}</CssBaseline>\n    </ThemeProvider>\n  ),\n};\n")),(0,r.kt)("p",null,"Note that the existing ",(0,r.kt)("inlineCode",{parentName:"p"},"AppTheme")," type still requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," property to be\nset since it's the type that's consumed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppThemeApi"),", and it would be a\nbreaking change to make ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," optional. This means that if you currently\nconstruct the themes that you pass on to ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"AppTheme")," as an\nintermediate type, you will need to work around this in some way, for example by\npassing the themes to ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp")," more directly."),(0,r.kt)("h3",{id:"generic-auth-api-refs"},"Generic Auth API Refs"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Released 2021-12-16 in @backstage/core-plugin-api v0.3.1")),(0,r.kt)("p",null,"There are four auth Utility API references in ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-plugin-api")," that\nwere too generic to be useful. The APIs in question are ",(0,r.kt)("inlineCode",{parentName:"p"},"auth0AuthApiRef"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"oauth2ApiRef"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oidcAuthApiRef"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"samlAuthApiRef"),". The issue with these\nAPIs was that they had no actual contract of what the backing auth provider was.\nThis made it more or less impossible to use these providers in open source\nplugins in any meaningful way. We also did not want to keep these Utility API\nreferences around just as helpers either, instead opting to remove them and let\nintegrators define their own APIs that are more specific to their auth provider.\nThis is also falls in line with a long-term goal to unify all auth providers to\nnot have separate frontend implementations."),(0,r.kt)("p",null,"If you're currently using one of these API references for either Sign-In or\naccess delegation within an app, there are a couple of steps you need to take to\nmigrate to your own custom API."),(0,r.kt)("p",null,"First, you'll need to define a new Utility API reference. If you're only using\nthe API for sign-in, you can put the definition in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/apis.ts"),".\nHowever, if you need to access your auth API inside plugins you you'll need to\nexport it from a common package. If you don't already have one we recommended\ncreating ",(0,r.kt)("inlineCode",{parentName:"p"},"@internal/apis")," and from there export the API reference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// `ProfileInfoApi & BackstageIdentityApi & SessionApi` are required for sign-in\n// Include `OAuthApi & OpenIdConnectApi` only if applicable\nexport const acmeAuthApiRef: ApiRef<\n  OAuthApi &\n    OpenIdConnectApi &\n    ProfileInfoApi &\n    BackstageIdentityApi &\n    SessionApi\n> = createApiRef({\n  id: 'internal.auth.acme',\n});\n")),(0,r.kt)("p",null,"Next you'll want to wire up the API inside ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/apis.ts"),", which\nvaries depending on which API you're replacing. If you for example are replacing\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"oauth2ApiRef"),", the factory might look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// oauth2\ncreateApiFactory({\n  api: acmeAuthApiRef,\n  deps: {\n    discoveryApi: discoveryApiRef,\n    oauthRequestApi: oauthRequestApiRef,\n    configApi: configApiRef,\n  },\n  factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n    OAuth2.create({\n      discoveryApi,\n      oauthRequestApi,\n      environment: configApi.getOptionalString('auth.environment'),\n    }),\n});\n")),(0,r.kt)("p",null,"Provider specific factory implementations, copy the code you need into the\nfactory method depending on which apiRef you previously used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// samlAuthApiRef\nSamlAuth.create({\n  discoveryApi,\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// oidcAuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'oidc',\n    title: 'Your Identity Provider',\n    icon: () => null,\n  },\n  environment: configApi.getOptionalString('auth.environment'),\n});\n\n// auth0AuthApiRef\nOAuth2.create({\n  discoveryApi,\n  oauthRequestApi,\n  provider: {\n    id: 'auth0',\n    title: 'Auth0',\n    icon: () => null,\n  },\n  defaultScopes: ['openid', 'email', 'profile'],\n  environment: configApi.getOptionalString('auth.environment'),\n});\n")),(0,r.kt)("p",null,"Finally, for the provider to show up in your settings menu, you also need to\nupdate the settings route in ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx")," to pass the\n",(0,r.kt)("inlineCode",{parentName:"p"},"acmeAuthApiRef")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserSettingsPage"),". This replaces all existing provider\nitems, so you might want to add back any of the default ones that you are using\nfrom the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/a3ec122170e0205fd3f9c307b98b1c5e4f55bf5f/plugins/user-settings/src/components/AuthProviders/DefaultProviderSettings.tsx#L35"},"DefaultProviderSettings"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Route\n  path="/settings"\n  element={\n    <UserSettingsPage\n      providerSettings={\n        <ProviderSettingsItem\n          title="ACME"\n          description="Provides sign-in via ACME"\n          apiRef={acmeAuthApiRef}\n          icon={Star}\n        />\n      }\n    />\n  }\n/>\n')))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,p,s=o(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(s[l]=a[l]);if(t){p=t(a);for(var u=0;u<p.length;u++)r.call(a,p[u])&&(s[p[u]]=a[p[u]])}}return s}},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;var a=60109,p=60110,s=60112;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),p=u("react.context"),s=u("react.forward_ref"),u("react.suspense"),c=u("react.memo"),l=u("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var k=v.prototype=new g;k.constructor=v,r(k,y.prototype),k.isPureReactComponent=!0;var b={current:null},A=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(a=""+t.key),t)A.call(t,r)&&!O.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===i[r]&&(i[r]=s[r]);return{$$typeof:o,type:e,key:a,ref:p,props:i,_owner:b.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var s=!1;if(null===e)s=!0;else switch(p){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return a=a(s=e),e=""===r?"."+N(s,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+N(p=e[c],c);s+=C(p,t,n,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(p=e.next()).done;)s+=C(p=p.value,t,n,l=r+N(p,c++),a);else if("object"===p)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function I(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function T(){var e=R.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);