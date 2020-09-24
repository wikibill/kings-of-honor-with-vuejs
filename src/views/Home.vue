<template>
  <div class="home">
    <swiper>
      <swiper-slide>
        <img src="@/assets/images/1.jpeg" class="w-100" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/2.jpeg" class="w-100" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/3.jpeg" class="w-100" alt="">
      </swiper-slide>
    </swiper>
    <!--    end of swiper-->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <!--     像某些单一的图标可以使用字体图标-->
      <div class="py-2 bg-light  fs-sm d-flex ai-center jc-center">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!--    end of nav-icons-->
    <div class="card  bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-cc-menu-circle"></i>
        <div class="fs-xxl flex-1 ml-1">新闻资讯</div>
        <i class="iconfont icon-moreread"></i>
      </div>
      <div class="card-body mt-2 ">
        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link">
              热门
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">
              新闻
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">
              公告
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">
              活动
            </div>
          </div>
          <div class="nav-item">
            <div class="nav-link">
              赛事
            </div>
          </div>

        </div>
        <div class="pt-3">
          <swiper>
            <swiper-slide v-for="m in 5" :key="5">
              <div class="py-3" v-for=" n in 5" :key="5">
                <span>[新闻]</span>
                <span>|</span>
                <span>9月24日正式服“峡谷探秘”版本更新公告</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //              @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      HelloWorld,
    },
    data() {
      return {}
    },
    computed: {},
    mounted() {
      // console.log("Current Swiper instance object", this.swiper);
      // this.swiper.slideTo(3, 1000, false);
    },
  };
</script>

<style lang="scss">
  @import '../assets/scss/variables';

  .nav-icons {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;

    .nav-item {
      width: 25%;
      border-right: 1px solid $border-color;

      &:nth-child(4n) {
        border-right: none;
      }

    }
  }

</style>
