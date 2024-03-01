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
    <div class="card my-3 ">
        <img class="rounded rounded-1":src="getUrlImage()">
        <div class="card-body ">
            <h5 class="card-title text-center my-2">{{project.title}}</h5>
            <p class="card-text "><strong>Descrizione:</strong> {{project.description.substr(0,30)+"..."}}</p>
            <p class="card-text "><strong>Link:</strong> {{project.link}}</p>
        </div>
    </div>
</div>
</template>
<style lang="scss">
@use 'src/style/general.scss'
</style>