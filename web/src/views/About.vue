<template>
  <div
    class="main-container page-about d-flex flex-column ai-center pt-9 content"
  >
    <div class="page p-5">
      <div class="text-green fs-xxxxl">About</div>
      <div class="text-grey-2 fs-sm mt-5">Published on Apri 13th 2023</div>
      <div class="mt-5 mb-5"></div>
      <div class="py-4">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">关于自己</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>• 三非弱鸡前端一枚，目前📍：西安</p>
        <p>• 未来希望成为一名优秀的前端程序🐵</p>
        <p>• 业余爱好比较多，喜欢旅游🏔️、音乐制作、跑步、踢⚽、打游戏等等</p>
      </div>
      <div class="py-4">
        <span class="fs-xxl text-green">#</span>
        &nbsp;
        <span class="fs-xxl text-grey-1">关于博客</span>
      </div>
      <div class="pl-5 text-green-1">
        <p>
          •
          该博客用Vue实现，express提供数据接口，mongoDB储存数据，部署在腾讯云或阿里云的linux服务器上，搭建博客的初衷是希望把自己平常工作学习生活中值得记录的东西记录下来
        </p>
        <p>• 如有错误、bug的地方烦请指正</p>
      </div>
      <div class="py-4 mt-6">
        <span class="fs-xxl text-green"># to myself</span>
        &nbsp;
        <span class="fs-xxl text-grey-1"></span>
      </div>
      <div class="pl-5 text-green-1 mb-9">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;一个人，越往前走，就越会发现自己所处环境的局限性。</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;乐观的方面是你认识到了这个问题，所以还有可能开始着手改变，这一点已经比很多人厉害了，因为你发现周围多数人还停留在没有意识到的阶段。不乐观的方面是你认识到了这个
        </p>
        <p>
          问题，也开始着手改变，可是被许多因素限制了，比如学习能力，社交圈子，思维方式，眼界，多年积累下来的习惯等等，在这个过程中会产生无数次自我怀疑，怀疑自己在做无用功,
        </p>
        <p>
          如果非要用词语来形容，那就是不甘心又必须承认这个事实的心情。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;大致也经历了很多人都经历过的阶段，当你的专业课越来越多，你发现自己已经不是大一新生的时候，在这个点上,许多人可能已经体会到学校环境与自己想象中的差距，开始观察
        </p>
        <p>
          和思考，这个过程是很迷茫的，你可能觉得自己被大学给耍了，却没有勇气退学重新高考。当不满情绪越积越多的时候，会出现两种分流，一种是迷茫之后，找到方向开始干，总之就
        </p>
        <p>
          是要再努把力，给自己多一点选择。另一种则是被操蛋的环境虐到麻木,不瘟不火或者什么也不管不计划，每天的任务是吃睡玩，考试成绩勉勉强强过线。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;其实最可怕的不是人们口中所说的什么学校，可怕的是周围的环境和自己没有足够的定力，自己的热情和追求一点点被这样的环境腐蚀，让你以为大学本来就该这样。
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/style.scss';
.content {
  line-height: 1.8 !important;
}

.bd-bottom-about {
  border-bottom: 1px solid grey;
  &.bd-bottom-about:hover {
    color: map-get($colors, 'red');
  }
}
</style>
