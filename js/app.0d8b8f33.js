(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},1253:function(t,e,a){},1771:function(t,e,a){var n={"./logo.png":"cf05","./me.jpg":"b0df","./mylittletraderbot.jpg":"b84d","./playgroundnews.png":"60b3","./takephotoapp.png":"4be0"};function o(t){var e=r(t);return a(e)}function r(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id="1771"},"218a":function(t,e,a){"use strict";var n=a("e5c1"),o=a.n(n);o.a},3086:function(t,e,a){"use strict";var n=a("ebdf"),o=a.n(n);o.a},3491:function(t,e,a){},"4be0":function(t,e,a){t.exports=a.p+"img/takephotoapp.0ab5c673.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("About"),a("Projects"),a("Footer")],1)},r=[],i=a("5f5b"),s=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-navbar"},[a("b-navbar",{attrs:{id:"navbar",toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-toggle",{staticClass:"ml-auto navbar-light",attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"navbar-nav ml-auto text-center"},[a("b-nav-item",{attrs:{href:t.getPathOfEnv()}},[t._v("About")]),a("b-nav-item",{attrs:{href:t.getPathOfEnv()}},[t._v("Projects")]),a("b-nav-item",{attrs:{href:"https://github.com/osandvold302/personal-website/blob/master/olivia_sandvold_resume.pdf"}},[t._v("Resume")])],1)],1)],1)],1)}),l=[],c=a("f9bc");n["default"].use(c["a"]);var u={name:"header-component",components:{},methods:{getPathOfEnv:function(){return"/personal-website"}}},f=u,d=(a("e288"),a("2877")),p=Object(d["a"])(f,s,l,!1,null,"669a0ac3",null),m=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-links"},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("div",{directives:[{name:"container",rawName:"v-container"}],staticClass:"container-footer"},[t._m(0),t._m(1)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("p",[t._v("Website built with VueJS, Font Awesome, Bootstrap, and love")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"footer-social-icons"},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/olivia-sandvold-192821143/",target:"_blank",title:"Follow me on LinkedIn"}},[a("i",{staticClass:"fab fa-linkedin fa-3x",staticStyle:{color:"#737992"}})])]),a("li",[a("a",{attrs:{href:"https://github.com/osandvold302",target:"_blank",title:"Check out my Github"}},[a("i",{staticClass:"fab fa-github fa-3x",staticStyle:{color:"#737992"}})])]),a("li",[a("a",{attrs:{href:"mailto: osandvold@outlook.com",target:"_blank",title:"Send me an email"}},[a("i",{staticClass:"fas fa-envelope-square fa-3x",staticStyle:{color:"#737992"}})])])])])])}],g={name:"footer-component",components:{}},v=g,y=(a("f448"),Object(d["a"])(v,h,b,!1,null,"500f57ea",null)),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-about",attrs:{"b-container":""}},[n("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css",rel:"stylesheet"}}),n("b-row",{staticClass:"justfiy-content-md-center text-center"},[n("b-col",{staticClass:"col-text text-left",attrs:{offset:"1",sm:"5"}},[n("h1",[t._v("Hello,")]),n("h1",[t._v("I'm Olivia")]),n("h6",[t._v("\n            Senior at the University of Iowa studying Biomedical Engineering with focuses in bioimaging, computer science, and mathematics.\n        "),n("br"),n("br"),t._v("\n            Lover of hackathons, the computer science and engineering community, and exploring the world one step at a time\n        ")]),n("h5",[t._v("\n            oh, and I'm "),n("i",[t._v("obsessed")]),t._v(" with learning\n        ")])]),n("b-col",{staticClass:"col-photo"},[n("img",{attrs:{src:a("b0df"),height:"350"}})])],1)],1)},k=[],j={name:"about-me-short",components:{}},x=j,C=(a("218a"),Object(d["a"])(x,_,k,!1,null,"ec2edbb8",null)),O=C.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-projects",attrs:{"b-container":""}},[a("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.2.0/css/all.css",integrity:"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",crossorigin:"anonymous"}}),a("b-row",[a("b-col",{staticClass:"col-text text-left",attrs:{offset:"1"}},[a("h2",[t._v("Projects")])])],1),t._l(t.projects,function(e){return[a("b-form-row",{key:e.title,staticClass:"project-rows"},[a("b-col",{staticClass:"justify-content-md-center text-center",attrs:{id:"project-image","offset-sm":"1",lg:"2",md:"4",sm:"auto"}},[e.img?a("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl(e.img),alt:e.img,width:"100%/"}}):a("img",{staticClass:"img-fluid",attrs:{src:t.getImgUrl("logo.png"),width:"auto/"}}),a("div",{staticClass:"overlay"},[e.github_link?a("a",{staticClass:"icon",attrs:{href:e.github_link,title:"GitHub Link"}},[a("i",{staticClass:"fab fa-github fa-4x"})]):t._e()])]),a("b-col",{staticClass:"col-text text-left",attrs:{id:"project-summary",lg:"8",md:"6",sm:"auto"}},[a("b-row",{attrs:{"align-v":"start"}},[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.summary))])]),null!=e.tools?a("b-row",{attrs:{"align-v":"end","align-h":"end"}},t._l(e.tools,function(e){return a("div",{key:e},[a("div",{attrs:{id:"tool-tag"}},[a("b-button",{attrs:{pill:"",variant:"outline-info",size:"sm"}},[t._v("\n                            "+t._s(e)+" \n                        ")])],1)])}),0):t._e()],1)],1),a("br",{key:e.img})]})],2)},P=[],T={name:"projects",components:{},methods:{getImgUrl:function(t){return a("1771")("./"+t)}},data:function(){return{projects:[{title:"iOS Test Lab App",summary:"The Tamino iOS Photo application was built to detect deformities and heat variations of our high temperature furnaces. I built the backend using Swift and AWS tools to connect the user to the DynamoDB table and upload images to an S3 bucket. From there, a lambda function was triggered and detected parts using a pre-built neural network. This product is a proof of concept for a larger IoT platform in manufacturing and research and development at 3M.",img:"takephotoapp.png",github_link:"",tools:["Swift","Amazon Web Services","YOLO"]},{title:"My Little Trader Bot",summary:'My Little Trader Bot began from a desire to learn and understand financial trading algorithms based on the challenged provided by Optiver at HackDelft 2019 in Delft, Netherlands. My team researched various types of strategies and played the "fake" stocks, attempting to increase our profits. We were able to build a front-end website for monitoring our progress and allow our end user to update the various arguments to a few pre-defined algorithms.',img:"mylittletraderbot.jpg",github_link:"https://github.com/osandvold302/hackdelft_s19",tools:["Python","Flask","HTML","CSS"]},{title:"Playground News",summary:"The Univerisity of Missouri hackathon challenged groups to combine journalism and technology to create tools that would help improve how people receive information. My team imagined a product that would help parents keep track of their child's reading habits, the reading level they are most comfortable with, and topics of interest. We created a web app for monitoring these statistics and curating relative, age appropriate content for each child.",img:"playgroundnews.png",github_link:"https://github.com/osandvold302/KidNews-Tiger18",tools:["Python","Django","ReactJS"]}]}}},E=T,M=(a("3086"),Object(d["a"])(E,S,P,!1,null,"c0eaa29c",null)),F=M.exports;n["default"].use(i["a"]);var L={name:"app",components:{Header:m,About:O,Projects:F,Footer:w}},D=L,I=(a("034f"),Object(d["a"])(D,o,r,!1,null,null,null)),W=I.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(W)},components:{App:W}}).$mount("#app")},"60b3":function(t,e,a){t.exports=a.p+"img/playgroundnews.affcb947.png"},"64a9":function(t,e,a){},b0df:function(t,e,a){t.exports=a.p+"img/me.c1352fba.jpg"},b84d:function(t,e,a){t.exports=a.p+"img/mylittletraderbot.24084423.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},e288:function(t,e,a){"use strict";var n=a("3491"),o=a.n(n);o.a},e5c1:function(t,e,a){},ebdf:function(t,e,a){},f448:function(t,e,a){"use strict";var n=a("1253"),o=a.n(n);o.a}});
//# sourceMappingURL=app.0d8b8f33.js.map