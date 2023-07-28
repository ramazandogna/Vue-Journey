<template>
   <form>
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
