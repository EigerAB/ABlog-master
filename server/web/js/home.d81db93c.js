(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"02f6":function(t,e,a){},"9fcc":function(t,e,a){"use strict";a("02f6")},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-9"},[a("div",{staticClass:"mb-7",on:{mousemove:function(e){return t.coverMove(e)}}},[a("div",{ref:"cover",staticClass:"cover",on:{resize:function(){t.maxWidth=t.window.innerWidth+"px",t.cover.style.cssText="max-width:"+t.maxWidth}}},[a("div",{staticClass:"line"}),a("div",{ref:"imgBox",staticClass:"img-box",staticStyle:{transform:"translate3d(0px, 0px, 0px)"}}),t._m(0)])]),a("div",{staticClass:"post-container"},t._l(t.articles,(function(e,s){return a("div",{directives:[{name:"scroll-reveal",rawName:"v-scroll-reveal.reset",modifiers:{reset:!0}}],key:s,staticClass:"post"},[a("div",{staticClass:"img-box"},[a("router-link",{attrs:{to:"/article/list/"+e._id},nativeOn:{click:function(a){return t.viewHandler(a,e._id,"views",s,e.stuff.views.nums)}}},[a("img",{attrs:{src:e.icon,alt:""}})])],1),a("div",{staticClass:"info"},[a("div",{staticClass:"time"},[t._v(t._s(t._f("date")(e.createdAt,"YYYY-MM-DD")))]),a("div",{staticClass:"title"},[a("router-link",{attrs:{to:"/article/list/"+e._id},nativeOn:{click:function(a){return t.viewHandler(a,e._id,"views",s,e.stuff.views.nums)}}},[t._v(" "+t._s(e.title)+" ")])],1),a("div",{staticClass:"discribe"},[t._v(" "+t._s(e.describe)+" ")]),a("div",{staticClass:"stuff"},[a("div",{staticClass:"data"},[a("i",{staticClass:"iconfont icon-dianzan",style:{color:t.stuffMounted(e)[0]?"rgb(239, 109, 87)":""},on:{"~click":function(a){return t.stuffEventHandler(a,null,e._id,"likes",s,e.stuff.likes.nums)}}}),a("span",[t._v(t._s(e.stuff.likes.nums))]),t._m(1,!0)]),a("div",{staticClass:"data"},[a("i",{ref:"view",refInFor:!0,staticClass:"iconfont icon-icon-",style:{color:t.stuffMounted(e)[1]?"rgb(80, 188, 182)":""},attrs:{id:"view"}}),a("span",[t._v(t._s(e.stuff.views.nums))]),t._m(2,!0)]),a("div",{staticClass:"data"},[a("i",{staticClass:"iconfont icon-shoucang",style:{color:t.stuffMounted(e)[2]?"rgb(255, 168, 0)":""},on:{"~click":function(a){return t.stuffEventHandler(a,null,e._id,"collections",s,e.stuff.collections.nums)}}}),a("span",[t._v(t._s(e.stuff.collections.nums))]),t._m(3,!0)]),t._m(4,!0)])])])})),0),t.articles.length>0?a("div",{staticClass:"my-10 text-white"},[a("div",{staticClass:"page-navigator d-flex jc-center"},[a("div",{staticClass:"mx-4 hand fs-md",class:{current:1==t.pagination.currentPage}},[a("a",{attrs:{"data-hover":"首页"},on:{click:function(e){return t.goToPage(1)}}},[a("span",{staticClass:"white"},[t._v("首页")])])]),a("div",{staticClass:"mx-4 hand fs-md"},[a("a",{on:{click:function(e){return t.prev()}}},[a("span",{staticClass:"white"},[t._v("«")])])]),t._l(t.pagination.totalPage,(function(e){return a("div",{key:e,staticClass:"mx-4 hand fs-md",class:{current:e==t.pagination.currentPage}},[a("a",{staticClass:"white",attrs:{"data-hover":e},on:{click:function(a){return t.goToPage(e)}}},[t._v(" "+t._s(e)+" ")])])})),a("div",{staticClass:"mx-4 hand fs-md"},[a("a",{on:{click:function(e){return t.next()}}},[a("span",{staticClass:"white"},[t._v("»")])])]),a("div",{staticClass:"mx-4 hand fs-md",class:{current:t.pagination.totalPage==t.pagination.currentPage}},[a("a",{attrs:{"data-hover":"末页"},on:{click:function(e){return t.goToPage(t.pagination.totalPage)}}},[a("span",{staticClass:"white"},[t._v("末页")])])]),a("div",{staticClass:"current mx-4 fs-md"},[a("span",{staticClass:"white"},[t._v(" 第"+t._s(t.pagination.currentPage)+"页 / 共"+t._s(t.pagination.totalPage)+"页 ")])])],2)]):t._e(),a("div",{staticClass:"w-100 h-100"},[a("el-backtop",{attrs:{bottom:50}})],1),a("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialogVisible,width:"300px",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{class:{turnAnima:!1}},[a("form-input",{attrs:{isUpload:!1,toForm:t.userForm},on:{toRequest:t.submit}})],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-box"},[a("p",[t._v("心栖梦归处")]),a("h1",[t._v("不负韶华年")]),a("h3",[t._v("这是我的个人博客")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hint",staticStyle:{"background-color":"#ef6d57"}},[t._v(" 点赞 "),a("i",{staticStyle:{"border-top-color":"#ef6d57"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hint",staticStyle:{"background-color":"#50bcb6"}},[t._v(" 浏览 "),a("i",{staticStyle:{"border-top-color":"#50bcb6"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"hint",staticStyle:{"background-color":"#ffa800"}},[t._v(" 收藏 "),a("i",{staticStyle:{"border-top-color":"#ffa800"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data"},[a("span",[t._v("小团队")])])}],n=a("1157"),r=a.n(n),o=a("43e7"),l=a("2f62"),c={data(){return{articles:[],articleNodes:[],pagination:{totalPage:1,currentPage:1},dialogVisible:!1,userForm:{nickName:"",email:"",url:"",avatarImg:""},userInfo:{nickName:"",email:"",url:"",avatarImg:"",id:""},qqUrl:"https://q1.qlogo.cn/g?b=qq&nk=QQ号码&s=100"}},components:{formInput:o["a"]},methods:{...Object(l["b"])(["map_set_user_info"]),coverMove(t){const e=this.$refs.cover,a=this.$refs.imgBox;let s=e.offsetLeft,i=e.offsetTop,n=-(t.clientX-s)/10,r=-(t.clientY-i)/10;a.style.transform=`translate3d(${n}px,${r}px,0px)`},async fetchData(){const t=await this.$http.get("/articles/"+this.pagination.currentPage);this.articles=t.data.list,this.pagination.totalPage=t.data.totalPage,this.pagination.currentPage=t.data.currentPage},async goToPage(t){this.pagination.currentPage=t,this.fetchData()},prev(){1!=this.pagination.currentPage&&(this.pagination.currentPage--,this.fetchData())},next(){this.pagination.currentPage!=this.pagination.totalPage&&(this.pagination.currentPage++,this.fetchData())},downPage(){r()("html,body").animate({scrollTop:r()("#header").outerHeight()-56},500)},viewHandler(t,e,a,s,i){let n;"A"===t.target.tagName?n=t.target.parentElement.parentElement.lastElementChild.children[1].firstElementChild:"IMG"===t.target.tagName&&(n=t.target.parentElement.parentElement.nextSibling.lastElementChild.children[1].firstElementChild),this.stuffEventHandler(t,n,e,a,s,i)},stuffEventHandler(t,e,a,s,i,n){if(!localStorage.userInfo&&!e)return this.dialogVisible=!0;let r;r=e||t.target;const o=r.nextSibling.nextSibling.style.backgroundColor;r.style.color=o;let l=JSON.parse(localStorage.getItem("userInfo"));if(!l.opretor[s].includes(a)){this.$set(this.articles[i].stuff[s],"nums",n+1),l.opretor[s].push(a);let t=JSON.stringify(l);localStorage.setItem("userInfo",t),this.updateUser()}},stuffMounted(t){const e=["likes","views","collections"],a=[!1,!1,!1];return e.map((e,s)=>{t.stuff[e].users.includes(this.userInfo._id)&&(a[s]=!0)}),a},async updateUser(){const t=JSON.parse(localStorage.getItem("userInfo"));let e=await this.$http.put("users/"+this.userInfo._id,t);this.userInfo=e.data},async submit(t){let e;t.avatarImg=this.qqUrl.replace("QQ号码",t.email.replace("@qq.com","")),e=this.userInfo._id?await this.$http.put("users/"+this.userInfo._id,t):await this.$http.post("users",t),this.map_set_user_info(e.data),this.userInfo=e.data,localStorage.userInfo=JSON.stringify(e.data),this.dialogVisible=!1,setTimeout(()=>{location.reload()},400)}},created(){this.userInfo=localStorage.userInfo?JSON.parse(localStorage.userInfo):this.userInfo},mounted(){this.fetchData()},beforeRouteLeave(t,e,a){"文章详情 - Apollo"===t.meta.title?setTimeout(()=>{a()},300):a()}},u=c,d=(a("9fcc"),a("2877")),f=Object(d["a"])(u,s,i,!1,null,"de32ad26",null);e["default"]=f.exports}}]);