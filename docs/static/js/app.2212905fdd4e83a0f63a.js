webpackJsonp([0],{0:function(t,e){},EYPu:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={data:()=>({})},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Menu",{attrs:{mode:"horizontal","active-name":"1"}},[e("a",{staticClass:"logo"},[e("img",{attrs:{src:s("jV5y"),width:"40",height:"40"}}),this._v("BioContainers Registry UI")]),this._v(" "),e("div",{staticClass:"menu"},[e("MenuItem",{attrs:{name:"1"}},[e("Icon",{attrs:{type:"ios-home-outline"}}),this._v("\n            BioContainers\n        ")],1),this._v(" "),e("MenuItem",{attrs:{name:"2"}},[e("Icon",{attrs:{type:"social-github"}}),this._v("\n            GitHub\n        ")],1)],1)])},staticRenderFns:[]};var i={name:"App",components:{defaultNav:s("VU/8")(r,n,!1,function(t){s("EYPu")},"data-v-6a1a79d0",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("defaultNav"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(i,o,!1,function(t){s("mNrz")},null,null).exports,c=s("/ocq"),d={name:"Index",data:()=>({keywords:"",resultsTableCol:[{title:"Container",key:"container"},{title:"Description",key:"description"},{title:"Real Name",key:"realname"},{title:"Last Modified",key:"lastmodified"},{title:"Starred/Starts",key:"starredstarts"},{title:"Popularity",key:"popularity"},{title:"Registry Link",key:"registrylink"}],resutls:[{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"}]}),methods:{rowClick(t){console.log("row",t),this.$router.push({name:"Containerdetails",params:{id:t.ID}})},test(){this.$http.get("/api/get").then(function(t){console.log(t),console.log(123)},function(t){})}},mounted(){}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index-container"},[s("div",{staticClass:"search-wrapper"},[s("Input",{staticStyle:{width:"100%"},attrs:{icon:"ios-search",placeholder:"Search"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}})],1),t._v(" "),s("div",{staticClass:"results-wrapper"},[s("Table",{attrs:{stripe:"",columns:t.resultsTableCol,data:t.resutls},on:{"on-row-click":t.rowClick}})],1),t._v(" "),s("div",{staticClass:"update-statistics"},[s("Card",{staticClass:"update-statistics-card",staticStyle:{width:"100%"}},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("Containers Update Statistics")])])],1)])},staticRenderFns:[]};var p=s("VU/8")(d,u,!1,function(t){s("bU9q"),s("d6UJ")},"data-v-6177dfb8",null).exports,h={name:"HelloWorldShilrey123",data:()=>({insertValue:"",searchValue:"",solrValue:"",insertResults:[],searchResults:[],solrResults:[]}),methods:{insert(){this.$http.post("/api/insert",{data:this.insertValue,age:parseInt(100*Math.random())}).then(function(t){console.log(t.body),this.insertResults=t.body.res},function(t){})},searchMongo(){this.$http.get("/api/searchmongo?data="+this.searchValue).then(function(t){console.log(t.body),this.searchResults=t.body.res,0==this.searchResults.length&&alert("No resutls")},function(t){})},searchSolr(){this.$http.get("/api/searchsolr?age="+this.solrValue).then(function(t){console.log(t.body),this.solrResults=t.body.res,0==this.solrResults.length&&alert("No resutls")},function(t){})}},mounted(){}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",[s("h1",[t._v("Insert")]),t._v(" "),s("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"Insert to database",clearable:""},model:{value:t.insertValue,callback:function(e){t.insertValue=e},expression:"insertValue"}}),t._v(" "),s("Button",{on:{click:t.insert}},[t._v("Insert")]),t._v(" "),s("div",t._l(t.insertResults,function(e){return s("span",[t._v(t._s(e.name)+";")])}))],1),t._v(" "),s("div",[s("h1",[t._v("Search by MongoDB")]),t._v(" "),s("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"Search from database",clearable:""},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),t._v(" "),s("Button",{on:{click:t.searchMongo}},[t._v("Search")]),t._v(" "),s("div",t._l(t.searchResults,function(e){return s("span",[t._v(t._s(e.name)+";")])}))],1),t._v(" "),s("div",[s("h1",[t._v("Search by Solr")]),t._v(" "),s("Input",{staticStyle:{width:"200px"},attrs:{placeholder:"Search from database",clearable:""},model:{value:t.solrValue,callback:function(e){t.solrValue=e},expression:"solrValue"}}),t._v(" "),s("Button",{on:{click:t.searchSolr}},[t._v("Search")]),t._v(" "),s("div",t._l(t.solrResults,function(e){return s("span",[t._v(t._s(e.name)+":"+t._s(e.age)+";")])}))],1)])},staticRenderFns:[]};var m=s("VU/8")(h,k,!1,function(t){s("vQDV")},"data-v-666a09fb",null).exports,f={name:"Containerdetails",data:()=>({keywords:"",resultsTableCol:[{title:"Container",key:"container"},{title:"Description",key:"description"},{title:"Real Name",key:"realname"},{title:"Last Modified",key:"lastmodified"},{title:"Starred/Starts",key:"starredstarts"},{title:"Popularity",key:"popularity"},{title:"Registry Link",key:"registrylink"}],resutls:[{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"},{container:"John Brown",description:18,realname:"New York No. 1 Lake Park",lastmodified:"2016-10-03",starredstarts:"test",popularity:"test",registrylink:"test"}]}),methods:{rowClick(){},test(){this.$http.get("/api/get").then(function(t){console.log(t),console.log(123)},function(t){})}},mounted(){console.log("receive id",this.$route.params.id)}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-container"},[e("div",{staticClass:"results-wrapper"},[e("Table",{attrs:{stripe:"",columns:this.resultsTableCol,data:this.resutls},on:{"on-row-click":this.rowClick}})],1)])},staticRenderFns:[]};var y=s("VU/8")(f,v,!1,function(t){s("SWeJ"),s("YABt")},"data-v-74b21985",null).exports;a.default.use(c.a);var g=new c.a({routes:[{path:"/",name:"Index",component:p},{path:"/login",name:"Login",component:m},{path:"/containerdetails",name:"Containerdetails",component:y}]}),w=s("BTaQ"),_=s.n(w),b=(s("nJkO"),s("hyJX")),N=s.n(b),C=s("8+8L");a.default.config.productionTip=!1,a.default.use(_.a,{locale:N.a}),a.default.use(C.a),new a.default({el:"#app",router:g,components:{App:l},template:"<App/>"})},SWeJ:function(t,e){},YABt:function(t,e){},bU9q:function(t,e){},d6UJ:function(t,e){},jV5y:function(t,e,s){t.exports=s.p+"static/img/biocontainers-logo.35fc92e.png"},mNrz:function(t,e){},nJkO:function(t,e){},vQDV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2212905fdd4e83a0f63a.js.map