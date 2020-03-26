<template>
  <div class="partida container">
    <div class="row">
      <div class="col-md-5 lista">
        <div class="row numero">
          <h3>Numero de Partidas</h3>
        </div>
        <div class="row">
          <ul>
            <li>Paritda</li>
          </ul>
        </div>
      </div>
      <div class="col-md-7">
        <div class="row">
          <div class="col rondas">
            <h2>Partida #Numero</h2>
            <h5>Jugador 0 - Rival 0</h5>
            <div class="col">
              <PartidaForm></PartidaForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PartidaForm from '@/components/PartidaForm'
export default {
  name: 'partida',
  components: {
    PartidaForm
  }
}
</script>

<style lang="scss">
.numero {
  background-color: burlywood;
  border: 2px solid black;
  border-radius: 10px;
}
.lista {
  background-color: darkkhaki;
  border-radius: 10px;
}

.rondas {
  background-color: aquamarine;
  border: 2px black solid;
  border-radius: 10px;
}
</style>
