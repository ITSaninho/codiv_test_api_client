<template>
  <div class="login-form">
    <p class="text-center">Login Form</p>
    <div class="card-body">
      <div class="form-group">
        <label for="usr">Email:</label>
        <input type="text" class="form-control" v-model='email' id="usr" required>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" v-model='password' id="pwd" required>
      </div>
      <div lass="form-group">
        <button class="btn btn-primary" @click.prevent="login(email, password)">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'LoginFormComponent',
  data: function () {
    return {
      email: '',
      password: '',
      token: ''
    }
  },
  methods: {
    login: function (email, password) {
      axios.post('http://127.0.0.1:8001/api/login', {
        email: this.email,
        password: this.password
      })
      .then((response) => {
        authStore.dispatch('onLogin', response.data)
        this.getUser(response.data.token)
        this.$router.push('/')
      }, (err) => {
        console.log(err)
      })
    },
    getUser: function (token) {
      axios.get('http://127.0.0.1:8001/api/user', {
        params: {
          token: token
        }
      })
      .then((response) => {
        authStore.dispatch('onGetLogin', response.data)
      }, (err) => {
        console.log(err)
      })
    }
  },
  authStore
}
</script>

<style type="text/css">
  .login-form {
    width: 100%;
  }
</style>