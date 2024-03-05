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
        <div class="content">
          <div class="container py-4">
              <div class="row">
                  <div class="col-lg-8 col-md-12">
                      <img src="/img/team.jpg" alt="Team" class="w-100 rounded-3 shadow ">
                  </div>
                  <div class="col-lg-4 col-md-12 pt-5">
                      <h2 class="text-secondary"><strong>Massimizza l'efficienza del tuo team con il nuovo gestionale per
                              progetti
                              informatici</strong></h2>
                      <p class="fs-5">Ottimizza la pianificazione, la collaborazione e il monitoraggio dei progetti
                          informatici con il
                          nostro innovativo software gestionale. Con funzionalità intuitive e strumenti avanzati, potrai
                          gestire risorse, tenere traccia dei progressi e garantire la tempestiva consegna dei progetti, il
                          tutto con un'unica piattaforma integrata.</p>
                  </div>
              </div>
              <div class="row mt-5">
                  <div class="col-lg-4 col-md-12 pt-5">
                      <h2 class="text-secondary"><strong>Trasforma la tua visione in realizzazione con il nostro gestionale per
                              progetti
                              informatici</strong></h2>
                      <p class="fs-5">Dall'ideazione alla consegna, il nostro gestionale per progetti informatici ti offre
                          il supporto necessario per trasformare le tue idee in successi tangibili. Grazie a strumenti
                          sofisticati di gestione delle attività e di collaborazione, potrai coordinare il lavoro del tuo team
                          in modo efficiente, garantendo risultati impeccabili in ogni fase del ciclo di vita del progetto.
                      </p>
                  </div>
                  <div class="col-lg-8 col-md-12">
                      <img src="/img/developer.jpg" alt="Developer" class="w-100 rounded-3 shadow">
                  </div>
              </div>
          </div>
        </div>
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