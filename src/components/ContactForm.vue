<script>

import  axios  from 'axios';
import { store } from "../store"

    export default {
        name:"ContactForm",
        data() {
            return {
                store,
                name: "",
                email: "",
                message: "",
                errors:{},
                success: false
            }
        },
        methods: {
            sendForm() {
                
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                }

                this.errors={};

                axios.post(`${this.store.apiBaseUrl}/api/contacts`, data)
                .then( res => {
                    this.success = res.data.success
                    console.log(this.success)
                    if( !this.success ){
                        this.errors = res.data.errors
                    } else {
                        this.name = ""
                        this.email = ""
                        this.message = ""
                    }
                })
            }
        },
        mounted () {
            
        },
    }
</script>


<template>
    <div>
        <h2 class="mt-3">Contattaci</h2>

        <div class="alert alert-success" v-if="success">
            Messaggio inviato correttamente
        </div>

        <div>
            <form @submit.prevent="sendForm()">
                <div class="mb-3">
                    <input type="text" class="form-control" :class="{'is-invalid': errors?.name}"
                    name="name"
                    placeholder="Inserisci il tuo nome"
                    v-model="name">

                    <p v-for="(error, index) in errors?.name" :key="`message-errors-${index}`"
                    class="invalid-feedback">
                    {{ error }}

                    </p>
                </div>

                <div class="mb-3">
                    <input type="text" class="form-control" :class="{'is-invalid': errors?.email}"
                    name="email"
                    placeholder="Inserisci la tua mail"
                    v-model="email">

                    <p v-for="(error, index) in errors?.email" :key="`message-errors-${index}`"
                    class="invalid-feedback">
                    {{ error }}

                    </p>
                </div>

                <div class="mb-3">
                    <textarea class="form-control"
                    :class="{'is-invalid': errors?.message}" name="message" id="message" cols="30" rows="10" v-model="message"></textarea>

                    <p v-for="(error, index) in errors?.message" :key="`message-errors-${index}`"
                    class="invalid-feedback">
                    {{ error }}

                    </p>
                </div>

                <button class="btn btn-primary" type="submit">Invia</button>
            </form>
        </div>
    </div>
</template>


<style scoped>

</style>