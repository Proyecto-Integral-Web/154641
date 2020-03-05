<template>
  <section>
    <div
      class="alert animated tada"
      :class="tipo"
    >
      {{message}}
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'AlertsComponent',
  props: ['error', 'code', 'message'],
  data () {
    return {
      tipo: 'alert-success'
    }
  },
  mounted () {
    switch (this.code) {
      case 'auth/user-not-found':
        this.tipo = 'alert-danger'
        break
      case 'auth/invalid-email':
        this.tipo = 'alert-warning'
        break
      case 'auth/wrong-password':
        this.tipo = 'alert-warning'
        break
      default:
        this.tipo = 'alert-primary'
        break
    }
  }
}

</script>
<style lang="scss">
</style>
