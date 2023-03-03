/*! For license information please see 7bafd682.ce02275f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[512591],{603905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},465877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});n(827378);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},p=void 0,c={unversionedId:"getting-started/configure-app-with-plugins",id:"getting-started/configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins",source:"@site/../docs/getting-started/configure-app-with-plugins.md",sourceDirName:"getting-started",slug:"/getting-started/configure-app-with-plugins",permalink:"/docs/getting-started/configure-app-with-plugins",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/configure-app-with-plugins.md",tags:[],version:"current",frontMatter:{id:"configure-app-with-plugins",title:"Configuring App with plugins",description:"Documentation on How Configuring App with plugins"},sidebar:"docs",previous:{title:"Running Backstage Locally",permalink:"/docs/getting-started/running-backstage-locally"},next:{title:"Customize the look-and-feel of your App",permalink:"/docs/getting-started/app-custom-theme"}},s={},l=[{value:"Adding existing plugins to your app",id:"adding-existing-plugins-to-your-app",level:2},{value:"Adding a plugin page to the Sidebar",id:"adding-a-plugin-page-to-the-sidebar",level:3}],u={toc:l};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Backstage plugins customize the app for your needs. There is a\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://backstage.io/plugins"}),"plugin marketplace")," with plugins for many common\ninfrastructure needs - CI/CD, monitoring, auditing, and more."),(0,r.kt)("h2",a({},{id:"adding-existing-plugins-to-your-app"}),"Adding existing plugins to your app"),(0,r.kt)("p",null,"The following steps assume that you have\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/create-an-app"}),"created a Backstage app")," and want to add an existing plugin\nto it."),(0,r.kt)("p",null,"We are using the\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/backstage/backstage/blob/master/plugins/circleci/README.md"}),"CircleCI"),"\nplugin in this example, which is designed to show CI/CD pipeline information attached\nto an entity in the software catalog."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the plugin's npm package to the repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-bash"}),"# From your Backstage root directory\nyarn add --cwd packages/app @backstage/plugin-circleci\n")),(0,r.kt)("p",{parentName:"li"},"Note the plugin is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," package, rather than the root\n",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". Backstage Apps are set up as monorepos with\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/workspaces/"}),"Yarn workspaces"),". Since\nCircleCI is a frontend UI plugin, it goes in ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityCircleCIContent")," extension to the entity pages in the app:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-diff"}),"// packages/app/src/components/catalog/EntityPage.tsx\n+import {\n+  EntityCircleCIContent,\n+  isCircleCIAvailable,\n+} from '@backstage/plugin-circleci';\n\n...\nconst cicdContent = (\n  <EntitySwitch>\n    ...\n+     <EntitySwitch.Case if={isCircleCIAvailable}>\n+       <EntityCircleCIContent />\n+     </EntitySwitch.Case>;\n  </EntitySwitch>\n);\n")),(0,r.kt)("p",{parentName:"li"},"This is just one example, but each Backstage instance may integrate content or\ncards to suit their needs on different pages, tabs, etc. In addition, while some\nplugins such as this example are designed to annotate or support specific software\ncatalog entities, others may be intended to be used in a stand-alone fashion and\nwould be added outside the ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityPage"),", such as being added to the main navigation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"[Optional]")," Add a proxy config:"),(0,r.kt)("p",{parentName:"li"},"Plugins that collect data off of external services may require the use of a proxy service.\nThis plugin accesses the CircleCI REST API, and thus requires a proxy definition."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"// app-config.yaml\nproxy:\n  '/circleci/api':\n    target: https://circleci.com/api/v1.1\n    headers:\n      Circle-Token: ${CIRCLECI_AUTH_TOKEN}\n")))),(0,r.kt)("h3",a({},{id:"adding-a-plugin-page-to-the-sidebar"}),"Adding a plugin page to the Sidebar"),(0,r.kt)("p",null,"In a standard Backstage app created with\n",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/getting-started/create-an-app"}),"@backstage/create-app"),", the sidebar is managed inside\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/app/src/components/Root/Root.tsx"),". The file exports the entire\n",(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar")," element of your app, which you can extend with additional entries by\nadding new ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarItem")," elements."),(0,r.kt)("p",null,"For example, if you install the ",(0,r.kt)("inlineCode",{parentName:"p"},"api-docs")," plugin, a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarItem"),"\ncould be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),'// Import icon from MUI\nimport ExtensionIcon from \'@material-ui/icons/Extension\';\n\n// ... inside the AppSidebar component\n<SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />;\n')),(0,r.kt)("p",null,"You can also use your own SVGs directly as icon components. Just make sure they\nare sized according to the Material UI's\n",(0,r.kt)("a",a({parentName:"p"},{href:"https://material-ui.com/api/svg-icon/"}),"SvgIcon")," default of 24x24px, and set the\nextension to ",(0,r.kt)("inlineCode",{parentName:"p"},".icon.svg"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import InternalToolIcon from './internal-tool.icon.svg';\n")),(0,r.kt)("p",null,"On mobile devices the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar")," is displayed at the bottom of the screen. For\ncustomizing the experience you can group ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarItems")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarGroup"),"\n(Example 1) or create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarGroup")," with a link (Example 2). All\n",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarGroup"),"s are displayed in the bottom navigation with an icon."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'// Example 1\n<SidebarGroup icon={<MenuIcon />} label="Menu">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n')),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),'// Example 2\n<SidebarGroup label="Search" icon={<SearchIcon />} to="/search">\n  ...\n  <SidebarItem icon={ExtensionIcon} to="api-docs" text="APIs" />\n  ...\n<SidebarGroup />\n')),(0,r.kt)("p",null,"If no ",(0,r.kt)("inlineCode",{parentName:"p"},"SidebarGroup")," is provided a default menu will display the ",(0,r.kt)("inlineCode",{parentName:"p"},"Sidebar"),"\ncontent."))}d.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,i){for(var o,p,c=a(e),s=1;s<arguments.length;s++){for(var l in o=Object(arguments[s]))n.call(o,l)&&(c[l]=o[l]);if(t){p=t(o);for(var u=0;u<p.length;u++)r.call(o,p[u])&&(c[p[u]]=o[p[u]])}}return c}},541535:(e,t,n)=>{var r=n(862525),a=60103,i=60106;var o=60109,p=60110,c=60112;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),i=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),o=u("react.provider"),p=u("react.context"),c=u("react.forward_ref"),u("react.suspense"),s=u("react.memo"),l=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=h.prototype;var k=b.prototype=new y;k.constructor=b,r(k,h.prototype),k.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,i={},o=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:a,type:e,key:o,ref:p,props:i,_owner:v.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,o){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var c=!1;if(null===e)c=!0;else switch(p){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return o=o(c=e),e=""===r?"."+j(c,0):r,Array.isArray(o)?(n="",null!=e&&(n=e.replace(x,"$&/")+"/"),S(o,t,n,"",(function(e){return e}))):null!=o&&(N(o)&&(o=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+j(p=e[s],s);c+=S(p,t,n,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(p=e.next()).done;)c+=S(p=p.value,t,n,l=r+j(p,s++),o);else if("object"===p)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function I(e,t,n){if(null==e)return e;var r=[],a=0;return S(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function A(){var e=P.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,n)=>{n(541535)}}]);