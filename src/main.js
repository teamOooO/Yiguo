// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

<<<<<<< HEAD
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import './styles/app.scss'
// import Search from '@/components/classify/Search'

Vue.use(MintUI)
=======
>>>>>>> sj-201803015-homepage

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  }
})
