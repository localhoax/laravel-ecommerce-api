import api from './../api'
import { ref, firebaseAuth } from './../config/firebase.config'
const updateCart = ({ commit }, { item, quantity, isAdd }) => {
    commit('UPDATE_CART', { item, quantity, isAdd })
    if (isAdd) {
        let msg_obj = {
            message: `Added ${item.title} to the cart successfully`,
            messageClass: "success",
            autoClose: true
        }
        commit('ADD_MESSAGE', msg_obj)
    }
}
const removeItemInCart = ({ commit }, { item }) => {
    commit('REMOVE_CART_ITEM', { item })
}
const registerByEmail = ( _, data) => {
    return firebaseAuth().createUserWithEmailAndPassword(data.email, data.password)
}
const logout = ({ commit }) => {
    console.log('in logout')
    commit('SET_CART', [])
    return firebaseAuth().signOut()
}
const loginWithEmail = (_, data) => {
    return firebaseAuth().signInWithEmailAndPassword(data.email, data.password)
}
const listenToProductList = async ({ commit }) => {
    // let users = await api.get('/api/products')
    // console.log(users.data)
    let products = await api.get('/api/products')
    let formattedProducts = []
    products.data.forEach(prod => {
        // Verify or format
        formattedProducts.push(prod)
    })
    commit('UPDATE_PRODUCT_LIST', formattedProducts)
}
const listenToCategoryList = async ({ commit }, category) => {
    let products;
    if (category == 'All'){
        products = await api.get('/api/products')
    } else {
        products = await api.get('/api/products/category/'+category)
    }
    let formattedProducts = []
    products.data.forEach(prod => {
        // Verify or format
        formattedProducts.push(prod)
    })
    commit('UPDATE_PRODUCT_LIST', formattedProducts)
}

const getShoppingCart = ({ commit }, { uid, currentCart }) => {
    if (uid) {
        return ref.child("cart/" + uid).once('value').then(cart => {
            if (cart.val() && (!currentCart || currentCart.length == 0)) {
                commit('SET_CART', cart.val())
            }
        })
    } else {
        // User not logged in.
    }
}
const saveShoppingCart = (_, { uid, cartItemList }) => {
    return ref.child('cart/' + uid).set(cartItemList)
}
const saveToTransaction = (_, { uid, cartItemList }) => {
    let newTransactionKey = ref.child("transactions").push().key
    var newTransaction = {}
    newTransaction['/transaction/' + uid + '/' + newTransactionKey] = cartItemList
    return ref.update(newTransaction)
}
export default {
    updateCart,
    removeItemInCart,
    registerByEmail,
    logout,
    loginWithEmail,
    listenToProductList,
    listenToCategoryList,
    getShoppingCart,
    saveShoppingCart,
    saveToTransaction
}