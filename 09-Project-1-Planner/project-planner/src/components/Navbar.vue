<template>
   <nav class="main-nav">
      <router-link :to="{ name: 'Home' }">Projects</router-link>
      <router-link :to="{ name: 'AddProject' }">Add</router-link>
   </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.main-nav {
   text-align: center;
   margin: 20px auto;
   border-bottom: 4px solid #ddd;
}

.main-nav a {
   display: inline-block;
   text-decoration: none;
   margin: 0 10px;
   color: #999;
   font-size: 18px;
}

a.router-link-active {
   border-bottom: 2px solid #e90074;
   color: #e90074;
   padding-bottom: 4px;
}
</style>
