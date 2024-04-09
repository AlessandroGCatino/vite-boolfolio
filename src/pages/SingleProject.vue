<script>
    import axios from 'axios';

    export default {
        name: "SingleProject",
        data() {
            return {
                axios,
                project: []
            }
        },
        methods: {
            getSingleProject(){
                
                axios.get(`http://127.0.0.1:8000/api/datas/${this.$route.params.id}`)
                .then(res=>{                   
                this.project = res.data.project
                console.log(this.project)
                console.log(this.project.type.name)
                })
            }
        },
        mounted(){
            this.getSingleProject();
        },
    }
</script>

<template>
    <div class="container">
        <h1 class="text-center">{{ project?.title }}</h1>

        <figure class="text-center">
            <img :src="`http://127.0.0.1:8000/storage/${project?.cover}`" alt="">
        </figure>

        <h4>Descrizione</h4>
        <p>{{ project?.description }}</p>

        
        <div class="d-flex">
            <div class="col-6 text-center">
                <h6>Tipologia</h6>
                {{ project.type?.name }}
            </div>
            <div class="col-6 text-center">
                <h6>Tecnologie</h6>
                <p v-for="(element, index) in project?.technologies" :key="index">
                    {{element.name}}
                </p>
            </div>
        </div>

    </div>
</template>


<style>



</style>