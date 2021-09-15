(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[827],{4107:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(4387);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8439:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(129),a=t(7489),i=(t(4387),t(4107)),o=["components"],p={id:"usage",title:"Usage",sidebar_label:"Usage"},c={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"Install",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/engine/docs/usage",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/usage.md",version:"current",sidebar_label:"Usage",frontMatter:{id:"usage",title:"Usage",sidebar_label:"Usage"},sidebar:"docs",previous:{title:"Introduction",permalink:"/engine/docs/"},next:{title:"CLI",permalink:"/engine/docs/cli"}},l=[{value:"Install",id:"install",children:[]},{value:"Instantiate",id:"instantiate",children:[]},{value:"Build",id:"build",children:[]}],s={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Fastest way to get started with Engine is by using the Engine\n",(0,i.kt)("a",{parentName:"p",href:"https://code11.github.io/engine/docs/cli"},"CLI"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -g @c11/engine.cli\nengine create my-app\ncd my-app\nnpm start\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"engine create <app-name>")," will setup an npm project with all the dependencies\nrequired for building an engine app installed. Engine itself is built in a\nmodular way in the form of multiple packages. You can read more about the\nEngine packages on ",(0,i.kt)("a",{parentName:"p",href:"packages"},"packages")," page."),(0,i.kt)("h2",{id:"instantiate"},"Instantiate"),(0,i.kt)("p",null,"To create an Engine app, an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," class from\n",(0,i.kt)("inlineCode",{parentName:"p"},"@c11/engine.runtime")," need to be created. This goes in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.ts")," of a\nan app (created with engine CLI):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { engine } from "@c11/engine.runtime";\nimport { render } from "@c11/engine.react";\nimport "./index.css";\nimport App from "./App";\n\nconst app = engine({\n  use: [render(<App />, "#root")],\n});\n\napp.start();\n')),(0,i.kt)("p",null,"Creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," instance takes care of mounting our application. It is\npossible to provide an initial state to it. More about Engine can be found in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/implementations/react"},"API docs for Engine"),"."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"Engine react applications are pretty much written like any other React\napplication, with few differences:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Only functional react components can become Engine ",(0,i.kt)("a",{parentName:"li",href:"/docs/api/view"},"view"),"s"),(0,i.kt)("li",{parentName:"ol"},"React components need to be labeled with ",(0,i.kt)("inlineCode",{parentName:"li"},"view")),(0,i.kt)("li",{parentName:"ol"},'State dependencies of a view are declared in its arguments (also called\n"header" of the view)')),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const greeter: producer = ({\n  name = observe.name,\n  updateGreeting = update.greeting,\n}) => {\n  if (!name) {\n    updateGreeting.set("Bye bye");\n  } else {\n    updateGreeting.set("Hello");\n  }\n};\n\nconst App: view = ({\n  name = observe.name,\n  greeting = observe.greeting,\n  updateName = update.name,\n}) => {\n  return (\n    <>\n      <h1 className="App-header">\n        {greeting} {name}\n      </h1>\n      <input\n        value={name}\n        onChange={(e) => updateName.set(e.currentTarget.value)}\n      />\n    </>\n  );\n};\n\nApp.producers([greeter]);\n\nexport default App;\n')),(0,i.kt)("p",null,"This tiny example demonstrates pretty much all the Engine concepts needed to use\nit!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/view"},"View"),"s can ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/observe"},"observe")," anything from\n",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/state"},"state"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/update"},"update")," anything in the\nstate."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/producer"},"Producer"),"s behave pretty much the same\nway as ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),"s, but don't render anything on screen. Producers are where the\nbusiness logic should live."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/react/setup"},"Quick start")," tutorial has a more involved\nintroduction to building an Engine app."))}u.isMDXComponent=!0},129:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},7489:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})}}]);