import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})