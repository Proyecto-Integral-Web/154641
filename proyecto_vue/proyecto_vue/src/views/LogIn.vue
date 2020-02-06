<template>
  <div class="login container">
    <div class="row">
      <div class="col-md-8">
        <ImgLogin></ImgLogin>
      </div>
      <div class="col">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import LoginForm from '@/components/LoginForm'
import ImgLogin from '@/components/ImgLogin'

export default {
  name: 'login',
  components: {
    LoginForm,
    ImgLogin
  }
}
</script>
