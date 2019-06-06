<template lang="html">
  <div class="post-create">
    <div class="container">
      <div class="row">
        <div class="card-body">
          <p class="text-center">Post create</p>
          <div class="form-group">
            <label for="usr">Name:</label>
            <input type="text" class="form-control" v-model='name' id="name" required>
          </div>
          <div class="form-group">
            <label for="pwd">Text:</label>
            <textarea class="form-control" v-model='text' id="text" required></textarea>
          </div>
          <div lass="form-group">
            <button @click.prevent="postStore()">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'postCreate',
  data: function () {
    return {
      name: '',
      text: '',
      token: ''
    }
  },
  methods: {
    postStore: function () {
      axios.post('http://127.0.0.1:8001/api/posts', {
        name: this.name,
        text: this.text,
        token: authStore.state.token
      })
      .then((response) => {
        this.$router.push('/posts')
      }, (err) => {
        console.log(err)
      })
    }
  },
  authStore
}
</script>

<style lang="css">
</style>
