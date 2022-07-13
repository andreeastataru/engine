"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[680],{6164:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(3830),o=n(2056),r=(n(3289),n(6164)),i=["components"],s={id:"state",title:"State",sidebar_label:"State"},c=void 0,l={unversionedId:"concepts/state",id:"concepts/state",title:"State",description:"Purpose of every software is to solve some real world problem. Data used to",source:"@site/docs/concepts/state.md",sourceDirName:"concepts",slug:"/concepts/state",permalink:"/engine/docs/concepts/state",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/concepts/state.md",tags:[],version:"current",frontMatter:{id:"state",title:"State",sidebar_label:"State"},sidebar:"docs",previous:{title:"Best Practices",permalink:"/engine/docs/best-practices"},next:{title:"Path Composition",permalink:"/engine/docs/concepts/path-composition"}},p={},u=[{value:"Shape of State",id:"shape-of-state",level:2},{value:"Initial state",id:"initial-state",level:2},{value:"State as a communication channel",id:"state-as-a-communication-channel",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Purpose of every software is to solve some real world problem. Data used to\nrepresent the objects involved in the problem and the solution, are sometimes\ncalled ",(0,r.kt)("strong",{parentName:"p"},"Domain Objects"),"."),(0,r.kt)("p",null,"Every UI is just a representation of some data. Its purpose is to show this\ndata, and enable the user to intuitively make sense of, and change it. This data\nthat UI stores, operates on and represents, is called its ",(0,r.kt)("strong",{parentName:"p"},"State"),". A part of\nthe state is made up of Domain objects, and is refereed to as ",(0,r.kt)("strong",{parentName:"p"},"essential\nstate"),". Rest of the state is needed by the UI itself, and is called\n",(0,r.kt)("strong",{parentName:"p"},"incidental state"),'. e.g storage of Todo items in a todo app is essential\nstate; data like which filter is active makes the incidental (also sometimes\ncalled "accidental") state.'),(0,r.kt)("p",null,"Engine strongly recommends keeping a single source of truth for an application's\nstate. State of the app when it has just started up (aka initial state) can be\ngiven when it is instantiated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import { engine } from "@c11/engine.runtime";\n\nconst app = engine({\n  state: {\n    initial: { }\n  },\n  view: {\n    element: <App />,\n    root: "#root"\n  }\n});\n\napp.start()\n')),(0,r.kt)("h2",{id:"shape-of-state"},"Shape of State"),(0,r.kt)("p",null,"Careful consideration must be given for what the shape of the state is going to\nbe. Engine recommends storing our domain objects in some sort of indexed data\nstructure (e.g an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"), which allow instant access to any domain object\nusing just its identifier. Through ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/path-composition"},"path\ncomposition"),", Engine provides a unique way to\nvery efficiently utilize such structure."),(0,r.kt)("p",null,"Domain objects often cross boundaries of different components of a software\nproduct. For example, going from database to a backend application, to a\nserialized form for network transfer (e.g JSON), to UIs. It is advisable to keep\nthem in a consistent representation across different components of our system.\nDoing so builds intuition and confidence in the system."),(0,r.kt)("h2",{id:"initial-state"},"Initial state"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Initial state")," is the state with which an application is going to start.\nUsually we define some defaults for many of our state data in initial state."),(0,r.kt)("h2",{id:"state-as-a-communication-channel"},"State as a communication channel"),(0,r.kt)("p",null,"Engine producers work in complete isolation, and cannot communicate with each\nother. Only way for two producers to talk to each other is through state. For\nexample, when producers need to share references (to streams, XHR objects, DOM\nnodes etc)."))}f.isMDXComponent=!0}}]);