<template>
  <div class="main-container">
    <div class="page-article" v-if="model">
      <div class="d-none left menu" id="menu" v-show="isMenu" v-if="articleToc.length>0">
        <div class="blogs-menu text-grey-1 pl-6">
          <div>
            <h2 class="text-orange">目录</h2>
            <div
              class="menu-title hand text-ellipsis"
              :title="item.text"
              v-for="item in articleToc"
              :key="item.id"
              :style="{ paddingLeft: `${item.indent}em` }"
              @click="scrollTo(item.id)"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>

      <div class="page" id="page">
        <div class="title">
          <div class="title-top text-orange text-center p-5">Article</div>
          <div class="title-main">{{ model.title }}</div>
          <div class="title-bottom">
            <div class="iconBox">
              <i class="iconfont icon-dianzan"
              @click.once="stuffEventHandler($event,model._id,'likes',i,model.stuff.likes.nums)"
              :style="{color:stuffMounted(model)[0]?'rgb(239, 109, 87)':''}"
              ></i>
              <span>{{ model.stuff.likes.nums }}</span>
            </div>
            <div class="iconBox">
              <i 
              class="iconfont icon-icon-"
              :style="{color:stuffMounted(model)[1]?'rgb(80, 188, 182)':''}"
              ></i>
              <span>{{ model.stuff.views.nums }}</span>
            </div>
            <div class="iconBox">
              <i 
              class="iconfont icon-shoucang"
              @click.once="stuffEventHandler($event,model._id,'collections',i,model.stuff.collections.nums)"
              :style="{color:stuffMounted(model)[2]?'rgb(255, 168, 0)':''}"
              ></i>
              <span>{{ model.stuff.collections.nums }}</span>
            </div>
          </div>
        </div>

        <div class="text-grey-2 d-flex fs-sm my-4" style="flex-direction:row-reverse">
          <p class="ml-4">
            {{ model.createdAt | date('YYYY-MM-DD HH:mm:ss') }}
          </p>
          <p class="ml-4">字数：{{ model.body.length }}</p>
          <p>评论： {{ Comments.length }}</p>
        </div>
        <div>
          <router-link
            tag="div"
            :to="`/tags`"
            class="p-2 bdr post-tags text-border text-center bg-orange fs-sm hand mb-6"
          >
            <span>
              <i class="iconfont icon-biaoqian"></i>
            </span>
            &nbsp;
            <span class>{{ model.categories[0].name }}</span>
          </router-link>
        </div>
        <div class="text-grey-2 fs-md mb-9 container">
          <div class="markdown-body">
            <div id="content" v-html="model.body"></div>
          </div>
        </div>
      </div>

      <div class="d-none right"></div>
    </div>
    <div class="art-comment" v-if="model">
      <div class="text-dark border-top">
        <p>• 非特殊说明，本博所有文章均为博主原创。</p>
        <p>• 本博客所有文章均采用 CC BY-SA 3.0协议 。转载请注明出处！</p>
      </div>
      <h3 class="fs-xxxxl mt-9">评论</h3>
      <comment-textarea
        class="textarea-box bg-postcolor bdr"
        model="comments"
        @toResponse="getBlogsComments"
        type="parent"
        :blogsId="id"
        placeholder="输入留言内容"
      ></comment-textarea>
      <comment-list
        class="mt-7 mb-10"
        model="comments"
        @getCommentList="getBlogsComments"
        :commentsList="parentComments"
        v-if="parentComments"
        :blogsId="id"
      ></comment-list>
    </div>
    <div class="w-100 h-100">
      <el-backtop :bottom="50"></el-backtop>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-eighties.css'
import { addLineAndCopy } from '@/plugins/lineAndCopy'
import Toc from '../plugins/Toc.js'
import commentConfig from '@/commentConfig'

const renderer = new marked.Renderer()
marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
   userInfo: {
        nickName: '',
        email: '',
        url: '',
        avatarImg: '',
        id: '',
      },
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  },
 
})

