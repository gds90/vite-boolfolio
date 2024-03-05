<script>
export default {

}
</script>
<template lang="">
  <!-- Jumbotron  -->
    <div class="jumbotron ">
      <img src="/public/img/jumbo_bg_logo.png" alt="">
    </div>
    <div>
      <!-- Welcome space  -->
      <div class="container-fluid py-5 bg-body-secondary">
        <h1 class="text-center">Welcome to</h1>
        <h1 class="text-center my-text-1">Boolfoglio</h1>
        <div class="home-menu text-center">
          <!-- Router link a lista Progetti -->
          <router-link to="/projects" class="btn btn-lg btn-outline-secondary text-uppercase m-4">Vai ai progetti</router-link>
        </div>
        <!-- Content -->
      </div>
    </div>
</template>
<style lang="scss">
@use '../style/partials/variables' as *;

.jumbotron {
  margin-top: 80px;

  img {
    width: 100%;
  }
}

.my-text-1 {
  font-size: $my-text-1;
}
</style>