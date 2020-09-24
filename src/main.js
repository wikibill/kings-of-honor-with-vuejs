import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import '@/assets/iconfont/iconfont.css'
import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
