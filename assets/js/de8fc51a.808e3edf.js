"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7131],{6164:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(3830),a=n(2056),o=(n(3289),n(6164)),i=["components"],p={id:"param",title:"param",sidebar_label:"param"},c=void 0,l={unversionedId:"api/param",id:"api/param",title:"param",description:"Overview",source:"@site/docs/api/param.md",sourceDirName:"api",slug:"/api/param",permalink:"/engine/docs/api/param",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/param.md",tags:[],version:"current",frontMatter:{id:"param",title:"param",sidebar_label:"param"},sidebar:"docs",previous:{title:"arg",permalink:"/engine/docs/api/arg"},next:{title:"wildcard",permalink:"/engine/docs/api/wildcard"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"param")," allow using runtime values from the view/producer to create new paths."),(0,o.kt)("p",null,"Occasionally, a ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," need to access a path in state, which\ndepends on a value which is created in the producer itself. ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," is the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/path-composition"},"path-composition")," operator to use in such\nsituations."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"update.*")," functions can be given an object in their second\nargument. Every key in this object can then be referred to with ",(0,o.kt)("inlineCode",{parentName:"p"},"param.<key>")," in\nthe header"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const App: view = ({\n  update = update.items[param.foo][param.bar]\n}) => (\n  <input onChange={e => update(e.target.value,\n    { foo: 'state_path', bar: 'yet_another_state_path' }\n  )}>\n);\n")),(0,o.kt)("p",null,"It allows moving a lot of complexity of accessing and setting of state, to the\npath structure; without needing any intermediate state in the view/producer\nitself."))}d.isMDXComponent=!0}}]);