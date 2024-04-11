<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "ProjectCard",

    props:{
        id: Number,
        coverImage: String,
        title: String,
        type: String
    },

    data() {
        return {
            store
        }
    },
    methods: {
        getSingleProject(){
            axios.get(`${store.apiBaseUrl}/api/datas/${this.id}`)
            .then(res=>{
                if(res.data.success){
                    this.project = res.data.project
                } else {
                    // redirect 404
                }
            })
        }
    },
    mounted () {
        this.getSingleProject();
    },
    

}

</script>

<template>
    <router-link :to="{name: 'single-project', params: {id: this.id}}">
        <div class="card">
            <img v-if="this.coverImage" class="card-img-top" :src="`${store.apiBaseUrl}/storage/${this.coverImage}`" alt="Title" />
            <div class="card-body">
                <h4 class="card-title text-capitalize">{{this.title}}</h4>
                <p class="card-text">{{this.type}}</p>
            </div>
        </div>
    </router-link>
    
  
</template>

<style scoped>


</style>
