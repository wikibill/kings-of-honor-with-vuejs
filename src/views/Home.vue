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
    return{

    }
  },
  computed: {
    
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss">
  @import '../assets/sass/variables';
.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom:1px solid $border-color ;
  .nav-item{
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n){
      border-right: none;
    }

  }
}

</style>
