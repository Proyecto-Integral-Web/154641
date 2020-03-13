import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LogIn.vue'
import Register from '../views/Register.vue'
import Juego from '../views/Juego.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import('../views/Perfil.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/juego/:no_partida',
    name: 'juego',
    component: Juego
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    meta: {
      auth: true
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
