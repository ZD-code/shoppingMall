import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/ShoppingMall'
import Register from "@/components/Register";
import Test from "@/components/demo/Test";
import List from '@/components/demo/List'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'ShoppingMall',
            component: ShoppingMall
        }, {
            path: '/register',
            name: 'Register',
            component: Register
        }, { path: '/demo/test', name: 'Test', component: Test },
        { path: '/demo/list', name: 'List', component: List }
    ]
})