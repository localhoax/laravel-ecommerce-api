import Store from './../components/Store'
import ProductDetails from './../components/ProductDetails'
import ShoppingCart from './../components/ShoppingCart'
import Login from './../components/auth/Login'
import Register from './../components/auth/Register'

export default [
    // {
    //     path: '/',
    //     name: 'store-home',
    //     component: Store
    // },
    {
        path: '/store',
        name: 'store',
        component: Store
    },
    {
        path: '/product/:id',
        component: ProductDetails,
        name: 'product'
    },
    {
        path: '/cart',
        component: ShoppingCart,
        name: 'shoppingcart'
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        onlyGuest: true
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        onlyGuest: true
    },
]