export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      Comments: [],
      articleToc: [],
      parentComments: [],
      scrollTop:0,
      isMenu:true,
      menuBoxHight:0,
      userInfo: {
        nickName: '',
        email: '',
        url: '',
        avatarImg: '',
        id: '',
      },
    }
  },
  watch: {
    id: 'fetch',
  },
  methods: {
    stuffEventHandler(e,articleId,stuffKey,articleIndex,stuffNum){
      if (!localStorage.userInfo) {
        return (this.dialogVisible = true)
      }

      // 首次需要渲染
        const color=e.target.nextSibling.nextSibling.style.backgroundColor
        e.target.style.color=color
      
        this.$set(this.model.stuff[stuffKey],'nums',stuffNum+1)
        let oldValue=JSON.parse(localStorage.getItem('userInfo'))

        this.updateUser()
        if(!oldValue.opretor[stuffKey].includes(articleId)){
          oldValue.opretor[stuffKey].push(articleId)
          let newValue=JSON.stringify(oldValue)
          localStorage.setItem('userInfo',newValue)
          // this.updateUser()
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
    initHeight(){
          let scrollTop=window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;

          let menuBox;
          if(document.querySelector('#menu')){
            menuBox=document.querySelector('#menu');
          }
          
          let pageH;
          if(document.querySelector('#page')){
            pageH=document.querySelector('#page').offsetHeight
          }
          
          let menuH=0;
          if(menuBox&&this.menuBoxHight==0){
            this.menuBoxHight=menuBox.offsetTop+menuBox.offsetHeight
            menuH=this.menuBoxHight
          }else{
            menuH=this.menuBoxHight
          }
          // console.log("滚动距离"+scrollTop);
          // console.log("检查：：：：：："+menuH);
          if(menuBox&&scrollTop>=(pageH-menuH)){
            // this.isMenu=false
            menuBox.classList.add('hidden')
          }else if(menuBox){
            menuBox.classList.remove('hidden')
          }
    },
    // 防抖动函数
  debounce(fn, wait) {
    let timeout = null;
    return function() {
        if(timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
},
    async fetch() {
      const res = await this.$http.get(`articles/list/${this.id}`)
      this.model = res.data
      let tocData = Toc(marked(res.data.body))
      this.model.body = tocData.article
      this.articleToc = tocData.toc
      this.$nextTick(() => {
        addLineAndCopy()
        // this.addCodeSupport()
      })
    },
    scrollTo(id) {
      // 绑定 toc 点击事件
      let node = document.querySelector('[data-id="' + id + '"]')
      if (!node) {
        return
      }
      node.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    },
    async getBlogsComments() {
      const res = await this.$http.get(`/comments/${this.id}`)
      const blogsComments = res.data
      this.parentComments = blogsComments.filter(
        (v) => v.parent === commentConfig.topParentId
      )
      this.parentComments.forEach((c) => {
        return (c.children = blogsComments.filter((v) => v.parent === c._id))
      })
      this.Comments = res.data
    },
  },
  mounted() {
    this.fetch()
    this.getBlogsComments()
    
    window.addEventListener("scroll", this.debounce(this.initHeight,150),true);

    this.userInfo = localStorage.userInfo
      ? JSON.parse(localStorage.userInfo)
      : this.userInfo
  },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/variables';

.page {
  width: 55%;
  margin: 0 auto;
}
#content {
  line-height: 1.8;
}

.post-tags {
  max-width: 120px;
  overflow: hidden;
}

.post-tags:hover {
  background-color: map-get($colors, 'border');
  color: map-get($colors, 'grey');
}

.menu {
  position: fixed;
  left: 50px;
  top: 300px;
  height: 50%;
  width: 19%;
  overflow: scroll;
  border: 1px white solid;
  background-color: #fff;
  opacity: 0.9;
  transition: all 0.5s;
  .blogs-menu {
    line-height: 1.3rem;
    position: relative;
    .menu-title {
      padding: 6px 0;
      color: map-get($colors, 'dark');
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.hidden {
  opacity: 0;
}

.show {
  opacity: 1;
}

.page {
  background-color: white;
  color: black;
  opacity: 0.9;
  padding: 2rem;
}
.art-comment {
  max-width: 650px;
  margin: 0 auto 40px;
}
.textarea-box {
  padding: 15px;
}

@media screen and (max-width: 900px) {
  .d-none {
    display: none;
  }
  .page {
    margin: 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .page {
    width: 95%;
    margin: 0 auto;
  }
  .art-comment {
    width: 90%;
    margin: 0 auto;
  }
}

.title {
  .title-top {
    color: #f74;
    text-align: center;
    font-size: medium;
    padding: 1em;
    width: 20%;
    border-bottom: 1px solid #ff7744;
    margin: 2em auto;
  }

  .title-main {
    text-align: center;
    font-size: xx-large;
  }

  .title-bottom {
    text-align: center;
    font-size: 12px;
    color: #999;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 1em 0;
    border-bottom: 1px solid #ff7744;

    .iconBox {
      padding: 6px;
      font-size: 12px;
      display: flex;
      align-items: center;
      position: relative;
      transition: none;

      .iconfont {
        font-family: 'icomoon';
        font-style: normal;
        margin-right: 4px;
        margin-top: 0;
        display: inline-block;
        transition: none;
        cursor: default;
      }

      &:first-of-type:hover {
        color: #ef6d57;
      }

      &:nth-of-type(2):hover {
        color: #50bcb6;
      }

      &:nth-of-type(3):hover {
        color: #ffa800;
      }
    }
  }
}
</style>
