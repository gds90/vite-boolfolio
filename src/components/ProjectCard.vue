<script>
import { store } from '../store.js';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
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
<div class="col-md-6 col-lg-4 col-xxl-3 my-4 mx-auto">
    <router-link :to="{name:'single-project', params:{slug:project.slug}}" class="text-decoration-none">
    <div class="card shadow h-100 ">
        <img class="rounded-top-1":src="getUrlImage()">
        <div class="card-body ">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p v-if="project.TechnologyProjects" class="card-text "><strong>Tipologia:</strong> {{project.type ? project.type.name : 'non specificato'}}</p>
            <p v-if="project.technologyconsol" class="card-text"><strong>Tecnologie:</strong>
                <span v-for="(technology, index) in project.technology" :key="index" :class="'badge rounded-pill text-bg-' + getBadgeColor(technology)" class="ms-1">
                    {{ technology.name }} 
                </span>
            </p>
        </div>
    </div>
    </router-link>
</div>
</template>
<style lang="scss">
@use 'src/style/general.scss';

.card {
    &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 210px;
    }
}
</style>