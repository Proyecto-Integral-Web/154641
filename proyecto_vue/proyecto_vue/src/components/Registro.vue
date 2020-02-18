<template>
  <section>
    <div class="row">
      <div class="col">
        <h3>Bienvenido</h3>
        <h3>Crea una cuenta</h3>
        <div class="row">
          <div class="col-md-6">
            <h6 class="textoBold">Nombre</h6>
            <input
              type="name"
              class="col textoImput"
              v-model="user.name"
            >
          </div>
          <div class="col-md-6">
            <h6 class="textoBold">Apellido</h6>
            <input
              type="apellido"
              class="col textoImput"
              v-model="user.apellido"
            >
          </div>
        </div>
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
            <h6>Aceptas terminos y condiciones?</h6>
          </div>
        </div>
        <button
          class="btn btn-purple btn-blocck"
          @click="Registrarse"
        >Registrarse</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'Resgistro',
  data () {
    return {
      user: {
        name: '',
        apellido: '',
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
    Registrarse () {
      console.log('Soy el registro')
      console.log(this.user.name)
      console.log(this.user.apellido)
      console.log(this.user.email)
      console.log(this.user.password)

      setTimeout(() => {
        this.$router.push({ name: 'about' })
        Auth.Registrarse(this.user)
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
