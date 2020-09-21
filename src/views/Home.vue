<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="@/assets/images/swiper-1.jpeg" class="w-100" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/swiper-2.jpeg" class="w-100" />
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/images/swiper-3.jpeg" class="w-100" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="scss">
.pagination {
  .swiper-pagination-bullet {
    background-color: #fff;
  }
}
</style>
