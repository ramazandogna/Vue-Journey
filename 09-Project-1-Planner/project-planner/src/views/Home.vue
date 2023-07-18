<template>
   <div class="home">
      <div v-if="projects.length">
         <div
            v-for="project in projects"
            :key="project.id"
         >
            <SingleProject
               :project="project"
               @delete="handleDelete"
            />
         </div>
      </div>
   </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue';

export default {
   name: 'HomeView',
   components: { SingleProject },
   data() {
      return {
         projects: [],
      };
   },
   methods: {
      handleDelete(id) {
         this.projects = this.projects.filter((project) => project.id !== id);
      },
   },
   mounted() {
      fetch('http://localhost:3000/projects')
         .then((resp) => resp.json())
         .then((data) => (this.projects = data))
         .catch((err) => console.log(err));
   },
};
</script>
