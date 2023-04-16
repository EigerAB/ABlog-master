<template>
  <div class="mb-9">
    <div class="mb-7" @mousemove="coverMove($event)">
      <div class="cover" ref="cover" @resize="()=>{
          maxWidth = window.innerWidth + 'px';
          cover.style.cssText = `max-width:${maxWidth}`;
        }">
        <div class="line"></div>
        <div 
          class="img-box" 
          ref="imgBox"
          style="transform: translate3d(0px, 0px, 0px)">
        </div>
        <div class="text-box">
          <p>心栖梦归处</p>
          <h1>不负韶华年</h1>
          <h3>这是我的个人博客</h3>
        </div>
      </div>
    </div>

    <div class="post-container">
      <div
        class="post"
        v-scroll-reveal.reset
        v-for="(article, i) in articles"
        :key="i"
      >
        <div class="img-box">
          <router-link :to="`/article/list/${article._id}`"
            @click.native="viewHandler($event,article._id,'views',i,article.stuff.views.nums)"
          >
            <img :src="article.icon" alt="" />
          </router-link>
        </div>

        <div class="info">
          <div class="time">{{ article.createdAt | date('YYYY-MM-DD') }}</div>

          <div class="title">
            <router-link :to="`/article/list/${article._id}`"
            @click.native="viewHandler($event,article._id,'views',i,article.stuff.views.nums)"
            >
              {{ article.title }}
            </router-link>
          </div>

          <div class="discribe">
            {{ article.describe }}
          </div>

          <div class="stuff">
            <div class="data">
              <i 
              class="iconfont icon-dianzan" 
              @click.once="stuffEventHandler($event,null,article._id,'likes',i,article.stuff.likes.nums)"
              :style="{color:stuffMounted(article)[0]?'rgb(239, 109, 87)':''}"
              ></i>

              <span>{{article.stuff.likes.nums}}</span>
              <span class="hint" style="background-color: #ef6d57">
                点赞
                <i style="border-top-color: #ef6d57"></i>
              </span>
            </div>
            <div class="data">
              <i 
              ref="view"
              id="view"
              class="iconfont icon-icon-"
              :style="{color:stuffMounted(article)[1]?'rgb(80, 188, 182)':''}"
              ></i>
              <span>{{ article.stuff.views.nums}}</span>
              <span class="hint" style="background-color: #50bcb6">
                浏览
                <i style="border-top-color: #50bcb6"></i>
              </span>
            </div>
            <div class="data">
              <i 
              class="iconfont icon-shoucang" 
              @click.once="stuffEventHandler($event,null,article._id,'collections',i,article.stuff.collections.nums)"
              :style="{color:stuffMounted(article)[2]?'rgb(255, 168, 0)':''}"
              ></i>
              <span>{{ article.stuff.collections.nums}}</span>
              <span class="hint" style="background-color: #ffa800">
                收藏
                <i style="border-top-color: #ffa800"></i>
              </span>
            </div>
            <div class="data">
              <span>小团队</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 页码 -->
    <div class="my-10 text-white" v-if="articles.length > 0">
      <div class="page-navigator d-flex jc-center">
        <div
          :class="{ current: 1 == pagination.currentPage }"
          class="mx-4 hand fs-md"
        >
          <a @click="goToPage(1)" data-hover="首页">
            <span class="white">首页</span>
          </a>
        </div>
        <div class="mx-4 hand fs-md">
          <a @click="prev()">
            <span class="white">&laquo;</span>
          </a>
        </div>
        <div
          class="mx-4 hand fs-md"
          :class="{ current: article == pagination.currentPage }"
          v-for="article in pagination.totalPage"
          :key="article"
        >
          <a @click="goToPage(article)" :data-hover="article" class="white">
            {{ article }}
          </a>
        </div>

        <div class="mx-4 hand fs-md">
          <a @click="next()">
            <span class="white">&raquo;</span>
          </a>
        </div>
        <div
          class="mx-4 hand fs-md"
          :class="{ current: pagination.totalPage == pagination.currentPage }"
        >
          <a @click="goToPage(pagination.totalPage)" data-hover="末页">
            <span class="white">末页</span>
          </a>
        </div>
        <div class="current mx-4 fs-md">
          <span class="white">
            第{{ pagination.currentPage }}页 / 共{{ pagination.totalPage }}页
          </span>
        </div>
      </div>
    </div>

    <div class="w-100 h-100">
      <el-backtop :bottom="50"></el-backtop>
    </div>

    <el-dialog
      :append-to-body="true"
      :visible.sync="dialogVisible"
      width="300px"
      center
    >
      <div :class="{ turnAnima: false }">
        <form-input
          @toRequest="submit"
          :isUpload="false"
          :toForm="userForm"
        ></form-input>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import $ from 'jquery'
