<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button
      class="btn btn-danger"
      @click="logOut"
    >
      Cerrar Sesions
    </button>
  </div>
</template>

<script>
import Auth from '@/config/auth.js'
export default {
  name: 'About',
  methods: {
    logOut () {
      return Auth.logOut()
    }
  }
}
</script>
