<template>
  <nav class="nav has-shadow" >
    <div class="nav">
      <router-link class="nav-item is-brand" to="/">
        Home
      </router-link>
      <router-link class="nav-item is-tab" to="/posts">
        Posts
      </router-link>
      <router-link class="nav-item is-tab" v-if="isAuthenticated == false" to="/login">
        Login
      </router-link>
      <router-link class="nav-item is-tab" v-if="isAuthenticated == false"" to="/register">
        Sign In
      </router-link>
      <router-link class="nav-item is-tab" v-if="isAuthenticated" to="/profile">
        Profile
      </router-link>
      <router-link class="nav-item is-tab" v-if="isAuthenticated" to="/logout">
        Logout
      </router-link>
    </div>
  </nav>
</template>

<script>
import authStore from '@/store/auth.js'
export default {
  name: 'MenuComponent',
  authStore,
  computed: {
    isAuthenticated () {
      return authStore.getters.getIsAuthenticated
    }
  }
}
</script>

<style lang="css">
  
</style>
