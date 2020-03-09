<template>
  <section>
    <div class="row">
      <div>
        <h3>{{user.name}}</h3>
      </div>
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
// import Auth from '@/config/auth.js'
import Firebase from '@/config/_firebase.js'
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
  },
  created () {
    let perfilUsuario = Firebase.auth().currentData
    this.user.name = perfilUsuario.displayName
    this.user.apellido = perfilUsuario.displayLastName
    this.user.email = perfilUsuario.email
  },
  mounted () {
    console.log('Estoy en mounted')
  },
  methods: {
    actualizar () {
      let usuarioAcual = Firebase.auth().currentUser

      usuarioAcual.updateProfile({
        displayName: this.user.name,
        displayLastName: this.user.apellido,
        email: this.user.email
      }).then((result) => {
        console.log(result)
        return alert('Update')
      }).catch((err) => {
        console.table(err)
      })
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
