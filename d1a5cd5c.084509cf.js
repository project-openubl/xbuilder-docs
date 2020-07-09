(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(2),o=r(10),i=(r(0),r(175)),a={id:"design_principles",title:"Design principles"},l={id:"design_principles",isDocsHomePage:!1,title:"Design principles",description:"- You don't have to know UBL standard - XBuilder do not require you to know the UBL details, it exposes a set of POJOs that are, internally, transpiled into XML files that follows the UBL standards.",source:"@site/docs/design_principles.md",permalink:"/xbuilder-docs/docs/design_principles",editUrl:"https://github.com/project-openubl/xbuilder/edit/master/docs/docs/design_principles.md",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/xbuilder-docs/docs/"},next:{title:"Contributing",permalink:"/xbuilder-docs/docs/contributing"}},s=[{value:"How XBuilder works",id:"how-xbuilder-works",children:[]}],u={rightToc:s};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"You don't have to know UBL standard")," - XBuilder do not require you to know the UBL details, it exposes a set of POJOs that are, internally, transpiled into XML files that follows the UBL standards."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Math operations must be provided out of the box")," - XBuilder executes all math operations required to fill certain values in the XML files. Math operations like taxes, total amounts, discounts, etc. must be executed internally."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Apply default values when possible")," - XBuilder should fill all missing data with default values. XBuilder requires only minimal data.")),Object(i.b)("h2",{id:"how-xbuilder-works"},"How XBuilder works"),Object(i.b)("p",null,"We believe that you should provide as minimal data as possible and then allow XBuilder to do the rest for you. The input data provided by whoever uses XBuilder is not based in UBL but based in common and mainstream bussiness language."))}c.isMDXComponent=!0},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return r?o.a.createElement(f,l(l({ref:t},u),{},{components:r})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);