<template lang="html">
  <div class="login">
    <div class="container">
      <div class="row">
        <LoginFormComponent />
      </div>
    </div>
  </div>
</template>

<script>
import LoginFormComponent from './../components/LoginFormComponent.vue'

export default {
  name: 'loginPage',
  components: {
    LoginFormComponent
  }
}
</script>

<style lang="css">
</style>
