<template>
   <button @click="clean">Temizle</button>
</template>

<script>
export default {
   methods: {
      clean() {
         this.$emit('clean');
      },
   },
};
</script>

<style lang="scss" scoped></style>
