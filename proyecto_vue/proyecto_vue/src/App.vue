<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Ingresar</router-link> |
      <router-link to="/register">Crear Cuenta</router-link> |
      <router-link
        :to="{
        name:'about'}"
        :class="$route.name=='about'?'btn':''"
      >About</router-link> |
      <router-link to="/perfil">Perfil</router-link> |
      <router-link to="/juego">Juego</router-link> |
      <router-link to="/partida">Partidas</router-link> |
      <router-link to="/solodiseno">SoloDiseño</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
