<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
          <a class="navbar-brand" href="">
              Welcome <span v-if='isAuthenticated'>, {{email}}</span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#da" aria-controls="da" aria-expanded="false" aria-label="a">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="da">
              <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">
                      Home
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" v-if="isAuthenticated" to="/posts">
                      Posts
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" v-if="isAuthenticated == false" to="/login">
                      Login
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" v-if="isAuthenticated == false" to="/register">
                      Sign In
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" v-if="isAuthenticated" to="/profile">
                      Profile
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" v-if="isAuthenticated" to="/logout">
                      Logout
                    </router-link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
import authStore from '@/store/auth'
export default {
  name: 'HeaderComponent',
  computed: {
    isAuthenticated () {
      return authStore.state.isAuthenticated
    },
    token () {
      return authStore.state.token
    },
    email () {
      return authStore.state.email
    },
    user () {
      return authStore.state.user
    }
  }
}
</script>

<style lang="css">
  .header {
    margin-bottom:25px;
    background-color: #d3d3d3;
    border: 1px solid #a5a5a5;
  }
</style>
