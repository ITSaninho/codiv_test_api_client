<template lang="html">
  <div class="profile">
    <div class="container">
      <div class="row">
        <p>Your name: {{name}}</p>
        <p>Your email: {{email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'profile',
  computed: {
    user () {
      return authStore.state.user
    },
    name () {
      return authStore.state.name
    },
    email () {
      return authStore.state.email
    }
  },
  data: function () {
    return {
      posts: []
    }
  },
  authStore
}
</script>

<style lang="css">
  p {
    width: 100%;
  }
</style>