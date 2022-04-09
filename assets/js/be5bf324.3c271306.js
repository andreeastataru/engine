"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[208],{6164:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(3289);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,m=c["".concat(i,".").concat(g)]||c[g]||u[g]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3066:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(3830),a=n(2056),r=(n(3289),n(6164)),l=["components"],s={id:"wrapping-up",title:"Wrapping Up",sidebar_label:"Wrapping Up"},i=void 0,d={unversionedId:"tutorials/react/wrapping-up",id:"tutorials/react/wrapping-up",title:"Wrapping Up",description:"We have learned almost all the concepts needed to build Engine apps.",source:"@site/docs/tutorials/react/wrapping-up.md",sourceDirName:"tutorials/react",slug:"/tutorials/react/wrapping-up",permalink:"/engine/docs/tutorials/react/wrapping-up",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/wrapping-up.md",tags:[],version:"current",frontMatter:{id:"wrapping-up",title:"Wrapping Up",sidebar_label:"Wrapping Up"},sidebar:"docs",previous:{title:"State as Communication Channel",permalink:"/engine/docs/tutorials/react/state-as-communication-channel"},next:{title:"Best Practices",permalink:"/engine/docs/best-practices"}},p={},u=[{value:"Clearing completed Todos",id:"clearing-completed-todos",level:2},{value:"Toggling status of all Todos",id:"toggling-status-of-all-todos",level:2},{value:"Removing Todos",id:"removing-todos",level:2}],c={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have learned almost all the concepts needed to build Engine apps."),(0,r.kt)("p",null,"Let's wrap up by finishing our Todos app. Three last UI elements that left\nputting life in are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clearing completed Todos"),(0,r.kt)("li",{parentName:"ol"},"Toggling status of all Todos"),(0,r.kt)("li",{parentName:"ol"},'Removing a todo item when "X" button in ',(0,r.kt)("inlineCode",{parentName:"li"},"Todo")," is clicked")),(0,r.kt)("p",null,"All these operations will follow the principles seen so far in the tutorial. A\n",(0,r.kt)("inlineCode",{parentName:"p"},"view")," will accept user's input, and store it in view agnostic manner in the\nglobal state, a ",(0,r.kt)("inlineCode",{parentName:"p"},"producer")," will get triggered and perform the actual operation."),(0,r.kt)("h2",{id:"clearing-completed-todos"},"Clearing completed Todos"),(0,r.kt)("p",null,"Since removing Todo's is a new operation (i.e isn't an instance of deriving our\nstate to shape it differently), the producer responsible for it is kept closer\nto the view that will trigger the producer."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Footer.tsx"),', add a click event listener for "Clear Completed" todos\nbutton. The view is going to use state as a communication channel to trigger the\nproducer (as discussed in ',(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/react/state-as-communication-channel"},"last\nchapter"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'const Footer: view = ({\n  pendingCount = observe.pendingCount,\n  filter = observe.filter,\n  updateFilter = update.filter,\n+ updateClearRequest = update.clearRequest\n}) => (\n...\n-     <button className="clear-completed">Clear completed</button>\n+     <button\n+       className="clear-completed"\n+       onClick={() => updateClearRequest.set(new Date().getTime())}\n+     >\n        Clear completed\n    </button>\n')),(0,r.kt)("p",null,"A new path has been introduced in the state (",(0,r.kt)("inlineCode",{parentName:"p"},"clearRequest"),"), which will contain\na value when a clear operation need to be performed. In same file (i.e\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/Footer.tsx"),"), add a new producer which performs the actual operation of\nclearing completed todos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleClearRequest: producer = ({\n  clearRequest = observe.clearRequest,\n  updateClearRequest = update.clearRequest,\n  getTodosById = get.todosById,\n  updateTodosById = update.todosById,\n}) => {\n  if (!clearRequest) {\n    return;\n  }\n\n  const todosById = getTodosById.value();\n  const nextTodos = Object.values(todosById)\n    .filter((todo: any) => todo.status !== TodoStatuses.done)\n    .reduce((accum: any, todo: any) => {\n      accum[todo.id] = todo;\n\n      return accum;\n    }, {});\n\n  updateTodosById.set(nextTodos);\n  updateClearRequest.set(null);\n};\n")),(0,r.kt)("p",null,"Add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"Footer"),"'s producers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"-Footer.producers([pendingCounter]);\n+Footer.producers([pendingCounter, handleClearRequest]);\n")),(0,r.kt)("p",null,"Notice how ",(0,r.kt)("inlineCode",{parentName:"p"},"handleClearRequest")," producer is changing the value that acts as its\ntrigger, practically resetting it. This is also a common pattern in Engine apps."),(0,r.kt)("h2",{id:"toggling-status-of-all-todos"},"Toggling status of all Todos"),(0,r.kt)("p",null,'Similarly, to toggle status of all Todos, create a new path in state to when the\n"Toggle All" checkbox is clicked, and a producer that gets triggered to do the\nactual work.'),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),", store the value in state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'- const App: view = ({ todoIds = observe.visibleTodoIds }) => (\n+ const App: view = ({\n+   pendingCount = observe.pendingCount,\n+   todoIds = observe.visibleTodoIds,\n+   updateToggleAllRequest = update.toggleAllRequest\n+ }) => (\n...\n-       <input id="toggle-all" className="toggle-all" type="checkbox" />\n+       <input\n+         id="toggle-all"\n+         className="toggle-all"\n+         type="checkbox"\n+         checked={pendingCount === 0}\n+         onChange={() => updateToggleAllRequest.set(new Date().getTime())}\n+       />\n')),(0,r.kt)("p",null,"Add a new producer ",(0,r.kt)("inlineCode",{parentName:"p"},"handleToggleAllRequest"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const handleToggleAllRequest: producer = ({\n  toggleAllRequest = observe.toggleAllRequest,\n  updateToggleAllRequest = update.toggleAllRequest,\n  getTodosById = get.todosById,\n  getPendingCount = get.pendingCount,\n  updateTodosById = update.todosById,\n}) => {\n  if (!toggleAllRequest) {\n    return;\n  }\n\n  const todosById = getTodosById.value() as TodosById;\n  const pendingCount = getPendingCount.value();\n\n  const nextTodos = Object.values(todosById)\n    .map((todo) => {\n      return {\n        ...todo,\n        status: pendingCount !== 0 ? TodoStatuses.done : TodoStatuses.pending,\n      };\n    })\n    .reduce((accum, todo) => {\n      accum[todo.id] = todo;\n\n      return accum;\n    }, {} as TodosById);\n\n  updateTodosById.set(nextTodos);\n  updateToggleAllRequest.set(null);\n};\n")),(0,r.kt)("p",null,"Add it to ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),"'s producers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"- App.producers([syncVisibleTodoIds]);\n+ App.producers([syncVisibleTodoIds, handleToggleAllRequest]);\n")),(0,r.kt)("h2",{id:"removing-todos"},"Removing Todos"),(0,r.kt)("p",null,"Check out the documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/update"},"update"),", and try to implement\nthis feature by yourself \ud83d\ude42"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"src/Todo/View.tsx"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'-       <button className="destroy" />\n+       <button className="destroy" onClick={() => updateTodo.remove()} />\n'))))}g.isMDXComponent=!0}}]);