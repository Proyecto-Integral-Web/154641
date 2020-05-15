<template>
  <div class="solodiseno container">

    <div class="row">

      <div class="col-md-4">

        <div class="row">
          <div class="col">
            <h3>Partidas Jugadas</h3>
            <div class="partidas">
              <ul>
                <li>Partida 1</li>
                <li>Partida 2</li>
                <li>Partida 3</li>
                <li>Partida 4</li>
                <li>Partida 5</li>
                <li>Partida 6</li>
                <li>Partida 7</li>
                <li>Partida 8</li>
                <li>Partida 9</li>
                <li>Partida 10</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row rivales">
          <div class="col">
            <h3>Rivales disponibles</h3>
            <input
              type="text"
              placeholder="Search.."
              name="search"
            >
            <button type="submit">Buscar rival</button>
            <div class="partidas">
              <ul>
                <li>Rival 1</li>
                <li>Rival 2</li>
                <li>Rival 3</li>
                <li>Rival 4</li>
                <li>Rival 5</li>
                <li>Rival 6</li>
                <li>Rival 7</li>
                <li>Rival 8</li>
                <li>Rival 9</li>
                <li>Rival 10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8">
        <img
          src="../assets/Titulo.png"
          class="titulo"
        >
        <div class="row dawn">
          <div class="col bordes">
            <h1>Partida 1 || Ronda 1 - 3</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 bordes">
            <h2>Victorias</h2>
            <h2>0 - 3</h2>
          </div>
          <div class="col-md-6 bordes">
            <h4>Preciona listo para iniciar</h4>
            <button class="btn btn-success mb-2 ">Listo</button>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <SoloDisenoForm></SoloDisenoForm>
          </div>
          <div class="col-md-6">
            <SoloDisenoForm></SoloDisenoForm>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script lang="js">

import SoloDisenoForm from '@/components/SoloDisenoForm'

export default {
  name: 'solodiseno',
  components: {
    SoloDisenoForm
  }
}
</script>

<style lang="scss">
.dawn {
  margin-top: 50px;
}

.titulo {
  width: 200px;
}

.rivales {
  margin-top: 50px;
}

.bordes {
  border: black solid 2px;
}

.partidas {
  border: black solid 2px;
  height: 110px;
  overflow: scroll;
  border-radius: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
ul li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}
ul li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ccc;
}
</style>
