<template>
  <section>
    <div class="row">
      <div class="col-md-6">
        <img
          class="perfilFoto"
          src="../assets/FotoPerfil.png"
        >
        <div class="row">
          <div class="col-md-6">
            <input
              type="text"
              placeholder="Nombre"
              v-model="user.name"
            >
          </div>
          <div class="col-md-6">
            <input
              type="text"
              placeholder="Apellido"
              v-model="user.apellido"
            >
          </div>
        </div>

        <input
          type="email"
          placeholder="correo@hotmail.com"
          v-model="user.email"
        >
        <br>
        <button @click="actualizar">Actualizar</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
// import Firebase from '@/config/_firebase.js'
export default {
  name: 'PerfilForm',
  data () {
    return {
      user: {
        name: '',
        apellido: '',
        email: ''
      }
    }
  }, /*
  created () {
    let perfilUsuario = Firebase.auth().currentData
    this.user.name = perfilUsuario.displayName
    this.user.apellido = perfilUsuario.displayLastName
    this.user.email = perfilUsuario.email
  }, */
  methods: {
    logOut () {
      return Auth.logOut()
    },
    actualizar () {
      Auth.actualizarUsuario(this.usuario)
    }
  }
}
</script>

<style lang="scss">
.perfilFoto {
  width: 200px;
}

.textoImput {
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 2px solid black;
}
</style>
