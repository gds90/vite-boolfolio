<script>
import { store } from '../store.js';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import AppLoader from '../components/AppLoader.vue'
export default {
    name: 'TechnologyProjects',
    components: {
        ProjectCard,
        AppLoader
    },
    data() {
        return {
            store,
            projects: [],
            technologies: [],
            currentPage: 1,
            lastPage: null,
            success: false
        }
    },
    created() {
        this.getProjects();
        this.getTechnologies();
    },
    methods: {
        getProjects(page_num) {
            axios.get(`${this.store.baseUrl}/api/projects/technology/${this.$route.params.slug}`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                setTimeout(() => {
                    if (response.data.success) {
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page;
                        this.success = response.data.success;
                    }
                    else {
                        this.$router.push({ name: 'not-found' })
                    }
                }, 1000);
                this.success = false
            })
        },
        getTechnologies() {
            axios.get(`${this.store.baseUrl}/api/technologies`)
                .then((response) => {
                    this.technologies = response.data.results;
                })
        },
        getTechnologyTitleBySlug(slug) {
            let title = '';
            this.technologies.forEach(technology => {
                if (technology.slug === slug) {
                    title = technology.name;
                }
            });
            return title;
        }
    },
}
</script>
<template lang="">
    <main class="pt-4">
        <div v-if="!success" class="centered-loader">
            <AppLoader />
        </div>
        <!-- Content -->
        <div v-else class="container-fluid mt-5 bg-body-secondary p-5">
            <h6 class="text-center ">Progetti per la tecnologia</h6>
            <h1 class="text-center text-uppercase ">{{getTechnologyTitleBySlug($route.params.slug)}}</h1>
            <h6 class="text-center text-secondary ">(clicca su un progetto per mostrare i dettagli)</h6>
            <!-- Project cards -->
            <div class="row mt-3">
                <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            </div>
            <div class="row">
                <!-- Pagination -->
                <div class="col-12 d-flex justify-content-center ">
                    <ul class="pagination my-2">
                        <li>
                            <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-outline-secondary btn-sm btn-square mx-2" @click="getProjects(currentPage - 1)">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                        </li>
                        <li>
                            <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-outline-secondary btn-sm btn-square" @click="getProjects(currentPage + 1)">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="text-center">
                <!-- Router link to Projects list -->
                <router-link to="/projects" class="btn btn-lg btn-outline-secondary text-uppercase m-4">Torna alla lista dei progetti</router-link>
            </div>
        </div>
    </main>
</template>
<style lang="">
    
</style>