import formInput from '../components/formInput'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      articles: [],
      articleNodes: [],
      pagination: {
        totalPage: 1,
        currentPage: 1,
      },
      dialogVisible: false,
      userForm: {
        nickName: '',
        email: '',
        url: '',
        avatarImg: '',
      },
      userInfo: {
        nickName: '',
        email: '',
        url: '',
        avatarImg: '',
        id: '',
      },
      qqUrl: 'https://q1.qlogo.cn/g?b=qq&nk=QQ号码&s=100',
    }
  },
   components: {
    formInput,
  },
  methods: {
    ...mapMutations(['map_set_user_info']),
    coverMove(e){
        const cover=this.$refs.cover
        const imgBox=this.$refs.imgBox
        let boxLeft = cover.offsetLeft;
        let boxTop = cover.offsetTop;
        let x = -(e.clientX - boxLeft) / 10;
        let y = -(e.clientY - boxTop) / 10;
        imgBox.style.transform = `translate3d(${x}px,${y}px,${0}px)`;
    },
    async fetchData() {
      const res = await this.$http.get(
        `/articles/${this.pagination.currentPage}`
      )
      this.articles = res.data.list
      this.pagination.totalPage = res.data.totalPage
      this.pagination.currentPage = res.data.currentPage

    },
    async goToPage(pageNum) {
      this.pagination.currentPage = pageNum
      this.fetchData()
    },
    prev() {
      if (this.pagination.currentPage == 1) {
        return
      }
      this.pagination.currentPage--
      this.fetchData()
    },
    next() {
      if (this.pagination.currentPage == this.pagination.totalPage) {
        return
      }
      this.pagination.currentPage++
      this.fetchData()
    },
    downPage() {
      $('html,body').animate(
        { scrollTop: $('#header').outerHeight() - 56 },
        500
      )
    },

    viewHandler(e,artId,stuffKey,articleIndex,stuffNum){
      let box;
      if(e.target.tagName==='A')
      box=e.target.parentElement.parentElement.lastElementChild.children[1].firstElementChild
      else if(e.target.tagName==='IMG'){
        box=e.target.parentElement.parentElement.nextSibling.lastElementChild.children[1].firstElementChild
      }
      
      this.stuffEventHandler(e,box,artId,stuffKey,articleIndex,stuffNum)
    },
    stuffEventHandler(e,targetBox,articleId,stuffKey,articleIndex,stuffNum){
      if (!localStorage.userInfo&&!targetBox) {
        return (this.dialogVisible = true)
      }

        let box
        if(targetBox){
          box=targetBox
        }else {
          box=e.target
        }
        const color=box.nextSibling.nextSibling.style.backgroundColor
        box.style.color=color
      
       
        let oldValue=JSON.parse(localStorage.getItem('userInfo'))
        if(!oldValue.opretor[stuffKey].includes(articleId)){
          this.$set(this.articles[articleIndex].stuff[stuffKey],'nums',stuffNum+1)
          oldValue.opretor[stuffKey].push(articleId)
          let newValue=JSON.stringify(oldValue)
          localStorage.setItem('userInfo',newValue)
          this.updateUser()
        }
    },
    stuffMounted(article){
       const nameKey=['likes','views','collections']
       const bool=[false,false,false]
       nameKey.map((name,i)=>{
        if(article.stuff[name].users.includes(this.userInfo._id)){
            bool[i]=true 
        }
       })
       return bool
    },
    async updateUser(){
      const UserData=JSON.parse(localStorage.getItem('userInfo'))
      let res = await this.$http.put(`users/${this.userInfo._id}`,UserData)
      this.userInfo=res.data
    },

    async submit(userForm) {
      userForm.avatarImg = this.qqUrl.replace(
        'QQ号码',
        userForm.email.replace('@qq.com', '')
      )
      let res
      if (this.userInfo._id) {
        res = await this.$http.put(`users/${this.userInfo._id}`, userForm)
      } else {
        res = await this.$http.post('users', userForm)
      }

      this.map_set_user_info(res.data)
      this.userInfo = res.data
      localStorage.userInfo = JSON.stringify(res.data)
      this.dialogVisible = false

      setTimeout(()=>{
        location.reload()
      },400)
    },
  },
  created() {
    this.userInfo = localStorage.userInfo
      ? JSON.parse(localStorage.userInfo)
      : this.userInfo
  },
  mounted() {
    this.fetchData()
  },
  beforeRouteLeave (to, from, next) {
    if(to.meta.title==='文章详情 - Apollo'){
      setTimeout(()=>{
        next()
      },300)
    }else{
      next()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.cover {
  /* max-width: 1536px; */
  height: 100vh;
  position: relative;
  overflow: hidden;

  .line{
    width: 100%;
    height: 120%;
    background-color: black;
    background-size: cover;
    overflow: hidden;
    opacity: 0.1;
    position: absolute;
    left: -30%;
    z-index: 10;
    transform: rotateZ(-110deg);
  }

  .text-box {
    color: #fff;
    position: absolute;
    bottom: 8%;
    left: 5%;
    z-index: 10;

    p {
      margin: 20px 0;
      font-size: 50px;
      font-weight: 600;
    }
    h1 {
      font-size: 120px;
      line-height: 160px;
      margin-left: -10px;
      color: transparent;
      margin: 20px 0;
      -webkit-text-stroke: 1px #fff;
      background: url(../assets/images/back.png);
      background-position-x: 0%;
      background-position-y: 0%;
      background-clip: border-box;
      -webkit-background-clip: text;
      background-position: 0 0;
      animation: back 20s linear infinite;
    }

    h3 {
      color: white;
      font-size: 40px;
      font-weight: 500;
    }
  }

  .img-box {
    width: 120%;
    height: 120%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), transparent),
    url(../assets/images/bg1.png);
    background-size: cover;
    background-position: center;
    transition: all .8s;
  }

}

@keyframes back {
  100% {
    background-position: 2000px 0;
  }
}

@keyframes arrowDown {
  0% {
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translatey(-20%);
  }
  20% {
    visibility: visible;
    opacity: 0;
    -webkit-transform: translatey(10%);
  }
  100% {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translatey(20%);
  }
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 13em;
  }
}
@keyframes shine {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .shouye-text {
    font-size: 24px !important;
  }
  .line-down {
    font-size: 24px !important;
  }
}
</style>
