<template>
  <div>
    <div class="card  bg-white p-3 mt-3">
      <div class="card-header d-flex ai-center pb-3">
        <i class="iconfont" :class="`icon-${icon}`"></i>
        <div class="fs-xxl flex-1 ml-1">{{title}}</div>
        <i class="iconfont icon-moreread"></i>
      </div>
      <div class="card-body pt-3 ">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      },

    },
    components: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {}
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/_variables.scss';

  .card {
    .card-header {
      border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
  }

</style>
