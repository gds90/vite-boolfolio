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
            currentPage: 1,
            lastPage: null
        }
    },
    created() {
        this.getProjects();
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
        }
    },
}
</script>
<template lang="">
    <main>
        <h1 class="text-center text-uppercase ">Ultimi progetti</h1>
        <div class="container-fluid my-3 bg-body-secondary p-4">
            <div class="row mt-3">
                <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            </div>
            <div class="row">
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