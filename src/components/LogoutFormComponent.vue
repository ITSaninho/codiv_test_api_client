<template>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'LogoutFormComponent',
  methods: {
    logout: function (token) {
      axios.get('http://127.0.0.1:8001/api/logout', {
        params: {
          token: token
        }
      })
      .then((response) => {
        authStore.dispatch('onLogout')
        this.$router.push('/')
      }, () => {
        authStore.dispatch('onLogout')
        this.$router.push('/')
      })
    }
  },
  beforeMount () {
    this.logout(authStore.state.token)
  },
  authStore
}
</script>

<style lang="css">
</style>
