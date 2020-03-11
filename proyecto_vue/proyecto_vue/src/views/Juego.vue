<template>
  <div class="juego container">
    <div class="row">
      <div><button
          class="btn btn-success mb-2"
          @click="crearPartida"
        >Nueva Partida</button>
      </div>
    </div>
    <div class="row">
      <div class="col col-sm-6 offset-3">
        <h3 class="text-center">{{$route.params.no_partida.replace('-',' ')}}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <JuegoForm
          @opcion="getOpcion"
          :userOpcion="partida.usuario-1"
        ></JuegoForm>
      </div>
      <div class="col-md-6">
        <JuegoForm :userOpcion="partida.usuario_1!=''?partida.usuario_2:''"></JuegoForm>
      </div>
      <div>
        {{partida}}
      </div>
    </div>
  </div>
</template>

<script lang="js">

import JuegoForm from '@/components/JuegoForm'
import fireApp from '../config/_firebase.js'

const partida = fireApp.firestore().collection('juego-1')

export default {
  name: 'juego',
  components: {
    JuegoForm
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.obtenerPartida(to.params.no_partida)
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: []
    }
  },
  firestore: {
    partida: fireApp.firestore().collection('juego1')
  },
  watch: {
    '$route.params': {
      deep: true,
      immediate: true,
      handler (value) {
        this.$bind('partida', partida.doc(value.no_partida))
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
      fireApp.firestore().collection('juego-1').doc(this.$route.params.no_partida).update({ 'usuario_1': opcion })
    }
  }
}
</script>
