<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            store,
            projects: []
        }
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                this.projects = response.data.results;
                console.log(this.projects);
            })
        }
    },
}
</script>
<template lang="">
    <div>
        
    </div>
</template>
<style lang="">
    
</style>