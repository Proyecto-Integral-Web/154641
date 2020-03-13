<template>
  <section>
    <div class="row renglon">
      <div class="col columna">
        Jugador
      </div>
    </div>

    <div class="row renglon">
      <div class="col">
        <button>Piedra</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 auto opciones">
        <div class="row">
          <div
            class="col col-sm-4 opcion"
            v-for="(option, key) in options"
            :key="key"
            @click="select(key)"
          >{{option}}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang = "js">
export default {
  name: 'JuegoForm',
  props: ['userOpcion', 'displayName'],
  data () {
    return {
      options: {
        p: 'Piedra',
        t: 'Tijera',
        pp: 'Papel'
      }
    }
  },
  methods: {
    select (key) {
      this.$emit('opcion', key)
    }
  }
}
</script>

<style lang="scss">
.renglon {
  background-color: burlywood;
  padding: 10px;
  border: solid black 3px;
}

.opciones {
  background: grey;
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
  }
}
</style>
