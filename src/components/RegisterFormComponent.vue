<template>
  <div class="register-form">
		<p class="text-center mytitle">Registration Form</p>
    <div class="card-body">
  		<div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model='name' id="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="text" class="form-control" v-model='email' id="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="text" class="form-control" v-model='password' id="password" required>
      </div>
       <div lass="form-group">
        <button class="btn btn-primary" @click.prevent="register">Register</button>
      </div>
      <p>{{validationErrors}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'RegisterFormComponent',
  data: function () {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    register: function () {
      axios.post('http://127.0.0.1:8001/api/register', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      .then((response) => {
        authStore.dispatch('onRegister', response.data)
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
  computed: {
    token () {
      return authStore.state.token
    }
  },
  authStore
}
</script>

<style lang="css">
  .register-form {
    width: 100%;
  }
</style>
