(this.webpackJsonpdevpen=this.webpackJsonpdevpen||[]).push([[0],{27:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(9),s=n.n(c),r=n(3),o=(n(16),n(17),n(18),n(19),n(20),n(10)),i=n(11),l=n(8),u=n(1);function j(e){var t=e.language,n=e.displayName,c=e.value,s=e.id,j=e.onChange,d=Object(a.useState)(!0),b=Object(r.a)(d,2),p=b[0],m=b[1];return Object(u.jsxs)("div",{id:s,className:"editor-container ".concat(p?"":"collapsed"),children:[Object(u.jsxs)("div",{className:"editor-title",children:[n,Object(u.jsx)("button",{type:"button",className:"expand-collapse-btn",onClick:function(){return m((function(e){return!e}))},children:Object(u.jsx)(i.a,{icon:p?l.a:l.b})})]}),Object(u.jsx)(o.Controlled,{onBeforeChange:function(e,t,n){j(n)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,theme:"material",lineNumbers:!0}})]})}function d(e,t){var n="codepen-clone-"+e,c=Object(a.useState)((function(){var e=localStorage.getItem(n);return null!=e?JSON.parse(e):"function"===typeof t?t():t})),s=Object(r.a)(c,2),o=s[0],i=s[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[n,o]),[o,i]}var b=function(){var e=d("html",""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=d("css",""),o=Object(r.a)(s,2),i=o[0],l=o[1],b=d("js",""),p=Object(r.a)(b,2),m=p[0],O=p[1],f=Object(a.useState)(""),h=Object(r.a)(f,2),g=h[0],v=h[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){v("\n      <html>\n        <body>".concat(n,"</body>\n        <style>").concat(i,"</style>\n        <script>").concat(m,"<\/script>\n      </html>\n    "))}),250);return function(){return clearTimeout(e)}}),[n,i,m]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"pane top-pane",children:[Object(u.jsx)(j,{language:"xml",displayName:"HTML",value:n,onChange:c,id:"html"}),Object(u.jsx)(j,{language:"css",displayName:"CSS",value:i,onChange:l,id:"css"}),Object(u.jsx)(j,{language:"javascript",displayName:"JS",value:m,onChange:O,id:"js"})]}),Object(u.jsx)("div",{className:"pane",children:Object(u.jsx)("iframe",{srcDoc:g,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})};s.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[27,1,2]]]);