(this["webpackJsonpphonebook-v2"]=this["webpackJsonpphonebook-v2"]||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),i=t(14),l=t(3),s=t.n(l),m="/api/persons",f=function(){return s.a.get(m).then((function(e){return e.data}))},d=function(e){return s.a.post(m,e).then((function(e){return e.data}))},h=function(e){return s.a.delete(m+"/".concat(e)).then((function(e){return e.data}))},p=function(e){return s.a.put(m+"/".concat(e.id),e).then((function(e){return e.data}))},E=function(e){var n=e.persons,t=e.setPersons,c=e.setMsg,u=Object(a.useState)(""),l=Object(o.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(""),h=Object(o.a)(f,2),E=h[0],b=h[1],v=function(e,n){n(e.target.value)};return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),s.length>0){var a={name:s,number:E};0===n.length||function(e){return n.every((function(n){return n.name!==e.name}))}(a)?(d(a).then((function(e){t(n.concat(e))})).catch((function(e){c("Error: ".concat(e)),setTimeout((function(){c(null)}),5e3)})),c("".concat(a.name," added")),setTimeout((function(){c(null)}),3e3),m(""),b("")):window.confirm("".concat(a.name," already exists, replace old number with new one?"))&&(n.forEach((function(e){e.name===a.name&&(a.id=e.id)})),p(a).then((function(e){var a=Object(i.a)(n);a.map((function(n){n.id===e.id&&(n.name=e.name,n.number=e.number)})),t(a)})).catch((function(e){c("Error: ".concat(e)),setTimeout((function(){c(null)}),5e3)})),c("".concat(a.name," number updated")),setTimeout((function(){c(null)}),3e3))}}},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:s,onChange:function(e){return v(e,m)}}),"Number: ",r.a.createElement("input",{value:E,onChange:function(e){return v(e,b)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},b=function(e){var n=e.entry,t=e.setPersons,a=e.setMsg;return r.a.createElement("li",{key:n.id},n.name," : ",n.number," ","   ",r.a.createElement("button",{onClick:function(e){if(console.log(n.id),window.confirm("Want to delete ".concat(n.name,"?"))){var r=n.id;e.preventDefault(),h(r).catch((function(e){a("Error deleting contact"),setTimeout((function(){a(null)}),5e3)})),f().then((function(e){t(e)})).catch((function(e){a("Error updating persons after deletion"),setTimeout((function(){a(null)}),5e3)})),a("".concat(n.name," deleted")),setTimeout((function(){a(null)}),3e3)}}},"delete"))},v=function(e){var n=e.persons,t=e.setPersons,a=e.searched,c=e.setMsg;return r.a.createElement("ul",null,function(){var e=[];return n.forEach((function(n){var t=new String(n.name).toUpperCase(),r=new String(a).toUpperCase();t.includes(r)&&e.push(n)})),e}().map((function(e){return function(e,n,t){return r.a.createElement(b,{key:e.id,entry:e,setPersons:n,setMsg:t})}(e,t,c)})))},g=function(e){var n=e.searched,t=e.setSearched;return r.a.createElement("form",null,r.a.createElement("div",null,"Search: ",r.a.createElement("input",{value:n,onChange:function(e){return function(e,n){n(e.target.value)}(e,t)}})))},j=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},O=function(){Object(a.useEffect)((function(){f().then((function(e){c(e)})).catch((function(e){p("Error reading from db"),setTimeout((function(){p(null)}),5e3)}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),l=i[0],s=i[1],m=Object(a.useState)(null),d=Object(o.a)(m,2),h=d[0],p=d[1];return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(j,{message:h}),r.a.createElement(g,{searched:l,setSearched:s}),r.a.createElement("h3",null,"Add new contact"),r.a.createElement(E,{persons:t,setPersons:c,setMsg:p}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{persons:t,setPersons:c,searched:l,setMsg:p}))};t(37);u.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7f09ace7.chunk.js.map