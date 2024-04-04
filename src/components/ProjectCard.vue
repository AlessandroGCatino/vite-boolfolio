<script>
import axios from 'axios';

export default {
    name: "ProjectCard",

    props:{
        coverImage: String,
        title: String
    },

    data() {
        return {

            projects: []

        }
    },
    methods: {
        
    },
    

}

</script>

<template>
    <div class="card">
        <img class="card-img-top" :src="this.coverImage" alt="Title" />
        <div class="card-body">
            <h4 class="card-title text-capitalize">{{this.title}}</h4>
            <p class="card-text">Text</p>
        </div>
    </div>    
  
</template>

<style scoped>
.card{
    width: calc(100%/4 - 10px);
}
</style>
