<template lang="html">
  <div class="logout">
    <div class="container">
      <div class="register-top heading">
        <h2>logout</h2>
      </div>
      <LogoutFormComponent />
    </div>
  </div>
</template>

<script>
import LogoutFormComponent from './../components/LogoutFormComponent.vue'

export default {
  name: 'logoutPage',
  components: {
    LogoutFormComponent
  }
}
</script>

<style lang="css">
</style>
