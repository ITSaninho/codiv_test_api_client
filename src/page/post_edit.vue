<template lang="html">
  <div class="post-edit">
    <div class="container">
      <div class="row">
        <h1 class="text-center">Post edit</h1>
        <p>Post edit</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'postEdit',
  data: function () {
    return {
      products: []
    }
  },
  methods: {
    loadProjects: function () {
      axios.get('http://127.0.0.1:8001/api/product').then((response) => {
        this.products = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.loadProjects()
  }
}
</script>

<style lang="css">
</style>
