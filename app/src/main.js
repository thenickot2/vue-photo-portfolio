/* ============
 * Main File
 * ============
 *
 * Will initialize the application
 */
import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

// Import StyleSheets for Webpack to Bundle
import stylesheet from './main.scss'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active-class',
  routes: [
    { path: '/', component: require('./pages/portfolio.vue') },
    { path: '/photos/:slug', component: require('./pages/portfolio.vue') },
    { path: '/contact', component: require('./pages/contact.vue') }
  ]
})

const app = new Vue({
  router,
  ...App
}).$mount('#app')


