<template>
  <div class="juego container">
    <div class="row">
      <div class="col"><button
          class="btn btn-success mb-2 "
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
          @opcion="partida.participantes[0] === user.uid?getOpcion:''"
          :userOpcion="partida.usuario1"
          :displayName="!user.displayName?partida.names[0]!== user.displayName?partida.names[0]:'':user.displayName"
        ></JuegoForm>
      </div>
      <div class="col-md-6">
        <button
          v-if="!partida.names[1]"
          class="btn btn-outline-primary"
          @click="retar"
        >
          x
        </button>
        <JuegoForm
          :displayName="!partida.names[1]?'Esperando Retador':partida.names[1]"
          :userOpcion="partida.usuario1!=''?partida.usuario2:''"
          @opcion="partida.participantes[1] === user.uid?getOpcion:''"
        ></JuegoForm>
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
import Auth from '@/config/auth'

const partida = fireApp.firestore().collection('juego1')

export default {
  name: 'juego',
  components: {
    JuegoForm
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // vm.obtenerPartida(to.params.no_partida)
      vm.user = Auth.getUser()
      vm.$bind('partida', partida.doc(to.params.no_partida))
    })
  },
  data () {
    return {
      partida: {},
      partidas: [],
      user: {}
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
        this.user = Auth.getUser()
        this.$bind('partida', partida.doc(value.no_partida))
      }
    }
  },
  mounted () {
    this.user = Auth.getUser()
  },
  methods: {
    crearPartida () {
      this.user = Auth.getUser()
      let uid = this.user.uid

      fireApp.firestore().collection('juego1').add({
        participantes: [uid],
        names: [this.user.displayName == null ? 'Usuario 1' : this.user.displayName],
        usuario1: '',
        usuario2: '',
        ganador: ''
      })
    },
    obtenerPartida (partida) {
      fireApp.firestore().collection('juego1').doc(partida).get().then((result) => {
        console.log(result.data())
      })
    },
    retar () {
      this.user = Auth.getUser()
      // eslint-disable-next-line no-unused-vars
      let uid = this.user.uid

      this.partida.names.push(this.user.displayName == null ? 'Usuario' : this.user.displayName)
      this.partida.participantes.push(this.user.uid)
      fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(this.partida)
    },
    getOpcion (opcion) {
      let participantes = this.partida.participantes
      console.log(participantes.indexOf(this.user.uid))
      let data = {}
      if (participantes.indexOf(this.user.uid) === 0) {
        data = {
          'usuario1': opcion
        }
      } else {
        data = {
          'usuario2': opcion
        }
      }
      fireApp.firestore().collection('juego1').doc(this.$route.params.no_partida).update(data)
    }
  }
}
</script>
