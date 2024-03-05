<script>
import { store } from '../store.js';
export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <!-- Footer -->
<footer class="text-center text-lg-start bg-body-tertiary text-muted">
    <!-- Section: Social media -->
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Connettiti con noi sui social network:</span>
      </div>
      <!-- Left -->
  
      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="me-4 text-reset">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->
  
    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Boolfoglio S. r. l.
            </h6>
            <p>
                La società offre soluzioni gestionali per progetti informatici, ottimizzando tempi e risorse per massimizzare l'efficienza e il successo delle imprese.
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Progetti
            </h6>
                <ul class="list-unstyled ">
                    <li>
                        <router-link to="/projects" class="text-reset text-decoration-none ">Lista completa</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/html" class="text-reset text-decoration-none ">HTML</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/css" class="text-reset text-decoration-none ">CSS</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/javascript" class="text-reset text-decoration-none ">JavaScript</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/vuejs" class="text-reset text-decoration-none ">VueJs</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/php" class="text-reset text-decoration-none ">PHP</router-link>
                    </li>
                    <li>
                        <router-link to="/technology/laravel" class="text-reset text-decoration-none ">Laravel</router-link>
                    </li>
                </ul>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Link utili
            </h6>
            <p>
              <a href="#!" class="text-reset  text-decoration-none">Chi siamo</a>
            </p>
            <p>
              <a href="#!" class="text-reset  text-decoration-none">I nostri servizi</a>
            </p>
            <p>
              <a href="#!" class="text-reset  text-decoration-none">Abbonamenti</a>
            </p>
            <p>
              <a href="#!" class="text-reset  text-decoration-none">FAQ</a>
            </p>
          </div>
          <!-- Grid column -->
  
          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contatti</h6>
            <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              info@boolfoglio.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 21 274 367 81</p>
            <p><i class="fas fa-print me-3"></i> + 21 274 367 29</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2024 Copyright:
      <a class="text-reset fw-bold" href="https://mdbootstrap.com/">Giuseppe de Simone</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>
<style lang="">
    
</style>