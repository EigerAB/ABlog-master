<template>
  <div class="nav-box">
    <div class="menu" @click.prevent="clickMenu()">
      <span v-show="!isShowMenu" class="iconfont icon-xialalan iconMenu"></span>
      <span v-show="isShowMenu" class="iconfont icon-quxiao iconMenu"></span>
    </div>

    <div class="nav" ref="nav">
      <ul class="nav-list">
        <li v-for="(item,i) in items" :key="i">
          <div class="tips-mark">
            <router-link  :to="item.link">{{item.name}}</router-link>
            <div class="tips-tit">{{item.text}}</div>
          </div>
        </li>
      </ul>
      <div class="world">
        <div class="tips-mark">
          <p>You are the 1st visitor on this site!</p>
          <div class="tips-tit">
            <p>您是本网站第1位访客</p>
          </div>
        </div>
        <div class="tips-mark">
          <p>Sometimes you need to applaud yourself.</p>
          <div class="tips-tit">
            <p>有时候需要为自己鼓掌.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
export default {
  components: {
    Search,
  },
  data() {
    return {
      isShowMenu: false,
      isPlay: false,
      isScrolling: false,
      items: [
        { name:'Home',text: '首页', link: '/' },
        { name:'Archives', text: '归档', link: '/archives' },
        { name:'Tags', text: '标签', link: '/tags' },
        { name:'Message', text: '留言', link: '/message' },
        { name:'About', text: '关于', link: '/about' },
      ],
    }
  },
  watch:{
    $route:{
      handler(){
        this.isShowMenu=false
        this.$refs.nav.style.top='-100%'
      }
    }
  },
  mounted() {

  },
  methods: {
   clickMenu(){
    this.isShowMenu=!this.isShowMenu

    if(this.isShowMenu){
      this.$refs.nav.style.top='0%'
    }
    else{
      this.$refs.nav.style.top='-100%'
    }

   }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';

.menu {
    position: fixed;
    width: 50px;
    height: 50px;
    top: 70px;
    right: 40px;
    text-align: center;
    z-index: 1000;

    &>span {
      display: inline-block;
    margin: 0;
    font-family: "icomoon";
    font-size: 50px;
    color: #EF6D57;
    background-color: rgba(255,255,255,.8);
    
}
}

.nav {
  top: -100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  flex-direction: column;
  background: hsla(0, 0%, 100%, 0.86);
  transition: top 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);

  .nav-list {
    & > li {
      margin: 0 20px 20px;
      list-style: none;
      display: inline-block;

      
    }
  }

  .tips-mark {
        width: 100%;
        height: 100%;
        z-index: 1000;
        position: relative;

        & > p {
          color: #666;
        }

        &:hover {
          .tips-tit {
            opacity: 1;
            visibility: visible;
            transform: scale(1);
          }
        }

        &::before {
          content: '';
          height: 6px;
          width: 6px;
          background: #f16339;
          border-radius: 50%;
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 0 4px rgba(241, 99, 57, 0.1);
          margin: 2px 8px;
          -webkit-animation: flash 8s infinite;
          animation: flash 8s infinite;
        }

        a {
          font-size: 24px;
          cursor: pointer;
          color: #666;
          letter-spacing: 1px;
        }

        .tips-tit {
          position: absolute;
          white-space: nowrap;
          font-size: 12px;
          background: #ef6d57;
          color: #fff;
          bottom: 100%;
          left: 100%;
          border-radius: 20px;
          padding: 0 10px;
          height: 24px;
          line-height: 26px;
          margin-bottom: 6px;
          transition: all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          transform-origin: left bottom;
          transform: scale(0);
          opacity: 0;
          visibility: hidden;
          z-index: 999;

          &::before {
            content: '';
            border-color: transparent #ef6d57 transparent transparent;
            border-style: solid;
            border-width: 10px 10px 0;
            position: absolute;
            left: 10px;
            top: 22px;
            transform: rotate(188deg);
          }
        }
      }

  .world {
    position: absolute;
    bottom: 30px;
    display: block;
    text-align: center;
    color: #666;

    .tips-mark{
      &:hover{
        cursor: default;
      }
    }

    p {
      font-size: 16px;
      margin: 0;
    }
  }
}

@keyframes flash {
  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}


.dis-none {
  display: none;
}

</style>
