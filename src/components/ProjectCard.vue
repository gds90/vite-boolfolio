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
    <div class="card shadow h-100 ">
        <img class="rounded-top-1":src="getUrlImage()">
        <div class="card-body ">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p class="card-text "><strong>Descrizione:</strong> {{project.description.substr(0,40)+"..."}}</p>
            <p class="card-text "><strong>Link:</strong> {{project.link.substr(0,30)}}</p>
            <p class="card-text "><strong>Tipologia:</strong> {{project.type ? project.type.name : 'non specificato'}}</p>
            <p class="card-text"><strong>Tecnologie:</strong>
                <span v-for="(technology, index) in project.technology" :key="index" :class="'badge rounded-pill text-bg-' + getBadgeColor(technology)" class="ms-1">
                    {{ technology.name }} 
                </span>
            </p>
        </div>
    </div>
</div>
</template>
<style lang="scss">
@use 'src/style/general.scss';

.card {

    img {
        object-fit: cover;
        width: 100%;
        height: 210px;
    }
}
</style>