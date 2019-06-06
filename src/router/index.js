import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import LoginPage from '@/page/login'
import RegisterPage from '@/page/register'
import ProfilePage from '@/page/profile'
import LogoutPage from '@/page/logout'
import Posts from '@/page/posts'
import PostCreate from '@/page/post_create'
import PostShow from '@/page/post_show'
import PostEdit from '@/page/post_edit'
import authStore from '@/store/auth'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!authStore.getters.getIsAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (authStore.getters.getIsAuthenticated) {
    next()
    return
  }
  next('/login')
}

// application routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/logout',
      name: 'LogoutPage',
      component: LogoutPage,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/post/create',
      name: 'PostCreate',
      component: PostCreate,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/post/:id/show',
      name: 'PostShow',
      component: PostShow,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/post/:id/edit',
      name: 'PostEdit',
      component: PostEdit
    }
  ]
})