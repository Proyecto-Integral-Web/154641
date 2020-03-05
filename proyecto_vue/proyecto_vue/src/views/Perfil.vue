<template>
  <div class="perfil container">
    <div class="row">
      <div class="col">
        <PerfilForm>
        </PerfilForm>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import PerfilForm from '@/components/PerfilForm'

export default {
  name: 'perfil',
  components: {
    PerfilForm
  }
}
</script>
