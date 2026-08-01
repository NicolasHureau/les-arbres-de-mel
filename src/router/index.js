import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomePage from '../pages/HomePage.vue'
import CreationDetail from '../pages/CreationDetail.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage
            },
            {
                path: '/creations/:slug',
                name: 'creation-detail',
                component: CreationDetail
            }
        ]
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior(to, from, savedPosition) {
        // Retour à la position précédente avec les boutons navigateur
        if (savedPosition) {
            return savedPosition
        }

        // Gestion des ancres (#creations, #contact, etc.)
        if (to.hash) {
            return {
                el: to.hash,
                top: 100,
                behavior: 'smooth'
            }
        }

        // Nouvelle page : retour en haut
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})