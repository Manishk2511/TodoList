(this["webpackJsonptodo-lists"]=this["webpackJsonptodo-lists"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/TodoList",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/TodoList",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:"Your title here"};var j=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container bg-light text-dark py-2 px-4",children:[Object(d.jsxs)("h4",{children:[t.title,Object(d.jsx)("button",{style:{float:"right"},className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(d.jsx)("p",{children:t.desc})]}),Object(d.jsx)("hr",{})]})},u=function(e){return Object(d.jsxs)("div",{className:"container",style:{minHeight:"60vh",margin:"40px auto",background:"linear-gradient(160deg,rgba(99, 2, 128, 0.15) 25% ,rgba(0, 0, 255, 0.20) 75%)",border:"2px solid violet"},children:[Object(d.jsx)("h3",{className:"text-center text-light",style:{margin:"20px"},children:"Todos List "}),0===e.todos.length?"No Todos to display":e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light text-center py-3",children:Object(d.jsx)("p",{className:"text-center ",children:"Copyright \xa9 ManishSalvi.com"})})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],j=i[1];return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&b?(t(s,b),o(""),j("")):alert("Title or Description cannot be empty!")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},x=function(){return Object(d.jsxs)("div",{className:"container bg-dark text-light py-3",style:{minHeight:"80vh",margin:"10px auto"},children:[Object(d.jsx)("h3",{className:"text-center my-4",children:"About page"}),Object(d.jsx)("p",{style:{margin:"10px",padding:"20px",textAlign:"center"},children:"A simple react app to create your daily todo list and manage it easily without any need to download it on your mobile. Enjoy :p"})]})},g=n(2);var O=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete",e),j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[n])),console.log(n)},c=Object(a.useState)(e),s=Object(l.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"My Todos List",searchBar:!1}),Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/TodoList",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addTodo:n}),Object(d.jsx)(u,{todos:o,onDelete:t})]})}}),Object(d.jsx)(g.a,{exect:!0,path:"/about",render:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{})})},children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(h,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.7ce7627e.chunk.js.map