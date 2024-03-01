<script>
import { store } from '../store.js';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'AppMain',
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
        <h1 class="text-center text-uppercase mt-3">Ultimi progetti</h1>
        <div class="container my-3">
            <div class="row">
                <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center ">
                    
                    <ul class="pagination">
                        <li>
                            <button :class="currentPage == 1 ? 'disabled' : ''" class="btn btn-outline-danger btn-sm btn-square mx-2" @click="getProjects(currentPage - 1)">
                                <i class="fas fa-arrow-left"></i>
                            </button>
                        </li>
                        <li>
                            <button :class="currentPage == lastPage ? 'disabled' : ''" class="btn btn-outline-danger btn-sm btn-square" @click="getProjects(currentPage + 1)">
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