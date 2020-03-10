<template>
  <div class="juego container">
    <div class="row">
      <button
        class="acomodar"
        @click="crearPartida"
      >Nueva Partida</button>
      <div class="col-md-6">
        <JuegoForm @opcion="getOpcion"></JuegoForm>
      </div>
      <div class="col-md-6">
        <JuegoForm></JuegoForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import JuegoForm from '@/components/JuegoForm'
import fireApp from '../config/_firebase.js'

export default {
  name: 'juego',
  components: {
    JuegoForm
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.obtenerPartida(to.params.no_partida)
    })
  },
  data () {
    return {
      partida: ''
    }
  },
  firestore: {
    partida: fireApp.firestore().collection('juego1')
  },
  watch: {
    id: {
      inmediate: true,
      handler (id) {
        this.$bind('user', users.doc(id))
      }
    }
  },
  methods: {
    crearPartida () {
      fireApp.firestore().collection('juego1').doc('partida-2').set({
        'usuario-1': '',
        'usuario-2': '',
        'ganador': ''
      })
    },
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego1').doc(partida).then((result) => {
        console.log(result)
      })
    },
    getOpcion (opcion) {
      alert(opcion)
    }
  }
}
</script>

<style lang="scss">
.acomodar {
}
</style>
