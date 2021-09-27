import Vue from 'vue'
import App from './App.vue'

import DVU3 from 'wrk-ui'
Vue.use(DVU3)
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
