import Vue from 'vue'
import VueX from 'vuex'
import actions from './actions'

import auth from './modules/auth'
import cart from './modules/cart'
import message from './modules/message'
import product from './modules/product'


Vue.use(VueX)
const store = new VueX.Store({
    actions,
    modules: {
        auth,
        cart,
        product,
        message
    }
})

export default store