/*! For license information please see c8e222d1.e8903a63.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[459258],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},636880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={id:"oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers."},s=void 0,l={unversionedId:"auth/oidc",id:"auth/oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers.",source:"@site/../docs/auth/oidc.md",sourceDirName:"auth",slug:"/auth/oidc",permalink:"/docs/auth/oidc",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/oidc.md",tags:[],version:"current",frontMatter:{id:"oidc",title:"OIDC provider from scratch",description:"This section shows how to use an OIDC provider from scratch, same steps apply for custom providers."},sidebar:"docs",previous:{title:"OAuth and OpenID Connect",permalink:"/docs/auth/oauth"},next:{title:"Contributing New Providers",permalink:"/docs/auth/add-auth-provider"}},p={},c=[{value:"Summary",id:"summary",level:2},{value:"The API reference",id:"the-api-reference",level:3},{value:"The API Factory",id:"the-api-factory",level:3},{value:"The Auth Provider",id:"the-auth-provider",level:2},{value:"The Resolver",id:"the-resolver",level:3},{value:"The configuration",id:"the-configuration",level:3},{value:"The Sign In provider",id:"the-sign-in-provider",level:3},{value:"Note",id:"note",level:2}],u={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section shows how to use an OIDC provider from scratch, same steps apply for custom\nproviders. Please note these steps are for using a provider, not how to implement one,\nand Backstage recommends creating custom providers specific to the IDP, so we'll use a\n",(0,r.kt)("inlineCode",{parentName:"p"},"azureOIDC")," provider throughout this example, feel free to change any of those refs\nto your provider name."),(0,r.kt)("h2",o({},{id:"summary"}),"Summary"),(0,r.kt)("p",null,"To add providers not enabled by default like OIDC, we need to follow some steps, we\nassume you already have a sign in page to which we'll add the provider so users can\nsign in through the provider. In simple steps here's how you enable the provider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an API reference to identify the provider."),(0,r.kt)("li",{parentName:"ul"},"Create the API factory that will handle the authentication."),(0,r.kt)("li",{parentName:"ul"},"Add or reuse an auth provider so you can authenticate."),(0,r.kt)("li",{parentName:"ul"},"Add or reuse a resolver to handle the result from the authentication."),(0,r.kt)("li",{parentName:"ul"},"Configure the provider to access your 3rd party auth solution."),(0,r.kt)("li",{parentName:"ul"},"Add the provider to sign in page so users can login with it.")),(0,r.kt)("p",null,"We'll explain each step more in detail next."),(0,r.kt)("h3",o({},{id:"the-api-reference"}),"The API reference"),(0,r.kt)("p",null,"An API reference exist for the sake of ",(0,r.kt)("strong",{parentName:"p"},"Dependency Injection"),", check ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/api/utility-apis"}),"Utility APIs"),"\nfor extended explanation."),(0,r.kt)("p",null,"In this OIDC example, we'll create the API reference directly in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/apis.ts")," file, it is not a requirement to put the reference in this\nfile. Any location will do as long as it's available to be imported to where the API\nfactory is, as well as easily accessible to the rest of the application so any package\nand plugin can inject the API instance when necessary."),(0,r.kt)("p",null,"An example of such would be when you use an auth provider from a library installed with\nNPM, or any other library repository, you would import the API ref from the library."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"export const azureOIDCAuthApiRef: ApiRef<\n  OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi\n> = createApiRef({\n  id: 'auth.my-custom-provider',\n});\n")),(0,r.kt)("p",null,"Please note a few things, the ID can be anything you want as long as it doesn't conflict\nwith other refs, backstage recommends to use a custom name that references your custom\nprovider, for example we are using OIDC protocol with Azure, so we could use something\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.azure.oidc")," as well."),(0,r.kt)("p",null,"Also we're exporting this reference, as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"typings"),", we need to\nbe able to import this reference anywhere in the app, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"typings")," will tell typescript\nwhat instance we're getting from DI when injecting the API. In this case we are defining\nan API for authentication, so we tell TS that this instance complies with 4 API\ninterfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The OICD API that will handle authentication."),(0,r.kt)("li",{parentName:"ul"},"Profile API for requesting user profile info from the auth provider in question."),(0,r.kt)("li",{parentName:"ul"},"Backstage identity API to handle and associate the user profile with backstage identity."),(0,r.kt)("li",{parentName:"ul"},"Session API, to handle the session the user will have while logged in.")),(0,r.kt)("h3",o({},{id:"the-api-factory"}),"The API Factory"),(0,r.kt)("p",null,"A factory is a function that can take some parameters or dependencies and return an\ninstance of something, in our case it will be a function that requests some backstage\nAPIs and use them to create an instance of an OIDC API provider."),(0,r.kt)("p",null,"Please note that this function only runs (creates the instance) when somewhere else in\nthe app you request the DI to give you an instance of the OIDC provider using the API ref\ndefined above, and the DI will only run this function the first time, from then on any\nother DI injection will just receive the same instance created the first time, basically\nthe instance is cached by the DI library, a singleton."),(0,r.kt)("p",null,"Let's add our OIDC API factory to the APIs array in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/apis.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts",metastring:'title="packages/app/src/apis.ts"',title:'"packages/app/src/apis.ts"'}),"/* highlight-add-next-line */\nimport { OAuth2 } from '@backstage/core-app-api';\n\nexport const apis: AnyApiFactory[] = [\n  /* highlight-add-start */\n  createApiFactory({\n    api: azureOIDCAuthApiRef,\n    deps: {\n      discoveryApi: discoveryApiRef,\n      oauthRequestApi: oauthRequestApiRef,\n      configApi: configApiRef,\n    },\n    factory: ({ discoveryApi, oauthRequestApi, configApi }) =>\n      OAuth2.create({\n        discoveryApi,\n        oauthRequestApi,\n        provider: {\n          id: 'my-auth-provider',\n          title: 'My custom auth provider',\n          icon: () => null,\n        },\n        environment: configApi.getOptionalString('auth.environment'),\n        defaultScopes: ['openid', 'profile', 'email'],\n      }),\n  }),\n  /* highlight-add-end */\n  // ..\n];\n")),(0,r.kt)("p",null,"Please note we're importing the ",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth2")," class from ",(0,r.kt)("inlineCode",{parentName:"p"},"@backstage/core-app-api")," effectively\ndelegating the authentication to it. Also we're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"my-auth-provider")," ID to tell\n",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth2")," to use the auth provider we'll define in the next section, and added the default\nscopes to request ID, profile, email and user read permissions."),(0,r.kt)("h2",o({},{id:"the-auth-provider"}),"The Auth Provider"),(0,r.kt)("p",null,"The Auth Provider is responsible for authenticating with the 3rd party service, and give\nus back the credentials, here's where you pick which protocol to use, be it Auth0, OAuth2,\nOIDC, SAML or any other that your 3rd party IDP provider supports."),(0,r.kt)("p",null,"For this example we'll use OIDC, we pass a factory to the ",(0,r.kt)("inlineCode",{parentName:"p"},"providerFactories")," object with\nthe ID you picked to represent the Auth provider, this ID has to match with the provider's\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," inside the API factory, the yaml config provider key under ",(0,r.kt)("inlineCode",{parentName:"p"},"auth.providers"),", and the\ncallback URI provider segment (you'll have to configure your IDP to handle the callback\nURI properly)."),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"export default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    providerFactories: {\n      ...defaultAuthProviderFactories,\n      /* highlight-add-next-line */\n      'my-auth-provider': providers.oidc.create({}),\n    },\n  // ..\n})\n")),(0,r.kt)("h3",o({},{id:"the-resolver"}),"The Resolver"),(0,r.kt)("p",null,"Resolvers exist to map user identity from the 3rd party (in this case an azure IDP\nprovider) to the backstage user identity, for a detailed explanation check the\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/auth/identity-resolver"}),"Identity Resolver")," page, it explains how to write a custom resolver as well as\nlinking the built in resolvers of backstage."),(0,r.kt)("p",null,"The default OIDC provider does not support SignIn, we need to add such support by\nadding a resolver for a SignIn request."),(0,r.kt)("p",null,"The OIDC provider doesn't provide any build-in resolvers, so we'll need to define our own:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import {\n  DEFAULT_NAMESPACE,\n  /* highlight-add-next-line */\n  stringifyEntityRef,\n} from '@backstage/catalog-model';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    logger: env.logger,\n    config: env.config,\n    database: env.database,\n    discovery: env.discovery,\n    tokenManager: env.tokenManager,\n    providerFactories: {\n      ...defaultAuthProviderFactories,\n     'my-auth-provider': providers.oidc.create({\n        /* highlight-add-start */\n        signIn: {\n          resolver(info, ctx) {\n            const userRef = stringifyEntityRef({\n              kind: 'User',\n              name: info.result.userinfo.sub,\n              namespace: DEFAULT_NAMESPACE,\n            });\n            return ctx.issueToken({\n              claims: {\n                sub: userRef, // The user's own identity\n                ent: [userRef], // A list of identities that the user claims ownership through\n              },\n            });\n          },\n        },\n        /* highlight-add-end */\n     }),\n    },\n    // ..\n  })\n")),(0,r.kt)("h3",o({},{id:"the-configuration"}),"The configuration"),(0,r.kt)("p",null,"Since we are using our custom OIDC Auth Provider, we need to add a configuration based\non the provider used, in this case based on OIDC protocol (remember the 3rd party has to\nsupport the protocol)."),(0,r.kt)("p",null,"In this example we'll configure OIDC with ",(0,r.kt)("inlineCode",{parentName:"p"},"my-auth-provider"),", to do so we need to\n",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/auth/microsoft/provider#create-an-app-registration-on-azure"}),"Create app registration")," in the Azure console, the only difference is that the\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7007/api/auth/microsoft/handler/frame")," URL needs to change to\n",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:7007/api/auth/my-auth-provider/handler/frame"),"."),(0,r.kt)("p",null,"Then we need to configure the env variables for the provider, based on the provider's code\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/auth-backend/src/providers/oidc/provider.ts")," we need the following variables\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-yaml",metastring:'title="app-config.yaml"',title:'"app-config.yaml"'}),"auth:\n  environment: development\n  ### Providing an auth.session.secret will enable session support in the auth-backend\n  session:\n    secret: ${SESSION_SECRET}\n  providers:\n    my-auth-provider:\n      development:\n        metadataUrl: https://example.com/.well-known/openid-configuration\n        clientId: ${AUTH_MY_CLIENT_ID}\n        clientSecret: ${AUTH_MY_CLIENT_SECRET}\n")),(0,r.kt)("p",null,"Anything enclosed in ",(0,r.kt)("inlineCode",{parentName:"p"},"${}")," can be replaced directly in the yaml, or provided as\nenvironment variables, the way you obtain all these except ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt")," is to\ncheck the App Registration you created:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientId"),": Grab from the Overview page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clientSecret"),": Can only be seen when creating the secret, if you lose it you'll need a\nnew secret."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadataUrl"),": In Overview > Endpoints tab, grab OpenID Connect metadata document URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"authorizationUrl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tokenUrl"),": Open the ",(0,r.kt)("inlineCode",{parentName:"li"},"metadataUrl")," in a browser, that json will\nhold these 2 urls somewhere in there."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokenSignedResponseAlg"),": Don't define it, use the default unless you know what it does."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope"),": Only used if we didn't specify ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultScopes")," in the provider's factory,\nbasically the same thing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prompt"),": Recommended to use ",(0,r.kt)("inlineCode",{parentName:"li"},"auto")," so the browser will request login to the IDP if the\nuser has no active session.")),(0,r.kt)("p",null,"Note that for the time being, any change in this yaml file requires a restart of the app,\nalso you need to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"session.secret")," part to use OIDC (some other providers might\nneed this as well) to support user sessions."),(0,r.kt)("h3",o({},{id:"the-sign-in-provider"}),"The Sign In provider"),(0,r.kt)("p",null,"The last step is to add the provider to the ",(0,r.kt)("inlineCode",{parentName:"p"},"SignInPage")," so users can sign in with your\nnew provider, please follow the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/docs/auth/#sign-in-configuration"}),"Sign In Configuration")," docs, here's where you import\nand use the API reference we defined earlier."),(0,r.kt)("h2",o({},{id:"note"}),"Note"),(0,r.kt)("p",null,"These steps apply to most if not all the providers, including custom providers, the main\ndifference between different providers will be the contents of the API factory, the code\nin the Auth Provider Factory, the resolver, and the different variables each provider\nneeds in the YAML config or env variables."))}h.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,l=o(e),p=1;p<arguments.length;p++){for(var c in a=Object(arguments[p]))n.call(a,c)&&(l[c]=a[c]);if(t){s=t(a);for(var u=0;u<s.length;u++)r.call(a,s[u])&&(l[s[u]]=a[s[u]])}}return l}},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;var a=60109,s=60110,l=60112;var p=60115,c=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),a=u("react.provider"),s=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),c=u("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function v(){}function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var k=g.prototype=new v;k.constructor=g,r(k,y.prototype),k.isPureReactComponent=!0;var b={current:null},w=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!I.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];i.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:b.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===r?"."+N(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),P(a,t,n,"",(function(e){return e}))):null!=a&&(A(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var c=r+N(s=e[p],p);l+=P(s,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(s=e.next()).done;)l+=P(s=s.value,t,n,c=r+N(s,p++),a);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function j(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function T(){var e=S.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);