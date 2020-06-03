(this["webpackJsonpform-react-app"]=this["webpackJsonpform-react-app"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),i=n.n(l),c=n(16),o=n(33);n(88);function u(e){return r.a.createElement(o.b,{className:"d-flex list-item-container list-item-color",to:"/"+e.form.id},r.a.createElement("div",null,e.form.id),r.a.createElement("div",null,e.form.title))}var m=n(72),d=n(73),f=n(78),s=n(76),p=n(77),v=n(74),E=n.n(v),g=function(e){Object(f.a)(n,e);var t=Object(s.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(E.a,{showAt:100,speed:1,easing:"easeOutSine"},r.a.createElement(p.a,{className:"arrow-up scroll"}))}}]),n}(r.a.Component),b=(n(61),n(27)),h=n.n(b);var x=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){return function(e){h.a.get("https://form-app-backend.herokuapp.com/api/forms").then((function(t){return e(t.data)})).catch((function(e){return alert(JSON.stringify(e))}))}(l)}),[]),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex list-header"},r.a.createElement("div",null,"\u0634\u0645\u0627\u0631\u0647\u200c\u06cc \u0641\u0631\u0645"),r.a.createElement("div",null,"\u0639\u0646\u0648\u0627\u0646")),n.map((function(e){return r.a.createElement(u,{form:e})})),r.a.createElement(g,null))},O=n(8),j=n(38),k=n(37),y=n(173),N=n(172),C=n(174),S=(n(70),n(75)),V=n.n(S),I=(n(71),function(e){return r.a.createElement(N.a,{disableUnderline:!0,onChange:e.updateValue(e.index,e.field.required),displayEmpty:!0,className:"form-control input "+(e.error?"is-invalid":"")},e.field.options.map((function(e){return r.a.createElement(y.a,{value:e.value},e.label)})))}),q=function(e){return r.a.createElement("input",{type:"text",dir:"rtl",className:"form-control input "+(e.error?"is-invalid":""),id:e.field.name,onChange:e.updateValue(e.index,e.field.required),onFocus:e.checkforError(e.index,e.field.required)})},w=function(e){return r.a.createElement("input",{type:"number",dir:"rtl",className:"form-control input "+(e.error?"is-invalid":""),id:e.field.name,onChange:e.updateValue(e.index,e.field.required),onFocus:e.checkforError(e.index,e.field.required)})},L=function(e){return r.a.createElement(V.a,{locale:"fa",calendarPopperPosition:"bottom",colorPrimary:"#004654",value:e.value,shouldHighlightWeekends:!0,inputPlaceholder:"\u0631\u0648\u06cc \u062a\u0642\u0648\u06cc\u0645 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",inputClassName:"form-control input "+(e.error?"is-invalid":""),onChange:e.updateValue(e.index,e.field.required)})},P=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),l=n[0],i=n[1];return r.a.createElement("div",null,!l&&r.a.createElement("button",{onClick:function(){i(!0)},className:"input map-button form-control "+(e.error?"is-invalid":"")},e.value?"\u062a\u063a\u06cc\u06cc\u0631 \u0627\u0646\u062a\u062e\u0627\u0628":"\u0631\u0648\u06cc \u0646\u0642\u0634\u0647 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"),r.a.createElement(C.a,{open:l,onClose:function(){i(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(F,{google:e.google,index:e.index,initiLocation:e.initiLocation,value:e.value,mapOnClick:e.mapOnClick})))},F=function(e){return r.a.createElement(k.Map,{google:e.google,zoom:15,containerStyle:{width:"80%",height:"60%"},initialCenter:e.value?e.value:e.initiLocation,key:e.index,onClick:e.mapOnClick(e.index),className:"map"},e.value&&r.a.createElement(k.Marker,{key:e.index,position:e.value}))};var J=function(e){var t=e.value,n=e.error,a=e.index,l=e.field,i=e.updateValue,c=e.checkforError,o=e.mapOnClick,u=e.google;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex flex-column "},r.a.createElement("label",{for:l.name},":",l.title),l.options&&l.options.length>0?r.a.createElement(I,{index:a,error:n,field:l,updateValue:i}):"Text"===l.type?r.a.createElement(q,{index:a,error:n,field:l,updateValue:i,checkforError:c}):"Number"===l.type?r.a.createElement(w,{index:a,error:n,field:l,updateValue:i,checkforError:c}):"Date"===l.type?r.a.createElement(L,{index:a,error:n,field:l,updateValue:i,value:t}):"Location"===l.type?r.a.createElement(P,{index:a,error:n,field:l,updateValue:i,value:t,mapOnClick:o,google:u}):void 0)),r.a.createElement("div",{className:"error-message"},n?"\u0644\u0637\u0641\u0627\u064b \u0645\u0642\u062f\u0627\u0631 \u0628\u0627\u0644\u0627 \u0631\u0627 \u067e\u0631 \u06a9\u0646\u06cc\u062f":""))};var A=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyDjs0u02-62FMwrtxMxci5pc6PIubSyW28"})((function(e){var t=Object(O.f)(),n=e.fields?e.fields:[],l=Object(a.useState)({}),i=Object(c.a)(l,2),o=i[0],u=i[1],m=Object(a.useState)({}),d=Object(c.a)(m,2),f=d[0],s=d[1],p=Object(a.useState)({lat:35.80209937653889,lng:51.3935485060881}),v=Object(c.a)(p,2),E=v[0],g=v[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){g({lat:e.coords.latitude,lng:e.coords.longitude})}),(function(e){return console.log(e)}))}),[]);var b=function(e,t){return function(t,n,a){var r=a.latLng.lat(),l=a.latLng.lng(),i=Object(j.a)({},o);i[e]={lat:r,lng:l},u(i)}},x=function(e,t){return function(n){k(e,t)(n);var a=n.target?n.target.value:n,r=Object(j.a)({},o);r[e]=a,u(r)}},k=function(e,t){return function(n){var a=n.target?n.target.value:n,r=Object(j.a)({},f);return r[e]=t&&(!a||""===a),s(r),r[e]}};return r.a.createElement("div",{className:"d-flex flex-column  p-5 m-3 form-container"},n.map((function(t,n){return r.a.createElement(J,{index:n,value:o[n],error:f[n],field:t,updateValue:x,checkforError:k,mapOnClick:b,initiLocation:E,google:e.google})})),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("button",{className:"submit-button",onClick:function(){var a=!0,r=Object(j.a)({},f);if(n.forEach((function(e,t){r[t]=n[t].required&&(!o[t]||""===o[t]),a=a?!r[t]:a})),s(r),a){var l=Object.keys(o).map((function(e,t){return{name:n[e].name,value:o[e]}})),i={};i.FormId=e.formId,i.Fields=l,console.log(JSON.stringify(i)),h.a.post("https://form-app-backend.herokuapp.com/api/forms/submit",i).then((function(){alert("\u0641\u0631\u0645 \u0628\u0627 \u0645\u0648\u0641\u0651\u0642\u06cc\u0651\u062a \u062b\u0628\u062a \u0634\u062f"),t.push("/")})).catch((function(){alert("\u0645\u0634\u06a9\u0644\u06cc \u0631\u062e \u062f\u0627\u062f")}))}}},"\u062b\u0628\u062a")))}));n(141);function M(){var e=Object(O.g)().formId,t=Object(a.useState)([]),n=Object(c.a)(t,2),l=n[0],i=n[1];return Object(a.useEffect)((function(){return function(e,t){h.a.get("https://form-app-backend.herokuapp.com/api/forms/"+t).then((function(t){return e(t.data)})).catch((function(e){return alert(JSON.stringify(e))}))}(i,e)}),[]),r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex list-header"},r.a.createElement("div",null,l.id),r.a.createElement("div",null,l.title)),r.a.createElement("div",{className:"d-flex flex-column m-3 p-3 justify-content-center align-items-center form-card-back"},r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(A,{fields:l.fields,formId:l.id}))))}n(142);var W=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/",component:x}),r.a.createElement(O.a,{exact:!0,path:"/:formId",component:M}))))};i.a.render(r.a.createElement(W,null),document.getElementById("root"))},61:function(e,t,n){},71:function(e,t,n){},83:function(e,t,n){e.exports=n(143)},88:function(e,t,n){}},[[83,1,2]]]);
//# sourceMappingURL=main.98c14b55.chunk.js.map