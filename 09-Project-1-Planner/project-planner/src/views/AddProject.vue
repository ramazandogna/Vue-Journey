<template>
   <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input
         type="text"
         v-model="title"
         required
      />
      <label>Details:</label>
      <textarea
         v-model="details"
         required
      ></textarea>
      <button>Add Project</button>
   </form>
</template>

<script>
export default {
   data() {
      return {
         title: '',
         details: '',
      };
   },
   methods: {
      handleSubmit() {
         let project = {
            title: this.title,
            details: this.details,
            complete: false,
         };
         fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(project),
         })
            .then(() => this.$router.push('/'))
            .catch((err) => console.error(err));
      },
   },
};
</script>

<style lang="css" scoped>
form {
   background-color: #fff;
   padding: 20px;
   border-radius: 10px;
}

label {
   display: block;
   color: #bbb;
   text-transform: uppercase;
   font-size: 14px;
   font-weight: bold;
   letter-spacing: 1px;
   margin: 20px 0 10px 0;
}

input {
   padding: 10px;
   border: 0;
   border-bottom: 2px solid #ddd;
   width: 100%;
   box-sizing: border-box;
}

textarea {
   border: 2px solid #ddd;
   padding: 10px;
   width: 100%;
   box-sizing: border-box;
   height: 100px;
}

form button {
   cursor: pointer;
   display: block;
   margin: 20px auto;
   background-color: #e90074;
   color: #fff;
   padding: 10px 15px;
   border: 0;
   border-radius: 7px;
   font-size: 14px;
   text-transform: uppercase;
   letter-spacing: 1px;
}
</style>
