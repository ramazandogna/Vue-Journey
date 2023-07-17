<template>
   <h2>{{ titleText }}</h2>
</template>

<script>
export default {
   props: ['titleText'],
   data() {
      return {};
   },
};
</script>

<style scoped>
h2 {
   color: tomato;
}
</style>
