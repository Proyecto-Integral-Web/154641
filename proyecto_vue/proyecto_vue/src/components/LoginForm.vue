<template>
  <section>
    <div class="row">
      <div class="col">
        <h3>Hellow</h3>
        <h3>Welcome Back</h3>
        <div class="row">
          <div class="col-md-6">
            <h6>Nombre</h6>
            <input
              type="name"
              class="form-control col"
            >
          </div>
          <div class="col-md-6">
            <h6>Apellido</h6>
            <input
              type="name"
              class="form-control col"
            >
          </div>
        </div>
        <h6>Email</h6>
        <input
          type="email"
          class="form-control col"
        >
        <h6>Contrasena</h6>
        <input
          type="contrasena"
          class="form-control col"
        >
        <div class="row">
          <div class="col-md-3">
            <input type="checkbox">
          </div>
          <div class="col-md-9">
            <h6>Aceptas terminos y condiciones?</h6>
          </div>
        </div>
        <button class="btn btn-purple btn-blocck">Login</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'LoginForm'
}
</script>

<style lang="scss">
.btn-purple {
  background: purple;
  &:hover,
  &:active {
    background: red;
  }
}

h6 {
  text-align: left;
}
</style>
