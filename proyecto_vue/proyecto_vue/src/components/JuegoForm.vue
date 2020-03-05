<template>
  <section>
    <div class="row renglon">
      <div class="col columna">
        Jugador
      </div>
    </div>

    <div class="row renglon">
      <div class="col-md-4">
        <button>Piedra</button>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 auto options">
        <div class="row">
          <div
            class="col col-sm-4"
            v-for="(option, key) in options"
            :key="key"
            @click="select(key)"
          ></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang = "js">
export default {
  name: 'JuegoForm',
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
}

.opcion {
  cursor: pointer;
}
</style>
