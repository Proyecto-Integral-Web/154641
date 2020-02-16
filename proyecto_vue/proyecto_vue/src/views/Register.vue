<template>
  <div class="register container">
    <div class="row">
      <div class="col-md-8">
        <ImgLogin></ImgLogin>
      </div>
      <div class="col">
        <Registro></Registro>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import Registro from '@/components/Registro'
import ImgLogin from '@/components/ImgLogin'

export default {
  name: 'register',
  components: {
    Registro,
    ImgLogin
  }
}
</script>
