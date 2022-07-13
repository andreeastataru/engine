"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4092],{6164:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(3289);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1933:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=t(3830),a=t(2056),i=(t(3289),t(6164)),l=["components"],o={id:"cli",title:"@c11/engine.cli",sidebar_label:"@c11/engine.cli"},c=void 0,p={unversionedId:"packages/cli",id:"packages/cli",title:"@c11/engine.cli",description:"Engine provides a convenient CLI to work with engine apps. It can be installed globally or used with npx.",source:"@site/docs/packages/cli.md",sourceDirName:"packages",slug:"/packages/cli",permalink:"/engine/docs/packages/cli",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/packages/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"@c11/engine.cli",sidebar_label:"@c11/engine.cli"},sidebar:"docs",previous:{title:"Modules",permalink:"/engine/docs/modules/engine"},next:{title:"@c11/engine.service-web",permalink:"/engine/docs/packages/service-web"}},s={},u=[{value:"Commands",id:"commands",level:2},{value:"<code>engine create &lt;my-app&gt;</code>",id:"engine-create-my-app",level:3},{value:"Options",id:"options",level:4}],m={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Engine provides a convenient CLI to work with engine apps. It can be installed globally or used with ",(0,i.kt)("inlineCode",{parentName:"p"},"npx"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @c11/engine.cli\n")),(0,i.kt)("p",null,"Running above command will make ",(0,i.kt)("inlineCode",{parentName:"p"},"engine")," command available in your terminal."),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("h3",{id:"engine-create-my-app"},(0,i.kt)("inlineCode",{parentName:"h3"},"engine create <my-app>")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"engine create")," allow creating new engine applications. For example, running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"engine create my-awesome-application\n")),(0,i.kt)("p",null,"Creates a new directory named ",(0,i.kt)("inlineCode",{parentName:"p"},"my-awesome-application"),", with a simple starter\nengine application with react."),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-t, --template <template-name>")),(0,i.kt)("p",{parentName:"li"},"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"@c11/engine.template-react"),"."),(0,i.kt)("p",{parentName:"li"},"Available templates:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@c11/engine.template-react")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/code11/engine/tree/master/packages/engine.template-react"},"source"))))))}d.isMDXComponent=!0}}]);