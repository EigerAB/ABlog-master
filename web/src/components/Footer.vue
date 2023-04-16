<template>
  <div class="foot text-white">
    <div class="footer-body ">
      <dl class="footer-item ">
        <dt class="footer-itemtitle">友情链接</dt>
        <div class="footer-col2">
          <dd class="footer-itemtext">
            <a href="https://www.cnblogs.com/tuziling/" target="_blank">
              博客园
            </a>
          </dd>
          <dd class="footer-itemtext">
            <a href="https://blog.csdn.net/weixin_43764814" target="_blank">
              csdn
            </a>
          </dd>
          <dd class="footer-itemtext">
            <a href="https://juejin.im/user/3843548381185624" target="_blank">
              掘金
            </a>
          </dd>
          <dd class="footer-itemtext">
            <a
              href="https://oss.wangmiaozero.cn/html/index.html"
              target="_blank"
            >
              全栈修炼
            </a>
          </dd>
          <dd class="footer-itemtext">
            <a href="http://css.wangmiaozero.cn" target="_blank">css灵感</a>
          </dd>
          <dd class="footer-itemtext">
            <a href="https://cnodejs.org" target="_blank">cnodejs社区</a>
          </dd>
          <dd class="footer-itemtext">
            <a href="https://semyin.com/" target="_blank">semyin</a>
          </dd>
          <dd class="footer-itemtext">
            <a href="https://youyiqin.github.io/blog/" target="_blank">妙才</a>
          </dd>
          <dd class="footer-itemtext">
            <a
              href="http://css.wangmiaozero.cn/html-css-examples/index.html"
              target="_blank"
            >
              js特效
            </a>
          </dd>
        </div>
      </dl>
      <dl class="footer-item">
        <dt class="footer-itemtitle">了解我</dt>
        <div class="footer-col2">
          <dd class="footer-itemtext">
            <router-link to='/about'>了解我</router-link>
          </dd>
        </div>
      </dl>
      <dl class="footer-item">
        <dt class="footer-itemtitle">相关信息</dt>
        <div class="footer-col2">
          <dd class="footer-itemtext">
            <a href="/" target="_blank">隐私政策</a>
          </dd>
          <dd class="footer-itemtext">
            <a href="/" target="_blank">团队全栈修炼社区用户服务协议</a>
          </dd>
          <dd class="footer-itemtext">
            <a href="/" target="_blank">团队全栈修炼用户服务协议</a>
          </dd>
        </div>
      </dl>
      <dl class="footer-item">
        <dt class="footer-itemtitle">联系我</dt>
        <div class="footer-contact">
          <dd class="footer-itemtext">
            <span>QQ:2201044408</span>
          </dd>
          <dd class="footer-itemtext">
            <span>QQ邮箱:2201044408@qq.com</span>
          </dd>
        </div>
      </dl>
    </div>

    <div class="footer-bottom">
      <div class="footer-copyright">
        <p>团队博客</p>
        <p>
          互联网违法不良信息举报电话：010-12321｜互联网违法不良信息举报邮箱：shxiwxb@126.com
        </p>
        <p>
          亲爱的市民朋友，西安警方反诈劝阻电话“96110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。
        </p>
      </div>
      <div class="footer-licence">
        <a href="http://www.shjbzx.cn" target="_blank">
          <img src="images/foot1.png" alt="" />
        </a>
        <a href="https://www.12377.cn/" target="_blank">
          <img src="images/foot2.png" alt="" />
        </a>
        <a href="/"><img src="images/foot3.png" alt="" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: [],
      currentTime: '232',
      startTime: 1583856000000,
      timeCha: '232321',
      timeObj: {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      },
      showTime: true,
      intTime: null,
    }
  },
  
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  text-align: center;
  padding: 40px 0;
  max-width: 1280px;
  margin: 0 auto;

  .footer-body {
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 1280px;
    padding: 30px 46px 20px;
  }

  .footer-item {
    padding: 0 10px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    &:nth-child(4) {
      width: auto;
      flex-grow: 1;
    }
  }

  .footer-itemtitle {
    margin-bottom: 30px;
    color: var(--color-text-1);
    font-weight: 600;
  }

  .footer-col2 {
    display: flex;
    flex-wrap: wrap;
    min-width: 120px;
    margin-right: -20px;

    .footer-itemtext {
      margin-right: 10px;
      line-height: 26px;
      white-space: nowrap;
      margin-left: 0%;
      a,
      span {
        color: var(--color-text-2);
      }
    }
  }
}
</style>
