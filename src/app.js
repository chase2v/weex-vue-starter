import store from './store'
import router from './router'

import App from './index.vue'

new Vue({
  el: '#root',
  router,
  store,
  render: h => h(App)
})

router.push('/')
