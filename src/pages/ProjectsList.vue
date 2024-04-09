<script>

import ProjectCard from '../components/ProjectCard.vue';
import axios from "axios";

export default {
    name: "ProjectsList",
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
  
  <h1 class="text-center">Lista Progetti</h1>
  <div class="container">
    <div class="cards" v-for="element in projects" :key="element.id">
      

        <ProjectCard 
        :id="element.id" 
        :coverImage="element.cover ? element.cover : ''" 
        :title="element.title" 
        :type="element.type.name"/>
      
    </div>
    
  </div>

  <!--   -->

</template>

<style scoped>

.container{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cards{
  width: calc(100%/4 - 10px);
  text-decoration: none;
}
</style>
