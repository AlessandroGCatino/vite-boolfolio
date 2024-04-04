<script>

import ProjectCard from './components/ProjectCard.vue';
import axios from "axios";

export default {
      components: {
        ProjectCard,
        axios
      },

      data() {
        return {
            projects: []
        }
      },

      methods: {
        getProjects(){
            axios.get("http://127.0.0.1:8000/api/datas")
            .then(
                res => {
                    this.projects=res.data.projects
                    console.log(this.projects)
                }
            )
        }
      },
      mounted () {
        this.getProjects();
    }
}

</script>

<template>
  
  <h1 class="text-center">Benvenuto</h1>
  <div class="container">
    <h2>I tuoi progetti</h2>
    <div class="cards">
      <ProjectCard v-for="element in projects" :key="element.id" :coverImage="element.cover" :title="element.title" :type="element.type.name"/>
    </div>
    
  </div>

</template>

<style>
.cards{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
