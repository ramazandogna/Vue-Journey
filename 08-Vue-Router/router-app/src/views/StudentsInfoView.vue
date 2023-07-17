<template>
   <div>
      <h2>Öğrenci Bilgi Sayfası</h2>
      <p>Öğrenci ID: {{ id }}</p>
   </div>
</template>

<script>
export default {
   props: ['id'],
};
</script>

<style lang="scss" scoped></style>
