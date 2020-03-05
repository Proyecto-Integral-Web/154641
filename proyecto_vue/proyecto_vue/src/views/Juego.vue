<template>
  <div class="juego container">
    <div class="row">
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

export default {
  name: 'juego',
  components: {
    JuegoForm
  },
  methods: {
    getOpcion (opcion) {
      alert(opcion)
    }
  }
}
</script>
