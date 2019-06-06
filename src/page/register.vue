<template lang="html">
  <div class="register">
    <div class="container">
      <div class="row">
        <RegisterFormComponent />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterFormComponent from './../components/RegisterFormComponent.vue'
export default {
  name: 'registerPage',
  components: {
    RegisterFormComponent
  }
}
</script>

<style lang="css">
</style>
