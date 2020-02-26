<template>
  <section>
    <div class="row">
      <div class="col-md-2">
        <img
          class="perfilFoto"
          src="../assets/FotoPerfil.png"
        >
        <div class="row">
          <div class="col-md-6">
            <label>Nombre</label>
          </div>
          <div class="col-md-6">
            <label>Apellido</label>
          </div>
        </div>

        <label>Correo Electronico</label>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'PerfilForm'
}
</script>

<style lang="scss">
.perfilFoto {
  width: 100px;
}

.textoImput {
  margin-top: 8px;
  margin-bottom: 8px;
  border: none;
  border-bottom: 2px solid black;
}
</style>
