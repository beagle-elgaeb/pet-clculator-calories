(this.webpackJsonpcalories=this.webpackJsonpcalories||[]).push([[0],{201:function(e,t,n){"use strict";n.r(t);n(89),n(90);var i=n(0),r=n(40),a=n.n(r),o=n(7),c=n(14),l=n(6),s=n(2),d=n(3),p=n(26),b=["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"];function u(e){return b[e.getMonth()]}var x,h,g,j,f,O=Object(p.b)({name:"meal",initialState:[],reducers:{loadStateMeals:function(e,t){return t.payload},addMeal:function(e,t){var n=t.payload,i=new Date(Date.now());e.unshift({id:Date.now(),protein:Math.round(n.protein*n.weight)/100,fat:Math.round(n.fat*n.weight)/100,carb:Math.round(n.carb*n.weight)/100,weight:n.weight,calories:n.calories,date:"".concat(i.getDate().toString()," ").concat(u(i))})},remove:function(e,t){var n=t.payload,i=e.findIndex((function(e){return e.id===n.id}));-1!==i&&e.splice(i,1)}}}),m=O.actions,v=m.loadStateMeals,w=m.addMeal,y=m.remove,k=O.reducer,z=Object(p.b)({name:"profile",initialState:{},reducers:{loadStateProfile:function(e,t){return t.payload},saveProfile:function(e,t){var n=t.payload;e.name=n.name,e.age=n.age,e.stature=n.stature,e.weight=n.weight,e.sex=n.sex,e.activityLevel=n.activityLevel,e.purpose=n.purpose,e.baseMetabolism=n.baseMetabolism,e.purposeMetabolism=n.purposeMetabolism}}}),q=z.actions,V=q.loadStateProfile,C=q.saveProfile,M=z.reducer,S="#f3c700",N="#9E8100",L="#9D4DD0",F="#ffffff",P="#fcfbff",E="#d9cfff",B="#3f23a6",D=n(27),I=n(24),K=Object(I.a)(x||(x=Object(D.a)(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 0;\n"]))),J=Object(I.a)(j||(j=Object(D.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  row-gap: 10px;\n"]))),T=Object(I.a)(f||(f=Object(D.a)(["\n  transition: all 0.2s ease-out;\n  cursor: pointer;\n"]))),A=n(1);var R=function(){return Object(A.jsxs)(_,{children:["(2021)",Object(A.jsx)(G,{href:"https://github.com/beagle-elgaeb",target:"_blank","aria-label":"\u041c\u043e\u0439 \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439",children:"\xa9 \u041d\u0438\u043a\u043e\u043d\u043e\u0432\u0430 \u0415\u0432\u0433\u0435\u043d\u0438\u044f"})]})},_=Object(s.a)("footer",{target:"e1at0hrd1"})(K,";font-size:14px;line-height:16px;font-weight:300;margin:0 auto;"),G=Object(s.a)("a",{target:"e1at0hrd0"})("text-decoration:none;margin:0 0 0 30px;:hover{opacity:0.8;}",T,";");var H=function(e){var t=e.onMenuClick,n=e.popupOpened;return Object(A.jsxs)(Q,{children:[Object(A.jsx)(U,{to:"/",visible:n,children:Object(A.jsx)(W,{})}),Object(A.jsxs)(Y,{children:[Object(A.jsx)(X,{children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u0439"}),Object(A.jsx)(X,{children:"\u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(A.jsx)(X,{children:" \u043a\u0430\u043b\u043e\u0440\u0438\u0439"})]}),Object(A.jsx)(Z,{type:"button",onClick:t,"aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e"})]})},Q=Object(s.a)("header",{target:"e2r19ov5"})(K,";display:flex;justify-content:space-between;align-items:flex-start;border-bottom:1px solid ",S,";"),U=Object(s.a)(c.b,{target:"e2r19ov4"})("height:19px;width:22px;display:block;",(function(e){return e.visible?"visibility: hidden":"visibility: visible"}),";background:",S,";border:2px solid ",B,";border-top-left-radius:6px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:6px;transition:all 0.2s ease-out;:hover{margin:2px 0 0 0;}",T,";"),W=Object(s.a)("div",{target:"e2r19ov3"})("height:19px;width:19px;box-sizing:border-box;background:radial-gradient(circle, ",L," 0%, ",S," 50%);border:2px solid ",L,";border-radius:99em;margin:auto;"),X=Object(s.a)("h1",{target:"e2r19ov2"})("font-size:20px;line-height:22px;font-weight:400;color:",S,";text-shadow:0 1px 1px ",B,";margin:0;"),Y=Object(s.a)("div",{target:"e2r19ov1"})(""),Z=Object(s.a)("button",{target:"e2r19ov0"})("height:19px;width:22px;background:linear-gradient(\n    180deg,\n    ",N," 0,\n    ",N," 3px,\n    ",F," 3px,\n    ",F," 8px,\n    ",B," 8px,\n    ",B," 11px,\n    ",F," 11px,\n    ",F," 16px,\n    ",N," 16px,\n    ",N," 19px\n  );border:none;outline:none;margin:0;:hover{margin:2px 0 0 0;}",T,";"),$=n(10),ee=n(46);function te(e){var t=String(e),n=Number(t[Number(t.length)-2]),i=Number(t[Number(t.length)-1]);return 1===i?n&&1===n?"\u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439":"\u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u044e":2===i||3===i||4===i?n&&1===n?"\u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439":"\u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0438":"\u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439"}var ne=n(11),ie=ne.a().nullable().max(100,"?").positive("?").required("?"),re=ne.b({protein:ie,fat:ie,carb:ie,weight:ne.a().max(1e3,"?").positive("?").required("?")}),ae=ne.b({name:ne.c().required("?").max(30,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u043e\u0435 \u0438\u043c\u044f"),age:ne.c().required("?"),stature:ne.c().required("?"),weight:ne.c().required("?"),sex:ne.c().required("?"),activityLevel:ne.c().required("?")});var oe=function(){var e=Object(o.b)(),t=Object(i.useState)(0),n=Object(l.a)(t,2),r=n[0],a=n[1],c=Object(ee.a)({initialValues:{protein:null,fat:null,carb:null,weight:100},validationSchema:re,onSubmit:function(t,n){var i=n.resetForm;e(w(Object($.a)(Object($.a)({},t),{},{calories:r}))),i()}}),s=c.values,d=s.protein,p=s.fat,b=s.carb,u=s.weight,x=function(e){return c.touched[e]?c.errors[e]:void 0};function h(e){("-"===e.key||Number(e.currentTarget.value)>99.99||"0"===e.currentTarget.value&&/^[0]/.test(e.key))&&e.preventDefault()}return Object(i.useEffect)((function(){a(function(e){var t=0;if(Object.values(e).includes(null))return t;var n=e.weight/100,i=4*e.protein+9*e.fat+4*e.carb;return Math.round(i*n)}(c.values))}),[c.values]),Object(A.jsxs)(ce,{onSubmit:c.handleSubmit,children:[Object(A.jsx)(le,{children:"\u0411\u0416\u0423 \u043d\u0430 100 \u0433\u0440\u0430\u043c\u043c:"}),Object(A.jsxs)(se,{children:[Object(A.jsxs)(de,{children:[Object(A.jsx)(be,{placeholder:"\u0435\u043b\u043a\u0438",name:"protein",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:h,isValid:!x("protein"),value:null!==d&&void 0!==d?d:"",onChange:c.handleChange,onBlur:c.handleBlur,autoComplete:"off"}),Object(A.jsx)(pe,{fullness:!!d,isValid:!x("protein"),children:d?"\u0411\u0435\u043b\u043a\u0438":"\u0411"}),Object(A.jsx)(ue,{isValid:!x("protein"),children:x("protein")})]}),Object(A.jsxs)(de,{children:[Object(A.jsx)(be,{placeholder:"\u0438\u0440\u044b",name:"fat",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:h,isValid:!x("fat"),value:null!==p&&void 0!==p?p:"",onChange:c.handleChange,onBlur:c.handleBlur,autoComplete:"off"}),Object(A.jsx)(pe,{fullness:!!p,isValid:!x("fat"),children:p?"\u0416\u0438\u0440\u044b":"\u0416"}),Object(A.jsx)(ue,{isValid:!x("fat"),children:x("fat")})]}),Object(A.jsxs)(de,{children:[Object(A.jsx)(be,{placeholder:"\u0433\u043b\u0435\u0432\u043e\u0434\u044b",name:"carb",type:"number",min:"0",max:"100",step:"0.01",onKeyPress:h,isValid:!x("carb"),value:null!==b&&void 0!==b?b:"",onChange:c.handleChange,onBlur:c.handleBlur,autoComplete:"off"}),Object(A.jsx)(pe,{fullness:!!b,isValid:!x("carb"),children:b?"\u0423\u0433\u043b\u0435\u0432\u043e\u0434\u044b":"\u0423"}),Object(A.jsx)(ue,{isValid:!x("carb"),children:x("carb")})]})]}),Object(A.jsx)(le,{children:"\u0412\u0435\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430:"}),Object(A.jsxs)(de,{children:[Object(A.jsx)(be,Object($.a)(Object($.a)({placeholder:"\u0440\u0430\u043c\u043c",type:"number",min:"0",max:"1000",step:"0.01",onKeyPress:h,onFocus:function(){return c.setFieldValue("weight","")},isValid:!x("weight")},c.getFieldProps("weight")),{},{autoComplete:"off"})),Object(A.jsx)(pe,{fullness:!!u,isValid:!x("weight"),children:u?"\u0413\u0440\u0430\u043c\u043c\u044b":"\u0413"}),Object(A.jsx)(ue,{isValid:!x("weight"),children:x("weight")})]}),Object(A.jsx)(xe,{type:"submit","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c",disabled:!c.isValid,children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ".concat(0===r?"\u043d\u0435\u043c\u043d\u043e\u0433\u043e \u043a\u0438\u043b\u043e\u043a\u0430\u043b\u043e\u0440\u0438\u0439":"".concat(r," ").concat(te(r)))})]})},ce=Object(s.a)("form",{target:"exd97tv7"})({name:"1d3w5wq",styles:"width:100%"}),le=Object(s.a)("h2",{target:"exd97tv6"})({name:"jgum84",styles:"font-size:12px;line-height:14px;font-weight:300;text-align:start;margin:0 0 15px"}),se=Object(s.a)("div",{target:"exd97tv5"})({name:"7h3c47",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:10px"}),de=Object(s.a)("div",{target:"exd97tv4"})({name:"9g6cng",styles:"height:40px;width:100%;position:relative;margin:0 0 10px"}),pe=Object(s.a)("p",{target:"exd97tv3"})((function(e){var t=e.fullness,n=e.isValid;return Object(I.a)(h||(h=Object(D.a)(["\n  width: ",";\n  position: absolute;\n  top: ",";\n  left: ",";\n  background: ",";\n  border-top: ",";\n  font-size: ",";\n  line-height: ",";\n  text-align: right;\n  margin: 0;\n  padding: ",";\n"])),t?"fit-content":"24px",t?"-6px":"8px",t?"5px":"1px",P,t?n?"none":"1px solid ".concat(S):"none",t?"10px":"20px",t?"12px":"22px",t?"0 10px":"0")}),";"),be=Object(s.a)("input",{target:"exd97tv2"})((function(e){var t=e.isValid;return Object(I.a)(g||(g=Object(D.a)(["\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ",";\n  border: ",";\n  border-radius: 5px;\n  outline: none;\n  font-size: 18px;\n  line-height: 20px;\n  color: ",";\n  padding: 0 10px 0 25px;\n\n  ::placeholder {\n    font-size: 18px;\n    line-height: 20px;\n    font-weight: 200;\n    color: ",";\n  }\n\n  :focus {\n    border: 1px solid ",";\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"])),P,t?"none":"1px solid ".concat(S),B,E,E)}),";"),ue=Object(s.a)("div",{target:"exd97tv1"})("position:absolute;bottom:-6px;right:10px;background:",P,";border-bottom:",(function(e){return e.isValid?"none":"1px solid ".concat(S)}),";font-size:12px;line-height:14px;color:",S,";padding:0 10px;"),xe=Object(s.a)("button",{target:"exd97tv0"})("height:36px;width:100%;box-sizing:border-box;background:",P,";border:1px solid ",E,";border-radius:5px;outline:none;font-size:18px;line-height:20px;color:",(function(e){var t=e.disabled;return"".concat(t?E:B)}),";margin:60px 0;:hover{box-shadow:0 0 5px 1px ",E,";}",T,";"),he=n(42);var ge=function(e){var t=e.date,n={},i=Object(o.c)((function(e){return e.meals})).filter((function(e){return e.date===t})),r=0,a=0,c=0,l=0,s=0;i.forEach((function(e){r+=e.calories,a+=e.protein,c+=e.fat,l+=e.carb,s+=e.weight})),n=Object($.a)(Object($.a)({},n),{},Object(he.a)({},t,i));var d=Object(o.b)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(je,{children:n[t].map((function(e,t){return Object(A.jsxs)(fe,{children:[Object(A.jsx)(Oe,{children:Object(A.jsx)(ye,{type:"button",onClick:function(){return function(e){d(y({id:e.id}))}(e)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0440\u0438\u0451\u043c \u043f\u0438\u0449\u0438"})}),Object(A.jsx)(Oe,{children:e.protein}),Object(A.jsx)(Oe,{children:e.fat}),Object(A.jsx)(Oe,{children:e.carb}),Object(A.jsx)(Oe,{children:e.calories})]},t)}))}),Object(A.jsxs)(me,{children:[Object(A.jsxs)(ve,{children:[Math.round(s)," \u0433."]}),Object(A.jsx)(ve,{children:Math.round(a)}),Object(A.jsx)(ve,{children:Math.round(c)}),Object(A.jsx)(ve,{children:Math.round(l)}),Object(A.jsx)(we,{children:r})]})]})},je=Object(s.a)("div",{target:"ejidmar6"})({name:"ti75j2",styles:"margin:0"}),fe=Object(s.a)("div",{target:"ejidmar5"})(J," justify-items:start;padding:0 0 6px 0;:last-child{padding:0;}"),Oe=Object(s.a)("div",{target:"ejidmar4"})("width:100%;border-right:1px solid ",E,";font-size:14px;line-height:16px;font-weight:300;margin:0;:last-child{border-right:none;}"),me=Object(s.a)("div",{target:"ejidmar3"})(J," justify-items:center;padding:15px 0 0;"),ve=Object(s.a)("div",{target:"ejidmar2"})("width:100%;border-right:1px solid ",E,";font-size:16px;line-height:18px;font-weight:500;color:",L,";margin:0;:last-child{border-right:none;}"),we=Object(s.a)(ve,{target:"ejidmar1"})("color:",N,";"),ye=Object(s.a)("button",{target:"ejidmar0"})("height:13px;width:13px;background:linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0) 0,\n      rgba(255, 255, 255, 0) 8px,\n      ",N," 8px,\n      ",N," 10px,\n      rgba(255, 255, 255, 0) 10px,\n      rgba(255, 255, 255, 0) 18px\n    ),linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0) 0,\n      rgba(255, 255, 255, 0) 8px,\n      ",N," 8px,\n      ",N," 10px,\n      rgba(255, 255, 255, 0) 10px,\n      rgba(255, 255, 255, 0) 18px\n    );border:none;border-radius:2px;outline:none;margin:0 auto;:hover{transform:rotate(10deg);}",T,";");var ke=function(){var e=Object(o.c)((function(e){return e.meals})),t=Array.from(new Set(e.map((function(e){return e.date}))));return Object(A.jsx)(ze,{children:t.map((function(e,t){return Object(A.jsxs)(qe,{children:[Object(A.jsx)(Ve,{children:e}),Object(A.jsxs)(Ce,{children:[Object(A.jsx)(Me,{children:""}),Object(A.jsx)(Me,{children:"\u0431"}),Object(A.jsx)(Me,{children:"\u0436"}),Object(A.jsx)(Me,{children:"\u0443"}),Object(A.jsx)(Me,{children:"\u043a"})]}),Object(A.jsx)(ge,{date:e})]},t)}))})},ze=Object(s.a)("div",{target:"e1u3uqfb4"})({name:"ti75j2",styles:"margin:0"}),qe=Object(s.a)("div",{target:"e1u3uqfb3"})("position:relative;border:1px solid ",E,";border-radius:5px;margin:20px 0;padding:30px 10px;"),Ve=Object(s.a)("h3",{target:"e1u3uqfb2"})("position:absolute;top:-12px;left:10px;background:",F,";font-size:20px;line-height:22px;font-weight:400;color:",S,";text-shadow:0 1px 1px ",B,";margin:0;padding:0 10px;"),Ce=Object(s.a)("div",{target:"e1u3uqfb1"})(J," justify-items:center;margin:0 0 15px;"),Me=Object(s.a)("div",{target:"e1u3uqfb0"})("width:100%;border-right:1px solid ",E,";font-weight:600;margin:0;:last-child{border-right:none;}");var Se=function(){return Object(A.jsxs)(Ne,{children:[Object(A.jsx)(oe,{}),Object(A.jsx)(ke,{})]})},Ne=Object(s.a)("main",{target:"efj9os80"})(K,";border-top:1px solid ",E,";"),Le=[{value:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430",span:"",text:"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"},{value:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430",span:"",text:"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"}],Fe=[{value:"1.2",span:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439",text:"\u0421\u0438\u0434\u044f\u0447\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 / \u0443\u0447\u0451\u0431\u0430 \u0438 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0438\u0447\u0435\u0433\u043e"},{value:"1.375",span:"\u041d\u0438\u0437\u043a\u0438\u0439",text:"\u0427\u0430\u0441\u0442\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u0435\u0448\u043a\u043e\u043c, 2-3 \u043b\u0451\u0433\u043a\u0438\u0445 \u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432\u043a\u0438 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"},{value:"1.4625",span:"C\u0440\u0435\u0434\u043d\u0438\u0439",text:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u0440\u0435\u0434\u043d\u0435\u0439 \u0442\u044f\u0436\u0435\u0441\u0442\u0438, 4-5 \u043b\u0451\u0433\u043a\u0438\u0445 \u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432\u043e\u043a \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"},{value:"1.55",span:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439",text:"4-5 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0445 \u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432\u043e\u043a \u0432 \u043d\u0435\u0434\u0435\u043b\u044e"},{value:"1.6375",span:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439",text:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435, \u043d\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043b\u0451\u0433\u043a\u0438\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438, \u0442\u044f\u0436\u0451\u043b\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0431\u0435\u0437 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445"},{value:"1.725",span:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439",text:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438, \u0438\u043b\u0438 \u043b\u0451\u043a\u0438\u0435, \u043d\u043e 2 \u0440\u0430\u0437\u0430 \u0432 \u0434\u0435\u043d\u044c"},{value:"1.9",span:"\u0412\u044b\u0441\u043e\u043a\u0438\u0439",text:"\u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u044b\u0435 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438, \u0442\u044f\u0436\u0451\u043b\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0431\u0435\u0437 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445"}],Pe=[{value:"0.8",span:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435",text:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"},{value:"0.9",span:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435",text:"\u0421\u043d\u0438\u0436\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"},{value:"1",span:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435",text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"},{value:"1.1",span:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435",text:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"},{value:"1.2",span:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435",text:"\u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0432\u0435\u0441\u0430"}];var Ee=function(e){var t=e.onClose,n=Object(o.c)((function(e){return e.profile}));return Object(A.jsxs)(Be,{children:[Object(A.jsxs)(De,{children:[Object(A.jsx)(Ie,{children:n.name}),Object(A.jsx)(Ke,{children:n.sex}),Object(A.jsxs)(Ke,{children:[n.age," \u0433\u043e\u0434\u0430, ",n.stature," \u0441\u043c, ",n.weight," \u043a\u0433"]}),Object(A.jsxs)(Ke,{children:[n.activityLevel?Fe.find((function(e){return e.value===n.activityLevel})).span:""," ","\u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"]}),Object(A.jsx)(Je,{children:Object(A.jsxs)(Ke,{children:["\u0426\u0435\u043b\u044c:"," ",n.purpose?Pe.find((function(e){return e.value===n.purpose})).text:""]})})]}),Object(A.jsxs)(Te,{children:[n.purposeMetabolism," \u043a\u043a\u0430\u043b"]}),Object(A.jsx)(Ae,{to:"/profile",onClick:t,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})]})},Be=Object(s.a)("div",{target:"eksapq86"})({name:"1eofqc0",styles:"height:calc(100vh - 97px);width:100%;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;align-items:center;margin:77px 0 0 0;padding:10px"}),De=Object(s.a)("div",{target:"eksapq85"})({name:"6kz1wu",styles:"display:flex;flex-direction:column;align-items:flex-start"}),Ie=Object(s.a)("h2",{target:"eksapq84"})("font-size:23px;line-height:25px;font-weight:600;color:",S,";text-shadow:0 1px 1px ",B,";margin:0;"),Ke=Object(s.a)("p",{target:"eksapq83"})("font-size:18px;line-height:20px;font-weight:400;color:",B,";margin:10px 0 0 0;"),Je=Object(s.a)("div",{target:"eksapq82"})({name:"1vozfri",styles:"width:100%;display:flex;flex-direction:column;align-items:flex-start;margin:40px 0 0"}),Te=Object(s.a)("p",{target:"eksapq81"})("font-size:34px;line-height:36px;font-weight:600;color:",F,";-webkit-text-stroke:2px ",S,";text-shadow:1px 2px 2px ",B,";align-self:center;margin:0;"),Ae=Object(s.a)(c.b,{target:"eksapq80"})("height:36px;width:100%;display:flex;justify-content:center;align-items:center;box-sizing:border-box;background:",P,";border:1px solid ",E,";border-radius:5px;font-size:18px;line-height:20px;color:",B,";text-decoration:none;margin:60px 0;:hover{box-shadow:0 0 5px 1px ",E,";}@media (max-width: 400px){font-size:16px;line-height:18px;}",T,";");var Re=function(e){var t=e.isOpen,n=e.onClose,r=e.onKeydown;return Object(i.useEffect)((function(){if(t)return document.addEventListener("keydown",r),function(){return document.removeEventListener("keydown",r)}}),[t]),Object(A.jsx)(_e,{opened:t,onClick:n,children:Object(A.jsxs)(Ge,{opened:t,onClick:function(e){return e.stopPropagation()},children:[Object(A.jsx)(He,{to:"/",onClick:n,children:Object(A.jsx)(Qe,{})}),Object(A.jsx)(Ue,{onClick:n}),Object(A.jsx)(Ee,{onClose:n})]})})},_e=Object(s.a)("div",{target:"e24uwkg4"})("height:100vh;width:100%;display:flex;justify-content:end;position:absolute;top:0;right:0;overflow:hidden;visibility:",(function(e){return e.opened?"visible":"hidden"}),";opacity:",(function(e){return e.opened?"1":"0"}),";background:rgba(63, 35, 166, 0.1);transition:all 0.3s ease-in;z-index:",(function(e){return e.opened?"9":"-1"}),";"),Ge=Object(s.a)("div",{target:"e24uwkg3"})("height:100vh;width:95%;max-width:350px;position:absolute;top:0;right:",(function(e){return e.opened?"0":"-500px"}),";display:flex;flex-direction:column;justify-content:space-between;align-items:center;background:",P,";transition:all 0.3s ease-in;z-index:10;"),He=Object(s.a)(c.b,{target:"e24uwkg2"})("height:19px;width:22px;position:absolute;top:30px;left:30px;display:block;background:",S,";border:2px solid ",B,";border-top-left-radius:6px;border-top-right-radius:10px;border-bottom-left-radius:10px;border-bottom-right-radius:6px;transition:all 0.2s ease-out;:hover{margin:2px 0 0 0;}",T,";"),Qe=Object(s.a)("div",{target:"e24uwkg1"})("height:19px;width:19px;box-sizing:border-box;background:radial-gradient(circle, ",L," 0%, ",S," 50%);border:2px solid ",L,";border-radius:99em;margin:auto;"),Ue=Object(s.a)("button",{target:"e24uwkg0"})("height:17px;width:17px;position:absolute;top:30px;right:30px;background:transparent;background:linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0) 0,\n      rgba(255, 255, 255, 0) 11px,\n      ",N," 11px,\n      ",N," 13px,\n      rgba(255, 255, 255, 0) 13px,\n      rgba(255, 255, 255, 0) 24px\n    ),linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0) 0,\n      rgba(255, 255, 255, 0) 11px,\n      ",N," 11px,\n      ",N," 13px,\n      rgba(255, 255, 255, 0) 13px,\n      rgba(255, 255, 255, 0) 24px\n    );border:none;outline:none;",T,";");var We=function(e){var t=e.formik,n=e.value,i=e.name,r=e.placeholder,a=function(e){return t.touched[e]?t.errors[e]:void 0};return Object(A.jsxs)(Xe,{children:[Object(A.jsx)(Ze,{placeholder:r.slice(1),name:i,type:"text",isValid:!a(i),value:null!==n&&void 0!==n?n:"",onFocus:function(){return t.setFieldValue(r,"")},onChange:t.handleChange,onBlur:t.handleBlur,autoComplete:"off"}),Object(A.jsx)(Ye,{fullness:!!n,isValid:!a(i),children:"".concat(n?r:r[0])}),Object(A.jsx)($e,{isValid:!a(i),children:a(i)})]})},Xe=Object(s.a)("div",{target:"e4zqwgr3"})({name:"9g6cng",styles:"height:40px;width:100%;position:relative;margin:0 0 10px"}),Ye=Object(s.a)("p",{target:"e4zqwgr2"})("width:",(function(e){return e.fullness?"fit-content":"24px"}),";position:absolute;top:",(function(e){return e.fullness?"-6px":"8px"}),";left:",(function(e){return e.fullness?"5px":"1px"}),";background:",P,";border-top:",(function(e){var t=e.fullness,n=e.isValid;return t?n?"none":"1px solid ".concat(S):"none"}),";font-size:",(function(e){return e.fullness?"10px":"20px"}),";line-height:",(function(e){return e.fullness?"12px":"22px"}),";text-align:right;margin:0;padding:",(function(e){return e.fullness?"0 10px":"0"}),";"),Ze=Object(s.a)("input",{target:"e4zqwgr1"})("height:100%;width:100%;box-sizing:border-box;position:absolute;top:0;left:0;background:",P,";border:",(function(e){return e.isValid?"none":"1px solid ".concat(S)}),";border-radius:5px;outline:none;font-size:18px;line-height:20px;color:",B,";padding:0 10px 0 25px;::placeholder{font-size:18px;line-height:20px;font-weight:200;color:",E,";}:focus{border:1px solid ",E,";}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}"),$e=Object(s.a)("div",{target:"e4zqwgr0"})("position:absolute;bottom:-6px;right:10px;background:",P,";border-bottom:",(function(e){return e.isValid?"none":"1px solid ".concat(S)}),";font-size:12px;line-height:14px;color:",S,";padding:0 10px;");var et=function(e){var t=e.formik,n=e.value,r=e.options,a=e.name,o=e.placeholder,c=function(e){return t.touched[e]?t.errors[e]:void 0},s=Object(i.useState)(!1),d=Object(l.a)(s,2),p=d[0],b=d[1];function u(){b(!1)}return Object(i.useEffect)((function(){if(p)return document.addEventListener("mousedown",u),function(){return document.removeEventListener("mousedown",u)}}),[p]),Object(A.jsxs)(tt,{children:[Object(A.jsx)(it,{placeholder:o.slice(1),name:a,type:"text",isValid:!c(a),value:n,onFocus:function(){t.setFieldValue(o,""),b(!0)},onChange:t.handleChange,onBlur:t.handleBlur,opened:p,autoComplete:"off",onKeyPress:function(e){e.preventDefault()},readOnly:!0}),Object(A.jsx)(nt,{fullness:!!n,isValid:!c(a),children:"".concat(n?o:o[0])}),Object(A.jsx)(rt,{isValid:!c(a),children:c(a)}),Object(A.jsx)(at,{opened:p,onMouseDown:function(e){return e.stopPropagation()},children:r.map((function(e,n){return Object(A.jsx)(ot,{type:"button",onClick:function(n){return function(e,n){e.preventDefault(),t.setFieldValue(a,n),b(!1)}(n,e.value)},children:Object(A.jsxs)(ct,{children:[Object(A.jsx)(lt,{children:e.span})," ",e.text]})},n)}))})]})},tt=Object(s.a)("div",{target:"e1xshedf7"})({name:"9g6cng",styles:"height:40px;width:100%;position:relative;margin:0 0 10px"}),nt=Object(s.a)("p",{target:"e1xshedf6"})("width:",(function(e){return e.fullness?"fit-content":"24px"}),";position:absolute;top:",(function(e){return e.fullness?"-6px":"8px"}),";left:",(function(e){return e.fullness?"5px":"1px"}),";background:",P,";border-top:",(function(e){var t=e.fullness,n=e.isValid;return t?n?"none":"1px solid ".concat(S):"none"}),";font-size:",(function(e){return e.fullness?"10px":"20px"}),";line-height:",(function(e){return e.fullness?"12px":"22px"}),";text-align:right;margin:0;padding:",(function(e){return e.fullness?"0 10px":"0"}),";"),it=Object(s.a)("input",{target:"e1xshedf5"})("height:100%;width:100%;box-sizing:border-box;position:absolute;top:0;left:0;background:",P,";border:",(function(e){return e.isValid?"none":"1px solid ".concat(S)}),";border-bottom:",(function(e){return e.opened?"1px solid ".concat(E):"none"}),";border-radius:5px;outline:none;font-size:18px;line-height:20px;color:",B,";padding:0 10px 0 25px;::placeholder{font-size:18px;line-height:20px;font-weight:200;color:",E,";}:focus{border:1px solid ",E,";}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}"),rt=Object(s.a)("div",{target:"e1xshedf4"})("position:absolute;bottom:-6px;right:10px;background:",P,";border-bottom:",(function(e){return e.isValid?"none":"1px solid ".concat(S)}),";font-size:12px;line-height:14px;color:",S,";padding:0 10px;z-index:10;"),at=Object(s.a)("div",{target:"e1xshedf3"})("height:",(function(e){return e.opened?"fit-content":"0"}),";width:100%;box-sizing:border-box;position:absolute;top:40px;left:0;display:",(function(e){return e.opened?"flex":"none"}),";flex-direction:column;background:",F,";border:1px solid ",E,";border-top:none;border-top-left-radius:5px;border-top-right-radius:5px;padding:0;z-index:10;"),ot=Object(s.a)("button",{target:"e1xshedf2"})("min-height:50px;width:100%;box-sizing:border-box;display:flex;align-items:center;background:transparent;border:none;border-bottom:1px solid ",E,";outline:none;padding:5px 15px;:last-child{border:none;}"),ct=Object(s.a)("p",{target:"e1xshedf1"})("font-size:12px;line-height:14px;font-weight:400;color:",B,";text-align:left;margin:0;"),lt=Object(s.a)("span",{target:"e1xshedf0"})({name:"8js5bo",styles:"font-weight:600;margin:0"});var st=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.profile})),n=Object(ee.a)({enableReinitialize:!0,initialValues:{name:t.name,age:t.age,stature:t.stature,weight:t.weight,sex:t.sex,activityLevel:t.activityLevel,purpose:t.purpose},validationSchema:ae,onSubmit:function(t){e(C(Object($.a)(Object($.a)({},t),{},{baseMetabolism:b,purposeMetabolism:x})))}}),i=n.values,r=i.name,a=i.age,c=i.stature,l=i.weight,s=i.sex,d=i.activityLevel,p=i.purpose,b=0;"\u0416\u0435\u043d\u0449\u0438\u043d\u0430"===s?b=Math.round(447.593+9.247*Number(l)+3.098*Number(c)-4.33*Number(a)):"\u041c\u0443\u0436\u0447\u0438\u043d\u0430"===s&&(b=Math.round(88.362+13.397*Number(l)+4.799*Number(c)-5.667*Number(a)));var u=Math.round(b*Number(d)),x=Math.round(u*Number(p));return Object(A.jsx)(dt,{children:Object(A.jsxs)(pt,{onSubmit:n.handleSubmit,children:[Object(A.jsx)(We,{formik:n,value:r,name:"name",placeholder:"\u0418\u043c\u044f"}),Object(A.jsx)(bt,{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0434\u043d\u0435\u0432\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439\u043d\u043e\u0441\u0442\u0438"}),Object(A.jsxs)(ut,{children:[Object(A.jsx)(We,{formik:n,value:a,name:"age",placeholder:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(A.jsx)(We,{formik:n,value:c,name:"stature",placeholder:"\u0420\u043e\u0441\u0442 \u0432 \u0441\u043c"}),Object(A.jsx)(We,{formik:n,value:l,name:"weight",placeholder:"\u0412\u0435\u0441 \u0432 \u043a\u0433"})]}),Object(A.jsx)(et,{formik:n,value:null!==s&&void 0!==s?s:"",options:Le,name:"sex",placeholder:"\u041f\u043e\u043b"}),Object(A.jsx)(et,{formik:n,value:d?Fe.find((function(e){return e.value===d})).span:"",options:Fe,name:"activityLevel",placeholder:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438"}),Object(A.jsx)(et,{formik:n,value:p?Pe.find((function(e){return e.value===p})).span:"",options:Pe,name:"purpose",placeholder:"\u0426\u0435\u043b\u044c"}),Object(A.jsx)(bt,{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0440\u0430\u0441\u0441\u0447\u0451\u0442\u0430:"}),Object(A.jsxs)(xt,{children:[Object(A.jsx)(gt,{children:"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043c\u0435\u0442\u0430\u0431\u043e\u043b\u0438\u0437\u043c:"}),Object(A.jsx)(ht,{children:b}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"}),Object(A.jsx)(gt,{children:"\u0421 \u0443\u0447\u0451\u0442\u043e\u043c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438:"}),Object(A.jsx)(ht,{children:u}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"}),Object(A.jsx)(gt,{children:"\u0414\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u2193 \u0432\u0435\u0441\u0430:"}),Object(A.jsx)(ht,{children:Math.round(.8*u)}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"}),Object(A.jsx)(gt,{children:"\u0414\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0432\u0435\u0441\u0430:"}),Object(A.jsx)(ht,{children:Math.round(.9*u)}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"}),Object(A.jsx)(gt,{children:"\u0414\u043b\u044f \u043d\u0430\u0431\u043e\u0440\u0430 \u0432\u0435\u0441\u0430:"}),Object(A.jsx)(ht,{children:Math.round(1.1*u)}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"}),Object(A.jsx)(gt,{children:"\u0414\u043b\u044f \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u2191 \u0432\u0435\u0441\u0430:"}),Object(A.jsx)(ht,{children:Math.round(1.2*u)}),Object(A.jsx)(jt,{children:"\u043a\u043a\u0430\u043b"})]}),Object(A.jsx)(ft,{type:"submit","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c",disabled:!n.isValid,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})},dt=Object(s.a)("main",{target:"e13blq7n8"})(K,";border-top:1px solid ",E,";"),pt=Object(s.a)("form",{target:"e13blq7n7"})(""),bt=Object(s.a)("h2",{target:"e13blq7n6"})({name:"zjcvnt",styles:"font-size:12px;line-height:14px;font-weight:300;text-align:start;margin:15px 0"}),ut=Object(s.a)("div",{target:"e13blq7n5"})({name:"1nah4kj",styles:"display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;margin:20px 0 0"}),xt=Object(s.a)("div",{target:"e13blq7n4"})({name:"1kcuxfv",styles:"display:grid;grid-template-columns:4fr 1fr 1fr;grid-template-rows:1fr;column-gap:10px;row-gap:5px;margin:10px 0"}),ht=Object(s.a)("div",{target:"e13blq7n3"})({name:"1avxq64",styles:"font-size:16px;line-height:18px;font-weight:600;text-align:center"}),gt=Object(s.a)(ht,{target:"e13blq7n2"})({name:"1sxyl4v",styles:"font-weight:400;text-align:right"}),jt=Object(s.a)(ht,{target:"e13blq7n1"})({name:"2kyuz8",styles:"font-size:12px;line-height:14px;font-weight:200;text-align:left"}),ft=Object(s.a)("button",{target:"e13blq7n0"})("height:36px;width:100%;box-sizing:border-box;background:",P,";border:1px solid ",E,";border-radius:5px;outline:none;font-size:18px;line-height:20px;color:",(function(e){var t=e.disabled;return"".concat(t?E:B)}),";margin:60px 0;:hover{box-shadow:0 0 5px 1px ",E,";}",T,";");var Ot=function(){var e=Object(o.c)((function(e){return e})),t=Object(o.b)(),n=Object(i.useState)(!1),r=Object(l.a)(n,2),a=r[0],c=r[1];function s(){c(!1)}var p="state";return Object(i.useEffect)((function(){var e=localStorage.getItem(p),n=localStorage.getItem(p);if(e)try{t(v(JSON.parse(e).meals))}catch(i){}if(n)try{t(V(JSON.parse(n).profile))}catch(r){}}),[]),Object(i.useEffect)((function(){localStorage.setItem(p,JSON.stringify(e))}),[e]),Object(A.jsxs)(mt,{scrollInactive:a,children:[Object(A.jsx)(H,{onMenuClick:function(){c(!0)},popupOpened:a}),Object(A.jsx)(d.c,{children:Object(A.jsxs)(d.a,{path:"/",children:[Object(A.jsx)(d.a,{index:!0,element:Object(A.jsx)(Se,{})}),Object(A.jsx)(d.a,{path:"profile",element:Object(A.jsx)(st,{})})]})}),Object(A.jsx)(R,{}),Object(A.jsx)(Re,{isOpen:a,onClose:s,onKeydown:function(e){"Escape"===e.key&&s()}})]})},mt=Object(s.a)("div",{target:"exlhrf20"})(K,";",(function(e){return e.scrollInactive?"height: 100vh;":""})," ",(function(e){return e.scrollInactive?"overflow-y: hidden;":""})," max-width:500px;min-width:320px;position:relative;text-align:center;color:",B,";margin:0 auto;padding:0 10px 20px;"),vt=n(88),wt=n.n(vt),yt=Object(p.a)({reducer:{meals:k,profile:M},middleware:function(e){return e().concat(wt.a)}}),kt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))};a.a.render(Object(A.jsx)(i.StrictMode,{children:Object(A.jsx)(c.a,{basename:"/pet-clculator-calories",children:Object(A.jsx)(o.a,{store:yt,children:Object(A.jsx)(Ot,{})})})}),document.getElementById("root")),kt()}},[[201,1,2]]]);
//# sourceMappingURL=main.9ef063ef.chunk.js.map