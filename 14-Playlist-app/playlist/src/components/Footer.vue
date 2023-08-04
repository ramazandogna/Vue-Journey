<template>
   <div class="container">
      <div class="wrapper">
         <div>© 2023 Created by <span class="footer-name">Ramazan Doğan</span></div>
      </div>
   </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
   height: 8vh;
   width: 100%;
   background: #f5f3f3;
   display: flex;
   justify-content: center;
   align-items: center;
}
.footer-name {
   color: #ea5154;
   transition: all 0.7s ease-in-out;
   border-bottom: 2px solid rgba(234, 81, 84, 0);
   transform: translate(0);
   display: inline-block;
}
.container:hover .footer-name {
   color: var(--warning);
   border-bottom: 2px solid rgba(234, 81, 84, 1);
   transform: translateX(5px);
   transition: all 0.7s ease-in-out;
}
</style>
