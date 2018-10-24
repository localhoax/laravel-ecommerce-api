import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import { firebaseListener } from './config/firebase.config'
import routes from './routes'
import store from './store'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/app.scss'
import 'font-awesome/css/font-awesome.css'

firebaseListener(authStatusChange)
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}

}