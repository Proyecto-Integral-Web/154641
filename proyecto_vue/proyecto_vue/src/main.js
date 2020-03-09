import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import Auth from './config/auth'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (to.meta.auth) {
    console.log('Necesita permiso para entrar')
    let user = await Auth.checkUser()
    console.log(`User: ${user}`)
    if (user == null) {
      next({ name: 'login' })
      return
    }
    console.log(`Usuario logeado: ${user.email}`)
    next()
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
