<template>
   <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
   </nav>
   <router-view />
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   max-width: 600px;
   margin: 0 auto;
   text-align: center;
   color: #2c3e50;
}

body {
   background-color: #f2f2f2;
}

nav {
   padding: 30px;
}

nav a {
   font-weight: bold;
   color: #2c3e50;
}

nav a.router-link-exact-active {
   color: #42b983;
}
</style>
