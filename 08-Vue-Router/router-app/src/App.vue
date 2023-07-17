<template>
   <nav>
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'students' }">Students</router-link>
   </nav>
   <div>
      <div
         class="anasayfadiv"
         @click="anasayfa"
      >
         Anasayfa
      </div>
      <span @click="ileri">İleri</span>
      <span @click="geri">Geri</span>
   </div>
   <router-view />
</template>

<script>
export default {
   methods: {
      anasayfa() {
         this.$router.push({ name: 'home' });
      },
      geri() {
         this.$router.go(-1);
      },
      ileri() {
         this.$router.go(1);
      },
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
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

span {
   padding: 0 0.5rem;
   cursor: pointer;
}

.anasayfadiv {
   cursor: pointer;
}
</style>
