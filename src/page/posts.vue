<template>
  <div class="posts">
    <div class="container">
      <div class="row">
        <p class="text-center mt-2 mr-3">Posts</p>
        <router-link class="btn btn-success mb-3" to="/post/create">
          Create
        </router-link>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">text</th>
              <th scope="col">data</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts">
              <th scope="row">{{post.id}}</th>
              <td>{{post.name}}</td>
              <td>{{post.text}}</td>
              <td>{{post.created_at}}</td>
              <td>
                <i class="fa fa-edit">
                  <router-link class="nav-link" to="{ name: 'PostEdit', params: { id: post.id }}">
                  </router-link>
                </i> 
                <i class="fa fa-trash" @click.prevent="postDestroy(post.id)"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import authStore from '@/store/auth.js'

export default {
  name: 'posts',
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    loadProjects: function (token) {
      axios.get('http://127.0.0.1:8001/api/posts', {
        params: {
          token: token
        }
      })
      .then((response) => {
        this.posts = response.data.data
      }, (err) => {
        console.log(err)
      })
    },
    postDestroy: function (id) {
      axios.post('http://127.0.0.1:8001/api/posts/', {
        params: {
          _method: 'DELETE',
          id: id,
          token: authStore.state.token
        }
      })
      .then((response) => {
        this.posts = response.data.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadProjects(authStore.state.token)
  },
  authStore
}
</script>

<style type="text/css">
  i:hover {
    cursor: pointer;
  }
</style>