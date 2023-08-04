<template>
   <Navbar />
   <div class="content">
      <router-view />
   </div>
   <Footer />
</template>

<script>
//components
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
   components: { Navbar, Footer },
};
</script>

<style>
.content {
   margin: 0 auto;
   min-height: 75vh;
   max-width: 1200px;
   padding: 0 20px;
}
</style>
