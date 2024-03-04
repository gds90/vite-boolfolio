<script>
import { store } from '../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row pt-1">
                <div class="col-4">
                    <a href="/" class="text-decoration-none text-danger
                    "><h4>BoolFoglio</h4></a>
                </div>
                <div class="col-8">
                    <div class="float-end">
                        <ul class="list-unstyled d-flex align-items-center ">
                            <li v-for="(item, index) in store.menuItems" :key="index" class="me-3 text-uppercase ">
                                <router-link :to="{name: item.name}" class="nav-link">
                                    {{item.label}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
header {
    height: 80px;
    padding: 20px 0px;
    border-bottom: 2px solid black;

    ul {
        li {
            a {
                text-decoration: none;

            }

        }
    }
}
</style>