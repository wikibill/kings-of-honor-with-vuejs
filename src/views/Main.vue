<!--  -->
<template>
<div class=''>
  <div class="topbar bg-black py-2 px-3 d-flex ai-center">
    <img src="@/assets/images/logo.png" height="30">
    <div class="px-3 flex-1">
      <div class="text-white">
        王者荣耀
      </div>
      <div class="text-grey-1 fs-xxs mt-1">
        团队成就更多
      </div>

    </div>
    <button type="button" class="btn bg-primary">立即下载</button>
  </div>
  <div class="bg-primary pt-3 pb-2">
    <div class="nav nav-inverse ai-center pb-1 jc-around">
      <div class="nav-item active pb-1">
        <router-link tag="div" to="/home" class="nav-link">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link tag="div" to="/home" class="nav-link">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link tag="div" to="/home" class="nav-link">首页</router-link>
      </div>
    </div>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
name:'',
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
</style>
