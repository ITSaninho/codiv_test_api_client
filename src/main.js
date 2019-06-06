// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import HeaderComponent from './components/HeaderComponent'
import MenuComponent from './components/MenuComponent'
import FooterComponent from './components/FooterComponent'
import authStore from './store/auth'
import router from './router'
 
Vue.use(BootstrapVue)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
  <div>
    <HeaderComponent/>
    <section class="section">
      <div class="container is-fluid">
        <router-view/>
      </div>
    </section>
  </div>
  `,
  components: {
    HeaderComponent,
    authStore
  },
  computed: {
    token () {
      return authStore.state.token
    }
  }
})
