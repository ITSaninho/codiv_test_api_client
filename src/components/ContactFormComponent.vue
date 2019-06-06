<template>
  <div class="contact_form">
      <p class="text-center">Contact Form</p>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model='name' id="name" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="password" class="form-control" v-model='phone' id="phone" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="password" class="form-control" v-model='email' id="email" required>
      </div>
      <div lass="form-group">
        <button @click.prevent="">Send</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ContactFormComponent'
}
</script>

<style type="text/css">

</style>