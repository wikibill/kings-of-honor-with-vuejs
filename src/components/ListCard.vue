<template>
  <div>
    <div class="nav jc-between">
      <div class="nav-item" :class="{active:false}">
        <div class="nav-link">
          热门
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
</template>

<script>
  import Card from "./Card";
  export default {
    name: 'ListCard',
    props: {
      categories:{
        type:Array,
        // required,
      }
    },
    components: {Card},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {}
  }
</script>

<style scoped>

</style>
