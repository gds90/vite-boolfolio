<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            content: '',
            loading: false,
            errors: {}
        }
    },
    methods: {
        SendForm(){
            this.loading = true;

            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data)
            .then(response => {
                console.log('Inviata');
                if (response.data.success){
                // Form field empty
                this.name = '';
                this.surname = '';
                this.email = '';
                this.phone = '';
                this.content = '';
                }

                if (response.data.error) {
                    console.log('errore');
                    this.errors = response.data.error;
                }
                else {
                    this.errors = {};
                }
            this.loading = false;
            });
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <form @submit.prevent="SendForm()" method="post">
            <div class="row">
                <div class="col-6 my-3">
                    <label for="surname" class="control-label">Nome: </label>
                    <input type="text" id="name" v-model="name" class="form-control" placeholder="Inserisci il tuo nome" :class="errors.name ? 'is-invalid' : ''" required/>
                    <div v-if="errors && errors.name" class="mt-1">
                        <p v-for="(error, index) in errors.name" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-6 my-3">
                    <label for="surname" class="control-label">Cognome: </label>
                    <input type="text" id="surname" v-model="surname" class="form-control" placeholder="Inserisci il tuo cognome" :class="errors.surname ? 'is-invalid' : ''"  required/>
                    <div v-if="errors && errors.surname" class="mt-1">
                        <p v-for="(error, index) in errors.surname" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-6">
                    <label for="email" class="control-label">Indirizzo e-mail: </label>
                    <input type="text" id="email" v-model="email" class="form-control" placeholder="Inserisci la tua e-mail" :class="errors.email ? 'is-invalid' : ''" required/>
                    <div v-if="errors && errors.email" class="mt-1">
                        <p v-for="(error, index) in errors.email" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-6">
                    <label for="phone" class="control-label">Telefono: </label>
                    <input type="text" id="phone" v-model="phone" class="form-control" placeholder="Inserisci il tuo numero" :class="errors.phone ? 'is-invalid' : ''" required/>
                    <div v-if="errors && errors.phone">
                        <p v-for="(error, index) in errors.phone" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-12 my-3">
                    <label for="content" class="control-label">Messaggio: </label>
                    <textarea name="content" id="content" rows="4" class="form-control" v-model="content" placeholder="Inserisci il tuo messaggio"  :class="errors.content ? 'is-invalid' : ''"  required></textarea>
                    <div v-if="errors && errors.content" class="mt-1">
                        <p v-for="(error, index) in errors.content" :key="`message-error-$(index)`" class="text-danger">{{ error }}</p>
                    </div>
                </div>
                <div class="col-12 mt-2">
                    <button  type="submit" class="btn btn-primary float-right" :disabled="loading">{{loading ? 'Invio in corso..' : 'Invia'}}</button>
                </div> 
            </div>
        </form>
    </div>
</template>
<style lang="">
    
</style>