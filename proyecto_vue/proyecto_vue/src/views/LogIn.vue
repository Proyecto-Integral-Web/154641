<template>
  <div class="login container">
    <div class="card p-2">
      <div class="row">
        <div class="col">
          <LoginForm></LoginForm>
        </div>
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
