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
    <!-- Header -->
    <header class="fixed-top shadow">
        <div class="container">
            <div class="row pt-1">
                <!-- Left  -->
                <div class="col-4 logo">
                    <a href="/" class="text-decoration-none text-danger
                    "><img src="/public/img/logo.png" alt="Logo Boolfoglio"></a>
                </div>
                <!-- Right  -->
                <div class="col-8 pt-2">
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
    height: 90px;
    padding: 20px 0px;
    background-color: #fff;

    .logo {
        img {
            width: 150px;
        }
    }

    ul {
        li {
            a {
                text-decoration: none;

            }

        }
    }
}
</style>