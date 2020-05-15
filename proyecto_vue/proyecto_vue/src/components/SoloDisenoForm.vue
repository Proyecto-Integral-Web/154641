<template>
  <section>

    <div class="row renglon name">
      <div class="col">
        Nombre del Jugador
      </div>
    </div>

    <div class="row renglon">
      <div class="col">
        <img
          class="imagen"
          src="../assets/paper.png"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 auto opciones">
        <div class="row">
          <div class="col col-sm-4 opcion"><img
              class="mini"
              src="../assets/rock.png"
            ></div>
          <div class="col col-sm-4 opcion"><img
              class="mini"
              src="../assets/paper.png"
            ></div>
          <div class="col col-sm-4 opcion"><img
              class="mini"
              src="../assets/scissor.png"
            ></div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="js">

export default {
  name: 'solodisenoform'
}
</script>

<style lang="scss">
.renglon {
  background-color: teal;
  padding: 10px;
  border: solid black 3px;
}

.name {
  background-color: burlywood;
}

.opciones {
  .opcion {
    cursor: pointer;
    &:hover {
      background: darkgray;
    }
    border: grey solid 2px;
    border-radius: 50px;
    background-color: chocolate;
  }
}

.imagen {
  width: 50px;
}

.mini {
  width: 25px;
}
</style>
