webpackJsonp([1],{130:function(t,e,s){t.exports=s.p+"static/img/yoga-green.cfb668b.png"},131:function(t,e,s){"use strict";var a=s(8),n=s(180),i=s(172),o=s.n(i),r=s(7),c=s.n(r),l=s(173),u=s.n(l),m=s(6),d=s.n(m),f=s(5),v=s.n(f);a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Hello",component:o.a},{path:"/mymoments",name:"My Moments",component:c.a},{path:"/welcome",name:"Welcome",component:u.a},{path:"/signup",name:"SignUp",component:d.a},{path:"/login",name:"Login",component:v.a}]})},133:function(t,e,s){function a(t){s(161),s(162)}var n=s(2)(s(151),s(175),a,null,null);t.exports=n.exports},14:function(t,e,s){"use strict";function a(t){return u.post("/signup",t).then(function(t){return t.data})}function n(t,e,s){return u.post("/login",{email:t,password:e}).then(function(t){var e=t.data,a=e.token,n=e.name;return localStorage.setItem("jwtToken",a),localStorage.setItem("user.name",n),o(s),t.data})}function i(){return u.get("/secret").then(function(t){return t.data})}function o(t){var e=localStorage.jwtToken,s=localStorage["user.name"];e&&(l.a.defaults.headers.common.Authorization="Bearer "+e,t.$root.user={token:e,name:s})}function r(t){localStorage.removeItem("jwtToken"),delete l.a.defaults.headers.common.Authorization,t.$root.user=null}var c=s(3),l=s.n(c),u=l.a.create({baseURL:"/api"});e.a={signup:a,login:n,logout:r,secret:i,loadUser:o}},151:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(157);e.default={name:"app",created:function(){a.a.loadUser(this)},methods:{logout:function(){a.a.logout(this)}}}},152:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(14);e.default={name:"login",data:function(){return{error:"",loading:!1,email:"",password:""}},computed:{buttonClasses:function(){return{"is-loading":this.loading}}},methods:{login:function(){var t=this;this.error="",this.loading=!0,a.a.login(this.email,this.password,this).then(function(e){t.$router.push("/mymoments")}).catch(function(e){t.error=e.response.data}).then(function(){t.loading=!1})}}}},153:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(14);e.default={name:"SignUp",data:function(){return{error:"",name:"",email:"",password:""}},computed:{buttonClasses:function(){return{"is-loading":this.loading}}},methods:{signup:function(){var t=this;this.error="",a.a.signup({email:this.email,password:this.password}).then(function(e){t.response=e,t.$router.push({path:"/mymoments"})}).catch(function(e){t.error=e.response.data})}}}},154:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},155:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"welcome"}},156:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(159);e.default={name:"Moments",data:function(){return{newMoment:{},moments:[]}},created:function(){var t=this;a.a.getMoments().then(function(e){t.moments=e.map(function(t){return t.editStatus=!1,t})})},methods:{saveMoment:function(){var t=this;a.a.addMoment(this.newMoment.text).then(function(){console.log(t.newMoment.text),a.a.getMoments().then(function(e){t.moments=e}),t.newMoment={}})},updateText:function(t){a.a.editText(t._id,t.text),t.editStatus=!1},deleteMoment:function(t){this.moments.splice(this.moments.indexOf(t),1),a.a.deleteMoment(t._id)}}}},157:function(t,e,s){"use strict";function a(t){return u.post("/signup",t).then(function(t){return t.data})}function n(t,e,s){return u.post("/login",{email:t,password:e}).then(function(t){var e=t.data,a=e.token,n=e.name;return localStorage.setItem("jwtToken",a),localStorage.setItem("user.name",n),o(s),t.data})}function i(){return u.get("/secret").then(function(t){return t.data})}function o(t){var e=localStorage.jwtToken,s=localStorage["user.name"];e&&(l.a.defaults.headers.common.Authorization="Bearer "+e,t.$root.user={token:e,name:s})}function r(t){localStorage.removeItem("jwtToken"),delete l.a.defaults.headers.common.Authorization,t.$root.user=null}var c=s(3),l=s.n(c),u=l.a.create({baseURL:"/api"});e.a={signup:a,login:n,logout:r,secret:i,loadUser:o}},158:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),n=s(132),i=s.n(n),o=s(133),r=s.n(o),c=s(131),l=s(7),u=(s.n(l),s(0)),m=s.n(u),d=s(5),f=(s.n(d),s(6));s.n(f);a.a.config.productionTip=!1,a.a.use(i.a),a.a.filter("formatDate",function(t){if(t)return m()(String(t)).format("MM/DD/YYYY")}),new a.a({el:"#app",router:c.a,data:{user:null},template:"<App/>",components:{App:r.a}})},159:function(t,e,s){"use strict";function a(){return l.get("/mymoments").then(function(t){return t.data})}function n(t){return l.post("/mymoments",{text:t}).then(function(t){return t.data})}function i(t,e){return l.put("/mymoments/"+t,{text:e}).then(function(t){return t.data})}function o(t){return l.delete("/mymoments/"+t).then(function(t){return t.data})}var r=s(3),c=s.n(r),l=c.a.create({baseURL:"/api"});e.a={getMoments:a,addMoment:n,editText:i,deleteMoment:o}},160:function(t,e){},161:function(t,e){},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},168:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":15,"./af.js":15,"./ar":22,"./ar-dz":16,"./ar-dz.js":16,"./ar-kw":17,"./ar-kw.js":17,"./ar-ly":18,"./ar-ly.js":18,"./ar-ma":19,"./ar-ma.js":19,"./ar-sa":20,"./ar-sa.js":20,"./ar-tn":21,"./ar-tn.js":21,"./ar.js":22,"./az":23,"./az.js":23,"./be":24,"./be.js":24,"./bg":25,"./bg.js":25,"./bn":26,"./bn.js":26,"./bo":27,"./bo.js":27,"./br":28,"./br.js":28,"./bs":29,"./bs.js":29,"./ca":30,"./ca.js":30,"./cs":31,"./cs.js":31,"./cv":32,"./cv.js":32,"./cy":33,"./cy.js":33,"./da":34,"./da.js":34,"./de":37,"./de-at":35,"./de-at.js":35,"./de-ch":36,"./de-ch.js":36,"./de.js":37,"./dv":38,"./dv.js":38,"./el":39,"./el.js":39,"./en-au":40,"./en-au.js":40,"./en-ca":41,"./en-ca.js":41,"./en-gb":42,"./en-gb.js":42,"./en-ie":43,"./en-ie.js":43,"./en-nz":44,"./en-nz.js":44,"./eo":45,"./eo.js":45,"./es":47,"./es-do":46,"./es-do.js":46,"./es.js":47,"./et":48,"./et.js":48,"./eu":49,"./eu.js":49,"./fa":50,"./fa.js":50,"./fi":51,"./fi.js":51,"./fo":52,"./fo.js":52,"./fr":55,"./fr-ca":53,"./fr-ca.js":53,"./fr-ch":54,"./fr-ch.js":54,"./fr.js":55,"./fy":56,"./fy.js":56,"./gd":57,"./gd.js":57,"./gl":58,"./gl.js":58,"./gom-latn":59,"./gom-latn.js":59,"./he":60,"./he.js":60,"./hi":61,"./hi.js":61,"./hr":62,"./hr.js":62,"./hu":63,"./hu.js":63,"./hy-am":64,"./hy-am.js":64,"./id":65,"./id.js":65,"./is":66,"./is.js":66,"./it":67,"./it.js":67,"./ja":68,"./ja.js":68,"./jv":69,"./jv.js":69,"./ka":70,"./ka.js":70,"./kk":71,"./kk.js":71,"./km":72,"./km.js":72,"./kn":73,"./kn.js":73,"./ko":74,"./ko.js":74,"./ky":75,"./ky.js":75,"./lb":76,"./lb.js":76,"./lo":77,"./lo.js":77,"./lt":78,"./lt.js":78,"./lv":79,"./lv.js":79,"./me":80,"./me.js":80,"./mi":81,"./mi.js":81,"./mk":82,"./mk.js":82,"./ml":83,"./ml.js":83,"./mr":84,"./mr.js":84,"./ms":86,"./ms-my":85,"./ms-my.js":85,"./ms.js":86,"./my":87,"./my.js":87,"./nb":88,"./nb.js":88,"./ne":89,"./ne.js":89,"./nl":91,"./nl-be":90,"./nl-be.js":90,"./nl.js":91,"./nn":92,"./nn.js":92,"./pa-in":93,"./pa-in.js":93,"./pl":94,"./pl.js":94,"./pt":96,"./pt-br":95,"./pt-br.js":95,"./pt.js":96,"./ro":97,"./ro.js":97,"./ru":98,"./ru.js":98,"./sd":99,"./sd.js":99,"./se":100,"./se.js":100,"./si":101,"./si.js":101,"./sk":102,"./sk.js":102,"./sl":103,"./sl.js":103,"./sq":104,"./sq.js":104,"./sr":106,"./sr-cyrl":105,"./sr-cyrl.js":105,"./sr.js":106,"./ss":107,"./ss.js":107,"./sv":108,"./sv.js":108,"./sw":109,"./sw.js":109,"./ta":110,"./ta.js":110,"./te":111,"./te.js":111,"./tet":112,"./tet.js":112,"./th":113,"./th.js":113,"./tl-ph":114,"./tl-ph.js":114,"./tlh":115,"./tlh.js":115,"./tr":116,"./tr.js":116,"./tzl":117,"./tzl.js":117,"./tzm":119,"./tzm-latn":118,"./tzm-latn.js":118,"./tzm.js":119,"./uk":120,"./uk.js":120,"./ur":121,"./ur.js":121,"./uz":123,"./uz-latn":122,"./uz-latn.js":122,"./uz.js":123,"./vi":124,"./vi.js":124,"./x-pseudo":125,"./x-pseudo.js":125,"./yo":126,"./yo.js":126,"./zh-cn":127,"./zh-cn.js":127,"./zh-hk":128,"./zh-hk.js":128,"./zh-tw":129,"./zh-tw.js":129};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=168},170:function(t,e,s){t.exports=s.p+"static/img/logo-bicolor.678ee6d.png"},171:function(t,e,s){t.exports=s.p+"static/img/lotus-green.39b2883.png"},172:function(t,e,s){function a(t){s(165)}var n=s(2)(s(154),s(178),a,"data-v-87b09e2c",null);t.exports=n.exports},173:function(t,e,s){function a(t){s(164)}var n=s(2)(s(155),s(177),a,null,null);t.exports=n.exports},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("label",{staticClass:"label title"},[t._v("#1 - Your happiness challenge of the day")]),t._v(" "),s("p",{staticClass:"label"},[t._v("Challenge of the day")]),t._v(" "),s("button",{staticClass:"button is-primary",on:{click:function(t){}}},[t._v("Challenge accepted!")])]),t._v(" "),s("div",{staticClass:"column"},[s("label",{staticClass:"label title"},[t._v("#2 - Your daily gratitude exercise")]),t._v(" "),s("div",[s("label",{staticClass:"label"},[t._v("What made you happy today?")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newMoment.text,expression:"newMoment.text"}],staticClass:"input is-warning",attrs:{type:"text",placeholder:"I danced samba with my friend"},domProps:{value:t.newMoment.text},on:{input:function(e){e.target.composing||(t.newMoment.text=e.target.value)}}}),t._v(" "),s("div",{staticClass:"field"},[s("button",{staticClass:"button is-warning",on:{click:t.saveMoment}},[t._v("Save")])])])])])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"container"},[s("p",{staticClass:"title"},[t._v("My happy memories")]),t._v(" "),t._l(t.moments,function(e){return s("div",[e.editStatus?s("section",[s("div",{staticClass:"card is-warning"},[s("div",{staticClass:"card-content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"moment.text"}],staticClass:"content",attrs:{rows:"6",cols:"50"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),t._v(" "),s("small",[t._v(t._s(t._f("formatDate")(e.date)))])]),t._v(" "),s("footer",{staticClass:"card-footer",staticStyle:{"margin-bottom":"10px"}},[s("a",{staticClass:"card-footer-item",on:{click:function(s){t.updateText(e)}}},[t._v("Save")]),t._v(" "),s("a",{staticClass:"card-footer-item",on:{click:function(s){t.deleteMoment(e)}}},[t._v("Delete")])])])]):s("section",[s("div",{staticClass:"card is-primary"},[s("div",{staticClass:"card-content"},[s("p",{staticClass:"content"},[t._v(t._s(e.text))]),t._v(" "),s("small",[t._v(t._s(t._f("formatDate")(e.date)))])]),t._v(" "),s("footer",{staticClass:"card-footer",staticStyle:{"margin-bottom":"10px"}},[s("a",{staticClass:"card-footer-item",on:{click:function(t){e.editStatus=!0}}},[t._v("Edit")]),t._v(" "),s("a",{staticClass:"card-footer-item",on:{click:function(s){t.deleteMoment(e)}}},[t._v("Delete")])])])])])})],2)])},staticRenderFns:[]}},175:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"block container"},[a("nav",{staticClass:"nav"},[a("div",{staticClass:"nav-left"},[a("a",{staticClass:"nav-item"},[t.$root.user?a("router-link",{attrs:{to:"/mymoments"}},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:s(130),alt:"Profile",height:"28"}})]),t._v(" "),a("span",{staticClass:"navbar-start is-primary is-active"},[t._v("My Profile")])]):a("router-link",{attrs:{to:"/login"}},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:s(130),alt:"Profile",height:"28"}})]),t._v(" "),a("span",{staticClass:"navbar-start is-primary"},[t._v("Login")])])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),a("hr",{staticStyle:{"margin-top":"0px"}}),t._v(" "),a("router-view"),t._v(" "),a("footer",{staticClass:"footer",staticStyle:{"margin-top":"50px"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"content has-text-centered"},[t._m(2),t._v(" "),t._m(3),t._v(" "),a("button",{staticClass:"button is-primary",on:{click:t.logout}},[t._v("Logout")])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-center"},[a("a",{staticClass:"nav-item",attrs:{href:"/"}},[a("img",{attrs:{src:s(170),alt:"BomBomLife",height:"42"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-right"},[a("a",{staticClass:"nav-item",attrs:{href:"/#/walloflife"}},[a("span",{staticClass:"icon"},[a("img",{attrs:{src:s(171),alt:"Profile",height:"28"}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("BomBomLife")]),t._v(" x\n          "),s("a",{attrs:{href:"http://ironhack.com"}},[t._v("Ironhack")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("a",{staticClass:"icon",attrs:{href:"xx"}},[s("i",{staticClass:"fa fa-facebook"})])])}]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("h1",{staticClass:"title"},[t._v("\n                        Connect to your BomBomLife account\n                    ")]),t._v(" "),s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",[t.error?s("b-notification",{attrs:{type:"is-danger",closable:!1}},[t._v(t._s(t.error))]):t._e(),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("b-field",{attrs:{label:"Email"}},[s("b-input",{attrs:{type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("button",{staticClass:"button is-primary",class:t.buttonClasses},[t._v("Login")])],1)],1)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"facebook"},[s("a",{staticClass:"button-facebook",attrs:{href:"/auth/facebook"}},[s("i",{staticClass:"fa fa-facebook fa-fw"}),t._v(" Login with Facebook")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"or-separator"},[s("div",{staticClass:"or-line"}),t._v(" "),s("div",{staticClass:"or-text"},[t._v("OR")]),t._v(" "),s("div",{staticClass:"or-line"})])}]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"columns is-vcentered"},[s("div",{staticClass:"column is-5"},[s("figure",{staticClass:"image is-4by3"},[s("img",{staticClass:"promo-img",attrs:{src:"https://media.giphy.com/media/l0MYtjhrNDLnlKf28/giphy.gif",alt:"Smiiile"}})])]),t._v(" "),s("div",{staticClass:"column is-6 is-offset-1 is-warning"},[s("h1",{staticClass:"title is-2"},[t._v("\n            Embark on the happiness challenge now!\n          ")]),t._v(" "),s("h2",{staticClass:"subtitle is-4"},[t._v("\n            It's free, simple and easy.\n            "),s("br"),t._v(" And it will change your life.\n\n          ")]),t._v(" "),s("br"),t._v(" "),s("p",{staticClass:"control has-addons has-text-centered"},[s("a",{staticClass:"button is-large is-warning",attrs:{href:"/#/signup"}},[t._v("\n              Yes, I'm ready. Let's go!\n            ")])])])])])])])}]}},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-fullheight is-bold"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6 is-offset-3"},[s("h1",{staticClass:"title"},[t._v("\n            Create your account\n          ")]),t._v(" "),s("div",{staticClass:"box"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",[t.error?s("article",{staticClass:"message is-danger"},[s("div",{staticClass:"message-body"},[t._v(t._s(t.error.message))])]):t._e(),t._v(" "),s("b-field",{attrs:{label:"Name"}},[s("b-input",{attrs:{type:"text",placeholder:"Béné",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),s("b-field",{attrs:{label:"Email"}},[s("b-input",{attrs:{type:"email",placeholder:"bene@bombomlife.com",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",placeholder:"Irock;)",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("p",{staticClass:"control has-text-centered"},[s("button",{staticClass:"button is-primary",class:t.buttonClasses,on:{click:t.signup}},[t._v("Register")])])],1)])])]),t._v(" "),t._m(2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"facebook"},[s("a",{staticClass:"button-facebook",attrs:{href:"/auth/facebook"}},[s("i",{staticClass:"fa fa-facebook fa-fw"}),t._v(" Sign up with Facebook")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"or-separator"},[s("div",{staticClass:"or-line"}),t._v(" "),s("div",{staticClass:"or-text"},[t._v("OR")]),t._v(" "),s("div",{staticClass:"or-line"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"has-text-centered"},[s("a",{attrs:{href:"/#/login"}},[t._v("Login")])])}]}},5:function(t,e,s){function a(t){s(163)}var n=s(2)(s(152),s(176),a,null,null);t.exports=n.exports},6:function(t,e,s){function a(t){s(166)}var n=s(2)(s(153),s(179),a,null,null);t.exports=n.exports},7:function(t,e,s){function a(t){s(160)}var n=s(2)(s(156),s(174),a,null,null);t.exports=n.exports}},[158]);
//# sourceMappingURL=app.498aff2017c4769af897.js.map