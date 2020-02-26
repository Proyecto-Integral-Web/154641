<template>
  <section>
    <div class="row">
      <div class="col">
        <h3>Bienvenido</h3>
        <h3>Ingresa tu cuenta</h3>
        <h6 class="textoBold">Email</h6>

        <input
          type="email"
          class="col textoImput"
          placeholder="correo@hotmail.com"
          v-model="user.email"
        >
        <h6 class="textoBold">Contraseña</h6>
        <input
          type="password"
          class="col textoImput"
          placeholder="Contraseña"
          v-model="user.password"
        >
        <div class="row">
          <div class="col-md-1">
            <input type="checkbox">
          </div>
          <div class="col-md-11">
            <h6>Recordarme</h6>
          </div>
        </div>
        <button
          class="btn btn-purple btn-blocck"
          @click="login"
        >Ingresar</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
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

      Auth.login(this.user)

      /* setTimeout(() => {
        this.$router.push({ name: 'about' })
      }, 1000) */
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

.textoImput {
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 2px solid black;
}

h6 {
  text-align: left;
}

.textoBold {
  font-weight: bold;
}
</style>
