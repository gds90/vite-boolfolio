<script>
import AppContactForm from '../components/AppContactForm.vue';

export default {
    name: 'AppContactUs',
    components: {
        AppContactForm
    },
    data() {
        return {
           
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-6 offset-md-3 my-5">
                <!-- Company infos -->
                <h1 class="mt-5">Contattaci</h1>
                <p>Benvenuti nel nostro modulo di contatto. Se avete domande, commenti o richieste, non esitate a contattarci compilando il modulo sottostante. Saremo lieti di rispondervi nel più breve tempo possibile. Grazie per il vostro interesse!</p>
                <AppContactForm/>
            </div>
            
        </div>
    </div>
</template>
<style lang="">
    
</style>