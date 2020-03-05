<template>
  <section>
    <div class="row">
      <div class="col">
        <h3>Bienvenido</h3>
        <h3>Ingresa tu cuenta</h3>
        <h6 class="textoBold">Email</h6>

        <alerts-component
          v-if="showError"
          :message="errorMessage"
          :code="errorCode"
        ></alerts-component>

        <input
          type="email"
          class="col textoImput"
          placeholder="correo@hotmail.com"
          v-model="user.email"
          @keypress="showError = false"
        >
        <h6 class="textoBold">Contraseña</h6>
        <input
          type="password"
          class="col textoImput"
          placeholder="Contraseña"
          v-model="user.password"
          @keypress.enter="login"
          @keypress="showError = false"
        >

        <div class="row">
          <div class="col">
            <small>Recordarme</small>
          </div>
          <div class="col">
            <small>Olvidaste tu contrasena?</small>
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
      console.log('Soy el login')
      console.log(this.user.email)
      console.log(this.user.password)

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
