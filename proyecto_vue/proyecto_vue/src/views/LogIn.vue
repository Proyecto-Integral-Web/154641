<template>
  <div class="login container">
    <div class="row">
      <div class="col-md-8">
        <img
          src="../assets/Ingresar.png"
          width="500px"
        >
      </div>
      <div class="col">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
