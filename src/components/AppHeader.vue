<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <h4>BoolFoglio</h4>
                </div>
                <div class="col-8">
                    <div class="float-end">
                        <ul class="list-unstyled d-flex">
                            <li class="mx-3">
                                <a href="#">Home</a>
                            </li>
                            <li class="mx-3">
                                <a href="#">Progetti</a>
                            </li>
                            <li class="mx-3">
                                <a href="#">Tecnologie</a>
                            </li>
                            <li class="mx-3">
                                <a href="#">Contatti</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
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