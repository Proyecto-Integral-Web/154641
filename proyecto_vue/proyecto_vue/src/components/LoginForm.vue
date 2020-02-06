<template>
  <section>
    <div class="row">
      <div class="col">
        <h3>Hellow</h3>
        <h3>Welcome Back</h3>
        <div class="row">
          <div class="col-md-6">
            <h6>Nombre</h6>
            <input
              type="name"
              class="form-control col"
            >
          </div>
          <div class="col-md-6">
            <h6>Apellido</h6>
            <input
              type="name"
              class="form-control col"
            >
          </div>
        </div>
        <h6>Email</h6>
        <input
          type="email"
          class="form-control col"
          placeholder="E-mail"
          v-model="user.email"
        >
        <h6>Contraseña</h6>
        <input
          type="password"
          class="form-control col"
          placeholder="Contraseña"
          v-model="user.password"
        >
        <div class="row">
          <div class="col-md-3">
            <input type="checkbox">
          </div>
          <div class="col-md-9">
            <h6>Aceptas terminos y condiciones?</h6>
          </div>
        </div>
        <button
          class="btn btn-purple btn-blocck"
          @click="login"
        >Login</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    console.log('Estoy en created')
  },
  mounted () {
    console.log('Estoy en mounted')
  },
  methods: {
    login () {
      let user = {
        email: 'esto es local'
      }
      console.log('Soy el login')
      console.log('User local' + user.email)
      console.log('User local' + this.user.password)

      setTimeout(() => {
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.btn-purple {
  background: purple;
  &:hover,
  &:active {
    background: red;
  }
}

h6 {
  text-align: left;
}
</style>
