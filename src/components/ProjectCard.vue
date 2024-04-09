<script>
import axios from 'axios';

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
            
        }
    },
    methods: {
        getSingleProject(){
            axios.get(`http://127.0.0.1:8000/api/datas/${this.id}`)
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
            <img v-if="this.coverImage" class="card-img-top" :src="`http://127.0.0.1:8000/storage/${this.coverImage}`" alt="Title" />
            <div class="card-body">
                <h4 class="card-title text-capitalize">{{this.title}}</h4>
                <p class="card-text">{{this.type}}</p>
            </div>
        </div>
    </router-link>
    
  
</template>

<style scoped>


</style>
