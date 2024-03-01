<script>
import { store } from '../store';
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
        }
    }
}
</script>
<template lang="">
<div class="col-4">
    <div class="card my-3 shadow">
        <img class="rounded-top-1":src="getUrlImage()">
        <div class="card-body ">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p class="card-text "><strong>Descrizione:</strong> {{project.description.substr(0,40)+"..."}}</p>
            <p class="card-text "><strong>Link:</strong> {{project.link.substr(0,30)+"..."}}</p>
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