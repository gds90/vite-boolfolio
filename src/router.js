import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppNotFound from './pages/AppNotFound.vue';
import ProjectsList from './pages/ProjectsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };