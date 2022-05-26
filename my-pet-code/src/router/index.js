import {createRouter, createWebHistory} from 'vue-router';

import RegisterUser from '@/views/register-user/RegisterUser'
import MainHome from '@/views/home/MainHome'

const routes = [
    {
        path: '/',
        name: 'MainHome',
        component: MainHome
    },
    {
        path: '/register/user',
        name: RegisterUser,
        component: RegisterUser
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;