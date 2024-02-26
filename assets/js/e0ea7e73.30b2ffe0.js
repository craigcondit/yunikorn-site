"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86048],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>c});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},y=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,c=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(c,i(i({ref:t},y),{},{components:r})):n.createElement(c,i({ref:t},y))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[d]="string"==typeof e?e:a,i[1]=g;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const l={id:"version",title:"Version details"},i=void 0,g={unversionedId:"get_started/version",id:"get_started/version",title:"Version details",description:"\x3c!--",source:"@site/docs/get_started/version.md",sourceDirName:"get_started",slug:"/get_started/version",permalink:"/docs/next/get_started/version",draft:!1,tags:[],version:"current",frontMatter:{id:"version",title:"Version details"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/next/get_started/core_features"},next:{title:"Deployment Modes",permalink:"/docs/next/user_guide/deployment_modes"}},o={},p=[],y={toc:p},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"which-version-should-be-used"},"Which version should be used?"),(0,a.yg)("p",null,"The recommendation is to always run the latest possible version of YuniKorn.\nNew releases are made regular driven by new features for YuniKorn itself and or the shim.\nFeatures and fixes are currently only added to the development branch from which releases are cut."),(0,a.yg)("p",null,"At this point in time the project only creates minor releases, no patch releases."),(0,a.yg)("p",null,"If a shim version, i.e. Kubernetes, is supported by multiple YuniKorn releases we recommend to always use the latest YuniKorn release possible.\nOlder build dependencies in earlier releases could prevent you from using some new functionality exposed by a newer shim."),(0,a.yg)("h1",{id:"kubernetes-versions-supported-by-yunikorn"},"Kubernetes versions supported by YuniKorn"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"K8s Version"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Supported ",(0,a.yg)("br",null),"from version"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Support ended"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.12.x (or earlier)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.13.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.14.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.15.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.8.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.16.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.17.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.18.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.10.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.19.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.11.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.0.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.20.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.21.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.22.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.23.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.12.2"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.3.0")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.24.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.0.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.25.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.26.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.2.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.27.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.4.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.28.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.4.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1.29.x"),(0,a.yg)("td",{parentName:"tr",align:"center"},"1.5.0"),(0,a.yg)("td",{parentName:"tr",align:"center"},"-")))))}s.isMDXComponent=!0}}]);