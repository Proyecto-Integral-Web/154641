<template>
  <section>
    <h3 class="text-right">Hellow</h3>
    <h3 class="text-right">Welcome Back</h3>
    <div class="col">
      <input
        type="email"
        class="from-control mb-2"
      >
      <input
        type="contrasena"
        class="form-control mb-2"
      >
      <button class="btn btn-purple btn-blocck">Login</button>
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
    background: green;
  }
}
</style>
