(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message_list"],{"866a":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{prop:"_id",label:"id"}}),a("el-table-column",{attrs:{prop:"avatarImg",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.avatarImg,alt:"",height:"50"}})]}}])}),a("el-table-column",{attrs:{prop:"nickName",label:"昵称"}}),a("el-table-column",{attrs:{prop:"byAiteName",label:"艾特谁"}}),a("el-table-column",{attrs:{prop:"content",label:"留言"}}),a("el-table-column",{attrs:{label:"操作",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteHandle(e.row)}}},[t._v(" 删除 ")])]}}])})],1)],1)},s=[],n={data(){return{tableData:[],title:""}},created(){this.getList()},methods:{async sendEmail(t){await console.log(t)},async getList(){let t=await this.$http.get("/rest/messages");this.tableData=t.data},deleteHandle(t){this.$confirm(`是否确定要删除留言: ${t.content} ?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{await this.$http.delete("/rest/messages/"+t._id),await this.getList(),this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}}},i=n,r=a("0c7c"),o=Object(r["a"])(i,l,s,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=message_list.07a7a471.js.map