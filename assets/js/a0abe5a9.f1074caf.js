"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5952],{6164:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return g}});var n=r(3289);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1616:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(3830),a=r(2056),o=(r(3289),r(6164)),i=["components"],p={id:"arg",title:"arg",sidebar_label:"arg"},l=void 0,c={unversionedId:"api/arg",id:"api/arg",title:"arg",description:"Overview",source:"@site/docs/api/arg.md",sourceDirName:"api",slug:"/api/arg",permalink:"/engine/docs/api/arg",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/arg.md",tags:[],version:"current",frontMatter:{id:"arg",title:"arg",sidebar_label:"arg"},sidebar:"docs",previous:{title:"prop",permalink:"/engine/docs/api/prop"},next:{title:"param",permalink:"/engine/docs/api/param"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2}],d={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arg")," allows referring to other arguments in the header of a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/view"},"view"),". It makes it possible\nto treat other keys of the header object as local variables. All of the\nfollowing are valid uses of ",(0,o.kt)("inlineCode",{parentName:"p"},"arg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"        const result: producer = ({\n          a1 = '123',\n          a2 = arg.a1,            // Access previously defined argument\n          a3 = arg.b1.b2.b3.b4    // Access nested properties of another arg\n          a4 = arg.a2[arg.a1],    // Dynamically access argument properties based on other arg\n          a5 = arg.a3[prop.foo],  // Dynamically access argument properties based on other Engine operators\n        }) => { }\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"If we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItem")," component which accepts a single arg ",(0,o.kt)("inlineCode",{parentName:"p"},"id: string"),", and\nglobal state which looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  todosById: {\n    todo1: { title: "My first todo" }\n  },\n  tagsByTitle: {\n    "My first todo": ["tag1", "tag2"]\n  }\n}\n')),(0,o.kt)("p",null,"It is possible to access tags for the Todo with ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", by composing path using\n",(0,o.kt)("inlineCode",{parentName:"p"},"arg"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const TodoItem: view = ({\n  title: observe.todosById[prop.id],\n  tags: observe.tagsByTitle[arg.title]\n}) => { ... }\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"TodoItem")," will have access to ",(0,o.kt)("inlineCode",{parentName:"p"},'tags = ["tag1", "tag2"]'),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arg")," is also very useful with combined with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/wildcard"},"wildcard")))}g.isMDXComponent=!0}}]);