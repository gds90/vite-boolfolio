<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null
        }
    },
    created() {
        this.getProjectData();
    },
    methods: {
        getProjectData() {
            axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                if (response.data.success) {
                    this.project = response.data.project;
                    this.success = response.data.success;
                }
                else {
                    this.$router.push({ name: 'not-found' })
                }
            });
        },
        getUrlImage() {
            let image;
            if (this.project.cover_image != null) {
                image = 'storage/' + this.project.cover_image;
            }
            else {
                image = 'img/test-img.jpg';
            }
            return `${this.store.baseUrl}/${image}`;
        },
        getBadgeColor(technology) {
            return technology.badge_color;
        }
    }
}
</script>
<template lang="">
    <main class="pt-4">
        <!-- Project details -->
        <div class="container-fluid mt-5 bg-body-secondary p-5">
            <div class="row">
                <!-- Title -->
                <div class="col-12">
                    <h1 class="text-center text-uppercase ">{{project.title}}</h1>
                </div>
                <div class="row my-4">
                    <!-- Cover image -->
                    <div class="col-5">
                        <img class="project-image w-100 rounded shadow" :src="getUrlImage()">
                    </div>
                    <!-- Infos -->
                    <div class="col-7 ps-3">
                        <p class="  "><strong>Descrizione:</strong> {{project.description}}</p>
                        <p class="  "><strong>Tipologia progetto:</strong> {{project.type ? project.type.name : 'non specificato'}}</p>
                        <p class=" "><strong>Tecnologie utilizzate:</strong>
                        <span v-for="(technology, index) in project.technology" :key="index" :class="'badge rounded-pill text-bg-' + getBadgeColor(technology)" class="ms-1">
                        {{ technology.name }} 
                        </span>
                        </p>
                        <p class="  "><strong>Link:</strong> {{project.link}}</p>
                    </div>
                </div>
                <div class="text-center">
                    <!-- Router link to Projects list -->
                    <router-link to="/projects" class="btn btn-lg btn-outline-secondary text-uppercase m-4">Torna alla lista dei progetti</router-link>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="">
    
</style>