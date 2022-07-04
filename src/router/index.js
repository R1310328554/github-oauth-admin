// import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter,createWebHashHistory} from "vue-router";
import { createApp } from 'vue'
import ThirdPartyLogin from '../components/ThirdPartyLogin'
import Index from '../components/Index'
import Login from '../components/Login'
import UserProfile from '../components/UserProfile'
import Logout from '../components/Logout'
import Admin from '../components/Admin'

// export default new Router({ vue2 的写法
// })
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/thirdlogin',
        name: 'ThirdPartyLogin',
        component: ThirdPartyLogin
    }, {
        path: '/logout',
        name: 'Logout',
        component: Logout
    }, {
        path: '/UserProfile',
        name: 'UserProfile',
        component: UserProfile
    }, {
        path: '/admin',
        name: 'Admin',
        component: Admin
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
