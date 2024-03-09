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
            content: ''
        }
    },
    methods: {
        SendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                content: this.content
            }

            axios.post(`${this.store.baseUrl}/api/contacts`, data)
            .then(response => {
                console.log(response.data);
                console.log('ok');
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
                    <input type="text" id="name" v-model="name" class="form-control" placeholder="Inserisci il tuo nome" required/>
                </div>
                <div class="col-6 my-3">
                    <label for="surname" class="control-label">Cognome: </label>
                    <input type="text" id="surname" v-model="surname" class="form-control" placeholder="Inserisci il tuo cognome" required/>
                </div>
                <div class="col-6">
                    <label for="email" class="control-label">Indirizzo e-mail: </label>
                    <input type="text" id="email" v-model="email" class="form-control" placeholder="Inserisci la tua e-mail" required/>
                </div>
                <div class="col-6">
                    <label for="phone" class="control-label">Telefono: </label>
                    <input type="text" id="phone" v-model="phone" class="form-control" placeholder="Inserisci il tuo numero" required/>
                </div>
                <div class="col-12 my-3">
                    <label for="content" class="control-label">Messaggio: </label>
                    <textarea name="content" id="content" rows="4" class="form-control" v-model="content" placeholder="Inserisci il tuo messaggio"></textarea>
                </div>
                <div class="col-12 mt-2">
                    <button  type="submit" class="btn btn-primary float-right">Invia</button>
                </div> 
            </div>
        </form>
    </div>
</template>
<style lang="">
    
</style>