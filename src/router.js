import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppNotFound from './pages/AppNotFound.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
import TechnologyProjects from './pages/TechnologyProjects.vue';
import AppContactUs from './pages/AppContactUs.vue';
import AppThankYouPage from './pages/AppThankYouPage.vue';

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
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
        {
            path: '/technology/:slug',
            name: 'technology-projects',
            component: TechnologyProjects
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/thank-you',
            name: 'thank-you',
            component: AppThankYouPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router };