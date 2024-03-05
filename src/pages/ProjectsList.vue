<script>
import { store } from '../store.js';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsList',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            technologies: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects();
        this.getTechnologies();
    },
    methods: {
        getProjects(page_num) {
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: page_num
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        },
        getTechnologies() {
            axios.get(`${this.store.baseUrl}/api/technologies`)
                .then((response) => {
                    this.technologies = response.data.results;
                })
        },
        getBadgeColor(technology) {
            return technology.badge_color;
        }
    },
}
</script>
<template lang="">
    <main class="pt-4">
        <!-- Content  -->
        <div class="container-fluid mt-5 bg-body-secondary p-5">
            <h1 class="text-center text-uppercase ">Tutti i progetti</h1>
            <h6 class="text-center text-secondary ">(clicca su un progetto per mostrare i dettagli)</h6>
            <div class="row">
                <!-- Technology Router link -->
                <div class="col-12 mt-4">
                    Mostra progetti per tecnologia: 
                    <router-link :to="{name:'technology-projects', params: {slug: technology.slug}}" v-for="(technology, index) in technologies" :key="index" :class="'badge rounded-pill text-bg-' + getBadgeColor(technology)" class="text-decoration-none ms-1">
                        <span>
                            {{ technology.name }} 
                        </span>
                    </router-link>
                </div>
            </div>
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
        </div>
        
    </main>
</template>
<style lang="">
    
</style>