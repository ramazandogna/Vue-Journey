<template>
   <div
      class="project"
      :class="{ complete: project.complete }"
   >
      <div class="actions">
         <h3
            @click="showDetails = !showDetails"
            :class="{ completeh3: project.complete }"
         >
            {{ project.title }}
         </h3>
         <div class="icons">
            <router-link
               :to="{ name: 'EditProject', params: { id: project.id } }"
               ><span
                  @click="editProject"
                  class="material-icons"
               >
                  edit
               </span></router-link
            >
            <span
               @click="toggleComplete"
               class="material-icons tick"
            >
               check
            </span>

            <span
               @click="deleteProject"
               class="material-icons"
            >
               delete
            </span>
         </div>
      </div>
      <div
         v-if="showDetails"
         class="details"
      >
         <p>{{ project.details }}</p>
      </div>
   </div>
</template>

<script>
export default {
   props: ['project'],
   data() {
      return {
         showDetails: false,
         uri: 'http://localhost:3000/projects/' + this.project.id,
      };
   },
   methods: {
      deleteProject() {
         fetch(this.uri, { method: 'DELETE' })
            .then(() => this.$emit('delete', this.project.id))
            .catch((err) => console.log(err));
      },
      toggleComplete() {
         fetch(this.uri, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ complete: !this.project.complete }),
         })
            .then(() => this.$emit('complete', this.project.id))
            .catch((err) => console.log(err));
      },
   },
};
</script>

<style scoped>
.project {
   margin: 20px auto;
   background-color: #fff;
   padding: 10px 20px;
   border-radius: 5px;
   box-shadow: 1px 2px 3p rgba(0, 0, 0, 0.05);
   border-left: 4px solid turquoise;
}

h3 {
   cursor: pointer;
}

.actions {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.material-icons {
   font-size: 24px;
   margin-left: 10px;
   color: rgba(64, 224, 208, 0.5);
   cursor: pointer;
   font-weight: 500;
   transition: all 0.3s;
}

.material-icons:hover {
   color: rgba(64, 224, 208, 1);
}

.project.complete {
   border-left: 4px solid #e90074;
}

.project.complete .tick {
   color: #e90074;
}

.completeh3 {
   text-decoration: line-through;
}

p {
   text-align: left;
}
</style>
